import React, { Component } from 'react';
import {Toggle,FlatButton} from 'material-ui';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class ContentMain extends Component{
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };

  handleToggle = (event, toggle) => {
    this.setState({expanded: toggle});
  };

  handleExpand = () => {
    this.setState({expanded: true});
  };

  handleReduce = () => {
    this.setState({expanded: false});
  };

  render(){
    return(
      <div >
        <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange} style={{ margin:'2% 6% 2% 6%' , textAlign:'center'}}> 
          <CardHeader
            title="Pablo Gonzales"
            subtitle=" Fotografo"
            avatar="images/1.jpg"
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText>
            <Toggle
              toggled={this.state.expanded}
              onToggle={this.handleToggle}
              labelPosition="right"
              label="Ocultar o mostrar contenido."
            />
          </CardText>
          <CardMedia
            expandable={true}
            overlay={<CardTitle title="Bosques Hermosos" subtitle=" El verde de la naturaleza" />}
          >
            <img src="images/trees.jpg"  alt="" />
          </CardMedia>
          <CardTitle title="Ultima foto del año" subtitle="Fecha : 19/12/2017" expandable={true} />
          <CardText expandable={true}>
            Espero que tengan un buen fin de año y celebración :)
          </CardText>
          <CardActions>
            <FlatButton label="Mostrar" onClick={this.handleExpand} />
            <FlatButton label="No mostrar" onClick={this.handleReduce} />
          </CardActions>
        </Card>
      </div>
    )
  }
}

export default ContentMain;
