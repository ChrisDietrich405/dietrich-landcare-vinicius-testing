import { jwtChecker } from "../../lib/auth-checker";
import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("dietrich_landcare");
  switch (req.method) {
    case "POST":
      try {
        const decodedToken = jwtChecker(req.headers);
        if (!decodedToken) {
          res.status(401).json({ status: 401, message: "unauthorized" });
        }
        if (decodedToken.profile_id !== 1) {
          res.status(401).json({ status: 401, message: "unauthorized" });
        }
        const { user, date, amount, service, dueDate } = req.body;
        const dateObject = new Date(dueDate); 
        const due_date = dateObject
          .toLocaleDateString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })
          .replace(/\//g, "-");

        const invoice = {
          amount,
          account_id: user._id,
          due_date,
          service,
          status: "pending",
          payment_id: null,
          service_date: date,
        };
        const response = await db.collection("invoices").insertOne(invoice);

        return res.json(response);
      } catch (err) {
        console.error("Error updating document:", err);
        throw err;
      }

      break;
  }
}
