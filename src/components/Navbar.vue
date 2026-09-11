<template>
  <header class="navbar">
    <div class="nav-container">

      <RouterLink to="/" class="brand">
        <img :src="iloiloLogo" alt="Iloilo City" />

        <div>
          <strong>ILOILO CITY</strong>
          <span>Discover the City of Love</span>
        </div>
      </RouterLink>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About Iloilo</RouterLink>
        <RouterLink to="/places">Places</RouterLink>
        <RouterLink to="/food">Food & Culture</RouterLink>
        <RouterLink to="/events">Events</RouterLink>
        <RouterLink to="/news">News</RouterLink>
      </nav>

    </div>
  </header>
</template>

<script setup>
import iloiloLogo from '../assets/iloilo logo.jpg'
</script>