import 'dotenv/config';

import { app } from './app';
import { routes } from './utils/routes';
import { connect } from './utils/database';

connect();

app.use(routes);
app.listen(3000, () => console.log('started 🚀'));
