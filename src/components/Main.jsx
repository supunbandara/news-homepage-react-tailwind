import React from "react";

import { images } from "../constants";

const Main = () => {
  return (
    <>
      <div className="grid lg:grid-cols-3 grid-cols-1 grid-flow-row auto-rows-max gap-8">
        <div className="lg:col-span-2 col-span-1">
          <div className="grid lg:grid-cols-4 lg:grid-rows-1 gap-8">
            <div className="col-span-full">
              <img
                src={images.desktopHero}
                className="w-full hidden lg:block"
                alt=""
              />
              <img
                src={images.mobileHero}
                className="w-full block lg:hidden"
                alt=""
              />
            </div>
            <div className="lg:col-span-2 lg:row-start-2 lg:row-end-[-1] placeholder:py-0 pr-2">
              <h2 className="lg:text-7xl text-4xl text-very-dark-blue font-bold">
                The Bright Future of Web 3.0?
              </h2>
            </div>

            <div className="lg:col-span-2 lg:row-start-2 lg:row-end-[-1] pb-8">
              <p className="lg:text-xl text-dark-grayish-blue lg:pb-12 pb-6 font-medium">
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <button className="text-white bg-soft-red hover:bg-very-dark-blue uppercase text-sm lg:text-lg lg:py-4 lg:px-6 py-3 px-5 tracking-[0.3rem] font-semibold">
                Read more
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-rows-1 lg:p-8 p-4 bg-very-dark-blue">
          <div className="row-span-1">
            <h3 className="text-soft-orange lg:text-5xl text-3xl font-bold lg:pb-8 lg:pt-3 pb-8">
              New
            </h3>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <a
                  href=""
                  className="text-white hover:text-soft-orange lg:text-2xl text-xl font-bold"
                >
                  Hydrogen VS Electric Cars
                </a>
                <a href="" className="text-grayish-blue lg:text-xl text-md">
                  Will hydrogen-fueled cars ever catch up to EVs?
                </a>
                <span className="w-full border border-dark-grayish-blue lg:my-7 my-3"></span>
              </div>
              <div className="flex flex-col gap-4">
                <a
                  href=""
                  className="text-white hover:text-soft-orange lg:text-2xl text-xl font-bold"
                >
                  The Downsides of AI Artistry
                </a>
                <a href="" className="text-grayish-blue lg:text-xl text-md">
                  What are the possible adverse effects of on-demand AI image
                  generation?
                </a>
                <span className="w-full border border-dark-grayish-blue lg:my-7 my-3"></span>
              </div>
              <div className="flex flex-col gap-4 lg:pb-7 pb-2">
                <a
                  href=""
                  className="text-white hover:text-soft-orange lg:text-2xl text-xl font-bold"
                >
                  Is VC Funding Drying Up?
                </a>
                <a href="" className="text-grayish-blue lg:text-xl text-md">
                  Private funding by VC firms is down 50% YOY. We take a look at
                  what that means.
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 grid-cols-1 grid-flow-row auto-rows-max gap-8 py-10">
        <div className="flex flex-row">
          <img src={images.retro} className="w-32 h-fit pr-6" alt="" />
          <div className="flex flex-col">
            <h2 className="text-4xl font-bold text-gray-300 pb-2">01</h2>
            <a className="cursor-pointer text-xl font-bold text-very-dark-blue hover:text-soft-red pb-2">
              Reviving Retro PCs
            </a>
            <p className="text-dark-grayish-blue font-medium">
              What happens when old PCs are given modern upgrades?
            </p>
          </div>
        </div>

        <div className="flex flex-row">
          <img src={images.laptop} className="w-32 h-fit pr-6" alt="" />
          <div className="flex flex-col">
            <h2 className="text-4xl font-bold text-gray-300 pb-2">02</h2>
            <a className="cursor-pointer text-xl font-bold text-very-dark-blue hover:text-soft-red pb-2">
              Top 10 Laptops of 2022
            </a>
            <p className="text-dark-grayish-blue font-medium">
              Our best picks for various needs and budgets.
            </p>
          </div>
        </div>

        <div className="flex flex-row">
          <img src={images.gaming} className="w-32 h-fit pr-6" alt="" />
          <div className="flex flex-col">
            <h2 className="text-4xl font-bold text-gray-300 pb-2">03</h2>
            <a className="cursor-pointer text-xl font-bold text-very-dark-blue hover:text-soft-red pb-2">
              The Growth of Gaming
            </a>
            <p className="text-dark-grayish-blue font-medium">
              How the pandemic has sparked fresh opportunities.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
