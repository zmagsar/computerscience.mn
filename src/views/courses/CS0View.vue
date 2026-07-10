<script setup>
import PageHero from '../../components/PageHero.vue'
import CourseCurriculum from '../../components/CourseCurriculum.vue'
import TestimonialsSection from '../../components/TestimonialsSection.vue'

const units = [
  {
    title: 'Week 1: Drawing with Shapes',
    lessons: [
      '1.1. Lesson 1 — Getting Started',
      '1.2. Lesson 2 — Stars and Gradients',
      '1.3. Lesson 3 — Rectangles and Opacity',
      '1.4. Lesson 4 — More Shapes and Properties',
      '1.5. Lesson 5 — Unit 1 Project',
      'Unit 1 Quiz',
      '1.6. Creative & Collaborative Tasks',
    ],
  },
  {
    title: 'Week 2: Basic Animations',
    lessons: [
      '2.1. Lesson 6 — Using the Mouse',
      '2.2. Lesson 7 — Animating With the Mouse',
      '2.3. Lesson 8 — Other Animations',
      '2.4. Lesson 9 — Unit 2 Project',
      'Unit 2 Quiz',
      '2.5. Creative & Collaborative Tasks',
    ],
  },
  {
    title: 'Week 3: Giving Programs Options',
    lessons: [
      '3.1. Lesson 10 — Conditionals',
      '3.2. Lesson 11 — Using the Keyboard',
      '3.3. Lesson 12 — More Conditionals',
      '3.4. Lesson 13 — Shape Methods',
      '3.5. Lesson 14 — Unit 3 Project',
      'Unit 3 Quiz',
      '3.6. Creative & Collaborative Tasks',
    ],
  },
  {
    title: 'Week 4: Animating Lots of Shapes',
    lessons: [
      '4.1. Lesson 15 — Groups',
      '4.2. Lesson 16 — Loops',
      '4.3. Lesson 17 — Space Invaders',
      'Unit 4 Quiz',
      '4.4. Creative & Collaborative Tasks',
      'Demo Day',
    ],
  },
]
</script>

<template>
  <PageHero title="CS0: Exploring Programming with Python" subtitle="Zolbayar Magsar — Lead Instructor" />

  <section class="section">
    <div class="container course-intro">
      <p>
        CS0 is a light version of our CS1 course, designed to engage and
        excite future CS1 students. It includes 17 lessons and is designed
        for use in out-of-school programs, summer camps, and middle school
        or short high school course settings.
      </p>
      <p>
        There are 4 units in the course, which guide students from the
        basics of drawing images to ultimately creating animations and
        making games. We firmly embrace learning-by-doing. Each set of
        notes contains interactive checkpoints throughout, and each lesson
        provides a variety of practice exercises. In addition, at the end
        of every unit, we offer optional challenge exercises that similarly
        reinforce what students have learned.
      </p>
    </div>
  </section>

  <section class="section section--alt">
    <div class="container">
      <h2 class="section-title">Course Schedule</h2>
      <CourseCurriculum :units="units" />
    </div>
  </section>

  <TestimonialsSection />
</template>

<style scoped>
.course-intro {
  max-width: 800px;
}

.course-intro p {
  color: var(--color-muted);
}
</style>
