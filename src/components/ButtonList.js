import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const button_titles = ["All","Music","Gaming","Valorant","Tamil Cinema","Sport bikes","Podcasts","Live","Dramedy","Gadgets","Bodybuilding","Recently Uploaded","Watched","New to you"];
  return (
    <div className="flex flex-row min-w-60 overflow-x-auto w-full">
      {button_titles.map(title => (
        <Button key={title} name={title} />
      ))}
    </div>
  )
}

export default ButtonList