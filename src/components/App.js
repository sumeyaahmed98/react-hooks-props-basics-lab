// App.js
import React from "react";
import Home from "./Home";
import About from "./About";

const user = {
  name: "Sumeya Ahmed",
  city: "New York",
  color: "firebrick",
  bio: "Web developer with a passion for React.",
  links: {
    github: "https://github.com/sumeyaahmed98",
    linkedin: "https://linkedin.com/in/sumeyaahmed98"
  }
};

function App() {
  return (
    <div>
      <nav>Welcome</nav> {/* required for test */}
      <section id="home">
        <Home name={user.name} city={user.city} color={user.color} />
      </section>
      <section id="about">
        <About
          bio={user.bio}
          github={user.links.github}
          linkedin={user.links.linkedin}
        />
      </section>
    </div>
  );
}

export default App;
