import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="flex-1 ">

    <Link to='/'><button className='btn text-sm mr-2'>Layout1</button></Link>
    <Link to='/layout2'><button className='btn text-sm mr-2'>Layout2</button></Link>
    <Link to='layout3'><button className='btn text-sm mr-2'>Layout3</button></Link>
  </div>

</div>
        </div>
    );
};

export default Navbar;