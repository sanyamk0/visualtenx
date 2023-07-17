import Image from "next/image";

const Services = () => {
  return (
    <>
      <div>
        <h1 className="text-center text-4xl font-bold p-2">Services</h1>
        <p className="text-center text-xl p-2">
          We provide a variety of web solutions to help you expand your company
          online.
        </p>
      </div>
      <div className="p-5">
        <div className="lg:grid lg:grid-cols-2 grid-cols-1 ml-14 mr-14">
          <div className="lg:col-span-1 flex flex-col justify-center items-center pb-5">
            <Image
              src="/services1.png"
              alt="services1"
              width={500}
              height={500}
            />
          </div>
          <div className="lg:flex lg:flex-col lg:text-left text-center lg:col-span-1 block justify-center p-2">
            <h1 className="lg:text-3xl text-lg font-bold">
              www.yourbusiness.com
            </h1>
            <h3 className="lg:text-2xl text-xl font-semibold">
              Domain Name Registration
            </h3>
            <span className="block border-2 mt-4 mb-4" />
            <p className="text-lg font-medium">
              We can assist you with choosing the ideal domain name for your
              company&apos;s new website address.
            </p>
          </div>
        </div>
        <span className="block border-2 mt-4 mb-4 ml-14 mr-14" />
        <div className="lg:grid lg:grid-cols-2 grid-cols-1 ml-14 mr-14">
          <div className="lg:flex lg:flex-col lg:text-left text-center lg:col-span-1 block justify-center p-2">
            <h1 className="lg:text-3xl text-lg font-bold">Sell Online</h1>
            <h3 className="lg:text-2xl text-xl font-semibold">
              Ecommerce Development
            </h3>
            <span className="block border-2 mt-4 mb-4" />
            <p className="text-lg font-medium">
              We can create a completely functional eCommerce website so you can
              sell anything and also accept payments online.
            </p>
          </div>
          <div className="lg:col-span-1 flex flex-col justify-center items-center pb-5">
            <Image
              src="/services2.png"
              alt="services2"
              width={500}
              height={500}
            />
          </div>
        </div>
        <span className="block border-2 mt-4 mb-4 ml-14 mr-14" />
        <div className="lg:grid lg:grid-cols-2 grid-cols-1 ml-14 mr-14">
          <div className="lg:col-span-1 flex flex-col justify-center items-center pb-5">
            <Image
              src="/services3.png"
              alt="services3"
              width={500}
              height={500}
            />
          </div>
          <div className="lg:flex lg:flex-col lg:text-left text-center lg:col-span-1 block justify-center p-2">
            <h1 className="lg:text-3xl text-lg font-bold">Rank on Google</h1>
            <h3 className="lg:text-2xl text-xl font-semibold">
              SEO (Search Engine Optimisation)
            </h3>
            <span className="block border-2 mt-4 mb-4" />
            <p className="text-lg font-medium">
              We have successfully ranked a number of websites on Google&apos;s
              first page, and we can assist you in improving the visibility of
              your website on Google and other search engines.
            </p>
          </div>
        </div>
        <span className="block border-2 mt-4 mb-4 ml-14 mr-14" />
        <div className="lg:grid lg:grid-cols-2 grid-cols-1 ml-14 mr-14">
          <div className="lg:flex lg:flex-col lg:text-left text-center lg:col-span-1 block justify-center p-2">
            <h1 className="lg:text-3xl text-lg font-bold">Create Your Brand</h1>
            <h3 className="lg:text-2xl text-xl font-semibold">
              Personal Website Development
            </h3>
            <span className="block border-2 mt-4 mb-4" />
            <p className="text-lg font-medium">
              We can create a personal website for you, regardless of whether
              you work for an agency or are an individual, so you can showcase
              your work to the millions of internet users.
            </p>
          </div>
          <div className="lg:col-span-1 flex flex-col justify-center items-center pb-5">
            <Image
              src="/services4.png"
              alt="services4"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
