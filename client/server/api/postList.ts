import type { IncomingMessage, ServerResponse } from 'http'
import * as url from "url";

const ctx = useRuntimeConfig()
const headers = { 'X-Api-Key': ctx.apiKey }

export default async (req: IncomingMessage, res: ServerResponse) => {
    const ctx = useRuntimeConfig();
    const params = url.parse(req.url as string, true).query
    const data = await $fetch(`${ctx.baseUrl}/api/blog/posts/`, { params: params,headers:headers })
    return data
}