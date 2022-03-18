// Import Sequelize
import Sequelize from "sequelize";
import Database from "../classes/Database_Thehelpinghand_db";

export default init => {
  let sequelize = Database.getConnection();


    /**
      * ------------------------------------
      * Start define generated schema
      *
      * The content of this section will be overwritten on each documentation, 
      * please insert your customization at the top or at the end of the file.
      * ------------------------------------
      */



    /**
      * ------------------------------------
      * User
      * ------------------------------------
      */
    class User extends Sequelize.Model{}
    User.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      dob: {
        type: Sequelize.DATE
      },
      
      email: {
        type: Sequelize.STRING
      },
      
      firstName: {
        type: Sequelize.STRING
      },
      
      isBusiness: {
        type: Sequelize.BOOLEAN
      },
      
      lastName: {
        type: Sequelize.STRING
      },
      
      password: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      profilePicture: {
        type: Sequelize.STRING
      },
      
      username: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      //RELATIONS
        
      _address:  {
        type: Sequelize.INTEGER,
        references: {
          model: "address",
          key: '_id',
        },
      },
      
      
      //EXTERNAL RELATIONS
      /*
      */
    },
      { sequelize, tableName: "user", timestamps: false }
    );



    /**
      * ------------------------------------
      * address
      * ------------------------------------
      */
    class address extends Sequelize.Model{}
    address.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      city: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      country: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      postalCode: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      province: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      street: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      unitNumber: {
        type: Sequelize.STRING
      },
      
      //RELATIONS
        
      
      
      //EXTERNAL RELATIONS
      /*
      _address: {
        type: Sequelize.INTEGER,
        references: {
          model: User,
          key: '_id',
        }
      },
      */
    },
      { sequelize, tableName: "address", timestamps: false }
    );


    /**
      * ------------------------------------
      * Relations many to many
      * ------------------------------------
      */

    
    
  /**
   * ------------------------------------
   * End define generated schema
      * ------------------------------------
      */

    /**
      * ------------------------------------
      * Roles
      * ------------------------------------
      */
    class Roles extends Sequelize.Model{}
    Roles.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      role: {
        type: Sequelize.STRING
      },
      
      //RELATIONS
        
      _user:  {
        type: Sequelize.INTEGER,
        references: {
          model: "User",
          key: '_id',
        },
      }
      
      
      //EXTERNAL RELATIONS
      /*
      */
    },
      { sequelize, tableName: "roles", timestamps: false }
    );

    User.hasMany(Roles, {
      foreignKey: "_user"
    });

    /**
      * ------------------------------------
      * Insert here your custom models
      * ------------------------------------
      */

};
