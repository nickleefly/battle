var React = require('react')
var PropTypes = require('prop-types')
var api = require('../utils/api')

function SelectLanguage (props) {
  var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']
  return (
    <ul className='languages'>
      {languages.map((lang) => {
        return (
          <li
            style={lang === props.selectedLanguage ? {color: '#d0021b'} : null}
            onClick={props.onSelect.bind(null, lang)}
            key={lang}>
            {lang}
          </li>
        )
      })}
    </ul>
  )
}

class Popular extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedLanguage: 'All',
      repos: null
    }

    this.updateLanguage = this.updateLanguage.bind(this)
  }

  componentDidMount () {
    this.updateLanguage(this.state.selectedLanguage)
  }

  updateLanguage (lang) {
    this.setState({
      selectedLanguage: lang,
      repos: null
    })

    api.fetchPopularRepos(lang)
      .then(function (repos) {
        console.log(repos)
      })
    // api.fetchPopularRepos(lang)
    //   .then(function (repos) {
    //     this.setState({
    //       repos: repos
    //     })
    //   }.bind(this))
  }

  render () {
    return (
      <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage} />
      </div>
    )
  }
}

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

module.exports = Popular
