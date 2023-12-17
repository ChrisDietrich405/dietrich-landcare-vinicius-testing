import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import clientPromise from "../../lib/mongodb";
import { createJWT } from "../../lib/auth-checker";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("dietrich_landcare");
  switch (req.method) {
    case "POST":

      const account = await db
        .collection("accounts")
        .findOne({ email: req.body.email });

      if (account && bcrypt.compareSync(req.body.password, account.password)) {
        delete account.password;
        createJWT(account, (token) => {
          res.status(200).json({
            success: true,
            token,
            status: 200,
            account: account,
          });
        });
      } else {
        res
          .status(404)
          .json({ status: 404, message: "incorrect email or password" });
      }

      break;
  }
}
