import BackgroundComponent from "@/components/common/backgroundComponent";
import EmptyComponent from "@/components/movie/EmptyComponent";
import React, {useState} from "react";

const Index = () => {
  const [movies, setMovies] = useState([1]);
  return (
    <div>
      {movies?.length === 0 ? (
        <EmptyComponent />
      ) : (
        <BackgroundComponent>
          <div className="bg-cyan-950 flex flex-col ">
            <div className="self-center flex w-full max-w-[1195px] items-stretch justify-between gap-5 mt-10 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
              <div className="flex items-stretch justify-between gap-3.5 px-5">
                <div className="text-white text-center text-5xl font-semibold leading-[56.16px] grow whitespace-nowrap max-md:text-4xl">
                  My movies
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/2458447bcb19c56d053de29a3f2ba0340fbeafd47971acd9c682267e75e7b8fb?apiKey=0fe18961186a4286998beda9badba529&"
                  className="aspect-square object-contain object-center w-8 overflow-hidden self-center shrink-0 max-w-full my-auto"
                />
              </div>
              <div className="flex items-center gap-3 mt-1 px-5 self-start">
                <div className="text-white text-center text-base font-bold leading-6 my-auto">
                  Logout
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6403219dc2f85983944569113ec6ccd1be3e10eefa1b405a845c401990336088?apiKey=0fe18961186a4286998beda9badba529&"
                  className="aspect-square object-contain object-center w-8 overflow-hidden self-stretch shrink-0 max-w-full"
                />
              </div>
            </div>
            <div className="self-center w-full max-w-[1200px] mt-32 px-5 max-md:max-w-full max-md:mt-10">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0">
                  <div className="flex grow flex-col justify-center items-stretch max-md:mt-6">
                    <div className="items-stretch backdrop-blur-[100px] bg-teal-950 flex flex-col pt-2 pb-6 px-2 rounded-xl">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/13ab34e38bec799b5dc80d7b005eedf1dff934b8f3e941cfe937ce6dcc9785b3?apiKey=0fe18961186a4286998beda9badba529&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/13ab34e38bec799b5dc80d7b005eedf1dff934b8f3e941cfe937ce6dcc9785b3?apiKey=0fe18961186a4286998beda9badba529&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/13ab34e38bec799b5dc80d7b005eedf1dff934b8f3e941cfe937ce6dcc9785b3?apiKey=0fe18961186a4286998beda9badba529&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/13ab34e38bec799b5dc80d7b005eedf1dff934b8f3e941cfe937ce6dcc9785b3?apiKey=0fe18961186a4286998beda9badba529&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/13ab34e38bec799b5dc80d7b005eedf1dff934b8f3e941cfe937ce6dcc9785b3?apiKey=0fe18961186a4286998beda9badba529&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/13ab34e38bec799b5dc80d7b005eedf1dff934b8f3e941cfe937ce6dcc9785b3?apiKey=0fe18961186a4286998beda9badba529&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/13ab34e38bec799b5dc80d7b005eedf1dff934b8f3e941cfe937ce6dcc9785b3?apiKey=0fe18961186a4286998beda9badba529&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/13ab34e38bec799b5dc80d7b005eedf1dff934b8f3e941cfe937ce6dcc9785b3?apiKey=0fe18961186a4286998beda9badba529&"
                        className="aspect-[0.67] object-contain object-center w-full overflow-hidden"
                      />
                      <div className="text-white text-xl font-medium leading-8 mt-6">
                        Movie 1
                      </div>
                      <div className="text-white text-sm leading-6 mt-6">
                        2021
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                  <div className="flex grow flex-col justify-center items-stretch max-md:mt-6">
                    <div className="items-stretch backdrop-blur-[100px] bg-teal-950 flex flex-col pt-2 pb-6 px-2 rounded-xl">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/be7e2362ad114dbcad2f67ee0e75ada927e640c8af3358512ac1184b262f0792?apiKey=0fe18961186a4286998beda9badba529&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/be7e2362ad114dbcad2f67ee0e75ada927e640c8af3358512ac1184b262f0792?apiKey=0fe18961186a4286998beda9badba529&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/be7e2362ad114dbcad2f67ee0e75ada927e640c8af3358512ac1184b262f0792?apiKey=0fe18961186a4286998beda9badba529&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/be7e2362ad114dbcad2f67ee0e75ada927e640c8af3358512ac1184b262f0792?apiKey=0fe18961186a4286998beda9badba529&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/be7e2362ad114dbcad2f67ee0e75ada927e640c8af3358512ac1184b262f0792?apiKey=0fe18961186a4286998beda9badba529&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/be7e2362ad114dbcad2f67ee0e75ada927e640c8af3358512ac1184b262f0792?apiKey=0fe18961186a4286998beda9badba529&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/be7e2362ad114dbcad2f67ee0e75ada927e640c8af3358512ac1184b262f0792?apiKey=0fe18961186a4286998beda9badba529&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/be7e2362ad114dbcad2f67ee0e75ada927e640c8af3358512ac1184b262f0792?apiKey=0fe18961186a4286998beda9badba529&"
                        className="aspect-[0.67] object-contain object-center w-full overflow-hidden"
                      />
                      <div className="text-white text-xl font-medium leading-8 mt-6">
                        Movie 1
                      </div>
                      <div className="text-white text-sm leading-6 mt-6">
                        2021
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                  <div className="flex grow flex-col justify-center items-stretch max-md:mt-6">
                    <div className="items-stretch backdrop-blur-[100px] bg-teal-950 flex flex-col pt-2 pb-6 px-2 rounded-xl">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/be7e2362ad114dbcad2f67ee0e75ada927e640c8af3358512ac1184b262f0792?apiKey=0fe18961186a4286998beda9badba529&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/be7e2362ad114dbcad2f67ee0e75ada927e640c8af3358512ac1184b262f0792?apiKey=0fe18961186a4286998beda9badba529&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/be7e2362ad114dbcad2f67ee0e75ada927e640c8af3358512ac1184b262f0792?apiKey=0fe18961186a4286998beda9badba529&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/be7e2362ad114dbcad2f67ee0e75ada927e640c8af3358512ac1184b262f0792?apiKey=0fe18961186a4286998beda9badba529&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/be7e2362ad114dbcad2f67ee0e75ada927e640c8af3358512ac1184b262f0792?apiKey=0fe18961186a4286998beda9badba529&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/be7e2362ad114dbcad2f67ee0e75ada927e640c8af3358512ac1184b262f0792?apiKey=0fe18961186a4286998beda9badba529&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/be7e2362ad114dbcad2f67ee0e75ada927e640c8af3358512ac1184b262f0792?apiKey=0fe18961186a4286998beda9badba529&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/be7e2362ad114dbcad2f67ee0e75ada927e640c8af3358512ac1184b262f0792?apiKey=0fe18961186a4286998beda9badba529&"
                        className="aspect-[0.67] object-contain object-center w-full overflow-hidden"
                      />
                      <div className="text-white text-xl font-medium leading-8 mt-6">
                        Movie 1
                      </div>
                      <div className="text-white text-sm leading-6 mt-6">
                        2021
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                  <div className="flex grow flex-col justify-center items-stretch max-md:mt-6">
                    <div className="items-stretch backdrop-blur-[100px] bg-teal-950 flex flex-col pt-2 pb-6 px-2 rounded-xl">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ab1074d57b4d635f060c534eb48160ea69c691981b48d66a64a65d8478189dc0?apiKey=0fe18961186a4286998beda9badba529&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab1074d57b4d635f060c534eb48160ea69c691981b48d66a64a65d8478189dc0?apiKey=0fe18961186a4286998beda9badba529&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab1074d57b4d635f060c534eb48160ea69c691981b48d66a64a65d8478189dc0?apiKey=0fe18961186a4286998beda9badba529&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab1074d57b4d635f060c534eb48160ea69c691981b48d66a64a65d8478189dc0?apiKey=0fe18961186a4286998beda9badba529&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab1074d57b4d635f060c534eb48160ea69c691981b48d66a64a65d8478189dc0?apiKey=0fe18961186a4286998beda9badba529&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab1074d57b4d635f060c534eb48160ea69c691981b48d66a64a65d8478189dc0?apiKey=0fe18961186a4286998beda9badba529&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab1074d57b4d635f060c534eb48160ea69c691981b48d66a64a65d8478189dc0?apiKey=0fe18961186a4286998beda9badba529&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab1074d57b4d635f060c534eb48160ea69c691981b48d66a64a65d8478189dc0?apiKey=0fe18961186a4286998beda9badba529&"
                        className="aspect-[0.67] object-contain object-center w-full overflow-hidden"
                      />
                      <div className="text-white text-xl font-medium leading-8 mt-6">
                        Movie 1
                      </div>
                      <div className="text-white text-sm leading-6 mt-6">
                        2021
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-center w-full max-w-[1200px] mt-6 px-5 max-md:max-w-full">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0">
                  <div className="flex grow flex-col justify-center items-stretch max-md:mt-6">
                    <div className="items-stretch backdrop-blur-[100px] bg-teal-950 flex flex-col pt-2 pb-6 px-2 rounded-xl">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/13ab34e38bec799b5dc80d7b005eedf1dff934b8f3e941cfe937ce6dcc9785b3?apiKey=0fe18961186a4286998beda9badba529&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/13ab34e38bec799b5dc80d7b005eedf1dff934b8f3e941cfe937ce6dcc9785b3?apiKey=0fe18961186a4286998beda9badba529&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/13ab34e38bec799b5dc80d7b005eedf1dff934b8f3e941cfe937ce6dcc9785b3?apiKey=0fe18961186a4286998beda9badba529&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/13ab34e38bec799b5dc80d7b005eedf1dff934b8f3e941cfe937ce6dcc9785b3?apiKey=0fe18961186a4286998beda9badba529&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/13ab34e38bec799b5dc80d7b005eedf1dff934b8f3e941cfe937ce6dcc9785b3?apiKey=0fe18961186a4286998beda9badba529&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/13ab34e38bec799b5dc80d7b005eedf1dff934b8f3e941cfe937ce6dcc9785b3?apiKey=0fe18961186a4286998beda9badba529&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/13ab34e38bec799b5dc80d7b005eedf1dff934b8f3e941cfe937ce6dcc9785b3?apiKey=0fe18961186a4286998beda9badba529&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/13ab34e38bec799b5dc80d7b005eedf1dff934b8f3e941cfe937ce6dcc9785b3?apiKey=0fe18961186a4286998beda9badba529&"
                        className="aspect-[0.67] object-contain object-center w-full overflow-hidden"
                      />
                      <div className="text-white text-xl font-medium leading-8 mt-6">
                        Movie 1
                      </div>
                      <div className="text-white text-sm leading-6 mt-6">
                        2021
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                  <div className="flex grow flex-col justify-center items-stretch max-md:mt-6">
                    <div className="items-stretch backdrop-blur-[100px] bg-teal-950 flex flex-col pt-2 pb-6 px-2 rounded-xl">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/be7e2362ad114dbcad2f67ee0e75ada927e640c8af3358512ac1184b262f0792?apiKey=0fe18961186a4286998beda9badba529&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/be7e2362ad114dbcad2f67ee0e75ada927e640c8af3358512ac1184b262f0792?apiKey=0fe18961186a4286998beda9badba529&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/be7e2362ad114dbcad2f67ee0e75ada927e640c8af3358512ac1184b262f0792?apiKey=0fe18961186a4286998beda9badba529&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/be7e2362ad114dbcad2f67ee0e75ada927e640c8af3358512ac1184b262f0792?apiKey=0fe18961186a4286998beda9badba529&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/be7e2362ad114dbcad2f67ee0e75ada927e640c8af3358512ac1184b262f0792?apiKey=0fe18961186a4286998beda9badba529&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/be7e2362ad114dbcad2f67ee0e75ada927e640c8af3358512ac1184b262f0792?apiKey=0fe18961186a4286998beda9badba529&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/be7e2362ad114dbcad2f67ee0e75ada927e640c8af3358512ac1184b262f0792?apiKey=0fe18961186a4286998beda9badba529&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/be7e2362ad114dbcad2f67ee0e75ada927e640c8af3358512ac1184b262f0792?apiKey=0fe18961186a4286998beda9badba529&"
                        className="aspect-[0.67] object-contain object-center w-full overflow-hidden"
                      />
                      <div className="text-white text-xl font-medium leading-8 mt-6">
                        Movie 1
                      </div>
                      <div className="text-white text-sm leading-6 mt-6">
                        2021
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                  <div className="flex grow flex-col justify-center items-stretch max-md:mt-6">
                    <div className="items-stretch backdrop-blur-[100px] bg-teal-950 flex flex-col pt-2 pb-6 px-2 rounded-xl">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/be7e2362ad114dbcad2f67ee0e75ada927e640c8af3358512ac1184b262f0792?apiKey=0fe18961186a4286998beda9badba529&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/be7e2362ad114dbcad2f67ee0e75ada927e640c8af3358512ac1184b262f0792?apiKey=0fe18961186a4286998beda9badba529&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/be7e2362ad114dbcad2f67ee0e75ada927e640c8af3358512ac1184b262f0792?apiKey=0fe18961186a4286998beda9badba529&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/be7e2362ad114dbcad2f67ee0e75ada927e640c8af3358512ac1184b262f0792?apiKey=0fe18961186a4286998beda9badba529&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/be7e2362ad114dbcad2f67ee0e75ada927e640c8af3358512ac1184b262f0792?apiKey=0fe18961186a4286998beda9badba529&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/be7e2362ad114dbcad2f67ee0e75ada927e640c8af3358512ac1184b262f0792?apiKey=0fe18961186a4286998beda9badba529&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/be7e2362ad114dbcad2f67ee0e75ada927e640c8af3358512ac1184b262f0792?apiKey=0fe18961186a4286998beda9badba529&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/be7e2362ad114dbcad2f67ee0e75ada927e640c8af3358512ac1184b262f0792?apiKey=0fe18961186a4286998beda9badba529&"
                        className="aspect-[0.67] object-contain object-center w-full overflow-hidden"
                      />
                      <div className="text-white text-xl font-medium leading-8 mt-6">
                        Movie 1
                      </div>
                      <div className="text-white text-sm leading-6 mt-6">
                        2021
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                  <div className="flex grow flex-col justify-center items-stretch max-md:mt-6">
                    <div className="items-stretch backdrop-blur-[100px] bg-teal-950 flex flex-col pt-2 pb-6 px-2 rounded-xl">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ab1074d57b4d635f060c534eb48160ea69c691981b48d66a64a65d8478189dc0?apiKey=0fe18961186a4286998beda9badba529&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab1074d57b4d635f060c534eb48160ea69c691981b48d66a64a65d8478189dc0?apiKey=0fe18961186a4286998beda9badba529&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab1074d57b4d635f060c534eb48160ea69c691981b48d66a64a65d8478189dc0?apiKey=0fe18961186a4286998beda9badba529&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab1074d57b4d635f060c534eb48160ea69c691981b48d66a64a65d8478189dc0?apiKey=0fe18961186a4286998beda9badba529&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab1074d57b4d635f060c534eb48160ea69c691981b48d66a64a65d8478189dc0?apiKey=0fe18961186a4286998beda9badba529&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab1074d57b4d635f060c534eb48160ea69c691981b48d66a64a65d8478189dc0?apiKey=0fe18961186a4286998beda9badba529&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab1074d57b4d635f060c534eb48160ea69c691981b48d66a64a65d8478189dc0?apiKey=0fe18961186a4286998beda9badba529&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab1074d57b4d635f060c534eb48160ea69c691981b48d66a64a65d8478189dc0?apiKey=0fe18961186a4286998beda9badba529&"
                        className="aspect-[0.67] object-contain object-center w-full overflow-hidden"
                      />
                      <div className="text-white text-xl font-medium leading-8 mt-6">
                        Movie 1
                      </div>
                      <div className="text-white text-sm leading-6 mt-6">
                        2021
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-center flex items-center gap-2 mt-32 px-5 max-md:mt-10">
              <div className="text-white text-center text-base font-bold leading-6 grow whitespace-nowrap my-auto">
                Prev
              </div>
              <div className="text-white text-center text-base font-bold leading-6 whitespace-nowrap rounded bg-emerald-400 self-stretch aspect-square justify-center items-center h-8 px-3.5">
                1
              </div>
              <div className="text-white text-center text-base font-bold leading-6 whitespace-nowrap rounded bg-teal-950 self-stretch aspect-square justify-center items-center h-8 px-3">
                2
              </div>
              <div className="text-white text-center text-base font-bold leading-6 grow whitespace-nowrap my-auto">
                Next
              </div>
            </div>
          </div>
        </BackgroundComponent>
      )}
      {/* <div className="justify-end items-stretch bg-cyan-950 flex flex-col pt-12">
        <header className="text-white text-center text-5xl font-semibold leading-[56.16px] self-center mt-72 max-md:max-w-full max-md:text-4xl max-md:mt-10">
          Your movie list is empty
        </header>
        <a
          href="#"
          className="text-white text-center text-base font-bold leading-6 whitespace-nowrap items-stretch bg-emerald-400 self-center justify-center mt-10 px-7 py-4 rounded-xl max-md:mt-10 max-md:px-5"
        >
          Add a new movie
        </a>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/28e64ecf0fdebe471ddd694dbd5e5d6843c88d73702d91789d2b04d32e2b5ef7?apiKey=0fe18961186a4286998beda9badba529&"
          alt="Empty movie list"
          className="aspect-[12.97] object-contain object-center w-full overflow-hidden mt-52 max-md:max-w-full max-md:mt-10"
        />
      </div> */}
    </div>
  );
};
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${process.env.API_URL}/movies`)
  const repo = await res.json()
  // Pass data to the page via props
  return { props: { repo } }
}

export default Index;
