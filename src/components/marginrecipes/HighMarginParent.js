import React from 'react';
import HighMargin from './HighMargin';

class HighMarginParent extends React.Component {
  state = {
    items: [
      ['Ambur Biriyani', '70'],
      ['Paneer Tikka ', '80'],
      ['Paneer Butter', '85'],
    ],
  };
  render() {
    let {items} = this.state;
    let highmargin = items.map((item) => {
      return (
        <div
          style={{
            margin: '0px 20px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <h3>{item[0]}</h3>
          <HighMargin percentage={item[1]} color='' />
        </div>
      );
    });
    return (
      <div style={{textAlign: 'center', marginTop: '20px'}}>
        <div style={{backgroundColor: '#f1f1f1', padding: '10px 0px'}}>
          High Margin Recipes
        </div>
        <div style={{display: 'flex', border: '1px solid #f1f1f1 '}}>
          {highmargin}
        </div>
      </div>
    );
  }
}

export default HighMarginParent;
