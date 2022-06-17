<template>
  <div class="log-out fixed inset-0 z-20 flex justify-center items-center">
    <div class="p-5 inner-container rounded-sm">
      <div>
        <h1 class="mb-5 text-xl dropdown-text">Log out?</h1>
        <p class="text-sm dropdown-text">Are you sure you want to log out?</p>
      </div>
      <div class="pt-12 flex justify-end">
        <button
          type="button"
          @click="
            () => {
              $store.commit('toggleLogOut');
            }
          "
          class="cancel-btn text-sm py-2.5 px-6 font-semibold text-whatsapp-green bg-transparent"
        >
          CANCEL
        </button>
        <button
          type="button"
          class="log-out-btn text-sm py-2.5 px-6 ml-1 font-semibold text-dark-green1 bg-whatsapp-green"
        >
          LOG OUT
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.inner-container {
  width: 500px;
  min-width: 500px;
}

.log-out {
  background-color: rgba(0, 0, 0, 0.85);
}

.inner-container {
  background-color: #3b4a54;
}

.cancel-btn {
  border-radius: 3px;
  border: 1px solid transparent;
  border-color: #8696a026;
  transition: box-shadow 0.18s ease-out, background 0.18s ease-out,
    color 0.18s ease-out;
}

.cancel-btn:hover {
  background-color: #e9edef0d;
  box-shadow: 0px 2px 7px rgba(11, 20, 26, 0.09),
    0px 1px 2px rgba(11, 20, 26, 0.05);
}

.log-out-btn {
  letter-spacing: 1.25px;
  border-radius: 3px;
  transition: box-shadow 0.18s ease-out, background 0.18s ease-out,
    color 0.18s ease-out;
}

.log-out-btn:hover {
  box-shadow: 0px 2px 7px rgba(11, 20, 26, 0.09),
    0px 1px 2px rgba(11, 20, 26, 0.05);
  background-color: #06cf9c;
}
</style>
