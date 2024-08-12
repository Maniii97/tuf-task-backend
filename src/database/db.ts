import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const db = mysql.createConnection(process.env.DB_URL as string);

const connectDb = () => {
    db.connect((err) => {
        if (err) {
            console.log("Error connecting to database");
            console.log(err);
            return;
        }
        console.log("Database connected");
    });
}

export {db ,connectDb};