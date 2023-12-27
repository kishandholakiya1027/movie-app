import BackgroundComponent from "@/components/common/backgroundComponent";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

const Index = (props) => {
  const [movie, setMovie] = useState()
  const [error, setError] = useState({})
  const [imageUrl, setImageUrl] = useState()
  const fileRef = useRef()
  const router = useRouter()
  const handleCancel = () => {
    router.push("/")
    // Add your cancel logic here
  };

  useEffect(() => {
    if (router?.query?.id !== "new") {
      geOneMovie()
    }
  }, [router?.query])

  const geOneMovie = async () => {
    await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/movies/${router?.query?.id}`, {
      headers: {
        "Authorization": localStorage.getItem("token")
      }
    }).then(res => {
      if (res?.status === 200) {
        let data = { ...res?.data }
        delete data["image"]
        setMovie(data)
        setImageUrl(`${process.env.NEXT_PUBLIC_API_URL}${res?.data?.image}`)
      }
    }).catch(err => {

    })
  }

  const handleSubmit = async () => {
    let err = { ...error }
    if (!movie?.title || !movie?.publish_year || !imageUrl) {
      if (!movie?.title) {
        err = { ...err, title: true }
      }
      if (!movie?.publish_year || !/[0-9]{4}/.test(movie?.publish_year?.toString())) {
        err = { ...err, publish_year: true }
      }
      if (!imageUrl) {
        err = { ...err, image: true }
      }
      setError(err)
      return
    }
    const formdata = new FormData()
    formdata.append("title", movie?.title)
    formdata.append("publish_year", movie?.publish_year?.toString())
    if (movie?.image) {
      formdata.append("image", movie?.image)
    }
    if (router?.query?.id === "new") {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/movies/add`, formdata, { headers: { "Content-Type": "multipart/form-data", "Authorization": localStorage.getItem("token") } }).then(res => {
        if (res?.status === 200) {
          router.push("/")
        }
      }).catch(err => {
        toast(err?.response?.data?.message||err?.message)
        console.log(err)
      })

    } else {
      await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/movies/edit/${router?.query?.id}`, formdata, { headers: { "Content-Type": "multipart/form-data", "Authorization": localStorage.getItem("token") } }).then(res => {
        if (res?.status === 200) {
          router.push("/")
        }
      }).catch(err => { 
        toast(err?.response?.data?.message||err?.message)
        console.log(err)
      })
    }

    // Add your submit logic here
  };

  return (
    <BackgroundComponent>
      <header className="flex w-[1200px] max-md:w-[500px] max-sm:w-[400px] max-lg:w-[880px] max-xl:w-[1000px] max-w-full flex-col items-stretch  mt-20 max-md:mt-10">
        <h1 className="text-white text-center text-5xl font-semibold leading-[56.16px] max-md:max-w-full max-md:text-4xl">
          {router?.query?.id === "new" ? "Create a new movie" : "Edit"}
        </h1>
        <div className="mt-28 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[58%] max-md:w-full max-md:ml-0">
              <div onClick={() => fileRef.current.click()} onDrop={(e) => {

              }} className="cursor-pointer bg-cyan-900 flex grow flex-col justify-center items-center  px-16 py-12 rounded-xl border-2 border-dashed border-white max-md:max-w-full max-md:mt-10 max-md:px-5">
                {imageUrl ? <img src={imageUrl} className="w-[58%] aspect-square object-contain object-center w-6 overflow-hidden max-w-full" /> : <div className="flex w-[138px] max-w-full flex-col items-center mt-44 mb-32 max-md:my-10">
                  <img
                    loading="lazy"

                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf49c35874e1e69a1bfe79186ae811e6617d73e2fbc3b0e8e636c2a8ed8639d5?apiKey=0fe18961186a4286998beda9badba529&"
                    className="aspect-square cursor-pointer object-contain object-center w-6 overflow-hidden max-w-full"
                  />
                  <div className="text-white text-center text-sm leading-6 self-stretch whitespace-nowrap mt-4">
                    Drop an image here
                  </div>
                </div>}
                <input
                  ref={fileRef}
                  onChange={(e) => {
                    setImageUrl(window.URL.createObjectURL(e?.target?.files[0]))
                    setError({...error,image:false})

                    setMovie({ ...movie, image: e?.target?.files[0] })
                  }}
                  className="w-[138px] "
                  hidden
                  type="file" />
              </div>
              <p className="text-[#ff0000] text-xs w-[100%] flex justify-start ms-4">{error?.image ? "Please upload a image" : ""}</p>
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
                    value={movie?.title}
                    onChange={(e) => {
                      setError({...error,title:false})
                      setMovie({ ...movie, title: e?.target?.value })
                    }}
                  />
                </div>
                <p className="text-[#ff0000] text-xs w-[100%] flex justify-start ms-4">{error?.title ? "Please enter a title" : ""}</p>

                <div className="text-white text-center text-sm leading-6 bg-cyan-900 justify-center mt-6 pl-5 pr-16 py-4 rounded-xl items-start max-md:pr-5">
                  <label htmlFor="publishing-year">Publishing year</label>
                  <input
                    type="number"
                    id="publishing-year"
                    aria-label="Publishing Year input"
                    value={movie?.publish_year}

                    className="input"
                    onChange={(e) => {
                      setError({...error,publish_year:false})
                      setMovie({ ...movie, publish_year: e?.target?.value })
                    }}
                  />
                </div>
                <p className="text-[#ff0000] text-xs w-[100%] flex justify-start ms-4">{error?.publish_year ? "Please enter a valid publish year" : ""}</p>

                <div className="flex items-stretch justify-between gap-4 mt-16 max-md:mt-10">
                  <button onClick={handleCancel} className="text-white  bg-cyan-900 text-center text-base font-bold leading-6 whitespace-nowrap justify-center items-stretch border grow px-14 py-6 rounded-xl border-solid border-white max-md:px-5">
                    Cancel
                  </button>
                  <button onClick={handleSubmit} className="text-white text-center text-base font-bold leading-6 whitespace-nowrap justify-center items-stretch bg-emerald-400 grow px-16 py-6 rounded-xl max-md:px-5">
                    {router?.query?.id === "new" ? "Submit" : "Update"}
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
