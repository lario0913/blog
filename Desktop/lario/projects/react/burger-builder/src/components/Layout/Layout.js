import React from 'react'
import Auxilliary from '../../hoc/Auxilliary'

import styles from './Layout.module.css'

function Layout(props) {
    return (
        <Auxilliary>
            <div>Toolbar, Sidebar and Sidedrop</div>
            <main className={styles.content}>
                {props.children}
            </main>
        </Auxilliary>
    )
}

export default Layout
