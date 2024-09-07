import commonAPI from "./commonAPI"
import serverUrl from "./baseURL"

// /upload video
export const uploadVideoAPI = async (uploadVideo)=>{
    return await commonAPI("POST",`${serverUrl}/allvideos`,uploadVideo)
}

// get all videos
export const getAllVideosAPI = async ()=>{
    return await commonAPI("GET",`${serverUrl}/allvideos`,"")
}

// /store watch history Api must be called by video card
export const storeHistoryAPI = async (videoDetails)=>{
    return await commonAPI("POST",`${serverUrl}/history`,videoDetails)
}

// get all history
export const getHistoryAPI = async ()=>{
    return await commonAPI("GET",`${serverUrl}/history`,"")
}

// remove history api called component
export const removeHistoryAPI = async (historyId)=>{
    return await commonAPI("DELETE",`${serverUrl}/history/${historyId}`,{})
}

// remove video card 
export const removeCardAPI = async (cardId)=>{
    return await commonAPI("DELETE",`${serverUrl}/allvideos/${cardId}`,{})
}

// add catogory api
export const addCategoryAPI = async (catogoryDetails)=>{
    return await commonAPI("POST",`${serverUrl}/categories`,catogoryDetails)
}

// getAllCatogoryAPI 
export const getCategoryAPI = async ()=>{
    return await commonAPI("GET",`${serverUrl}/categories`,"")
}

// remove catogory api
export const removeCategoryAPI = async (categoryId)=>{
    return await commonAPI("DELETE",`${serverUrl}/categories/${categoryId}`,{})
}