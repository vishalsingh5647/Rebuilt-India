import { useEffect, useState } from 'react'
import Home from './pages/home'
import Tech from './pages/Tech'
import Travel from './pages/Travel'
import Navbar from './components/navbar'

function BlankPage() {
  return (
    <div>
      <Navbar />
      <section className="bg-gray-50">
        <div className="container mx-auto px-4 py-6" />
      </section>
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

  // For all other pages (health, fashion, sports, blog, support, subscribe), render blank until built
  return <BlankPage />
}

export default App
