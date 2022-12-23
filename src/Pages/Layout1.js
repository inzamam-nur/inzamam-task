import React, { useState } from "react";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
const Layout1 = ({setReload}) => {
  const [startDate, setStartDate] = useState(new Date());
  const submit=(e)=>{
 e.preventDefault();
 const form = e.target;
 const fullname = form.fullname.value;
 const Date_of_birth=startDate;
 const email = form.email.value;
const phonenumber=form.phonenumber.value

 const user={
fullname,
email,
Date_of_birth,
phonenumber,

 };
 console.log(user)
 fetch("https://inzamam-job-task-server-side.vercel.app/userinfo", {
  method: "POST",
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify(user),
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    if (data.acknowledged) {
      alert("added successfully");
      form.reset();
    }
  })
  .catch((er) => console.error(er));
  }
  return (
    <div>
      <div className="mt-5 	">
        <section className="">
          <div className="">
            <div className=" xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              <form onSubmit={submit}>
                <div className="grid grid-cols-2 gap-1">
                  <label className="text-l mr-10">Full Name :</label>
                  <div className="mb-6">
                    <input
                      type="text"
                      name="fullname"
                      className="ml-5 form-control block w-full px-4  text-l font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleFormControlInput2"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-1">
               <label className="text-l mr-10">Date of Birth:</label>
                <div >
                <DatePicker
                  selected={startDate}
                  className="ml-5 form-control block w-full px-4  text-l font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  required
                  onChange={(date) => setStartDate(date)}
                />
                </div>
               </div>
<br />
                <div className="grid grid-cols-2 gap-1">
                  <label className="text-l mr-10">Email :</label>
                  <div className="mb-6">
                    <input
                      type="email"
                      name="email"
                      className="ml-5 form-control block w-full px-4  text-l font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleFormControlInput2"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-1">
                  <label className="text-l mr-10">Phone Number:</label>
                  <div className="mb-6">
                    <input
                      type="number"
                      name="phonenumber"
                      className="ml-4 form-control block w-full px-4  text-l font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleFormControlInput2"
                      required
                    />
                  </div>
                </div>
              

                <div className="text-center lg:text-left">
                  <button
                    style={{ backgroundColor: "rgb(91,228,168)" }}
                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Layout1;
