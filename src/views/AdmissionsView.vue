<script setup>
import PageHero from '../components/PageHero.vue'
import { admissionsFormUrl } from '../data/contact'
import registerIcon from '../assets/img/register.png'
import checklistIcon from '../assets/img/check-list.png'
import enrollIcon from '../assets/img/enroll.png'

const steps = [
  {
    icon: registerIcon,
    title: 'Register',
    body: 'Fill out the online form and pay the ₮10K registration fee. This fee is for registration only and is non-refundable.',
    cta: { label: 'Fill out the form', href: admissionsFormUrl },
  },
  {
    icon: checklistIcon,
    title: 'Pre-assessment',
    body: 'Once filled out the online form and paid the registration fee, you will receive an email with a link to a pre-assessment test.',
  },
  {
    icon: enrollIcon,
    title: 'Enrollment',
    body: 'Based on the test score, you are admitted to the academy and will be instructed to proceed with the tuition.',
  },
]
</script>

<template>
  <PageHero
    title="Admissions"
    subtitle="Our pre-assessment test ensures students demonstrate academic capacity and are ready to code."
  />

  <section class="section">
    <div class="container">
      <h2 class="section-title">Admissions Steps</h2>
      <p class="admissions__note">
        We are currently accepting applications for our Summer of Code
        workshops starting on 15 of July.
      </p>

      <div class="steps">
        <div v-for="(s, i) in steps" :key="s.title" class="step">
          <div class="step__number">{{ i + 1 }}</div>
          <img :src="s.icon" :alt="s.title" class="step__icon" />
          <h3>{{ s.title }}</h3>
          <p>{{ s.body }}</p>
          <a v-if="s.cta" :href="s.cta.href" target="_blank" rel="noopener" class="btn btn--primary">
            {{ s.cta.label }}
          </a>
        </div>
      </div>
    </div>
  </section>

  <section class="section section--alt">
    <div class="container eligibility">
      <h2 class="section-title">Eligibility</h2>
      <p>
        We have trained over 500 students of all age groups with various
        backgrounds. Based on our experience, we decided it's best to conduct
        a pre-assessment test to determine if a student is ready for a coding
        journey.
      </p>
      <p>
        The student has to demonstrate a certain level of competency both in
        terms of English and Math in order to ensure that the training is a
        success.
      </p>
      <ul>
        <li>
          <strong>For CS0</strong>, the student is tested with basic
          Math/Geometry concepts such as counting, directions, basic
          calculations, coordinate planes, etc.
        </li>
        <li>
          <strong>For CS1</strong>, the student must be able to demonstrate
          the basic concepts of programming: sequence, control flow, and
          functions.
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.admissions__note {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 40px;
  color: var(--color-muted);
}

.steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
}

.step {
  text-align: center;
  padding: 24px;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  position: relative;
}

.step__number {
  position: absolute;
  top: 12px;
  left: 12px;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: var(--color-accent);
  color: #fff;
  font-family: var(--font-heading);
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
}

.step__icon {
  height: 64px;
  width: 64px;
  margin: 0 auto 12px;
  object-fit: contain;
}

.step p {
  color: var(--color-muted);
  min-height: 4.5em;
}

.eligibility {
  max-width: 800px;
}

.eligibility ul {
  padding-left: 20px;
}

.eligibility li {
  margin-bottom: 10px;
}
</style>
