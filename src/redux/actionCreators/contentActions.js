import { ADD_CONTENT, ADD_TO_READING_HISTORY, DELETE_CONTENT, GET_CONTENT, SELECT_TAG, TOGGLE_SORTING_ORDER, UPDATE_CONTENT } from "../actionTypes/actionTypes"

export const getContentsData = (contents) => {
    return {
        type: GET_CONTENT,
        payload: contents
    }
}

export const addContentData = (content) => {
    return {
        type: ADD_CONTENT,
        payload: content
    }
}

export const updateContentData = (content, id) => {
    return {
        type: UPDATE_CONTENT,
        payload: { content, id }
    }
}

export const deleteContentData = (id) => {
    return {
        type: DELETE_CONTENT,
        payload: id
    }
}

export const selectTag = (tag) => {
    return {
        type: SELECT_TAG,
        payload: tag
    }
}

export const toggleSortingOrder = () => {
    return {
        type: TOGGLE_SORTING_ORDER
    }
}

export const addToReadingHistory = (contentId) => {
    return {
        type: ADD_TO_READING_HISTORY,
        payload: contentId
    }
}