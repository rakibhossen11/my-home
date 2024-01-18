import { Input, Option, Select } from "@material-tailwind/react";
import React from "react";
import Calendar from "react-calendar";
import { useForm } from "react-hook-form";
import { Link, useLoaderData } from "react-router-dom";

const Rent = () => {
  const { register, handleSubmit, reset } = useForm();
  const user = useLoaderData();
  const {_id, name, rent, code, } = user;
  console.log(user);
  const onSubmit = (data) => {
    console.log(data);
    const inputArray = [];
    inputArray.push(data);
    console.log(inputArray);
  };

  return (
    <div className="w-full px-12">
      <form
        className="p-10 rounded-lg font-display text-2xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="form-control w-full">
          <label>
            <span>Name</span>
          </label>
          <input
            {...register("name")}
            className="input rounded-lg w-full h-10 p-2 mt-4 mb-2"
            placeholder="Name"
            value={name}
          />
        </div>
        <div className="form-control w-full">
          <label>
            <span>Code</span>
          </label>
          <input
            {...register("code")}
            className="input rounded-lg w-full h-10 p-2 mt-4 mb-2"
            placeholder="Code"
            value={code}
          />
        </div>
        <div className="form-control w-full">
          <label>
            <span>Outstanding</span>
          </label>
          <input
            {...register("outstanding")}
            className="input rounded-lg w-full h-10 p-2 mt-4 mb-2"
            placeholder="Outstanding"
            value={code}
          />
        </div>
        <div className="form-control w-full">
          <label>
            <span>Month Name</span>
          </label>
          <input
            {...register("month")}
            className="input rounded-lg w-full h-10 p-2 mt-4 mb-2"
            placeholder="Month Name"
            type="month"
          />
        </div>
        <div className="form-control w-full">
          <label>
            <span>Time</span>
          </label>
          <input
            {...register("time")}
            className="input rounded-lg w-full h-10 p-2 mt-4 mb-2"
            placeholder="time"
            type="time"
          />
        </div>
        <div className="form-control w-full">
          <label>
            <span>Date</span>
          </label>
          <input
            {...register("date")}
            className="input rounded-lg w-full h-10 p-2 mt-4 mb-2"
            placeholder="date"
            type="date"
          />
        </div>
        <div className="form-control w-full">
          <label>
            <span>Rent</span>
          </label>
          <input
            {...register("rent")}
            className="input rounded-lg w-full h-10 p-2 mt-4 mb-2"
            placeholder="Rent"
            value={rent}
          />
        </div>
        <div className="form-control w-full">
          <label>
            <span>Amount</span>
          </label>
          <Input {...register("amount")} className="" placeholder="Amount" />
        </div>
        <input
          className="w-full font-display text-2xl bg-[#6495ED] rounded-lg text-white py-3 mt-10"
          type="submit"
          value="Cost Add"
        />
      </form>
    </div>
  );
};

export default Rent;
