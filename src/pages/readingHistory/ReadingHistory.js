import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToReadingHistory } from '../../redux/actionCreators/contentActions';

const ReadingHistory = () => {

    const dispatch = useDispatch();
    const readingHistoryIds = useSelector(state => state.readingHistories) ?? [];
    const contents = useSelector(state => state.contents) ?? [];
    let readingHistories = []
    readingHistoryIds.forEach(id => {
        readingHistories.push(contents.find(content => content._id === id));
    });

    return (
        <div className=''>
            {
                readingHistories.length ?
                    readingHistories.map(readingHistory => <div className="card card-side bg-base-200 shadow-xl mb-7">
                        <figure className='h-20 w-20'><img src={readingHistory.image} alt="Movie" /></figure>
                        <div className="card-body p-3 flex flex-row justify-between items-center">
                            <div>
                                <h2 className="card-title">{readingHistory.model}</h2>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, reprehenderit.</p>
                            </div>
                            <div>
                                <Link to={`/content-details/${readingHistory._id}`}>
                                    <button onClick={() => dispatch(addToReadingHistory(readingHistory._id))} className="btn btn-primary">See Details</button>
                                </Link>
                            </div>
                        </div>
                    </div>)
                    :
                    <div className='flex justify-center items-center min-h-[300px]'>
                        <h2 className='text-4xl'>Not Available</h2>
                    </div>
            }
        </div>
    );
};

export default ReadingHistory;