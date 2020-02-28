import React from 'react'
import companyLogo from '../../assets/images/burger.png.png'
import styles from './Logo.module.css'

const Logo = (props) => (
    <div className={styles.Logo} >
        <img src={companyLogo} alt="Company Logo" />
    </div>
)

export default Logo