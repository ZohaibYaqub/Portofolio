import main from './components/main'
import './globals.css'
import { Poppins } from 'next/font/google'
import Header from './components/header'

const poppins = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'My Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <Header />
        {/* {main()} */}
        {children}
      </body>
    </html>
  )
}
