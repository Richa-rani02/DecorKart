import { useState } from "react";
import { authActions } from "../../utils/actions";
import "./Navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { SEARCH_PRODUCT } from "../../utils/constants";
import { useStateContext } from "../../context/stateContext";
import { useAuth } from "../../context/authContext";
import toast from "react-hot-toast";
import {AiOutlineShoppingCart,FiHeart,BiUser} from "../../utils/icons";
const Navbar = () => {
    let navigate = useNavigate();
    const [searchActive, setSearchActive] = useState(false);
    const [profileActive, setProfileActive] = useState(false);
    const location = useLocation();
    const { state, dispatch } = useStateContext();
    const { authState: { token }, authDispatch } = useAuth();

    const logoutHandler = () => {
        localStorage.removeItem("sessiontoken")
        const toastId = toast.loading("Logging out...");
        toast.success("You're logged out successfully", {
            id: toastId,
        });
        authDispatch({ type: authActions.LOGOUT })
        setProfileActive(prev=>!prev);
        navigate("/");

    }
   return (
       <header>
           <div className="left-area">
           <div className="logo">
               <img src="https://res.cloudinary.com/dgomw715r/image/upload/v1655122821/ProjectImages/ecomm2_r6nyji.png" className="img-responsive">

               </img>
            </div>
           </div>
              <div className="nav-icons">
                 {/* <Link to={token ? "/cart" : "/signin"}>
               <span className="badge-container icon-col">
                         <AiOutlineShoppingCart size={28} className="header-icon"/>
                         <span className="badge icon-badge">{state.productInCart.length}</span>
                 </span>
                 </Link>
                 <Link to={token ? "/wishlist" : "/signin"}>
                     <span className="badge-container icon-col">
                         <FiHeart  size={28} className="header-icon"/>
                        <span className="badge icon-badge">{state.wishlist.length}</span>
                     </span>
                 </Link>
                 <Link to={token ? "/wishlist" : "/signin"}>
                     <span className="badge-container icon-col">
                         <BiUser  size={28} className="header-icon"/>
                     </span>
                 </Link> */}
                        <Link to={token ? "/cart" : "/signin"}>
                    <span className="badge-container icon-col">
                        <div className="fas fa-shopping-cart" id="cart-btn"></div>
                         <span className="badge icon-badge">{state.productInCart.length}</span>
                    </span>
               </Link>
               <Link to={token ? "/wishlist" : "/signin"}>
                    <span className="badge-container icon-col">
                        <div className="fas fa-heart" id="wishlist-btn"></div>
                       <span className="badge icon-badge">{state.wishlist.length}</span>
                     </span>
               </Link>
               <Link to={token ? "/signin" : "/signin"}>
                <div className="fas fa-user" id="profile-btn"></div>
             </Link>
             </div>
       </header>
        // <header className="header">
        //     <div className="logo">
        //         <Link to="/" className="logo">DECOR<span className="small-text ">KART</span> </Link>
        //     </div>
        //     <div className="nav-icons">
        //         {location.pathname === '/products' && <div className="fas fa-search" id="search-btn" onClick={() => setSearchActive(prevCheck => !prevCheck)}></div>}
        //         <Link to={token ? "/cart" : "/signin"}>
        //             <span className="badge-container icon-col">
        //                 <AiOutlineShoppingCart size={26}/>
        //                 {/* <div className="far fa-shopping-cart" id="cart-btn"></div> */}
        //                 <span className="badge icon-badge">{state.productInCart.length}</span>
        //             </span>
        //         </Link>
        //         <Link to={token ? "/wishlist" : "/signin"}>
        //             <span className="badge-container icon-col">
        //                 <div className="far fa-heart" id="wishlist-btn"></div>
        //                 <span className="badge icon-badge">{state.wishlist.length}</span>
        //             </span>
        //         </Link>
        //         <div className="far fa-user" id="profile-btn" onClick={() => setProfileActive(prevCheck => !prevCheck)}></div>
        //     </div>
        //     <form action="" className={`search-form ${searchActive && 'active'}`}>
        //         <input type="search" id="search-box" placeholder="search here..."
        //             value={state.searchProduct} onChange={(e) => dispatch({ type: SEARCH_PRODUCT, payload: e.target.value })} />
        //         <label htmlFor="search-box" className="fas fa-search"></label>
        //     </form>

        //     <div className={`profile-page ${profileActive && 'active'}`}>
        //         <div className="profile-container">

        //             <div className="profile-items">
        //                 <i className="fas fa-user-circle fa-lg"></i>
        //                 <h3>My profile</h3>
        //             </div>
        //             {token ? (
        //                 <div className="profile-items" onClick={() => logoutHandler()}>
        //                     <i className="fas fa-sign-out-alt fa-lg"></i>
        //                     <h3>Logout</h3>
        //                 </div>
        //             ) : (<div className="profile-items" onClick={() => navigate("/signin")}>

        //                 <i className="fas fa-sign-in-alt fa-lg"></i>
        //                 <h3>Login</h3>
        //             </div>)}

        //         </div>
        //     </div>
        // </header>
    );
};

export { Navbar };