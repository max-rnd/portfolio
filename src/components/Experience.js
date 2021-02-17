import React from "react";

class Experience extends React.Component {
  render() {
    return (
      <div class="pt-11 min-h-screen flex flex-col" ref={this.studiesRef}>
        <h2 class="mb-4 text-2xl">Mes expériences professionnel</h2>
        <Exp
          date="2021"
          name="FLEURS POIS & CIE"
          duration="5"
          description="Création d'un site web de gestion des stocks"
        />
        <Exp
          date="2018 - 2019"
          name="ECOLE NATIONALEDE SKI ET D’ALPINISME"
          duration="12"
          description="Gestion parc informatique –Création de script –Installationd’un reverse proxy –GestionGLPI –Gestion WSUS"
        />
        <Exp
          date="2019"
          name="COMMUNAUTE DE COMMUNES PAYS DU MONT-BLANC"
          duration="4"
          description="Mise en place d’un Firewall -Installation de GLPI"
        />
      </div>
    );
  }
}

export default Experience;

class Exp extends React.Component {
  render() {
    return (
      <div class="shadow-lg p-4 mt-4">
        <div class="flex justify-between">
          <h2 class="text-xl">{this.props.name}</h2>
          <h2 class="text-xl">{this.props.date}</h2>
        </div>
        <p>{this.props.duration} semaines de stage</p>
      </div>
    );
  }
}
