import Modal from 'react-modal';
import { Utils } from 'alchemy-sdk';



const ModalTransaction = ({ showModal, setShowModal, transaction, setTransaction }) => {
  const handleClose = () => {
    setTransaction({});
  }

  return (
    <>
      {(Object.keys(transaction).length !== 0) &&
        <Modal
          isOpen={showModal}
          ariaHideApp={false}
          contentLabel={transaction.hash}
          onRequestClose={handleClose}

        >
          <div className='grid place-items-center border-gray-600 '>
          <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 mx-5">
                Transaction: {transaction.hash}
                </h3>
                <button 
                  type="button" 
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={handleClose}>
                    X
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
                    {Utils.formatEther(transaction.value)} eth
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