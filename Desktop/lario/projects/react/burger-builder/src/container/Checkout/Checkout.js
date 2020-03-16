import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import ContactData from './ContactData/ContactData'
import CheckoutSummary from '../../components/order/checkoutSummary/checkoutSummary'


class Checkout extends Component {
    state = {
        ingredients : {
            bacon : 1,
            salad : 1,
            meat : 1,
            cheese : 1
        }
    }

    componentDidMount () {
        const query = new URLSearchParams(this.props.location.search)
        const ingredients = {}
        for (let param of query.entries()){
            //['salad', '1', 'meat', '2', 'bacon', '3',... ]
            ingredients[param[0]] = +param[1]
        }
        this.setState({ingredients: ingredients})
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
                component={ContactData}
                />
            </div>
        )
    }
}

export default Checkout
