import React from "react";

class Skill extends React.Component {
  render() {
    const skills = [
      {
        name: "Programation",
        list: [
          { name: "Langages", list: ["HTML / CSS", "JS", "PHP", "C#", "SQL"] },
          { name: "Framwork", list: ["Symfony", "Ruby on Rails"] },
          { name: "Bibliothèque JS", list: ["React", "React Native"] },
          { name: "Framwork CSS", list: ["Bootstrap", "Tailwind"] }
        ]
      },
      {
        name: "Infrasructure",
        list: [
          {
            name: "Systèmes d’exploitation",
            list: ["Windows", "Mac OS", "Debian"]
          },
          {
            name: "Hyperviseur",
            list: ["Proxmox", "VMware", "AWS EC2", "Virtual Box", "Hyper-V"]
          }
        ]
      }
    ];
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
  render() {
    return (
      <div>
        {this.props.skills.map((cat) => {
          return (
            <>
              <h3>{cat.name}</h3>
              {cat.list.map((dom) => {
                return (
                  <>
                    <h4>{dom.name}</h4>
                    <ul>
                      {dom.list.map((skill) => {
                        return <li>{skill}</li>;
                      })}
                    </ul>
                  </>
                );
              })}
            </>
          );
        })}
      </div>
    );
  }
}
