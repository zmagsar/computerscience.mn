<script setup>
import PageHero from '../../components/PageHero.vue'
import CourseCurriculum from '../../components/CourseCurriculum.vue'
import TestimonialsSection from '../../components/TestimonialsSection.vue'

const units = [
  { title: 'Unit 1: Creating Drawings' },
  { title: 'Unit 2: Functions, Mouse Events, and Properties' },
  { title: 'Unit 3: Mouse Motion Events, Conditionals, and Helper Functions' },
  { title: 'Unit 4: More Conditionals, Key Events, and Methods' },
  { title: 'Unit 5: Complex Conditionals and More Key Events' },
  { title: 'Unit 6: Groups, Step Events, and Motion' },
]
</script>

<template>
  <PageHero
    title="CS1a: Introduction to Programming with Python (Part a)"
    subtitle="Zolbayar Magsar — Lead Instructor"
  />

  <section class="section">
    <div class="container course-intro">
      <p>
        The CS1 curriculum is designed for students in 8th or 9th grade with
        algebra readiness skills. No prior programming experience is
        required. It is inspired by a highly successful Intro Computing
        course (15-112, Fundamentals of Programming and Computer Science)
        that has been taught at Carnegie Mellon University for the past
        10+ years. It is predicated on the notion that learning about
        programming and computer science should be fun and engaging. This
        requires interesting problems to solve, as computational
        problem-solving is the core of computer science. It is why we
        choose to first expose students to graphical problems in CS1: they
        are visually engaging, allow for multiple correct solutions, and
        provide visual cues when a solution goes awry.
      </p>
      <p>
        There are 12 Units to the course, the course is split up into two
        parts, CS1a (units 1-7) and CS1b (units 8-12) so that it can be
        taught as a year long course or two semester based courses. We
        believe the best way to learn this material is to do it, so each
        unit provides content for the topic to be investigated, a worked
        problem(s) to illustrate and let students explore the topic, a set
        of exercises to hone their mastery of the topic, some end-of-unit
        exercises that require students to use and synthesize all the
        topics found in that Unit, and a creative task that lets them
        further explore the topics in the Unit in a manner driven by their
        interests.
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
