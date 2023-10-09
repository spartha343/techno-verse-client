import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ContentDetails = () => {
    const { id } = useParams();
    const contents = useSelector(state => state.contents) ?? [];
    const content = contents.find(c => c._id === id);
    const { image, keyFeature, model, price, rating, spec, status } = content ?? {};
    return (
        <div className='flex justify-evenly'>
            <div className='lg:w-1/2 m-3'>
                <img className='rounded-2xl' src={image} alt={model} />
            </div>
            <div className='lg: w-1/2 m-3'>
                <h3 className='text-xl'>{model}</h3>
                <p className='text-lg'>Rating: {rating}</p>
                <p>Price: ${price}</p>
                <p>Stock: {status ? 'Available' : 'Not Available'}</p>
                <h3 className='mt-3'>Key Features:</h3>
                <ul>
                    {
                        keyFeature.map((kf, idx) => <li key={idx} className='list-disc list-inside'>{kf}</li>)
                    }
                </ul>
                <h3 className='mt-3'>Specifications:</h3>
                <ul>
                    {
                        spec.map((s, idx) => <li key={idx} className='list-disc list-inside'>{Object.keys(s)[0]} : {s[Object.keys(s)[0]]}</li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default ContentDetails;