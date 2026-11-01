
export function createHome() {
  return `
    <main>

      
<section class="hero" id="home">
  <div class="hero-content">

    <div class="hero-artwork">
      <img
        src="/psyche-out-banner.jpg"
        alt="Psyche Out Entertainment original skull artwork"
      />
    </div>

    <p class="hero-label">
      Independent Gaming & Entertainment
    </p>

    <h1 class="hero-title">
      ENTER A WORLD
      <span>BEYOND PLAY.</span>
    </h1>

    <p class="hero-description">
      Creating digital experiences, exploring new ideas,
      and bringing imaginative worlds to life.
    </p>

    <div class="hero-actions">
      <a href="#projects" class="button-primary">
        Explore Projects
      </a>

      <a href="#about" class="button-secondary">
        Discover Psyche Out
      </a>
    </div>

  </div>
</section>


      <!-- PROJECTS -->
      <section class="section container" id="projects">

        <div class="section-heading">
          <div>
            <h2 class="section-title">Featured Projects</h2>
            <p class="section-subtitle">
              Worlds, ideas, and experiences in development.
            </p>
          </div>
        </div>

        <div class="featured-grid">

          <article class="project-card">
            <div class="project-image"></div>
            <div class="project-info">
              <p class="project-category">Gaming</p>
              <h3 class="project-title">Project One</h3>
              <p class="project-description">
                An upcoming gaming experience.
              </p>
            </div>
          </article>

          <article class="project-card">
            <div class="project-image"></div>
            <div class="project-info">
              <p class="project-category">Creative</p>
              <h3 class="project-title">Project Two</h3>
              <p class="project-description">
                A new creative production.
              </p>
            </div>
          </article>

          <article class="project-card">
            <div class="project-image"></div>
            <div class="project-info">
              <p class="project-category">Technology</p>
              <h3 class="project-title">Project Three</h3>
              <p class="project-description">
                An experimental digital project.
              </p>
            </div>
          </article>

        </div>
      </section>

   
<section class="section creators-section" id="creators">
  <div class="container">
    <div class="section-heading">
      <p class="section-label">THE PEOPLE BEHIND THE PROJECTS</p>
      <h2 class="section-title">Meet the Creators.</h2>
      <p class="section-description">
        The minds, ideas, and creativity behind Psyche Out Entertainment.
      </p>
    </div>

    <div class="creators-empty">
      <span class="creators-symbol">✦</span>
      <h3>More Than a Name.</h3>
      <p>
        Our creator community is taking shape.
        Check back as new faces and projects join us.
      </p>
    </div>
  </div>
</section>


  
<!-- NEWS -->
<section class="section news-section" id="news">
  <div class="container">
    <div class="section-heading">
      <p class="section-label">LATEST UPDATES</p>
      <h2 class="section-title">What's Happening.</h2>
      <p class="section-description">
        Updates, announcements, and what's coming next.
      </p>
    </div>

    <article class="announcement-card">
      <p class="announcement-date">Studio Update</p>

      <h3 class="announcement-title">
        Building Something New.
      </h3>

      <p class="announcement-description">
        Follow along as Psyche Out Entertainment
        develops new projects and creative experiences.
      </p>

      <a href="#about" class="announcement-link">
        Discover More →
      </a>
    </article>
  </div>
</section>


       

      <!-- ABOUT -->
      <section class="section about-section" id="about">
        <div class="container">
          <div class="about-content">
            <h2 class="section-title">
              Beyond the Ordinary.
            </h2>

            <p class="about-description">
              Psyche Out Entertainment is a creative
              entertainment venture focused on gaming,
              digital experiences, and imaginative projects.
              We're building something of our own, one
              experience at a time.
            </p>
          </div>
        </div>
      </section>

      
<section class="section contact-section" id="contact">
  <div class="container">
    <div class="section-heading">
      <p class="section-label">GET IN TOUCH</p>
      <h2 class="section-title">Let's Connect.</h2>
      <p class="section-description">
        Have a question, collaboration idea, or something you'd
        like to share? We'd love to hear from you.
      </p>
    </div>

    <div class="contact-layout">
      <form class="contact-form" id="contact-form">
        <div class="form-row">
          <div class="form-group">
            <label for="contact-name">Your Name</label>
            <input
              type="text"
              id="contact-name"
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>

          <div class="form-group">
            <label for="contact-email">Email Address</label>
            <input
              type="email"
              id="contact-email"
              name="email"
              placeholder="you@example.com"
              required
            />
          </div>
        </div>

        <div class="form-group">
          <label for="contact-subject">Subject</label>
          <input
            type="text"
            id="contact-subject"
            name="subject"
            placeholder="What is this about?"
            required
          />
        </div>

        <div class="form-group">
          <label for="contact-message">Message</label>
          <textarea
            id="contact-message"
            name="message"
            rows="6"
            placeholder="Write your message here..."
            required
          ></textarea>
        </div>

        <button type="submit" class="contact-submit">
          Send Message <span>→</span>
        </button>
      </form>

      <aside class="contact-info">
        <h3>Other Ways to Reach Us</h3>
        <p class="contact-info-description">
          Choose whichever way works best for you.
        </p>

        <a
          href="https://discord.gg/eywsVzkSv2"
          class="contact-method"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="contact-icon" aria-hidden="true">◉</span>
          <span>
            <strong>Discord Community</strong>
            <small>Join our server</small>
          </span>
          <span class="contact-arrow">↗</span>
        </a>

        <a
          href="mailto:luffyredskull@gmail.com"
          class="contact-method"
        >
          <span class="contact-icon" aria-hidden="true">✉</span>
          <span>
            <strong>Email</strong>
            <small>luffyredskull@gmail.com</small>
          </span>
          <span class="contact-arrow">↗</span>
        </a>

        <a
          href="tel:+19162543228"
          class="contact-method"
        >
          <span class="contact-icon" aria-hidden="true">☎</span>
          <span>
            <strong>Phone</strong>
            <small>+1 916-254-3228</small>
          </span>
          <span class="contact-arrow">↗</span>
        </a>
      </aside>
    </div>
  </div>
</section>


    </main>
  `;
}
