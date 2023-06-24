
import Modal from 'react-modal';

const ModalTransaction = ({showModal, setShowModal, transaction,setTrasaction}) => {
  const handleClose = () =>{
    setTrasaction();
    setShowModal(false);
  }
  return (
    <>
    {transaction &&
    <Modal
     isOpen={showModal}
     onRequestClose={()=>{setShowModal(false)}}
     contentLabel={transaction.hash}
     appElement={transaction}
    
    >
      <p>{transaction.hash}</p>
    </Modal>
    }
    </>
  )
}

export default ModalTransaction