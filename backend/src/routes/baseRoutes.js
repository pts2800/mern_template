import express from "express"
import {getThing, creatThing, updateThing, deleteThing} from "../controllers/baseControllers.js";

const router = express.Router();

router.get("/", getThing);
router.post("/", createThing);
router.put("/:id", updateThing);
router.delete("/:id", deleteThing);

export default router;
