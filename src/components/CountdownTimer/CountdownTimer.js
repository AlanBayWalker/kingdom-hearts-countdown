import React, { Component } from 'react';
import './CountdownTimer.scss';

class CountdownTimer extends Component {
  state = {
    seconds: 0,
    countdown: {
      seconds: '00',
      minutes: '00',
      hours: '00',
      days: '00'
    }
  }

  componentDidMount () {
    const { fixNumber } = this;
    setInterval(() => this.setState({ ...this.state, seconds: ((new Date()).getSeconds().toString()) }), 1800);
    setInterval(() => {
      const releaseDate = new Date('2019-1-29').getTime();
      const currentDate = new Date().getTime();
      let timeDifference = releaseDate - currentDate;

      const ms = timeDifference % 1000;
      timeDifference = (timeDifference - ms) / 1000;
      const secs = timeDifference % 60;
      timeDifference = (timeDifference - secs) / 60;
      const mins = timeDifference % 60;
      timeDifference = (timeDifference - mins) / 60;
      const hrs = timeDifference % 24;
      timeDifference = (timeDifference - hrs) / 24;
      const days = timeDifference % 24;

      this.setState(state => ({
        ...state,
        countdown: {
          seconds: fixNumber(secs) + secs,
          minutes: fixNumber(mins) + mins,
          hours: fixNumber(hrs) + hrs,
          days: fixNumber(days) + days
        }
      }));

    }, 1000);
  }

  fixNumber = num => num.toString().length === 1 ? '0' : '';

  createTube = (tubeType, element, styled) => {
    const { countdown: { minutes, seconds } } = this.state;
    const totalDigits = 9;
    const digits = [];


    for(let i = 0; i <= totalDigits; i++) {
      console.log(parseInt(seconds[1], 10), styled);
      const conditionalDigit = (
        <span
          className={`digit ${parseInt(element, 10) === i ? 'active' : ''}`} key={Math.random() * 1000000}
          style={
            (parseInt(seconds[1], 10) % 2 === 0 || parseInt(seconds[1], 10) % 3 === 0  || parseInt(seconds[1], 10) % 5 === 0) && styled
              ? { opacity: Math.random() - parseInt('0.' + seconds[1]) }
              : {}
          }
        >
          {i}
        </span>
      );

      const letterDigit = (
        <span className="digit" key={Math.random() * 1000000}>
          0
        </span>
      );

      tubeType === 'letter'
        ? digits.push(letterDigit)
        : digits.push(conditionalDigit);
    };

    return (
      <span className="tube">
        {digits}
        {tubeType === 'letter' ? <span className="alt-digit active">{element}</span> : null}
      </span>
    );
  }

