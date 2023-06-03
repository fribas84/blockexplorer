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

const BlockNav = () => {
  return (
    <div className='m-1.5'> 
            <Button>  {'< '} Previous </Button>
            <Button>  Next {' >'} </Button>

    </div>

  )
}

export default BlockNav