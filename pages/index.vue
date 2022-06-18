<!-- non-tailwind predefined classes are custom classes defined in the Styles.css file -->

<template>
  <div>
    <!-- conditional-fullscreen contains all views which span a width of 100% rendered e.g logout view, status view, etc -->
    <div id="conditional-fullscreen">
      <LogOut v-if="$store.getters.logOutState"></LogOut>
    </div>
    <div id="default-fullscreen">
      <div class="flex h-screen overflow-hidden">
        <div
          class="side-column w-1/3 bg-dark-green1 faint-right-border relative"
        >
          <!-- The div above contains 3 side columns to be displayed when various elements are clicked on -->
          <section v-if="$store.getters.sideColumnState">
            <!-- The default side column is to be displayed only when neither the "new chat" column nor the "archive" column is set to true-->
            <DefaultSideColumn></DefaultSideColumn>
          </section>
          <section>
            <RenderedSideColumn></RenderedSideColumn>
          </section>
        </div>
        <section
          class="major-column w-3/4 h-screen bg-dark-green2 flex justify-center items-center default-page-border"
        >
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
import RenderedSideColumn from "../components/RenderedSideColumn.vue";
export default {
  name: "IndexPage",
  computed: {
    getHeight() {
      // let height = Math.floor((this.width - 110) / 4);
      // return `h-${height}`;
    },
  },
  components: {
    SearchBar,
    Messages,
    DefaultPage,
    Archive,
    NewChat,
    Profile,
    RenderedSideColumn,
  },
  mounted() {
    // this.width = window.innerHeight;
    // this.$refs.messageList.clientHeight = this.width - 110
  },
};
</script>

<style scoped></style>
