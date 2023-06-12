import {useEffect, useState } from 'react';
import { Utils } from 'alchemy-sdk';


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

<div className='grid place-items-center'>
<h2 className='text-2xl text-bold  dark:text-black mt-2'> Block Metadata </h2>
<table 
  className='w-3/4 bg-white shadow mt-5 table-auto'>
  <tbody>
    <tr 
    className='border-b'>
      <th className='bg-gray-800 text-white' scope="row">
       Block Number: 
      </th>
      <td className='p-2 space-x-2'>
        {block.number}
      </td>
    </tr>
    <tr className='border-b'>
      <th className='bg-gray-800 text-white' scope="row" >
       Hash: 
      </th>
      <td className='p-2 space-x-2'>
        {block.hash}
      </td>
    </tr>
    <tr className='border-b'>
      <th className='bg-gray-800 text-white' scope="row">
       Parent Hash: 
      </th>
      <td className='p-2 space-x-2'>
        {block.parentHash}
      </td>
    </tr>
    <tr className='border-b'>
      <th className='bg-gray-800 text-white' scope="row">
       Time Stamp: 
      </th>
      <td className='p-2 space-x-2'>
    
        {currentTime}
      </td>
    </tr>
    <tr className='border-b'>
      <th className='bg-gray-800 text-white' scope="row">
       Gas Used: 
      </th>
      <td className='p-2 space-x-2'>
        {Utils.formatUnits(block.gasUsed,"wei")} wei / {Utils.formatEther(block.gasUsed)} eth
      </td>
    </tr>
    <tr className='border-b'>
      <th className='bg-gray-800 text-white' scope="row">
       Gas Limit: 
      </th>
      <td className='p-2 space-x-2'>
      {Utils.formatUnits(block.gasLimit,"wei")} wei / {Utils.formatEther(block.gasLimit)} eth
      </td>
    </tr>
    <tr className='border-b'>
      <th className='bg-gray-800 text-white' scope="row">
        Miner / Validator: 
      </th>
      <td className='p-2 space-x-2'>
        {block.miner}
      </td>
    </tr>
    <tr className='border-b'>
      <th className='bg-gray-800 text-white' scope="row">
       Fee: 
      </th>
      <td className='p-2 space-x-2'>
      {Utils.formatUnits(block.baseFeePerGas,"wei")} wei / {Utils.formatEther(block.baseFeePerGas)} eth
      </td>
    </tr>
    <tr className='border-b'>
      <th className='bg-gray-800 text-white' scope="row">
       Transactions: 
      </th>
      <td className='p-2 space-x-2'>
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