import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("dietrich_landcare");
  switch (req.method) {
    case "GET":
      try {
        const categories = await db.collection("categories").find({}).toArray();
        res.json({ status: 200, data: categories });
        break;
      } catch (error) {
        return res.status(401).json({ status: 401, message: error });
      }
  }
}
