import ContactCard from "../components/ContactCard";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <>
      <div className="p-5 flex flex-col">
        <h1 className="text-center text-4xl font-bold mb-10">Contact Us</h1>
        <ContactCard />
      </div>

      <div className="flex justify-center">
        <div className="lg:grid lg:grid-cols-2 lg:place-items-center flex flex-col gap-5">
          <ContactForm />
          <div className="p-5 lg:w-[30rem] lg:h-[27rem] w-[24rem] h-[21rem]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d27729.465001716195!2d76.994659!3d29.68547!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e71abd9e34871%3A0x76709f01ae5367ca!2sVisual10X%20%7C%7C%20Graphic%20Designing%20and%20Web%20Development%20Agency%20in%20Karnal!5e0!3m2!1sen!2sin!4v1689942625656!5m2!1sen!2sin"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
