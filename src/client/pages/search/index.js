import React from 'react';
import { withRouter } from 'react-router-dom';
import ArticleList from '../../components/article-list';
import './index.css';


class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
        };
    }

    async componentDidMount() {
        fetch(`http://localhost:3030/${this.props.location.search.substr(1)}`).then(
            response => response.json()).then(
                response => {
                    this.setState( { results: response });
                }
            ).catch(
                err => console.log(err)
            );
    }

    render() {
        return (
            <ArticleList articles={this.state.results}/>
        );
    }
}

export default withRouter(Search);
