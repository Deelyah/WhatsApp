<template>
  <div>
    <section v-if="$store.getters.archiveState">
      <Archive></Archive>
    </section>
    <section v-else-if="$store.getters.newChatState">
      <NewChat></NewChat>
    </section>
    <section v-else-if="$store.getters.profileState">
      <Profile></Profile>
    </section>
    <section v-else-if="$store.getters.newGroupChatState">
      <NewGroup></NewGroup>
    </section>
    <section v-else>
      <SettingsColumn></SettingsColumn>
    </section>
  </div>
</template>

<script>
import SettingsColumn from "./SettingsColumn.vue";
export default { components: { SettingsColumn } };
</script>

<style></style>
<!-- default-fullscreen contains: 
    (1) all possible side cloumns that do not need the other part of the screen to exist
    example: the default side menu containing all messages, newChat component, newGroup component etc which are rendered conditionally
    (2) and also the other side 2/3% of the screen e.g the default page when you open the site for the first time,
    the page which shows your text (your dm) with each person -->
