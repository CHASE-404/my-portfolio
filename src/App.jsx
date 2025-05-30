import { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import workspaceGif from './assets/images/landing-page.gif';


function App() {
  const [greeting, setGreeting] = useState('');
  const [timePhrase, setTimePhrase] = useState('');
  const [timeClass, setTimeClass] = useState('');

  useEffect(() => {
    // Function to get time-based greeting
    const getTimeBasedGreeting = () => {
      const hour = new Date().getHours();
      let greetingText;
      let timePhraseText;
      let timeClassText;
      
      if (hour >= 5 && hour < 12) {
        greetingText = "Good morning";
        timePhraseText = "Start your day with innovation";
        timeClassText = "morning";
      } else if (hour >= 12 && hour < 18) {
        greetingText = "Good afternoon";
        timePhraseText = "Building solutions in the daylight";
        timeClassText = "afternoon";
      } else {
        greetingText = "Good evening";
        timePhraseText = "Coding through the night";
        timeClassText = "evening";
      }
      
      setGreeting(greetingText);
      setTimePhrase(timePhraseText);
      setTimeClass(timeClassText);
    };
    
    // Set greeting when component mounts
    getTimeBasedGreeting();
    
    // Update greeting every minute
    const intervalId = setInterval(getTimeBasedGreeting, 60000);
    
    // Clean up interval on unmount
    return () => clearInterval(intervalId);
  }, []);

  const scrollToAbout = (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
  <>
    <Header greeting={greeting} timeClass={timeClass} />
    <div className="hero-section">
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-lg-7 text-center text-lg-start">
            <h4 className={`greeting-text ${timeClass}-greeting`}>{greeting}!</h4>
            <p className={`time-phrase ${timeClass}-phrase`}>{timePhrase}</p>
            <h1 className="hero-title">From Vision to Reality: Creating Impactful Digital Solutions</h1>
            <p className="hero-subtitle">I'm Kirk Dave, a developer from the Philippines dedicated to building software that solves real problems.</p>
            <div className="hero-buttons">
              <button 
                onClick={scrollToAbout} 
                className="btn btn-primary btn-get-started"
              >
                <span>Let's Get Started!</span>
                <i className="arrow-icon">↓</i>
              </button>
            </div>
          </div>
          <div className="col-lg-5 d-none d-lg-block">
            <div className="workspace-image">
              <img src={workspaceGif} alt="Animated workspace" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <main>
      <section id="about">
        <div className="container">
          <About />
        </div>
      </section>
      <section id="portfolio">
        <div className="container">
          <Portfolio />
        </div>
      </section>
      <section id="contact">
        <div className="container">
          <Contact />
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
}

export default App;
