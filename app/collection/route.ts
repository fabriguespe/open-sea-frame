import { NextRequest } from "next/server";
import { kv } from "@vercel/kv";
import { v4 as uuidv4 } from "uuid";

export async function POST(request: NextRequest) {
  try {
    const threadId = uuidv4();
    const reqBody = await request.json();

    await kv.hset(`thread:${threadId}`, {
      casts: reqBody.casts,
    });

    await kv.zadd("thread_by_date", {
      score: Number(Date.now()),
      member: threadId,
    });

    return Response.json({ threadId });
  } catch (e) {
    console.error(e);
    return new Response(`Internal Server Error`, {
      status: 500,
    });
  }
}
