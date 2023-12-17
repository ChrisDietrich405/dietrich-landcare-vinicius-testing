import Router from "next/router";
import jwt from "jsonwebtoken";
import { getSalt } from "../shared/utils";

export const authChecker = () => {
  const storageInfo = localStorage.getItem("account");
  if (storageInfo) {
    const user = JSON.parse(storageInfo);
    return user;
  } else {
    Router.push("/login");
  }
};

export const jwtChecker = (headers) => {
  let token = headers.authorization; // this will return bearer + jwt token
  if (!token) {
    return null;
  }
  token = token.split(" ")[1];
  return jwt.verify(token, getSalt()); //salt verifies and decrypts the jwt token
};

export const createJWT = (account, authorized) => {
  // the account parameter above will be replaced by an account object from the accounts collection in the database
  const salt = getSalt()
  jwt.sign(
    account, //the account is inside the JWT token
    salt, //salt is used to encrypt the JWT token and to later verify it
    {
      expiresIn: 286400,
    },
    (err, token) => {
      authorized(token);
    }
  );
};
