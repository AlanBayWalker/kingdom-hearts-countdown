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

  render() {

    setInterval(() => this.setState({ ...this.state, seconds: ((new Date()).getSeconds().toString()) }), 1800);
    setInterval(() => {
      const oneDay = 1000 * 60 * 60 * 24;
      const releaseDate = new Date('2019-1-29').getTime();
      const currentDate = new Date().getTime();
      let timeDifference = releaseDate - currentDate;
      const dayDifference = timeDifference / oneDay;

      const ms = timeDifference % 1000;
      timeDifference = (timeDifference - ms) / 1000;
      const secs = timeDifference % 60;
      timeDifference = (timeDifference - secs) / 60;
      const mins = timeDifference % 60;
      timeDifference = (timeDifference - mins) / 60;
      const hrs = timeDifference % 24;
      timeDifference = (timeDifference - hrs) / 24;
      const days = timeDifference % 24;
      // timeDifference = (timeDifference - days) / 24;

      // console.log(days + ':' + hrs + ':' + mins + ':' + secs + '.' + ms);

      this.setState(state => ({
        ...state,
        countdown: {
          seconds: `${secs.length === 1 ? '0' : ''}${secs}`,
          minutes: `${mins.length === 1 ? '0' : ''}${mins}`,
          hours: `${hrs.length === 1 ? '0' : ''}${hrs}`,
          days: `${days.length === 1 ? '0' : ''}${days}`
        }
      }), () => console.log(this.state.countdown));

    }, 1000);

    var MAX_DIGITS = 6;

    setInterval(function () {

      var html = '';
      var time = (new Date()).getTime() % 4500;
      var digit, i, number;

      if (time < 1900 && time > 700) {

        document.querySelector('.nixie-container');

        for (i = 0; i < MAX_DIGITS; i++) {
          number = Math.floor(Math.random() * 10);
          digit = new Digit(number);
          html += digit.render();
        }

        document.querySelector('.nixie-container');

        // randomise brightness when shuffling
        // $('.nixie-container .digit.active').css('opacity', Math.random() - 0.2);

      } else if (time < 700) {
            // $('.nixie-container .digit.active').css('opacity', 0.02);
      } else {

        // full brightness when not shuffling
        // $('.nixie-container .digit.active').css('opacity', 1);

      }
    }, 60);

    function Digit(number) {
      this.number = number || 0;
    }
    Digit.prototype.render = function () {
      var html = '<span class="tube">';
      for (let i = 0; i < 10; i++) {
        html += '<span class="digit ' + (i === this.number ? 'active' : '') + '">' + i + '</span>';
      }
      html += '</span>';
      return html;
    };

    const { countdown: { days, minutes, hours, seconds } } = this.state;

    return(
      <div className="countdown-container">
        <div className="flex-item" style={{ marginRight: '2rem' }}>
          <span className="tube">
            <span className={`digit ${parseInt(days[0], 10) === 0 ? 'active' : ''}`}>0</span>
            <span className={`digit ${parseInt(days[0], 10) === 1 ? 'active' : ''}`}>1</span>
            <span className={`digit ${parseInt(days[0], 10) === 2 ? 'active' : ''}`}>2</span>
            <span className={`digit ${parseInt(days[0], 10) === 3 ? 'active' : ''}`}>3</span>
            <span className={`digit ${parseInt(days[0], 10) === 4 ? 'active' : ''}`}>4</span>
            <span className={`digit ${parseInt(days[0], 10) === 5 ? 'active' : ''}`}>5</span>
            <span className={`digit ${parseInt(days[0], 10) === 6 ? 'active' : ''}`}>6</span>
            <span className={`digit ${parseInt(days[0], 10) === 7 ? 'active' : ''}`}>7</span>
            <span className={`digit ${parseInt(days[0], 10) === 8 ? 'active' : ''}`}>8</span>
            <span className={`digit ${parseInt(days[0], 10) === 9 ? 'active' : ''}`}>9</span>
          </span>
            <span className="tube">
            <span className={`digit ${parseInt(days[1], 10) === 0 ? 'active' : ''}`}>0</span>
            <span className={`digit ${parseInt(days[1], 10) === 1 ? 'active' : ''}`}>1</span>
            <span className={`digit ${parseInt(days[1], 10) === 2 ? 'active' : ''}`}>2</span>
            <span className={`digit ${parseInt(days[1], 10) === 3 ? 'active' : ''}`}>3</span>
            <span className={`digit ${parseInt(days[1], 10) === 4 ? 'active' : ''}`}>4</span>
            <span className={`digit ${parseInt(days[1], 10) === 5 ? 'active' : ''}`}>5</span>
            <span className={`digit ${parseInt(days[1], 10) === 6 ? 'active' : ''}`}>6</span>
            <span className={`digit ${parseInt(days[1], 10) === 7 ? 'active' : ''}`}>7</span>
            <span className={`digit ${parseInt(days[1], 10) === 8 ? 'active' : ''}`}>8</span>
            <span className={`digit ${parseInt(days[1], 10) === 9 ? 'active' : ''}`}>9</span>
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
            <span className="alt-digit active">D</span>
          </span>
        </div>
        {/* <span className="separator active">:</span> */}
        <div className="flex-item" style={{ marginRight: '2rem' }}>
          <span className="tube">
            <span className={`digit ${parseInt(hours[0], 10) === 0 ? 'active' : ''}`}>0</span>
            <span className={`digit ${parseInt(hours[0], 10) === 1 ? 'active' : ''}`}>1</span>
            <span className={`digit ${parseInt(hours[0], 10) === 2 ? 'active' : ''}`}>2</span>
            <span className={`digit ${parseInt(hours[0], 10) === 3 ? 'active' : ''}`}>3</span>
            <span className={`digit ${parseInt(hours[0], 10) === 4 ? 'active' : ''}`}>4</span>
            <span className={`digit ${parseInt(hours[0], 10) === 5 ? 'active' : ''}`}>5</span>
            <span className={`digit ${parseInt(hours[0], 10) === 6 ? 'active' : ''}`}>6</span>
            <span className={`digit ${parseInt(hours[0], 10) === 7 ? 'active' : ''}`}>7</span>
            <span className={`digit ${parseInt(hours[0], 10) === 8 ? 'active' : ''}`}>8</span>
            <span className={`digit ${parseInt(hours[0], 10) === 9 ? 'active' : ''}`}>9</span>
          </span>
          <span className="tube">
            <span className={`digit ${parseInt(hours[1], 10) === 0 ? 'active' : ''}`} style={parseInt(hours[1], 10) === 0 ? { opacity: Math.random() - parseInt('0.' + this.state.seconds[1]) } : {}}>0</span>
            <span className={`digit ${parseInt(hours[1], 10) === 1 ? 'active' : ''}`} style={parseInt(hours[1], 10) === 1 ? { opacity: Math.random() - parseInt('0.' + this.state.seconds[1]) } : {}}>1</span>
            <span className={`digit ${parseInt(hours[1], 10) === 2 ? 'active' : ''}`} style={parseInt(hours[1], 10) === 2 ? { opacity: Math.random() - parseInt('0.' + this.state.seconds[1]) } : {}}>2</span>
            <span className={`digit ${parseInt(hours[1], 10) === 3 ? 'active' : ''}`} style={parseInt(hours[1], 10) === 3 ? { opacity: Math.random() - parseInt('0.' + this.state.seconds[1]) } : {}}>3</span>
            <span className={`digit ${parseInt(hours[1], 10) === 4 ? 'active' : ''}`} style={parseInt(hours[1], 10) === 4 ? { opacity: Math.random() - parseInt('0.' + this.state.seconds[1]) } : {}}>4</span>
            <span className={`digit ${parseInt(hours[1], 10) === 5 ? 'active' : ''}`} style={parseInt(hours[1], 10) === 5 ? { opacity: Math.random() - parseInt('0.' + this.state.seconds[1]) } : {}}>5</span>
            <span className={`digit ${parseInt(hours[1], 10) === 6 ? 'active' : ''}`} style={parseInt(hours[1], 10) === 6 ? { opacity: Math.random() - parseInt('0.' + this.state.seconds[1]) } : {}}>6</span>
            <span className={`digit ${parseInt(hours[1], 10) === 7 ? 'active' : ''}`} style={parseInt(hours[1], 10) === 7 ? { opacity: Math.random() - parseInt('0.' + this.state.seconds[1]) } : {}}>7</span>
            <span className={`digit ${parseInt(hours[1], 10) === 8 ? 'active' : ''}`} style={parseInt(hours[1], 10) === 8 ? { opacity: Math.random() - parseInt('0.' + this.state.seconds[1]) } : {}}>8</span>
            <span className={`digit ${parseInt(hours[1], 10) === 9 ? 'active' : ''}`} style={parseInt(hours[1], 10) === 9 ? { opacity: Math.random() - parseInt('0.' + this.state.seconds[1]) } : {}}>9</span>
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
            <span className="alt-digit active">H</span>
          </span>
        </div>
        {/* <span className="separator active">:</span> */}
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
