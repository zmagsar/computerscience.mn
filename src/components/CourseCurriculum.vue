<script setup>
defineProps({
  units: { type: Array, required: true },
})
</script>

<template>
  <div class="curriculum">
    <div v-for="unit in units" :key="unit.title" class="curriculum__unit">
      <div class="curriculum__unit-header">
        <h4>{{ unit.title }}</h4>
        <span v-if="unit.hours" class="curriculum__hours">{{ unit.hours }} hrs</span>
      </div>
      <p v-if="unit.description" class="curriculum__description">{{ unit.description }}</p>
      <ul v-if="unit.lessons && unit.lessons.length">
        <li v-for="lesson in unit.lessons" :key="lesson">{{ lesson }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.curriculum__unit {
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 20px 24px;
  margin-bottom: 16px;
}

.curriculum__unit-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 12px;
}

.curriculum__unit-header h4 {
  margin: 0;
}

.curriculum__hours {
  font-family: var(--font-heading);
  font-weight: 600;
  color: var(--color-accent);
  white-space: nowrap;
}

.curriculum__description {
  color: var(--color-muted);
  margin: 8px 0;
}

.curriculum__unit ul {
  margin: 8px 0 0;
  padding-left: 20px;
  color: var(--color-muted);
}

.curriculum__unit li {
  margin-bottom: 4px;
}
</style>
