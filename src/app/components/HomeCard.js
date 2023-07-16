import React from "react";

const HomeCard = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col justify-around items-center p-5 gap-5">
        <div className="flex flex-col justify-between text-center lg:w-80 lg:h-80 w-72 h-72 p-4">
          <h1 className="h-32 text-8xl font-bold">01.</h1>
          <h2 className="font-extrabold text-lg uppercase">Web Development</h2>
          <p className="mb-6">
            We are experienced tech partners passionate about helping your
            business overcome its unique challenges.
          </p>
        </div>
        <div className="flex flex-col justify-between text-center lg:w-80 lg:h-80 w-72 h-72 p-4">
          <h1 className="h-32 text-8xl font-bold">02.</h1>
          <h2 className="font-extrabold text-lg uppercase">Graphic Design</h2>
          <p className="mb-6">
            Our Graphic Designing Company in Panipat creates an attractive logo
            that catches attention and helps the viewer to remember the business
            name
          </p>
        </div>
        <div className="flex flex-col justify-between text-center lg:w-80 lg:h-80 w-72 h-72 p-4">
          <h1 className="h-32 text-8xl font-bold">03.</h1>
          <h2 className="font-extrabold text-lg uppercase">Video Editing</h2>
          <p className="mb-6">
            Visual TenX is a creative endeavour to fulfil your creative needs.
            We specialise in Audio, Video and Photography.
          </p>
        </div>
      </div>
    </>
  );
};

export default HomeCard;
