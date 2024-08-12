import { Request, Response } from 'express';
import { db } from '../database/db';
import { GET_ALL_QNA, GET_QNA_BY_ID, CREATE_QNA, UPDATE_QNA, DELETE_QNA } from '../database/queries';

const getAllQuestions = async (req: Request, res: Response): Promise<void> => {
    try {
        db.query(GET_ALL_QNA, (err, data) => {
            if (err) {
                console.error('Error fetching all QnA:', err);
                res.status(500).json({ message: 'Server Error' });
                return;
            }
            res.status(200).json({ data });
        });
    } catch (error) {
        console.error('Server Error:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};

const getQuestionById = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = req.params.id;
        db.query(GET_QNA_BY_ID, [id], (err, data) => {
            if (err) {
                console.error('Error fetching QnA by ID:', err);
                res.status(500).json({ message: 'Server Error' });
                return;
            }
            // if (data.length === 0) {
            //     res.status(404).json({ message: 'QnA Not Found' });
            //     return;
            // }
            res.status(200).json({ data: data });
        });
    } catch (error) {
        console.error('Server Error:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};

const createQuestion = async (req: Request, res: Response): Promise<void> => {
    try {
        const { question, answer } = req.body;
        db.query(CREATE_QNA, { question, answer }, (err, result) => {
            if (err) {
                console.error('Error creating QnA:', err);
                res.status(500).json({ message: 'Server Error' });
                return;
            }
            res.status(201).json({ message: 'QnA Created', result , id : (result as any).insertId});
        });
    } catch (error) {
        console.error('Server Error:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};

const updateQuestion = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = req.params.id;
        const { question, answer } = req.body;
        db.query(UPDATE_QNA, [question, answer, id], (err, result) => {
            if (err) {
                console.error('Error updating QnA:', err);
                res.status(500).json({ message: 'Server Error' });
                return;
            }
            // if (result.affectedRows === 0) {
            //     res.status(404).json({ message: 'QnA Not Found' });
            //     return;
            // }
            res.status(200).json({ message: 'QnA Updated' });
        });
    } catch (error) {
        console.error('Server Error:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};

const deleteQuestion = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = req.params.id;
        db.query(DELETE_QNA, [id], (err, result) => {
            if (err) {
                console.error('Error deleting QnA:', err);
                res.status(500).json({ message: 'Server Error' });
                return;
            }
            // if (result.affectedRows === 0) {
            //     res.status(404).json({ message: 'QnA Not Found' });
            //     return;
            // }
            res.status(200).json({ message: 'QnA Deleted' });
        });
    } catch (error) {
        console.error('Server Error:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};

export { getAllQuestions, getQuestionById, createQuestion, updateQuestion, deleteQuestion };
