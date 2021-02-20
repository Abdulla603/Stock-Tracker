import React, {useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card';



// https://cloud.iexapis.com/stable/stock/aapl/quote?token=YOUR_TOKEN_HERE
let url = "https://cloud.iexapis.com/stable/stock/"
let url2 = "/quote?token="
let key = "sk_c9c2c37e23f5460babf232c41da3f26f"
let color

const Stockcard = ({ticker}) => {
	const [info, setInfo] = useState(0);

	useEffect(()=> {
		fetch(url+ticker+url2+key)
    	.then(response => response.json())
    	.then((response) => {setInfo(response)})
	},[])

	return (
		<Card 
		className='text-center font-weight-bold'
		bg="dark"
		key="7" 
		border="red" 
		style={{ width: '16em', borderRadius: "10%", margin:"10px", borderColor:"white",borderWidth:"7px"}}
		text={info.change < 0 ? 'danger':'success'}
		>
    		<Card.Header 
            style={{backgroundColor:"black", borderRadius: "6%"}}
            >{info.companyName + "  (" + info.symbol+")"}</Card.Header>
    		<Card.Body>
    			<Card.Title 
                className='text-center font-weight-bold'
                >{info.latestPrice}</Card.Title>
                <br/>
      			<Card.Text>
        			Value: 
        			<br/> <br/>
        			Daily Change:
        			<br/> <br/>
        			Unrealized P/L: 
        			<br/> <br/>
        			Price Change: <br/> {"$"+info.change}
        			<br/> <br/>
        			Percentage Change: <br/> {info.changePercent*100 + "%"}
        			<br/> <br/>
      			</Card.Text>
    		</Card.Body>
  		</Card>
	);
}

export default Stockcard;