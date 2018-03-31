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
      containerElement={<Link to="/documentos"/>}
      primaryText="Documentos"
      />

      <MenuItem
      containerElement={<Link to="/noticias"/>}
      primaryText="Noticias"
      />

      <MenuItem
      containerElement={<Link to="/"/>}
      primaryText="Página Principal"
      />

    </IconMenu>
);

const iconRight = (
    <IconMenu
    iconStyle = {{ color : 'white'}}
    iconButtonElement={<IconButton color ="secondary" > <AccountBoxIcon   /> </IconButton>}
    >

    <MenuItem
    containerElement={<Link to="/configurar_perfil"/>}
    primaryText="Configurar Perfil"
    />

    <MenuItem
    containerElement={<Link to="/cerrar_sesion"/>}
    primaryText="Cerrar Sesión"
    />

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
