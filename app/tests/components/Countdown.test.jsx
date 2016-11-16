var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jquery');


var Countdown = require('Countdown');

describe('Countdown', () => {
  it('should exits Countdown', () => {
    expect('Countdown').toExist();
  });

  describe('handleSetCountdown',() => {
    it('should check handleSetCountdown section for status', () => {
      var spy = expect.createSpy();
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(10);

      expect(countdown.state.count).toBe(10);
      expect(countdown.state.countdownStatus).toBe('started');

      setTimeout(() => {
        expect(countdown.state.count).toBe(9);
      },1001)
    });
    it('should show Zero While seconds are negative', () => {
      var spy = expect.createSpy();
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.startTimer(1);

      expect(countdown.state.count).toBe(0);
      expect(countdown.state.countdownStatus).toBe('stopped');

      setTimeout(() => {
        expect(countdown.state.count).toBe(0);
      },3001)
    });
  });

});
