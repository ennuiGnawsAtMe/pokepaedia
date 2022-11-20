import Image from "next/image"
import pichu from '../public/images/pokemon/pichu.png'

const Home = ({ pokemon }) => {
  return (
    <div className='flex flex-row justify-center items-center h-screen'>
      <div className='w-1/3'>
        <Image
          src={pichu}
          alt={'Pichu!'}
          priority
        // fill
        // sizes="35vw"
        // style={{
        //   objectFit: "contain"
        // }} 
        />

      </div>
      <div className='w-1/3 blinking-cursor'>
        <h1>
          Hey Trainer! <br/> What is your name?
        </h1>
      </div>      
    </div>
  )
}

export default Home