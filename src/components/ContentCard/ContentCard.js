import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToReadingHistory, selectTag } from '../../redux/actionCreators/contentActions';

const ContentCard = ({ content }) => {
    const dispatch = useDispatch();
    const { image, model, price, rating, _id, tags } = content ?? {};
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img className='h-80' src={image} alt="Shoes" /></figure>
            <div className="card-body relative">
                <h2 className="card-title">{model}</h2>

                <div className='mb-5'>
                    <h3>Rating: {rating}</h3>
                    <h3>Price: ${price}</h3>
                    {
                        tags?.map((tag, idx) => <button key={idx} onClick={() => dispatch(selectTag(tag))} className='btn btn-xs m-2'>{tag}</button>)
                    }
                </div>
                <div className="card-actions justify-end">
                    <Link to={`content-details/${_id}`}>
                        <button onClick={() => dispatch(addToReadingHistory(_id))} className="btn btn-primary btn-sm absolute bottom-5 right-5">See Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ContentCard;