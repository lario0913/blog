import React, {Component}from 'react'
import Auxilliary from '../../hoc/Auxilliary'

import styles from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
    state = {
        showSideDrawer : false
    }


    toggleSideDrawer = () => {
        this.setState({showSideDrawer: false})
    }

    displaySideDrawerHandler = () => {
        this.setState(prevState => {
            return {showSideDrawer : !prevState.SideDrawer}
        })
    }


    render () {
        return (
            <Auxilliary>
                <SideDrawer open={this.state.showSideDrawer} close={this.toggleSideDrawer} />
                <Toolbar toggleSideDrawer={this.displaySideDrawerHandler}/>
                <main className={styles.content}>
                    {this.props.children}
                </main>
    
            </Auxilliary>
        )
    }
    
}

export default Layout
