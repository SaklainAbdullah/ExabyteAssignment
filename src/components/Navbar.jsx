
import 'bootstrap/dist/css/bootstrap.css';
import Button from './Button';
export default function Navbar(){
    return(
        <div className='container'>
    <nav className="navbar  ">
  <a className="navbar-brand" style={{color: "Green",margin: "5px"}}>Logoipsum</a>
  

<nav className="navbar">
    <a href="#product" style={{color: "Green",textDecoration:"none", margin:"5px"}}>Product</a>
    <a href="#aboutUs" style={{color: "Green",textDecoration:"none", margin:"5px"}}>About Us</a>
    <a href="#contact" style={{color: "Green",textDecoration:"none", margin:"5px"}}>Contact</a>
</nav>
      
    
  
  <form className="form-inline">
  <Button name="Get Started" cl="btn btn-success "/>
  <Button name="Login" cl="btn btn-outline-success "/>
  </form>
</nav>
</div>
    );
}