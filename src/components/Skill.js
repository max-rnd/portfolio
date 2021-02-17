import React from "react";

class Skill extends React.Component {
  render() {
    const skills = {
      Programation: {
        Langages: ["HTML / CSS", "JS", "PHP", "C#", "SQL"],
        Framwork: ["Symfony", "Ruby on Rails"],
        "Bibliothèque JS": ["React", "React Native"],
        "Framwork CSS": ["Bootstrap", "Tailwind"]
      },
      Infrasructure: {
        "Systèmesd’exploitation": ["Windows", "Mac OS", "Debian"],
        Hyperviseur: ["Proxmox", "VMware", "AWS EC2", "Virtual Box", "Hyper-V"]
      }
    };
    return (
      <div class="pt-11 min-h-screen flex flex-col" ref={this.studiesRef}>
        <h2 class="mb-4 text-2xl">Mes compétances</h2>
        <SkillList skills={skills} />
      </div>
    );
  }
}

export default Skill;

class SkillList extends React.Component {
  constructor(attr) {
    super(attr);
  }
  render() {
    return (
      <div class="pt-11 min-h-screen flex flex-col" ref={this.studiesRef}>
        <h2 class="mb-4 text-2xl">Mes compétances</h2>
      </div>
    );
  }
}
