import type { NextComponentType } from 'next'
import React from 'react'
import styles from '../styles/components/sections.module.css'

const Sections: NextComponentType = ()=>{
    return(
        <section className={styles.container}>
            <div className={styles.firstContainer}>
                <h2>Search Your Domain Now</h2>
                <input type="text" name="domain" id="domain" placeholder='Search your domain...' />
                <button>Find Now</button>
            </div>
            <hr className={styles.line}/>
            <div className={styles.secondContainer}>
               <article>
                    <h3>.com</h3>
                    <p>$ 10/Mounth </p>
               </article>
               <article>
                    <h3>.in</h3>
                    <p>$ 10/Mounth </p>
               </article>
               <article>
                    <h3>.ik</h3>
                    <p>$ 10/Mounth </p>
               </article>
                {/* #3 de cada*/}
               <article>
                    <h3>.org</h3>
                    <p>$ 10/Mounth </p>
               </article>
               <article>
                    <h3>.tk</h3>
                    <p>$ 10/Mounth </p>
               </article>
               <article>
                    <h3>.shop</h3>
                    <p>$ 10/Mounth </p>
               </article>
            </div>
        </section>
    )
}

export default Sections