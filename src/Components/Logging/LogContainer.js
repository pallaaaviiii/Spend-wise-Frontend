import React, { useState } from "react";import Signup from "./Signup";
import SignIn from "./Signin";


export default function LogContainer() {
  const [isSignUp, setIsSignUp] = useState(true);

  const signningHandler = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: 'url("/IMG_2715.JPG")',
        minHeight: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <section className="glass max-md:w-[95%] w-[600px]  max-md:h-fit">
        {isSignUp && <Signup onClick={signningHandler} />}
        {!isSignUp && <SignIn onClick={signningHandler} />}
      </section>
    </main>
  );
}
