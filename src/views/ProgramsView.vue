<script setup>
import PageHero from '../components/PageHero.vue'
import TestimonialsSection from '../components/TestimonialsSection.vue'

const gallery = Object.values(
  import.meta.glob('../assets/gallery/*.png', { eager: true, import: 'default' }),
)

const ongoingClasses = [
  { name: 'CS1a: Introduction to Programming with Python (Part a)', to: '/courses/cs1a/', department: 'High School', semester: 'Autumn 2024, Spring 2025' },
  { name: 'CS0: Exploring Programming with Python', to: '/courses/cs0/', department: 'High School', semester: 'Autumn 2024, Spring 2025' },
  { name: 'AP Computer Science Principles', to: '/courses/csp/', department: 'High School', semester: 'Autumn 2024, Spring 2025' },
]

const catalog = [
  { course: 'CS0', duration: '4 weeks (40 hrs)', language: 'Python', target: 'Certificate', tuition: "₮800'000" },
  { course: 'CS1a', duration: '1 sem (60 hrs)', language: 'Python', target: 'Certificate', tuition: "₮1'200'000" },
  { course: 'CS1b', duration: '1 sem (60 hrs)', language: 'Python', target: 'Certificate', tuition: "₮1'200'000" },
  { course: 'AP CSP', duration: '1 year (120 hrs)', language: 'Python', target: 'Exam', tuition: "₮2'400'000" },
  { course: 'AP CSA', duration: '1 year (140 hrs)', language: 'Java', target: 'Exam', tuition: "₮2'800'000" },
  { course: 'CS3', duration: '2 years (210 hrs)', language: 'Python', target: 'Exam', tuition: "₮4'200'000" },
]

const crashCourses = [
  { course: 'Python Basics', duration: '1 week (10 hrs)', tuition: "₮200'000" },
  { course: 'Math for Coding', duration: '2 weeks (20 hrs)', tuition: "₮400'000" },
]
</script>

<template>
  <PageHero
    title="Programs"
    subtitle="Coding courses based on world-class curricula, developed and taught by seasoned professionals from USA."
  />

  <section class="section">
    <div class="container">
      <h2 class="section-title">Ongoing Classes</h2>
      <div class="table-scroll">
        <table>
          <thead>
            <tr><th>Course name</th><th>Department</th><th>Semester</th></tr>
          </thead>
          <tbody>
            <tr v-for="c in ongoingClasses" :key="c.name">
              <td><router-link :to="c.to">{{ c.name }}</router-link></td>
              <td>{{ c.department }}</td>
              <td>{{ c.semester }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <section class="section section--alt">
    <div class="container">
      <h2 class="section-title">Course Catalog (Mid/High School)</h2>
      <div class="table-scroll">
        <table>
          <thead>
            <tr><th>Course</th><th>Duration</th><th>Language</th><th>Target</th><th>Tuition</th></tr>
          </thead>
          <tbody>
            <tr v-for="c in catalog" :key="c.course">
              <td>{{ c.course }}</td>
              <td>{{ c.duration }}</td>
              <td>{{ c.language }}</td>
              <td>{{ c.target }}</td>
              <td>{{ c.tuition }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 class="crash-title">Crash Courses/Refreshers</h3>
      <div class="table-scroll">
        <table>
          <thead>
            <tr><th>Course</th><th>Duration</th><th>Tuition</th></tr>
          </thead>
          <tbody>
            <tr v-for="c in crashCourses" :key="c.course">
              <td>{{ c.course }}</td>
              <td>{{ c.duration }}</td>
              <td>{{ c.tuition }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container logistics">
      <h2 class="section-title">Logistics</h2>
      <p>
        We utilize an <strong>asynchronous learning model</strong> for CS0
        and CS1. Under this model, the student will go through most of the
        content asynchronously (a pacing guide will be provided), and the
        live lecture sessions will mainly focus on exercise problem-solving.
        To become certified, students must complete the exercises contained
        within the course's exercises.
      </p>
    </div>
  </section>

  <section class="section section--alt">
    <div class="container">
      <h2 class="section-title">What They Make in CS0</h2>
      <div class="gallery">
        <img v-for="(src, i) in gallery" :key="i" :src="src" alt="Student project from CS0" loading="lazy" />
      </div>
    </div>
  </section>

  <TestimonialsSection />
</template>

<style scoped>
.table-scroll {
  overflow-x: auto;
  margin-bottom: 32px;
}

.crash-title {
  text-align: center;
  margin-top: 40px;
}

.logistics {
  max-width: 800px;
}

.logistics p {
  color: var(--color-muted);
}

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 12px;
}

.gallery img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 6px;
}
</style>
