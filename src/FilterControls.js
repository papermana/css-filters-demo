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
      <div>
        <div>{this.props.name}</div>
        <div>{'' + this.state.value + this.props.units}</div>
        <span>{'' + this.props.min + this.props.units}</span>
        <input type="range"
          min={this.props.min}
          max={this.props.max}
          defaultValue={this.state.value}
          onChange={this.onChange} />
        <span>{'' + this.props.max + this.props.units}</span>
      </div>
    );
  }
}

export default FilterControls;
