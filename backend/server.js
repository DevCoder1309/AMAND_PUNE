if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.SECRET_TOKEN);
const nodemailer = require("nodemailer");
const User = require("./models/users"); 
const session = require('express-session');
const Donation = require('./models/donation');
const app = express();


app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


const secretConfig = {
    secret: "thisshouldbeabettersecret",
    resave: false,
    saveUninitialized: true,
    cookie: {
    expires: Date.now() + 10,
    maxAge: 10
  },
};


app.use(session(secretConfig));


mongoose
  .connect("mongodb://127.0.0.1:27017/amand")
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log(err);
  });



const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "akmklashnikov969@gmail.com",
    pass: process.env.PSSWD,
  },
});

app.post("/payment", async (req, res) => {
  const { membershipType, email, name, mobile } = req.body;
  const membershipPrices = {
    lifetime: 1000,
    regular: 200,
    honorary: 0,
  };

  const price = membershipPrices[membershipType];
  let productName;

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
    const product = await stripe.products.create({
      name: productName,
    });

    const priceData = await stripe.prices.create({
      product: product.id,
      unit_amount: price * 100,
      currency: "inr",
    });

    const stripeSession = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: priceData.id,
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `http://localhost:5173/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: "http://localhost:5173/cancel",
      customer_email: email,
      metadata: { membershipType, name, email, mobile },
    });
    req.session.stripeSessionId = stripeSession.id;
    req.session.user = { membershipType, name, email, mobile };

    res.json({ url: stripeSession.url });
  } catch (error) {
    console.error("Error creating payment session:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


app.get("/success", async (req, res) => {
  const session_id = req.query.session_id;

  if (!session_id) {
    return res.status(400).json({ error: "Invalid session" });
  }

  try {
 
    const session = await stripe.checkout.sessions.retrieve(session_id);

    if (!session || session.payment_status !== "paid") {
      return res.status(400).json({ error: "Payment not verified" });
    }

    const { membershipType, email, name, mobile } = session.metadata;

    const member = await User.findOne({name: name, membershipType: membershipType})
    if(!member){
      const newUser = new User({
        name,
        email,
        membershipType,
        mobile,
      });
      await newUser.save();
      const mailOptions = {
        from: "akmklashnikov969@gmail.com",
        to: email,
        subject: "Thank you for being a member at amand pune",
        text: `We have recieved your payment from your mob:${mobile} of your ${membershipType}`,
      };
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
    }
    return res.status(200).json({ message: "User saved successfully!" });
    
  } catch (error) {
    console.error("Error retrieving session:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/donate", async (req, res) => {
  const { email, name, mobile, amount, comment} = req.body;


  try {
    const product = await stripe.products.create({
      name: "Donation",
    });

    const priceData = await stripe.prices.create({
      product: product.id,
      unit_amount: amount * 100,
      currency: "inr",
    });

    const stripeSession = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: priceData.id,
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `http://localhost:5173/confirm?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: "http://localhost:5173/cancel",
      customer_email: email,
      metadata: { name, email, mobile, amount, comment },
    });
    req.session.stripeSessionId = stripeSession.id;
    req.session.user = { name, email, mobile, amount };

    res.json({ url: stripeSession.url });
  } catch (error) {
    console.error("Error creating payment session:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get('/confirm', async (req, res) => {
  const session_id = req.query.session_id;

  if (!session_id) {
    return res.status(400).json({ error: "Invalid session" });
  }

  try {
 
    const session = await stripe.checkout.sessions.retrieve(session_id);

    if (!session || session.payment_status !== "paid") {
      return res.status(400).json({ error: "Payment not verified" });
    }

    const { email, name, mobile, amount, comment } = session.metadata;
    const newUser = new Donation({
      name,
      email,
      mobile,
      amount,
      comment
    });
    await newUser.save();
    const mailOptions = {
      from: "akmklashnikov969@gmail.com",
      to: email,
      subject: "Thank you for Donating, We recieved your payment your transaction id is TS_12865re43QW",
      text: `We have recieved your payment from your mob:${mobile}`,
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  return res.status(200).json({ message: "User saved successfully!" });
    
  } catch (error) {
    console.error("Error retrieving session:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
})

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
