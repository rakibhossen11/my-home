import { Input } from 'postcss';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddClient = () => {
    const {register,handleSubmit,reset} = useForm();
    const onSubmit = (data) =>{
        console.log(data)
    }
    return (
        <form className='mx-auto max-w-5xl mt-10' onSubmit={handleSubmit(onSubmit)}>
            <div className='form-control w-full'>
                <label>
                    <span>Name</span>
                </label>
                <input {...register('name')} className='input rounded-lg w-full h-10 p-2 bg-orange-200' placeholder='Enter Name' />
            </div>
            <div className='form-control w-full'>
                <label>
                    <span>Room No</span>
                </label>
                <input {...register('room-no')} className='input rounded-lg w-full h-10 p-2 bg-orange-200' placeholder='Room No' />
            </div>
            <div className='form-control w-full'>
                <label>
                    <span>Room Type</span>
                </label>
                <input {...register('room-type')} className='input rounded-lg w-full h-10 p-2 bg-orange-200' placeholder='Room Type' />
            </div>
            <div className='form-control w-full'>
                <label>
                    <span>Rent Rate</span>
                </label>
                <input {...register('rent-rate')} className='input rounded-lg w-full h-10 p-2 bg-orange-200' placeholder='Rent Rate' />
            </div>
            <input className='w-full font-display text-2xl bg-[#6495ED] rounded-lg text-white py-3 mt-10' type='submit' value='Client Add' />
        </form>
    );
};

export default AddClient;