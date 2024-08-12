import express, { Request, Response } from 'express';
import { connectDb } from './database/db';
import router from './routes/question-route';
import { config } from 'dotenv';
import cors from 'cors';

config();
const PORT = process.env.PORT || 3000;
const app = express();

const corsOptions = { origin: "*", optionsSuccessStatus: 200};
app.use(cors(corsOptions));

app.use(express.json());    // Parse JSON bodies to all routes

//Routes
app.get('/', (_req: Request, res: Response) => {
    res.send('Questions API running\n Route to /api/questions :)');
});
app.use('/api/questions',router);

// global catches
app.all("*", (_req, _res) => {
    _res.status(404).send("Page Not Found");
});

async function startServer() {
    await connectDb();
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}
startServer();

export default app;
