import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import BookAnAppointment from './BookAnAppointment'
import AppointmentForm from './AppointmentForm'
import AppointmentSuccessReview from './AppointmentSuccessReview'
import Doctors from './Doctors'
import logo from '../logo.svg';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div>
              <Link className="Link-header" to="/">Book an appointment</Link>
            </div>
          </header>
          <main>
            <Route exact path="/" component={BookAnAppointment} />
            <Route exact path="/doctors" component={Doctors} />
            <Route exact path="/appointmentForm" component={AppointmentForm} />
            <Route exact path="/appointmentSuccessReview" component={AppointmentSuccessReview} />
          </main>
      </div>
    );
  }
}

export default App;
