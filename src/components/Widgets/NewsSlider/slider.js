import React, {Component} from 'react';
import axios from 'axios';

import SliderTemplates from './slider_templates';

class NewsSlider extends Component {

    state = {
        news:[]
    }

    componentWillMount() {
        axios.get('http://localhost:3004/articles')
        .then(response =>{
            this.setState({
                news:response.data
            })
        })
    }

    render() {
        return(
            <div>
                <SliderTemplates data={this.state.news} type="featured"/>
            </div>
        )
    }
}

export default NewsSlider;