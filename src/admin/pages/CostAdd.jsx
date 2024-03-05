import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';



const CostAdd = () => {
    const {register,handleSubmit,reset} = useForm();

    const onSubmit = (costs) =>{
        console.log(costs)
        fetch("https://myhome-server.vercel.app/costs",{
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(costs)
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            if (data.acknowledged == true) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Cost Add Successfuly',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            }
        })
    }
    return (
        <form className='w-full mt-10 p-10 rounded-lg font-display text-2xl' onSubmit={handleSubmit(onSubmit)}>
            <div className='form-control w-full'>
                <label>
                    <span>Date</span>
                </label>
                <input type='date' {...register('date')} className='input rounded-lg w-full h-10 p-2 mt-4 mb-2' placeholder='Date' />
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