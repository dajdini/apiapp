import react, {Component} from 'react'
import axios from 'axios'
import './books.css';
import bild4 from './books.jpg';

class Books extends Component
{
    state={
        booklist:[]
    } 
    componentDidMount(){
        axios.get('https://localhost:44308/api/books/').then(res=>{
            console.log(res.data)
            this.setState({
                booklist:res.data
            })
        })
    }
    render()
    {
        return(
            <div>
                <div className="Image">
                <img src = {bild4} className="image2"/>
                <div className="ImageText">
              <h1>Books page</h1>
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
              <h1 className="c1">List of books</h1>
                <p className="c2">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <div className="container1">
                <table className="tableBooks">
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Author</th>
                        </tr>
                {this.state.booklist.map(book=>{
                    return(
                            <tr>
                            <td>{book.name}</td>
                            <td>{book.author}</td>
                            </tr> 
                    )
                })}
                </tbody>
                </table>
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
export default Books;