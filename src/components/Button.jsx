import 'bootstrap/dist/css/bootstrap.css';
export default function Button({name,cl}){
    return(
        <>
        <button className={cl} type="submit" style={{margin: "5px"}}>{name}</button>
        </>
    );
}