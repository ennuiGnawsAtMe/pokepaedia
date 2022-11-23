import '../styles/globals.css'
import { Ibarra_Real_Nova, Fira_Code, Sono } from '@next/font/google'

const ibarraRealNova = Ibarra_Real_Nova({
  subsets: ['latin'],
  variable: '--font-ibarra',
})

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira',
})

const sono = Sono({
  subsets: ['latin'],
  variable: '--font-sono',
})

export default function RootLayout({ children }) {
  return (
    <html
      className={`${ibarraRealNova.variable} ${firaCode.variable} ${sono.variable}`}
      lang="en"
    >
      <body className="w-screen">{children}</body>
    </html>
  )
}
