type FetchMode = 'ssg' | 'isr' | 'ssr';
type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export async function fetched<TResponse, TBody = unknown>(
  url: string,
  mode: FetchMode = 'ssr',
  options?: {
    method?: HttpMethod;
    body?: TBody;
    revalidate?: number;
    tags?: string[];
  },
): Promise<TResponse> {
  const method = options?.method ?? 'GET';

  const cacheOptions =
    mode === 'ssr'
      ? { cache: 'no-store' as const }
      : mode === 'isr'
        ? {
            next: {
              revalidate: options?.revalidate ?? 3600,
              tags: options?.tags,
            },
          }
        : { cache: 'force-cache' as const };

  console.log(`${process.env.API_URL}${url}`);

  const res = await fetch(`${process.env.API_URL}${url}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    ...cacheOptions,
    ...(method === 'GET' ? {} : { body: JSON.stringify(options?.body) }),
  });

  if (!res.ok) {
    throw new Error(`Fetch failed: ${res.status}`);
  }

  return res.json();
}
