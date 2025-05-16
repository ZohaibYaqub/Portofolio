'use client'
import React from 'react'
import styles from '@/app/styles/hero.module.css'
import Image from 'next/image'
import Link from 'next/link'


const hero = () => {




    return (
        <>
        

            <div className={styles.herosection}>
                <div className="hero grid grid-two-column">
                    <div className={styles.leftside}>
                        <h2 className={styles.intro}>Welcome To <span className={styles.shine}>CodeWithZaibi</span><br></br></h2> <h3 className={styles.intro1}>Learing Skills
                            <span className={styles.animate}> Next Js</span>
                        </h3>
                        <p className={styles.para}>Lets Gets Started For Some Courses Avaliable For Your Begining Level

                        </p>
                        <Link href="/courses"><button className={styles.free}>Free Courses</button></Link>
                    </div>
                    <div className={styles.rightside}>
                        <Image src="/img.avif" alt="coder" width={450} height={400} className={styles.img} />
                    </div>
                </div>

            </div>
        </>
    )
}


export default hero