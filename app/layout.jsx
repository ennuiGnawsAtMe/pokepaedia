import '../styles/globals.css'
import ContextProvider from './Context'
import { Ibarra_Real_Nova, Fira_Code, Sono } from '@next/font/google'

const ibarraRealNova = Ibarra_Real_Nova({
  subsets: ['latin'],
  variable: '--font-ibarra',
  display: 'swap',
})

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira',
  display: 'swap',
})

const sono = Sono({
  subsets: ['latin'],
  variable: '--font-sono',
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html
      className={` ${ibarraRealNova.variable} ${firaCode.variable} ${sono.variable}`}
      lang="en"
    >
      <body>
        <ContextProvider>{children}</ContextProvider>
      </body>
    </html>
  )
}
