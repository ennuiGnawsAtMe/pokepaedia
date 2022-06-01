import { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import DetailsNav from './DetailsNav'
import DetailAbout from './DetailAbout'
import DetailStats from './DetailStats'
import DetailRanking from './DetailRanking'
import DetailComments from './DetailComments'
import DetailEvolution from './DetailEvolution'
import styles from '../styles/Detail.module.css'

const selectComp = data => ({
    about: <DetailAbout pokemon={data}/>,
    stats: <DetailStats pokemon={data}/>,
    ranking: <DetailRanking pokemon={data}/>,
    evolution: <DetailEvolution pokemon={data}/>,
    comments: <DetailComments pokemon={data}/>
  })

const Detail = ({ pokemon }) => {
  const [component, setComponent] = useState('about')
  const router = useRouter()

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
          <Image 
            src={pokemon.image} 
            alt={pokemon.name}
            layout="fill" 
            objectFit='contain'
            />
      </div>
      <h1>{pokemon.name}</h1>
      <DetailsNav component={component} setComponent={setComponent}/>
      {selectComp(pokemon)[component]}
    </div>
        )}

export default Detail