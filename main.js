class Title extends React.Component {
  render() {
    return (
      <div className="profile-container">
        <img className="profile" src="assets/images/profile.png" alt="" />
        <h1 className="name">{this.props.name}</h1>
        <h3 className="tagline">{this.props.subtitle}</h3>
      </div>
    )
  }
}

class Contact extends React.Component {
  render() {
    return (
      <div className="contact-container container-block">
        <ul className="list-unstyled contact-list">
          <li className="email"><i className="fa fa-envelope"></i><a href={`mailto:${this.props.email}`}>{this.props.email}</a></li>
          <li className="phone"><i className="fa fa-phone"></i><a href={`tel:${this.props.cell}`}>{this.props.cell}</a></li>
          <li className="linkedin"><i className="fa fa-linkedin"></i><a href={`https://linkedin.com/in/${this.props.linkedin}`} target="_blank">{this.props.linkedin}</a></li>
          <li className="github"><i className="fa fa-github"></i><a href={`https://github.com/${this.props.github}`} target="_blank">{this.props.github}</a></li>
        </ul>
      </div>
    )
  }
}

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({}, props);
  }
  componentDidMount () {
    if (this.props.github) {
      $.get(this.props.github).done((result) => this.setState(result))
    }
  }
  render () {
    if (this.state.html_url) {
      var githubLink = <a href={this.state.html_url} target="_blank"><i className="fa fa-github" /></a>;
    }
    return (
      <div className="item">
        <span className="project-title">
          <a href={this.state.homepage} target="_blank">{this.state.name}</a>
        </span> - <span className="project-tagline">{this.state.description}</span> {githubLink}
      </div>
    )
  }
}

class Projects extends React.Component {
  render () {
    return (
      <section className="section projects-section">
        <h2 className="section-title"><i className="fa fa-archive"></i>Projects</h2>
        {this.props.projects.map((project, index) => <Project {...project} key={index} />)}
      </section>
    )
  }
}

class Experience extends React.Component {
  render () {
    return (
      <div className="item">
        <div className="meta">
          <div className="upper-row">
            <h3 className="job-title">{this.props.title}</h3>
            <div className="time">{this.props.dates}</div>
          </div>
          <div className="company">{this.props.company}, {this.props.location}</div>
        </div>
        <div className="details">
          {this.props.descriptions.map((description, index) => <p key={index} dangerouslySetInnerHTML={{__html: description}} />)}
        </div>
      </div>
    );
  }
}

class Experiences extends React.Component {
  render() {
    return (
      <section className="section experiences-section">
        <h2 className="section-title"><i className="fa fa-briefcase"></i>Professional Experience</h2>
        {this.props.experiences.map((experience, index) => <Experience {...experience} key={index} />)}
      </section>
    );
  }
}

class Skill extends React.Component {
  render() {
    return (
      <div className="item">
        <h3 className="level-title">{this.props.name}</h3>
        <div className="level-bar">
          <div className="level-bar-inner" style={{width: `${this.props.proficiency}%`}}>
          </div>
        </div>
      </div>
    );
  }
}

class Skills extends React.Component {
  render() {
    return (
      <section className="skills-section section">
        <h2 className="section-title"><i className="fa fa-rocket"></i>Skills &amp; Proficiency</h2>
        <div className="skillset">
          {this.props.skills.map((skill, index) => <Skill key={index} {...skill} />)}
        </div>
      </section>
    );
  }
}

class Interests extends React.Component {
  render() {
    return (
      <div className="interests-container container-block">
        <h2 className="container-block-title">Interests</h2>
        <ul className="list-unstyled interests-list">
          {this.props.interests.map((interest, index) => <li key={index}>{interest}</li>)}
        </ul>
      </div>
    );
  }
}

class Education extends React.Component {
  render() {
    return (
      <div className="education-container container-block">
        <h2 className="container-block-title">Education</h2>
        <div className="item">
          <h4 className="degree">{this.props.school}</h4>
          {this.props.degrees.map((degree, index) => <h5 key={index} className="meta">{degree.short}</h5>)}
          <div className="time">{this.props.dates}</div>
        </div>
      </div>
    );
  }
}

class Summary extends React.Component {
  render() {
    return (
      <section className="section summary-section">
        <h2 className="section-title"><i className="fa fa-user"></i>Career Profile</h2>
        <div className="summary">
          {this.props.summary}
        </div>
      </section>
    );
  }
}

class Site extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="sidebar-wrapper">
          <Title {...this.props.bio} />
          <Contact {...this.props.bio} />
          <Education {...this.props.education} />
          <Interests interests={this.props.interests} />
        </div>

        <div className="main-wrapper">
          <Summary {...this.props.bio} />
          <Experiences experiences={this.props.work_history} />
          <Projects projects={this.props.projects} />
          <Skills skills={this.props.skills} />
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Site {...resume} />,
  document.getElementById('wrapper')
)
