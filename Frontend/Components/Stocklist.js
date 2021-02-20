import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stockcard from '../Components/Stockcard';

const list = ['spy','qqq','aapl','msft','goog','amzn','fb','pltr','psth','amc','gme','dis','amd','nvda','tsla','icln','arkk','tan','intc']


const Stocklist = ()=> {
	return(
		<Container fluid>

			<Row style={{justifyContent:"center"}} className="">
    				{
    					list.map(ticker =>
    						<Col> <Stockcard 
    						ticker={ticker} 
    						key={ticker}/> 
    						</Col>
    					)
    				}
				</Row>

		</Container>
	)
}

export default Stocklist