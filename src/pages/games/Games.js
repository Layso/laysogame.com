import React from "react";
import "./Games.css"
import meme from "../../img/ifihadone.jpg"

export default function Games() {
  return (
    <div class="games-main">
      <div class="image">
        <img class="meme" src={meme} />
      </div>
      <div class="text">
        Well.. Although that I'm working in the industry for a few years now with a few, if not a lot, personal projects as well,
        I never was able to continue until make it to production ready stage.
        I either have too much side projects or can't find the courage to finish a project and say "That's it, it's done".
        Because it's never done and there are still too much to do and add to make it as perfect as I imagine it.
        Hence, there isn't any product that I can display for you here.
        However, I'm working on to break this curse and be able to finish what I start.
        Soon, hopefully, there will be more content here for you to cheer or complain about.
      </div>
    </div>
  );
}