var React = require('react');
var TitleValueBox = require('./TitleValueBox.jsx');

var BigContentBox = React.createClass({
  render: function() {

    this.props.contentStyle.height ||
      (this.props.contentStyle.height = '250px');
    //this.props.contentStyle.borderRadius ||
    //  (this.props.contentStyle.borderRadius = '3px');

    var boxCss = {
      marginTop: '0px',
      marginBottom: '0px',
      padding: '5px',
      border: 'solid 1px #484d4d',
      backgroundColor: '#484d4d',
      color: 'white'
    }

    return (
      <div className="col-sm-12" style={{marginTop: '10px', borderRadius: '3px'}}>
        <div className="row">
          <div className="col-sm-12" style={this.props.contentStyle}></div>
        </div>
        <div className="row" style={boxCss}>
          <div className="col-sm-4">
            <TitleValueBox style={boxCss} title="Shot views" value="15080" centerText="true" swap="true" />
          </div>
          <div className="col-sm-4">
            <TitleValueBox style={boxCss} title="Likes" value="12000" centerText="true" swap="true" />
          </div>
          <div className="col-sm-4">
            <TitleValueBox style={boxCss} title="Comments" value="5100" centerText="true" swap="true" />
          </div>
        </div>
      </div>
    );
  }
});
module.exports = BigContentBox;
