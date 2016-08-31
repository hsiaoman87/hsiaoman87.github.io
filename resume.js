var resume = {
  bio: {
    name: 'Andrew Hsiao',
    location: 'San Francisco, CA',
    cell: '314-412-8083',
    email: 'hsiaoman87@gmail.com',
    summary: 'Highly skilled software development professional bringing more than 7 years in software design, development and integration.  Experience building performant server architecture and high-quality consumer and enterprise products end-to-end.'
  },
  skills: [
    'Web front-end (Javascript, Coffeescript, Backbone, Angular, Knockout, jQuery, SASS, Bootstrap)',
    'Web development (RESTful APIs, SEO, OAuth, responsive design, security)',
    'Back-end (Rails, SQL, C#)',
    'DevOps (Heroku, New Relic)',
    'Version Control (Git, TFS)',
    'iOS development (Swift, Objective-C)'
  ],
  work_history: [
    {
      title: 'Senior Software Engineer',
      company: 'OrderAhead',
      location: 'San Francisco, CA',
      start_date: 'January 2014',
      description: 'Full-stack web and mobile developer building consumer products and internal tools for online ordering and delivery',
      descriptions: [
        `Spearheaded and managed various projects to enhance customer experience and maximize company revenue:
        <ul>
          <li>
            <strong>White label websites on</strong>
            <i class="fa fa-desktop"></i>
            <i class="fa fa-mobile"></i>
            - improved value proposition for merchants that allowed customers to directly order from the restaurants’ websites, yielding a <strong>20%</strong> increase in order volume
          </li>
          <li>
            <strong>Group ordering on</strong>
            <i class="fa fa-desktop"></i>
            <i class="fa fa-apple"></i>
            <i class="fa fa-android"></i>
            - promoted ordering in groups to save on delivery costs, increasing average order value by a factor of <strong>5x</strong>
          </li>
          <li>
            <strong>Advance ordering on</strong>
            <i class="fa fa-desktop"></i>
            <i class="fa fa-apple"></i>
            <i class="fa fa-android"></i>
             - enabled the sales team to sign numerous corporate accounts for which ordering days in advance is essential to their daily operations
          </li>
        </ul>`,
        `Controlled full ownership and implementation of proprietary tools that optimized operations related to delivery:
        <ul>
          <li><strong>Payroll system</strong> - track wages and bonuses across various payment plans and markets; streamlined payroll processing, improved payroll accuracy, and clarified weekly payroll to drivers</li>
          <li><strong>Driver iOS app</strong> - essential for receiving order instructions, reporting order status, and tracking location data</li>
          <li><strong>Dispatcher chat web app</strong> - relayed driver SMS, enabling effective real-time communication between drivers and dispatchers</li>
        </ul>`,
        'Sourced and recruited new engineers by implementing a hiring tool using LinkedIn data and identifying high-priority engineering candidates via referrals'
      ]
    },
    {
      title: 'Software Development Engineer I/II',
      company: 'Microsoft',
      location: 'Raleigh, NC',
      start_date: 'August 2009',
      end_date: 'January 2014',
      description: 'Team Foundation Server (TFS) is a scalable enterprise solution for software application lifecycle management (ALM)',
      descriptions: [
        'Implemented full-stack web features, including user and group management, source control (TFS, Git), and code review',
        'Built migration tool UI to migrate to Team Foundation Server from competitor ALM solutions',
        'Submitted and filed patent: Version control system using commit manifest database tables'
      ]
    },
    {
      title: 'SDE Intern',
      company: 'Microsoft',
      location: 'Raleigh, NC',
      start_date: 'June 2008',
      end_date: 'August 2008',
      descriptions: [
        'Implemented a desktop app in WPF to consolidate access control management for Team Foundation Server'
      ]
    }
  ],
  education: {
    school: 'Duke University',
    location: 'Durham, NC',
    degrees: ['Bachelor of Science in Computer Science', 'Bachelor of Science in Electrical & Computer Engineering'],
    end_date: 'May 2009'
  }
}

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
          {this.props.degrees.map((degree) => <li key={degree}>{degree}</li>)}
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
        <SkillsList skills={this.props.skills} />

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
