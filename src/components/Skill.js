import React from "react";

class Skill extends React.Component {
  render() {
    const skills = [
      {
        name: "Programation",
        list: [
          {
            name: "Langages", list: [
              <li class="devicon-html5-plain">HTML</li>,
              <li class="devicon-css3-plain">CSS</li>,
              <li class="devicon-javascript-plain">JavaScript</li>,
              <li class="devicon-csharp-plain">C#</li>,
              <li class="devicon-mysql-plain">MySQL</li>,
              <li class="devicon-ruby-plain">Ruby</li>
            ]
          },
          {
            name: "Framwork", list: [
              <li class="devicon-symfony-original">Symfony</li>,
              <li class="devicon-rails-plain">Ruby on Rails</li>
            ]
          },
          {
            name: "Bibliothèque JS", list: [
              <li class="devicon-react-original">React</li>
            ]
          },
          {
            name: "Framwork CSS", list: [
              <li class="devicon-bootstrap-plain">Bootstrap</li>,
              <li>Tailwind</li>
            ]
          },
          {
            name: "IDE", list: [
              <li class="devicon-intellij-plain">IntelliJ</li>,
              <li>VS Code</li>,
              <li>CodeSandbox</li>
            ]
          },
          {
            name: "Outils", list: [
              <li class="devicon-github-original">GitHub</li>,
              <li class="devicon-composer-line">Composer</li>,
              <li>DevHints.io</li>,
            ]
          }
        ]
      },
      {
        name: "Infrasructure",
        list: [
          {
            name: "Systèmes d’exploitation",
            list: [
              <li class="devicon-windows8-original">Windows</li>,
              <li class="devicon-apple-original">Mac OS</li>,
              <li class="devicon-debian-plain">Debian</li>
            ]
          },
          {
            name: "Hyperviseur",
            list: [
              <li>Proxmox</li>,
              <li>VMware</li>,
              <li>Virtual Box</li>,
              <li>Hyper-V</li>,
              <li>AWS EC2</li>,
              <li>Infomanick</li>
            ]
          },
          {
            name: "Hébergeur",
            list: [
              <li class="devicon-amazonwebservices-original">AWS EC2</li>,
              <li>Infomanick</li>
            ]
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
                        return skill;
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
