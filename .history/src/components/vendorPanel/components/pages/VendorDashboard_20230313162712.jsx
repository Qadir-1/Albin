import React from "react";
import HOC from "../../../vendorPanel/components/layout/HOC";
import { FaUserFriends } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const dash = (data) => {
  console.log(data, "dsjkfhjkashfjk");
  return data;
};
const VendorDashboard = () => {

  const navigate = useNavigate()

  const card = [
    {
      progress: "bg-blue-400",
      title: "All Users",
      number: "10",
      icon: <FaUserFriends className="text-2xl text-[rgb(240,72,88)]" />,
      link : "/"
    },
    {
      progress: "bg-blue-400",
      title: "All Vendors",
      number: "10",
      icon: <FaUserFriends className="text-2xl text-[rgb(240,72,88)]" />,
    },
    {
      progress: "bg-blue-400",
      title: "All Tours",
      number: "10",
      icon: <FaUserFriends className="text-2xl text-[rgb(240,72,88)]" />,
    },
    {
      progress: "bg-blue-400",
      title: "All Booking",
      number: "10",
      icon: <FaUserFriends className="text-2xl text-[rgb(240,72,88)]" />,
    },  
  ];
  return (
    <>
      <section className="grid md:grid-cols-3 grid-cols-2 gap-y-6 gap-x-4">
        {/* Card */}
        {card.map((card) => {
          return (
            <div className="px-5 py-8 bg-slate-200 space-y-2 shadow-xl flex flex-col  rounded-md" onClick={() => navigate(`${card.link}`)}>
              <div className="grid  justify-between grid-cols-4">
                <div className="flex flex-col col-span-3 space-y-1">
                  <span className="tracking-widest text-gray-900">
                    {card.title}
                  </span>
                  <span className="tracking-wider text-gray-700 text-xl md:text-2xl font-semibold">
                    {card.number}
                  </span>
                </div>
                {/* Icons */}
                <div className="flex rounded-full w-10 h-10 sm:w-12 sm:h-12 bg-white justify-center items-center">
                  {card.icon}
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default HOC(VendorDashboard);
