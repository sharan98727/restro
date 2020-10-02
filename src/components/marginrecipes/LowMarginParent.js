import React from 'react';
import HighMargin from './HighMargin';

class LowMarginParent extends React.Component {
  state = {
    items: [
      ['Ambur Biriyani', '40'],
      ['Paneer Tikka ', '30'],
      ['Paneer Butter', '35'],
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
          <HighMargin percentage={item[1]} color='red' />
        </div>
      );
    });
    return (
      <div style={{textAlign: 'center', marginTop: '20px'}}>
        <div style={{backgroundColor: '#f1f1f1', padding: '10px 0px'}}>
          Low Margin Recipes
        </div>
        <div
          style={{
            display: 'flex',
            border: '1px solid #f1f1f1 ',
          }}
        >
          {highmargin}
        </div>
      </div>
    );
  }
}

export default LowMarginParent;
