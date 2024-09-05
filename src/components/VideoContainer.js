import React, { useState, useEffect } from 'react'
import { YOUTUBE_VIDEOS_API } from '../../../constants';
import VideoCard from './VideoCard';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    if(!isFetched){
      getVideos();
      console.log(videos[0]);
    }
  }, [isFetched])

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items);
    setIsFetched(true);
  }

  return (
    <div className="flex flex-wrap ml-2 pl-3">
      {videos.map(video => (
        <VideoCard key={video.id} info={video} /> 
      ))}
        
      {/* {console.log(videos[0])} */}
    </div>
  )
}

export default VideoContainer