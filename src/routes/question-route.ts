import express from "express";
import { createQuestion, deleteQuestion, getAllQuestions, getQuestionById, updateQuestion } from "../controllers/question-controller";

const router = express.Router();

router
    .route('/')
    .get(getAllQuestions)
    .post(createQuestion)

router
    .route('/:id')
    .get(getQuestionById)
    .delete(deleteQuestion)
    .put(updateQuestion)

export default router;