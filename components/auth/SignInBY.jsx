import React from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { useSession, signIn, signOut } from "next-auth/react";
function SignInBY() {
  const { data: session } = useSession();
  // console.log(session);
  return (
    <div className="py-7 flex flex-col space-y-6 items-center justify-center">
      <p className="text-sm text-gray-950 font-sans capitalize ">
        or sign in with
      </p>
      {/* facebook */}
      <div className=" group transition-all  flex items-center py-5 border w-full justify-center space-x-3 border-[#3554d1] hover:md:bg-mainColor rounded-2xl ">
        <FaFacebook className="text-xl transition-all text-mainColor group-hover:md:text-white " />
        <button className="text-lg transition-all font-medium text-mainColor font-sans capitalize group-hover:md:text-white">
          {" "}
          FaceBook
        </button>
      </div>
      {/* google */}
      <div
        onClick={() => {
          signIn("google");
        }}
        className=" group transition-all  flex items-center py-5 border w-full justify-center space-x-3 border-[#3554d1] hover:md:bg-mainColor rounded-2xl "
      >
        <FaGoogle className="text-xl transition-all text-mainColor group-hover:md:text-white " />
        <button className="text-lg transition-all font-medium text-mainColor font-sans capitalize group-hover:md:text-white">
          {" "}
          Google
        </button>
      </div>
      <button
        onClick={() => {
          signOut();
        }}
      >
        logout
      </button>
      <p className="text-sm text-gray-950 font-sans capitalize">
        By signing in, I agree to GoTrip Terms of Use and Privacy Policy.
      </p>
    </div>
  );
}

export default SignInBY;
