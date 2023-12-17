import { AddCustomerUseCase } from "../../use-cases/add-customer"

export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      try {
        const addCustomerUseCase = new AddCustomerUseCase();
        const { user } = await addCustomerUseCase.execute(req.body.user)
  
        return res.status(201).json({ user })
      } catch (err) {
        console.log(err)
        return res.status(500).json({ err })
      }
    default:
      res.status(405).end();
  }
  console.log("hello");
}
