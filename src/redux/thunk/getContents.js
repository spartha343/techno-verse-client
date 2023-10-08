import { getContentsData } from "../actionCreators/contentActions";

const getContents = () => {
    return async (dispatch, getState) => {
        // Moon tech server is being used for this project 
        const res = await fetch('http://localhost:5000/products');
        const data = await res.json();
        if (data.data.length) {
            dispatch(getContentsData(data.data))
        }
    }
}

export default getContents;