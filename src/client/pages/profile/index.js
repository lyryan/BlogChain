import React from 'react';
import ArticleList from '../../components/article-list';
import ipfs from '../../services/ipfs';
import { getContractInstance, getAccount } from '../../services/EthService';

/*
 * Component rendering the profile page showing the list of articles published by a particular author
*/
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      articleCount: 0,
    };
  }
  //Get articles from IPFS & Eth
  async componentDidMount() {
    this.setState({
      contract: await getContractInstance(),
      account: await getAccount(),
    });

    const contractResult = await this.state.contract.methods.getArticleCount(this.state.account).call();
    this.setState({
      articleCount: parseInt(contractResult['_hex'])
    });

    for(let i =0; i < this.state.articleCount; i++) {
      const articleHash = await this.state.contract.methods.getArticle(this.state.account, i).call();
      const article = await ipfs.get(articleHash);
      const articleObject = JSON.parse(article[0].content.toString());
      articleObject["hash"] = articleHash;
      this.setState({ articles: [...this.state.articles, articleObject] })     
    }
  }
 
  // render the list of articles
  render() {
    return (
    <div className="list">
      <ArticleList articles={this.state.articles} />
    </div>);
  }
}

export default Profile;
