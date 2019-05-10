import React from 'react';
import ArticleList from '../../components/article-list';

import ipfs from '../../services/ipfs';
import { getContractInstance, getAccount } from '../../services/EthService';

class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      articleCount: 0,
    };
  }

  async componentDidMount() {
    //Get articles from IPFS & Eth
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

  render() {
    return (
    <div className="list">
      <ArticleList articles={this.state.articles} />
    </div>);
  }
}

export default Profile;
