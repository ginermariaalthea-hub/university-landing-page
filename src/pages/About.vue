<template>
  <section class="page">

    <div class="page-hero">
      <div>
        <p>DISCOVER ILOILO</p>
        <h1>About Iloilo City</h1>
        <span>A city where history and modern life meet.</span>
      </div>
    </div>

    <div class="container">

      <section class="content-section">
        <p class="label">ABOUT ILOILO</p>

        <h2>The City of Love</h2>

        <p>
          Iloilo City is a highly urbanized city in Western Visayas,
          Philippines. It is known for its rich heritage, beautiful
          architecture, delicious cuisine, and friendly Ilonggo people.
        </p>

        <p>
          The city has played an important role in the history and
          development of the region. Its historic streets, churches,
          ancestral houses, and commercial districts continue to tell
          stories about Iloilo's past.
        </p>

        <p>
          Today, Iloilo is a growing and vibrant city that combines
          cultural traditions with modern developments. It is a place
          where visitors can enjoy history, food, festivals, nature,
          and a relaxing urban lifestyle.
        </p>
      </section>

      <div class="info-grid">
        <div class="info-card">
          <h3>🏛️ Rich Heritage</h3>
          <p>
            Iloilo is home to many historic buildings, churches,
            streets, and ancestral houses.
          </p>
        </div>

        <div class="info-card">
          <h3>❤️ City of Love</h3>
          <p>
            Iloilo is widely known for the warmth and hospitality
            of its people.
          </p>
        </div>

        <div class="info-card">
          <h3>🌿 Modern City</h3>
          <p>
            The city continues to develop while preserving its
            cultural identity.
          </p>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.page {
  background: #fffafc;
  min-height: 80vh;
}

.page-hero {
  background: linear-gradient(135deg, #4e083b, #410652);
  color: white;
  padding: 90px 30px;
}

.page-hero > div {
  max-width: 1100px;
  margin: auto;
}

.page-hero p,
.label {
  letter-spacing: 3px;
  font-weight: bold;
  font-size: 13px;
}

.page-hero h1 {
  font-size: 55px;
  margin: 15px 0;
}

.container {
  max-width: 1100px;
  margin: auto;
  padding: 70px 30px;
}

.content-section {
  max-width: 850px;
}

.content-section h2 {
  color: #410652;
  font-size: 38px;
}

.content-section p {
  color: #555;
  line-height: 1.8;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  margin-top: 50px;
}

.info-card {
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0,0,0,.06);
}

.info-card h3 {
  color: #410652;
}

.info-card p {
  color: #666;
  line-height: 1.6;
}

@media (max-width: 800px) {
  .info-grid {
    grid-template-columns: 1fr;
  }

  .page-hero h1 {
    font-size: 40px;
  }
}
</style>