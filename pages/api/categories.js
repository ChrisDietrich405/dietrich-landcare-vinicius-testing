import { ListCategoriesUseCase } from "../../use-cases/list-categories";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      try {
        const listCategoriesUseCase = new ListCategoriesUseCase();
        const categories = await listCategoriesUseCase.execute();

        res.json({ status: 200, data: categories });
        break;
      } catch (error) {
        return res.status(401).json({ status: 401, message: error });
      }
  }
}
