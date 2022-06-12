<!-- non-tailwind predefined classes are custom classes defined in the Styles.css file -->

<template>
  <div>
    <div class="sticky top-0">
      <div>
        <NavsLargeNav text="Add group participants">
          <img
            src="~/assets/icons/back-icon.png"
            alt="back"
            class="mr-7 cursor-pointer"
            @click="$emit('closeNewChat')"
          />
        </NavsLargeNav>
      </div>
      <SearchBar placeholder="Search contacts"></SearchBar>
    </div>

    <div class="overflow-scroll messages" ref="messageList">
      <ul>
        <li></li>
        <Messages
          v-for="(content, index) in sortedContacts"
          :key="index"
          :name="content.name"
          :last-chat="content.lastChat"
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
          lastChat: "Hey there! I am using WhatsApp",
        },
        {
          name: "Dan😎",
          lastChat: "✋there I am Daniel a Software Engineer",
        },
        {
          name: "Pheivor",
          lastChat: "God is not dead... He is surely alive💯",
        },
        {
          name: "Soap Person",
          lastChat: "FunGuys & C2C COSMETICS",
        },
        {
          name: "Xtacy",
          lastChat: "Babe, you dey center",
        },
        {
          name: "ShadowNetz",
          lastChat: "My GHOST protocol",
        },
        {
          name: "AdoraHack",
          lastChat: "",
        },
        {
          name: "Shuga",
          lastChat: "Own your experience",
        },
        {
          name: "Xtacy",
          lastChat: "Babe, you dey center",
        },
        {
          name: "2nd S",
          lastChat: "I'm cold❤",
        },
        {
          name: "Honour's Dan",
          lastChat: "Stellar Dev😎😉",
        },
        {
          name: "McJovial",
          lastChat: "Dream💻🎭",
        },
        {
          name: "Angel Nxt Door",
          lastChat: "Too dark to be shaded🖤🧡",
        },
      ],
    };
  },

  computed: {
    sortedContacts() {
      return this.messageContent.sort(this.sorter);
    },
  },

  methods: {
    sorter(a, b) {
      if (a.name > b.name) {
        return 1;
      } else {
        return -1;
      }
    },
  },
};
</script>

<style></style>
