import React,{Component} from 'react';
import {AppBar,IconButton,IconMenu,MenuItem} from 'material-ui';
import ReorderIcon from 'material-ui-icons/Reorder';
import AccountBoxIcon from 'material-ui-icons/AccountBox'
import {Link} from 'react-router-dom';
const iconLeft =  (
    <IconMenu
    iconStyle = {{ color : 'white'}}
    iconButtonElement={<IconButton> <ReorderIcon   /> </IconButton>}
    >
      <MenuItem
      primaryText={
        <Link to="/documentos" style={{color : 'black', textDecoration:'none'}}> Documentos</Link>
      }/>

      <MenuItem
      primaryText={
        <Link to="/noticias" style={{color : 'black', textDecoration:'none'}}> Noticias</Link>
      }/>

      <MenuItem
      primaryText={
        <Link to="/" style={{color : 'black', textDecoration:'none'}}> Página Principal</Link>
      }/>

    </IconMenu>
);

const iconRight = (
    <IconMenu
    iconStyle = {{ color : 'white'}}
    iconButtonElement={<IconButton color ="secondary" > <AccountBoxIcon   /> </IconButton>}
    >
    <MenuItem
    primaryText={<Link to="/configurar_perfil" style={{color : 'black', textDecoration:'none'}}> Configurar Perfil</Link>}/>

    <MenuItem
    primaryText={<Link to="/cerrar_sesion" style={{color : 'black', textDecoration:'none'}}> Cerrar Sesión</Link>}/>

    </IconMenu>
);

class HeaderRow extends Component{
  render(){
    return(
      <header>
        <AppBar
        titleStyle = {{textAling:'center'}}
        title={this.props.title}
        iconElementLeft = {iconLeft}
        iconElementRight = {iconRight}
        />
      </header>
    )
  }
}

export default HeaderRow;
