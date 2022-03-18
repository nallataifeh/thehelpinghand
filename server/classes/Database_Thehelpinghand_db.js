// Import Sequelize
import Sequelize from "sequelize";
import InitSchema from "../models/schema_thehelpinghand_db";
import UserModel from "../models/Thehelpinghand_db/UserModel";

// Logging
import Logger from "./Logger";
// Properties
import properties from "../properties.js";

class Database {
  constructor() {}

  /**
   * Init database
   */
  async init() {
    await this.authenticate();
    Logger.info(
      "Database connected at: " +
        properties.thehelpinghand_db.host +
        ":" +
        properties.thehelpinghand_db.port +
        "//" +
        properties.thehelpinghand_db.user +
        "@" +
        properties.thehelpinghand_db.name
    );

    // Import schema
    InitSchema();

    await UserModel.createAdminUser();

  }

  /**
   * Start database connection
   */
  async authenticate() {
    Logger.info("Authenticating to the databases...");

    const sequelize = new Sequelize(
      properties.thehelpinghand_db.name,
      properties.thehelpinghand_db.user,
      properties.thehelpinghand_db.password,
      {
        host: properties.thehelpinghand_db.host,
        dialect: properties.thehelpinghand_db.dialect,
        port: properties.thehelpinghand_db.port,
        logging: false
      }
    );
    this.dbConnection_thehelpinghand_db = sequelize;

    try {
      await sequelize.sync();
    } catch (err) {
      // Catch error here
      Logger.error(`Failed connection to the DB`);
      Logger.error(err);
      await new Promise(resolve => setTimeout(resolve, 5000));
      await this.authenticate();
    }
  }

  /**
   * Get connection db
   */
  getConnection() {
    return this.dbConnection_thehelpinghand_db;
  }
}

export default new Database();
