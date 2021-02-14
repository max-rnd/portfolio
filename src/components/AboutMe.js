import React from 'react'

class AboutMe extends React.Component {
  aboutMeRef = null

  constructor(props) {
    super(props)
    this.aboutMeRef = React.createRef()
  }

  render() {
    return (
      <div class="mt-11" ref={this.aboutMeRef}>
        <h2 class="mb-4 text-2xl">À propos de moi</h2>
        <p class="text-justify mb-3">
          Max RENAUD, 20 ans, originaire de Chamonix, je suis étudiant en BTS Services Informatiques aux Organisations option Solutions Logicielles et Applications Métiers au lycée Saint-Michel à Annecy.
        </p>
        <p class="text-justify">
          Je suis passionnée d'informatique et plus particulièrement de programation depuis mon entrer en BTS.
				</p>
      </div>
    );
  }
}

export default AboutMe