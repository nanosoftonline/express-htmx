const fs = require("fs");
const sqlite3 = require("sqlite3").verbose();
const filepath = "./contacts.sqlite";
const path = require("path");

function createDbConnection() {
    const dbpath = path.join(__dirname, filepath);
    if (fs.existsSync(dbpath)) {
        return new sqlite3.Database(dbpath);
    } else {
        const db = new sqlite3.Database(dbpath, (error) => {
            if (error) {
                return console.error(error.message);
            }
        });
        console.log("New database created");
        db.exec(fs.readFileSync("./db/seed.sql", "utf8"), (error) => {
            if (error) {
                return console.error(error.message);
            }
        })
        return db;
    }
}

async function query(sqlString) {
    const db = createDbConnection();
    return new Promise((resolve, reject) => {
        db.all(sqlString, (error, rows) => {
            db.close();
            if (error) {
                reject(error.message);
            } else {
                resolve(rows);
            }
        });
    })
}

async function exec(sqlString) {
    const db = createDbConnection();
    return new Promise((resolve, reject) => {
        db.exec(sqlString, (error) => {
            db.close();
            if (error) {
                reject(error.message);
            }
            else {
                resolve("success");
            }
        });
    })

}

module.exports = { query, exec }
