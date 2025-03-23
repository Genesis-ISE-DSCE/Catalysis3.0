"use client";

import { useEffect } from "react";
import PropTypes from "prop-types";
import {
  Code,
  Gamepad,
  Palette,
  Search,
  Keyboard,
  Brain,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const EventCard = ({
  title,
  description,
  date,
  time,
  icon,
  delay,
  pdfLink,
  onClick,
}) => {
  return (
    <div
      className="relative border-4 border-black bg-white p-8 rounded-2xl border-r-8 border-b-8 mb-8 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-out"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      {/* Icon Circle */}
      <div className="absolute -right-5 -top-5 w-16 h-16 rounded-full bg-red-500 flex items-center justify-center text-white z-10 border-black border-4 transition-transform duration-300 ease-out hover:rotate-12">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-[#00237A] italic text-2xl mb-2 tracking-wider">
        {title}
      </h3>

      {/* Description */}
      <h4 className="text-[#374151] mb-4">{description}</h4>

      {/* Rulebook Button */}
      {pdfLink && (
        <div className="relative group mt-2">
          <button
            className="bg-[#00237A] text-white px-4 py-2 rounded-lg cursor-pointer transition-transform duration-300 transform group-hover:scale-110"
            onClick={onClick}
          >
            View Rulebook
          </button>
        </div>
      )}

      {/* Dashed Line */}
      <div className="border-t border-dashed border-[#D1D5DB] my-4"></div>

      {/* Date and Time */}
      <div className="flex justify-between items-center">
        <div className="bg-[#FFC247] text-black px-4 py-1 rounded-full font-medium">
          {date}
        </div>
        <div className="text-red-500 font-medium">{time}</div>
      </div>

      {/* Blue & Yellow Squares */}
      <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-blue-600 transform rotate-30 border-black border-r-4 border-b-2"></div>
      <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-amber-300 transform rotate-30 border-black border-r-4 border-b-2"></div>
    </div>
  );
};

EventCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  delay: PropTypes.string.isRequired,
  pdfLink: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export function Events() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      AOS.init({
        duration: 800,
        easing: "ease-out-cubic",
        once: true,
      });
    }
  }, []);

  const events = [
    {
      title: "Coding Relay",
      description: "Team-based coding competition where participants relay code solutions.",
      date: "March 28",
      time: "11:30 AM",
      icon: <Code size={40} />,
      delay: "0",
      pdfLink: "/pdfs/Coding Relay.pdf",
    },
    {
      title: "Code Red",
      description: "VALORANT Showdown! Prove your skill in this intense battle. Ready to dominate?",
      date: "March 28 & 29",
      time: "11:00 AM & 10:00 AM",
      icon: <Gamepad size={40} />,
      delay: "300",
      pdfLink: "/pdfs/CodeRed.pdf",
    },
    {
      title: "DSA SMACKDOWN",
      description: "Data Structure & Algorithm competition to test your problem-solving skills.",
      date: "March 28",
      time: "2:00 PM",
      icon: <Brain size={40} />,
      delay: "100",
      pdfLink: "/pdfs/DSA Smackdown.pdf",
    },
    {
      title: "TYPEMASTER",
      description: "Show off your typing speed and accuracy in this fast-paced competition.",
      date: "March 29",
      time: "11:00 AM",
      icon: <Keyboard size={40} />,
      delay: "600",
      pdfLink: "/pdfs/TypeMaster.pdf",
    },
    {
      title: "UI/UX DESIGN",
      description: "Create stunning user interfaces and compete for the best design.",
      date: "March 29",
      time: "10:00 AM",
      icon: <Palette size={40} />,
      delay: "400",
      pdfLink: "/pdfs/UI UX Design.pdf",
    },
    {
      title: "TECHNOSEEK",
      description: "Technical treasure hunt that will test your technical and logical thinking.",
      date: "March 29",
      time: "11:00 AM",
      icon: <Search size={40} />,
      delay: "500",
      pdfLink: "/pdfs/TechnoSeek.pdf",
    },
  ];

  const handleEventClick = (pdfLink) => {
    window.open(pdfLink, "_blank");
  };

  return (
    <div className="min-h-screen p-8 font-comic" id="events">
      <h1
        className="text-6xl text-white text-center mb-12 font-comic tracking-wide"
        data-aos="zoom-in"
      >
        EPIC EVENTS
      </h1>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {events.map((event, index) => (
          <EventCard
            key={index}
            title={event.title}
            description={event.description}
            date={event.date}
            time={event.time}
            icon={event.icon}
            delay={event.delay}
            pdfLink={event.pdfLink}
            onClick={() => handleEventClick(event.pdfLink)}
          />
        ))}
      </div>
    </div>
  );
}

export default Events;