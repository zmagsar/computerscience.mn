<script setup>
import PageHero from '../components/PageHero.vue'
import TestimonialsSection from '../components/TestimonialsSection.vue'
import obamaQuote from '../assets/img/obama-quote.jpg'
import event1 from '../assets/img/hoc-event-1.jpg'
import event2 from '../assets/img/hoc-event-2.jpg'
import event3 from '../assets/img/hoc-event-3.jpg'
import event4 from '../assets/img/hoc-event-4.jpg'

const eventPhotos = [event1, event2, event3, event4]
</script>

<template>
  <PageHero
    title="Hour of Code"
    subtitle="Hour of Code is a free one-hour introductory lesson of computer science."
  />

  <section class="section quote-section">
    <div class="container quote-section__grid">
      <img :src="obamaQuote" alt="Barack Obama" class="quote-section__photo" />
      <blockquote>
        <h2>Computer Science Isn't Optional</h2>
        <p>
          "In the new economy, computer science isn't an optional skill, it's
          a basic skill. I strongly believe every child has to have the
          opportunity to learn this critical skill."
        </p>
        <p>
          "Part of what we're realizing is that we're starting too late when
          it comes to making sure that our young people are familiar with
          not just how to play a video game, but how to create a video game."
        </p>
        <footer>Barack Obama, 44th President of the United States</footer>
      </blockquote>
    </div>
  </section>

  <section class="section section--alt">
    <div class="container">
      <h2 class="section-title">Hour of Code in Mongolia</h2>
      <p class="hoc-intro">
        As the Hour of Code Partner of Code.org in Mongolia, we have been
        organizing HoC events since 2018 with schools and the municipality
        every year with the <strong>underprivileged in mind</strong>.
      </p>

      <h3 class="hoc-events-title">Our 2019 Event</h3>
      <div class="gallery">
        <img v-for="(src, i) in eventPhotos" :key="i" :src="src" alt="Hour of Code event" loading="lazy" />
      </div>

      <p class="hoc-help">
        We are happy to help schools organize or host Hour of Code events,
        free of cost. Learn more about Hour of Code
        <a href="https://hourofcode.com/us/faq" target="_blank" rel="noopener">here</a>.
      </p>
    </div>
  </section>

  <TestimonialsSection />
</template>

<style scoped>
.quote-section__grid {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 32px;
  align-items: center;
}

.quote-section__photo {
  border-radius: 8px;
}

.quote-section blockquote {
  margin: 0;
}

.quote-section p {
  font-style: italic;
  color: var(--color-muted);
}

.quote-section footer {
  font-family: var(--font-heading);
  font-weight: 600;
  color: var(--color-primary);
}

@media (max-width: 700px) {
  .quote-section__grid {
    grid-template-columns: 1fr;
  }
}

.hoc-intro {
  max-width: 800px;
  margin: 0 auto 32px;
  text-align: center;
}

.hoc-events-title {
  text-align: center;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 16px;
  margin-bottom: 32px;
}

.gallery img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 6px;
}

.hoc-help {
  text-align: center;
  color: var(--color-muted);
}
</style>
