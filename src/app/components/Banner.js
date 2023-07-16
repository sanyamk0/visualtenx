import { MdDone, MdDoneAll } from "react-icons/md";

const Banner = () => {
  return (
    <div className="p-6">
      <div className="p-5 bg-blue-600 rounded-xl m-auto w-[90%]">
        <div className="flex mt-2 mb-4">
          <div className="flex items-center justify-center mr-2">
            <MdDone />
          </div>
          <div>
            <p>
              Are you a seeking one of your High Performing Web Applications
              designed by an Indian company? Visual Tenx Services offers the
              best website design development services at very affordable costs.
              It seems impossible to design your ideal website? But with Visual
              Tenx Services you&apos;ll succeed for sure since we have the
              resources
            </p>
          </div>
        </div>

        <div className="flex mt-2 mb-4">
          <div className="flex items-center justify-center mr-2">
            <MdDoneAll />
          </div>
          <div>
            <p>
              It seems impossible to design your ideal website? But with Visual
              Tenx Services you&apos;ll succeed for sure since we have the
              resources, knowledge, and innovative vision you need.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
