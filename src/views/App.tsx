import * as React from "react";

import "../styles/main.pcss";

import Card from "../components/Card/index";

import cardImage from "url:../../static/vitalik-vynarchyk-0PePaKnEmuM-unsplash.jpg";

export const App = () => (
  <div className="h-screen flex items-center justify-center">
    <Card
      title="Parcel+TypeScript+React+Tailwind Template"
      image={cardImage}
      imageAlt="Architecture"
      description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Fusce sit amet mattis augue. Pellentesque tempor tortor eu diam efficitur hendrerit a ac sem. 
Mauris sit amet tellus cursus, convallis diam.`}
      tags={["#parcel", "#typescript", "#react", "#tailwind"]}
    />
  </div>
);
