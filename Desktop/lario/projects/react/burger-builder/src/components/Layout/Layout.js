import React from 'react'
import Auxilliary from '../../hoc/Auxilliary'

import styles from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

function Layout(props) {
    return (
        <Auxilliary>
            <SideDrawer/>
            <Toolbar/>
            <main className={styles.content}>
                {props.children}
            </main>

        </Auxilliary>
    )
}

export default Layout
