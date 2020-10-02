import React from 'react';
import 'antd/dist/antd.css';
import {Statistic} from 'antd';
import {ArrowUpOutlined, ArrowDownOutlined} from '@ant-design/icons';

class TopFluctuating extends React.Component {
  render() {
    return (
      <div>
        <Statistic
          value={this.props.value}
          precision={2}
          valueStyle={{color: 'green'}}
          prefix={<ArrowUpOutlined />}
          suffix='%'
        />
      </div>
    );
  }
}

export default TopFluctuating;
