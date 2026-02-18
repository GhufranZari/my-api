

const app = express();
app.use(express.json());

let users = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob',   email: 'bob@example.com' },
  { id: 3, name: 'nancy', email: 'nancy@example.com' }  
];

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
  const newUser = { id: Date.now(), name, email };
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
  res.json({ message: 'User deleted' });
});

app.listen(3030, () => console.log('API running on http://localhost:3030')); 
