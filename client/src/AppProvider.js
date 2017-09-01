import React, { Component } from "react";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PulseLoader } from "halogen";
import store from "./store";
import App from "./App";
import logo from "./logo.svg";
import "./App.css";

class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rehydrated: false
    };
  }

  componentWillMount() {
    persistStore(store, {}, () => {
      this.setState({ rehydrated: true });
    });
  }

  render() {
    if (!this.state.rehydrated) {
      return <PulseLoader size="20px" color="#222" />;
    }
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default AppProvider;
