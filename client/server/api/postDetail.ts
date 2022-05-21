import type { IncomingMessage, ServerResponse } from 'http'
import * as url from "url";
import { Post } from '~~/client/types/blog';
import { client } from './client'

export default async (req: IncomingMessage, res: ServerResponse) => {
    const params = url.parse(req.url as string, true).query
    const slug = params.slug

    return client().getDetail<Post>({ endpoint: '/api/blog/posts/', contentId: slug })
}