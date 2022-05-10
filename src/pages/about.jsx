import React from "react";
import Section from "../components/section";


const About = () => {
const headerText = 
  `We are a leading interior decoration Company`

  const bodyText =
    `We handle all kinds osf interior decorations for offices, homes, schools etc. and we just never disappoint having a track record of excellent service.
    At PurpleX the customers satisfaction is our utmost concern and we won't stop until you are satisfied `;

  return (
    <div className=" sm:px-12 py-8 w-full max-w-4xl mx-auto flex flex-col items-center ">
      <h3 className=" relative text-[#614772] text-6xl text-center font-light mb-4 py-2 w-fit ">
        About Us
        <div className=" border-b-4 w-[4rem] absolute border-textDeep -bottom-2 "></div>
      </h3>

      <Section
        header={headerText}
        body={bodyText}
        isTransparent={true}
        extraStyles={" max-w-lg "}
      />
    </div>
  );
};

export default About;
