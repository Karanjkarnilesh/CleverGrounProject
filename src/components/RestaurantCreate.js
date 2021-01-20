import React, { Component } from 'react'
import {Button} from  'react-bootstrap';
 class RestaurantCreate extends Component {
    constructor()
    {
        super();
        this.state=
        {
            name:null,
            email:null,
            address:null,
            rating:null     
        }
    }
    submitRestoraurantData()
    {

        console.log(this.state)
        fetch("http://localhost:3000/Restaurant_app",{
            method:"POST",
            headers:{
                'Content-Type':"application/json; charset=UTF-8"
            },
            body:JSON.stringify(this.state)
        }).then(response=>{response.json().then((result)=>{
           alert("Created successful")
        })
    })
    }
    
    render() {
        return (
            <div>
                <h1>RestaurantCreate</h1>
                <input placeholder="Restaurant Name" 
                onChange={(event)=>{this.setState({name:event.target.value})}}/><br/><br/>
                <input placeholder="Restaurant Email"
                 onChange={(event)=>{this.setState({email:event.target.value})}}/><br/><br/>
                <input placeholder="Restaurant Address" 
                onChange={(event)=>{this.setState({address:event.target.value})}}/><br/><br/>
                <input placeholder="Restaurant Rating outoff 5"
                 onChange={(event)=>{this.setState({rating:event.target.value})}}/><br/><br/>
                <Button type="submit" onClick={()=>{this.submitRestoraurantData()}}>Submit</Button>
            </div>
        )
    }
}

export default RestaurantCreate;
