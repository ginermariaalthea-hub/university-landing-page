<script>
export default {
  data() {
    return {
      count: 0
    }
  },

  methods: {
    increase() {
      this.count++
    },

    decrease() {
      this.count--
    }
  }
}
</script>

<template>
  <div class="sample-page">
    <h1>Counter</h1>

    <h2>{{ count }}</h2>

    <div class="buttons">
      <button @click="increase">+</button>
      <button @click="decrease">-</button>
    </div>
  </div>
</template>

<style scoped>
.sample-page {
  max-width: 800px;
  margin: auto;
  padding: 60px 30px;
  text-align: center;
}

.sample-page h1 {
  color: #410652;
}

.sample-page h2 {
  font-size: 50px;
  margin: 30px 0;
}

button {
  padding: 10px 25px;
  margin: 5px;
  font-size: 24px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background: #4e083b;
  color: white;
}

button:hover {
  background: #410652;
}
</style>