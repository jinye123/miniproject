import {
    getBannerList,
    getRecommendList,
    // getTopList,
    getRackingList,
} from '../../api/index'

Page({
    data: {
        bannerList: [],
        recommendList:[],
        rankingList:[]
    },
    async onLoad() {
        // const topList = await getTopList();
        const bannerList = await getBannerList();
        const recommendList = await getRecommendList();
        // const topList = await getTopList();
        // console.log(topList)
        this.setData({
            bannerList: bannerList.banners,
            recommendList: recommendList.result
        })
    },
})
