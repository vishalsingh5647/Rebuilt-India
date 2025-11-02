import { useEffect, useState } from 'react'
import Home from './pages/home'
import Tech from './pages/Tech'
import Travel from './pages/Travel'
import Health from './pages/Health'
import Fashion from './pages/Fashion'
import Sports from './pages/Sports'
import Blogs from './pages/Blogs'
import Navbar from './components/navbar'
import Footer from './components/Footer'

function BlankPage() {
  return (
    <div>
      <Navbar />
      <section className="bg-gray-50">
        <div className="container mx-auto px-4 py-6" />
      </section>
      <Footer />
    </div>
  )
}

function App() {
  const [pathname, setPathname] = useState(typeof window !== 'undefined' ? window.location.pathname : '/')

  useEffect(() => {
    const update = () => setPathname(window.location.pathname)
    window.addEventListener('popstate', update)
    return () => window.removeEventListener('popstate', update)
  }, [])

  if (pathname === '/') return <Home />
  if (pathname.startsWith('/tech')) return <Tech />
  if (pathname.startsWith('/travel')) return <Travel />
  if (pathname.startsWith('/health')) return <Health />
  if (pathname.startsWith('/fashion')) return <Fashion />
  if (pathname.startsWith('/sports')) return <Sports />
  if (pathname === '/blog' || pathname.startsWith('/blogs')) return <Blogs />

  // For all other pages (health, fashion, sports, blog, support, subscribe), render blank until built
  return <BlankPage />
}

export default App
