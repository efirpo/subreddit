import React from 'react';
import PropTypes from 'prop-types';

function Reply(props) {

  const divStyle = {
    margin: "2vw"
  }
  const dateStyles = {
    fontSize: "1.4vh",
    color: "darkSlateGray"
  }
  return (
    <React.Fragment>
      <div style={divStyle}>
        <h4>{props.comment}</h4>
        <p style={dateStyles}>{props.date}</p>
      </div>
    </React.Fragment>
  )

}

Reply.propTypes = {
  comment: PropTypes.string,
  date: PropTypes.string
}
export default Reply