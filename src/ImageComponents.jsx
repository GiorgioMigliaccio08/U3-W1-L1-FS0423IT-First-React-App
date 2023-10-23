import { Component } from "react";

class ImageComponent extends Component {
  render() {
    return <img src={this.props.imageSrc} />;
  }
}

export default ImageComponent;
