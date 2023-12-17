import clientPromise from "../../lib/mongodb";
import { jwtChecker } from "../../lib/auth-checker";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("dietrich_landcare");
  switch (req.method) {
    case "GET":
      const decodedToken = jwtChecker(req.headers);
      if (!decodedToken) {
        res.status(401).json({ status: 401, message: "unauthorized" });
      }
      if (decodedToken.profile_id !== 1) {
        res.status(401).json({ status: 401, message: "unauthorized" });
      }

      const status = req.query.status || "pending";
      let invoices = await db.collection("invoices").find({ status }).toArray();
      const accounts = await db.collection("accounts").find({}).toArray();

      invoices = invoices.map((invoice) => {
        invoice.account = accounts.find((account) => account._id.equals(ObjectId(invoice.account_id)));
        return invoice;
      });

      res.json({ status: 200, data: invoices });
      break;
  }
}
