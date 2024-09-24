import React from "react";
import "./AddItem.css";

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      productPrice: 0,
    };
  }

  render() {
    return (
      <div>
        <form className="row mb-5" onSubmit={(e)=>{
          e.preventDefault();
          this.props.addItem(this.state.productName,this.state.productPrice);
        }}>
        <div className="mb-3 col-4">
    <label className="form-label" htmlFor="inputName">Name</label>
    <input 
        className="form-control" 
        id="inputName" 
        type="text" 
        name="productName" 
        value={this.state.productName} 
        onChange={(e) => this.setState({ productName: e.currentTarget.value })}
    />
</div>

          <div className="mb-3 col-4">
    <label className="form-label" htmlFor="inputPrice">Price</label>
    <input 
        className="form-control" 
        id="inputPrice" 
        type="number" 
        name="productPrice" 
        value={this.state.productPrice} 
        onChange={(e) => this.setState({ productPrice:    Number( e.currentTarget.value )})}
    />
</div>

          <button
            className="custom-button gradient-button-4"
           
            type="submit"
          >
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default AddItem;
