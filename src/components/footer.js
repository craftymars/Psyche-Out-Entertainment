
export function createFooter() {
  return `
    <footer class="site-footer">
      <div class="container footer-content">

        <div class="footer-brand">
          <a href="#home" class="header-brand">
            PSYCHE <span>OUT</span>
          </a>

          <p class="footer-tagline">
            Beyond the Ordinary.
          </p>
        </div>

        <nav class="footer-links">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#creators">Creators</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <div class="footer-bottom">

          <p class="footer-text">
            © ${new Date().getFullYear()} 
            Psyche Out Entertainment. All rights reserved.
          </p>

          <p class="developer-credit">
            Designed & Developed by
            <span>Mariah Crafts</span>
          </p>

        </div>

      </div>
    </footer>
  `;
}

