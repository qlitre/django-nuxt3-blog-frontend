import type { IncomingMessage, ServerResponse } from 'http'

const ctx = useRuntimeConfig()
const headers = { 'X-Api-Key': ctx.apiKey }

export default async (req: IncomingMessage, res: ServerResponse) => {
    const ctx = useRuntimeConfig();
    const data = await $fetch(`${ctx.baseUrl}/api/blog/about/1/`, { headers: headers })
    return data
}