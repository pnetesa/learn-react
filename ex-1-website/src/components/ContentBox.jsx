var React = require('react');
var TitleValueBox = require('./TitleValueBox.jsx');

var ContentBox = React.createClass({
  render: function() {

    var boxCss = this.props.style || {};
    boxCss.marginBottom = '0px';
    boxCss.color = '#ffffff';

    return (
      <div className="row">
        <div className="col-sm-12">
          <TitleValueBox title={this.props.title} value={this.props.value} style={boxCss} />
          <div className="col-sm-12" style={{backgroundColor: '#ffffff', height: '60px'}}></div>
        </div>
      </div>
    );
  }
});
module.exports = ContentBox;
