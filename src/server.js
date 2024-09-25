const { PORT = 5001 } = process.env;

const app = require("./app");
const knex = require("./db/connection");

module.exports = async (req, res) => {
  try {
    await knex.migrate.latest();

    app(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// const listener = () => console.log(`Listening on Port ${PORT}!`);

// knex.migrate
//   .latest()
//   .then((migrations) => {
//     console.log("migrations", migrations);
//     app.listen(PORT, listener);
//   })
//   .catch(console.error);
