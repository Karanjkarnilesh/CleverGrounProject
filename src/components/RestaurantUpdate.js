import React, { Component } from 'react'
import {Button} from 'react-bootstrap';
class RestaurantUpdate extends Component {
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
    componentDidMount()
    {
        fetch("http://localhost:3000/Restaurant_app/"+this.props.match.params.id).then((response) => {
            response.json().then((result) => {
                this.setState({ 
                    name: result.name,
                    email: result.email,
                    address: result.address,
                    rating: result.rating })
            })
        })
    }

    update()
    {
        console.log(this.props)
        fetch("http://localhost:3000/Restaurant_app/"+this.props.match.params.id,{
            method:"PUT",
            headers:{
                'Content-Type':"application/json; charset=UTF-8"
            },
            body:JSON.stringify(this.state)
        }).then(response=>{response.json().then((result)=>{
          alert("update")  
        })
    })
    }
    render() {
        return (
            <div>
                <h1>RestaurantUpdate </h1>
                <input placeholder="Restaurant Name" 
                onChange={(event)=>{this.setState({name:event.target.value})}}
                value={this.state.name}
                /><br/><br/>
                <input placeholder="Restaurant Email"
                 onChange={(event)=>{this.setState({email:event.target.value})}}
                 value={this.state.email} /><br/><br/>
                <input placeholder="Restaurant Address" 
                onChange={(event)=>{this.setState({address:event.target.value})}} 
                value={this.state.address}
                /><br/><br/>
                <input placeholder="Restaurant Reting"
                 onChange={(event)=>{this.setState({rating:event.target.value})}}
                 value={this.state.rating} 
                 /><br/><br/>
                <Button type="submit" onClick={()=>{this.update()}}>Update</Button>
            
            </div>
        )
    }
}

export default RestaurantUpdate;