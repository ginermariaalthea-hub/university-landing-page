<script>
export default {
  data() {
    return {
      name: "Juan",
      age: 20,
      studentId: "24-007701",
      course: "BSIT",
      yearLevel: "2nd Year"
    }
  }
}
</script>

<template>
  <div class="sample-page">
    <h1>Student Profile</h1>

    <p>Name: {{ name }}</p>
    <p>Age: {{ age }}</p>
    <p>Student ID: {{ studentId }}</p>
    <p>Course: {{ course }}</p>
    <p>Year Level: {{ yearLevel }}</p>
  </div>
</template>

<style scoped>
.sample-page {
  max-width: 800px;
  margin: auto;
  padding: 60px 30px;
}

.sample-page h1 {
  color: #410652;
  margin-bottom: 30px;
}

.sample-page p {
  font-size: 18px;
  margin: 12px 0;
}
</style>