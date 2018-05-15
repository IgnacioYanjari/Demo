import React,{Component} from 'react';
import {Card, CardText} from 'material-ui/Card';
import {CircularProgress} from 'material-ui';
import {notification,Row,Col} from 'antd';
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

    let firstHoliday = true;
    let today = this.state.today;

    return Object.keys(holidays).map( key => {
      let holiday = holidays[key];
      let date = holiday.date;
      let auxHoliday = new Date(date);
      let auxToday = new Date(today);

      // comparar milisegundos
      if( auxHoliday.getTime() > auxToday.getTime() ){
        if(firstHoliday) {
          firstHoliday = false;
          return(this.renderAlert(holiday))
        }
        return(this.renderPanelHoliday(holiday));
      }

      return(<div key ={shortid.generate()}> </div>);

    });
  }

  render(){
    const holidays = this.state.listOfHolidays;
    return(
      <div>
        { Object.keys(holidays).length === 0 ?(
            <Row style={{marginTop:'30px',marginBottom:'30px'}}>
              <Col span={10}/>
              <Col span={8}>
                <CircularProgress style={{textAlign:'center'}}size={140} thickness={5} />
              </Col>
              <Col span={6}/>
            </Row>
          ):(
            this.renderHolidays(holidays)
          )
        }
      </div>
    )
  }
}

export default ContentHolidays;
