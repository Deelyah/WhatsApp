<!-- non-tailwind predefined classes are custom classes defined in the Styles.css file -->

<template>
  <div>
    <div class="sticky top-0">
      <div>
        <NavsMiniNav>
          <NavsDefaultNavBar
            @click="$emit('openNewChat')"
            @openProfileSection="$emit('openProfile')"
            @createGroup="$emit('createNewGroup')"
          ></NavsDefaultNavBar>
        </NavsMiniNav>
        <SearchBar placeholder="Search or start new chat"></SearchBar>
      </div>
    </div>

    <div class="overflow-scroll messages">
      <div
        class="flex items-center cursor-pointer"
        @click="$emit('openArchive')"
      >
        <img
          src="~/assets/icons/archive-icon.png"
          alt="archive icon"
          class="pl-3 pr-4"
        />
        <div class="flex faint-bottom-border w-full py-2.5 pr-4 items-center">
          <p class="main-text-color text-lg">Archived</p>
          <p class="text-whatsapp-green text-xs p-2 ml-auto">6</p>
        </div>
      </div>
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
