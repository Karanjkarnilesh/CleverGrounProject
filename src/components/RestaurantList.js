import React, { Component } from 'react'
import {Table} from 'react-bootstrap';
import {Link} from 'react-router-dom';
class RestaurantList extends Component {
    constructor() {
        super();
        this.state = {
            list: null,
        }
    }
    componentDidMount() {
        fetch("http://localhost:3000/Restaurant_app").then((response) => {
            response.json().then((result) => {
                this.setState({list: result })
            })
        })
    }
    // getdata()
    // {
    //     fetch("http://localhost:3000/Restaurant_app").then((response) => {
    //         response.json().then((result) => {
    //             this.setState({list: result })
    //         })
    //     })
    // }
    delete(id)
    {
        fetch("http://localhost:3000/Restaurant_app/"+id,{
            method:"DELETE",
            headers:{
                'Content-Type':'aplication/json'
            },
            body:JSON.stringify(this.state)
        }).then(response=>{response.json().then((result)=>{
           console.warn("Delete")
        //    this.getdata()
        })
    })
    }
    render() {
        return (
            <div>
                <h1>restaurantList</h1>
                {

                    this.state.list ?
                        <div>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Address</th>
                                        <th>Rating</th>
                                        <th>Operation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.list.map((item, i) =>
                                            <tr className="list-wrapper">

                                                <td> <span>{item.id}</span></td>
                                                <td><span>{item.name}</span></td>
                                                <td><span>{item.email}</span></td>
                                                <td><span>{item.address}</span></td>
                                                <td><span>{item.rating}</span></td>
                                                {/* pass id to Edit data */}
                                                <td><Link to={"/update/"+item.id}>edit</Link> <Link onClick={()=>this.delete(item.id)} to="/delete">delete</Link></td>
                                            
                                            </tr>

                                        )
                                    }
                                </tbody>
                            </Table>
                        </div>
                        : <p>Please wait...</p>
                }
            </div>
        )
    }
}

export default RestaurantList;