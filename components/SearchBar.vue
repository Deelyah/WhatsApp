<template>
  <div class="px-4 py-2 faint-bottom-border sticky top-0">
    <div class="nav-bg-green rounded-lg flex items-center">
      <button @click="search = !search" class="flex items-center">
        <div class="py-1.5 px-3 mr-3">
          <img
            src="~/assets/icons/search-icon.png"
            alt="search icon"
            v-if="search"
          />
          <img src="~/assets/icons/green-back-icon.png" alt="back" v-else />
        </div>
      </button>
      <input
        @focus="search = !search"
        :placeholder="placeholder"
        type="search"
        class="nav-bg-green w-3/4 text-sm focus:outline-none text-white"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["placeholder"],
  data() {
    return {
      search: true,
    };
  },
};
</script>

<style></style>
