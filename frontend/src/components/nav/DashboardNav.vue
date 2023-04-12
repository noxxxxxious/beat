<template>
  <div class="dashboard">
    <div class="steps">
      <nav-button label="Organizations" :isActive="currentStep === 1" />
      <div class="spacer" />
      <nav-button label="Operation" :isActive="currentStep === 2" />
      <div class="spacer" />
      <nav-button label="Accounts" :isActive="currentStep === 3" />
      <div class="spacer" />
      <nav-button label="Review" :isActive="currentStep === 4" />
      <div class="spacer" />
      <nav-button label="Result" :isActive="currentStep === 5" />
    </div>
  </div>
</template>

<script>
import NavButton from "./NavButton.vue";

export default {
  name: "DashboardNav",
  components: {
    NavButton,
  },
  data() {
    return {
      currentStep: 2,
    };
  },
};
</script>

<style scoped>
  .steps {
    display: flex;
    align-items: center;
  }
  .spacer {
    height: 2px;
    width: 25px;
    background-color: #ddd;
  }
</style>