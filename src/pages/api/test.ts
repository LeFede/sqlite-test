import { PrismaClient } from "@prisma/client";
import type { APIRoute } from "astro";

const prisma = new PrismaClient();

export const GET: APIRoute = async () => {
  const entities = await prisma.entity.findMany({});
  return new Response(JSON.stringify(entities), {
    status: 200,
  });
};
