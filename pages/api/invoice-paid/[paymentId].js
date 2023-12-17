import clientPromise from "../../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("dietrich_landcare");
  switch (req.method) {
    case "PUT":
      const collection = db.collection("invoices");
      const filter = { payment_id: req.query.paymentId };
      const update = {
        $set: {
          status: "paid",
        },
      };

      try {
        await collection.updateOne(filter, update);

        return res
          .status(200)
          .json({ payment_id: req.query.paymentId, status: "paid" });
      } catch (err) {
        console.error("Error updating document:", err);
        throw err;
      }

      break;
  }
}
