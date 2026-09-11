<template>
  <div>

    <!-- HERO -->
    <section class="home-hero">
      <div class="hero-overlay">
        <div class="hero-content">

          <p class="eyebrow">WELCOME TO</p>

          <h1>
            Discover<br />
            <span>Iloilo City</span>
          </h1>

          <p class="hero-description">
            Experience the rich history, delicious food, beautiful
            destinations, and warm culture of the City of Love.
          </p>

          <div class="hero-buttons">
            <RouterLink to="/about" class="btn-primary">
              Explore Iloilo
            </RouterLink>

            <RouterLink to="/academics" class="btn-secondary">
              Discover Places
            </RouterLink>
          </div>

        </div>
      </div>
    </section>

    <!-- INTRODUCTION -->
    <section class="intro-section">
      <div class="container intro-grid">

        <div>
          <p class="section-label">ABOUT THE CITY</p>

          <h2>
            A City Rich in
            <span>History & Culture</span>
          </h2>
        </div>

        <div>
          <p>
            Iloilo City is one of the most historic and culturally rich
            cities in the Philippines. Known as the City of Love, it is
            famous for its heritage buildings, delicious local cuisine,
            colorful festivals, and welcoming people.
          </p>

          <p>
            From the beautiful Iloilo River Esplanade to the historic
            Calle Real, the city offers visitors a unique combination
            of tradition and modern living.
          </p>

          <RouterLink to="/about" class="text-link">
            Learn more about Iloilo →
          </RouterLink>
        </div>

      </div>
    </section>

    <!-- FEATURED -->
    <section class="features-section">
      <div class="container">

        <div class="section-heading">
          <p class="section-label">EXPLORE ILOILO</p>
          <h2>There is so much to discover</h2>
        </div>

        <div class="feature-grid">

          <RouterLink to="/academics" class="feature-card">
            <div class="feature-icon">🏛️</div>
            <h3>Heritage & Places</h3>
            <p>
              Visit historic landmarks, beautiful churches,
              heritage houses, and modern attractions.
            </p>
            <span>Explore places →</span>
          </RouterLink>

          <RouterLink to="/admission" class="feature-card">
            <div class="feature-icon">🍜</div>
            <h3>Food & Culture</h3>
            <p>
              Taste famous Ilonggo dishes and experience
              the unique traditions of Iloilo.
            </p>
            <span>Discover food →</span>
          </RouterLink>

          <RouterLink to="/campus-life" class="feature-card">
            <div class="feature-icon">🎉</div>
            <h3>Events & Festivals</h3>
            <p>
              Experience exciting celebrations such as
              the world-famous Dinagyang Festival.
            </p>
            <span>See events →</span>
          </RouterLink>

        </div>

      </div>
    </section>

    <!-- CALL TO ACTION -->
    <section class="cta-section">
      <div class="container">
        <p class="section-label">THE CITY OF LOVE</p>

        <h2>Come and experience Iloilo.</h2>

        <p>
          Discover a city where history, culture, food, and
          modern life come together.
        </p>

        <RouterLink to="/news" class="btn-primary">
          What's happening in Iloilo
        </RouterLink>
      </div>
    </section>

  </div>
</template>

<style scoped>
.home-hero {
  min-height: 650px;
  background:
    linear-gradient(rgba(65, 6, 82, 0.72), rgba(78, 8, 59, 0.82)),
    url('../assets/iloilo logo.jpg') center/cover no-repeat;
  display: flex;
  align-items: center;
}

.hero-overlay {
  width: 100%;
}

.hero-content {
  max-width: 1100px;
  margin: auto;
  padding: 80px 30px;
  color: white;
}

.eyebrow,
.section-label {
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 3px;
  margin-bottom: 15px;
}

.hero-content h1 {
  font-size: 72px;
  line-height: 1;
  margin: 0 0 25px;
}

.hero-content h1 span {
  color: #f1c75b;
}

.hero-description {
  max-width: 600px;
  font-size: 19px;
  line-height: 1.7;
}

.hero-buttons {
  display: flex;
  gap: 15px;
  margin-top: 30px;
}

.btn-primary,
.btn-secondary {
  display: inline-block;
  padding: 14px 25px;
  text-decoration: none;
  font-weight: 700;
  border-radius: 5px;
}

.btn-primary {
  background: #f1c75b;
  color: #410652;
}

.btn-secondary {
  border: 2px solid white;
  color: white;
}

.container {
  max-width: 1100px;
  margin: auto;
  padding: 80px 30px;
}

.intro-section {
  background: #fffafc;
}

.intro-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 70px;
}

.intro-grid h2,
.section-heading h2,
.cta-section h2 {
  font-size: 42px;
  color: #410652;
  margin-top: 0;
}

.intro-grid h2 span {
  color: #4e083b;
}

.intro-grid p {
  color: #555;
  line-height: 1.8;
}

.text-link {
  color: #4e083b;
  font-weight: bold;
  text-decoration: none;
}

.features-section {
  background: white;
}

.section-heading {
  text-align: center;
  margin-bottom: 45px;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}

.feature-card {
  padding: 35px;
  background: #fff8fb;
  border-radius: 12px;
  text-decoration: none;
  color: #333;
  transition: 0.3s;
  border: 1px solid #eee;
}

.feature-card:hover {
  transform: translateY(-7px);
  box-shadow: 0 10px 25px rgba(65, 6, 82, 0.12);
}

.feature-icon {
  font-size: 40px;
  margin-bottom: 20px;
}

.feature-card h3 {
  color: #410652;
  font-size: 23px;
}

.feature-card p {
  line-height: 1.7;
  color: #666;
}

.feature-card span {
  color: #4e083b;
  font-weight: bold;
}

.cta-section {
  background: linear-gradient(135deg, #4e083b, #410652);
  text-align: center;
  color: white;
}

.cta-section h2 {
  color: white;
}

.cta-section p {
  margin-bottom: 30px;
}

@media (max-width: 800px) {
  .hero-content h1 {
    font-size: 48px;
  }

  .intro-grid,
  .feature-grid {
    grid-template-columns: 1fr;
  }

  .hero-buttons {
    flex-direction: column;
  }
}
</style>