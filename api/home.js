import request from "../utils/request";

export const getBannerList = async () => {
    return await request('/banner', {type: 2})
}

export const getRecommendList = async () => {
    return await request('/personalized', {limit: 10})
}
export const getTopList = async () => {
    return await request('/toplist')
}

export const getRackingList = async () => {
    return await request('/playlist/detail', {limit: 10})
}
