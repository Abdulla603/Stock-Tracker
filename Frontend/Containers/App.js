import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState, Component} from 'react';
import Login from '../Components/Login';
import Signup from '../Components/Signup';
import Stocklist from '../Components/Stocklist';
import Topbar from '../Components/Topbar';
import Edit from '../Components/Edit';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';






const App = () => {
	let database ={}
    fetch('https://ae385tradeapi.herokuapp.com/')
        .then(data => {
            database=data;
            console.log(database,'Helllo')
        });

	let [mode, setMode] = useState(0)

	let switchMode = (n)=> {
		setMode(n)	
	}

	const mode0 = (<Row className="" style={{ borderRadius: "10%", padding:"0px", justifyContent:"center"}}>

  					<div className="col-sm-8 col-md-4"> <Login func={(n) => switchMode(n)} database={database}/> </div>
				</Row>)

	const mode1 = (<Row className="" style={{ borderRadius: "10%", padding:"0px", justifyContent:"center"}}>

  					<div className="col-sm-8 col-md-4"> <Signup func={(n) => switchMode(n)} database={database}/> </div>

				</Row>)

	const mode2 = (
		<div> 
			<Row> 
				<Col> <Topbar func={(n) => switchMode(n)}/> </Col> 
			</Row>
			<Stocklist/> 
		</div> )
	const mode3 = (
		<div> 
			<Row> 
				<Col> <Topbar func={(n) => switchMode(n)}/> </Col> 
			</Row>
			<Row className="" style={{ borderRadius: "10%", padding:"20px", justifyContent:"center"}}>

  					<div className="col-sm-8 col-md-4"> <Edit func={(n) => switchMode(n)}/> </div>

				</Row>)
		</div> )
		

	const display = () => {
		if (mode===1) {
			return mode1
		}
		else if (mode===2) {
			return mode2
		}
		else if (mode===3) {
			return mode3
		}
		else {
			return mode0
		}
	}


	return(
		<div >

			<Container fluid >

				{display()}

			</Container>
			
			
		</div>
	);
}







export default App;