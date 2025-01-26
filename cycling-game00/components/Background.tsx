import type React from "react"
import "./Background.css"

const Background: React.FC = () => {
  return (
    <div className="background">
      <div className="moving-background"></div>
      <div className="clouds">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmtP_zTSwiEY8fMbHwy-PUOsDmiVLtmaTiphb0__bGKaF1ZzIIk2-mPlJYuZsAjURxQBg&usqp=CAU"
          alt="Cloud"
          className="cloud"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlShvlMgG9_JKXMH49mRdS19J0VMIXHhvSFHQHvqnYrHQvKzv_80XLjezh_dVzpbMekz8&usqp=CAU"
          alt="Cloud"
          className="cloud"
        />
      </div>
      <div className="mountains">
        <img
          src="https://www.pngall.com/wp-content/uploads/5/Mountain-PNG-Image-File.png"
          alt="Mountain"
          className="mountain"
        />
        <img
          src="https://www.pngall.com/wp-content/uploads/5/Mountain-PNG-Image-File.png"
          alt="Mountain"
          className="mountain"
        />
      </div>
      <div className="trees">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKhPMQ_Yzw7rodVHYdpSIUSIEoZr5p55QN3A&s"
          alt="Tree"
          className="tree"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5RYEN2QCmPa1Obc6U-jjZnSPQkwp-mdSxajOAFqJm-_rtt8rh2s9sBAg1HvmZGK6bv1Y&usqp=CAU"
          alt="Tree"
          className="tree"
        />
        <img
          src="https://e7.pngegg.com/pngimages/134/374/png-clipart-beautiful-game-tree-game-tree-game-thumbnail.png"
          alt="Tree"
          className="tree"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5RYEN2QCmPa1Obc6U-jjZnSPQkwp-mdSxajOAFqJm-_rtt8rh2s9sBAg1HvmZGK6bv1Y&usqp=CAU"
          alt="Tree"
          className="tree"
        />
      </div>
      <div className="road"></div>
    </div>
  )
}

export default Background

