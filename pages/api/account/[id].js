import clientPromise from "../../../lib/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("dietrich_landcare");
  switch (req.method) {
    case "GET":
      const account = await db
        .collection("accounts")
        .findOne({ _id: ObjectId(req.query.id) });
      delete account.password;
      res.json(account);
      break;
  }
}
