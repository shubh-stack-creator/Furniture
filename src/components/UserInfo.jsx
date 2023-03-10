import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { USER } from '../redux/actions/actions'

import Form from 'react-bootstrap/Form';
const UserInfo = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [fname, setFname] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const dispatch = useDispatch();
    const handleSubmit = (event) => {
        event.preventDefault();
        const final = { email: email, password: password, fname: fname, address: address, phone: phone };

        dispatch(USER(final));
        navigate("/signin");
    }

    return (
        <div className='UserInfo' style={{color: "white" }}>
            <div className="container">

                {/* <Form.Group className="mb-3">
                    <Form.Label>Disabled input</Form.Label>
                    <Form.Control placeholder="Disabled input" disabled />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Disabled select menu</Form.Label>
                    <Form.Select disabled>
                        <option>Disabled select</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Check type="checkbox" label="Can't check this" disabled />
                </Form.Group> */}

                <form onSubmit={handleSubmit} style={{ marginTop: "7rem" ,maxHeight:"auto"}}>
                    <h1 className="" style={{ marginBottom: "5vh" }}>User Information</h1>

                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label ">Email address</label>
                        <input type="email" value={email} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={e => setEmail(e.target.value)} />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" value={password} class="form-control" id="exampleInputPassword1" onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <label for="name" class="form-label">Full Name</label>
                        <input type="text" value={fname} class="form-control" id="ftext" aria-describedby="text" onChange={e => setFname(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <label for="name" class="form-label">Address</label>
                        <input type="text" value={address} class="form-control" id="atext" aria-describedby="text" onChange={e => setAddress(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <label for="name" class="form-label">Phone No. </label>
                        <input type="text" value={phone} class="form-control" id="ptext" aria-describedby="text" onChange={e => setPhone(e.target.value)} />
                    </div>
                    <button type="submit" class="btn btn-primary" style={{ marginBottom: "10vh" }}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default UserInfo