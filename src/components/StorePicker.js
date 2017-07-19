// let's go!
import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  // constructor() {
  //   super();
  //   this.getName = this.getName.bind(this);
  // }

  goToStore(event) {
    event.preventDefault();
    // console.log(this);
    const storeId = this.storeName.value;
    console.log(`going to ${storeId}`);

    this.context.router.transitionTo(`/store/${storeId}`)

  }


  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore.bind(this)}>
        <h2>Please enter a store</h2>
      <input type="text" required placeholder="Store Name" defaultValue={getFunName()}
      ref={(input) => {this.storeName = input}}/>
        <button type="submit">Visit store -></button>
      </form>
    )
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker;
