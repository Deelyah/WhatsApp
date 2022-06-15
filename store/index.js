export const state = () => {
  return {
    sideColumnIsVisible: true,
    newChatIsVisible: false,
    archiveIsVisible: false,
    profileIsVisible: false,
    newGroupChat: false,
  };
};

export const mutations = {
  toggleNewChat(state) {
    state.newChatIsVisible = !state.newChatIsVisible;
    state.sideColumnIsVisible = !state.sideColumnIsVisible;
    console.log("new chat");
  },
  toggleArchive(state) {
    state.archiveIsVisible = !state.archiveIsVisible;
    state.sideColumnIsVisible = !state.sideColumnIsVisible;
    console.log("archive");
  },
  toggleProfile(state) {
    state.profileIsVisible = !state.profileIsVisible;
    state.sideColumnIsVisible = !state.sideColumnIsVisible;
    console.log("profile");
  },
  toggleNewGroup(state) {
    state.newGroupChat = !state.newGroupChat;
    state.sideColumnIsVisible = !state.sideColumnIsVisible;
    console.log("new group");
  },
};

export const getters = {
  sideColumnState(state) {
    return state.sideColumnIsVisible;
  },
  newChatState(state) {
    return state.newChatIsVisible;
  },
  archiveState(state) {
    return state.archiveIsVisible;
  },
  profileState(state) {
    return state.profileIsVisible;
  },
};
