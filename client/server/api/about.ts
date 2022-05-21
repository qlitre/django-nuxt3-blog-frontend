import type { IncomingMessage, ServerResponse } from 'http'
import { About } from '~~/client/types/blog'
import { client } from './client'

export default async (req: IncomingMessage, res: ServerResponse) => {
    // Profileページは常に最初のデータを更新していくため、contentIdは常に1とする
    return client().getDetail<About>({ endpoint: '/api/blog/about/', contentId: '1' })
}