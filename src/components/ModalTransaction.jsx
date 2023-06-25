import Modal from 'react-modal';
import { Utils } from 'alchemy-sdk';



const ModalTransaction = ({ showModal, setShowModal, transaction, setTransaction }) => {
  const handleClose = () => {
    setTransaction({});
  }
  console.log(transaction);
  return (
    <>
      {(Object.keys(transaction).length !== 0) &&
        <Modal
          isOpen={showModal}
          ariaHideApp={false}
          contentLabel={transaction.hash}
          onRequestClose={handleClose}
          overlayClassName="Overlay"

        >
          <div className='grid place-items-center border-gray-600 '>
          <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 mx-5">
                Transaction: {transaction.hash}
                </h3>
                <button 
                  type="button" 
                  classname="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={handleClose}>
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>

            <table
              className='w-3/4 bg-white shadow mt-5 table-auto'>
              <tbody>
                <tr
                  className='border-b'>
                  <th className='bg-gray-800 text-white' scope="row">
                    From:
                  </th>
                  <td className='p-2 space-x-2'>
                    {transaction.from}
                  </td>
                </tr>
                <tr
                  className='border-b'>
                  <th className='bg-gray-800 text-white' scope="row">
                    To:
                  </th>
                  <td className='p-2 space-x-2'>
                    {transaction.to}
                  </td>
                </tr>
                <tr
                  className='border-b'>
                  <th className='bg-gray-800 text-white' scope="row">
                    Value:
                  </th>
                  <td className='p-2 space-x-2'>
                    {Utils.formatEther(transaction.value)}
                  </td>
                </tr>
                <tr
                  className='border-b'>
                  <th className='bg-gray-800 text-white' scope="row">
                    Gas Price:
                  </th>
                  <td className='p-2 space-x-2'>
                    {Utils.formatEther(transaction.gasPrice)} eth
                  </td>
                </tr>
                <tr
                  className='border-b'>
                  <th className='bg-gray-800 text-white' scope="row">
                    Max Priority Fee Per Gas:
                  </th>
                  <td className='p-2 space-x-2'>
                    {Utils.formatEther(transaction.maxPriorityFeePerGas)} eth
                  </td>
                </tr>
                <tr
                  className='border-b'>
                  <th className='bg-gray-800 text-white' scope="row">
                  Gas Limit:
                  </th>
                  <td className='p-2 space-x-2'>
                    {Utils.formatEther(transaction.gasLimit)} eth
                  </td>
                </tr>
              </tbody>
            </table>
            <button
              className="py-2 my-5 px-4 border border-gray-900 rounded bg-gray-800 mx-2  text-white font-bold hover:bg-gray-500"
              onClick={handleClose}>Close</button>
          </div>

        </Modal>
      }
    </>
  )
}

export default ModalTransaction