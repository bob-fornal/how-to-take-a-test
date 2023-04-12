const fs = require('fs').promises;

const root = (req, res) => {
  res.status(401).send('Unauthorized');
};

const tests = async (req, res) => {
  const data = await fs.readFile('./data/tests.json', 'utf8');
  res.status(200).send(data);
};

module.exports = {
  root, tests
};
