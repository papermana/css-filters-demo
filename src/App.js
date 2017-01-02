import React from 'react';
import './App.css';
import FilterControls from './FilterControls';

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    const filterValues = Object.keys(this.filterAttributes)
      .reduce((acc, filterName) => (
        Object.assign({}, acc, {
          [filterName]: this.filterAttributes[filterName].defaultValue,
        })
      ), {});

    this.state = {
      filterValues,
    };

    this.controls = Object.keys(this.filterAttributes)
      .map(f => (
        <FilterControls key={f}
          name={f}
          onChange={this.onChange}
          {...this.filterAttributes[f]} />
      ));
  }

  filterAttributes = {
    blur: {
      min: 0,
      max: 50,
      defaultValue: 0,
      units: 'px',
    },
    brightness: {
      min: 0,
      max: 200,
      defaultValue: 100,
      units: '%',
    },
    contrast: {
      min: 0,
      max: 200,
      defaultValue: 100,
      units: '%',
    },
    grayscale: {
      min: 0,
      max: 100,
      defaultValue: 0,
      units: '%',
    },
    'hue-rotate': {
      min: 0,
      max: 360,
      defaultValue: 0,
      units: 'deg',
    },
    invert: {
      min: 0,
      max: 100,
      defaultValue: 0,
      units: '%',
    },
    opacity: {
      min: 0,
      max: 100,
      defaultValue: 100,
      units: '%',
    },
    saturate: {
      min: 0,
      max: 200,
      defaultValue: 100,
      units: '%',
    },
    sepia: {
      min: 0,
      max: 100,
      defaultValue: 0,
      units: '%',
    },
  }

  getFilterValue = () => {
    return Object.keys(this.filterAttributes)
      .filter(f => (
        this.filterAttributes[f].defaultValue !== Number(this.state.filterValues[f])
      ))
      .map(f => (
        `${f}(${this.state.filterValues[f]}${this.filterAttributes[f].units})`
      ))
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

  render() {
    return (
      <div className="App">
        <header className="header">
          <h1>CSS Filters</h1>
          <p className="note">
            Except drop-shadow
          </p>
        </header>
        <main className="main">
          <div className="preview-img">
            <img src="https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg"
              alt="Cat in a rolled sheet of paper"
              width="640"
              height="480"
              style={{filter: this.getFilterValue()}} />
          </div>

          <div className="filters-area">
            {this.controls}
          </div>
        </main>
      </div>
    );
  }
}

export default App;
