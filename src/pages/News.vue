<template>
  <section class="page">

    <div class="page-hero">
      <div>
        <p>ILOILO TODAY</p>
        <h1>News & Highlights</h1>
        <span>Learn more about what's happening around the city.</span>
      </div>
    </div>

    <div class="container">

      <div class="news-grid">

        <article class="news-card">
          <span>ILOILO CITY</span>
          <h2>Discover the Iloilo River Esplanade</h2>
          <p>
            Enjoy a relaxing walk along the river while experiencing
            one of the city's most popular public spaces.
          </p>
          <a href="#">Read more →</a>
        </article>

        <article class="news-card">
          <span>CULTURE</span>
          <h2>Experience Ilonggo Hospitality</h2>
          <p>
            Discover why Iloilo is known for its welcoming people,
            strong community, and rich cultural traditions.
          </p>
          <a href="#">Read more →</a>
        </article>

        <article class="news-card">
          <span>FOOD</span>
          <h2>A Culinary Journey Through Iloilo</h2>
          <p>
            Explore famous local dishes such as La Paz Batchoy,
            Pancit Molo, Kansi, and Biscocho.
          </p>
          <a href="#">Read more →</a>
        </article>

        <article class="news-card">
          <span>TRAVEL</span>
          <h2>Explore Iloilo's Heritage</h2>
          <p>
            Walk through historic districts and discover buildings
            that tell stories about Iloilo's past.
          </p>
          <a href="#">Read more →</a>
        </article>

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

.page-hero p {
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

.news-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
}

.news-card {
  background: white;
  padding: 35px;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0,0,0,.06);
}

.news-card span {
  color: #4e083b;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 2px;
}

.news-card h2 {
  color: #410652;
  margin: 15px 0;
}

.news-card p {
  color: #666;
  line-height: 1.7;
}

.news-card a {
  color: #4e083b;
  font-weight: bold;
  text-decoration: none;
}

@media (max-width: 700px) {
  .news-grid {
    grid-template-columns: 1fr;
  }

  .page-hero h1 {
    font-size: 40px;
  }
}
</style>