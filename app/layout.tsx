import Cursor from "@/components/cursor";
import "./globals.css";
import Navbar from "@/components/navbar";

import Footer from "@/components/footer";
export const metadata = {
  title: 'Fahmimaw',
  description: 'My Passion in Finance and Tech Industries',
}

export default function RootLayout({
  children,
}: {
children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Cursor />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}