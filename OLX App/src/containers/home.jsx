import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Card from './card'
import Header from './header'
import Footer from './footer'
import tv from '../images/tv.webp';
import pic1 from '../images/Pic1.jpg'
import oppo from '../images/oppo.png';
import car1 from '../images/car1.webp';
import car2 from '../images/car2.webp';
import car3 from '../images/car3.webp';
import car4 from '../images/car4.webp';
import oppo3 from '../images/oppo3.jfif';
import bike1 from '../images/bike1.webp';
import bike2 from '../images/bike2.webp';
import bike3 from '../images/bike3.webp';
import bike4 from '../images/bike4.webp';
import laptop from '../images/laptop.webp';
import mobile1 from '../images/mobile1.webp';
import mobile2 from '../images/mobile2.webp';
import '../App.css';


class Home extends Component {
  render() {
    return (
      <div className="body">

        <Header />

        <img src={ pic1 } width="100%" style={{ marginTop: "115px" }} />
        <center>
          <img src={ oppo3 } style={{ marginTop: "40px" }} />
        </center>

        <div className="products">
          <h3 id="results">Based on your last search</h3>

          <Link to={{
            pathname:"/products",
            state: {
              pic: bike1,
              model:"2018",
              since:"Ju; 2018",
              condition:"Used",
              sellername:"Tayab",
              make:"Road Prince",
              price: "Rs 160,000",
              product: "Neat Bike",
              address: "Mansehra, Khyber Pakhtunkhwa, Pakistan",
            }
          }}>
            <Card pic={bike1} price="Rs 160,000" product="Neat Bike" />
          </Link>

          <Link to={{
            pathname:"/products",
            state: {
              pic: bike2,
              model:"2015",
              make:"Honda",
              since:"Oct 2014",
              condition:"Used",
              price: "Rs 53,500",
              sellername:"Muhammad",
              product: "Honda CD 70 in very good condition",
              address: "G-6, Islamabad, Islamabad Capital Territory",
            }
          }}>
            <Card pic={bike2} price="Rs 53,500" product="Honda CD 70 in very good conditi..." />
          </Link>

          <Link to={{
            pathname:"/products",
            state: {
              pic: bike3,
              model:"2020",
              make:"Yamaha",
              condition:"New",
              since:"Jun 2019",
              price: "Rs 167,000",
              sellername:"M Huzaifa",
              product: "YBR 125 with modification",
              address: "G-15, Islamabad, Islamabad Capital Territory",
            }
          }}>
            <Card pic={bike3} price="Rs 167,000" product="Yahama YBR 125 with modification" />
          </Link>

          <Link to={{
            pathname:"/products",
            state: {
              pic: bike4,
              model:"2019",
              make:"Movistar",
              condition:"Used",
              since:"May 2017",
              price: "Rs 320,000",
              sellername:"Bullet 1 Motorsports",
              product: "Sports bikes and 250CC At Bullet 1 Motorsports",
              address: "Air Force Housing Society, Islamabad Capital Territory",
            }
          }}>
            <Card pic={bike4} price="Rs 320,000" product="Sports bike and 250CC at Bullet 1..." />
          </Link>

          <h3 id="results">Fresh Recommendations</h3>

          <Link to={{
            pathname:"/products",
            state: {
              pic: car1,
              model:"GLI - 2019",
              make:"Toyota",
              condition:"Used",
              since:"May 2019",
              price: "Rs 3,085,000",
              sellername:"Shayan Siddiqui",
              address: "Haidery, Karachi, Sindh",
              product: "Toyota corolla GLI automatic brand new",
            }
          }}>
            <Card pic={car1} price="Rs 3,085,000" product="Toyota corolla GLI automatic bran..." />
          </Link>

          <Link to={{
            pathname:"/products",
            state: {
              pic: car2,
              make:"Suzuki",
              condition:"Used",
              since:"Dec 2017",
              price: "Rs 240,000",
              product: "Mehran 1998",
              model:"Mehran VXR - 1998",
              sellername:"Malik Sajid Awan",
              address: "Baldia Town, Karachi, Sindh",
            }
          }}>
            <Card pic={car2} price="Rs 240,000" product="Mehran 1998" />
          </Link>

          <Link to={{
            pathname:"/products",
            state: {
              pic: car3,
              make:"Honda",
              since:"Today",
              condition:"Used",
              price: "Rs 1,400,000",
              sellername:"Faizan Khan",
              model:"2007 - 185,000 km",
              product: "Honda Reborn Civic Oriel",
              address: "Gulshan-E-Iqbal Block 11, Karachi, Sindh",
            }
          }}>
            <Card pic={car3} price="Rs 1,400,000" product="Honda Reborn Civic Oriel" />
          </Link>

          <Link to={{
            pathname:"/products",
            state: {
              pic: car4,
              make:"Suzuki",
              condition:"Used",
              since:"Jun 2018",
              price: "Rs 255,000",
              sellername:"M.Aziz",
              model:"1988 - 123,456 km",
              product: "Suzuki swift Khyber",
              address: "Wafaqi Colony, Lahore, Punjab",
            }
          }}>
            <Card pic={car4} price="Rs 255,000" product="Suzuki Khyber" />
          </Link>

          <Link to={{
            pathname:"/products",
            state: {
              pic: mobile1,
              model:"2020",
              make:"Samsung",
              condition:"New",
              since:"Nov 2019",
              price: "Rs 48,999",
              product: "S10 Plus dotted 10/10",
              address: "Mall Road, Lahore, Punjab",
              sellername:"Malik Mobile By Malik Mudassir",
            }
          }}>
            <Card pic={mobile1} price="Rs 48,999" product="S10 Plus dotted 10/10" />
          </Link>

          <Link to={{
            pathname:"/products",
            state: {
              pic: mobile2,
              model:"2020",
              make:"Apple",
              condition:"Used",
              since:"Mar 2019",
              price: "Rs 95,000",
              sellername:"The Cell City",
              product: "Iphone XS Max 64gb",
              address: "Gaddafi Stadium, Lahore, Punjab",
            }
          }}>
            <Card pic={mobile2} price="Rs 95,000" product="Iphone XS Max 64gb" />
          </Link>

          <Link to={{
            pathname:"/products",
            state: {
              pic: laptop,
              make:"HP",
              model:"2020",
              condition:"Used",
              since:"Dec 2017",
              price: "Rs 26,500",
              sellername:"Muhammad Salman",
              address: "PECHS, Karachi, Sindh",
              product: "HP Folio i5 3rd generation Ultra Book",
            }
          }}>
            <Card pic={laptop} price="Rs 26,500" product="HP Folio i5 3rd generation Ultra B..." />
          </Link>

          <Link to={{
            pathname:"/products",
            state: {
              pic: tv,
              make:"TCL",
              model:"2020",
              condition:"New",
              since:"Aug 2018",
              price: "Rs 24,000",
              product: "TCL LCD  39 inches",
              sellername:"Usman Electronics",
              address: "Saddar Town, Karachi, Sindh",
            }
          }}>
            <Card pic={tv} price="Rs 24,000" product="TCL LCD 39 inches" />
          </Link>

          <center>
            <div className="mt-3">
              <button id="load">Load more</button>
            </div>
          </center>
        </div>

        <center>
          <img src={ oppo } style={{ marginTop: "0px" }} />
        </center>

        <Footer />

      </div>
    )
  }
}

export default Home;
