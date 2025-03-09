"use client";

import { useEffect } from "react";
import PropTypes from "prop-types";
import {
  Code,
  Trophy,
  Gamepad,
  Palette,
  Search,
  Keyboard,
  Brain,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const EventCard = ({ title, description, date, time, icon, delay }) => {
  return (
    <div
      className="relative border-4 border-black bg-white p-6 mb-8 rounded-2xl border-r-8 border-b-8" id="events"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      {/* Icon Circle */}
      <div className="absolute -right-5 -top-5 w-16 h-16 rounded-full bg-red-500 flex items-center justify-center text-white z-10 border-black border-4">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-[#00237A] italic text-2xl mb-2 tracking-wider">
        {title}
      </h3>

      {/* Description */}
      <h4 className="text-[#374151] mb-4">{description}</h4>

      {/* Dashed Line */}
      <div className="border-t border-dashed border-[#D1D5DB] my-4"></div>

      {/* Date and Time */}
      <div className="flex justify-between items-center">
        <div className="bg-[#FFC247] text-black px-4 py-1 rounded-full font-medium">
          {date}
        </div>
        <div className="text-red-500 font-medium">{time}</div>
      </div>

      {/* Blue Square */}
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
};

export function Events() {
  useEffect(() => {
    // Initialize AOS
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
      title: "CODE RELAY",
      description:
        "Team-based coding competition where participants relay code solutions.",
      date: "March 7",
      time: "10:00 AM",
      icon: <Code size={40} />,
      delay: "0",
    },
    {
      title: "DSA SMACKDOWN",
      description:
        "Intense Data Structures & Algorithms competition to test your problem-solving skills.",
      date: "March 7",
      time: "2:00 PM",
      icon: <Brain size={40} />,
      delay: "100",
    },
    {
      title: "TECH QUIZ",
      description:
        "Test your technical knowledge across various domains of computer science.",
      date: "March 7",
      time: "4:00 PM",
      icon: <Trophy size={40} />,
      delay: "400",
    },
    {
      title: "VALORANT TOURNAMENT",
      description:
        "Show off your tactical shooter skills in this exciting gaming competition.",
      date: "March 8",
      time: "10:00 AM",
      icon: <Gamepad size={40} />,
      delay: "300",
    },
    {
      title: "UI DESIGN COMPETITION",
      description:
        "Create stunning user interfaces and compete for the best design.",
      date: "March 8",
      time: "11:00 AM",
      icon: <Palette size={40} />,
      delay: "400",
    },
    {
      title: "TECHNOSEEK",
      description:
        "Technical treasure hunt that will test your technical and logical thinking.",
      date: "March 8",
      time: "2:00 PM",
      icon: <Search size={40} />,
      delay: "500",
    },
    {
      title: "TYPEMASTER",
      description:
        "Show off your typing speed and accuracy in this fast-paced competition.",
      date: "March 8",
      time: "4:00 PM",
      icon: <Keyboard size={40} />,
      delay: "600",
    },
  ];

  return (
    <div className="bg-[#FFC247] min-h-screen p-8 font-comic">
      {/* Title */}
      <h1
        className="text-6xl text-white text-center mb-12 font-comic tracking-wide"
        data-aos="zoom-in"
      >
        EPIC EVENTS
      </h1>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {events.map((event, index) => (
          <EventCard
            key={index}
            title={event.title}
            description={event.description}
            date={event.date}
            time={event.time}
            icon={event.icon}
            delay={event.delay}
          />
        ))}
      </div>
    </div>
  );
}

export default Events;
