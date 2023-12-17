const clientPromise = require("../lib/mongodb")


describe("accessing individual account", () => {
    let client;
    let db;
    beforeEach(async () => {
      client = await clientPromise;
      db = client.db("dietrich_landcare");
    });
    test("accessing individual account", async () => {
        const account = await db
        .collection("accounts")
        .findOne({ _id: 3 });
        expect(account).toBeInstanceOf(Object)
        
    })
})