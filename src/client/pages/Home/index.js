import React from 'react';
import ArticleList from '../../components/article-list';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    }
  }

  async componentDidMount() {
    fetch(`http://localhost:3030/getall`).then((response) => response.json())
        .then((responseData) => {
          console.log(responseData);
          this.setState({articles: responseData});
        }).catch(err => console.log(err));

  }

  render() {
    return(
      <ArticleList articles={this.state.articles}/>
    );
  }
}

export default Home;
