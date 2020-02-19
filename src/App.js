/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React from "react";
import "./App.css";
import PostsPage from '../src/components/PostsContainer/PostsPage';
import SearchBar from "../src/components/SearchBar/SearchBarContainer";
// import the PostsPage and SearchBar and add them to the App


const App = (props) => {
console.log('app props: ',props); // giving me undefined, why?

  return (
    <div className="App">
      <PostsPage />
      <SearchBar />
    </div>
  );
};

export default App;
