import React from 'react';
import { Div, Table, Tr, Th, Td} from './styled';
import { Utils } from 'alchemy-sdk';



const Items = ({ currentItems }) => {
    if(currentItems){
        return (
            <Div>
                <Table>
                    <thead>
                        <tr>
                            <th scope='col'> Hash </th>
                            <th scope='col'> From </th>
                            <th scope='col'> To </th>
                            <th scope='col'> Value</th>
    
                        </tr>
    
                    </thead>
                    <tbody>
                        {currentItems.map((item) => (
                            <Tr key={item.hash}>
                                <Th scope="row">{item.hash.substring(0, 10)}... </Th>
                                <Td>{item.from.substring(0, 10)}... </Td>
                                <Td>{item.to.substring(0, 10)}... </Td>
                                <Td>{Utils.formatEther(item.value)} eth </Td>
                            </Tr>
                        ))}
                    </tbody>
    
    
    
                </Table>
    
    
            </Div>
        );
    }
    else{
        return(<></>)
    }
    
}

export default Items