import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBTypography,
  MDBTable
} from "mdb-react-ui-kit";
import { useSelector } from "react-redux";


const Checkout = () => {

  let getdata = useSelector((state) => state.cartreducer)
  let userdata = useSelector((state) => state.userreducer)

  let Total = 0
  let Subtotal = 0
  let tax = 0
  var date = new Date();
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();

  getdata.carts.map((e) => ( Subtotal += e.price * e.qnty ))
  tax = (Subtotal * 15) / 100
  Total = Subtotal + tax;
  console.log(userdata.data.email)


  return (
    <div>
      <MDBContainer className="py-5 ">
        <MDBCard className="p-4">
          <MDBCardBody>
            <MDBContainer className="mb-2 mt-3">
              <MDBRow className="d-flex align-items-baseline">
                <MDBCol xl="9">
                  <p style={{ color: "#7e8d9f", fontSize: "20px" }}>
                    Order Invoice &gt; &gt; <strong>ID: #123-123</strong>
                  </p>
                </MDBCol>
                <MDBCol xl="3" className="float-end">
                  <MDBBtn
                    color="light"
                    ripple="dark"
                    className="text-capitalize border-0"
                  >
                    <MDBIcon fas icon="print" color="primary" className="me-1" />
                    Print
                  </MDBBtn>
                  <MDBBtn
                    color="light"
                    ripple="dark"
                    className="text-capitalize border-0 ms-2"
                  >
                    <MDBIcon
                      far
                      icon="file-pdf"
                      color="danger"
                      className="me-1"
                    />
                    Export
                  </MDBBtn>
                  <hr />
                </MDBCol>
              </MDBRow>
            </MDBContainer>
            <MDBContainer>
              <MDBCol md="12" className="text-center">
                <MDBIcon
                  fab
                  icon="mdb"
                  size="4x"
                  className="ms-0 "
                  style={{ color: "#5d9fc5" }}
                />
              </MDBCol>
            </MDBContainer>
            <MDBRow>
              <MDBCol xl="8">
                <MDBTypography listUnStyled>
                  <li className="text-muted">
                    To: <span style={{ color: "#5d9fc5" }}>{userdata.data.fname}</span>
                  </li>
                  <li className="text-muted">{userdata.data.address} , </li>
                  <li className="text-muted">India</li>
                  <li className="text-muted">
                    <MDBIcon fas icon="phone-alt" /> {userdata.data.phone}
                  </li>
                </MDBTypography>
              </MDBCol>
              <MDBCol xl="4">
                <p className="text-muted">Invoice</p>
                <MDBTypography listUnStyled>
                  <li className="text-muted">
                    <MDBIcon fas icon="circle" style={{ color: "#84B0CA" }} />
                    <span className="fw-bold ms-1">ID:</span>#123-456
                  </li>
                  <li className="text-muted">
                    <MDBIcon fas icon="circle" style={{ color: "#84B0CA" }} />
                    <span className="fw-bold ms-1">Creation Date: </span>{day + "/" + month + "/" + year}
                  </li>
                  <li className="text-muted">
                    <MDBIcon fas icon="circle" style={{ color: "#84B0CA" }} />
                    <span className="fw-bold ms-1">Status:</span>
                    <span className="badge bg-warning text-black fw-bold ms-1">
                      Unpaid
                    </span>
                  </li>
                </MDBTypography>
              </MDBCol>
            </MDBRow>
            <MDBRow className="my-2 mx-1 justify-content-center">
              <MDBTable striped borderless>

                <table class="table table-sm">
                  <thead>
                    <tr>
                      <th scope="col">Product Name</th>
                      <th scope="col">Description</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Price</th>
                      <th scope="col">Total Product Price</th>

                    </tr>
                  </thead>
                  {
                    // getdata.carts.map((e) => {

                    <tbody>
                      {getdata.carts.map((myList) =>
                        <>
                          <tr>
                            <th scope="row">{myList.name}</th>
                            <td>{myList.description}</td>
                            <td>{myList.qnty}</td>
                            <td>{myList.price}</td>
                            <td>{myList.price * myList.qnty}</td>


                          </tr>
                        </>
                      )}

                    </tbody>

                    // })

                  }
                </table>
              </MDBTable>
            </MDBRow>
            <MDBRow>
              <MDBCol xl="8">
                <p className="ms-3">
                  Add additional notes and payment information
                </p>
              </MDBCol>
              <MDBCol xl="3">
                <MDBTypography listUnStyled>
                  <li className="text-muted ms-3">
                    <span class="text-black me-4">SubTotal</span>Rs {Subtotal}
                  </li>
                  <li className="text-muted ms-3 mt-2">
                    <span class="text-black me-4">Tax(15%)</span>Rs {tax}
                  </li>
                </MDBTypography>
                <p className="text-black float-start">
                  <span className="text-black me-3"> Total Amount</span>
                  <span style={{ fontSize: "25px" }}> Rs {Total}</span>
                </p>
              </MDBCol>
            </MDBRow>

            <hr />
            <MDBRow>
              <MDBCol xl="10">
                <p>Thank you for your purchase</p>
              </MDBCol>
              <MDBCol xl="2">
                <MDBBtn
                  className="text-capitalize"
                  style={{ backgroundColor: "#60bdf3" }}
                >
                  Pay Now
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
      );

    </div>
  )
}

export default Checkout