import 'bootstrap/dist/css/bootstrap.css';
export default function Img({src}){
    return(
        <img style={{margin:"3%",boxShadow: "5px 5px 5px  grey",borderRadius:"20%"}} src={src} alt="" />
    );
}