import clientPromise from "../../lib/mongodb";
import { jwtChecker } from "../../lib/auth-checker";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("dietrich_landcare");
  switch (req.method) {
    case "GET":
      const decodedToken = jwtChecker(req.headers);
      if (!decodedToken) {
        return res.status(401).json({ status: 401, message: "unauthorized" });
      }

      const filter = req.query.filter;
      if (!filter) {
        res.status(400).json({ message: "the filter is required" });
        return;
      }
      const allAccounts = await db
        .collection("accounts")
        .find({
          profile_id: 2,
          $or: [
            { firstName: { $regex: new RegExp(filter, "i") } },
            { lastName: { $regex: new RegExp(filter, "i") } },
          ],
        })
        .toArray();
      res.json({ users: allAccounts });

  }
}
