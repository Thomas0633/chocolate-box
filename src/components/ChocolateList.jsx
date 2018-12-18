import React, { Component } from 'react';
import './chocolateList.css';
import Chocolate from '../containers/Chocolate';

import chocolates from '../chocolates.json';

class ChocolateList extends Component {
  render() {
    return (
      <div className='chocolateList'>
        <h2>Chocolats</h2>
        {chocolates.map((item, index) => 
          <Chocolate name={item.name} key={index} />
        )}
      </div>
    );
  }
}

export default ChocolateList;
