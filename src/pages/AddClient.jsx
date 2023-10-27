import { Input } from 'postcss';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddClient = () => {
    const {register,handleSubmit,reset} = useForm();
    const onSubmit = (data) =>{
        console.log(data)
    }
    return (
        <form className='mx-auto max-w-5xl mt-10 bg-[#e8f9fd] p-10 rounded-lg font-display text-2xl' onSubmit={handleSubmit(onSubmit)}>
            <div className='form-control w-full'>
                <label>
                    <span>Name</span>
                </label>
                <input {...register('name')} className='input rounded-lg w-full h-10 p-2 mt-4 mb-2' placeholder='Enter Name' />
            </div>
            <div className='form-control w-full'>
                <label>
                    <span>Arrival Month</span>
                </label>
                <input {...register('arrival-month')} className='input rounded-lg w-full h-10 p-2 mt-4 mb-2' placeholder='Arrival Month' />
            </div>
            <div className='form-control w-full'>
                <label>
                    <span>Rent Amount</span>
                </label>
                <input {...register('rent-amount')} className='input rounded-lg w-full h-10 p-2 mt-4 mb-2' placeholder='Rent Rate' />
            </div>
            <div className='form-control w-full'>
                <label>
                    <span>Advance</span>
                </label>
                <input {...register('advance')} className='input rounded-lg w-full h-10 p-2 mt-4 mb-2' placeholder='Advance' />
            </div>
            <input className='w-full font-display text-2xl bg-[#6495ED] rounded-lg text-white py-3 mt-10' type='submit' value='Client Add' />
        </form>
    );
};

export default AddClient;