<script setup>
import { testimonials } from '../data/testimonials'
</script>

<template>
  <section class="section testimonials">
    <div class="container">
      <h2 class="section-title">Testimonials</h2>
      <div class="testimonials__grid">
        <blockquote v-for="t in testimonials" :key="t.author" class="testimonial">
          <p>{{ t.quote }}</p>
          <footer>{{ t.author }}</footer>
        </blockquote>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonials {
  background: var(--color-navy);
  color: #fff;
}

.testimonials .section-title {
  color: #fff;
}

.testimonials__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

.testimonial {
  margin: 0;
  padding: 24px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 6px;
  border-left: 3px solid var(--color-primary);
}

.testimonial p {
  margin: 0 0 12px;
  font-style: italic;
  color: #dbe4ec;
}

.testimonial footer {
  font-family: var(--font-heading);
  font-weight: 600;
  color: var(--color-primary);
}
</style>
