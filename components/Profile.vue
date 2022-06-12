<!-- non-tailwind predefined classes are custom classes defined in the Styles.css file -->

<template>
  <div>
    <div class="sticky top-0">
      <div>
        <NavsLargeNav text="Profile">
          <img
            src="~/assets/icons/back-icon.png"
            alt="back"
            class="mr-7 cursor-pointer"
            @click="$emit('closeProfile')"
          />
        </NavsLargeNav>
      </div>
    </div>

    <div class="flex flex-col overflow-scroll messages">
      <button class="flex justify-center items-center w-full my-7">
        <img src="~/assets/largest-dp.png" alt="Profile picture" />
      </button>
      <div class="name py-3 px-7 mb-2.5">
        <p class="text-sm text-whatsapp-green">Your name</p>
        <div class="flex justify-between my-2">
          <h3 class="dropdown-text">Delia</h3>
          <div>
            <button
              v-if="!nameIsBeingEdited"
              title="Click to edit"
              @click="editName"
            >
              <span data-testid="pencil" data-icon="pencil" class="_27Yui"
                ><svg viewBox="0 0 24 24" width="24" height="24">
                  <path
                    fill="#AEBAC1"
                    d="M3.95 16.7v3.4h3.4l9.8-9.9-3.4-3.4-9.8 9.9zm15.8-9.1c.4-.4.4-.9 0-1.3l-2.1-2.1c-.4-.4-.9-.4-1.3 0l-1.6 1.6 3.4 3.4 1.6-1.6z"
                  ></path></svg
              ></span>
            </button>
            <div v-else>
              <button>
                <span
                  data-testid="emoji-input"
                  data-icon="emoji-input"
                  class="_27Yui"
                  ><svg viewBox="0 0 20 20" width="20" height="20" class="">
                    <path
                      fill="#AEBAC1"
                      d="M9.5 1.7C4.8 1.7 1 5.5 1 10.2s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5zm0 15.9c-4.1 0-7.4-3.3-7.4-7.4s3.3-7.4 7.4-7.4 7.4 3.3 7.4 7.4-3.3 7.4-7.4 7.4z"
                    ></path>
                    <path
                      fill="#AEBAC1"
                      d="M6.8 9.8c.7-.1 1.2-.7 1.1-1.4-.1-.6-.5-1.1-1.1-1.1-.7 0-1.2.7-1.1 1.4 0 .6.5 1 1.1 1.1zM13.9 11.6c-1.4.2-2.9.3-4.4.4-1.5 0-2.9-.1-4.4-.4-.2 0-.4.1-.4.3v.2c.9 1.8 2.7 2.9 4.7 3 2-.1 3.8-1.2 4.8-3 .1-.2 0-.4-.1-.5h-.2zm-4.1 2c-2.3 0-3.5-.8-3.7-1.4 2.3.4 4.6.4 6.9 0 0 .1-.4 1.4-3.2 1.4zM12.2 9.8c.7-.1 1.2-.7 1.1-1.4-.1-.6-.5-1.1-1.1-1.1-.7 0-1.2.7-1.1 1.4.1.6.5 1 1.1 1.1z"
                    ></path></svg
                ></span>
              </button>
              <button @click="editName">
                <span
                  data-testid="checkmark"
                  data-icon="checkmark"
                  class="_27Yui"
                  ><svg viewBox="0 0 24 24" width="24" height="24" class="">
                    <path
                      fill="#AEBAC1"
                      d="m9 17.2-4-4-1.4 1.3L9 19.9 20.4 8.5 19 7.1 9 17.2z"
                    ></path></svg
                ></span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="py-3 pl-7 pr-8 mb-7">
        <p class="text-sm minor-text-color">
          This is not your username or pin. This name will be visible to your
          WhatsApp contacts
        </p>
      </div>
      <div class="py-3 px-7 mb-2.5">
        <p class="text-sm text-whatsapp-green">About</p>
        <div class="flex justify-between my-2">
          <h3
            class="dropdown-text focus:outline-none"
            contenteditable="true"
            @mouseleave="editContent"
          >
            {{ content }}
          </h3>
          <div>
            <button
              v-if="!aboutIsBeingEdited"
              title="Click to edit"
              class="ml-auto"
              @click="editAbout"
            >
              <span data-testid="pencil" data-icon="pencil" class="_27Yui"
                ><svg viewBox="0 0 24 24" width="24" height="24" class="">
                  <path
                    fill="#AEBAC1"
                    d="M3.95 16.7v3.4h3.4l9.8-9.9-3.4-3.4-9.8 9.9zm15.8-9.1c.4-.4.4-.9 0-1.3l-2.1-2.1c-.4-.4-.9-.4-1.3 0l-1.6 1.6 3.4 3.4 1.6-1.6z"
                  ></path></svg
              ></span>
            </button>
            <div v-else>
              <button>
                <span
                  data-testid="emoji-input"
                  data-icon="emoji-input"
                  class="_27Yui"
                  ><svg viewBox="0 0 20 20" width="20" height="20" class="">
                    <path
                      fill="#AEBAC1"
                      d="M9.5 1.7C4.8 1.7 1 5.5 1 10.2s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5zm0 15.9c-4.1 0-7.4-3.3-7.4-7.4s3.3-7.4 7.4-7.4 7.4 3.3 7.4 7.4-3.3 7.4-7.4 7.4z"
                    ></path>
                    <path
                      fill="#AEBAC1"
                      d="M6.8 9.8c.7-.1 1.2-.7 1.1-1.4-.1-.6-.5-1.1-1.1-1.1-.7 0-1.2.7-1.1 1.4 0 .6.5 1 1.1 1.1zM13.9 11.6c-1.4.2-2.9.3-4.4.4-1.5 0-2.9-.1-4.4-.4-.2 0-.4.1-.4.3v.2c.9 1.8 2.7 2.9 4.7 3 2-.1 3.8-1.2 4.8-3 .1-.2 0-.4-.1-.5h-.2zm-4.1 2c-2.3 0-3.5-.8-3.7-1.4 2.3.4 4.6.4 6.9 0 0 .1-.4 1.4-3.2 1.4zM12.2 9.8c.7-.1 1.2-.7 1.1-1.4-.1-.6-.5-1.1-1.1-1.1-.7 0-1.2.7-1.1 1.4.1.6.5 1 1.1 1.1z"
                    ></path></svg
                ></span>
              </button>
              <button @click="editAbout">
                <span
                  data-testid="checkmark"
                  data-icon="checkmark"
                  class="_27Yui"
                  ><svg viewBox="0 0 24 24" width="24" height="24" class="">
                    <path
                      fill="#AEBAC1"
                      d="m9 17.2-4-4-1.4 1.3L9 19.9 20.4 8.5 19 7.1 9 17.2z"
                    ></path></svg
                ></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      aboutIsBeingEdited: false,
      nameIsBeingEdited: false,
      displayBorder: false,
      content: "Hey there! I am using WhatsApp",
    };
  },
  methods: {
    editName() {
      this.nameIsBeingEdited = !this.nameIsBeingEdited;
    },
    editAbout() {
      this.aboutIsBeingEdited = !this.aboutIsBeingEdited;
    },
    editContent(e) {
      this.content = e.target.innerHTML;
      console.log(e.target.innerHTML);
    },
  },
};
</script>

<style></style>
