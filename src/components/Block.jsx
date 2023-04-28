import React from 'react'

const Block = ({block,blockNumber}) => {
  return (
    <div>Block: {JSON.stringify(block)}</div>
  )
}

export default Block