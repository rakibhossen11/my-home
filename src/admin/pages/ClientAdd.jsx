import React from "react";
import { useForm } from "react-hook-form";

const ClientAdd = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="w-full p-12">
      <form  onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full">
          <label>
            <span>Name</span>
          </label>
          <input
            {...register("name")}
            className="input rounded-lg w-full h-10 p-2 mt-4 mb-2"
            placeholder="Name"
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
        <div className="form-control w-full">
          <label>
            <span>Rent Rate</span>
          </label>
          <input
            {...register("address")}
            className="input rounded-lg w-full h-10 p-2 mt-4 mb-2"
            placeholder="rant-rate"
          />
        </div>
      </form>
    </div>
  );
};

export default ClientAdd;
