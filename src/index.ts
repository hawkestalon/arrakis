import fastify from 'fastify';

const port = process.env.PORT || 3000;

const server = fastify({ logger: true });

server.get('/ping', async (request, reply) => {
  reply.send('PONG');
});

server.listen({ port: 3000 }, (err, address) => {
  if(err) {
    console.error(err);
  }
  console.log(`**** LISTENING ON PORT ${port} *****`);
});