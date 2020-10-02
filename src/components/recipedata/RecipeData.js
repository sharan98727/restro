import {Table, Tag} from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
// import './RecipeData.css';
import '/home/sharan/Desktop/restaurantitems/src/components/RecipeData.css';

const columns = [
  {
    title: 'NAME',
    dataIndex: 'name',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.name - b.name,
  },
  {
    title: 'LAST UPDATED',
    dataIndex: 'last_updated',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.last_updated - b.last_updated,
  },
  {
    title: 'COGS',
    dataIndex: 'cogs',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.cogs - b.cogs,
  },
  {
    title: 'COST PRICE',
    dataIndex: 'cost_price',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.cost_price - b.cost_price,
  },
  {
    title: 'SALE PRICE',
    dataIndex: 'sale_price',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.sale_price - b.sale_price,
  },
  {
    title: 'GROSS MARGIN',
    dataIndex: 'gross_margin',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.gross_margin - b.gross_margin,
  },
  {
    title: 'TAGS/ACTIONS',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags) => <Tag color={'green'}>Indian Masala</Tag>,
  },
];

class RecipeData extends React.Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
    loading: false,
    data: [],
    selecteditem: 'is_incorrect',
  };

  componentDidMount() {
    let {selecteditem} = this.state;
    fetch(
      `https://beta.eagleowl.in/api/v1/mock/organization/18/outlet/18/recipe/recipes/?${selecteditem}=`
    )
      .then((res) => res.json())
      .then((res) => {
        let data1 = [];
        for (let i = 0; i < res.results.length; i++) {
          data1.push({
            key: i,
            name: res.results[i].name,
            last_updated: res.results[i].last_updated.date,
            cogs: res.results[i].cogs,
            cost_price: res.results[i].cost_price,
            sale_price: res.results[i].sale_price,
            gross_margin: res.results[i].gross_margin,
          });
        }
        this.setState({
          data: data1,
        });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    let {selecteditem} = this.state;
    if (prevState.selecteditem !== this.state.selecteditem) {
      fetch(
        `https://beta.eagleowl.in/api/v1/mock/organization/18/outlet/18/recipe/recipes/?page=1&${selecteditem}=false`
      )
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          let data1 = [];
          for (let i = 0; i < res.results.length; i++) {
            data1.push({
              key: i,
              name: res.results[i].name,
              last_updated: res.results[i].last_updated.date,
              cogs: res.results[i].cogs,
              cost_price: res.results[i].cost_price,
              sale_price: res.results[i].sale_price,
              gross_margin: res.results[i].gross_margin,
            });
          }
          this.setState({
            data: data1,
          });
        });
    }
  }
  start = () => {
    this.setState({loading: true});
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  };

  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({selectedRowKeys});
  };

  handleclick = (e) => {
    console.log(e.target.innerHTML);
    if (e.target.innerHTML === 'INCORRECT') {
      this.setState((prevstate) => ({
        selecteditem: 'is_incorrect',
      }));
    }
    if (e.target.innerHTML === 'UNTAGGED') {
      this.setState((prevstate) => ({
        selecteditem: 'is_untagged',
      }));
    }
    if (e.target.innerHTML === 'DISABLED') {
      this.setState((prevstate) => ({
        selecteditem: 'is_disabled',
      }));
    }
  };

  render() {
    console.log(this.state.selecteditem);
    const {loading, selectedRowKeys} = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    // const hasSelected = selectedRowKeys.length > 0;
    return (
      <div>
        <div className='tab' style={{margin: '30px 832px 0px 20px'}}>
          <button className='tablinks' onClick={this.handleclick}>
            ALL RECIPES
          </button>
          <button className='tablinks' onClick={this.handleclick}>
            INCORRECT
          </button>
          <button className='tablinks' onClick={this.handleclick}>
            UNTAGGED
          </button>
          <button className='tablinks' onClick={this.handleclick}>
            DISABLED
          </button>
        </div>
        {/* <div style={{ marginBottom: 16 }}>
          <span style={{ marginLeft: 8 }}>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
          </span>
        </div> */}
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={this.state.data}
          pagination={false}
          style={{margin: '0px 20px 0px 20px'}}
        />
      </div>
    );
  }
}

export default RecipeData;
