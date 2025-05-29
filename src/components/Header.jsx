function Header({ timeClass }) {
  // Smooth scroll function for navigation links
  const handleNavClick = (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="main-header">
      <div className="container">
        <div className="header-content">
          <div className="logo">My Portfolio</div>
          <nav className="main-nav">
            <ul>
              <li><a href="#about" onClick={handleNavClick}>About</a></li>
              <li><a href="#portfolio" onClick={handleNavClick}>Portfolio</a></li>
              <li><a href="#contact" onClick={handleNavClick}>Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;