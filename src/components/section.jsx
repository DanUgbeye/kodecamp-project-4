import React from "react";

const Section = ({ header, body, isTransparent=true, extraStyles, children }) => {
  return (
    <div
      className={` w-full p-8 text-textDeep ${
        isTransparent ? " bg-transparent " : " bg-[#DBC1ED] "
      } ${extraStyles ? extraStyles : ""} `}
    >
      {header && <h3 className=" text-3xl mb-4 ">{header}</h3>}

      {body && <p className="  ">{body}</p>}

      {children && children}
    </div>
  );
};

export default Section;
