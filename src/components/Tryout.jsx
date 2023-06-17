import 'bootstrap/dist/css/bootstrap.css';
import Img from './Img';
import img1 from '../image 39.png';
import img2 from '../image 54.png';
import img3 from '../image 65.png';
import img4 from '../image 66.png';
import img5 from '../image 67.png';
import img6 from '../image 68.png';
import img7 from '../image 70.png';
export default function Tryout(){
    return(
         <div >
            <div className='row'>
                <div className='col-sm-6'>
                    <div style={{marginTop:"25%", marginLeft:"25%"}}>
                    <h3 >Lorem Ipsum Dolor Sit.</h3>
                    <p >It is a long established fact that a reader will be dto that a reader will be dto</p>
                    
                    <button className="btn btn-success " type="submit" style={{margin: "5px"}}>Get a Demo</button>
                    </div>
                </div>
                <div className='col-sm-6'>
                    <div style={{marginTop:"20%"}}>
                        <div>
                     <Img src={img1}/>
                     <Img src={img2}/>
                     <Img src={img3}/>
                     </div>
                     <Img src={img4}/>
                     
                     <Img src={img5}/>
                     <div>
                     <Img src={img6}/>
                     <Img src={img7}/>
                     </div>
                     </div>
                </div>
            </div>
        </div>
    );
}