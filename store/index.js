export const state = () => {
  return {
    sideColumnIsVisible: true,
    newChatIsVisible: false,
    archiveIsVisible: false,
    propfileIsVisible: false,
  };
};

export const mutations = {
  toggleNewChat() {
    state.newChatIsVisible = !state.newChatIsVisible;
    alert(state.newChatIsVisible);
  },
  toggleArchive() {
    state.archiveIsVisible = !state.archiveIsVisible;
  },
  toggleProfile() {
    state.propfileIsVisible = !state.propfileIsVisible;
  },
};

export const getters = {
  displayChat(state) {
    return state.newChatIsVisible;
  },
  displayArchive(state) {
    return state.archiveIsVisible;
  },
};
