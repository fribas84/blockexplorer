
import { Div, Table, Tr, Th } from './styled'
import ReactPaginate from 'react-paginate';
import { React, useEffect, useState } from 'react';
import Items from './Items';



const Transactions = ({ blockTxs }) => {
  const [itemOffset, setItemOffset] = useState(0);


  if (blockTxs) {
    const itemsPerPage = 10;
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
              previousLabel="< previous"
              renderOnZeroPageCount={null}
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