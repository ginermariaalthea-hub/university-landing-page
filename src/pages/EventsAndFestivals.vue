<template>
  <main class="page">

    <section class="hero">
      <div class="container">
        <p class="label">CAMPUS LIFE</p>

        <h1>Experience Life Beyond the Classroom</h1>

        <p>
          Discover a vibrant campus community filled with activities,
          organizations, events, and opportunities to make lasting memories.
        </p>
      </div>
    </section>

    <section class="content">
      <div class="container">

        <h2>Life at CPU</h2>

        <div class="cards">

          <div class="card">
            <h3>Student Organizations</h3>
            <p>
              Join student organizations and clubs that match your
              interests, talents, and goals.
            </p>
            <button>Explore Organizations</button>
          </div>

          <div class="card">
            <h3>Sports & Recreation</h3>
            <p>
              Stay active and enjoy sports and recreational activities
              with fellow students.
            </p>
            <button>Learn More</button>
          </div>

          <div class="card">
            <h3>Campus Events</h3>
            <p>
              Take part in university events, celebrations, programs,
              and activities throughout the school year.
            </p>
            <button>View Events</button>
          </div>

          <div class="card">
            <h3>Student Community</h3>
            <p>
              Build friendships, meet new people, and become part of
              a welcoming university community.
            </p>
            <button>Discover More</button>
          </div>

        </div>

      </div>
    </section>

    <section class="community">
      <div class="container">

        <h2>Be Part of the Community</h2>

        <p>
          University life is about more than academics. It is an opportunity
          to develop confidence, leadership, friendships, and memories that
          will last beyond graduation.
        </p>

      </div>
    </section>

  </main>
</template>

<style scoped>
.page {
  min-height: 100vh;
  background: #e7dfe5;
}

/* HERO */

.hero {
  background: #4e083b;
  color: white;
  padding: 80px 24px;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}

.label {
  color: #d6d6d6;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 2px;
  margin-bottom: 10px;
}

.hero h1 {
  font-size: 44px;
  margin: 0 0 20px;
}

.hero p:last-child {
  max-width: 700px;
  color: #ebe8ea;
  font-size: 17px;
  line-height: 1.7;
}

/* CONTENT */

.content {
  padding: 70px 24px;
}

h2 {
  color: #4e083b;
  font-size: 30px;
  margin-bottom: 35px;
}

.cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
}

.card {
  background: purple;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 30px;
}

.card h3 {
  color: #4e083b;
  font-size: 21px;
}

.card p {
  color: #410652;
  line-height: 1.7;
}

.card button {
  margin-top: 10px;
  padding: 10px 18px;
  border: none;
  border-radius: 6px;
  background: #4e083b;
  color: white;
  cursor: pointer;
}

.card button:hover {
  background: #410652;
}

/* COMMUNITY */

.community {
  background: white;
  padding: 70px 24px;
  text-align: center;
}

.community p {
  max-width: 700px;
  margin: 0 auto;
  color: #410652;
  line-height: 1.8;
}

/* MOBILE */

@media (max-width: 700px) {
  .hero h1 {
    font-size: 34px;
  }

  .cards {
    grid-template-columns: 1fr;
  }
}
</style>