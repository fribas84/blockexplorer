import tw from "tailwind-styled-components"

const Button = tw.button`
dark:bg-gray-700
dark:border-gray-700
hover:bg-gray-900
text-white
font-bold
py-2
px-4
rounded
mx-1
`

const BlockNav = ({setBlockNumber,blockNumber,getLastBlock,lastBlock,block}) => {

  const prevBlock = ()=>{
    const prevBlock = blockNumber - 1;
    console.log("block number :", block);
    console.log("Prev Block :",prevBlock);
    setBlockNumber(prevBlock);
  }

  const nextBlock = () =>{
    getLastBlock();
    const nextBlck = blockNumber+1;
    if(lastBlock > nextBlck){
      setBlockNumber(nextBlck);
    }
    else{
      setBlockNumber(lastBlock);
    } 
  }
  const go2lastBlock = () =>{
    getLastBlock();
    setBlockNumber(lastBlock);
  }

  return (
    <div className='md:flex justify-center m-1.5'> 
            <Button onClick={prevBlock}>  {'< '} Previous </Button>
            <Button onClick={nextBlock}>  Next {' >'} </Button>
            <Button onClick={go2lastBlock}>  Last {' >>'} </Button>
    </div>

  )
}

export default BlockNav