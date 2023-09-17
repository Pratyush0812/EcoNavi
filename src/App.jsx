import React from 'react';
import { Hero, Navbar,Companies, Courses, Achievement, Categories, Feedback, CTA, Footer} from './components';
import Whyus from './components/WhyUs';
import Cardsw1 from './components/cardsw1';
import './App.css'

const App = () => (
  <div>
    <Navbar />
    <Hero />
    <Cardsw1/>
    <Whyus />
    
    <Companies />
    {/* <Courses /> */}
    <Achievement />
    {/* <Categories /> */}
    <Feedback />
    <CTA />
    <Footer />
  </div>
)

export default App