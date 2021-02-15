import React from 'react'

class Studies extends React.Component {
  studiesRef = null

  constructor(props) {
    super(props)
    this.studiesRef = React.createRef
  }

  render() {
    return (
      <article class="pt-11 min-h-screen flex flex-col" ref={this.studiesRef}>
        <h2 class="mb-4 text-2xl">Mes Étudess</h2>
        <Study
          institu="Saint-Vincent de Paul, Collonges-sous-Salève"
          date="2016 - 2019"
          section="Système Numérique"
          option="Réseaux Informatiques et Systèmes Communicants"
          qualification="Baccalauréat Professionnel (mention Bien)"
        />
        <Study
          institu="Saint-Michel, Annecy"
          date="2019 - 2021"
          section="Service Informatique aux Organisations"
          option="Solutions Logicielles et Applications Métiers"
          qualification="Brevet de technicien supérieur - en cours"
        />
      </article>
    );
  }
}

export default Studies

class Study extends React.Component {
  render() {
    return (
      <div class="shadow-lg p-4 mt-4">
        <div class="flex justify-between">
          <h2 class="text-xl">{this.props.section}</h2>
          <h2 class="text-xl">{this.props.date}</h2>
        </div>
        <p>option {this.props.option}</p>
      </div>
    )
  }
}