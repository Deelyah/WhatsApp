<!-- non-tailwind predefined classes are custom classes defined in the Styles.css file -->
<template>
  <div class="pl-6 pr-4 pt-12 nav-bg-green">
    <div class="py-4 flex items-end">
     <div class="flex items-center">
            <slot></slot>
            <h1 class="text-xl text-archive-color cursor-default">{{text}}</h1>
          </div>
      <!-- <p class="minor-text-color">Hello world</p> -->
    </div>
  </div>
</template>

<script>
export default {
  props: ["text"]
};
</script>

<style></style>
