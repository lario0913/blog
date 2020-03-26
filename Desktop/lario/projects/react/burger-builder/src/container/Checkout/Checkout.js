import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import ContactData from './ContactData/ContactData'
import CheckoutSummary from '../../components/order/checkoutSummary/checkoutSummary'


class Checkout extends Component {
    state = {
        // ingredients : null,
        ingredients : {
            salad: 1,
            meat: 1,
            cheese: 1,
            bacon: 1
        },
        totalPrice: 0
    }

    componentDidMount () {
        const query = new URLSearchParams(this.props.location.search)
        const ingredients = {}
        let price = 0
        
        for (let param of query.entries()){
            //['salad', '1', 'meat', '2', 'bacon', '3',... ]
            if (param[0] === 'price'){
                price = +param[1]
            }else {
                ingredients[param[0]] = +param[1]
            }
            
        }
        this.setState({ingredients: ingredients, totalPrice: price})
    }

    cancelSummary = () =>{
        this.props.history.goBack('/')
    }
    
    successSummary = () => {
        this.props.history.replace('/checkout/contact-data')
    }

    render() {
        return (
            <div>
                <CheckoutSummary 
                    ingredients = {this.state.ingredients} 
                    orderSummaryCancel = {this.cancelSummary}
                    orderSummarySuccess = {this.successSummary}
                    />
                <Route 
                path={this.props.match.path + '/contact-data'}
                render = {(props) => (<ContactData ingredients={this.state.ingredients} price={this.state.totalPrice} {...props} />)}
                // component={ContactData}
                />
            </div>
        )
    }
}

export default Checkout
