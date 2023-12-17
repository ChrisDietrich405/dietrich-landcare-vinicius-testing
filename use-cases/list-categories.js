import clientPromise from "../lib/mongodb";

export class ListCategoriesUseCase {
  async execute() {
    const client = await clientPromise;
    const db = client.db("dietrich_landcare");

    const categories = await db.collection("categories").find({}).toArray();
    return categories;
  }
}

