import 'bootstrap/dist/css/bootstrap.css';
import img from '../Rectangle 341 (1).png';
import Button from './Button';
export default function Header(){
    return(
        <div >
            <div className='row'>
                <div className='col-sm-6'>
                    <div style={{marginTop:"25%", marginLeft:"25%"}}>
                    <h1 >Lorem Ipsum Dolor Sit.</h1>
                    <p >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page edito</p>
                    <Button name="Vivera Orci" cl="btn btn-outline-success "/>
                    <Button name="Get a Demo" cl="btn btn-success "/>
                    </div>
                </div>
                <div className='col-sm-6'>
                    <img style={{width:"100%",height:"70%"}} src={img} alt="" />
                </div>
            </div>
        </div>
    );
}