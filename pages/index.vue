<!-- non-tailwind predefined classes are custom classes defined in the Styles.css file -->

<template>
  <div>
    <!-- conditional-fullscreen contains all views which span a width of 100% rendered e.g logout view, status view, etc -->
    <div id="conditional-fullscreen">
      <LogOut v-if="$store.getters.logOutState"></LogOut>
    </div>

    <!-- default-fullscreen contains: 
    (1) all possible side cloumns that do not need the other part of the screen to exist
    example: the default side menu containing all messages, newChat component, newGroup component etc which are rendered conditionally
    (2) and also the other side 2/3% of the screen e.g the default page when you open the site for the first time,
    the page which shows your text (your dm) with each person -->
    <div id="default-fullscreen">
      <div class="flex h-screen overflow-hidden">
        <div
          class="side-column w-1/3 bg-dark-green1 faint-right-border relative hidden"
        ></div>
        <div
          class="side-column w-1/3 bg-dark-green1 faint-right-border relative"
        >
          <!-- The div above contains 3 side columns to be displayed when various elements are clicked on -->
          <section v-if="$store.getters.sideColumnState">
            <!-- The default side column is to be displayed only when neither the "new chat" column nor the "archive" column is set to true-->
            <DefaultSideColumn></DefaultSideColumn>
          </section>
          <section v-else-if="$store.getters.archiveState">
            <Archive></Archive>
          </section>
          <section v-else-if="$store.getters.newChatState">
            <NewChat></NewChat>
          </section>
          <section v-else-if="$store.getters.profileState">
            <Profile></Profile>
          </section>
          <section v-else>
            <NewGroup></NewGroup>
          </section>
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
    </div>
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
