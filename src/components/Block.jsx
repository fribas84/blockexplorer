import {React, useEffect, useState } from 'react';
import { Utils } from 'alchemy-sdk';
import {Div,Table,Tr,Th,Td} from './styled'

const Block = ({ block }) => {
  console.log(block.transactions);
  const [currentTime,setCurrentTime] = useState("");
  useEffect(()=>{
    const convertTimeStamp = () =>{
      const d = new Date(block.timestamp * 1000);
      setCurrentTime(String(d));
      
    }
    convertTimeStamp();
  })
  return (
    <>
    {Object.keys(block).length > 0 && (

<Div>
<Table>
  <tbody>
    <Tr>
      <Th scope="row">
       Block Number: 
      </Th>
      <Td>
        {block.number}
      </Td>
    </Tr>
    <Tr>
      <Th scope="row" >
       Hash: 
      </Th>
      <Td>
        {block.hash}
      </Td>
    </Tr>
    <Tr>
      <Th scope="row">
       Parent Hash: 
      </Th>
      <Td>
        {block.parentHash}
      </Td>
    </Tr>
    <Tr>
      <Th scope="row">
       Time Stamp: 
      </Th>
      <Td>
    
        {currentTime}
      </Td>
    </Tr>
    <Tr>
      <Th scope="row">
       Gas Used: 
      </Th>
      <Td>
        {Utils.formatUnits(block.gasUsed,"wei")} wei / {Utils.formatEther(block.gasUsed)} eth
      </Td>
    </Tr>
    <Tr>
      <Th scope="row">
       Gas Limit: 
      </Th>
      <Td>
      {Utils.formatUnits(block.gasLimit,"wei")} wei / {Utils.formatEther(block.gasLimit)} eth
      </Td>
    </Tr>
    <Tr>
      <Th scope="row">
        Miner / Validator: 
      </Th>
      <Td>
        {block.miner}
      </Td>
    </Tr>
    <Tr>
      <Th scope="row">
       Fee: 
      </Th>
      <Td>
      {Utils.formatUnits(block.baseFeePerGas,"wei")} wei / {Utils.formatEther(block.baseFeePerGas)} eth
      </Td>
    </Tr>
    <Tr>
      <Th scope="row">
       Transactions: 
      </Th>
      <Td>
        {Object(block.transactions).length} transactions
      </Td>
    </Tr>
    </tbody>
</Table>
</Div>
)}
    </>
    

  )
}

export default Block