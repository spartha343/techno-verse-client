import { ADD_CONTENT, ADD_TO_READING_HISTORY, DELETE_CONTENT, GET_CONTENT, SELECT_TAG, TOGGLE_SORTING_ORDER, UPDATE_CONTENT } from "../actionTypes/actionTypes";

const initialState = {
    contents: [],
    selectedTag: null,
    sortingOrder: 'asc',
    readingHistories: []
};

const contentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CONTENT:
            return {
                ...state,
                contents: action.payload
            }

        case ADD_CONTENT:
            return {
                ...state,
                contents: [...state.contents, action.payload]
            }
        case UPDATE_CONTENT:
            return {
                ...state,
                contents: [...state.contents.filter(content => content._id !== action.payload.id), action.payload.content]
            }

        case DELETE_CONTENT:
            return {
                ...state,
                contents: state.contents.filter(content => content._id !== action.payload)
            }

        case SELECT_TAG:
            return {
                ...state,
                selectedTag: action.payload
            }

        case TOGGLE_SORTING_ORDER:
            return {
                ...state,
                sortingOrder: state.sortingOrder === 'asc' ? 'desc' : 'asc'
            }

        case ADD_TO_READING_HISTORY:
            const isAlreadyAdded = state.readingHistories.includes(action.payload);
            if (isAlreadyAdded) {
                const newHistory = state.readingHistories.filter(RH => RH !== action.payload);
                return {
                    ...state,
                    readingHistories: [action.payload, ...newHistory]
                }
            }
            return {
                ...state,
                readingHistories: [action.payload, ...state.readingHistories]
            }

        default:
            return state;
    }
}

export default contentsReducer;