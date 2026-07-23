<script setup>
import PageHero from '../components/PageHero.vue'
import TestimonialsSection from '../components/TestimonialsSection.vue'
import aboutPhoto from '../assets/img/about-photo.png'

const milestones = [
  'Summer of 2018: Founded as the first after-school coding initiative in the country',
  '2019: Became the International Partner of CodeAI (then Code.org)',
  '2019: Initialize Camp: Dale Musser, Ph.D. (University of Missouri) taught at Summer of Code 2019 in Ulaanbaatar to 50+ students',
  '2019: Presented at the CSEdCon in Las Vegas, NV, U.S.',
  '2019: Admitted into the Innovation Hub incubator',
  '2019: Co-organized an Hour of Code with the municipality for 80+ underrepresented children',
  '2020: Ono Gantsog (Shirley Ryan AbilityLab) taught at Data Science Fundamentals',
  '2021: Organized a virtual Hour of Code with Jake Bell (Code.org)',
  '2021: Attended the CSEdCon in Los Angeles, CA, U.S.',
  '2021: Organized a virtual Hour of Code with Rebecca Bailey (at Mendocino County Office of Education)',
  '2022: Introduced CMU CS Academy to Mongolia',
  '2022: Young Coders Camp:Jared O’Leary and Heather Cunningham (BootUp PD) taught at the Summer of Code 2022 in Ulaanbaatar',
  '2022: Attended the CSEdCon in Fort Lauderdale, FL, U.S.',
  '2022: With the help of Asia.org, organized our first PD to 70+ teachers in Sukhbaatar province',
  '2023: Co-organized the Code Olympiad 2023 with Coding Bee Academy from Indonesia',
  '2023: Became the International Professional Development Partner of Code.org in Mongolia',
  "2023: Became Scratch's SEC organization in Mongolia",
  '2023: Signed a MOU with DevTech Research Group of Boston College',
  '2023: Became the micro:bit Authorised Reseller in Mongolia',
  '2023: Attended the CSEdCon in Las Vegas, NV, U.S.',
  '2023: Co-organized an Hour of Code with the municipality for underrepresented children',
  '2024: Signed a MOU with the Ministry of Education in Mongolia to develop a national computer science curriculum for K-12 students',
  '2024: Organized Summer of Code 2024 in Chicago, IL, Arlington, VA, Bay Area, CA, and Los Angeles, CA, U.S.',
  '2024: Waris Candra (Micro:bit Foundation) visited Codercub in Ulaanbaatar',
  '2024: Attended the APCEC in Tokyo, Japan',
  '2025: Opened a state-of-the-art computer science academy at the newly built EduPark in Ulaanbaatar, Mongolia',
  '2025: Tim Barnes (Carnegie Mellon University) taught at the Summer of Code 2025 in Ulaanbaatar',
  '2025: Presented at the APCEC in Bangkok, Thailand',
  '2026: Mason Borgio (8th grade) is our first student to pass the CPCS exam to earn the CMU credits',
  '2026: Future Intelligence Lab: Simon Guest (Code.org) taught at the Summer of Code 2026 in Ulaanbaatar'
]

const faqs = [
  {
    q: 'What is computer science?',
    a: 'Computer science is defined as "the study of computers and algorithmic processes, including their principles, their hardware and software designs, their implementation, and their impact on society".',
  },
  {
    q: 'What is coding/programming?',
    a: "Coding is the process of writing programs for computers. In essence, it's a set of instructions to carry out a task with the help of a computer.",
  },
  {
    q: 'Can children code?',
    a: 'Children are fast becoming coders/programmers/developers nowadays. Computer science and coding is considered the most important skill in the 21st century. Many developed countries have already recognized computer science as a mandatory subject from 1st grade in school.',
  },
  {
    q: 'What are the benefits of learning to code?',
    a: 'Problem solving, computational thinking, creativity, perseverance, team work are some of the skills associated with coding. Steve Jobs once said, "Everyone in this country should learn how to program because it teaches you how to think".',
  },
  {
    q: "What's the difference between computer science and information technology?",
    a: 'Computer science is about creating new systems and programs whereas information technology is about utilization, configuration, and maintenance of existing computer systems.',
  },
]
</script>

<template>
  <PageHero title="About Us" />

  <section class="section">
    <div class="container about-intro">
      <div>
        <p>
          Codercub is the first K-12 coding initiative and the International
          Partner of Code.org in Mongolia.
        </p>
        <p>
          Since 2018, we have educated more than 600 children in computer
          science through our academy alone.
        </p>
        <h2>Mission</h2>
        <p>
          We envision Mongolia as a technology-driven country of innovators.
          Our mission is <strong>advancing computer science in Mongolia</strong>.
          To realize this mission, we are introducing the best computer
          science curriculums developed in the United States through our
          academy as well as the local partner schools.
        </p>
      </div>
      <img :src="aboutPhoto" alt="Codercub" class="about-intro__photo" />
    </div>
  </section>

  <section class="section section--alt">
    <div class="container">
      <h2 class="section-title">Milestones</h2>
      <ul class="milestones">
        <li v-for="m in milestones" :key="m">{{ m }}</li>
      </ul>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <h2 class="section-title">Frequently Asked Questions</h2>
      <div class="faq">
        <details v-for="f in faqs" :key="f.q">
          <summary>{{ f.q }}</summary>
          <p>{{ f.a }}</p>
        </details>
      </div>
    </div>
  </section>

  <TestimonialsSection />
</template>

<style scoped>
.about-intro {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 32px;
  align-items: start;
}

.about-intro__photo {
  border-radius: 8px;
}

@media (max-width: 760px) {
  .about-intro {
    grid-template-columns: 1fr;
  }
}

.milestones {
  list-style: none;
  padding: 0;
  margin: 0;
  max-width: 800px;
  margin: 0 auto;
}

.milestones li {
  padding: 12px 0 12px 24px;
  border-left: 2px solid var(--color-primary);
  position: relative;
}

.milestones li::before {
  content: '';
  position: absolute;
  left: -6px;
  top: 18px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--color-accent);
}

.faq {
  max-width: 800px;
  margin: 0 auto;
}

.faq details {
  border-bottom: 1px solid var(--color-border);
  padding: 14px 0;
}

.faq summary {
  cursor: pointer;
  font-family: var(--font-heading);
  font-weight: 600;
  color: var(--color-navy);
}

.faq p {
  margin: 10px 0 0;
  color: var(--color-muted);
}
</style>
