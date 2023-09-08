import '@styles/globals.css';
import Topnav from '@components/TopNav'
import Nav from '@components/Nav'
import Footer from '@components/Footer'

export const metadata = {
  title: 'O.C. Hexagon - Industrial Chemicals and Solutions',
  description: 'Your Supplier for Industrial Chemicals, Equipment, and Laboratory Items.',
  openGraph: {
    title: 'O.C. Hexagon - Industrial Chemicals and Solutions',
    description: 'Your Supplier for Industrial Chemicals, Equipment, and Laboratory Items.',
    keywords: 'OCHEXAGON, O.C HEXAGON, OC HEXAGON, chemical supply nigeria, chemical company Lagos, laboratory equipment, O.C HEXAGON Nigeria, Laboratory Items Supplier, Chemical Importer Lagos',
    images: '../assets/image.png',
  },
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/favicon.ico'/>
      </head>

      <body>
        <Topnav />
        <Nav/>
        {children}
        <Footer />
      </body>
    </html>
  )
}
