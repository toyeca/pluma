import React from "react";
import UseData from "../../Hooks/UseData";
import Footer from "../../Share/Footer";
import "../../Share/Style.css";
import SliderCommon from "../../Share/SliderCommon";
import AboutCard from "./AboutCard";
import HomeCard from "../../Share/HomeCard";
import PageTitle from "../../Share/PageTitle";

const AboutTwo = () => {
  const { local, experienceArray } = UseData();

  return (
    <section>
      <PageTitle title="Sobre mi"></PageTitle>
      {/* End pagetitle */}

      <div className=" lg:rounded-2xl bg-white dark:bg-[#111111]">
        <div data-aos="fade">
          <div className=" pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14 ">
            {/* About page title */}
            <h2 className="after-effect after:left-52">Sobre mi</h2>
            <div className="lg:hidden">
              {/* Sidebar personal information for mobile devices */}
              <HomeCard />
            </div>
            <div className="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center hidden ">
              <div className="col-span-12 space-y-2.5">
                <div className="lg:mr-16">
                  <p className="text-gray-lite  dark:text-color-910 leading-7">
                    Alvaro Mayoral es un entrenador personal altamente
                    capacitado con títulos universitarios en su campo. Con su
                    pasión por la salud y el bienestar, Alvaro se ha dedicado a
                    ayudar a sus clientes a alcanzar sus metas físicas y mejorar
                    su calidad de vida. Con un enfoque en un entrenamiento
                    efectivo y seguro, Alvaro combina su conocimiento académico
                    con su experiencia práctica para ofrecer a sus clientes un
                    programa de entrenamiento personalizado que se adapta a sus
                    necesidades individuales.
                  </p>
                  <p className="text-gray-lite leading-7 mt-2.5 dark:text-color-910">
                    Si está buscando un entrenador confiable y comprometido,
                    Alvaro es la persona perfecta para ayudarlo a alcanzar sus
                    objetivos de fitness.
                  </p>
                </div>
                <div></div>
              </div>
            </div>
          </div>
          {/* End about descriptions */}

          <div className="  pb-12 px-2 sm:px-5 md:px-10 lg:px-14 ">
            <h3 className="text-[35px] dark:text-white font-medium pb-5">
              ¿Qué hago?
            </h3>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2 ">
              {/* Experience information  */}

              {experienceArray.map((item) => (
                <AboutCard key={Math.random()} item={item} local={local} />
              ))}
            </div>
          </div>
          {/* service provide end */}

          <div className="px-2 sm:px-5 md:px-10 lg:px-14 ">
            {/* Slick Slider call here  */}
            <SliderCommon />
          </div>

          {/* Common Footer call here */}
          <Footer bg={"#FFFF"} />
        </div>
      </div>
    </section>
  );
};

export default AboutTwo;
