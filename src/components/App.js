import React from 'react';
import Header from "./Header";
import PostControl from "./PostControl";


function App(){
  return ( 
    <React.Fragment>
      <div class="container">
        <Header />
        <PostControl />
      </div>
    </React.Fragment>
  );
}

export default App;
