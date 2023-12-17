import clientPromise from "../../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("dietrich_landcare");
  switch (req.method) {
    case "GET":
      const orders = await db
        .collection("orders")
        .find({ account_id: req.query.id })
        .toArray();

      res.json(orders);

      break;
  }
}
