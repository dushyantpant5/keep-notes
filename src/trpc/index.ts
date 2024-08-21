import { router, publicProcedure, protectedProcedure } from "./trpc";
import { db } from "@/db";

export const appRouter = router({
  getAllUsers: publicProcedure.query(async () => {
    const users: any = await db.user.findMany({});

    return users;
  }),

  getAllUsersViaMutaion: publicProcedure.mutation(async () => {
    const users: any = await db.user.findMany({});

    return users;
  }),
});

export type AppRouter = typeof appRouter;
