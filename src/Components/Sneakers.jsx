import React, { Component } from 'react'
import axios from 'axios'
import ShoeList from './ShoeList'
import ShoeForm from './ShoeForm'

class Sneakers extends Component{
    constructor(){
        super()
        
        this.state = {
           sneakers: []
        }
    }

    
    componentDidMount(){
        axios.get('/api/sneakers').then(res =>{
            console.log(res.data)
            this.setState({
                sneakers: res.data
            })
        })
        .catch(err => console.log('We have a problem', err))
    }
    
    
    createSneaker = (sneaker) =>{
        axios.put(`/api/sneakers`, sneaker).then(res => {
            this.setState({
                sneakers: res.data
            })
        })
    }
    
    
    
    updateSneaker = (sneaker) => {
        axios.post(`/api/sneakers/${sneaker.id}`, sneaker).then(res => {
            this.setState({
                sneakers: res.data
            })
        })
        .catch(err => console.log('UPDATE NOT WORKING', err))
    }


    
    deleteSneaker = (id) => {
        axios.delete(`/api/sneakers/${id}`).then(res => {
            this.setState({
                sneakers: res.data
            })
        })
        .catch(err => console.log('DELETE NOT WORKING', err))
    }





    




    render(){
        let {sneakers} = this.state
        return(
            <div>
                <header>HEADER</header>
                <ShoeForm/>
               <ShoeList shoe={sneakers} />
            </div>



        )
    }
}


export default Sneakers