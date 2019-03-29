import React, {Component} from 'react'
import './login.scss'

class LoginPage extends Component {
  render() {
    return (
      <div>
        <div className="context">
          <h1>
            <i className="fas fa-graduation-cap" />
            InRoll
          </h1>
          <h2>Create and edit your class schedules</h2>
          <form onSubmit={this.props.toggleLoginPage}>
            <div className="form-field">
              <label>
                <i className="fas fa-user" />
              </label>
              <input type="email" placeholder="School email" required />
            </div>
            <div className="form-field">
              <label>
                <i className="fas fa-lock" />
              </label>
              <input type="password" placeholder="Password" required />
            </div>
            <button type="submit">Sign In</button>
          </form>
        </div>
        <div className="area">
          <ul className="circles">
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
          </ul>
        </div>
      </div>
    )
  }
}
export default LoginPage
