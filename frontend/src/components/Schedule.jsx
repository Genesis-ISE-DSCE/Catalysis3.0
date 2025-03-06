"use client";

import { useEffect } from "react";

export const Schedule = () => {
  const scheduleData = [
    {
      id: 1,
      srNo: "#1",
      time: "2:00 PM-5:00 PM",
      event: "Quiz Up",
      date: "15/06/2022",
      venue: "Venue 302",
      color: "red",
    },
    {
      id: 2,
      srNo: "#1",
      time: "2:00 PM-5:00 PM",
      event: "Quiz Up",
      date: "15/06/2022",
      venue: "Venue 302",
      color: "purple",
    },
    {
      id: 3,
      srNo: "#1",
      time: "2:00 PM-5:00 PM",
      event: "Quiz Up",
      date: "15/06/2022",
      venue: "Venue 302",
      color: "green",
    },
    {
      id: 4,
      srNo: "#1",
      time: "2:00 PM-5:00 PM",
      event: "Quiz Up",
      date: "15/06/2022",
      venue: "Venue 302",
      color: "red",
    },
    {
      id: 5,
      srNo: "#1",
      time: "2:00 PM-5:00 PM",
      event: "Quiz Up",
      date: "15/06/2022",
      venue: "Venue 302",
      color: "purple",
    },
    {
      id: 6,
      srNo: "#1",
      time: "2:00 PM-5:00 PM",
      event: "Quiz Up",
      date: "15/06/2022",
      venue: "Venue 302",
      color: "green",
    },
    {
      id: 7,
      srNo: "#1",
      time: "2:00 PM-5:00 PM",
      event: "Quiz Up",
      date: "15/06/2022",
      venue: "Venue 302",
      color: "red",
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
        return "text-[#e94a64]";
      case "purple":
        return "text-[#6b5de9]";
      case "green":
        return "text-[#4aca8c]";
      default:
        return "text-[#e94a64]";
    }
  };

  const getBgColor = (color) => {
    switch (color) {
      case "red":
        return "bg-[#ffe8ec]";
      case "purple":
        return "bg-[#eeeaff]";
      case "green":
        return "bg-[#e8fff0]";
      default:
        return "bg-[#ffe8ec]";
    }
  };

  return (
    <div className="bg-[#FFC247] min-h-screen p-4 md:p-8 flex flex-col items-center animate-fadeIn">
      <h1 className="text-white text-5xl md:text-6xl font-comic mb-8 tracking-wide animate-bounce-slow">
        SCHEDULE
      </h1>
      <div className="w-full max-w-7xl overflow-x-hidden rounded-lg shadow-2xl">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#e94a64] text-white">
              <th className="py-4 px-2 md:px-4 text-center font-comic  text-lg md:text-xl w-[15%]">
                SR NO.
              </th>
              <th className="py-4 px-2 md:px-4 text-center font-comic  text-lg md:text-xl w-[20%]">
                TIME
              </th>
              <th className="py-4 px-2 md:px-4 text-center font-comic  text-lg md:text-xl w-[25%]">
                EVENT
              </th>
              <th className="py-4 px-2 md:px-4 text-center font-comic  text-lg md:text-xl w-[20%]">
                DATE
              </th>
              <th className="py-4 px-2 md:px-4 text-center font-comic  text-lg md:text-xl w-[20%]">
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
                  className={`py-4 px-2 md:px-4 font-comic  text-center ${getTextColor(
                    item.color
                  )}`}
                >
                  {item.srNo}
                </td>
                <td
                  className={`py-4 px-2 md:px-4 font-medium text-center ${getTextColor(
                    item.color
                  )}`}
                >
                  {item.time}
                </td>
                <td className="py-4 px-2 md:px-4 text-center">
                  <span
                    className={`px-16 py-1 rounded-full ${getBgColor(
                      item.color
                    )} ${getTextColor(
                      item.color
                    )} hover:shadow-md transition-all duration-300 inline-block hover:scale-105`}
                  >
                    {item.event}
                  </span>
                </td>
                <td
                  className={`py-4 px-2 md:px-4 font-medium text-center ${getTextColor(
                    item.color
                  )}`}
                >
                  {item.date}
                </td>
                <td
                  className={`py-4 px-2 md:px-4 font-medium text-center ${getTextColor(
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
