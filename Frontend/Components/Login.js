import React,{useState} from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'

    

const Login = ({func,database}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleClick = (n)=> {
        if (n==1){
            func(1)
            return 0 
        }
        if (true) { //check if username and password match
            alert('Logged in!')
            func(2)
        }

    }

	return (
		<Jumbotron style={{borderRadius:"10%",textAlign:"center"}}>
            <form className="">
        
                <button onClick={()=>handleClick(1)} type="submit" className="btn btn-danger btn-block">New User? Sign up!</button>
            </form>
           
            <br/> <br/>
		  <form>
                <h3>Log In</h3>

                <div className="form-group">
                    <label>Username</label>
                    <input onChange={(e)=> setUsername(e.target.value)} type="text" className="form-control" value={username} placeholder="Enter username" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" value={password} placeholder="Enter password" />
                </div>

                <button onClick={()=>handleClick(2)} 
                    type="submit" value='submit' className="btn btn-danger btn-block">Submit</button>
               
            </form>
         </Jumbotron>
	);
}
export default Login;