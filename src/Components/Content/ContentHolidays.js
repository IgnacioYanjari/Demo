import React,{Component} from 'react';
import {Card, CardText} from 'material-ui/Card';
import {CircularProgress} from 'material-ui';
import {notification} from 'antd';
import shortid from 'shortid';

class ContentHolidays extends Component{

  constructor(props){
    super(props);
    this.state = {
      listOfHolidays : {} ,
      today : new Date()
    };
  }

  componentDidMount(){
    fetch('https://www.feriadosapp.com/api/holidays.json')
      .then( (response) =>{
        return response.json()
      })
      .then( (holidays) => {
        this.setState({listOfHolidays: holidays.data});
      })
      .catch( err => {
        console.log(err.name + ': ' + err.message)
      })
    }

  renderPanelHoliday(holiday){
    return(
      <Card key ={shortid.generate()} style={{ margin:'1% 6% 1% 6%', textAlign:'center'}}>
        <CardText>
          <p> {holiday.title} </p>
          <p> {holiday.date}  </p>
          <p> {holiday.extra} </p>
        </CardText>
      </Card>
    )
  }

  renderAlert(holiday){
    return(
      <div key ={shortid.generate()}>
        {this.renderPanelHoliday(holiday)}
        {notification['success']({
          message: 'Feriado más cercano:',
          placement:'bottomRight',
          duration: 20,
          description:
          <div>
            <p> Razón : {holiday.title} </p>
            <p> Fecha : {holiday.date} </p>
            <p> Extra : {holiday.extra} </p>
          </div>
        })}
      </div>
    );
  }

  renderHolidays(holidays){
    let firstHoliday=true;
    let today = this.state.today;
    let year = today.getFullYear().toString() ,
      month = today.getMonth()+1, day = today.getDate();
    return Object.keys(holidays).map( key => {
      let holiday = holidays[key];
      let date = holiday.date.split("-");
      let apiYear = date[0]
      const isMyYear = (apiYear.substr(0,4) === year );
      if( isMyYear){
        if( (date[1] >= month || (date[1] === month && date[2] >= day) ) && firstHoliday) {
            firstHoliday=false;
            return(this.renderAlert(holiday))
          }
        return(this.renderPanelHoliday(holiday));
      }
      return(
          <div key ={shortid.generate()}> </div>
      );
    });
  }

  render(){
    let holidays = this.state.listOfHolidays;
    console.log('largo ' + Object.keys(holidays).length)
    return(
      <div>

        { Object.keys(holidays).length === 0 ?(
            <CircularProgress style={{textAlign:'center'}}size={140} thickness={5} />
          ):(
            this.renderHolidays(holidays)
          )
        }
      </div>
    )
  }
}

export default ContentHolidays;
