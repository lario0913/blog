import React, { Component } from 'react'
import axios from 'axios'

import Input from '../../../components/Input/Input'
import Buttons from '../../../components/UI/Buttons/Buttons'
import Spinner from '../../../components/UI/Spinner/Spinner'
import styles  from './ContactData.module.css'


class ContactData extends Component {
    state = {
        orderForm : {
            name : {
                elementType : 'input',
                elementConfig : {
                    type : 'text',
                    placeholder : 'Your name'
                },
                value : ''
            },
            country : {
                elementType: 'input',
                elementConfig : {
                    type : 'text',
                    placeholder : 'Country'
                },
                value : ''
            },
            email : {
                elementType: 'input',
                elementConfig : {
                    type : 'email',
                    placeholder : 'Enter email'
                },
                value : ''
            },
            deliveryMethod : {
                elementType: 'select',
                elementConfig : {
                    options: [
                        {value : 'fastest', displayValue : 'Fastest'},
                        {value : 'cheapest', displayValue : 'Cheapest'}
                    ]
                },

                value : ''
            }
            
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault()
        this.setState({loading: true})
        const formData = {}
        for (let formIdentifier in this.state.orderForm){
            formData[formIdentifier] = this.state.orderForm[formIdentifier].value
        }
        const order = {
            ingredients: this.props.ingredients,
            price : this.props.price,
            orderData : formData
        }
        axios.post('https://burger-builder-cfa8a.firebaseio.com/order.json', order)
            .then(res =>{ 
                this.setState({loading: false})
                this.props.history.push('/')
            
            })

            .catch(error => this.setState({loading : false}))
    }

    inputChangeHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        }
        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        }
        updatedFormElement.value = event.target.value
        updatedOrderForm[inputIdentifier] = updatedFormElement
        this.setState({orderForm: updatedOrderForm})
    }

    render() {
        const orderFormArray = []
        for (let key in this.state.orderForm){
            orderFormArray.push({
                id: key,
                config : this.state.orderForm[key]
            })
        }

        let form = (
            <form onSubmit={this.orderHandler}>
                    {
                        orderFormArray.map(formElement => (
                            <Input
                                key={formElement.id}
                                elementType={formElement.config.elementType}
                                elementConfig = {formElement.config.elementConfig}
                                value={formElement.config.value}
                                changed={(event) => this.inputChangeHandler(event,  formElement.id)}
                            />
                        ))
                    }

                    <Buttons btnType="Success" >ORDER NOW</Buttons>
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
