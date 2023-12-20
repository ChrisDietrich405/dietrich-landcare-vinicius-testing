import clientPromise from "../lib/mongodb";
import { ObjectId } from "mongodb";

export class GetInvoiceUseCase {
  async execute(invoiceId, userAccountId) {
    const client = await clientPromise;
    const db = client.db("dietrich_landcare");

    const invoice = await db
      .collection("invoices")
      .findOne({ _id: ObjectId(invoiceId) });
    if (invoice && userAccountId !== invoice.account_id) {
      throw new Error("you suck");
    }
    return invoice;
  }
}
