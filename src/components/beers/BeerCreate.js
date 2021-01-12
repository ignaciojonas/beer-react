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
    this.props.createBeer(formValues);
  };

  renderError({ error, touched }) {
    if (touched && error) {
      return <div className="text-red-900">{error}</div>;
    }
  }

  renderInput = ({ input, label, type, meta }) => {
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
            min="0"
            max="5"
            type={type}
            className="py-1 px-1 text-gray-900 outline-none block h-full w-full"
          />
          {this.renderError(meta)}
        </p>
      </div>
    );
  };

  renderOptions = () => {
    return this.props.styles.map((style) => {
      return <option value={style.id}>{style.name}</option>;
    });
  };

  renderSelect = ({ input, label, meta }) => {
    return (
      <div className="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label className="bg-white text-gray-600 px-1">{label}</label>
          </p>
        </div>
        <select
          {...input}
          class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value=""></option>
          {this.renderOptions()}
        </select>
        {this.renderError(meta)}
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
                type="range"
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

const validate = (formValues) => {
  const errors = {};

  if (!formValues.name) {
    errors.name = "You must enter a name";
  }

  if (!formValues.rating) {
    errors.rating = "You must enter a rating";
  } else {
    if (formValues.rating < 0 || formValues.rating > 5) {
      errors.rating = "Value must be between 0 and 5";
    }
  }

  if (!formValues.style_id) {
    errors.style_id = "You must select a Style";
  }

  return errors;
};

const formWrapped = reduxForm({
  form: "beerCreate",
  enableReinitialize: true,
  validate,
})(BeerCreate);
export default connect(mapStateToProps, { fetchStyles, createBeer })(
  formWrapped
);
