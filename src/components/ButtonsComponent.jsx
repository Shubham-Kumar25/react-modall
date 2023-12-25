// ButtonsComponent.js
import React, { useState } from "react";
import Modal from "./Modal";

const ButtonsComponent = () => {
  const [selectedmodal, setSelectedmodal] = useState(null);

  const openModal = (modal) => {
    setSelectedmodal(modal);
  };

  const closeModal = () => {
    setSelectedmodal(null);
  };

  return (
    <div className="flex items-center justify-center mt-6">
      <div className="flex flex-row items-center space-x-4">
        <button
          onClick={() => openModal("modal 1")}
          className="px-6 py-3 text-black transition duration-300 ease-in-out bg-[#b1dbff] rounded-full hover:bg-[#89c8ff]"
        >
          modal 1
        </button>
        <button
          onClick={() => openModal("modal 2")}
          className="px-6 py-3 text-black transition duration-300 ease-in-out bg-[#b1dbff] rounded-full hover:bg-[#89c8ff]"
        >
          modal 2
        </button>
        <button
          onClick={() => openModal("modal 3")}
          className="px-6 py-3 text-black transition duration-300 ease-in-out bg-[#b1dbff] rounded-full hover:bg-[#89c8ff]"
        >
          modal 3
        </button>
      </div>

      <Modal
        isOpen={selectedmodal !== null}
        onClose={closeModal}
        title={selectedmodal}
      />
    </div>
  );
};

export default ButtonsComponent;
