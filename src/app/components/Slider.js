"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slider = () => {
  return (
    <div className="flex justify-center text-center p-10">
      <div className="flex flex-col justify-evenly ml-32 mr-32 mt-12">
        <p className="mb-5 text-xl font-bold uppercase tracking-tight">
          Top Customer Testimonials
        </p>
        <Carousel
          infiniteLoop
          autoPlay
          showStatus={false}
          showArrows={true}
          showIndicators={false}
          interval={8000}
          className="sm:w-full w-96"
        >
          <div className="flex flex-col text-center justify-center items-center">
            <p className="w-[75%] text-lg">
              Very helpful for website development and design the website , he
              has a lot of skills and all the time online to answering to all
              questions Impressive.
            </p>
            <p className="font-semibold">Haman Refahi </p>
            <p className="text-sky-400">UK</p>
          </div>
          <div className="flex flex-col text-center justify-center items-center">
            <p className="w-[75%] text-lg">
              Samael is my favourite person online now!! I trust him with my
              business and developing my online presence. I love Visual Tenx and
              I am SO grateful I can trust their support. Highly recommend.
            </p>
            <p className="font-semibold">Jae Schaefer </p>
            <p className="text-sky-400">Australia</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;
