import React, { Component } from 'react';
import {
  Wrapper,
  FlexItem,
  Tube,
  Digit,
  Active,
  AltDigit,
} from './styles';

export default class CountdownTimer extends Component {
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
      const conditionalDigit = parseInt(element, 10) === i
        ? (
            <Active
              key={Math.random() * 1000000}
              style={
                (parseInt(seconds[1], 10) % 2 === 0 || parseInt(seconds[1], 10) % 3 === 0  || parseInt(seconds[1], 10) % 5 === 0) && styled
                  ? { opacity: Math.random() - parseInt('0.' + seconds[1]) }
                  : {}
              }
            >
              {i}
            </Active>
        )
        : (
            <Digit
              key={Math.random() * 1000000}
            >
              {i}
            </Digit>
          );

      const letterDigit = (
        <Digit key={Math.random() * 1000000}>
          0
        </Digit>
      );

      tubeType === 'letter'
        ? digits.push(letterDigit)
        : digits.push(conditionalDigit);
    };

    return (
      <Tube>
        {digits}
        {tubeType === 'letter' ? <AltDigit>{element}</AltDigit> : null}
      </Tube>
    );
  }

  render () {
    const { countdown: { days, minutes, hours, seconds } } = this.state;

    return(
      <Wrapper>
        <FlexItem style={{ marginRight: '2rem' }}>
          {this.createTube('number', days[0])}
          {this.createTube('number', days[1])}
          {this.createTube('letter', 'D')}
        </FlexItem>

        <FlexItem style={{ marginRight: '2rem' }}>
          {this.createTube('number', hours[0])}
          {this.createTube('number', hours[1], true)}
          {this.createTube('letter', 'H')}
        </FlexItem>

        <FlexItem style={{ marginRight: '2rem' }}>
          {this.createTube('number', minutes[0], true)}
          {this.createTube('number', minutes[1])}
          {this.createTube('letter', 'M')}
        </FlexItem>

        <FlexItem>
          {this.createTube('number', seconds[0])}
          {this.createTube('number', seconds[1], true)}
          {this.createTube('letter', 'S')}
        </FlexItem>
      </Wrapper>
    );
  }
}
