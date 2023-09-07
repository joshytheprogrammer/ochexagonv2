import '@styles/globals.css';
import Topnav from '@components/TopNav'
import Nav from '@components/Nav'
import Footer from '@components/Footer'

export const metadata = {
  title: 'O.C. Hexagon - Industrial Chemicals and Solutions',
  description: 'Your trusted partner for industrial chemicals, equipment, and laboratory items.',
  siteUrl: 'https://ochexagon.com',
  author: 'Kwaghuter Raphael',
  keywords: 'industrial chemicals, equipment, laboratory items, solutions, chemical import, chemical marketing, chemical processing, industrial chemicals Nigeria, chemical equipment, chemical laboratory, chemical company, chemical production, chemical blending, chemical packaging, chemical distribution, chemical supply, chemical manufacturing, chemical solutions, chemical services, environmental care, oil spill cleanup, chemical industry, chemical business, chemical products, chemical suppliers, chemical warehouse, chemical plant, chemical directors, chemical executives, chemical staff, chemical professionals, chemical expertise, chemical sustainability, chemical safety, chemical quality, chemical innovation, chemical technology, chemical engineering, chemical education, chemical training, chemical services Nigeria, chemical suppliers Nigeria, chemical production Nigeria, chemical solutions Nigeria, chemical industry Nigeria, chemical business Nigeria, chemical services Lagos, chemical suppliers Lagos, chemical production Lagos, chemical solutions Lagos, chemical industry Lagos, chemical business Lagos',
  ogImage: 'https://ochexagon.com/og-image.jpg',
  twitterHandle: '@ochexagon',
  facebookPage: 'https://www.facebook.com/ochexagon',
  contactEmail: 'info@ochexagon.com',
  phoneNumber: '+234-803-0512-882',
  address: '76, Akanro Street, Off Oshodi Express Way, Ilasamaja, Mushin Lagos',
  hoursOfOperation: 'Monday to Friday - 8am to 5pm',
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
