import react, {Component} from 'react'
import axios from 'axios'
import bild5 from './landskape.jpg';
import './weather.css';

class Wheather extends Component
{
    state={
        temperature:'',
        city:'',
        country:'',
        description:'',
        humidity:'',
    }

    getWheather=(e)=>
    {
        e.preventDefault();
        const city=e.target.elements.city.value
        const country=e.target.elements.country.value
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=19d209f1073eb21d71fdee91ea324a9a`).then(res=>
        {
            this.setState({
                temperature:res.data.main.temp,
                city:res.data.name,
                country:res.data.sys.country,
                humidity:res.data.main.humidity,
                description:res.data.weather[0].description,
                error:''
            })

        })
    }

    render()
    {
        return(
            <div>
            <div className="Image">
            <img src = {bild5} className="image2"/>
            <div className="ImageText">
              <h1>Weather page</h1>
              <button>Sign in</button>
              </div>
                </div>
                <div className="Layout">
                <h1 className="a1">Webpage name</h1>
                <p className="a2">Information about this webpage</p>   
                <p>More text about somethine..... Something text bla website information.</p><br></br>
                <h1>More information about</h1>
                <p>This webpage.. Lorem Ipsum bla shum interesant asht.. Robt tsames.</p>
                <p>Adriani asht i trash, robt tsames me krejt shkijet.</p>
              </div>
              <hr></hr>
                <h1 className="c1">Get the weather</h1>
                <p className="c2">Enter city and country to get information about the weather</p>
                <form onSubmit={this.getWheather} className="form1">
                    <input type="text" name="city" placeholder="city"/>
                    <input type="text" name="country" placeholder="country"/>
                    <button type="submit">Get Wheather</button>
                </form>
                <div className="info">
                <p>{this.state.temperature}</p>
                <p>{this.state.city}</p>
                <p>{this.state.country}</p>
                <p>{this.state.humidity}</p>
                <p>{this.state.description}</p>
            </div>
            <div className="footerHome">
                <p></p>
                <p>Information or something about the website</p>
                <p></p>
              </div>
              <footer>
                  <h3>Follow on;</h3>
                  <p>Information about something.</p>
                  <p>mail@hotmail.com</p>
              </footer>

            </div>
        )
    }
}
export default Wheather;