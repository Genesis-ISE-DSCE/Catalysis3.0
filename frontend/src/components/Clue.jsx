
import React, { useState, useEffect } from 'react';

const NUM_EXTRA_BUTTONS = 5; // Number of extra decoy buttons

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl p-6 max-w-sm w-full mx-4">
        <div className="mb-4">{children}</div>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const Clue = () => {
  const [showDecoy, setShowDecoy] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [primaryPos, setPrimaryPos] = useState({ top: '50%', left: '50%' });
  const [extraPositions, setExtraPositions] = useState([]);

  // Function to move the primary "Get Clue" button randomly
  const movePrimaryButton = () => {
    const randomTop = Math.floor(Math.random() * 80) + 10; // between 10% and 90%
    const randomLeft = Math.floor(Math.random() * 80) + 10;
    setPrimaryPos({
      top: `${randomTop}%`,
      left: `${randomLeft}%`,
    });
  };

  // Function to generate a random position (for extra buttons)
  const generateRandomPosition = () => {
    const randomTop = Math.floor(Math.random() * 80) + 10;
    const randomLeft = Math.floor(Math.random() * 80) + 10;
    return { top: `${randomTop}%`, left: `${randomLeft}%` };
  };

  // Move the primary button every second until it's clicked
  useEffect(() => {
    if (!showDecoy) {
      const interval = setInterval(movePrimaryButton, 1000);
      return () => clearInterval(interval);
    }
  }, [showDecoy]);

  // Move extra buttons continuously after decoy is shown
  useEffect(() => {
    if (showDecoy) {
      const interval = setInterval(() => {
        setExtraPositions(prevPositions =>
          prevPositions.map(() => generateRandomPosition())
        );
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [showDecoy]);

  // Handler to show the decoy humorous message and extra decoy buttons.
  // Also initializes the extra button positions immediately.
  const handleGetClueClick = () => {
    const initialPositions = Array.from({ length: NUM_EXTRA_BUTTONS }, generateRandomPosition);
    setExtraPositions(initialPositions);
    setShowDecoy(true);
  };

  // Handler for clicking on an extra decoy button
  const handleExtraDecoyClick = () => {
    alert('Decoy: This is not the real clue.');
  };

  return (
    // Outer container is now relatively positioned and spans the full screen.
    <div className="bg-[#FFC247] min-h-screen relative p-4">
      {/* White container for title text centered on the page */}
      <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full text-center mx-auto my-8">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          Fork through the hub where deployments hide.
        </h1>
        <p className="mt-6 text-gray-600">
          Nice try, keep looking{' '}
          <span
            onClick={() => setIsModalOpen(true)}
            className="text-inherit cursor-default select-none"
          >
            here
          </span>{' '}
          and there on the same page.
        </p>
      </div>

      {/* The moving buttons are now rendered as direct children of the outer container */}
      {!showDecoy && (
        <button
          onClick={handleGetClueClick}
          className="absolute transition-all duration-500 ease-in-out transform -translate-x-1/2 -translate-y-1/2 px-6 py-3 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
          style={{
            top: primaryPos.top,
            left: primaryPos.left,
          }}
        >
          Get Clue
        </button>
      )}

      {showDecoy &&
        extraPositions.map((pos, index) => (
          <button
            key={index}
            onClick={handleExtraDecoyClick}
            className="absolute transition-all duration-500 ease-in-out transform -translate-x-1/2 -translate-y-1/2 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400"
            style={{
              top: pos.top,
              left: pos.left,
            }}
          >
            Try Me
          </button>
        ))}

      {/* Custom Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-xl font-bold mb-4 text-center">Clue Revealed</h2>
        <p className="font-mono text-center">
        BAOSEESLWSEET L TNSDAH ELAATNHDO TW I
        </p>
      </Modal>
    </div>
  );
};

export default Clue;

