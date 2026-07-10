<script setup>
import { contact } from '../data/contact'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div class="container site-footer__inner">
      <div>
        <h4>Холбогдох</h4>
        <p>{{ contact.address }}</p>
        <p>{{ contact.phone }}</p>
        <p><a :href="`mailto:${contact.email}`">{{ contact.email }}</a></p>
      </div>

      <div class="site-footer__social">
        <a :href="contact.facebook" target="_blank" rel="noopener" aria-label="Facebook">Facebook</a>
        <a :href="contact.x" target="_blank" rel="noopener" aria-label="X">X</a>
        <a :href="contact.youtube" target="_blank" rel="noopener" aria-label="YouTube">YouTube</a>
      </div>
    </div>
    <div class="site-footer__copyright">
      Copyright &copy; 2018-{{ year }} Codercub
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background: var(--color-navy);
  color: #cdd6e0;
  margin-top: 40px;
}

.site-footer__inner {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 24px;
  padding: 40px 20px;
}

.site-footer h4 {
  color: #fff;
  margin-bottom: 12px;
}

.site-footer p {
  margin: 4px 0;
}

.site-footer a {
  color: #cdd6e0;
}

.site-footer a:hover {
  color: var(--color-primary);
}

.site-footer__social {
  display: flex;
  gap: 16px;
  align-items: flex-start;
  font-family: var(--font-heading);
  font-weight: 600;
}

.site-footer__copyright {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  padding: 16px;
  font-size: 0.85rem;
  color: #8fa1b3;
}
</style>
