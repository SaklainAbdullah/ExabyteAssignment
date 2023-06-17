import 'bootstrap/dist/css/bootstrap.css';
import CardSingle from './CardSingle';
export default function Card(){
    return(
        <div className='container '>
          <div className='row'>
              <CardSingle/>
              <CardSingle/>
              <CardSingle/>
          </div>
        </div>
    );
}