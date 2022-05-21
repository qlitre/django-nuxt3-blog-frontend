export const client = () => {
    const ctx = useRuntimeConfig()
    const baseUrl = ctx.baseUrl
    const headers = { 'X-Api-Key': ctx.apiKey }

    const getList = async<T = any>({
        endpoint,
        queries = {},
    }) => {
        return await $fetch(baseUrl + endpoint, { headers: headers, params: queries })
    }

    const getDetail = async<T = any>({
        endpoint,
        contentId
    }) => {
        return await $fetch(baseUrl + endpoint + contentId, { headers: headers })
    }

    return {
        getList,
        getDetail
    }
}