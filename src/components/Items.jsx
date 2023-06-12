import { Utils } from 'alchemy-sdk';



const Items = ({ currentItems }) => {
    if(currentItems){
        return (
            <>
            {currentItems && 
            <div className='grid place-items-center'>
                <table className='md:w-3/4 justify-center bg-white shadow m-5 table-fixed'>
                    <thead>
                        <tr className='border-b'>
                            <th className='bg-gray-800 text-white space-x-2 p-2' scope='col'> Hash </th>
                            <th className='bg-gray-800 text-white space-x-2 p-2' scope='col'> From </th>
                            <th className='bg-gray-800 text-white space-x-2 p-2' scope='col'> To </th>
                            <th className='bg-gray-800 text-white space-x-2 p-2' scope='col'> Value</th>
                        </tr>
    
                    </thead>
                    <tbody>
                        {currentItems.map((item) => (
                            <tr className='border-b' key={item.hash}>
                                <td className='p-2 font-bold space-x-2'>{item.hash.substring(0, 15)}... </td>
                                <td className='p-2 space-x-2'>{item.from.substring(0, 15)}... </td>
                                <td className='p-2 space-x-2'>{item.to.substring(0, 15)}... </td>
                                <td className='p-2 space-x-2'>{Utils.formatEther(item.value)} eth </td>
                            </tr>
                        ))}
                    </tbody>
    
    
    
                </table>
    
    
            </div>
        }
        </>
        );
    }
    else{
        return(<></>)
    }
    
}

export default Items