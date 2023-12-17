import clientPromise from "../../../lib/mongodb";
import { jwtChecker } from "../../../lib/auth-checker";

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
        return res.status(401).json({ status: 401, message: "unauthorized" });
      }
      try {
        let filter = { accountId: req.query.id };

        if (decodedToken.profile_id === 1) {
          filter = {} 
        }
        const schedules = await db
          .collection("schedules")
          .find(filter)
          .sort({
            date: -1,
          })
          .toArray();

        res.json(schedules);
      } catch (error) {
        return res.status(401).json({ status: 401, message: error });
      }
      break;
  }
}
