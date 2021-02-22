import React from 'react'
import Header from './header'
import Footer from './footer'
import Details from './details'
import oppo2 from '../images/oppo2.jfif';
import '../App.css';

class Products extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    const { pic, price, product, address, sellername, since, model, make, condition } = this.props.location.state
    return (
      <div className="body">
        
        <Header />

        <center>
          <img src={oppo2} style={{ marginTop: "145px" }} />
        </center>

        <Details pic={pic} price={price} product={product} address={address} sellername={sellername} since={since} model={model} make={make} condition={condition} />
        
        <Footer />

      </div>
    )
  }
}

export default Products;
