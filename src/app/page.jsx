"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const route  = useRouter();
  const handelBtn = () => {
    
    const password = prompt("Enter Your Password");
    console.log(password);
    if(password == "1234"){
     route.push("/dashbord")
    }
    
  };
  return (
    <div>
      <div className="text-center space-y-5 bg-sky-100 from-orange-200 to-green-200 text-black p-15 justify-center items-center">
        <h1 className=" text-5xl font-semibold text-center ">
          Wellcome Dev-Studeo
        </h1>
        <button
          onClick={handelBtn}
          className=" bg-amber-200 px-5 py-3 rounded-xl hover:bg-black hover:text-white  "
        >
          Share Story
        </button>
      </div>
    </div>
  );
}
