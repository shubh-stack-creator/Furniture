import React, { useState } from 'react'
import Table from 'react-bootstrap/Table'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { useEffect } from 'react';
import Navbar from '../components/Navbar';
const ProductInfo = () => {
    const { id } = useParams();
    const [data, setData] = useState([])

    const getdata = useSelector((state) => state.cartreducer.carts);
    const imgstyle = {
        width: '20vw',
        height: '30vh',
        marginBottom: '5rem'
       }
    const findProduct = () => {
        getdata.map(product => {
            if (product.id == id) {
                setData(product)
            }
            return product
        })
    }
    useEffect(() => {
        findProduct()
    }, [id])
    return (
        <>
        
        <Navbar />
        <div className="container mt-2 mb-5" style={{color:"white"}}>
            <h2 className='text-center'>Product Details :
            </h2>
            <section className='container mt-3' style={{color:"white"}}>
                <div className="itemsdetails d-flex justify-content-evenly mt-5 ">
                    <img style={imgstyle} src={data.image} alt="" className='d-none d-md-block' />
                    <div className="details">
                        <Table style={{color:"white"}}>
                            <tbody>

                                <tr>
                                    <td style={{ maxWidth: "20vw" }}>
                                        <p> <strong>Product Name </strong> : {data.name} </p>
                                        <p> <strong>Price</strong>  : {data.price} </p>
                                        <p> <strong>Description</strong>  : {data.description} </p>
                                        <p> <strong>Total (including Rs 50 tax) </strong>  : {data.price + 50} </p>
                                        <div className='mt-5 d-flex justify-content-between align-items-center' style={{ width: 100, cursor: "pointer", background: "#ddd", color: "#111" }}>
                                            {/* <span style={{ fontSize: 24 }} onClick={ele.qnty <= 1 ? () => dlt(ele.id) : () => remove(ele)}>-</span>
                                <span style={{ fontSize: 22 }}>{ele.qnty}</span>
                            <span style={{ fontSize: 24 }} onClick={() => send(ele)}>+</span> */}

                                        </div>
                                    </td>
                                    <td>
                                        <p><strong>Rating :</strong> <span style={{ background: "green", color: "#fff", padding: "2px 5px", borderRadius: "5px" }}>5 ★	</span></p>
                                        <p><strong>Order Review :</strong> <span > "High Buid Quality"	</span></p>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </section>
        </div>
        </>

    )
}

export default ProductInfo