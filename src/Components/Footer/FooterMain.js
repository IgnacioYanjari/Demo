import React,{Component} from 'react'
import {Card, CardText} from 'material-ui/Card';

class FooterMain extends Component{
  render(){
    return(
      <footer>
        <Card style={{backgroundColor : '#212121'}}>
          <CardText color = 'white' style={{textAling:'center'}} >
            Creado por Ignacio Yanjari
          </CardText>
        </Card>
      </footer>
    )
  }
}

export default FooterMain;
