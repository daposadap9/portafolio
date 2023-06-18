import React from 'react';

const ModalComent = ({activateModalMusic, setactivateModalMusic}) => {

  const closeModal = () => {
    setactivateModalMusic(!activateModalMusic);
  };

  return (
    <>
      {activateModalMusic && (
          <div className="fixed w-40 h-28 z-10 bg-white right-20 top-16 rounded-lg p-2 shadow-md">
            <p className="text-center text-[14px]">
              Cada vez que recargas la página se reproduce otra canción.
            </p>
            <button
              className="block text-[14px] mx-auto mt-1 bg-blue-500 text-white px-4 py-1 rounded-md"
              onClick={closeModal}
            >
              Cerrar
            </button>
          </div>
      )}
    </>
  );
};

export default ModalComent;
