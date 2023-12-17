import clientPromise from "../lib/mongodb";
import bcrypt from "bcrypt";

import { getSalt } from "../../shared/utils";

export class CreateAccountUseCase {
  async execute({
    firstName,
    lastName,
    streetAddress,
    email,
    profile_id,
    password,
  }) {
    const client = await clientPromise;
    const db = client.db("dietrich_landcare");

    const checkAccountForDuplicate = await db
      .collection("accounts")
      .findOne({ email });

    if (checkAccountForDuplicate) {
      throw new Error("Duplicate account.");
    }

    profile_id = 2;

    const salt = getSalt();

    let newPassword = bcrypt.hashSync(password, salt);

    const newUser = {
      firstName,
      lastName,
      streetAddress,
      email,
      profile_id,
      newPassword,
    };

    let newCustomer = await db.collection("accounts").insertOne({ newUser });

    newUser.id = newCustomer.insertedId;

    const { password: pass, ...userWithoutPassword } = newUser;

    return { user: userWithoutPassword };
  }
}
