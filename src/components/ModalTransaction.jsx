
import Modal from 'react-modal';

const ModalTransaction = ({ showModal, setShowModal, transaction, setTransaction }) => {
  const handleClose = () => {
    setTransaction({});
  }
  console.log(transaction);
  return (
    <>
      {transaction &&
        <Modal
          isOpen={showModal}
          ariaHideApp={false}
          contentLabel={transaction.hash}
        >
          <div className='grid place-items-center'>
            <h2 className='text-2xl text-bold  dark:text-black mt-2'>Transaction: {transaction.hash}</h2>
            <button
              className="py-2 px-4 border border-gray-900 rounded bg-gray-800 mx-2  text-white font-bold hover:bg-gray-500" 
              onClick={handleClose}>close</button>
          </div>

        </Modal>
      }
    </>
  )
}

export default ModalTransaction