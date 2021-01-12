import React, { Component } from "react";

class Stars extends Component {
  renderStars() {
    let stars = [];
    for (let index = 0; index < this.props.rating; index++) {
      stars[index] = "text-yellow-500";
    }
    for (let index = this.props.rating; index < 5; index++) {
      stars[index] = "text-gray-400";
    }
    return stars.map((style) => {
      return (
        <svg
          class={`mx-1 w-4 h-4 fill-current ${style}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      );
    });
  }

  render() {
    return (
      <div class="flex justify-center items-center">
        <div class="flex items-center mt-2 mb-4">{this.renderStars()}</div>
      </div>
    );
  }
}

export default Stars;
