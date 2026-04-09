import Navbar from '../components/NavBar'
import Hero from '../sections/Hero'
import LogoShowcase from '../sections/LogoShowcase'
import FeatureCards from '../sections/FeatureCards'
import Experience from '../sections/Experience'
import TechStack from '../sections/TechStack'
import Projects from '../sections/Projects'
import Blog from '../sections/Blog'
import Contact from '../sections/Contact'
import Footer from '../sections/Footer'

const Home = () => (
  <>
    <Navbar />
    <Hero />
    <LogoShowcase />
    <FeatureCards />
    <Experience />
    <TechStack />
    <Projects />
    <Blog />
    <Contact />
    <Footer />
  </>
)

export default Home