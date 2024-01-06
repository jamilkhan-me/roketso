import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">
            Meals in Japan are often seen as rituals and social experiences.
          </p>
        </div>
        <p className="p__opensans">
          Our culinary philosophy centers on the essence of nature's bounty and
          the artistry of meticulous preparation. At the heart of our approach
          lies an unwavering reliance on seasonal ingredients, a commitment that
          guarantees not only freshness and taste but also an intimate
          connection to the rhythm of the natural world. In our kitchen, every
          detail matters. From the precision of knife skills while delicately
          slicing sashimi to the thoughtful arrangement of elements within a
          bento box, our dedication to perfection elevates every dining
          experience. It's not just about the taste; it's about the visual
          symphony and the sensory journey we craft with precision and care.
        </p>
      </div>

      <div className="app__chef-sign">
        <p>DAISUKE HAYASHI</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
