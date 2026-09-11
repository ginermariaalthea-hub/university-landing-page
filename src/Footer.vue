<template>
  <footer class="footer">

    <div class="footer-container">

      <div>
        <h2>ILOILO CITY</h2>
        <p>
          Discover the City of Love — its history, culture,
          food, people, and beautiful places.
        </p>
      </div>

      <div>
        <h3>Explore</h3>

        <RouterLink to="/about">About Iloilo</RouterLink>
        <RouterLink to="/academics">Places to Visit</RouterLink>
        <RouterLink to="/admission">Food & Culture</RouterLink>
        <RouterLink to="/campus-life">Events</RouterLink>
      </div>

      <div>
        <h3>Visit Iloilo</h3>
        <p>Western Visayas, Philippines</p>
        <p>City of Love ❤️</p>
      </div>

    </div>

    <div class="copyright">
      © 2026 Discover Iloilo City. For educational purposes.
    </div>

  </footer>
</template>

<style scoped>
.footer {
  background: #280326;
  color: white;
}

.footer-container {
  max-width: 1100px;
  margin: auto;
  padding: 60px 30px;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 50px;
}

.footer h2 {
  color: #f1c75b;
}

.footer h3 {
  margin-bottom: 20px;
}

.footer p {
  color: #ddd;
  line-height: 1.7;
}

.footer a {
  display: block;
  color: #ddd;
  text-decoration: none;
  margin-bottom: 10px;
}

.footer a:hover {
  color: #f1c75b;
}

.copyright {
  text-align: center;
  border-top: 1px solid rgba(255,255,255,.15);
  padding: 20px;
  color: #bbb;
  font-size: 14px;
}

@media (max-width: 700px) {
  .footer-container {
    grid-template-columns: 1fr;
  }
}
</style>