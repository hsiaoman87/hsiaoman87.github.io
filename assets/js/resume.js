class Bio extends React.Component {
  render() {
    return (
      <div className="bio">
        <h1 style={{marginBottom: 0}}>{this.props.name}</h1>
        <ul>
          <li>
            <i className="fa fa-map-marker" />
            {this.props.location}
          </li>
          <li>
            <i className="fa fa-mobile" />
            {this.props.cell}
          </li>
          <li>
            <i className="fa fa-envelope" />
            {this.props.email}
          </li>
          <li>
            <i className="fa fa-globe" />
            {this.props.website}
          </li>
        </ul>
        <p>{this.props.summary}</p>
      </div>
    )
  }
}

class SkillsList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.skills.map((skill) => <li key={skill}>{skill}</li>)}
      </ul>
    )
  }
}

class Position extends React.Component {
  render() {
    var startDate, endDate, dateDisplay
    startDate = moment(this.props.start_date)
    if (this.props.end_date) {
      endDate = moment(this.props.end_date)
      dateDisplay = `${startDate.format('MMMM YYYY')} - ${endDate.format('MMMM YYYY')}`
    }
    else {
      dateDisplay = `${startDate.format('MMMM YYYY')} - Present`
    }

    return (
      <div>
        <h3 style={{marginBottom: 0}}>{this.props.title}</h3>
        <div>
          <span>{this.props.company} - {this.props.location}</span>
          <span style={{float: 'right'}}>{dateDisplay}</span>
        </div>
        <i>{this.props.description}</i>
        <ul>
          {this.props.descriptions.map((description) => <li key={description} dangerouslySetInnerHTML={{__html: description}} />)}
        </ul>
      </div>
    )
  }
}

class School extends React.Component {
  render() {
    var dateDisplay;
    var endDate = moment(this.props.end_date)
    if (this.props.start_date) {
      var startDate = moment(this.props.start_date)
      dateDisplay = `${startDate.format('YYYY')} - ${endDate.format('YYYY')}`
    }
    else {
      dateDisplay = `Graduated ${endDate.format('YYYY')}`
    }

    return (
      <div>
        <h3 style={{marginBottom: 0}}>{this.props.school}</h3>
        <div>
          <span>{this.props.location}</span>
          <span style={{float: 'right'}}>{dateDisplay}</span>
        </div>
        <ul>
          {this.props.degrees.map((degree) => <li key={degree.long}>{degree.long}</li>)}
        </ul>
      </div>
    )
  }
}

class Resume extends React.Component {
  render() {
    return (
      <div>
        <Bio {...this.props.bio} />

        <h2>Experience</h2>
        {this.props.work_history.map((position) => <Position key={position.title} {...position} />)}

        <h2>Skills</h2>
        <SkillsList skills={this.props.skill_groups} />

        <h2>Education</h2>
        <School {...this.props.education} />
      </div>
    )
  }
}

ReactDOM.render(
  <Resume {...resume} />,
  document.getElementById('content')
)
