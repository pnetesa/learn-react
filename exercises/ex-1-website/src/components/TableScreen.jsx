var React = require('react');
var TitleValueBox = require('./TitleValueBox.jsx');
var BigContentBox = require('./BigContentBox.jsx');
var ContentBox = require('./ContentBox.jsx');

var TableScreen = React.createClass({

  render: function() {

    var weatherCss = {
      marginTop: '10px',
      marginBottom: '10px',
      backgroundColor: '#484d4d',
      color: 'white'
    }

    return (
      <div className="panel" style={{backgroundColor: '#f5f7fa'}}>
        <div className="row">
          <div className="col-sm-9">
            <div className="row">
              <div className="col-sm-4">
                <TitleValueBox title="New followers added this month" value="20" swap="true" />
              </div>
              <div className="col-sm-4">
                <TitleValueBox title="Average monthly income" value="$ 1250" swap="true"></TitleValueBox>
              </div>
              <div className="col-sm-4">
                <TitleValueBox title="Yearly income goal" value="$ 13865" swap="true" />
              </div>
            </div>
            <div className="row">
              <BigContentBox contentStyle={{backgroundColor: '#0096d0'}} />
            </div>
            <div className="row">
              <BigContentBox contentStyle={{backgroundColor: '#cd59ae'}} />
            </div>
          </div>
          <div className="col-sm-3">
            <div className="row">
              <div className="col-sm-12">
                <TitleValueBox title="Paris" value="18°" style={{backgroundColor: '#ff8a00', color: '#ffffff'}} centerText="true" swap="true" />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <ContentBox title="New visitors" style={{backgroundColor: '#0096d0'}} value="1.5k" />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <ContentBox title="Bounce Rate" style={{backgroundColor: '#b28ad6'}} value="50%" />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <ContentBox title="Searchs" style={{backgroundColor: '#ff4826'}} value="28%" />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <ContentBox title="Traffic" style={{backgroundColor: '#63c254'}} value="140.5 kb" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TableScreen;
