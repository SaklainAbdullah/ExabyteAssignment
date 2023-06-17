import 'bootstrap/dist/css/bootstrap.css';
export default function Footer(){
    return(
        
        <div className='row' style={{height:"300px", backgroundColor:"grey"}}>
            <div className='col-sm-6'>
                    <table style={{marginLeft:"30%", marginTop:"5%"}}>
                    <tr >
                    <th style={{padding:"50px"}}>Product</th>
                    <th style={{padding:"50px"}} >Company</th>
                    <th style={{padding:"50px"}}>Support</th>
                    </tr>

                </table>
            </div>
            <div className='col-sm-4' style={{marginTop:"5%"}}>
                  <h5>Logoipsum</h5>
                  <h6>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</h6>
            </div>
      </div>
      
    );
}