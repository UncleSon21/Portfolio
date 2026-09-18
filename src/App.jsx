import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import BlogPost from './pages/BlogPost'

// React Router doesn't manage scroll: a new page kept the old scroll position,
// and "/#blog" links landed at the top instead of on the section.
const ScrollManager = () => {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' })
      return
    }

    // The target section may not exist yet right after a page change, so retry briefly.
    let frame
    let tries = 0
    const scrollToHash = () => {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      } else if (tries++ < 60) {
        frame = requestAnimationFrame(scrollToHash)
      }
    }
    scrollToHash()
    return () => cancelAnimationFrame(frame)
  }, [pathname, hash])

  return null
}

const App = () => (
  <>
    <ScrollManager />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
    </Routes>
  </>
);

export default App
