import app from './server';
import { connectToDb } from './db';

const port = 3000; // eventually move this to a .env file

async function main(): Promise<void> {
    console.log('Connecting to db...')
    await connectToDb();
    console.log('DB connection complete, starting server...')
    app.listen(port, () => {
        console.log('Server listening port 3000')
    });
}

main();