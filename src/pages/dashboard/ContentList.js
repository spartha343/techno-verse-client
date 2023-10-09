import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SingleContent from '../../components/singleContent/SingleContent';
import getContents from '../../redux/thunk/getContents';

const ContentList = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getContents());
    }, [dispatch]);

    const contents = useSelector(state => state.contents) ?? [];
    return (
        <div className='w-full'>
            <div className="overflow-x-auto">
                <table className="table table-pin-rows table-pin-cols">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Content Name</th>
                            <th>In Stock</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            contents.map((content, idx) => <SingleContent key={content._id} content={content} idx={idx} ></SingleContent>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ContentList;