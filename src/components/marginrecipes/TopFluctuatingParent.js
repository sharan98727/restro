import React from 'react';
import TopFluctuating from './TopFluctuating';

class TopFluctuatingParent extends React.Component {
  state = {
    items: [
      ['Ambur Biriyani', 5, 'up', 'green'],
      ['Paneer Tikka', 3, 'Down', 'red'],
      ['Paneer Butter', 8, 'Down', 'red'],
    ],
  };

  render() {
    let {items} = this.state;
    let fluctitems = items.map((item) => {
      return (
        <div
          style={{
            margin: '0px 20px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <h3 style={{borderBottom: '2px solid #f1f1f1'}}>{item[0]}</h3>
          <TopFluctuating
            value={item[1]}
            arrowdirection={item[2]}
            color={item[3]}
          />
        </div>
      );
    });
    return (
      <div style={{textAlign: 'center', marginTop: '23px'}}>
        <div style={{backgroundColor: '#f1f1f1', padding: '10px 0px'}}>
          Top Fluctuating Recipes
        </div>
        <div
          style={{
            display: 'flex',
            border: '1px solid #f1f1f1 ',
            marginBottom: '5px',
            paddingBottom: '10px',
            height: '105px',
          }}
        >
          {fluctitems}
        </div>
      </div>
    );
  }
}

export default TopFluctuatingParent;
