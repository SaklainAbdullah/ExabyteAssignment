import 'bootstrap/dist/css/bootstrap.css';
import TableRow from './TableRow';
export default function Table01(){
    return(
        <>
        <h2 style={{marginLeft:"40%",marginTop:"-10%"}}>Lorem Ipsum is simply dummy text </h2>
        <table style={{width:"80%",margin:"auto",backgroundColor:"#9fdfbf",boxShadow: "5px 5px 5px  grey"}}>
        <tr style={{backgroundColor:"#cccccc"}}>
          <th>Source</th>
          <th>Ad</th>
          <th>Cost</th>
          <th>Sales</th>
          <th>First time customers</th>
          <th>ROAS</th>
          <th>CAC</th>
          <th>F.T.ROAS</th>
        </tr>
       <TableRow/> 
       <TableRow/> 
       <TableRow/> 
       <TableRow/> 
       <TableRow/> 
      </table>
      </>

    );
}