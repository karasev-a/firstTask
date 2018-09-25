const db = require('../models/db');

module.exports = class DBService {
    static async initDataBase(){
        try {
            await db.authenticate();
            await db.sync()
        }
        catch (err) {
            console.log('DB init ERROR');
            console.log(err);
            
        }
    }
} 