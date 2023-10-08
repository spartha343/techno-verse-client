import { deleteContentData } from "../actionCreators/contentActions";

const deleteContent = (id) => {
    return async (dispatch, getState) => {
        const res = await fetch(`http://localhost:5000/product/${id}`, {
            method: 'DELETE'
        });
        const data = await res.json();
        if (data.deletedCount) {
            dispatch(deleteContentData(id))
        }
    }
};

export default deleteContent;