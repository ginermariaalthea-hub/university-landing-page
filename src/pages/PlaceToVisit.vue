<template>
  <section class="page">

    <div class="page-hero">
      <div>
        <p>EXPLORE ILOILO</p>
        <h1>Places to Visit</h1>
        <span>Discover some of Iloilo's most beautiful destinations.</span>
      </div>
    </div>

    <div class="container">

      <div class="places-grid">

        <article class="place-card">
          <div class="place-icon">🌊</div>
          <h2>Iloilo River Esplanade</h2>
          <p>
            A beautiful riverside destination where visitors can walk,
            relax, exercise, and enjoy views of the Iloilo River.
          </p>
        </article>

        <article class="place-card">
          <div class="place-icon">🏛️</div>
          <h2>Calle Real</h2>
          <p>
            A historic street in the heart of Iloilo City known for
            heritage buildings and its connection to the city's past.
          </p>
        </article>

        <article class="place-card">
          <div class="place-icon">⛪</div>
          <h2>Molo Church</h2>
          <p>
            A famous Gothic-inspired church and one of Iloilo's
            recognizable historical landmarks.
          </p>
        </article>

        <article class="place-card">
          <div class="place-icon">🏠</div>
          <h2>Molo Mansion</h2>
          <p>
            A restored heritage property near Molo Plaza that
            showcases local culture, products, and architecture.
          </p>
        </article>

        <article class="place-card">
          <div class="place-icon">🌳</div>
          <h2>Esplanade Parks</h2>
          <p>
            A series of riverside parks offering green spaces,
            walking paths, and places to enjoy the city.
          </p>
        </article>

        <article class="place-card">
          <div class="place-icon">🏰</div>
          <h2>Casa Real de Iloilo</h2>
          <p>
            A historic government building that reflects the
            architectural and political history of Iloilo.
          </p>
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

.places-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}

.place-card {
  background: white;
  padding: 35px;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0,0,0,.06);
  border-top: 4px solid #4e083b;
}

.place-icon {
  font-size: 42px;
}

.place-card h2 {
  color: #410652;
  font-size: 23px;
}

.place-card p {
  color: #666;
  line-height: 1.7;
}

@media (max-width: 800px) {
  .places-grid {
    grid-template-columns: 1fr;
  }

  .page-hero h1 {
    font-size: 40px;
  }
}
</style>