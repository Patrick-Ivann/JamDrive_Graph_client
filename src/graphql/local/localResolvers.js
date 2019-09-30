export const resolvers = {
    Mutation: {
    
        setConnection: (_,{user}, {cache,getCacheKey }) =>{
            const id = getCacheKey({ __typename: 'UserStore'})
            const data = {
            userStore : {
                userData: JSON.stringify(user),
                __typename:'UserStore'
            }
            }
            cache.writeData({data})
            return null
      },

    },
}
  