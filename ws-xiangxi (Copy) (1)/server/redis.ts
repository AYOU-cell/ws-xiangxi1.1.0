type Reply = { result?: unknown; error?: string };

export async function redis(commands: (string | number)[][]): Promise<unknown[]> {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) {
    throw new Error('UPSTASH_REDIS_REST_URL or UPSTASH_REDIS_REST_TOKEN is not set');
  }
  const res = await fetch(`${url}/pipeline`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(commands),
  });
  if (!res.ok) {
    throw new Error(`Upstash responded ${res.status}`);
  }
  const replies = (await res.json()) as Reply[];
  return replies.map((reply) => {
    if (reply.error) throw new Error(reply.error);
    return reply.result;
  });
}
