if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.SECRET_TOKEN);
const nodemailer = require("nodemailer");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "akmklashnikov969@gmail.com",
    pass: process.env.PSSWD,
  },
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/payment", async (req, res) => {
  const { membershipType, email } = req.body;

  const membershipPrices = {
    lifetime: 1000,
    regular: 200,
    honorary: 0,
  };

  let productName;
  const price = membershipPrices[membershipType];

  switch (membershipType) {
    case "lifetime":
      productName = "Lifetime Membership";
      break;
    case "regular":
      productName = "Regular Membership";
      break;
    case "honorary":
      productName = "Honorary Membership";
      break;
    default:
      return res.status(400).send("Invalid membership type.");
  }

  try {
    // Handle honorary membership (send email only)
    if (membershipType === "honorary") {
      const mailOptions = {
        from: "akmklashnikov969@gmail.com",
        to: email,
        subject: "Thank you for your interest in Honorary Membership",
        text: "Please fill out the google form: <google_form_to_be_attached>",
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error("Error sending email:", error);
          return res.status(500).send("Error sending email.");
        } else {
          console.log("Email sent:", info.response);
          // Redirect to success page after sending the email
          return res.json({
            success: true,
            message: "Email sent successfully!",
          });
        }
      });
    } else {
      // Handle paid memberships
      const product = await stripe.products.create({
        name: productName,
      });

      const priceData = await stripe.prices.create({
        product: product.id,
        unit_amount: price * 100,
        currency: "inr",
      });

      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price: priceData.id,
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: `http://localhost:5173/success`,
        cancel_url: "http://localhost:5173/cancel",
        customer_email: email,
      });

      res.json({ url: session.url });
    }
  } catch (error) {
    console.error("Error creating payment session:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
