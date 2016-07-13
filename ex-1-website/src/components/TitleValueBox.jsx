var React = require('react');

var TitleValueBox = React.createClass({
  render: function() {

    var className = (!!this.props.centerText) ?
      'col-sm-12 text-center' : 'col-sm-12';

    var css = this.props.style || {};
    css.border || (css.border = 'solid 1px #e9eaec');
    //css.borderRadius || (css.borderRadius = '3px');
    css.backgroundColor || (css.backgroundColor = '#ffffff');
    css.marginTop || (css.marginTop = '10px');
    css.marginBottom || (css.marginBottom = '10px');
    css.padding || (css.padding = '20px');

    if (!!this.props.swap) {
      return (
        <div style={css}>
          <div className="row">
            <div className={className}><h2>{this.props.value}</h2></div>
          </div>
          <div className="row">
            <div className={className}>{this.props.title}</div>
          </div>
        </div>
      );
    }

    return (
      <div style={css}>
        <div className="row">
          <div className={className}>{this.props.title}</div>
        </div>
        <div className="row">
          <div className={className}><h2>{this.props.value}</h2></div>
        </div>
      </div>
    );
  }
});

module.exports = TitleValueBox;
