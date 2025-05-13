import React from 'react'
import { MdHouse } from "react-icons/md";
import { MdSearch } from "react-icons/md";
import styles from '@/app/styles/main.module.css'


import Link from 'next/link';

const main = () => {
    return (
        <>
            <div className={styles.main}>

               

                <ul className={styles.nav}>

                    <li className={styles.li}><Link className={styles.a} href="">HTML</Link >
                    </li>
                    <li className={styles.li}><Link className={styles.a} href="">CSS</Link >
                    </li>
                    <li className={styles.li}><Link className={styles.a} href="">JAVASCRIPT</Link >
                    </li>
                    <li className={styles.li}><Link className={styles.a} href="">PYTHON</Link >
                    </li>
                    <li className={styles.li}><Link className={styles.a} href="">NEXT JS</Link >
                    </li>
                    <li className={styles.li}><Link className={styles.a} href="">WEB DEV</Link >
                    </li>
                    <li className={styles.li}><Link className={styles.a} href="">APP DEV</Link >
                    </li>
                    


                </ul>
               
                
            </div>

        </>
    )
}

export default main