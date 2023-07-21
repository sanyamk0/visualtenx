import { MdEmail, MdLocationPin, MdPhone } from "react-icons/md";

const cards = [
  {
    id: 1,
    icon: <MdLocationPin />,
    heading: "Address",
    text: "Mugal Canal Rd, Sector 13, Karnal",
    Linktext: "Haryana, 132001",
  },
  {
    id: 2,
    icon: <MdPhone />,
    heading: "Phone Number",
    text: "+91 74002-09100",
    Linktext: "+91 80532-16040",
  },
  {
    id: 3,
    icon: <MdEmail />,
    heading: "Email Address",
    text: "support@visualtenx.com",
    Linktext: "info@visualtenx.com",
  },
];
const ContactCard = () => {
  return (
    <div className="p-5">
      <div className="grid grid-cols-3 gap-16">
        {cards.map((card, id) => {
          return (
            <div className="p-5 text-center bg-blue-300" key={id}>
              <div className="flex justify-center">
                <i className="text-6xl mb-4">{card.icon}</i>
              </div>
              <h2 className="text-3xl font-bold mb-4">{card.heading}</h2>
              <p className="text-base">{card.text}</p>
              <p className="text-base">{card.Linktext}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContactCard;
