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
    <div className="min-h-screen flex flex-col md:mb-0 mb-8 items-center animate-fadeIn" id="schedule">
      <h1 className="text-white text-4xl md:text-6xl font-comic mb-8 md:mb-12 tracking-wide animate-bounce-slow">
        SCHEDULE
      </h1>
      <div className="w-full max-w-7xl p-4 md:p-6 overflow-x-auto">
        <table className="w-full border-collapse rounded-lg">
          <thead>
            <tr className="bg-[#ff1f53] text-white">
              <th className="py-4 md:py-6 px-2 md:px-4 text-center font-comic text-sm md:text-lg w-[15%]">
                SR NO.
              </th>
              <th className="py-4 md:py-6 px-2 md:px-4 text-center font-comic text-sm md:text-lg w-[20%]">
                TIME
              </th>
              <th className="py-4 md:py-6 px-2 md:px-4 text-center font-comic text-sm md:text-lg w-[25%]">
                EVENT
              </th>
              <th className="py-4 md:py-6 px-2 md:px-4 text-center font-comic text-sm md:text-lg w-[20%]">
                DATE
              </th>
              <th className="py-4 md:py-6 px-2 md:px-4 text-center font-comic text-sm md:text-lg w-[20%]">
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
                  className={`py-4 md:py-6 px-2 md:px-4 font-comic text-center text-sm md:text-base ${getTextColor(
                    item.color
                  )}`}
                >
                  {item.srNo}
                </td>
                <td
                  className={`py-4 md:py-6 px-2 md:px-4 font-medium text-center text-sm md:text-base ${getTextColor(
                    item.color
                  )}`}
                >
                  {item.time}
                </td>
                <td className="py-4 md:py-6 px-2 md:px-4 text-center">
                  <span
                    className={`px-8 md:px-16 py-1 rounded-full ${getBgColor(
                      item.color
                    )} ${getTextColor(
                      item.color
                    )} hover:shadow-md transition-all duration-300 inline-block hover:scale-105 text-sm md:text-base`}
                  >
                    {item.event}
                  </span>
                </td>
                <td
                  className={`py-4 md:py-6 px-2 md:px-4 font-medium text-center text-sm md:text-base ${getTextColor(
                    item.color
                  )}`}
                >
                  {item.date}
                </td>
                <td
                  className={`py-4 md:py-6 px-2 md:px-4 font-medium text-center text-sm md:text-base ${getTextColor(
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
