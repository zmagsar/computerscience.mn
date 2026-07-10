<script setup>
import PageHero from '../../components/PageHero.vue'
import CourseCurriculum from '../../components/CourseCurriculum.vue'
import TestimonialsSection from '../../components/TestimonialsSection.vue'

const units = [
  {
    title: 'Unit 1: Intro to CMU Graphics',
    description: 'Learn fundamental coding techniques by drawing images in Python.',
    hours: 14,
  },
  {
    title: 'Unit 2: Functions, Mouse Events, Conditionals',
    description: 'Functions, Mouse Events, Properties, if-else Conditionals, Custom Properties, Shape Methods, and if-elif-else.',
    hours: 18,
  },
  {
    title: 'Unit 3: Groups, Lists, and Loops',
    description: 'Groups, Traversing Groups, Lists.',
    hours: 15,
  },
  {
    title: 'Unit 4: Complex Conditionals, More Events, and Libraries',
    description: 'Complex Conditionals, Key Events, Step Events, Strings, Libraries, and Using Media.',
    hours: 9,
  },
  {
    title: 'Unit 5: Create Performance Task',
    description: 'Create Task Examples, Practice, and Submission.',
    hours: 12,
  },
  {
    title: 'Unit 6: AP Test Prep',
    description: 'Test Prep and Exam Concept Review.',
    hours: 12,
  },
]
</script>

<template>
  <PageHero title="AP Computer Science Principles" />

  <section class="section">
    <div class="container course-intro">
      <p>
        AP Computer Science Principles is an introductory college-level
        computing course that introduces students to the breadth of the
        field of computer science. Students learn to design and evaluate
        solutions and to apply computer science to solve problems through
        the development of algorithms and programs. They incorporate
        abstraction into programs and use data to discover new knowledge.
        Students also explain how computing innovations and computing
        systems—including the internet—work, explore their potential
        impacts, and contribute to a computing culture that is
        collaborative and ethical.
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
