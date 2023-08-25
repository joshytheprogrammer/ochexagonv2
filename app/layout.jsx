import '@styles/globals.css';
import Topnav from '@components/TopNav'
import Nav from '@components/Nav'
import Footer from '@components/Footer'



export const metadata = {
  title: 'O.C. Hexagon - Industrial Chemicals and Solutions',
  description: 'Your trusted partner for industrial chemicals, equipment, and laboratory items.',
  siteUrl: 'https://ochexagon.com',
  author: 'Kwaghuter Raphael',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Topnav />
        <Nav/>
        {children}
        <Footer />
      </body>
    </html>
  )
}
