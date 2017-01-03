import React from 'react';
import './App.css';
import Preview from './Preview';
import FilterControls from './FilterControls';
import filterAttributes from './filterAttributes';

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    const filterValues = filterAttributes
      .reduce((acc, f) => (
        {
          ...acc,
          [f.name]: f.defaultValue,
        }
      ), {});

    this.state = {
      filterValues,
    };

    this.controls = filterAttributes
      .map(f => (
        <FilterControls key={f.name}
          onChange={this.onChange}
          {...f} />
      ));
  }

  getFilterValue = () => {
    return filterAttributes
      .filter(f => f.defaultValue !== Number(this.state.filterValues[f.name]))
      .map(f => `${f.name}(${this.state.filterValues[f.name]}${f.units})`)
      .join(' ');
  }

  onChange = (name, value) => {
    this.setState({
      filterValues: {
        ...this.state.filterValues,
        [name]: value,
      },
    });
  }

  render = () => (
    <div className="App">
      <header className="header">
        <h1>CSS Filters</h1>
        <p className="note">
          Except drop-shadow
        </p>
      </header>
      <main className="main">
        <Preview filters={this.getFilterValue()} />
        <div className="filters-area">
          {this.controls}
        </div>
      </main>
    </div>
  )
}

export default App;
