import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="p-5 flex flex-col">
      <h1 className="text-center text-4xl font-bold mb-10">About Us</h1>
      <div className="ml-36 mr-36 text-2xl font-semibold">
        <h3 className="pl-9">About The Company</h3>
      </div>
      <div className="ml-36 mr-36 text-left p-5">
        <div className="grid grid-cols-2">
          <div className="grid-span-1">
            <Image src="/about.png" alt="about" width={500} height={500} />
          </div>
          <div className="grid-span-1">
            <p className="m-4 tracking-wide leading-6">
              <span className="font-bold"> Visual Tenx Technologies</span> was
              founded in 2022 with the intention of offering top-notch web
              design and graphic design services in Karnal and the surrounding
              areas. globe. To far, we have completed 1150+ projects for clients
              living in both India and outside of India.
            </p>
            <p className="m-4 tracking-wide leading-6">
              After working for a few years as an employee of an IT company in
              Gurgaon (HR), I (Mohit Saini) realised that the people in my
              hometown should have the same level of top-notch services, so I
              quit my job and launched my first startup.
            </p>
            <p className="m-4 tracking-wide leading-6">
              Along with developing websites, I also create YouTube videos for
              specific online niches. Writing amazing and original material for
              blogs is one of my other passions. I just got into affiliate
              marketing and digital marketing. You should be proud of yourself
              for being a tech-savvy person if you are reading this page.
            </p>
          </div>
        </div>

        <p className="m-4 tracking-wide leading-6">
          The company was founded in Karnal City, Haryana, in the Country&apos;s
          centre, with the goal of offering top-notch web design services both
          domestically and abroad. To create a fantastic website for our
          clients, we use a strategic approach. Prior to sharing the same idea
          with the rest of our team, we first have a thorough discussion about
          your project. Finally, we begin working diligently on building your
          website.
        </p>
        <p className="m-4 tracking-wide leading-6">
          Although we are not the greatest, we do appear on the list of Top
          Rated Web Designing Companies. We attend to the needs of our clients
          and carry out their suggestions for website building to the utmost of
          their satisfaction.
        </p>
        <p className="m-4 tracking-wide leading-6">
          We at Visual Tenx like creating stunning websites and blogging about
          the web and the health/fitness industry. We established a web
          development company in the early years of 2022. Effective online
          solutions are created for people by our team. With our workers,
          clients, and other business partners, we seek to build partnerships
          based on openness, tenacity, trust, and integrity.
        </p>
      </div>
    </div>
  );
};

export default About;
