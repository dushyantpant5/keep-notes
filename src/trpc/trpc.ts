import { initTRPC } from "@trpc/server";

const t = initTRPC.create();

const middleware = t.middleware;

const authenticationMiddleware = middleware(async (options) => {
  //TODO : Implement authentication

  const userId = "hash1"; //TEST ID

  return options.next({
    ctx: {
      userId: userId,
    },
  });
});

//TODO : Create a authentication middleware , its for the api routes

export const router = t.router;
export const publicProcedure = t.procedure;
export const protectedProcedure = t.procedure.use(authenticationMiddleware);
