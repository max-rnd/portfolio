import React from 'react'
import ToolBar from '../../components/ToolBar'
import Header from '../../components/Header'
import AboutMe from '../../components/AboutMe'
import Studies from '../../components/Studies'
import Experience from '../../components/Experience'
import Skill from '../../components/Skill'
import Contact from '../../components/Contact'
import Footer from '../../components/Footer'

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.aboutMeChild = React.createRef()
    this.studiesChild = React.createRef()
    this.experienceChild = React.createRef()
    this.skillChild = React.createRef()
    this.contactChild = React.createRef()
  }

  render() {
    return (
      <>
        <Header />
        <ToolBar />
        <main class="mx-16">
          <AboutMe ref={this.aboutMeChild} />
          <Studies ref={this.studiesChild} />
          <Experience ref={this.experienceChild} />
          <Skill ref={this.skillChild} />
          <Contact ref={this.contactChild} />
        </main>
        <Footer />
      </>
    );
  }
}

export default Layout