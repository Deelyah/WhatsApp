<template>
  <div class="absolute top-11 dropdown right-0 z-20 font-semibold">
    <ul
      class="bg-dropdown dropdown-text py-3 text-sm"
      @click="$emit('closeDropdown')"
    >
      <li>
        <button
          class="py-2.5 pl-6 pr-14 w-full text-left"
          @click="
            () => {
              $store.commit('toggleNewGroup');
            }
          "
        >
          New group
        </button>
      </li>
      <li>
        <button class="py-2.5 pl-6 pr-14 w-full text-left">
          Starred Messages
        </button>
      </li>
      <li>
        <button
          class="py-2.5 pl-6 pr-14 w-full text-left"
          @click="
            () => {
              $store.commit('toggleSettings');
            }
          "
        >
          Settings
        </button>
      </li>
      <li>
        <button
          @click="
            () => {
              $store.commit('toggleLogOut');
            }
          "
          class="py-2.5 pl-6 pr-14 w-full text-left"
        >
          Log out
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.dropdown {
  max-width: 194px;
  font-size: 15px;
  border-radius: 4px;
}

li:hover {
  background-color: #202c33;
}
</style>
