import react, {Component} from 'react'
import './home.css';
import bild1 from './lll.jpg';
import bild2 from './baseline_wb_sunny_black_48dp.png';
import bild3 from './baseline_library_books_black_48dp.png';
import bild7 from './logos1.png';

function Home() {
    return (
          <div className="Image">
          <img src = {bild1} className="image2"/>
              <div className="ImageText">
              <h1>Welcome to pagename</h1>
              <button>Sign in</button>
              </div>

              <div className="Layout">
                <h1 className="a1">Webpage name</h1>
                <p className="a2">Information about this webpage</p>   
                <p>More text about somethine..... Something text bla website information.</p><br></br>
                <h1>More information about</h1>
                <p>This webpage.. Lorem Ipsum bla shum interesant asht.. Robt tsames.</p>
                <p>Adriani asht i trash, robt tsames me krejt shkijet.</p>
              </div>
              <div className="Layout2">
                <h1 className="b1">Webpage name</h1>
                <p className="b2">Information about this webpage</p>   
                <p>More text about somethine..... Something text bla website information.</p><br></br>
                <h1>More information about</h1>
                <p>This webpage.. Lorem Ipsum bla shum interesant asht.. Robt tsames.</p>
                <p>Adriani asht i trash, robt tsames me krejt shkijet.</p>
              </div>
              <hr></hr>
              <div className="Weather">
              <img src = {bild2} className="image3"/>
              <h1>Check the weather</h1>
              <p>Lorem ipsum, une jam glup nieri</p>
              <p>Nja du tre kater pes djasht stat</p>
              <button className="knapp">Weather</button>
              </div>
              <div className="booksP">
              <img src = {bild3} className="image4"/>
              <h1>Look up books</h1>
              <p>Lorem ipsum, une jam glup nieri</p>
              <p>Nja du tre kater pes djasht stat</p>
              <button className="knapp">Books</button>
              </div>
              <div className="footerHome">
                <p></p>
                <p>Information or something about the website</p>
                <p></p>
              </div>
              <footer>
                  <h3>Follow on</h3>
                  <img src = {bild7} className="image7"/>
                  <p>Information about something.</p>
                  <p>mail@hotmail.com</p>
              </footer>
          </div>

    );
  }
  
  export default Home;
  