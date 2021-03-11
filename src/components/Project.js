import React from "react";

class Project extends React.Component {
  render() {
    return (
      <div class="pt-11 min-h-screen flex flex-col" ref={this.projectRef}>
        <h2 class="mb-4 text-2xl">Les projets sur lesquels j'ai travaillé</h2>
        <a href="mailto:renaud-max.74@outlook.fr">renaud-max.74@outlook.fr</a>
      </div>
    );
  }
}

export default Project;
