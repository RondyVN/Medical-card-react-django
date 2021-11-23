import {useMemo} from "react";

export const usePosts = (patients, query) => {
    const sortedPosts = patients

    const sortedAndSearchedPost = useMemo(() => {
        return sortedPosts.filter(post => post.first_name.toLowerCase().includes(query.toLowerCase()) || post.last_name.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedPosts])

    return sortedAndSearchedPost

}