"use strict";

var React = require('react');

var CourseList = require('./courseList');

var coursePage = React.createClass({

  render: function() {
    return (
      <div>
        <h1>Courses</h1>
        <CourseList />
      </div>
    );
  }
});

module.exports = coursePage;
