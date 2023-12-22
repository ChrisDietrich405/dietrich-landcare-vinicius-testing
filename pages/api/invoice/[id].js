import { jwtChecker } from "../../../lib/auth-checker";
import clientPromise from "../../../lib/mongodb";
import { GetInvoiceUseCase } from "../../../use-cases/get-invoice";
import { HandlePaymentInvoiceUseCase } from "../../../use-cases/handle-payment-invoice";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("dietrich_landcare");
  switch (req.method) {
    case "GET":
      const decodedToken = jwtChecker(req.headers);
      if (!decodedToken) {
        return res.status(401).json({ status: 401, message: "unauthorized" });
      }

      try {
        const getInvoiceUseCase = new GetInvoiceUseCase();
        const invoice = await getInvoiceUseCase.execute(
          req.query.id,
          decodedToken._id
        );

        res.json({ status: 200, data: invoice });
      } catch (error) {
        res.status(500).json({message: "Server failed"})
      }

    case "PUT":
      const { paymentId } = req.body;
      const queryId = req.query.id;

      const handlePaymentUseCase = new HandlePaymentInvoiceUseCase();

      try {
        await handlePaymentUseCase.execute(paymentId, queryId);
      } catch (err) {
        console.error("Error updating document:", err);
        throw err;
      }
  }
}
