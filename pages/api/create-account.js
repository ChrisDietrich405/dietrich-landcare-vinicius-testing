import clientPromise from "../../lib/mongodb";
import bcrypt from "bcrypt";

import { getSalt } from "../../shared/utils";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("dietrich_landcare");
  switch (req.method) {
    case "POST":
      req.body;
      const checkAccountForDuplicate = await db
        .collection("accounts")
        .findOne({ email: req.body.email });

      let bodyObject = req.body;

      bodyObject.profile_id = 2; 
      bodyObject.password = bcrypt.hashSync(bodyObject.password, getSalt());
      let newCustomer = await db.collection("accounts").insertOne(bodyObject);
      bodyObject._id = newCustomer.insertedId;
      delete bodyObject.password;
      res.json(bodyObject);
      break;
  }
}
