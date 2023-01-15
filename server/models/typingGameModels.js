const { Pool } = require("pg");

const PG_URI =
  "postgres://npfljima:ussB0a7Futh1M0ryCVCkx7lYvhUqr8kW@mahmud.db.elephantsql.com/npfljima";

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log("executed query", text);
    return pool.query(text, params, callback);
  },
};
