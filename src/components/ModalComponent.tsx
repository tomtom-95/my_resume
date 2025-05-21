import {FC, memo} from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#__next');

interface ModalComponentProps {
  isOpen: boolean;
  onRequestClose: () => void;
  title: string;
  description: string;
}

const ModalComponent: FC<ModalComponentProps> = memo(({isOpen, onRequestClose, title, description}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Project Description"
      className="fixed inset-0 flex items-center justify-center p-4"
      overlayClassName="fixed inset-0 bg-black bg-opacity-75">
      <div className="bg-neutral-800 rounded-lg p-6 max-w-lg w-full text-white shadow-xl overflow-y-auto max-h-[90vh]">
        <h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>
        <p className="mb-4 text-lg text-center">{description}</p>
        <div className="flex justify-center">
          <button onClick={onRequestClose} className="mt-4 inline-block rounded bg-[#E04E1D] px-4 py-2 text-white">
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
});

export default ModalComponent;
