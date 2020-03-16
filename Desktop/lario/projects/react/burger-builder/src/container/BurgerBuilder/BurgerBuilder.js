import React, { Component } from 'react'
import axios from '../../axios-order/axios-order'
import Auxilliary from '../../hoc/Auxilliary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/BuildControls/OrderSummary/OrderSummary'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandler'

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.9
}

class BurgerBuilder extends Component {
    state = {
        ingredients: null,
        total : 4,
        orderNow: false,
        showSummary: false,
        loading : false,
        error : false
    }

    componentDidMount () {
        axios.get('https://burger-builder-cfa8a.firebaseio.com/ingredients.json')
            .then(res => {
                this.setState({ingredients : res.data})
            })
            .catch(error => {
                this.setState({error : true})
            })
    }

    addIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type]
        const newCount = oldCount + 1
        const updatedIngredient = {...this.state.ingredients}
        updatedIngredient[type] = newCount

        const price = INGREDIENT_PRICES[type]
        const oldPrice = this.state.total
        const newPrice = oldPrice + price

        this.setState({
            ingredients: updatedIngredient, total: newPrice 
        })
        this.updateOrder(updatedIngredient)
    }

    removeIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type]
        if (oldCount === 0){
            return
        }
        const newCount = oldCount - 1
        const updatedIngredient = {...this.state.ingredients}
        updatedIngredient[type] = newCount

        const price = INGREDIENT_PRICES[type]
        const oldPrice = this.state.total
        const newPrice = oldPrice - price

        this.setState({
            ingredients: updatedIngredient, total: newPrice 
        })

        this.updateOrder(updatedIngredient)
    }

     updateOrder (ingredients) {
        const cum = Object.keys(ingredients)
                                .map(igKey =>{
                                    return ingredients[igKey]
                                })
                                .reduce((cum, cur) => {
                                    return cum + cur
                                }, 0)
        
        this.setState({orderNow : cum > 0})
    }

    summaryHandler = () => {
        this.setState({showSummary: true})
    }

    cancelOrder = () => {
        this.setState({showSummary: false})
    }

    ProceedWithOrder = () =>  {
        // this.setState({loading: true})
        // const order = {
        //     ingredients : this.state.ingredients,
        //     price : this.state.price,
        //     customer : {
        //         name : "Larrieman",
        //         country : "Nigeria"
        //     },
        //     email : "test@test.com",
        //     deliveryMethod : "fastest delivery"
        // }
        // axios.post('/order.json', order)
        //     .then(res => this.setState({loading: false, showSummary: false}))

        //     .catch(error => this.setState({loading : false, showSummary: false}))
        
        const queryParams = []
        for (let i in this.state.ingredients){
            queryParams.push(encodeURIComponent(i) + "=" + encodeURIComponent(this.state.ingredients[i]))
        }
        const queryString = queryParams.join('&')
        this.props.history.push({
            pathname:'/checkout',
            search : "?" + queryString
        })
    }

    render() {
        const disabledInfo = {...this.state.ingredients}
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key]  <= 0
        }
        

        let burger = this.state.error ? <p>Data cant be loaded</p> : <Spinner />
        let orderSUmmary = null
        if (this.state.ingredients){
            burger = <Auxilliary>
                        <Burger ingredients = {this.state.ingredients} />
                        <BuildControls 
                            addIngredient={this.addIngredientHandler}
                            removeIngredient={this.removeIngredientHandler}
                            disabledInfo={disabledInfo}
                            price={this.state.total}
                            updateOrder={this.state.orderNow}
                            showsummary={this.summaryHandler}
                        />
                    </Auxilliary>

            orderSUmmary = <OrderSummary 
            ingredients={this.state.ingredients}
            cancelOrder={this.cancelOrder}
            proceedWithOrder={this.ProceedWithOrder}
            price={this.state.total}
        />
        }
        
        if(this.state.loading){
            orderSUmmary = <Spinner />
        }

        return (
            <Auxilliary>
                <Modal show={this.state.showSummary}
                        clicked={this.cancelOrder}>
                            {orderSUmmary}
                </Modal>
                {burger}
            </Auxilliary>
        )
    }
}

export default withErrorHandler (BurgerBuilder, axios)
