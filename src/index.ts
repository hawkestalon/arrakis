import express from 'express';

const app = express();
const port = 3000;

app.get('/ping', pong);

function pong(req: any, res: any): void {
    res.send('pong');
}

app.listen(port, () => {
    console.log(`server Listening on Port ${port}`)
})