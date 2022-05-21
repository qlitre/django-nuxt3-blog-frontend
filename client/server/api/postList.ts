import type { IncomingMessage, ServerResponse } from 'http'
import * as url from "url";
import { PostList } from '~~/client/types/blog';
import { client } from './client'


export default async (req: IncomingMessage, res: ServerResponse) => {
    const params = url.parse(req.url as string, true).query
    return client().getList<PostList>({ endpoint: '/api/blog/posts/', queries: params })
}