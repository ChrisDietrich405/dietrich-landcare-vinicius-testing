export class CustomerRepository {
  async findById(id)  {
    const db = client.db("dietrich_landcare");

    const account = await db
    .collection("accounts")
    .findOne({ email });

    return account
  }

  async create(user) {
    const dbResponse = await db.collection("accounts").insertOne(user);

    return dbResponse
  }
}