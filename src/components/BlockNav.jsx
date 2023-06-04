import React from 'react';
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

const BlockNav = ({setBlockNumber,blockNumber}) => {

  const prevBlock = ()=>{
    setBlockNumber(blockNumber - 1);
  }
  return (
    <div className='m-1.5'> 
            <Button onClick={prevBlock}>  {'< '} Previous </Button>
            <Button>  Next {' >'} </Button>
            <Button>  Last {' >>'} </Button>
    </div>

  )
}

export default BlockNav