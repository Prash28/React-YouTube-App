import React from 'react'

const VideoCard = (info) => {
    console.log("indisde videocard");
    console.log({info});
    
    const { snippet, statistics } = info.info || {};
    const { channelTitle, title, thumbnails } = info.info.snippet || {};
    console.log(title);

  return (
    <div className="max-w-72 m-3 mt-4">
        {thumbnails ? (
            <>
                <img className="w-72" src={thumbnails.medium.url} alt={title} />
                <p className="font-bold">{title}</p>
                <p>{channelTitle}</p>
                <p>{Math.trunc(parseInt(statistics.viewCount)/1000)}K views</p>
            </>
        ) : (
            <p>Nope</p>
        )}       
    </div>
  )
}

export default VideoCard