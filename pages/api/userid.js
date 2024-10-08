import { createConnection } from 'mysql2/promise';


async function connectToDatabase() {
  return createConnection({
    host: 'sql5.freemysqlhosting.net',
    user: 'sql5734574',
    password: 'dq2tdplSjH',
    database: 'sql5734574',
    port: 3306,
  });
}

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const user_id = req.body.user_id;

  if (!user_id) {
    return res.status(400).json({ error: 'user_id is required in the request body.' });
  }

  try {
    const connection = await connectToDatabase();

    const [rows] = await connection.execute('SELECT * FROM Usuario WHERE ID = ?', [user_id]);

    if (rows.length === 0) {
      return res.status(404).json({ error: 'User not found.' });
    }

    await connection.end();

    res.status(200).json(rows);
  } catch (error) {
    console.error('Error connecting to the database:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}