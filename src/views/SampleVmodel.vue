<script>
export default {
  data() {
    return {
      name: "",
      age: "",
      course: ""
    }
  }
}
</script>

<template>
  <div class="sample-page">

    <h1>Live Profile Form</h1>

    <div class="form">

      <label>
        Name:
        <input v-model="name" type="text">
      </label>

      <label>
        Age:
        <input v-model="age" type="number">
      </label>

      <label>
        Course:
        <input v-model="course" type="text">
      </label>

    </div>

    <div class="profile">
      <h2>Student Information</h2>

      <p>Name: {{ name }}</p>
      <p>Age: {{ age }}</p>
      <p>Course: {{ course }}</p>
    </div>

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
}

.form {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  margin: 30px 0;
}

label {
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-weight: bold;
}

input {
  padding: 10px;
  border: 1px solid #aaa;
  border-radius: 5px;
  font-size: 16px;
}

.profile {
  margin-top: 30px;
  padding: 25px;
  background: #fff8fb;
  border-left: 5px solid #4e083b;
}

.profile h2 {
  color: #410652;
}

.profile p {
  font-size: 18px;
}
</style>