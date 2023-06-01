import { FastifyInstance, FastifyPluginOptions } from "fastify";

export const plugin = async (fastify: FastifyInstance, options: FastifyPluginOptions) => {
  fastify.get('/test', (request, reply) => {
    reply.send('This is not a test (but really it is)');
  });
};
