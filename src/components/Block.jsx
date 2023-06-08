import React, { useEffect, useState } from 'react';
import { Utils } from 'alchemy-sdk';
import tw from "tailwind-styled-components";

const Div = tw.div`
relative
overflow-x-auto
shadow-md
sm:rounded-lg
`

const Table = tw.table`
w-full
text-sm
text-left
text-gray-500
dark:text-gray-400"
`

const Tr = tw.tr`
bg-white
border-b
dark:bg-gray-900
dark:border-gray-700
`

const Th = tw.th`
px-6
py-4
font-medium
text-gray-900
whitespace-nowrap
dark:text-white
`
const Block = ({ block }) => {
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
      <td className="px-6 py-4">
        {block.number}
      </td>
    </Tr>
    <Tr>
      <Th scope="row" >
       Hash: 
      </Th>
      <td className="px-6 py-4">
        {block.hash}
      </td>
    </Tr>
    <Tr>
      <Th scope="row">
       Parent Hash: 
      </Th>
      <td className="px-6 py-4">
        {block.parentHash}
      </td>
    </Tr>
    <Tr>
      <Th scope="row">
       Time Stamp: 
      </Th>
      <td className="px-6 py-4">
    
        {currentTime}
      </td>
    </Tr>
    <Tr>
      <Th scope="row">
       Gas Used: 
      </Th>
      <td className="px-6 py-4">
        {Utils.formatUnits(block.gasUsed,"wei")} wei / {Utils.formatEther(block.gasUsed)} eth
      </td>
    </Tr>
    <Tr>
      <Th scope="row">
       Gas Limit: 
      </Th>
      <td className="px-6 py-4">
      {Utils.formatUnits(block.gasLimit,"wei")} wei / {Utils.formatEther(block.gasLimit)} eth
      </td>
    </Tr>
    <Tr>
      <Th scope="row">
        Miner / Validator: 
      </Th>
      <td className="px-6 py-4">
        {block.miner}
      </td>
    </Tr>
    <Tr>
      <Th scope="row">
       Fee: 
      </Th>
      <td className="px-6 py-4">
      {Utils.formatUnits(block.baseFeePerGas,"wei")} wei / {Utils.formatEther(block.baseFeePerGas)} eth
      </td>
    </Tr>
    <Tr>
      <Th scope="row">
       Transactions: 
      </Th>
      <td className="px-6 py-4">
        {Object(block.transactions).length} transactions
      </td>
    </Tr>
    </tbody>
</Table>
</Div>
)}
    </>
    

  )
}

export default Block