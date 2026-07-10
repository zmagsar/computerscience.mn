<script setup>
import { ref } from 'vue'
import { registerFormUrl } from '../data/contact'

const navLinks = [
  { to: '/about/', label: 'About' },
  { to: '/admissions/', label: 'Admissions' },
  { to: '/programs/', label: 'Programs' },
  { to: '/hourofcode/', label: 'Hour of Code' },
]

const menuOpen = ref(false)
</script>

<template>
  <header class="site-header">
    <div class="container site-header__inner">
      <router-link to="/" class="brand" @click="menuOpen = false">
        <span class="brand__text">
          <strong>Компьютерын ухааны цогц хөтөлбөр</strong>
          <small>Powered by Codercub</small>
        </span>
      </router-link>

      <button
        class="menu-toggle"
        type="button"
        :aria-expanded="menuOpen"
        aria-label="Toggle navigation"
        @click="menuOpen = !menuOpen"
      >
        <span></span><span></span><span></span>
      </button>

      <nav class="site-nav" :class="{ 'site-nav--open': menuOpen }">
        <router-link
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="site-nav__link"
          @click="menuOpen = false"
        >
          {{ link.label }}
        </router-link>
        <a :href="registerFormUrl" target="_blank" rel="noopener" class="btn btn--primary site-nav__cta">
          Бүртгүүлэх
        </a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  border-bottom: 1px solid var(--color-border);
  background: #fff;
  position: sticky;
  top: 0;
  z-index: 50;
}

.site-header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 14px;
  padding-bottom: 14px;
  gap: 24px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--color-navy);
}

.brand:hover {
  text-decoration: none;
}

.brand__text {
  display: flex;
  flex-direction: column;
  font-family: var(--font-heading);
  line-height: 1.2;
}

.brand__text small {
  color: var(--color-muted);
  font-weight: 400;
  font-size: 0.75rem;
}

.site-nav {
  display: flex;
  align-items: center;
  gap: 24px;
}

.site-nav__link {
  font-family: var(--font-heading);
  font-weight: 600;
  color: var(--color-navy);
}

.site-nav__link:hover,
.site-nav__link.router-link-active {
  color: var(--color-primary);
  text-decoration: none;
}

.site-nav__cta {
  padding: 10px 20px;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
}

.menu-toggle span {
  width: 24px;
  height: 2px;
  background: var(--color-navy);
}

@media (max-width: 860px) {
  .menu-toggle {
    display: flex;
  }

  .site-nav {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: #fff;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px 20px 24px;
    border-bottom: 1px solid var(--color-border);
    display: none;
  }

  .site-nav--open {
    display: flex;
  }

  .site-nav__cta {
    margin-top: 8px;
  }
}
</style>
