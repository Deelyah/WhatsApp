<!-- non-tailwind predefined classes are custom classes defined in the Styles.css file -->
<template>
  <li class="flex items-center">
    <img src="~/assets/display-pic.png" alt="avatar" class="pl-3 pr-4 py-3" />
    <div class="pr-4 w-full faint-bottom-border py-3">
      <div class="flex items-center">
        <p class="main-text-color text-lg">{{ name }}</p>
        <p :class="`${chatHasBeenRead} ml-auto text-xs`">{{ time }}</p>
      </div>
      <div class="flex">
        <div class="flex">
          <img src="" alt="" />
          <p class="minor-text-color text-sm">{{ lastChat }}</p>
        </div>
        <div
          v-if="unread"
          class="w-5 h-5 rounded-full bg-whatsapp-green ml-auto flex justify-center items-center"
        >
          <p class="text-dark-green1 text-xs">{{ unread }}</p>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: ["name", "lastChat", "time", "unread"],
  computed: {
    chatHasBeenRead() {
      if (this.unread) {
        return "text-whatsapp-green";
      } else {
        return "minor-text-color";
      }
    },
  },
};
</script>

<style></style>
