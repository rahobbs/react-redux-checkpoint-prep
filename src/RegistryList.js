import React from 'react';
import RegistryItem from './RegistryItem';
import store from './store';

//RegistryList Component holds multiple RegistryItem Components

export default class extends React.Component {

  constructor() {
    super();
    this.state = store.getState();
  }

  componentWillMount () {
    store.subscribe(() => this.setState(store.getState()));
  }

  render() {
    return (
      <div>
        <h1>My Registry</h1>
        {
          this.state.registryItems ? this.state.registryItems.map ( item => (
            <RegistryItem itemDetails={item} />
          ))
          :
          null
        }
      </div>
    );
  }

}


/* QUESTION why doesn't this work?

{this.state.registryItems.map(function(item){
<RegistryItem itemDetails={item} />
})} */
