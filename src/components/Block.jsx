import React, { useEffect, useState } from 'react';
import { Utils } from 'alchemy-sdk';



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

<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">

  <tbody>
    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
       Block Number: 
      </th>
      <td className="px-6 py-4">
        {block.number}
      </td>
    </tr>
    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
       Hash: 
      </th>
      <td className="px-6 py-4">
        {block.hash}
      </td>
    </tr>
    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
       Parent Hash: 
      </th>
      <td className="px-6 py-4">
        {block.parentHash}
      </td>
    </tr>
    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
       Time Stamp: 
      </th>
      <td className="px-6 py-4">
    
        {currentTime}
      </td>
    </tr>
    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
       Gas Used: 
      </th>
      <td className="px-6 py-4">
        {Utils.formatUnits(block.gasUsed,"wei")} wei / {Utils.formatEther(block.gasUsed)} eth
      </td>
    </tr>
    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
       Gas Limit: 
      </th>
      <td className="px-6 py-4">
      {Utils.formatUnits(block.gasLimit,"wei")} wei / {Utils.formatEther(block.gasLimit)} eth
      </td>
    </tr>
    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        Miner / Validator: 
      </th>
      <td className="px-6 py-4">
        {block.miner}
      </td>
    </tr>
    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
       Fee: 
      </th>
      <td className="px-6 py-4">
      {Utils.formatUnits(block.baseFeePerGas,"wei")} wei / {Utils.formatEther(block.baseFeePerGas)} eth
      </td>
    </tr>
    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
       Transactions: 
      </th>
      <td className="px-6 py-4">
        {Object(block.transactions).length} transactions
      </td>
    </tr>
    </tbody>
</table>
</div>
)}
    </>
    

  )
}

export default Block