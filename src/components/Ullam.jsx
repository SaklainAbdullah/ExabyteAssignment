import 'bootstrap/dist/css/bootstrap.css';
import Img from './Img';
import img1 from '../image 39.png';
import img2 from '../image 65.png';
import img3 from '../image 66.png';
export default function Ullam(){
    return(
        <div style={{margin:"auto", textAlign:"center"}}>
            <h2>Lorem Ipsum I am Saklain</h2>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page</p>
            <Img src={img1} alt="" />
            <Img src={img2} alt="" />
            <Img src={img3} alt="" />
        </div>
    );
}