import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';

const Head = () => {
    const dispatch = useDispatch();

    const toggleMenuHandler = () => {
        dispatch(toggleMenu())
    }
  return (
    <div className='grid grid-flow-col p-1 m-2'> {/* shadow-lg */}
        <div className="flex col-span-1 justify-start p-1 align-top">
            <img
                onClick={() => toggleMenuHandler()}
                className="h-6 mr-3 box-border cursor-pointer"
                alt="menu"
                src="https://as1.ftcdn.net/v2/jpg/01/09/45/80/1000_F_109458015_QsWmchlzuwCZPqIUWR7HcTDsbbptejRv.jpg"
            />
            <img
                className="h-6 mx-2 justify-center cursor-pointer"
                alt="yt-logo"
                src="https://cdn.icon-icons.com/icons2/2699/PNG/512/youtube_logo_icon_167938.png"
            />
        </div>
        <div className="col-span-10 text-center p-0">
            <div className="mr-2 text-m">
            <input className="input border border-gray-300 rounded-l-full w-1/2 p-1 px-3" type="text" placeholder="Search" />
            <button className="border border-gray-300 mr-4 rounded-r-full p-1 px-3 bg-gray-100">
            <span className="fa-solid fa-magnifying-glass"></span>
            </button>
            <button className="bg-gray-100 rounded-full px-2 border border-gray-100">
            <i className="fa-solid fa-microphone"></i>
            </button>
            </div>
        </div>
        <div className="col-span-1 flex flex-row justify-between ml-0 pl-3">
        <img className="h-7" alt="create" src="https://static.thenounproject.com/png/3750242-200.png" />
        <img
                className="h-7"
                alt="notification-bell"
                src="https://preview.redd.it/q66sibd5ue671.png?width=900&format=png&auto=webp&s=9a8f5364d5989e21c0690f593e374fadf2d90ed1"
            />
            <img
                className="h-7"
                alt="user"
                src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
            />
        </div>
    </div>
  )
}

export default Head