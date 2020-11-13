const express = require("express");
const app = express();
const PORT = 4000;
const cors = require('cors');
const stripe = require('stripe')('sk_test_51HmkvSAThxS0T2Xk7T98NkR68DCDSoKwXEM6q7OzlusiaQuQRRQ790KFk3tZ8l7FesY1Kir2Gm9UCb2jZPvIzimK00TfqeSPNu')

app.use(cors({ origin: true }));

app.get("/", (req, res) => {
    res.send("e-shop backend");
})

app.post('/payments/create', async(req, res) => {
    const total = req.query.total;

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of currencies.
        currency: 'usd',
    });

    // Ok - created
    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
