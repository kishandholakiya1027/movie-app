import BackgroundComponent from "@/components/common/backgroundComponent";
import React from "react";

const Index = () => {
  const handleCancel = () => {
    console.log("Cancel clicked");
    // Add your cancel logic here
  };

  const handleSubmit = () => {
    console.log("Submit clicked");
    // Add your submit logic here
  };

  return (
    <BackgroundComponent>
      <header className="flex w-[1200px] max-w-full flex-col items-stretch  mt-20 max-md:mt-10">
        <h1 className="text-white text-center text-5xl font-semibold leading-[56.16px] max-md:max-w-full max-md:text-4xl">
          Create a new movie{" "}
        </h1>
        <div className="mt-28 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[58%] max-md:w-full max-md:ml-0">
              <div className="bg-cyan-900 flex grow flex-col justify-center items-center  px-16 py-12 rounded-xl border-2 border-dashed border-white max-md:max-w-full max-md:mt-10 max-md:px-5">
                <div className="flex w-[138px] max-w-full flex-col items-center mt-44 mb-32 max-md:my-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf49c35874e1e69a1bfe79186ae811e6617d73e2fbc3b0e8e636c2a8ed8639d5?apiKey=0fe18961186a4286998beda9badba529&"
                    className="aspect-square object-contain object-center w-6 overflow-hidden max-w-full"
                  />
                  <div className="text-white text-center text-sm leading-6 self-stretch whitespace-nowrap mt-4">
                    Drop an image here
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[42%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex flex-col items-stretch max-md:mt-10">
                <div className="text-white text-center text-sm leading-6 whitespace-nowrap bg-cyan-900 justify-center pl-4 pr-16 py-5 rounded-xl items-start max-md:pr-5">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    id="title"
                    aria-label="Title input"
                    className="input"
                  />
                </div>
                <div className="text-white text-center text-sm leading-6 bg-cyan-900 justify-center mt-6 pl-5 pr-16 py-4 rounded-xl items-start max-md:pr-5">
                  <label htmlFor="publishing-year">Publishing year</label>
                  <input
                    type="text"
                    id="publishing-year"
                    aria-label="Publishing Year input"
                    className="input"
                  />
                </div>
                <div className="flex items-stretch justify-between gap-4 mt-16 max-md:mt-10">
                  <button className="text-white  bg-cyan-900 text-center text-base font-bold leading-6 whitespace-nowrap justify-center items-stretch border grow px-14 py-6 rounded-xl border-solid border-white max-md:px-5">
                    Cancel
                  </button>
                  <button className="text-white text-center text-base font-bold leading-6 whitespace-nowrap justify-center items-stretch bg-emerald-400 grow px-16 py-6 rounded-xl max-md:px-5">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </BackgroundComponent>
  );
};

export default Index;
