if (typeof Semantic === 'undefined') Semantic = {};

Semantic.Input = React.createClass({
  mixins: [Formsy.Mixin],
  getDefaultProps() {
    return {
      adds:{left:null,right:null},
    }
  },
  inputAdds:{
    left:{
      buttons:false,
      labels:false
    },
    right:{
      buttons:false,
      labels:false
    },
    ballon:false
  },
  componentDidMount(){
      //if(this.props.adds.left){

      //}
      //if(this.props.adds.right){

      //}
    //  if(this.props.adds.ballon){

      //}
  },
  changeValue(event) {
    if (this.props.onChg) this.props.onChg(event);
    this.setValue(event.currentTarget.value);
  },
  rightButton(){
    if(this.props.adds.right.buttons){
      return this.props.adds.right.buttons.map((button) => {
        return(
          <div className={"ui " + (button.accent?button.accent:'') + (button.name?" right labeled":'') + " icon button"} onClick={button.action}>
            {button.name}
            <i className={"icon " + button.icon}></i>
          </div>
        )
      })
    }
  },
  rightLabel(){
    if(this.props.adds.right.labels){
      return this.props.adds.right.labels.map((label) => {
        return(
          <div className={"ui label " + (label.accent?label.accent:'')}>
            {label.icon?<i className={label.icon + " icon"} />:null}
            {label.name}
          </div>
        )
      })
    }
  },
  leftButton(){
    if(this.props.adds.left.buttons){
      return this.props.adds.left.buttons.map((button) => {
        return(
          <div className={"ui " + (button.accent?button.accent:'') + (button.name?" right labeled":'') + " icon button"} onClick={button.action}>
            {button.name}
            <i className={"icon " + button.icon}></i>
          </div>
        )
      })
    }
  },
  leftLabel(){
    if(this.props.adds.left.labels){
      return this.props.adds.left.labels.map((label) => {
        return(
          <div className={"ui label " + (label.accent?label.accent:'')}>
            {label.name}
            {label.icon?<i className={label.icon + " icon"} />:null}
          </div>
        )
      })
    }
  },
  ballon(){
    if(this.props.adds.pointed){
      return(
        <div className="ui pointing basic label">
          {this.props.adds.pointed}
        </div>
      )
    }
  },
  classes(){
    var classes=''
    if((this.props.adds.left&&this.props.adds.left.buttons)||(this.props.adds.right&&this.props.adds.right.buttons)){
      classes+=
      ((this.props.adds.left&&this.props.adds.left.buttons)?'left ':'')+
      ((this.props.adds.right&&this.props.adds.right.buttons)?'right ':'')+
      'action'
    }
    if((this.props.adds.left&&this.props.adds.left.labels)||(this.props.adds.right&&this.props.adds.right.labels)){
      classes+= (this.props.adds.right&&this.props.adds.right.labels)?' right labeled':' labeled'
    }
    if(this.props.icon){
      classes+= ' '+this.props.icon + ' icon'
    }
    return classes
  },
  render() {


    classes = [ 'field' ];
    if (this.showRequired())  classes.push('required');
    if (this.showError())     classes.push('error');
    if (this.props.showInline)     classes.push('inline');
    if (this.props.className) classes.push(this.props.className);


    errorMessage = this.getErrorMessage();
    input = <input {...this.props} onChange={this.changeValue} value={this.getValue()} />;

    return (







      <div className={classes.join(' ')}>
      {this.props.label ? <label>{this.props.label}</label> : ""}
          <div className={"ui " + (this.props.adds?this.classes():'') +  ' input'}>
            {this.props.adds.left?this.leftLabel():null}
            {this.props.adds.left?this.leftButton():null}
            { this.props.icon ? <i className={"icon " + this.props.icon} /> : null }

            {input}


            {this.props.adds.right?this.rightButton():null}
            {this.props.adds.right?this.rightLabel():null}

          </div>
          {this.ballon()}

      </div>
    );
  }
});
