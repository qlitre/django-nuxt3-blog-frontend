export type Category = {
    id: string
    name: string
    slug: string
}

export type Tag = {
    id: string
    name: string
    slug: string
}

export type CategoryList = Array<Category>

export type TagList = Array<Tag>

export type Post = {
    id: string
    slug: string
    category: Category
    tag: Array<Tag>
    thumbnail: string
    title: string
    description: string
    created_at: string
    main_text: string
    is_public: boolean
}

export type PostList = Array<Post>



export type PostResponce = {
    next: string
    previous: string
    total_pages: number
    current_page: number
    results: PostList
    page_size: number
}

export type About = {
    profile_image: string
    body: string
}
