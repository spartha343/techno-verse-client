import { addContentData } from "../actionCreators/contentActions"

const addContent = (content) => {
    return async (dispatch, getState) => {
        // Moon tech server is being used for this project 
        const res = await fetch('http://localhost:5000/product', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(content)
        })
        const data = await res.json();
        if (data.insertedId) {
            dispatch(addContentData(content))
        }
    }
}

export default addContent;