import { Client, Connect } from 'ts-postgres';

async function connectToDb(): Promise<void> {
    console.log('starting connection');
    const client = new Client({'host': 'localhost', 'database': 'arrakis'});
    client.connect().then(() => {console.log('connection complete')});
}

export {
    connectToDb
}