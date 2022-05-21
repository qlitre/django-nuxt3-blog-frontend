import type { IncomingMessage, ServerResponse } from 'http'
import { CategoryList } from '~~/client/types/blog'
import { client } from './client'

export default async (req: IncomingMessage, res: ServerResponse) => {
    return client().getList<CategoryList>({ endpoint: '/api/blog/categories/' })
}