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
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const userdata = req.body;
  console.log(userdata)

  const { name, age ,sex} = userdata;

  if (!name || !age || !sex) {
    return res.status(400).json({ error: 'name, age, and sex are required in the request body.' });
  }
  try {
    const connection = await connectToDatabase();

    const [result] = await connection.execute('INSERT INTO Usuario (Nombre, Edad, Sexo) VALUES (?, ?, ?)', [
      name,
      age,
      sex,
    ]);

    await connection.end();
    res.status(201).json({ id: result.insertId, message: 'User created successfully' });
    res.push
  } catch (error) {
    console.error('Error connecting to the database:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }

  
}