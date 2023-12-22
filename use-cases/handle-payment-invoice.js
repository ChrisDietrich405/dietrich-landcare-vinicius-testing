import clientPromise from "../lib/mongodb";
import { ObjectId } from "mongodb";

export class HandlePaymentInvoiceUseCase {
  async execute(paymentId, queryId) {
    const client = await clientPromise;
    const db = client.db("dietrich_landcare");
    const collection = db.collection(invoices);

    const filter = { _id: ObjectId(queryId) };

    const update = {
      $set: {
        payment_id: paymentId,
      },
    };

    await collection.updateOne(filter, update);
  }
}
