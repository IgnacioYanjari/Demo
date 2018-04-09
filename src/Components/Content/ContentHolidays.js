import React,{Component} from 'react';
import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import shortid from 'shortid';

class ContentHolidays extends Component{

  constructor(props){
    super(props);
    this.state = { listOfHolidays : {} };
  }

  componentDidMount(){
    fetch('https://www.feriadosapp.com/api/holidays.json')
      .then( (response) =>{
        return response.json()
      })
      .then( (holidays) => {
        this.setState({listOfHolidays: holidays.data});
        console.log(holidays.data)
      })
      .catch( err => {
        console.log(err.name + ': ' + err.message)
      })
  }

  renderHolidays(holiday){
    return(
      <Card key ={shortid.generate()} style={{ margin:'1% 6% 1% 6%', textAlign:'center'}}>
        <CardText>
          <p> {holiday.title} </p>
          <p> {holiday.date}  </p>
          <p> {holiday.extra} </p>
        </CardText>
      </Card>
    );
  }

  render(){
    let holidays = this.state.listOfHolidays;
    return(
      <Card style={{ margin:'1% 6% 1% 6%', textAlign:'center'}} >
        {Object.keys(holidays).map(value => this.renderHolidays(holidays[value]))}
      </Card>
    )
  }
}

export default ContentHolidays;
