const oracledb = require("oracledb");
const { dbConfig } = require("../../libs/db/dbConfig");

class Database {
  static async getConnection() {
    const config = dbConfig("abc");
    return await oracledb.getConnection(config);
  }
}

module.exports = Database;
