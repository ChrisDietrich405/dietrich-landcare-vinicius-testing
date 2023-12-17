import { jwtChecker } from "../../../lib/auth-checker";
import clientPromise from "../../../lib/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("dietrich_landcare");
  switch (req.method) {
    case "GET":
      const decodedToken = jwtChecker(req.headers);
      if (!decodedToken) {
        return res.status(401).json({ status: 401, message: "unauthorized" });
      }
      const invoice = await db
        .collection("invoices")
        .findOne({ _id: ObjectId(req.query.id) });
      if (invoice && decodedToken._id !== invoice.account_id) {
        return res.status(401).json({ status: 401, message: "unauthorized" });
      }
      return res.status(200).json(invoice);

    case "PUT":
      const { paymentId } = req.body;
      const collection = db.collection("invoices");
      const filter = { _id: ObjectId(req.query.id) };

      const update = {
        $set: {
          payment_id: paymentId,
        },
      };

      try {
        await collection.updateOne(filter, update);
        return res.json({ id: req.query.id, paymentId });
      } catch (err) {
        console.error("Error updating document:", err);
        throw err;
      }
  }
}
