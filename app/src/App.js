import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Ballot from './components/Ballot';
import Candidates from './components/Candidates';
import Results from './components/Results';
import Contact from './components/Contact';
import { Container } from '@material-ui/core';

import ElectionContract from './contracts/Election.json';
import getWeb3 from './getWeb3';

class App extends React.Component {

  state = {
    web3: null,
    accounts: null,
    contract: null
  };

  componentDidMount = async () => {
    const web3 = await getWeb3();
    const accounts = await web3.eth.getAccounts();
    const networkId = await web3.eth.net.getId();
    const deployedNetwork = ElectionContract.networks[networkId];
    const instance = new web3.eth.Contract(
      ElectionContract.abi, 
      deployedNetwork && deployedNetwork.address
    );
    console.log(accounts);
    this.setState({web3, accounts, contract: instance}, this.runExample);
  }

  runExample = async () => {
    // const { accounts, contract } = this.state;

    // // Stores a given value, 5 by default.
    // //await contract.methods.set(5).send({ from: accounts[0] });

    // // Get the value from the contract to prove it worked.
    // const response = contract.options.from;
    // console.log(response);

    // // Update state with the result.
    // this.setState({ candidatesCount: response });
  };

  render() {
    return (
        <BrowserRouter>
          <Navbar accounts={this.state.accounts} web3={this.state.web3} contract={this.state.contract} />
          <Container>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/Ballot' component={Ballot} />
              <Route path='/Candidates' component={Candidates} />
              <Route path='/Results' component={Results} />
              <Route path='/Contact' component={Contact} />
              <Route component={Error} />
            </Switch>
          </Container>
        </BrowserRouter>
    );
  }
}

export default App;
