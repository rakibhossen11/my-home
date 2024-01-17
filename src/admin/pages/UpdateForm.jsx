import React from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const person = useLoaderData();
  const {_id, code, name, rent, } = person;
  console.log(person);
  
  const onSubmit = (data) => {
    console.log(data);
    // update data from client side
    fetch(`http://localhost:5000/clients/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
            Swal.fire({
                title: 'Success!',
                text: 'Person Updated Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
            })
        }
      })
  };

  return (
    <form
      className="mx-auto w-full p-10 rounded-lg font-display text-2xl"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="form-control w-full">
        <label>
          <span>Customer Code</span>
        </label>
        <input
          {...register("code")}
          className="input rounded-lg w-full h-10 p-2 mt-4 mb-2"
          placeholder="code"
          defaultValue={code}
        />
      </div>
      <div className="form-control w-full">
        <label>
          <span>Name</span>
        </label>
        <input
          {...register("name")}
          className="input rounded-lg w-full h-10 p-2 mt-4 mb-2"
          placeholder="Name"
          defaultValue={name}
        />
      </div>
      {/* <div className="form-control w-full">
        <label>
          <span>Month Name</span>
        </label>
        <input
          {...register("month")}
          className="input rounded-lg w-full h-10 p-2 mt-4 mb-2"
          placeholder="Month Name"
          type="month"
        />
      </div> */}
      <div className="form-control w-full">
        <label>
          <span>Rent Per Month</span>
        </label>
        <input
          {...register("amount")}
          className="input rounded-lg w-full h-10 p-2 mt-4 mb-2"
          placeholder="Amount"
          defaultValue={rent}
        />
      </div>
      <div className="form-control w-full">
        <label>
          <span>Address</span>
        </label>
        <input
          {...register("address")}
          className="input rounded-lg w-full h-10 p-2 mt-4 mb-2"
          placeholder="Address"
        />
      </div>
      <input
        className="w-full font-display text-2xl bg-[#6495ED] rounded-lg text-white py-3 mt-10"
        type="submit"
        value="Customer Update"
      />
    </form>
  );
};

export default UpdateForm;
