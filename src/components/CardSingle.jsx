import 'bootstrap/dist/css/bootstrap.css';
export default function CardSingle(){
    return(
        <div className='col-sm-4'>
        <div className="card" style={{margin:"auto",width: "20rem",boxShadow:"5px 5px 5px lightgreen"}}>
    <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        
    </div>
    </div>
  </div>
    );
}