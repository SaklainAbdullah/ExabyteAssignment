import 'bootstrap/dist/css/bootstrap.css';
import Button from './Button';
export default function Apply(){
    return(
        <div className='row' style={{margin:"7%",textAlign:"center"}}>
             <div className='col-sm-6'>
                   <h3> Hello I am Saklain</h3>
                   <p>this is my assignment completion acknowledgement</p>
             </div>
             <div className='col-sm-6'>
                <Button name="Apply Now" cl="btn btn-success"/>
             </div>
        </div>

    );
}