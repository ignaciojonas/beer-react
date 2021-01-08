import React, { Component } from "react";
import { connect } from "react-redux";
import Select from "react-select";
import { Field, reduxForm } from "redux-form";
import { createBeer, fetchStyles } from "../../actions";

class BeerCreate extends Component {
  componentDidMount() {
    this.props.fetchStyles();
  }

  onSubmit = (formValues) => {
    console.log(formValues);
    this.props.createBeer(formValues);
  };

  renderInput = ({ input, label }) => {
    return (
      <div className="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label className="bg-white text-gray-600 px-1">{label}</label>
          </p>
        </div>
        <p>
          <input
            {...input}
            className="py-1 px-1 text-gray-900 outline-none block h-full w-full"
          />
        </p>
      </div>
    );
  };

  renderOptions = () => {
    return this.props.styles.map((style) => {
      return <option value={style.id}>{style.name}</option>;
    });
  };

  renderSelect = ({ input, label, options }) => {
    return (
      <div className="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label className="bg-white text-gray-600 px-1">{label}</label>
          </p>
        </div>
        <select {...input}>{this.renderOptions()}</select>
      </div>
    );
  };

  render() {
    return (
      <div className="box-content h-40 w-45 p-4">
        <h1 className="bg-white text-gray-600 px-1">Create a Beer</h1>
        <div className="bg-white shadow rounded-lg p-6">
          <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <div className="grid lg:grid-cols-3 gap-6">
              <Field
                name="name"
                component={this.renderInput}
                label="Beer Name"
              />
              <Field
                name="rating"
                component={this.renderInput}
                label="Beer Rating"
              />
              <Field
                name="style_id"
                component={this.renderSelect}
                label="Beer Style"
                options={this.props.styles}
              />
            </div>
            <div className="border-t mt-6 pt-3">
              <button className="rounded text-gray-100 px-3 py-1 bg-blue-500 hover:shadow-inner hover:bg-blue-700 transition-all duration-300">
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    styles: Object.values(state.styles),
  };
};

const formWrapped = reduxForm({
  form: "beerCreate",
  enableReinitialize: true,
})(BeerCreate);
export default connect(mapStateToProps, { fetchStyles, createBeer })(
  formWrapped
);
