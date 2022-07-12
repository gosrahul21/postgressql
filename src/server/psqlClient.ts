import { Client } from "pg";


async function connect(){
    try {
        const client = new Client({
            user:'rahul',
            database:'electron',
            password:'1234',
            port: 5432
        })
    
        await client.connect();
        console.log('db connection established')
        return client;
    } catch (error) {
        console.log("db connection failed", error)
    }

}

export default connect();




