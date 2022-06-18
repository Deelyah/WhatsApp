<template>
  <div>
    <div class="sticky top-o">
      <NavsLargeNav navTitle="Settings">
        <img
          src="~/assets/icons/back-icon.png"
          alt="back"
          class="mr-7 cursor-pointer"
          @click="
            () => {
              $store.commit('toggleSettings');
            }
          "
        />
      </NavsLargeNav>
    </div>
    <div class="overflow-scroll messages">
      <ul>
        <li
          class="flex items-center w-full"
          @click="
            () => {
              $store.commit('toggleProfile');
            }
          "
        >
          <div class="py-4 px-5">
            <img
              src="~/assets/largest-dp.png"
              alt="Profile picture"
              height="82px"
              width="82px"
            />
          </div>
          <div class="flex flex-col justify-center">
            <h1 class="text-xl main-text-color">Delia</h1>
            <p class="text-sm minor-text-color">
              Hey there! I am using WhatsApp
            </p>
          </div>
        </li>
        <li v-for="(items, index) in settings" :key="index" class="flex">
          <div class="flex items-center px-6 py-4">
            <img src="~/assets/icons/desktop-icon.svg" alt="icon" />
          </div>
          <p class="main-text-color w-4/5 text-lg py-4 faint-bottom-border">
            {{ items.name }}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      settings: [
        { name: "Notifications" },
        { name: "Privacy" },
        { name: "Security" },
        { name: "Theme" },
        { name: "Chat wallpaper" },
        { name: "Request Account Info" },
        { name: "Keyboard Shortcuts" },
        { name: "help" },
      ],
    };
  },
};
</script>

<style></style>
