import React from 'react';

const Layout3 = () => {
    return (
        <div className="grid grid-cols-6 gap-4">
        <div style={{backgroundColor:"#DA1E5D"}} className="col-start-1 text-center col-end-6 p-5 rounded">Card 1</div>
        <div style={{backgroundColor:"#DA1E5D"}} className=" items-center  col-start-1 col-end-1 p-5 pt-24 pb-24 text-center rounded">Card 2</div>
        <div style={{backgroundColor:"#DA1E5D"}} className="col-start-2 col-end-5 text-center p-5 pt-24 pb-24 text-center rounded">Card 3</div>
        <div style={{backgroundColor:"#DA1E5D"}} className="col-end-6 col-end-6 p-5 pt-24 pb-24 text-center rounded">Card 4</div>
        <div style={{backgroundColor:"#DA1E5D"}} className="col-start-1 col-end-6 text-center p-5 rounded">Card 5</div>
      </div>
    )
};

export default Layout3;