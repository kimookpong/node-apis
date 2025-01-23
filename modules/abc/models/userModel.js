const Database = require("../db-connection");

exports.getAll = async () => {
  const connection = await Database.getConnection();
  const result = await connection.execute(
    "SELECT * FROM PBL_VPER_PERSON WHERE DIVISION_ID = 41"
  );
  await connection.close();
  return result.rows;
};
