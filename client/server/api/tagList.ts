import type { IncomingMessage, ServerResponse } from 'http'
import { TagList } from '~~/client/types/blog'
import { client } from './client'

export default async (req: IncomingMessage, res: ServerResponse) => {
    return client().getList<TagList>({ endpoint: '/api/blog/tags/' })
}