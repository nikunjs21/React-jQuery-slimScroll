// const $ = require('jquery');
// const slimScroll = require('./jquery.slimscroll.js');
import $ from 'jquery';
import slimScroll from './jquery.slimscroll.js';

// console.log(slimScroll($));

describe('slimScroll', () => {
  beforeAll(() => {
    // Initialize slimScroll
    // slimScroll($);
  });

  test('should not throw any error when called on an element', () => {
    document.body.innerHTML = '<div id="test-div"></div>';
    const $testDiv = $('#test-div');

    expect(() => {
      $testDiv.slimScroll();
    }).not.toThrow();
  });
});