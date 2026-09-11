<template>
  <section class="page">

    <div class="page-hero">
      <div>
        <p>TASTE ILOILO</p>
        <h1>Food & Culture</h1>
        <span>Experience the flavors and traditions of Ilonggo life.</span>
      </div>
    </div>

    <div class="container">

      <div class="intro">
        <p class="label">ILONGGO FLAVORS</p>
        <h2>A Taste of Iloilo</h2>
        <p>
          Iloilo is famous for its flavorful cuisine. Food is an
          important part of Ilonggo culture and is often connected
          with family, celebrations, and community.
        </p>
      </div>

      <div class="food-grid">

        <article class="food-card">
          <div>🍜</div>
          <h3>La Paz Batchoy</h3>
          <p>
            A well-known noodle soup from La Paz, Iloilo, made with
            noodles, meat, broth, and flavorful toppings.
          </p>
        </article>

        <article class="food-card">
          <div>🥟</div>
          <h3>Pancit Molo</h3>
          <p>
            A comforting soup featuring dumplings and a savory
            broth, inspired by the culinary traditions of Molo.
          </p>
        </article>

        <article class="food-card">
          <div>🍲</div>
          <h3>Kansi</h3>
          <p>
            A traditional Ilonggo soup known for its sour and
            savory flavor.
          </p>
        </article>

        <article class="food-card">
          <div>🍰</div>
          <h3>Biscocho</h3>
          <p>
            A popular Iloilo snack made from toasted bread with
            a sweet and buttery coating.
          </p>
        </article>

      </div>

      <section class="culture-box">
        <p class="label">CULTURE</p>
        <h2>The Ilonggo Spirit</h2>
        <p>
          Iloilo is known for its strong sense of community,
          hospitality, traditions, music, arts, and festivals.
          The city's culture continues to thrive as new generations
          celebrate and preserve local traditions.
        </p>
      </section>

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

.intro {
  max-width: 800px;
  margin-bottom: 50px;
}

.intro h2,
.culture-box h2 {
  color: #410652;
  font-size: 38px;
}

.intro p,
.culture-box p {
  color: #666;
  line-height: 1.8;
}

.food-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.food-card {
  background: white;
  padding: 30px 25px;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0,0,0,.06);
}

.food-card > div {
  font-size: 40px;
}

.food-card h3 {
  color: #4e083b;
}

.food-card p {
  color: #666;
  line-height: 1.6;
}

.culture-box {
  margin-top: 60px;
  background: #410652;
  color: white;
  padding: 45px;
  border-radius: 12px;
}

.culture-box h2 {
  color: white;
}

.culture-box p {
  color: white;
}

@media (max-width: 900px) {
  .food-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 600px) {
  .food-grid {
    grid-template-columns: 1fr;
  }
}
</style>