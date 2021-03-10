import React from "react";
import Skills from "../data/skills.json"

class Skill extends React.Component {
  render() {
  console.log(Skills)
    return (
      <div class="pt-11 min-h-screen flex flex-col" ref={this.studiesRef}>
        <h2 class="mb-4 text-2xl">Mes compétances</h2>
        <SkillList skills={Skills} />
      </div>
    );
  }
}

export default Skill;

class SkillList extends React.Component {

  color() {
    const color = ["blue", "red", "yellow", "purple", "green"]
    return color[Math.floor(Math.random()*color.length)]
  }

  render() {
    return (
      <div>
        {this.props.skills.map((cat) => {
          return (
            <div className="my-8 pl-4 border-l-8 border-red-500">
              <h3 className="text-4xl font-black">{cat.name}</h3>
              {cat.list.map((dom) => {
                return (
                  <div className="my-8 pl-3 border-l-4 border-blue-600">
                    <h4 className="text-2xl font-bold">{dom.name}</h4>
                    <div className="flex">
                      {dom.list.map((skill) => {
                        let color = this.color()
                        return <div className={`m-1 p-1 rounded-tl rounded-br-sm shadow-lg bg-gradient-to-r from-${color}-600 to-${color}-400 text-xl`}>{skill}</div>;
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}
