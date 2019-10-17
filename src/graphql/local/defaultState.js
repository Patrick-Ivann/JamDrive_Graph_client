export   const defaults = {
  store: {
    id: 'local',
    field: 'This is a string',
    __typename: 'Store',
  },
  userStore: {
    id: "local_userStore",
    userData: null,
    __typename: "UserStore"
  },
  filterStore: {
    id: "local_filterStore",
    filterWord: "",
    __typename: "FilterStore"
  },
  themeStore: {
    id: "local_themeStore",
    theme: false,
    __typename: "ThemeStore"
  }
}

export const defaultLocalAppoloState = (cache) => {
  const defaults = {
    store: {
      id: 'local',
      field: 'This is a string',
      __typename: 'Store',
    },
    userStore: {
      id: "local_userStore",
      userData: null,
      __typename: "UserStore"
    },
    filterStore: {
      id: "local_filterStore",
      filterWord: "",
      __typename: "FilterStore"
    },
    themeStore: {
      id: "local_themeStore",
      theme: false,
      __typename: "ThemeStore"
    }
  }
  cache.writeData({
    data: defaults,
  });
}