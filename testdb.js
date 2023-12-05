const { query } = require('./db');

async function main() {
    try {
        const data = await query("select * from posts inner join users on posts.user_id = users.id");
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

main()