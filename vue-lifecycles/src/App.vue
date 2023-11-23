<template>
  <div id="app">
    <!-- Before Create -->
    <before-create v-show="showBeforeCreateComponent"></before-create>
    <button @click="toggleComponent('BeforeCreate')">
      {{ buttonLabel('BeforeCreate') }}
    </button>
    <br>
    <!-- End Before Create -->
    <!-- Created -->
    <created v-if="showCreatedComponent"></created>
    <button @click="toggleComponent('Created')">
      {{ buttonLabel('Created') }}
    </button>
    <br>
    <!-- End Created -->
    <!-- Before Mount -->
    <before-mount v-if="showBeforeMountComponent"></before-mount>
    <button @click="toggleComponent('BeforeMount')">
      {{ buttonLabel('BeforeMount') }}
    </button>
    <br>
    <!-- End Before Mount -->
    <!-- Mounted -->
    <mounted v-if="showMountedComponent"></mounted>
    <button @click="toggleComponent('Mounted')">
      {{ buttonLabel('Mounted') }}
    </button>
    <br>
    <!-- End Mounted -->
    <!-- Before Update -->
    <before-update v-if="showBeforeUpdateComponent"></before-update>
    <ul ref="list">
    </ul>
    <button @click="toggleComponent('BeforeUpdate')">
      {{ buttonLabel('BeforeUpdate') }}
    </button>
    <br>
    <!-- End Before Update -->
    <!-- Updated -->
    <updated v-if="showUpdatedComponent"></updated>
    <button @click="toggleComponent('Updated')">
      {{ buttonLabel('Updated') }}
    </button>
    <br>
    <!-- End Updated -->
    <!-- Before Unmount -->
    <before-unmount v-if="showBeforeUnmountComponent"></before-unmount>
    <button @click="toggleComponent('BeforeUnmount')">
      {{ buttonLabel('BeforeUnmount') }}
    </button>
    <br>
    <!-- End Before Unmount -->
    <!-- Unmounted -->
    <unmounted v-if="showUnmountedComponent"></unmounted>
    <button @click="toggleComponent('Unmounted')">
      {{ buttonLabel('Unmounted') }}
    </button>
    <br>
    <!-- End Unmounted -->
  </div>
</template>

<script>
import BeforeCreate from './components/BeforeCreate';
import Created from './components/Created';
import BeforeMount from './components/BeforeMount';
import Mounted from './components/Mounted';
import BeforeUpdate from './components/BeforeUpdate';
import Updated from './components/Updated';
import BeforeUnmount from './components/BeforeUnmount';
import Unmounted from './components/Unmounted';

export default {
  name: 'App',
  components: {
    BeforeCreate,
    Created,
    BeforeMount,
    Mounted,
    BeforeUpdate,
    Updated,
    BeforeUnmount,
    Unmounted,
  },
  data() {
    return {
      showBeforeCreateComponent: false,
      showCreatedComponent: false,
      showBeforeMountComponent: false,
      showMountedComponent: false,
      showBeforeUpdateComponent: false,
      showUpdatedComponent: false,
      showBeforeUnmountComponent: false,
      showUnmountedComponent: false,
    }
  },
  beforeUpdate() {
    console.log("beforeUpdate: This happened just before the 'updated' hook.");
    this.$refs.list.innerHTML = `<li>beforeUpdate: This happened just before the 'updated' hook.</li>`;
  },
  updated() {
    console.log("The App component is updated!");
  },
  methods: {
    toggleComponent(lifeCycle) {
      this[`show${lifeCycle}Component`] = !this[`show${lifeCycle}Component`];
    },
    buttonLabel(lifeCycle) {
      return this[`show${lifeCycle}Component`] ? `Hide ${lifeCycle} Component` : `Show ${lifeCycle} Component`;
    }
  }
}
</script>

<style></style>
