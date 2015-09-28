Sidebar = React.createClass({
  mixins: [ReactMeteorData],
  getInitialState() {
    return {

    };
  },

  getMeteorData() {
    return {

    };
  },
  componentDidMount() {
    //$this=this;
    $(this.getDOMNode()).sidebar({
      context: $('.body'),
      onHidden:()=>{
        $('.body').css('overflow-y','auto')
      }
    });
    $(this.getDOMNode()).sidebar(this.props.show ? 'show' : 'hide');
  },
  componentWillReceiveProps(newProps) {
    $(this.getDOMNode()).sidebar(newProps.show ? 'show' : 'hide');
  },

  delAllMessages(){
    //Dispatcher.dispatch({ actionType: 'SHOW_SIDEBAR', payload: { addr: this.props.item } })
  },

  render() {
    return (
      <div className="ui right inverted sidebar">

        {this.props.children}

      </div>
    )
  }
});
