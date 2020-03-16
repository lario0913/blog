import React, { Component } from 'react'
import Buttons from '../../../components/UI/Buttons/Buttons'

import styles  from './ContactData.module.css'


class ContactData extends Component {
    state = {
        name : '',
        email : '',
        address : {
            street: '',
            postalCode: ''
        }
    }

    render() {
        return (
            <div className={styles.ContactData} >
                <h4>Enter your Contact Data</h4>
                <form>
                    <input type="text" name="name" placeholder="Enter your name" />
                    <input type="email" name="email" placeholder="Enter your email" />
                    <input type="text" name="street" placeholder="Enter your street" />
                    <input type="text" name="postal code" placeholder="Enter your postal code" />

                    <Buttons btnType="Success">ORDER NOW</Buttons>
                </form>
            </div>
        )
    }
}

export default ContactData
