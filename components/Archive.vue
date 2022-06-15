<!-- non-tailwind predefined classes are custom classes defined in the Styles.css file -->

<template>
  <div>
    <div class="sticky top-0">
      <div>
        <NavsLargeNav navTitle="Archived">
          <img
            src="~/assets/icons/back-icon.png"
            alt="back"
            class="mr-7 cursor-pointer"
            @click="
              () => {
                $store.commit('toggleArchive');
              }
            "
          />
        </NavsLargeNav>
      </div>
    </div>

    <div class="overflow-scroll messages">
      <ul>
        <Messages
          v-for="(content, index) in messageContent"
          :key="index"
          :name="content.name"
          :time="content.time"
          :last-chat="content.lastChat"
          :unread="content.unread"
        ></Messages>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["click"],
  data() {
    return {
      messageContent: [
        {
          name: "Sopuluchukwu",
          time: "3:38pm",
          lastChat: "Wait Kosi is calling",
          unread: 4,
        },
        {
          name: "Dan😎",
          time: "2:38pm",
          lastChat: "Network is just frustrating",
          unread: 2,
        },
        {
          name: "Pheivor",
          time: "now",
          lastChat: "Sticker",
          unread: 1,
        },
        {
          name: "Soap Person",
          time: "2:38pm",
          lastChat: "Network is just frustrating",
        },
        {
          name: "Xtacy",
          time: "yesterday",
          lastChat: "Babe, you dey center",
        },
        {
          name: "Xtacy",
          time: "yesterday",
          lastChat: "Babe, you dey center",
        },
        {
          name: "Xtacy",
          time: "yesterday",
          lastChat: "Babe, you dey center",
        },
        {
          name: "Xtacy",
          time: "yesterday",
          lastChat: "Babe, you dey center",
        },
        {
          name: "Xtacy",
          time: "yesterday",
          lastChat: "Babe, you dey center",
        },
        {
          name: "Xtacy",
          time: "yesterday",
          lastChat: "Babe, you dey center",
        },
        {
          name: "Xtacy",
          time: "yesterday",
          lastChat: "Babe, you dey center",
        },
        {
          name: "Xtacy",
          time: "yesterday",
          lastChat: "Babe, you dey center",
        },
        {
          name: "Xtacy",
          time: "yesterday",
          lastChat: "Babe, you dey center",
        },
        {
          name: "Xtacy",
          time: "yesterday",
          lastChat: "Babe, you dey center",
        },
      ],
    };
  },
};
</script>

<style></style>
