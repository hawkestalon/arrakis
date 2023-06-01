import fastify from 'fastify';
import { plugin as koalifications } from './koalifications/routes';

const port = process.env.PORT || 3000;

const server = fastify({ logger: true });

server.get('/ping', async (request, reply) => {
  reply.send('PONG');
});

server.register(koalifications);

server.listen({ port: 3000 }, (err, address) => {
  if(err) {
    console.error(err);
  }
  console.log(`**** LISTENING ON PORT ${port} *****`);
});