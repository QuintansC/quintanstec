import type { NextComponentType } from 'next'
import React from 'react'
import { Image } from '../utils/nextImports'
import styles from '../styles/components/navigation.module.css'

const Navigation: NextComponentType = ()=>{
    return(
        <nav>
            <ul className={styles.container}>
                <img src="/Logo.png" alt="" />
                <div className={styles.miniContainer}>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Searvice</li>
                    <li>Contatc Us</li>
                    <li><button>Login</button></li>
                </div>
            </ul>
        </nav>
    )
}

export default Navigation