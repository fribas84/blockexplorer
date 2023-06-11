
import { Div, Table, Tr, Th } from './styled'
import ReactPaginate from 'react-paginate';
import { React, useEffect, useState } from 'react';
import Items from './Items';



const Transactions = ({ blockTxs }) => {
  const [itemOffset, setItemOffset] = useState(0);


  if (blockTxs) {
    const itemsPerPage = 20;
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = blockTxs.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(blockTxs.length / itemsPerPage);

    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % blockTxs.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
    };


    return (
      <>
        {blockTxs &&
          <Div>
            <Items currentItems={currentItems} />
            <ReactPaginate
              breakLabel="..."
              nextLabel="next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel="< prev"
              renderOnZeroPageCount={null}
              previousClassName = "dark:bg-gray-700 dark:border-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded m-1"
              nextClassName = "dark:bg-gray-700 dark:border-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded m-1"
              containerClassName = " flex m-1"
              pageClassName	 = "dark:bg-gray-500 dark:border-gray-500 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded m-1"
              activeClassName	 = "dark:bg-gray-900 dark:border-gray-600 hover:bg-gray-200 text-white font-bold py-2 px-4 rounded m-1"

            />
          </Div>
        }
      </>
    )
  }
  else{
    return(<></>)
  }

}

export default Transactions