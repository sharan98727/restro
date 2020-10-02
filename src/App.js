import React from 'react';
import HighMarginParent from './components/marginrecipes/HighMarginParent';
import LowMarginParent from './components/marginrecipes/LowMarginParent';
import TopFluctuatingParent from './components/marginrecipes/TopFluctuatingParent';
import RecipeData from './components/recipedata/RecipeData';

function App() {
  return (
    <div className='App'>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}
      >
        <HighMarginParent />
        <LowMarginParent />
        <TopFluctuatingParent />
      </div>
      <RecipeData />
    </div>
  );
}

export default App;
