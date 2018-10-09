import * as express from "express";

// Our route handlers fulfill the business logic of our API endpoiunts.
import GetTodos from "./handlers/GetTodos";
import ToggleChecked from "./handlers/ToggleChecked";

// Create routes for each of our API endpoints; specify appropriate HTTP verb
// these routes accept.
const rootRouter = express.Router();
rootRouter.put("/toggle-checked", ToggleChecked);
rootRouter.get("/get-todos", GetTodos);

export default rootRouter;
