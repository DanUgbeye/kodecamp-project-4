import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/card";
import Section from "../components/section";

const Home = () => {
  return (
    <div className=" px-8 ">
      <div className=" flex flex-col relative mb-4 ">
        <img
          src="https://c4.wallpaperflare.com/wallpaper/315/696/891/purple-interior-interior-design-3d-design-wallpaper-preview.jpg"
          alt="purple furniture"
          className=" max-h-[80vh] "
        />
        <section
          className={
            " max-w-sm sm:absolute sm:left-0 sm:bottom-0 text-textDeep sm:text-white  "
          }
        >
          <h2 className=" text-4xl font-semibold sm:bg-textDeep/90 w-fit p-2 ">
            Welcome to PurpleX
          </h2>
          <p className=" sm:bg-textDeep/90 w-fit p-2 ">
            Got a job for us?
            <Link to={'contact'} className=" ml-4 bg-textDeep text-white sm:bg-white rounded-md px-2 py-1 sm:text-textDeep hover:bg-[#a489b8] hover:text-white ">Contact us</Link>
          </p>
        </section>
      </div>

      <Section
        header={"WE PROVIDE WORLD CLASS DECORATIONS"}
        body={"You will never be disappointed with us. We have lots of testimonials that will convince you."}
      />

      <div className="  ">
        <Section
          header={"Our Offices"}
          body={"Walk into any of our offices at "}
          extraStyles={"  "}
        >
          <div className=" mb-12 ">
            <ul className=" text-lg mt-8 font-semibold grid sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
              <li className="  ">
                <Card
                  name={"Showroom 43"}
                  address={"Free Plaza, 43 Johnson Street, Lagos"}
                />
              </li>
              <li className="  ">
                <Card
                  name={"Showroom 100"}
                  address={"Madisons Plaza, 02 Freeway Street, Port Harcourt"}
                />
              </li>
              <li className="  ">
                <Card name={"Shop 20"} address={"Igbudu Market, Warri"} />
              </li>
            </ul>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default Home;
