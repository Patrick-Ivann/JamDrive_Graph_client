import { LOCAL_THEMESTORE_QUERY } from "./localQueries";

export const resolvers = {
    Mutation: {

        setConnection: (_, { user }, { cache, getCacheKey }) => {
            const id = getCacheKey({ __typename: 'UserStore' })
            console.log(user);
            const data = {
                userStore: {
                    id: id,
                    userData: JSON.stringify(user),
                    __typename: 'UserStore'
                }
            }
            cache.writeData({ data })
            return null
        },

        setFilterWord: (_, { word }, { cache, getCacheKey }) => {
            const id = getCacheKey({ __typename: 'FilterStore' })
            const data = {
                filterStore: {
                    // id:id,
                    filterWord: word,
                    __typename: "FilterStore"
                }
            }
            cache.writeData({ data })
            return null

        },

        setTheme: (_, args, { cache, getCacheKey }) => {
            const id = getCacheKey({ __typename: 'ThemeStore' })
            try {

                const { themeStore } = cache.readQuery({
                    query: LOCAL_THEMESTORE_QUERY
                })
                const data = {
                    themeStore: {
                        id: id,
                        theme: !themeStore.theme,
                        __typename: "ThemeStore"
                    }
                }
                cache.writeData({ data })
            } catch (error) {
                const data = {
                    themeStore: {
                        id: id,
                        theme: true,
                        __typename: "ThemeStore"
                    }
                }
                cache.writeData({ data })

            }
            return null

        }

    },
}
