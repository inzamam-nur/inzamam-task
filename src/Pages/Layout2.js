import React from 'react';
import { useLoaderData } from 'react-router-dom';
import moment from 'moment'


const Layout2 = () => {
    const user_info=useLoaderData();
    return (
        <div>
        <h1 className="text-center text-3xl my-3 ">
          {" "}
         
        </h1>
        
        <div className="overflow-x-auto mx-auto max-w-[80%]">
          <table className="table w-full">
            <thead>
              <tr>
                <th>No</th>
                <th>Fullname</th>
                <th>Date Of birth</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {user_info?.map((user, index) => {
                return (
                  <tr>
                    <th>{index + 1}</th>
                    <td>{user.fullname}</td>
                    <td>{moment(user.Date_of_birth).format("DD-MM-YYYY")}
</td>
                    <td>{user.email}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default Layout2;