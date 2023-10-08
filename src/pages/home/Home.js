import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getContents from '../../redux/thunk/getContents';
import ContentCard from '../../components/ContentCard/ContentCard';
import { toggleSortingOrder } from '../../redux/actionCreators/contentActions';

const Home = () => {
    const dispatch = useDispatch();
    const sortingOrder = useSelector(state => state.sortingOrder);
    const selectedTag = useSelector(state => state.selectedTag);
    const contents = useSelector(state => state.contents.sort((a, b) => {
        if (sortingOrder === 'asc') {
            return a.updatedAT - b.updatedAT;
        }
        else return b.updatedAT - a.updatedAT;
    }).filter(content => selectedTag ? content.tags.includes(selectedTag) : content));

    useEffect(() => {
        dispatch(getContents());
    }, [dispatch]);

    return (
        <>
            <button onClick={() => dispatch(toggleSortingOrder())} className='btn btn-sm mb-3'>{sortingOrder === 'asc' ? 'Sort by last upload' : 'Sort by first upload'}</button>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                {
                    contents.map(content => <ContentCard key={content._id} content={content} />)
                }
            </div>
        </>
    );
};

export default Home;