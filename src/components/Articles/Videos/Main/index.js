import React from 'react';
import VideosList from '../../../Widgets/VideosList/videosList';

const VideosMain = () => (
    <div>
        <VideosList 
            type="card"
            title={false}
            loadmote={true}
            start={0}
            amount={10}
        />
    </div>
)

export default VideosMain;