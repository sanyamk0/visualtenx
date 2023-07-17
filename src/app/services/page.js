import Image from "next/image";

const Services = () => {
  return (
    <>
      <div>
        <h1 className="text-center text-4xl font-bold p-2">Services</h1>
        <p className="text-center text-xl">
          We provide a variety of web solutions to help you expand your company
          online.
        </p>
      </div>
      <div className="p-5">
        <div className="grid grid-cols-2 ml-32 mr-32">
          <div className="col-span-1">
            <Image
              src="/services1.png"
              alt="services1"
              width={500}
              height={500}
            />
          </div>
          <div className="flex flex-col text-left col-span-1 justify-center p-5">
            <h1 className="text-3xl font-bold">www.yourbusiness.com</h1>
            <h3 className="text-2xl font-semibold">Domain Name Registration</h3>
            <span className="block border-2 mt-4 mb-4" />
            <p className="text-lg font-medium">
              We can assist you with choosing the ideal domain name for your
              company&apos;s new website address.
            </p>
          </div>
        </div>
        <span className="block border-2 mt-4 mb-4 ml-32 mr-32" />
        <div className="grid grid-cols-2 ml-32 mr-32">
          <div className="flex flex-col text-left col-span-1 justify-center p-5">
            <h1 className="text-3xl font-bold">Sell Online</h1>
            <h3 className="text-2xl font-semibold">Ecommerce Development</h3>
            <span className="block border-2 mt-4 mb-4" />
            <p className="text-lg font-medium">
              We can create a completely functional eCommerce website so you can
              sell anything and also accept payments online.
            </p>
          </div>
          <div className="col-span-1">
            <Image
              src="/services2.png"
              alt="services2"
              width={500}
              height={500}
            />
          </div>
        </div>
        <span className="block border-2 mt-4 mb-4 ml-32 mr-32" />
        <div className="grid grid-cols-2 ml-32 mr-32">
          <div className="col-span-1">
            <Image
              src="/services3.png"
              alt="services3"
              width={500}
              height={500}
            />
          </div>
          <div className="flex flex-col text-left col-span-1 justify-center p-5">
            <h1 className="text-3xl font-bold">Rank on Google</h1>
            <h3 className="text-2xl font-semibold">
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
        <span className="block border-2 mt-4 mb-4 ml-32 mr-32" />
        <div className="grid grid-cols-2 ml-32 mr-32">
          <div className="flex flex-col text-left col-span-1 justify-center p-5">
            <h1 className="text-3xl font-bold">Create Your Brand</h1>
            <h3 className="text-2xl font-semibold">
              Personal Website Development
            </h3>
            <span className="block border-2 mt-4 mb-4" />
            <p className="text-lg font-medium">
              We can create a personal website for you, regardless of whether
              you work for an agency or are an individual, so you can showcase
              your work to the millions of internet users.
            </p>
          </div>
          <div className="col-span-1">
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
