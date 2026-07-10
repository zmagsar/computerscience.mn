<script setup>
defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
})
</script>

<template>
  <div class="page-hero">
    <div class="container">
      <h1>{{ title }}</h1>
      <p v-if="subtitle">{{ subtitle }}</p>
    </div>
  </div>
</template>

<style scoped>
.page-hero {
  background: linear-gradient(120deg, var(--color-navy), #0a3a63);
  color: #fff;
  padding: 56px 0;
  text-align: center;
}

.page-hero h1 {
  color: #fff;
  margin-bottom: 0.3em;
}

.page-hero p {
  color: #c9d6e2;
  max-width: 700px;
  margin: 0 auto;
}
</style>
