import React from "react";
import Card from "../components/card";
import Section from "../components/section";

const Contact = () => {


  return (
    <div className="  sm:px-12 py-8 w-full max-w-4xl mx-auto flex flex-col items-center ">
      <h3 className=" relative text-[#614772] text-6xl text-center font-light mb-4 py-2 w-fit ">
        Contact Us
        <div className=" border-b-4 w-[4rem] absolute border-textDeep -bottom-2 "></div>
      </h3>

      <Section
        header={"You can contact us via"}
        isTransparent={true}
        extraStyles={" max-w-lg "}
      >
        <Card name={'Call us at'} address={'+234 909 666 8882'} />
        <Card name={'Email'} address={'contactus@purplex.com'} />
      </Section>
    </div>
  );
};

export default Contact;
