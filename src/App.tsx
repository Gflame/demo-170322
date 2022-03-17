import React from 'react';

import GithubSearch from "./github-components/github-search/github-search";
import SearchUi from "./components/search-ui/search-ui.js";

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Search Github Repositories</h1>
      <GithubSearch>{SearchUi}</GithubSearch>
    </div>
  );
}

export default App;

