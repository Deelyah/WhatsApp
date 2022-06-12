export const state = () => {
  return {
    newChatIsVisible: false,
    archiveIsVisible: false,
  };
};

export const mutations = {
  toggleNewChat() {
    state.newChatIsVisible = !state.newChatIsVisible;
  },
  toggleArchive() {
    state.archiveIsVisible = !state.archiveIsVisible;
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
