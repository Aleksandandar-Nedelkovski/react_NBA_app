import React from 'react';

import NewsSlider from '../../../Widgets/NewsSlider/slider';
import NewsList from '../../../Widgets/NewsList/newsList';

const NewsMain = () => (
    <div>
        <NewsSlider
            type="featured"
            settings={{dots:false}}
            start={0}
            amount={5}
        />

        <NewsList
            type="cardMain"
            loadMore={true}
            start={3}
            amount={10}
        />
    </div>
)

export default NewsMain;