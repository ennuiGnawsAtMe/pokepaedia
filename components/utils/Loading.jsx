import Image from "next/image"
import loadingGif from '../../public/images/loading.gif'
import styles from './Loading.module.css'

const Loading = () => {
  return (
    <div className={styles.container}> 
    
    <Image
      src={loadingGif}
      alt="We are catching the Pokemon for you!"
      width={200}
      height={200}
    />
    <h1>Fetching Pokémon!</h1>
    </div> 
  )
}

export default Loading