import React from 'react';
import { AiTwotoneDelete } from 'react-icons/ai'
import { GrDocumentUpdate } from 'react-icons/gr'
import { useDispatch } from 'react-redux';
import deleteContent from '../../redux/thunk/deleteContent';
import { Link } from 'react-router-dom';

const SingleContent = ({ content, idx }) => {
    const dispatch = useDispatch();
    const { _id, model, image, price, status } = content;
    return (
        <tr>
            <th>{idx + 1}</th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} alt={model} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{model}</div>
                    </div>
                </div>
            </td>
            <td>
                {
                    status ? <span className='bg-green-300 p-1 rounded-lg'>Available</span> : <span className='bg-red-300 p-1 rounded-lg'>Not Available</span>
                }
            </td>
            <td className='text-right'>${price}</td>
            <th>
                <Link to={`/dashboard/update-content/${_id}`}><button className="btn btn-sm bg-yellow-300 mr-3"><GrDocumentUpdate size={20}></GrDocumentUpdate></button></Link>
                <button className="btn btn-sm bg-red-300" onClick={() => dispatch(deleteContent(_id))}><AiTwotoneDelete size={20}></AiTwotoneDelete></button>
            </th>
        </tr>
    );
};

export default SingleContent;