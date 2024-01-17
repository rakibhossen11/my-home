import React from "react";
import profile from "../../assets/home2.jpg";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ClientDetails = () => {
  const client = useLoaderData();
  const {_id, code, name} = client;
  // console.log(client._id);

  // delete a person
  const handleDelete = (id) =>{
    console.log(id)

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/clients/${_id}`,{
          method: 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
          console.log(data)
          if(data.deletedCount > 0){
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
            // const remaning = coffees.filter(cof => cof._id !== _id);
            // setCoffees(remaning);
          }
        })
      }
    })
  };

  
  return (
    <div className="w-full">
      <div className="flex p-10 m-10 gap-5  bg-gray-100">
        <div>
          <img className="h-20 w-20 rounded-lg" src={profile} />
        </div>
        <div className="font-display text-2xl">
          <h1>Name: {name}</h1>
          <h1>Phone: 01966366745</h1>
          <h1>Address: Jamalpur</h1>
          <h1>Id : {_id}</h1>
          <h1>Code : {code}</h1>
          <div className="flex gap-[50px]">
          <Link to={`/dashboard/updateForm/${_id}`}><h2>Edit</h2></Link>
          {/* <Link><h2 onClick={() => handleDelete(_id)}>Remove</h2></Link> */}
          </div>
        </div>
      </div>
      {/* data table */}
      <div className="px-12 rounded-lg">
        <table className="w-full rounded-lg mt-10">
          <thead className="font-display uppercase text-lg text-left">
            <tr className="bg-dark-purple text-white origin-left font-display text-xl">
              <th className="px-6 py-3">Month Name</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Total Amount</th>
              <th className="px-6 py-3">Paid</th>
              <th className="px-6 py-3">Unpaid</th>
            </tr>
          </thead>
          <tbody className="text-[#000000] font-regular uppercase text-lg text-left">
            <tr className="border-b-2 border-[#000000]">
              <th className="px-6 py-3 ">Octobor 23</th>
              <th className="px-6 py-3 ">Paid</th>
              <th className="px-6 py-3 ">3000</th>
              {/* <th className='px-6 py-3 '></th> */}
              <th className="px-6 py-3 ">3000</th>
              <th className="px-6 py-3 ">0</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClientDetails;
