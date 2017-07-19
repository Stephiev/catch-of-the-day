// let's go!
import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';

class App extends React.Component {
  constructor() {
    super()

    this.addFishToInventory = this.addFishToInventory.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    this.addToOrder = this.addToOrder.bind(this);

    // getInitialState
    this.state = {
      fishes: {},
      order: {}
    }
  }

  addFishToInventory(fish) {

    //  Make a copy
    const fishes = {...this.state.fishes};

    // Add to thta copy
    const timeStamp = Date.now();
    fishes[`fish-${timeStamp}`] = fish;

    // Let react now what changed
    this.setState({ fishes });

  }

  loadSamples() {
    this.setState({
      fishes: sampleFishes
    })
  }

  addToOrder(key) {
    // Get a copy of the order state
    const order = {...this.state.order};

    // Update or add the new number of fish ordered
    order[key] = order[key] + 1 || 1;

    this.setState({ order });
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
        <ul className="list-of-fishes">
          {
            Object
            .keys(this.state.fishes)
            .map(key => <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder} />)
          }
        </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
      <Inventory addFishToInventory={this.addFishToInventory} loadSamples={this.loadSamples}/>
      </div>
    )
  }
}

export default App;
