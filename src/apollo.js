import {
    ApolloClient,
    InMemoryCache,
} from "@apollo/client";

const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    resolvers:{
        Movie:{
            isLiked: ()=>false
        },
        Mutation:{
            toggleLikeMovie: (_, { id }, { cache }) => {
                cache.modify({
                    id:`Movie:${id}`,
                    fields: {
                        isLiked(cachedName) {
                            return !cachedName;
                        },
                    }
                })
            }
        }
    },
    cache: new InMemoryCache()
});
export default client;