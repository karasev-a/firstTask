const db = require('../models/db');
const  MigrationService  = require('./migration-service');

module.exports = class DBService {
    static async initDataBase(){
        try {
            await db.authenticate();
            await db.sync();
            await MigrationService.runMigrations();
            await MigrationService.runSeeders();
        }
        catch (err) {
            console.log('DB init ERROR');
            console.log(err);
            
        }
    }
} 