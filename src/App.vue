<template>
  <div id="app">
    <Navbar />
    
    <main>
      <RouterView />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './Footer.vue'
</script>