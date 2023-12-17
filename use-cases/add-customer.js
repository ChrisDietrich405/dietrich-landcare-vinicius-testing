import clientPromise from "../lib/mongodb";
import bcrypt from "bcrypt";

import { getSalt } from "../shared/utils";

export class AddCustomerUseCase {
  // Business Logic
  async execute({ firstName, lastName, streetAddress, email, password, profile_id }) {
    const client = await clientPromise;

    // repositories pattern
    const db = client.db("dietrich_landcare");

    const checkAccountForDuplicate = await db
      .collection("accounts")
      .findOne({ email });

    if (checkAccountForDuplicate) {
      throw new Error("Duplicate account.");
    }

    const salt = getSalt();
    const user = {
      firstName,
      lastName,
      streetAddress,
      email,
      profile_id,
      password: bcrypt.hashSync(password, salt),
    };
    
    const dbResponse = await db.collection("accounts").insertOne(user);
    user._id = dbResponse.insertedId;
    
    const { password, ...userWithoutPassword } = user

    return { user: userWithoutPassword };
  }
}
