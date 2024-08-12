const table = 'Questions';

export const GET_ALL_QNA = `SELECT * FROM ${table}`;
export const GET_QNA_BY_ID = `SELECT * FROM ${table} WHERE id = ?`;
export const CREATE_QNA = `INSERT INTO ${table} SET ?`;
export const UPDATE_QNA = `UPDATE ${table} SET question = ?, answer = ? WHERE id = ?`;
export const DELETE_QNA = `DELETE FROM ${table} WHERE id = ?`;