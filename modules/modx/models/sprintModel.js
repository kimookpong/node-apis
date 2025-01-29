const Database = require("../db-connection");

const getAll = async () => {
  const sql = `SELECT * FROM MODX_SPRINT`;
  const binds = { id: 41 };

  // db connection setup //
  const connection = await Database.getConnection();
  const result = await connection.execute(sql, binds, Database.getOptions());
  await connection.close();
  // db connection setup //
  return result.rows;
};



module.exports = { getAll};
