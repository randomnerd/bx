Modal = React.createClass({
  getDefaultProps() {
    return {
      size: '',
      positiveLabel: 'OK',
      denyLabel: 'Cancel'
    };
  },
  componentDidMount() {
    $(this.getDOMNode()).modal({
      detachable: false,
      autofocus: true,
      closable: false
    });
    $(this.getDOMNode()).modal(this.props.show ? 'show' : 'hide');
  },
  componentWillReceiveProps(newProps) {
    $(this.getDOMNode()).modal(newProps.show ? 'show' : 'hide');
  },
  render() {
    return (
      <div className={ this.props.size + " ui modal" }>
        { this.props.header ? <div className="header">{this.props.header}</div> : '' }
        <div className="content">
          {this.props.children}
        </div>
        <div className="actions">
          <div className="ui black button" onClick={this.props.onDeny}>
            { this.props.denyLabel }
          </div>
          <div className="ui green right labeled icon button" onClick={this.props.onPositive}>
            { this.props.positiveLabel }
            <i className="checkmark icon"></i>
          </div>
        </div>
      </div>
    );
  }
});
