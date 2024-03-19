import React from "react";
import "../Banner/banner.css";
const Banner = () => {
  return (
    <div className="container text-center">
      <div className="banner_content p-12">
        <h1 className="mb-1 text-4xl font-bold ">A warm welcome!</h1>
        <p className="mb-2 text-xl">
          Bootstrap utility classes are used to create this jumbotron since the
          old component has been removed from the framework. Why create custom
          CSS when you can use utilities?
        </p>
        <a
          href=""
          className="px-3 py-2 bg-blue-500 rounded-md text-white  inline-block"
        >
          Call to action
        </a>
      </div>
    </div>
  );
};

export default Banner;
