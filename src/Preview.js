import React from 'react';

class Preview extends React.PureComponent {
  state = {
    currentImage: 0,
  }

  imageSrcs = [
    'https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg',
    'https://images.pexels.com/photos/197457/pexels-photo-197457.jpeg?w=940&h=650&auto=compress&cs=tinysrgb',
    'https://s-media-cache-ak0.pinimg.com/originals/53/f8/48/53f8484efb0fbbeaf6cf0983e0424e07.jpg',
  ]

  onClick = (e) => {
    this.setState({
      currentImage: Number(e.target.dataset.index),
    });
  }

  render = () => {
    const images = this.imageSrcs
      .map((img, i) => (
        <img key={i}
          className={`preview__img ${i === this.state.currentImage ? 'preview__img--current' : ''}`}
          src={img}
          alt=""
          style={{filter: this.props.filters}} />
      ));
    const buttons = this.imageSrcs
      .map((img, i) => (
        <button key={i}
          className={`preview__button ${i === this.state.currentImage ? 'preview__button--current' : ''}`}
          data-index={i}
          onClick={this.onClick} />
      ));

    return (
      <div className="preview">
        <div className="preview__buttons-wrapper">
          {buttons}
        </div>
        <div className="preview__imgs-wrapper">
          {images}
        </div>
      </div>
    )
  }
}

export default Preview;
