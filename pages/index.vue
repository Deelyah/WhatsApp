<!-- non-tailwind predefined classes are custom classes defined in the Styles.css file -->

<template>
  <div class="flex h-screen overflow-hidden">
    <div class="side-column w-1/3 bg-dark-green1 faint-right-border relative">
      <Contacts class=""></Contacts>
    </div>
    <div
      class="side-column w-1/3 bg-dark-green1 faint-right-border relative hidden"
    >
      <!-- The div above contains 3 side columns to be displayed when various elements are clicked on -->
      <section
        v-if="!archiveIsVisible && !newChatIsVisible && !profileIsVisible"
      >
        <!-- The default side column is to be displayed only when neither the "new chat" column nor the "archive" column is set to true-->
        <DefaultSideColumn
          @openArchive="archiveIsVisible = !archiveIsVisible"
          @openNewChat="newChatIsVisible = !newChatIsVisible"
          @openProfile="profileIsVisible = !profileIsVisible"
          @createNewGroup="newGroup = !newGroup"
        ></DefaultSideColumn>
      </section>
      <section v-else-if="archiveIsVisible">
        <Archive @closeArchive="archiveIsVisible = !archiveIsVisible"></Archive>
      </section>
      <section v-else-if="newChatIsVisible">
        <NewChat @closeNewChat="newChatIsVisible = !newChatIsVisible"></NewChat>
      </section>
      <section v-else>
        <Profile @closeProfile="profileIsVisible = !profileIsVisible"></Profile>
      </section>
      <section></section>
    </div>
    <section
      class="major-column w-3/4 h-screen bg-dark-green2 flex justify-center items-center default-page-border"
    >
      <svg
        class="nxn8agaf kv6wexeh lhggkp7q"
        width="48"
        height="48"
        viewBox="0 0 104 104"
      >
        <circle
          cx="52"
          cy="52"
          r="50"
          fill="none"
          stroke-linecap="round"
          class="j9ny8kmf"
          stroke-width="4"
        ></circle>
      </svg>
      <DefaultPage></DefaultPage>
    </section>
  </div>
</template>

<script>
import SearchBar from "../components/SearchBar.vue";
import Messages from "../components/Messages.vue";
import DefaultPage from "../components/DefaultPage.vue";
import Archive from "../components/Archive.vue";
import NewChat from "../components/NewChat.vue";
import Profile from "../components/Profile.vue";
export default {
  name: "IndexPage",
  data() {
    return {
      archiveIsVisible: this.$store.getters.displayArchive,
      newChatIsVisible: false,
      profileIsVisible: false,
      newGroup: false,
    };
  },
  computed: {
    getHeight() {
      // let height = Math.floor((this.width - 110) / 4);
      // return `h-${height}`;
    },
  },
  components: { SearchBar, Messages, DefaultPage, Archive, NewChat, Profile },
  mounted() {
    // this.width = window.innerHeight;
    // this.$refs.messageList.clientHeight = this.width - 110
  },
};
</script>

<style scoped></style>
