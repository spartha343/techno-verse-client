import React from 'react';
import { useDispatch } from 'react-redux';
import addContent from '../../redux/thunk/addContent';

const AddContent = () => {
    const dispatch = useDispatch();
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const model = form.model.value.trim();
        const image = form.image.value.trim();
        const status = form.status.value === 'true' ? true : false;
        const price = parseFloat(form.price.value);
        const rating = parseFloat(form.rating.value);
        const keyFeature = [...form.keyFeature.value.split(',').map(tag => tag.trim())];
        const spec = [
            ...form.spec.value.split(',').map(pair => {
                const newpair = pair.split(':');
                return { [newpair[0]]: newpair[1].trim() }
            })
        ];
        const tags = [...form.tags.value.split(',').map(tag => tag.trim())];
        const updatedAT = new Date().getTime();
        const content = { model, image, status, price, rating, keyFeature, spec, tags, updatedAT }
        dispatch(addContent(content));
        form.reset();
    }
    return (
        <div className="hero min-h-screen bg-base-100 ">
            <div className="hero-content flex-col lg:flex-row-reverse w-full">
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <form className="card-body flex lg:flex-row" onSubmit={handleSubmit} >
                        <div className='lg:w-1/2 mx-3'>
                            <div className="form-control">
                                <label className="label"><span className="label-text">Model</span></label>
                                <input type="text" name='model' placeholder="model" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label"><span className="label-text">Image Link</span></label>
                                <input type="text" name='image' placeholder="Image Link" className="input input-bordered" required />
                            </div>
                            <div>
                                <h3 className='text-base'>Availability</h3>
                                <div className='flex'>
                                    <div className="form-control mr-10">
                                        <label className="label cursor-pointer">
                                            <input type="radio" name="status" value={true} className="radio checked:bg-green-500" defaultChecked />
                                            <span className="label-text ml-1"> Available</span>
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="label cursor-pointer">
                                            <input type="radio" name="status" value={false} className="radio checked:bg-red-500" />
                                            <span className="label-text ml-1"> Not Available</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label"><span className="label-text">Price</span></label>
                                <input type="number" name='price' placeholder="Price" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label"><span className="label-text">Rating</span></label>
                                <input type="number" name='rating' placeholder="Rating" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className='lg:w-1/2 mx-3'>
                            <div className="form-control">
                                <label className="label"><span className="label-text">Key Features</span></label>
                                <textarea className="textarea textarea-bordered h-24" name='keyFeature' placeholder="Add key features separated by ','(comma)" required></textarea>
                            </div>
                            <div className="form-control">
                                <label className="label"><span className="label-text">Specifications</span></label>
                                <textarea className="textarea textarea-bordered h-24" name='spec' placeholder="Add Specifications like 'key: value' pair separated by ','(comma)" required></textarea>
                            </div>
                            <div className="form-control">
                                <label className="label"><span className="label-text">Tags</span></label>
                                <textarea className="textarea textarea-bordered h-24" name='tags' placeholder="Add Tags separated by ','(comma)" required></textarea>
                            </div>
                            <div className='relative mb-12'>
                                <input type="submit" className='btn mt-3 absolute right-0 top-0' />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddContent;