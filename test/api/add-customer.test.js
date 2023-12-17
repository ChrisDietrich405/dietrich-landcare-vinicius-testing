import addCustomer from "../../pages/api/add-customer";
import { MongoClient } from "mongodb";
import { request } from "supertest"

jest.mock("../../lib/mongodb", async () => {
  return await MongoClient.connect(globalThis.__MONGO_URI__, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

const payloadMock = {
  email: "doy@gmail.com",
  password: "password",
  firstName: "Christopher",
  lastName: "Dietrich",
  streetAddress: "718 Melville Ave",
  city: "Baltimore",
};


describe("add customer", () => {
  it("should add a customer", async () => {
    // we use supertest library
    const response = await request('http://localhost:3000/api/add-customer').post(payloadMock)
    expect(response).status(201)
  });
});
