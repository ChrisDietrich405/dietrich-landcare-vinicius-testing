import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("dietrich_landcare");

    if (req.method === "POST") {
      const bodyObject = req.body;
      if (!req.body.customer._id) {
        const existingContact = await db
          .collection("accounts")
          .findOne({ email: req.body.customer.email });
        if (existingContact) {
          await db.collection("accounts").findOneAndUpdate(
            { _id: existingContact._id },
            {
              $set: {
                firstName: req.body.customer.firstName,
                lastName: req.body.customer.lastName,
                phone: req.body.customer.phone,
              },
            },
            { returnOriginal: false }
          );
          bodyObject.customer._id = existingContact._id;
        } else {
          const newContact = await db
            .collection("accounts")
            .insertOne(bodyObject.customer);
          bodyObject.customer._id = newContact.insertedId;
        }
      }

      bodyObject.accountId = bodyObject.customer._id;
      bodyObject.createdAt = new Date();

      let myPost = await db.collection("schedules").insertOne(bodyObject);
      return res.json(myPost.ops[0]);
    }

    return res.status(404).json({ status: 404, message: "Not found" });
  } catch (error) {
    console.error("Error occurred:", error);
    return res
      .status(500)
      .json({ status: 500, message: "Internal Server Error" });
  }
}


