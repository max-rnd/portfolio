import React from "react";

class Contact extends React.Component {
  render() {
    return (
      <div class="pt-11 min-h-screen flex flex-col" ref={this.studiesRef}>
        <h2 class="mb-4 text-2xl">Me contacter</h2>
        <a href="mailto:renaud-max.74@outlook.fr">renaud-max.74@outlook.fr</a>
      </div>
    );
  }
}

export default Contact;
