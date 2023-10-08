import { getContentsData } from "../actionCreators/contentActions";

const getContents = () => {
    return async (dispatch, getState) => {
        // Moon tech server is being used for this project 
        const res = await fetch('https://moon-tech-server-omega.vercel.app/products');
        const data = await res.json();
        if (data.data.length) {
            dispatch(getContentsData(data.data))
        }
    }
}

export default getContents;