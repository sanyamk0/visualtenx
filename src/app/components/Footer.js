import React from "react";
import Image from "next/image";
import { MdEmail, MdLocationPin, MdPhone } from "react-icons/md";
import Link from "next/link";
import { BsFacebook, BsTwitter, BsLinkedin, BsInstagram } from "react-icons/bs";
const Footer = () => {
  return (
    <>
      <div className="h-1 bg-black m-3" />
      <div className="flex justify-center">
        <div className="lg:grid lg:grid-cols-2 flex flex-col lg:gap-8">
          <div className="flex flex-col p-5">
            <Image src="/logo.png" alt="logo" width={160} height={160} />
            <p className="mb-4 text-sm md:w-[400px] w-[350px]">
              At Visual Tenx, we have an in-house team of experts having a
              strong hand on website development and digital marketing. We
              develop websites for Schools, Colleges, Hospitals, Clinics,
              Coaching centers, Taxi, and Transport Businesses, etc.
            </p>
            <div className="flex gap-3">
              <Link href="https://www.facebook.com/visualtenx">
                <i>
                  <BsFacebook />
                </i>
              </Link>
              <Link href="https://twitter.com/visualtenx">
                <i>
                  <BsTwitter />
                </i>
              </Link>
              <Link href="https://www.linkedin.com/in/visualtenx/">
                <i>
                  <BsLinkedin />
                </i>
              </Link>
              <Link href="https://www.instagram.com/visualtenx/">
                <i>
                  <BsInstagram />
                </i>
              </Link>
            </div>
          </div>
          <div className="flex flex-col p-5">
            <h4 className="mt-4 mb-4">Contact Us</h4>
            <ul>
              <li className="flex items-center mt-2">
                <i>
                  <MdLocationPin />
                </i>
                <span className="pl-2">
                  GXM8+4QX, Durga Colony, Gharaunda, Haryana 132114
                </span>
              </li>
              <li className="flex items-center mt-2">
                <i>
                  <MdPhone />
                </i>
                <span className="pl-2">+91 74002-09100</span>
              </li>
              <li className="flex items-center mt-2">
                <i>
                  <MdPhone />
                </i>
                <span className="pl-2">+91 80532-16040</span>
              </li>
              <li className="flex items-center mt-2">
                <i>
                  <MdEmail />
                </i>
                <span className="pl-2">support@visualtenx.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="h-1 bg-black m-3" />
      <p className="flex justify-center items-center p-2">
        © 2022-2023 visualtenx.com - India&apos;s #1 Web Development & Digital
        Marketing service provider.
      </p>
    </>
  );
};

export default Footer;
