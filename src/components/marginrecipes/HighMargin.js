import React from 'react';
import 'antd/dist/antd.css';

import {Progress} from 'antd';

class HighMargin extends React.Component {
  render() {
    let {percentage} = this.props;
    let {color} = this.props;
    return (
      <div>
        <Progress
          type='circle'
          percent={percentage}
          width={70}
          strokeColor={color}
        />
      </div>
    );
  }
}

export default HighMargin;
