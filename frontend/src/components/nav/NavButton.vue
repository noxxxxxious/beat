<template>
  <div :class="classes">
    <div>{{ label }}</div>
  </div>
</template>

<script>
export default {
  name: "NavButton",
  props: {
    label: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    classes(){
      let classes = ["step"]
      if(this.isActive){
        classes.push("active")
      }
      return classes.join(" ")
    }
  }
};
</script>

<style scoped>
.step {
  display: inline-block;
  width: 125px;
  text-align: center;
  padding: 10px 5px;
  background-color: #aaa;
  color: #555;
  border-radius: 7px;
}

.active {
  background-color: #ddd;
  color: #222;
}
</style>