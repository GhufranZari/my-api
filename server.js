import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

let users = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
  { id: 3, name: 'nancy', email: 'nancy@example.com' }
];

function getNextId() {
  if (users.length === 0) return 1;
  const maxId = Math.max(...users.map(u => u.id));
  return maxId + 1;
}

// ✅ Reorder IDs sequentially
function reorderIds() {
  users = users.map((user, index) => ({
    ...user,
    id: index + 1
  }));
}

app.get('/users', (req, res) => {
  res.json(users);
});

app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === Number(req.params.id));
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
});

app.post('/users', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) return res.status(400).json({ error: 'Name and email required' });
  
  const newUser = { id: getNextId(), name, email };
  users.push(newUser);
  res.status(201).json(newUser);
});

app.put('/users/:id', (req, res) => {
  const index = users.findIndex(u => u.id === Number(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'User not found' });
  users[index] = { ...users[index], ...req.body };
  res.json(users[index]);
});

app.delete('/users/:id', (req, res) => {
  users = users.filter(u => u.id !== Number(req.params.id));
  reorderIds(); // ✅ Reorder IDs after delete
  res.json({ message: 'User deleted' });
});

app.listen(3030, () => console.log('API running on http://localhost:3030'));
