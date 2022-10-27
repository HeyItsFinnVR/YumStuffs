import React, {useState} from "react";

import {ReactComponent as DropdownOpenIcon} from "./images/hamburger-menu.svg"
import {ReactComponent as DropdownCloseIcon} from "./images/close-menu.svg"
import {ReactComponent as SearchIcon} from "./images/search-icon.svg"
import landingImage from "./images/landing-image.png"

import data from "./data.json"


function App() {

  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <div id="app">
      <header className="header">
        <nav className="navBar">
          <div className="dropdown_button_container">
            <button className="dropdown_button">
              {dropdownOpen ? 
                <DropdownCloseIcon className="dropdown_button__icon" onClick={() => {setDropdownOpen(false)} }/> 
                  : 
                <DropdownOpenIcon className="dropdown_button__icon"  onClick={() => {setDropdownOpen(true)} }/>
              }
            </button>
          </div>
          <div className="logo_container">
            <h1 className="logo underline">YumStuffs</h1>
          </div>
          <div className="search_button_container">
            <button className="search_button">
              <SearchIcon className="search_button__icon"/>
            </button>
          </div>
        </nav>
        {dropdownOpen ?
          <div className="dropdown">
            <p>Hi</p>
            <p>Stuff goes here</p>
            <p>And some more</p>
          </div>
            :
          <></>
        }
      </header>
      <div className="sections_container">
        <section className="landing_page">
          <img src={landingImage} alt="landing page" className="landing_image"/>
        </section>
        <section className="discovery_page">
          <div className="discovery_page__title_container">
            <h3 className="discovery_page__small_title"> FIND YOUR YUM</h3>
            <h1 className="discovery_page__title underline"> Discover </h1>
          </div>
          <div className="recipie_card_container">
            {data.recipes.map((recipie) => (
              <div key={recipie.title} className="recipie_card">
                <div className="recipie__image_container">
                  <img src={recipie.img_url} alt={recipie.title} className="recipie__image"/>
                </div>
                <div className="recipie__author_container">
                  <h4 className="recipie__author">Submitted by: {recipie.author.name}</h4>
                </div>
                <div className="recipie__tags_container">
                  <h4 className="recipie__tags_title">Tags:</h4>
                  {recipie.tags.map((tag) => (
                    <h5 key={tag} className="recipie__tag">{tag}</h5>
                  ))}
                </div>
                <div className="recipie__title_container">
                  <h4 className="recipie__title">{recipie.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
