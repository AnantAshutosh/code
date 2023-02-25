import "./App.css";

import React, { Component } from 'react'
import Navbar from "./component/Navbar";
import DynamicTable from "./component/DynamicTable";
import Metrics from "./component/Matrics";

export default class App extends Component {


  render() {
    return (
      <div>
        <Navbar/>
        <DynamicTable/>
        <Metrics />
      </div>
    )
  }
}
