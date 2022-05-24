import NavBar from './NavBar'
import Footer from './Footer'
import styles from '../styles/Home.module.css'

 const Layout = ({ children }) => {
  return (
    <div className={styles.main}>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout