export const state = () => {
  return {
    sideColumnIsVisible: true,
    newChatIsVisible: false,
    archiveIsVisible: false,
    profileIsVisible: false,
    newGroupChat: false,
    logOutIsVisible: false,
    SettingsAreVisible: false,
  };
};

export const mutations = {
  toggleNewChat(state) {
    state.newChatIsVisible = !state.newChatIsVisible;
    state.sideColumnIsVisible = !state.sideColumnIsVisible;
  },
  toggleArchive(state) {
    state.archiveIsVisible = !state.archiveIsVisible;
    state.sideColumnIsVisible = !state.sideColumnIsVisible;
  },
  toggleProfile(state) {
    state.profileIsVisible = !state.profileIsVisible;
    state.sideColumnIsVisible = !state.sideColumnIsVisible;
  },
  toggleNewGroup(state) {
    state.newGroupChat = !state.newGroupChat;
    state.sideColumnIsVisible = !state.sideColumnIsVisible;
  },
  toggleLogOut(state) {
    state.logOutIsVisible = !state.logOutIsVisible;
    console.log(state.logOutIsVisible);
  },
  toggleSettings(state) {
    state.SettingsAreVisible = !state.SettingsAreVisible;
    state.sideColumnIsVisible = !state.sideColumnIsVisible;
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
  newGroupChatState(state) {
    return state.newGroupChat;
  },
  logOutState(state) {
    return state.logOutIsVisible;
  },
  settingsState(state) {
    return state.SettingsAreVisible;
  },
};
