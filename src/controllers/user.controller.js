import { UserModel } from '../models/user.schema';

async function getAll(req, res) {
  const users = await UserModel.find();
  res.status(200).json(users);
}

async function getOne(req, res) {
  const _id = req.params.id;

  const user = await UserModel.findById(_id);
  if (!user) return res.status(404).json({ message: 'Not found' });

  res.status(200).json(user);
}

async function create(req, res) {
  const { _id, username, ip } = req.body;

  if (
    (await UserModel.findById(_id)) ||
    (await UserModel.findOne({ username }))
  )
    return res.json({ message: 'User already exists' });

  const user = await UserModel.create({
    _id,
    username,
    ip,
  });
  res.status(200).json(user);
}

async function update(req, res) {
  const { ip } = req.body;
  const _id = req.params.id;

  if (!(await UserModel.findById(_id)))
    return res.status(404).json({ message: 'Not found' });

  UserModel.findOneAndUpdate(
    { _id },
    {
      ip,
    }
  ).then((d) => res.sendStatus(200));
}

export { getAll, getOne, create, update };
