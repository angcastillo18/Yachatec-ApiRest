import { Router } from "express"
import { getQuestions, getQuestion, createQuestion, updateQuestion } from "../controllers/questions.controllers.js"

const router = Router();

router.get('/questions', getQuestions)
router.get('/questions/:id', getQuestion)
router.put('/questions/:id/', updateQuestion)
router.post('/questions', createQuestion) //* create questions


export default router;