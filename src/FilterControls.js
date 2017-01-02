import React from 'react';

class FilterControls extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      value: props.defaultValue,
    };
  }

  onChange = (e) => {
    this.setState({
      value: e.target.value,
    });

    this.props.onChange(this.props.name, e.target.value);
  }

  render() {
    return (
      <div className="filter-controls">
        <div className="filter-controls__name">
          {this.props.name}
        </div>
        <div className="filter-controls__slider-wrapper">
          <div className="filter-controls__current-value">
            {'' + this.state.value + this.props.units}
          </div>
          <span className="filter-controls__min-value">
            {'' + this.props.min + this.props.units}
          </span>
          <input className="filter-controls__slider"
            type="range"
            min={this.props.min}
            max={this.props.max}
            defaultValue={this.state.value}
            onChange={this.onChange} />
          <span className="filter-controls__max-value">
            {'' + this.props.max + this.props.units}
          </span>
        </div>
      </div>
    );
  }
}

export default FilterControls;
