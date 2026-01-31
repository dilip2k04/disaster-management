const app = require('./app');
const connect = require('./config/db');
const seed = require('./seed/seedAdmin');
const { PORT } = require('./config/env');

connect().then(async () => {
  await seed();

  app.listen(PORT, () =>
    console.log(`🚀 Server running on http://localhost:${PORT}`)
  );
});
