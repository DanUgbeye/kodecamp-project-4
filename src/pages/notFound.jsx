import React from 'react'

const NotFound = () => {
  return (
    <div className=' absolute top-[50%] translate-y-[-50%] w-full min-h-[80vh] text-[#76568A] flex flex-col justify-center items-center '>
        <div className=" flex items-center mb-2 ">
            <span className=' text-5xl pr-2 mr-2 font-semibold border-r-2 border-solid border-[#76568A] '>404</span>
            <span className=' text-2xl '>Page Not Found</span>
        </div>
        <small>The page you are looking for does not exist</small>
    </div>
  );
}

export default NotFound;