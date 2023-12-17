import Stripe from "stripe";

const calculateOrderAmount = (items) => {
  if (typeof items != "object" || !items) {
    return 0;
  }

  let amount = 0;

  items.forEach((item) => (amount += Number(item.amount)));
  return Number(amount * 100).toFixed(0);
};

export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      // Req body
      const { items } = req.body;

      if (!items || items.length <= 0) {
        console.log('Error on item calculate function.');
        return res.status(500).send({ error: true, message: "Error on getting items price." });
      }

      // Create stripe env
      const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

      // Create a PaymentIntent with the order amount and currency
      try {
        const paymentIntent = await stripe.paymentIntents.create({
          amount: calculateOrderAmount(items),
          currency: "usd",
          automatic_payment_methods: {
            enabled: true,
          },
        });

        return res.json({ clientSecret: paymentIntent.client_secret });
      } catch (err) {
        return res.status(500).json({ err: true, message: "We’ve hit a snag. Try again in a few minutes." });
      }
  }
}
