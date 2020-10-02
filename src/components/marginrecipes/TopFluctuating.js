import React from 'react';
import 'antd/dist/antd.css';
import {Statistic} from 'antd';
import {ArrowUpOutlined, ArrowDownOutlined} from '@ant-design/icons';

class TopFluctuating extends React.Component {
  render() {
    const arrow =
      this.props.arrowdirection === 'up' ? (
        <ArrowUpOutlined />
      ) : (
        <ArrowDownOutlined />
      );
    console.log(this.props.color);
    const colors = this.props.color === 'green' ? 'green' : 'red';
    return (
      <div style={{marginTop: '15px'}}>
        <Statistic
          value={this.props.value}
          precision={2}
          valueStyle={{color: `${colors}`}}
          prefix={arrow}
          suffix='%'
        />
      </div>
    );
  }
}

export default TopFluctuating;
