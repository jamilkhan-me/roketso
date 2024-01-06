import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          The cuisine served at Roketsu is a traditional kaiseki prepared by
          chef Daisuke Hayashi. He has been trained at Kikunoi and his proven
          cooking techniques have been appreciated by many customers. His
          cuisine is based on dashi and the flavours of the seasonal ingredients
          themselves. The interior has been made in Kyoto and shipped to London,
          and assembled by the craftsmen from Nakamura Sotoji Komuten, one of
          the world's leading experts in the Sukiya style. This project started
          with a desire to follow in the footsteps of our predecessors and to
          spread the still developing category of Japanese food culture,
          kaiseki, to the world.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Kaiseki refers to a traditional Japanese multi-course meal, comparable
          to that of Western haute cuisine. ﻿Its origins lie in dishes served at
          a tea ceremony and is distinguished not only by its flavours and forms
          but also the embodiment of the spirit of 'wabi'. These dishes are able
          to express 'wabi' aesthetic through its intent to convey a sense of
          season or celebration into cuisine. As one example, the menu and the
          serving ware is completely dictated by the seasons. Kaiseki courses
          are made with meticulous attention to detail from the intricate
          flavours extracted from seasonal ingredients, aesthetics of each dish
          and portion sizes to ensure there are no waste.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
