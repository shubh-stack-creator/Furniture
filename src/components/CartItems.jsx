import React, { useState, useEffect } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import Table from 'react-bootstrap/Table'
import { useDispatch} from 'react-redux'
import { NavLink } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import { DLT,ADD,REMOVE,REMOVEONE } from '../redux/actions/actions'


const CartItems = ({data}) => {
    const [price, setPrice] = useState(0)

    const total = () => {
        let total = 0
        for (let i = 0; i < data.carts.length; i++) {
            total += data.carts[i].price * data.carts[i].qnty
        }
        setPrice(total)
        return total
    }
    const send = (e)=>{
        dispatch(ADD(e));
      }
    const dispatch = useDispatch();
    
    const handleClick = (e) =>{
        dispatch(REMOVE(e))
    }
    
    const dlt = (id)=>{
        dispatch(DLT(id));
    }
    
    // remove one
    const remove = (item)=>{
      dispatch(REMOVEONE(item))
    }
    useEffect(() =>{
        total()
    },[total])
    return (
        <div className='card_details dropdown-menu dropdown-menu-end' style={{ width: "24rem", padding: 10 }}>
            <Table>
                <thead>
                    <tr>
                        <th>Sample</th>
                        <th>Product </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.carts.map((e) => {
                            return (
                                <>
                                    <tr className='shadow bg-body-tertiary rounded'>
                                        <td>
                                            <NavLink to={`/product/${e.id}`}>
                                               <img src={e.image} style={{ width: "5rem", height: "5rem" }} alt="" />
                                            </NavLink>   
                                        </td>
                                        <td>
                                            <p>{e.name}</p>
                                            <p>Price : ₹{e.price}</p>
                                            <p>Quantity : {e.qnty}</p>
                                            <td style={{ color: "black", fontSize: 20, cursor: "pointer"}}>
                                                <AddIcon onClick={()=>send(e)} />
                                                <RemoveIcon onClick={e.qnty <=1 ? ()=>dlt(e.id) : ()=>remove(e)}/>
                                            </td>
                                        </td>
                                        <td className='mt-5' style={{ color: "red", fontSize: 20, cursor: "pointer" , display:"flex",flexDirection:"columns"}} >
                                            <DeleteIcon onClick={() => handleClick(e)} style={{ color: "black", fontSize: 20, cursor: "pointer" }} />
                                            
                                        </td>
                                    </tr>
                                </>
                            )
                        })
                    }
                </tbody>
            </Table>
            <div className="cartfinal d-flex justify-content-between">
                <p className='text-center '>Total:₹{price}</p>
                <NavLink to={`/info`}>
                    <button className="btn btn-success" style={{backgroundColor:"#36454F"}}>Check out</button>
                </NavLink>

            </div>
        </div>
    )
}

export default CartItems