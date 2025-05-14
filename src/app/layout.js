
import main from './components/main'
import './globals.css'
import { Ubuntu } from 'next/font/google'
import Header from './components/header'





const ubuntu = Ubuntu({
  weight: '500',
  subsets: ['latin'],
  display: 'swap',
})
export const metadata = {
  title: 'My Portfolio',

}


export default function RootLayout({ children }) {
  return (

    <html lang="en" className={ubuntu.className}>

      <body >
        
          <Header />
          {/* {main()} */}


          {children}
       
      </body>
    </html>

  )
}
