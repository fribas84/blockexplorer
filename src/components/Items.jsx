import React from 'react';
import {Div,Table,Tr,Th} from './styled';


const Items = ({ currentItems }) => {
  return (
        <>
          {currentItems &&
            currentItems.map((item) => (
              <div>
                {item.hash}
              </div>
            ))}
        </>
      );
    }

export default Items