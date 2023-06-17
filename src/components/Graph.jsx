import 'bootstrap/dist/css/bootstrap.css';
import img from '../graph.png';
export default function Graph(){
    return(
        <>
        <h2 style={{marginLeft:"40%",marginTop:"5%"}}>Lorem Ipsum is simply dummy text </h2>
        <img src={img} style={{width:"80%", marginLeft:"10%"}} alt="" />
        </>
    );
}