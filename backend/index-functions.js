
export function getRoot(req, res) {
  res.status(401).send('Unauthorized');
}

export default { getRoot };
