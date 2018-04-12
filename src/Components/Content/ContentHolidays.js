import React,{Component} from 'react';
import {Card, CardText} from 'material-ui/Card';
import {notification} from 'antd';
import shortid from 'shortid';

class ContentHolidays extends Component{

  constructor(props){
    super(props);
    this.state = { listOfHolidays : {} , today : new Date()};
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


  FirstHoliday(){
    let firstHoliday = false;
    const list = this.state.listOfHolidays, today = this.state.today;
    for( let element in list){
      let date = list[element].date.split("-");
      let year = today.getFullYear().toString() ,
        month = today.getMonth()+1, day = today.getDate();
      if( (date[1] >= month || (date[1] === month && date[2] >= day))
          && firstHoliday === false && date[0] === year
        ){
          return(
            <div>
              {notification['success']({
                message: 'Feriado más cercano:',
                placement:'bottomRight',
                duration: 20,
                description:
                <div>
                  <p> Razón : {list[element].title} </p>
                  <p> Fecha : {list[element].date} </p>
                  <p> Extra : {list[element].extra} </p>
                </div>
              })}
            </div>
          );
      }
    }
  }

  // <Card key ={shortid.generate()} style={{ margin:'1% 6% 1% 6%', textAlign:'center'}}>
  // <CardTitle
  // title={'El dia feriado más cercano es :\n'+
  // date[0] + '-' + date[1] + '-' + date[2]}/>
  // </Card>

  renderHolidays(holiday){
    let date = holiday.date.split("-");
    let apiYear = date[0], today = this.state.today;
    let year = today.getFullYear().toString();
    const isMyYear = (apiYear.substr(0,4) === year );
    if( isMyYear){
      return(
        <Card key ={shortid.generate()} style={{ margin:'1% 6% 1% 6%', textAlign:'center'}}>
          <CardText>
            <p> {holiday.title} </p>
            <p> {holiday.date}  </p>
            <p> {holiday.extra} </p>
          </CardText>
        </Card>
    )}
    return(
        <div key ={shortid.generate()}> </div>
    );
  }

  render(){
    let holidays = this.state.listOfHolidays , today = this.state.today;
    let month = today.getMonth()+1, day = today.getDate();
    if( month.toString().length < 2 )
      month = '0' + month.toString();
    if( day.toString().length < 2)
      day = '0' + day.toString();
    return(
      <div>
        {this.FirstHoliday()}
        {Object.keys(holidays).map(value => this.renderHolidays(holidays[value]))}
      </div>
    )
  }
}

export default ContentHolidays;
