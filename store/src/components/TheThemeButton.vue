<template>
    <div class="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle">
      <button class="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center"
              id="bd-theme"
              type="button"
              aria-expanded="false"
              data-bs-toggle="dropdown"
              aria-label="Toggle theme (auto)">
        <i width="1em" height="1em" class="bi me-2 opacity-50 theme-icon theme-icon-active" :class="selectedThemeIcon">
          <use width="1em" height="1em" href="#circle-half"></use>
        </i>
        <span class="visually-hidden" id="bd-theme-text">Toggle theme</span>
      </button>
      <ul class="dropdown-menu dropdown-menu-end shadow" aria-labelledby="bd-theme-text">
        <li>
          <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="light" aria-pressed="false" @click="useActiveThemeIcon('bi-brightness-high')">
            <i width="1em" height="1em" class="bi me-2 opacity-50 theme-icon bi-brightness-high"></i>
            Light
            <svg class="bi ms-auto d-none" width="1em" height="1em"><use href="#check2"></use></svg>
          </button>
        </li>
        <li>
          <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="dark" aria-pressed="false" @click="useActiveThemeIcon('bi-moon')">
            <i width="1em" height="1em" class="bi me-2 opacity-50 theme-icon bi-moon"></i>
            Dark
            <svg class="bi ms-auto d-none" width="1em" height="1em"><use width="1em" height="1em" href="#check2"></use></svg>
          </button>
        </li>
        <li>
          <button type="button" class="dropdown-item d-flex align-items-center active" data-bs-theme-value="auto" aria-pressed="true" @click="useActiveThemeIcon('bi-circle-half')">
            <i width="1em" height="1em" class="bi me-2 opacity-50 theme-icon bi-circle-half"></i>
            Auto
            <svg class="bi ms-auto d-none" width="1em" height="1em"><use href="#check2"></use></svg>
          </button>
        </li>
      </ul>
    </div>
</template>
<script>
export default {
    name: "TheThemeButton",
    data() {
      return {
        selectedThemeIcon: "bi-brightness-high"
      }
    },
    methods: {
      useActiveThemeIcon(themeIcon) {
        this.selectedThemeIcon = themeIcon;
      }
    }
}
</script>