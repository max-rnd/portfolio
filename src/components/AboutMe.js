import React from 'react'

class AboutMe extends React.Component {
  aboutMeRef = null

  constructor(props) {
    super(props)
    this.aboutMeRef = React.createRef()
  }

  render() {
    const AGE =
      Math.abs(new Date(
        new Date(Date.now() - new Date(2000, 10, 18).getTime())
      ).getUTCFullYear() - 1970) // Date.new() = nombre de millisecondes depuis le 1er janvier 1970

    return (
      <div class="pt-11 min-h-screen border-dashed border-t-4 border-black" ref={this.aboutMeRef}>
        <h2 class="mb-4 text-2xl">À propos de moi</h2>
        <p class="text-justify mb-3">
          Max RENAUD, {AGE} ans, originaire de Chamonix, je suis étudiant en BTS Services Informatiques aux Organisations option Solutions Logicielles et Applications Métiers au lycée Saint-Michel à Annecy.
        </p>
        <p class="text-justify">
          Je suis passionnée d'informatique et plus particulièrement de programmation depuis mon entrer en BTS.
				</p>
      </div>
    );
  }
}

export default AboutMe