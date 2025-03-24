"use client";

import { useEffect } from "react";

export const Schedule = () => {
  const scheduleData = [
    {
      id: 1,
      srNo: "#4",
      time: "11:00 AM-Till End",
      event: "TypeMaster",
      date: "28th & 29th March'25 ",
      venue: "ISE Dept",
      color: "red",
    },
    {
      id: 2,
      srNo: "#1",
      time: "11:30 AM-1:30 PM",
      event: "Coding Relay",
      date: "28th March'25",
      venue: "ISE Dept",
      color: "red",
    },
    {
      id: 3,
      srNo: "#2",
      time: "11:00 AM-4:00 PM",
      event: "Code Red",
      date: "28th March'25",
      venue: "ISE Dept",
      color: "purple",
    },
    {
      id: 4,
      srNo: "#3",
      time: "2:00 PM-4:00 PM",
      event: "DSA Smackdown",
      date: "28th March'25",
      venue: "ISE Dept",
      color: "green",
    },
    {
      id: 5,
      srNo: "#5",
      time: "10:00 PM-2:00 PM",
      event: "UI/UX design",
      date: "29th March'25",
      venue: "ISE Dept",
      color: "purple",
    },
    {
      id: 6,
      srNo: "#6",
      time: "11:00 AM-3:00 PM",
      event: "Technoseek",
      date: "29th March'25",
      venue: "ISE Dept",
      color: "green",
    },
    {
      id: 7,
      srNo: "#7",
      time: "10:00 AM-3:00 PM",
      event: "Code Red",
      date: "29th March'25",
      venue: "ISE Dept",
      color: "purple",
    },
  ];

  useEffect(() => {
    // Add staggered animation to rows when component mounts
    const rows = document.querySelectorAll("tbody tr");
    rows.forEach((row, index) => {
      setTimeout(() => {
        row.classList.add("opacity-100", "translate-y-0");
      }, 100 * index);
    });
  }, []);

  const getTextColor = (color) => {
    switch (color) {
      case "red":
        return "text-[#6b5de9]";
      case "purple":
        return "text-[#6b5de9]";
      case "green":
        return "text-[#6b5de9]";
      default:
        return "text-[#6b5de9]";
    }
  };

  const getBgColor = (color) => {
    switch (color) {
      case "red":
        return "bg-[#ffe8ec]";
      case "purple":
        return "bg-[#ffe8ec]";
      case "green":
        return "bg-[#ffe8ec]";
      default:
        return "bg-[#ffe8ec]";
    }
  };

  return (
    <div className="max-h-screen flex flex-col mb-8 items-center animate-fadeIn" id="schedule">
      <h1 className="text-white text-6xl font-comic mb-4 md:mb-4 tracking-wide animate-bounce-slow">
        SCHEDULE
      </h1>
      <div className="w-full max-w-7xl p-4 md:p-6 overflow-x-auto">
        <table className="w-full border-collapse rounded-lg">
          <thead>
            <tr className="bg-[#ff1f53] text-white">
              <th className="py-2 md:py-5 px-2 md:px-4 text-center font-comic text-sm md:text-lg w-[20%]">
                TIME
              </th>
              <th className="py-2 md:py-5 px-2 md:px-4 text-center font-comic text-sm md:text-lg w-[25%]">
                EVENT
              </th>
              <th className="py-2 md:py-5 px-2 md:px-4 text-center font-comic text-sm md:text-lg w-[20%]">
                DATE
              </th>
              <th className="py-2 md:py-5 px-2 md:px-4 text-center font-comic text-sm md:text-lg w-[20%]">
                VENUE
              </th>
            </tr>
          </thead>
          <tbody>
            {scheduleData.map((item) => (
              <tr
                key={item.id}
                className="bg-[#fffbeb] border-b border-[#f9c74f] opacity-0 -translate-y-4 transition-all duration-300 ease-out hover:bg-[#fff8e0] transform hover:scale-[1.01]"
              >
                <td
                  className={`py-2 md:py-5 px-2 md:px-4 font-medium text-center text-sm md:text-base ${getTextColor(
                    item.color
                  )}`}
                >
                  {item.time}
                </td>
                <td className="py-2 md:py-5 px-2 md:px-4 text-center">
                  <span
                    className={`px-3 md:px-6 py-2 rounded-full w-[100px] md:w-[150px] inline-block text-center ${getBgColor(
                      item.color
                    )} ${getTextColor(
                      item.color
                    )} hover:shadow-md transition-all duration-300 hover:scale-105 text-sm md:text-base`}
                  >
                    {item.event}
                  </span>
                </td>

                <td
                  className={`py-2 md:py-5 px-2 md:px-4 font-medium text-center text-sm md:text-base ${getTextColor(
                    item.color
                  )}`}
                >
                  {item.date}
                </td>
                <td
                  className={`py-2 md:py-5 px-2 md:px-4 font-medium text-center text-sm md:text-base ${getTextColor(
                    item.color
                  )}`}
                >
                  {item.venue}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
