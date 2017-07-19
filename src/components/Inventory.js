import React from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {
  render() {
    return (
      <div>

        <h1>Inventory</h1>
      <AddFishForm addFishToInventory={this.props.addFishToInventory}/>
    <button onClick={this.props.loadSamples}>Load Sample Fishes</button>
      </div>
    )
  }
}

export default Inventory;
