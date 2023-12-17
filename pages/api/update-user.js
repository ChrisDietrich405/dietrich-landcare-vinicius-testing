import clientPromise from "../../lib/mongodb";

import { ObjectId } from "mongodb";
import { jwtChecker, createJWT } from "../../lib/auth-checker";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("dietrich_landcare");
  switch (req.method) {
    case "PUT":
      try {
        const { user } = req.body;
        const decodedToken = jwtChecker(req.headers);
        if (!decodedToken) {
          return res.status(401).json({ status: 401, message: "unauthorized" });
        }
        if (decodedToken._id !== user._id) {
          return res
            .status(403)
            .json({ status: 403, message: "permission denied" });
        }
        const filter = { _id: ObjectId(user._id) };
        const updatedUser = await db.collection("accounts").findOneAndUpdate(
          filter,
          {
            $set: {
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email,
              city: user.city,
              streetAddress: user.streetAddress,
            },
          },
          { returnOriginal: false }
        );
        delete updatedUser.value.password;

        createJWT(updatedUser.value, (token) => {
          res.status(200).json({
            success: true,
            token,
            status: 200,
            account: updatedUser.value,
          });
        });
      } catch (error) {
        return res.status(401).json({ status: 401, message: error });
      }

      break;
  }
}
