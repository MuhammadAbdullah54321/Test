
import './App.css';
import {ApolloClient, ApolloProvider, InMemoryCache,}from '@apollo/client'
import Store from './components/store/Store'


const client = new ApolloClient({
  uri: 'https://localhost:4000/graphql',
  cache: new InMemoryCache()
});

function App() {
    
  return (
    <ApolloProvider client={client}>
      <div>
        <h1 >
          Hi there;
        </h1>
        <Store />
      </div>
    </ApolloProvider>
  );
}

export default App;