  render () {
    const { countdown: { days, minutes, hours, seconds } } = this.state;

    return(
      <div className="countdown-container">

        <div className="flex-item" style={{ marginRight: '2rem' }}>
          {this.createTube('number', days[0])}
          {this.createTube('number', days[1])}
          {this.createTube('letter', 'D')}
        </div>
        <div className="flex-item" style={{ marginRight: '2rem' }}>
          {this.createTube('number', hours[0])}
          {this.createTube('number', hours[1], true)}
          {this.createTube('letter', 'H')}
        </div>
        <div className="flex-item" style={{ marginRight: '2rem' }}>
          <span className="tube">
            <span className={`digit ${parseInt(minutes[0], 10) === 0 ? 'active' : ''}`} style={parseInt(minutes[0], 10) === 0 ? { opacity: Math.random() - parseInt('0.' + this.state.seconds[1]) } : {}}>0</span>
            <span className={`digit ${parseInt(minutes[0], 10) === 1 ? 'active' : ''}`} style={parseInt(minutes[0], 10) === 1 ? { opacity: Math.random() - parseInt('0.' + this.state.seconds[1]) } : {}}>1</span>
            <span className={`digit ${parseInt(minutes[0], 10) === 2 ? 'active' : ''}`} style={parseInt(minutes[0], 10) === 2 ? { opacity: Math.random() - parseInt('0.' + this.state.seconds[1]) } : {}}>2</span>
            <span className={`digit ${parseInt(minutes[0], 10) === 3 ? 'active' : ''}`} style={parseInt(minutes[0], 10) === 3 ? { opacity: Math.random() - parseInt('0.' + this.state.seconds[1]) } : {}}>3</span>
            <span className={`digit ${parseInt(minutes[0], 10) === 4 ? 'active' : ''}`} style={parseInt(minutes[0], 10) === 4 ? { opacity: Math.random() - parseInt('0.' + this.state.seconds[1]) } : {}}>4</span>
            <span className={`digit ${parseInt(minutes[0], 10) === 5 ? 'active' : ''}`} style={parseInt(minutes[0], 10) === 5 ? { opacity: Math.random() - parseInt('0.' + this.state.seconds[1]) } : {}}>5</span>
            <span className={`digit ${parseInt(minutes[0], 10) === 6 ? 'active' : ''}`} style={parseInt(minutes[0], 10) === 6 ? { opacity: Math.random() - parseInt('0.' + this.state.seconds[1]) } : {}}>6</span>
            <span className={`digit ${parseInt(minutes[0], 10) === 7 ? 'active' : ''}`} style={parseInt(minutes[0], 10) === 7 ? { opacity: Math.random() - parseInt('0.' + this.state.seconds[1]) } : {}}>7</span>
            <span className={`digit ${parseInt(minutes[0], 10) === 8 ? 'active' : ''}`} style={parseInt(minutes[0], 10) === 8 ? { opacity: Math.random() - parseInt('0.' + this.state.seconds[1]) } : {}}>8</span>
            <span className={`digit ${parseInt(minutes[0], 10) === 9 ? 'active' : ''}`} style={parseInt(minutes[0], 10) === 9 ? { opacity: Math.random() - parseInt('0.' + this.state.seconds[1]) } : {}}>9</span>
          </span>
          <span className="tube">
            <span className={`digit ${parseInt(minutes[1], 10) === 0 ? 'active' : ''}`}>0</span>
            <span className={`digit ${parseInt(minutes[1], 10) === 1 ? 'active' : ''}`}>1</span>
            <span className={`digit ${parseInt(minutes[1], 10) === 2 ? 'active' : ''}`}>2</span>
            <span className={`digit ${parseInt(minutes[1], 10) === 3 ? 'active' : ''}`}>3</span>
            <span className={`digit ${parseInt(minutes[1], 10) === 4 ? 'active' : ''}`}>4</span>
            <span className={`digit ${parseInt(minutes[1], 10) === 5 ? 'active' : ''}`}>5</span>
            <span className={`digit ${parseInt(minutes[1], 10) === 6 ? 'active' : ''}`}>6</span>
            <span className={`digit ${parseInt(minutes[1], 10) === 7 ? 'active' : ''}`}>7</span>
            <span className={`digit ${parseInt(minutes[1], 10) === 8 ? 'active' : ''}`}>8</span>
            <span className={`digit ${parseInt(minutes[1], 10) === 9 ? 'active' : ''}`}>9</span>
          </span>
          <span className="tube">
            <span className="digit">0</span>
            <span className="digit">1</span>
            <span className="digit">2</span>
            <span className="digit">3</span>
            <span className="digit">4</span>
            <span className="digit">5</span>
            <span className="digit">6</span>
            <span className="digit">7</span>
            <span className="digit">8</span>
            <span className="digit">9</span>
            <span className="alt-digit active">M</span>
          </span>
        </div>
        {/* <span className="separator active">:</span> */}
        <div className="flex-item">
          <span className="tube">
            <span className={`digit ${parseInt(seconds[0], 10) === 0 ? 'active' : ''}`}>0</span>
            <span className={`digit ${parseInt(seconds[0], 10) === 1 ? 'active' : ''}`}>1</span>
            <span className={`digit ${parseInt(seconds[0], 10) === 2 ? 'active' : ''}`}>2</span>
            <span className={`digit ${parseInt(seconds[0], 10) === 3 ? 'active' : ''}`}>3</span>
            <span className={`digit ${parseInt(seconds[0], 10) === 4 ? 'active' : ''}`}>4</span>
            <span className={`digit ${parseInt(seconds[0], 10) === 5 ? 'active' : ''}`}>5</span>
            <span className={`digit ${parseInt(seconds[0], 10) === 6 ? 'active' : ''}`}>6</span>
            <span className={`digit ${parseInt(seconds[0], 10) === 7 ? 'active' : ''}`}>7</span>
            <span className={`digit ${parseInt(seconds[0], 10) === 8 ? 'active' : ''}`}>8</span>
            <span className={`digit ${parseInt(seconds[0], 10) === 9 ? 'active' : ''}`}>9</span>
          </span>
          <span className="tube">
            <span className={`digit ${parseInt(seconds[1], 10) === 0 ? 'active' : ''}`} style={parseInt(seconds[1], 10) === 0 ? { opacity: Math.random() - parseInt('0.' + this.state.seconds[1]) } : {}}>0</span>
            <span className={`digit ${parseInt(seconds[1], 10) === 1 ? 'active' : ''}`} style={parseInt(seconds[1], 10) === 1 ? { opacity: Math.random() - parseInt('0.' + this.state.seconds[1]) } : {}}>1</span>
            <span className={`digit ${parseInt(seconds[1], 10) === 2 ? 'active' : ''}`} style={parseInt(seconds[1], 10) === 2 ? { opacity: Math.random() - parseInt('0.' + this.state.seconds[1]) } : {}}>2</span>
            <span className={`digit ${parseInt(seconds[1], 10) === 3 ? 'active' : ''}`} style={parseInt(seconds[1], 10) === 3 ? { opacity: Math.random() - parseInt('0.' + this.state.seconds[1]) } : {}}>3</span>
            <span className={`digit ${parseInt(seconds[1], 10) === 4 ? 'active' : ''}`} style={parseInt(seconds[1], 10) === 4 ? { opacity: Math.random() - parseInt('0.' + this.state.seconds[1]) } : {}}>4</span>
            <span className={`digit ${parseInt(seconds[1], 10) === 5 ? 'active' : ''}`} style={parseInt(seconds[1], 10) === 5 ? { opacity: Math.random() - parseInt('0.' + this.state.seconds[1]) } : {}}>5</span>
            <span className={`digit ${parseInt(seconds[1], 10) === 6 ? 'active' : ''}`} style={parseInt(seconds[1], 10) === 6 ? { opacity: Math.random() - parseInt('0.' + this.state.seconds[1]) } : {}}>6</span>
            <span className={`digit ${parseInt(seconds[1], 10) === 7 ? 'active' : ''}`} style={parseInt(seconds[1], 10) === 7 ? { opacity: Math.random() - parseInt('0.' + this.state.seconds[1]) } : {}}>7</span>
            <span className={`digit ${parseInt(seconds[1], 10) === 8 ? 'active' : ''}`} style={parseInt(seconds[1], 10) === 8 ? { opacity: Math.random() - parseInt('0.' + this.state.seconds[1]) } : {}}>8</span>
            <span className={`digit ${parseInt(seconds[1], 10) === 9 ? 'active' : ''}`} style={parseInt(seconds[1], 10) === 9 ? { opacity: Math.random() - parseInt('0.' + this.state.seconds[1]) } : {}}>9</span>
          </span>
          <span className="tube">
            <span className="digit">0</span>
            <span className="digit">1</span>
            <span className="digit">2</span>
            <span className="digit">3</span>
            <span className="digit">4</span>
            <span className="digit">5</span>
            <span className="digit">6</span>
            <span className="digit">7</span>
            <span className="digit">8</span>
            <span className="digit">9</span>
            <span className="alt-digit active">S</span>
          </span>
        </div>
      </div>
    );
  }
}

export default CountdownTimer;
