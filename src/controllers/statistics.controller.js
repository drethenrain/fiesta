import { UserModel } from '../models/user.schema';

async function handle(req, res) {
  const users = (await UserModel.find()).length;
  const whitelists = Math.floor(Math.random() * 20);
  const servers = Math.floor(Math.random() * 40);

  res.json({
    users,
    whitelists,
    servers,
  });
}

export { handle };
