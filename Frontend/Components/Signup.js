import React,{useState} from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'


const Signup = ({func,database}) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleClick = (n)=> {
        if (n==0){
            func(0)
            return 0 
        }

        let data = {username:username,password:password};
        console.log(data);
        fetch("https://ae385tradeapi.herokuapp.com/users/", {
         method: "POST", 
         headers: {
            'Content-Type': 'application/json'},
         body: JSON.stringify(data)
        })
        .then(res => res.JSON())
        .then((res)=>{
          console.log("Request complete! response:", res);
          alert("Account Created!");
          func(2);
        })
    }

	return (
        <Jumbotron style={{borderRadius:"10%"}}>
		  <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Username</label>
                    <input onChange={(e)=> setUsername(e.target.value)} type="text" className="form-control" value={username} placeholder="Enter username" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" value={password} placeholder="Enter password" />
                </div>

                <button onClick={()=>handleClick(2)} type="submit" className="btn btn-danger btn-block">Sign Up</button>
            </form>
            <br/> <br/>
            <form className="">
                <button onClick={()=>handleClick(0)} type="submit" className="btn btn-danger btn-block">Already have an account? Log in!</button>
            </form>
        </Jumbotron>
	);
}
export default Signup;