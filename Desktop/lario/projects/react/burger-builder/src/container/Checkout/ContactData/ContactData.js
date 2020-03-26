import React, { Component } from 'react'
import axios from 'axios'

import Input from '../../../components/Input/Input'
import Buttons from '../../../components/UI/Buttons/Buttons'
import Spinner from '../../../components/UI/Spinner/Spinner'
import styles  from './ContactData.module.css'


class ContactData extends Component {
    state = {
        name : '',
        email : '',
        address : {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault()
        this.setState({loading: true})
        const order = {
            ingredients : this.props.ingredients,
            price : this.props.price,
            customer : {
                name : "Larrieman",
                country : "Nigeria"
            },
            email : "test@test.com",
            deliveryMethod : "fastest delivery"
        }
        axios.post('https://burger-builder-cfa8a.firebaseio.com/order.json', order)
            .then(res =>{ 
                this.setState({loading: false})
                this.props.history.push('/')
            
            })

            .catch(error => this.setState({loading : false}))
    }

    render() {
        let form = (
            <form>
                    <Input inputtype="input"  type="text" name="name" placeholder="Enter your name" />
                    <Input inputtype="input"  type="email" name="email" placeholder="Enter your email" />
                    <Input inputtype="input"  type="text" name="street" placeholder="Enter your street" />
                    <Input inputtype="input"  type="text" name="postal code" placeholder="Enter your postal code" />

                    <Buttons btnType="Success"
                    clicked={this.orderHandler} >ORDER NOW</Buttons>
            </form>
        )
        if (this.state.loading){
            form = <Spinner />
        }
        return (
            <div className={styles.ContactData} >
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        )
    }
}

export default ContactData
