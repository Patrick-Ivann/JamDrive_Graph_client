export const defaultLocalAppoloState = (cache) => {
    const defaults = {
      store: {
        id: 'local',
        field: 'This is a string',
        __typename: 'Store',
      },
      userStore: {
        userData: null,
        __typename: "UserStore"
      },
    }
    cache.writeData({
      data: defaults,
    });
  }