import { updateContentData } from "../actionCreators/contentActions";

const updateContent = (id, content) => {
    return async (dispatch, getState) => {
        const res = await fetch(`https://moon-tech-server-omega.vercel.app/product/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(content)
        })
        const data = await res.json();
        if (data.ok) {
            dispatch(updateContentData(content, id))
        }
    }
}

export default updateContent;