import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  if(!isMenuOpen) return null;

  return (
    <div className='col-span-1 shadow-lg p-3 mb-3 overflow-y-scroll min-w-40 h-[90vh]'>
      <div className='sidebar-main'>
        <ul className=''>
        <li>
          <h1>Home</h1>
          </li>
        <li>
          <h1>Shorts</h1>
          </li>
        <li>
          <h1>Subscriptions</h1>
          </li>
        <li>
          <h1>Youtube Music</h1>
        </li>
        </ul>
      </div>
      <hr className="mt-3" />
      <div className='sidebar-you mt-4'>
        <h1 className="font-bold mb-2">{"You >"}</h1>
        <ul className=''>
        <li>
          <h1>Your Channel</h1>
          </li>
        <li>
          <h1>History</h1>
          </li>
        <li>
          <h1>Playlists</h1>
          </li>
        <li>
          <h1>Your Videos</h1>
        </li>
        <li>
          <h1>Watch Later</h1>
        </li>
        <li>
          <h1>Liked Videos</h1>
        </li>
        <li>
          <h1>Downloads</h1>
        </li>
        </ul>
      </div>
      <hr className="mt-3" />
      <div className='sidebar-explore mt-4'>
        <h1 className="font-bold mb-2">Explore</h1>
        <ul className=''>
        <li>
          <h1>Trending</h1>
          </li>
        <li>
          <h1>Shopping</h1>
          </li>
        <li>
          <h1>Music</h1>
          </li>
        <li>
          <h1>Music</h1>
        </li>
        <li>
          <h1>Movies</h1>
        </li>
        <li>
          <h1>Live</h1>
        </li>
        <li>
          <h1>Gaming</h1>
        </li>
        <li>
          <h1>News</h1>
        </li>
        <li>
          <h1>Sports</h1>
        </li>
        <li>
          <h1>Courses</h1>
        </li>
        <li>
          <h1>Fashion & Beauty</h1>
        </li>
        <li>
          <h1>Podcasts</h1>
        </li>
        </ul>
      </div>
      <hr className="mt-3" />
      <div className='sidebar-more-from-yt mt-4'>
        <h1 className="font-bold mb-2">More from YouTube</h1>
        <ul className=''>
        <li>
          <h1>YouTube Studio</h1>
          </li>
        <li>
          <h1>YouTube Music</h1>
          </li>
        <li>
          <h1>YouTube Kids</h1>
          </li>
        </ul>
      </div>
      <hr className="mt-3" />
      <div className="sidebar-misc mt-4">
        <ul>
          <li>
            <h1>Settings</h1>
          </li>
          <li>
            <h1>Report history</h1>
          </li>
          <li>
            <h1>Help</h1>
          </li>
          <li>
            <h1>Send feedback</h1>
          </li>
        </ul>
      </div>
      <hr className="mt-3" />
    </div>
  )
}

export default Sidebar