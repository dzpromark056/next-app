import React from 'react'
import styles from './style.module.scss'
import Double from '../double'

const projects = [
 
  {
      name: "Decimal",
      client: "Decimal",
      description: "Portfolio site for Decimal.",
      src: "decimal.jpg",
      year: 2023,
  },
  {
      name: "MAVEN 11",
      client: "analogueagency",
      description: "New web design for the blockchain investment fund Maven 11.",
      src: "maven.jpg",
      year: 2022,
  },

  {
      name: "ROCKETPANDA",
      client: "ET Studio",
      description: "An Italian animation studio.",
      src: "panda.jpg",
      year: 2022,
  },
  {
      name: "C2 Montreal",
      client: "Ingamana",
      description: "C2 Montréal is Canada's premier creative-business event.",
      src: "c2.jpg",
      year: 2021,
  }
]

function Index() {
  return (
    <main className={styles.main}>
            <h1>I can do high level  design and </h1>
            <h2>technology to create brands and</h2>
            <h1>products to meet user needs.</h1>

      <div className={styles.gallery}>
        <div className='mb-10'>
          <Double projects={[projects[0],projects[1]]}/>

        </div>
        <div className='mt-5'>
           <Double projects={[projects[2],projects[3]]} reversed={true}/>

        </div>
      </div>
      
    </main>
  )
}

export default Index