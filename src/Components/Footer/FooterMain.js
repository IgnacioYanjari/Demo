import React,{Component} from 'react'
import {Card, CardText} from 'material-ui/Card';

class FooterMain extends Component{
  render(){
    return(
      <footer>
        <Card style={{backgroundColor : '#212121', textAlign:'center'}}>
          <CardText color = 'white'>
            Creado por Ignacio Yanjari
          </CardText>
        </Card>
      </footer>
    )
  }
}

export default FooterMain;
