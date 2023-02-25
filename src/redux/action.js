import { Create_Post } from "./type";

export function createPost(post){
    return {
        type:  Create_Post,
        payload: post
    }
}