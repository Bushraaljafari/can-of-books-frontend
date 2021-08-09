import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import axios from 'axios';
import { withAuth0 } from "@auth0/auth0-react";

class MyFavoriteBooks extends React.Component {

  constructor(props){
    super(props);
    this.state={
      userEmail =this.props.auth0.user.userEmail,
      books = []
    }
  }

  componentDidMount(){
    this.fetchBooks()
  }

  fetchBooks = async ()=>{
    try {
      const responce = await axios.get(`${process.env.REACT_APP_SERVER}/books?email=${this.state.userEmail}`)
      this.setState({
          books: responce.data[0]?.books || []
      })
  } catch (error) {
      alert(error.message);
  }
}
  render() {
    return(
      <Jumbotron>
        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>
        <div>
            {
                    this.state.books.length > 0 &&
                    this.state.books.map((val, id) => {
                        return (
                            <div key={id}>
                                <p>Name :{val.name}</p>
                                <p>Description :{val.description}</p>
                                <p>status : {val.status}</p>
                            </div>
                        )
                    })

                }
            </div>
      </Jumbotron>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
