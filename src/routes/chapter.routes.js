import { Router } from "express"
import { getChapters, getChapter, createChapter, updateChapter,getChapterQuestions } from "../controllers/chapter.controllers.js"
import { requireToken } from "../middlewares/requireToken.js"

const router = Router();

router.get('/chapters', getChapters)
router.get('/chapters/:id', getChapter)
router.put('/chapters/:id/', updateChapter)

router.post('/chapters', createChapter) //* create chapter with questions

router.get('/chapters/:id/questions', requireToken, getChapterQuestions)//?frontend route

export default router;