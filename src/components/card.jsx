import React from 'react';

const Card = ({name, address}) => {
  return (
    <div className=' px-6 pb-6 max-w-[20rem] w-full rounded-md h-full overflow-hidden bg-[#E2D0F0] text-[#76568A] shadow-lg shadow-black/10 mb-4 '>
        <h2 className=' sticky top-0 left-0 right-0 pt-3 text-xl font-semibold mt-4 tracking-wide '>{name}</h2>

        <div className=" font-semibold  ">
            <span className=' font-normal '>{address}</span>
        </div>

    </div>
  )
}

export default Card;