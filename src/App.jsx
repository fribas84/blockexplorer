import { Alchemy, Network } from 'alchemy-sdk';
import { useEffect, useState } from 'react';
import Block from './components/Block';
import BlockNav from './components/BlockNav';
import Transactions from './components/Transactions';
import ModalTransaction from './components/ModalTransaction';



// Refer to the README doc for more information about using API
// keys in client-side code. You should never do this in production
// level code.
const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};



// In this week's lessons we used ethers.js. Here we are using the
// Alchemy SDK is an umbrella library with several different packages.
//
// You can read more about the packages here:
//   https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview#api-surface
const  alchemy = new Alchemy(settings);

function App() {
  const [blockNumber, setBlockNumber] = useState();
  const [block, setBlock] = useState({});
  const [lastBlock, setLastBlock] = useState();
  const [transaction, setTransaction] = useState({});
  const [showModal,setShowModal] = useState(false);


  const getLastBlock = async ()=>{
    const lastblock = await alchemy.core.getBlockNumber()
    setLastBlock(lastblock);
  }

  useEffect( () => {
    const loadData = async () => { 
      setBlockNumber(await alchemy.core.getBlockNumber());
    }
    loadData();
  },[]);

  useEffect(() => {
    const getBlock = async () => {
      try{
        setBlock(await alchemy.core.getBlockWithTransactions(blockNumber));
      }catch(ex){
        console.log(ex);
      }
      
    }
    getBlock();
  },[blockNumber]);

  useEffect(()=>{
    if(Object.keys(transaction).length === 0){
      setShowModal(false);
    }else{
      setShowModal(true);
    }
  },[transaction])
  return (
  <div
    className='md:min-h-screen mx-auto mt-auto pt-10'>
      <h1 className='text-4xl text-bold  dark:text-black mt-2 text-center my-10 '>Ethereum Mainnet Block Explorer</h1>
      <BlockNav 
      setBlockNumber = {setBlockNumber}
      blockNumber = {blockNumber}
      getLastBlock = {getLastBlock}
      lastBlock = {lastBlock}
      block={block}/>
    <Block 
      block={block}
    />
    <Transactions 
      blockTxs = {block.transactions}
      transaction = {transaction}
      setTransaction = {setTransaction}/>
   
    <ModalTransaction 
      transaction={transaction}
      showModal={showModal}
      setShowModal={setShowModal}
      setTransaction={setTransaction}
      />
  </div>)
}

export default App;
