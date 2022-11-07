'use client';

import { useState } from 'react'
import Image from "next/image";
import DetailsNav from './DetailsNav'
import DetailAbout from './DetailAbout'
import DetailStats from './DetailStats'
import DetailRanking from './DetailRanking'
import DetailComments from './DetailComments'
import DetailEvolution from './DetailEvolution'
import styles from './Detail.module.css'

const Detail = ({ pokemon }) => {
  const [component, setComponent] = useState('about')

  const COMPONENTS = {
    "about": <DetailAbout pokemon={pokemon}/>,
    "stats": <DetailStats pokemon={pokemon}/>,
    "ranking": <DetailRanking pokemon={pokemon}/>,
    "evolution": <DetailEvolution pokemon={pokemon}/>,
    "comments": <DetailComments pokemon={pokemon}/>
  }

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
          <Image
            src={pokemon.image}
            alt={pokemon.name}
            fill
            sizes="100vw"
            style={{
              objectFit: "contain"
            }} />
      </div>
      <h1>{pokemon.name}</h1>
      <DetailsNav component={component} setComponent={setComponent}/>
      {COMPONENTS[component]}
    </div>
  );}

export default Detail