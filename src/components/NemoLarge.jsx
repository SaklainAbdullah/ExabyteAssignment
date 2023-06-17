import 'bootstrap/dist/css/bootstrap.css';
import Nemo from './Nemo';
import img from '../nemo.png';
import Button from './Button';
export default function NemoLarge(){
    return(
        <>
         <div className='row'>
            <div className='col-sm-6'>
                <div style={{marginLeft:"20%",marginTop:"5%"}}>
                <h4>The point of using Lorem Ipsum i</h4>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                </div>
          <Nemo/>
          <Nemo/>
          <Nemo/>
          <Nemo/>
          <div style={{marginLeft:"30%"}}> 
          <Button name="Try out Now" cl="btn btn-success"/>
          </div>
          </div>
          <div className='col-sm-6'>
               <img src={img} style={{width:"90%"}} alt="" />
            </div>
        </div>
        </>
    );
}