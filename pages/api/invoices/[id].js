import { jwtChecker } from "../../../lib/auth-checker";
import clientPromise from "../../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("dietrich_landcare");
  switch (req.method) {
    case "GET":
      const decodedToken = jwtChecker(req.headers);
    
      if (!decodedToken) {
        return res.status(401).json({ status: 401, message: "unauthorized" });
      }
      if (decodedToken._id !== req.query.id) {
        return res.status(401).json({ status: 401, message: "not authorized" });
      }

      const invoices = await db
        .collection("invoices")
        .find({ account_id: req.query.id })
        .toArray(); 

      res.json(invoices);
      break;
  }
}
