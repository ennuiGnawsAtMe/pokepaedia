import NavBar from './NavBar'
import Footer from './Footer'
import styles from '../styles/Page.module.css'

 const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout