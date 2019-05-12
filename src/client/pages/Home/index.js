import React from 'react';
import ArticleList from '../../components/article-list';

/*
 * This component renders the home page of the application
*/
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    }
  }
  
  // fetch article information from database
  async componentDidMount() {
    fetch(`http://localhost:3030/getall`).then((response) => response.json())
        .then((responseData) => {
          console.log(responseData);
          this.setState({articles: responseData});
        }).catch(err => console.log(err));

  }

  // render the list of articles
  render() {
    return(
      <ArticleList articles={this.state.articles}/>
    );
  }
}

export default Home;
