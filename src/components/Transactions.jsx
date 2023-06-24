
import ReactPaginate from 'react-paginate';
import { useState } from 'react';
import Items from './Items';



const Transactions = ({ blockTxs,setTransaction }) => {
  const [itemOffset, setItemOffset] = useState(0);


  if (blockTxs) {
    const itemsPerPage = 10;
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = blockTxs.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(blockTxs.length / itemsPerPage);

    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % blockTxs.length;
      setItemOffset(newOffset);
    };


    return (
      <>
        {blockTxs &&
          <div className='grid place-items-center'>
            <h2 className='text-2xl text-bold  dark:text-black mt-2'> Block Transactions </h2>
            <Items 
              currentItems={currentItems}
              setTransaction = {setTransaction} />
            <ReactPaginate
              breakLabel="..."
              nextLabel=">"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel="<"
              renderOnZeroPageCount={null}
              previousClassName = "dark:bg-gray-700 dark:border-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded m-1"
              nextClassName = "dark:bg-gray-700 dark:border-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded m-1"
              containerClassName = " flex m-1"
              pageClassName	 = "dark:bg-gray-500 dark:border-gray-500 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded m-1"
              activeClassName	 = "dark:bg-gray-900 dark:border-gray-600 hover:bg-gray-200 text-white font-bold py-2 px-4 rounded m-1"

            />
          </div>
        }
      </>
    )
  }
  else{
    return(<></>)
  }

}

export default Transactions