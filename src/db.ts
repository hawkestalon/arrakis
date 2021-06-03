import { Client } from 'ts-postgres';

async function connectToDb() {
    const client = new Client();
    await client.connect();
    console.log('Client connected to database...');
}

export {
    connectToDb
}