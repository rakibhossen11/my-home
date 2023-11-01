import React from 'react';
import { useFormAction } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const CostAdd = () => {
    const {register,handleSubmit,reset} = useForm();
    const onSubmit = (costs) =>{
        console.log(costs)
        fetch("http://localhost:5000/costs",{
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(costs)
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
        })
    }
    return (
        <form className='mx-auto max-w-5xl mt-10 bg-[#e8f9fd] p-10 rounded-lg font-display text-2xl' onSubmit={handleSubmit(onSubmit)}>
            <div className='form-control w-full'>
                <label>
                    <span>Date</span>
                </label>
                <input {...register('date')} className='input rounded-lg w-full h-10 p-2 mt-4 mb-2' placeholder='Date' />
            </div>
            <div className='form-control w-full'>
                <label>
                    <span>Statement</span>
                </label>
                <input {...register('statement')} className='input rounded-lg w-full h-10 p-2 mt-4 mb-2' placeholder='Statement' />
            </div>
            <div className='form-control w-full'>
                <label>
                    <span>Amount</span>
                </label>
                <input {...register('amount')} className='input rounded-lg w-full h-10 p-2 mt-4 mb-2' placeholder='Amount' />
            </div>
            <input className='w-full font-display text-2xl bg-[#6495ED] rounded-lg text-white py-3 mt-10' type='submit' value='Cost Add' />
        </form>
    );
};

export default CostAdd;