<script setup>
import { registerFormUrl } from '../data/contact'
import partnerCodeorg from '../assets/img/partner-codeorg.png'
import cmucsacademy from '../assets/img/cmu-cs-academy.png'
import scratch from '../assets/img/scratch.png'
import microbit from '../assets/img/microbit.png'
import bootup from '../assets/img/bootup.png'
import devtech from '../assets/img/devtech.png'
import sphero from '../assets/img/sphero.png'
import pixio from '../assets/img/pixio.png'

const partners = [
  { src: partnerCodeorg, alt: 'Code.org' },
  { src: cmucsacademy, alt: 'CMU CS Academy' },
  { src: bootup, alt: 'BootUp' },
  { src: scratch, alt: 'Scratch' },
  { src: microbit, alt: 'micro:bit' },
  { src: devtech, alt: 'DevTech' },
  { src: sphero, alt: 'Sphero' },
  { src: pixio, alt: 'Pixio' },
]

const stats = [
  { value: '110,000', label: 'АНУ дахь багш нар', detail: 'Зөвхөн АНУ-д гэхэд Code.org Professional Learning хөтөлбөрөөр 110 мянга гаруй багшийг мэргэшүүлээд байна.' },
  { value: '58%', label: 'Шинээр мэргэшиж буй багш нар', detail: 'Эдгээр 110 гаруй багшийн 58% нь шинээр компьютерийн ухаан хичээлийг заахаар мэргэшиж буй багш нар байна.' },
  { value: '37', label: 'Girl coders' },
  { value: '100', label: 'Positive Facebook review' },
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
  <section class="section section--alt">
    <div class="container">
      <h2 class="section-title">Компьютерын ухааны цогц хөтөлбөр</h2>
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

  <section class="hero">
    <div class="container hero__grid">
      <article class="hero__card">
        <h2>Ахлах/дунд ангийнхны хөтөлбөр</h2>
        <p>
          АНУ-ын топ их сургууль Carnegie Mellon University-ын нэг сарын
          эрчимжүүлсэн хөтөлбөрт суралцсанаар Python хэл ашиглан өөрийн
          төслийг бүтээх боломж
        </p>
        <a :href="registerFormUrl" target="_blank" rel="noopener" class="btn btn--primary">Бүртгүүлэх</a>
      </article>

      <article class="hero__card">
        <h2>Бага ангийн кодчлол</h2>
        <p>
          Дэлхийн өндөр хөгжилтэй орнуудад кодчлол ба тооцоолох сэтгэлгээг
          бага ангиас нь эхлэн зааж байна. Блок кодчлол сурсан хүүхэд бусад
          хичээлийн гүйцэтгэл сайжирч буй нь судалгаагаар батлагдсан билээ.
        </p>
        <a
          href="https://codercub.medium.com/%D0%BA%D0%BE%D0%B4-%D1%81%D1%83%D1%80%D0%B0%D1%85%D1%8B%D0%BD-%D0%B0%D1%87-%D1%85%D0%BE%D0%BB%D0%B1%D0%BE%D0%B3%D0%B4%D0%BE%D0%BB-8b0326469de"
          target="_blank"
          rel="noopener"
          class="btn btn--outline"
        >
          Ач холбогдлын тухай унших
        </a>
      </article>
    </div>
  </section>

  <section class="section partners">
    <div class="container">
      <h2 class="section-title">Partners</h2>
      <div class="partners__row">
        <img v-for="p in partners" :key="p.alt" :src="p.src" :alt="p.alt" />
      </div>
    </div>
  </section>

  <section class="section section--alt stats">
    <div class="container">
      <h2 class="section-title">Багшийн тухай сонирхолтой тоо баримт</h2>
      <p class="stats__subtitle">Some of the stats we're proud of…</p>
      <div class="stats__grid">
        <div v-for="s in stats" :key="s.label" class="stat">
          <div class="stat__value">{{ s.value }}</div>
          <div class="stat__label">{{ s.label }}</div>
          <p v-if="s.detail" class="stat__detail">{{ s.detail }}</p>
        </div>
      </div>
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

</template>

<style scoped>
.hero {
  background: linear-gradient(120deg, var(--color-navy), #0a3a63);
  padding: 60px 0;
}

.hero__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
}

.hero__card {
  background: #fff;
  border-radius: 8px;
  padding: 32px;
  border-top: 4px solid var(--color-primary);
}

.hero__card h2 {
  margin-bottom: 0.5em;
}

.hero__card p {
  color: var(--color-muted);
  margin-bottom: 1.2em;
}

.partners__row {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  align-items: center;
  justify-content: center;
}

.partners__row img {
  height: 60px;
  width: auto;
  object-fit: contain;
}

.stats__subtitle {
  text-align: center;
  color: var(--color-muted);
  margin-top: -1rem;
  margin-bottom: 2rem;
}

.stats__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 24px;
}

.stat {
  text-align: center;
  background: #fff;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
}

.stat__value {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-accent);
}

.stat__label {
  font-family: var(--font-heading);
  font-weight: 600;
  margin: 0.3em 0;
}

.stat__detail {
  font-size: 0.85rem;
  color: var(--color-muted);
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
