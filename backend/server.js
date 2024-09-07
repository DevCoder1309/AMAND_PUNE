if(process.env.NODE_ENV !== "production"){
    require('dotenv').config()
}

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  `${process.env.SECRET_TOKEN}`
);
const nodemailer = require("nodemailer");


var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "akmklashnikov969@gmail.com",
    pass: `${process.env.PSSWD}`,
  },
});


const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/payment", async (req, res) => {
  try {
    var mailOptions = {
      from: "akmklashnikov969@gmail.com",
      to: req.body.email,
      subject: "Thank you for contributing",
      text: "please fill the google form: <google_form_to_be_attached>",
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
    const product = await stripe.products.create({
      name: "T-Shirt",
    });

    const price = await stripe.prices.create({
      product: product.id,
      unit_amount: 100 * parseInt(req.body.amount),
      currency: "inr",
    });

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: price.id,
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `http://localhost:5173/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: "http://localhost:5173/cancel",
      customer_email: "demo@gmail.com",
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error("Error creating payment session:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/success", async (req, res) => {
  const sessionId = req.query.session_id;

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status === "paid") {
      res.send(
        "Payment was successful! Thanks for contributing. Please check your email for confirmation."
      );
    } else {
      res.send("Payment not successful. Please try again.");
    }
  } catch (error) {
    console.error("Error retrieving session:", error);
    res.status(500).send("Error verifying payment.");
  }
});


app.listen(3000, () => {
  console.log("Server running on port 3000");
});
