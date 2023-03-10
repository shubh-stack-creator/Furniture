import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux'
import CartItems from './CartItems';
const Navbar = () => {
    const handleChildClick =(e) => {
        e.stopPropagation();
    
        console.log('handleChildClick');
      }
    const getdata = useSelector((state) => state.cartreducer)

    return (
        <div className='navmain shadow-lg bg-body-tertiary rounded' style={{backgroundColor:"#36454F",color:"white"}} >
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/" style={{ marginLeft: "4vw", fontWeight: "400", fontSize: "xx-large",color:"white",fontFamily: "'Pacifico', cursive" }}>Furniture</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item" style={{ marginLeft: "2vw" }}>
                                <a class="nav-link active" aria-current="page" href="/" style={{color:"white"}}>Home</a>
                            </li>
                        </ul>
                        <li class="nav-item dropdown" style={{ marginRight: "4vw" }} onClick={handleChildClick}>
                            <a class="nav-link dropdown-toggle" href="/cart" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <ShoppingCartIcon />
                            </a>
                            {

                                getdata.carts.length
                                    ?
                                    <CartItems data={getdata} />
                                    :
                                    <ul class="dropdown-menu dropdown-menu-end">
                                        <div className="cartDetails">
                                            <div className="cart-heading d-flex justify-content-between">
                                                <p style={{ fontFamily: "Tilt Neon,cursive", padding: "2vh" }}>Your Cart is Empty ... </p>
                                            </div>
                                            <img style={{ width: "15vw" }} src="https://cdn.dribbble.com/users/436607/screenshots/8516786/media/f5f39e2f53a1c763bd943f7955f2521c.gif" alt="" />
                                        </div>
                                    </ul>
                            }
                        </li>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar