import React,{} from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'



const Edit = ({func}) => {
	return (
		<Jumbotron style={{borderRadius:"10%",textAlign:"center"}}>
		  <form>
                <h3> Buy / Sell </h3>

                <div className="form-group">
                    <label>Ticker</label>
                    <input type="text" className="form-control" placeholder="Enter the ticker" />
                </div>

                <div className="form-group">
                    <label>Price</label>
                    <input type="number" className="form-control" placeholder="Enter price" />
                </div>

                <div className="form-group">
                    <label>Number of shares</label>
                    <input type="number" className="form-control" placeholder="Enter the number of shares" />
                </div>

                <div className="form-group">
                    <label>Date</label>
                    <input type="date" className="form-control" placeholder="Enter the date of the transaction" />
                </div>
                <div inline style={{padding:"20px"}}>
                <button onClick={() => func(2)} type="submit" className="btn btn-success btn-block ml-auto">Buy</button>
                <button onClick={() => func(2)} type="submit" className="btn btn-danger btn-block mr-auto">Sell</button>
               </div>
            </form>
         </Jumbotron>
	);
}
export default Edit;