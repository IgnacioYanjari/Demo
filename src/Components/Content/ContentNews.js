import React,{Component} from 'react';
import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


class ContentNews extends Component{
  render(){
    return(
      <Card style={{ margin:'1% 6% 1% 6%', textAling : 'center'}} >
        <CardHeader
          title="Juanito Perez"
          subtitle="Periodista"
          avatar="images/2.jpg"
        />
        <CardTitle title="Apple propuso los primeros emojis de discapacidades"/>
        <CardMedia
          overlay={<CardTitle title="Algunos de los emojis"/>}
          mediaStyle = {{ display: 'block', marginLeft: 'auto',
          marginRight: 'auto', width: '50%', maxWidth: '60%',maxHeight: '60%' }}
        >
          <img src="images/emoji.jpg"  alt="" />
        </CardMedia>
        <CardText>

          <p>
            Apple presentó una propuesta a Emojipedia para un nuevo set de emojis
            de inclusión, que en este caso son dedicados a personas con discapacidades.
            En total son 13 emojis, que entran a sumar 43, junto a las opciones de tonos
            de piel que se introdujeron hace poco.
          </p>

          <p>
            La propuesta incluye perros guía y de servicio, una persona con un
            bastón,una persona con silla de ruedas manual y otra con una automática,
            una oreja con auricular medicinal y prótesis de brazo y pierna.
            En la propuesta de Apple podemos ver que no es una lista completa
            de emojis de discapacidades, pero es un buen comienzo, dice Gizmodo.
          </p>

          <p>
            Para elaborar estos emojis, Apple colaboró con varias asociaciones en
            Estados Unidos de discapacidades. El medio explica que las personas con
            discapacidades suelen componer emojis para crear imágenes relacionadas
            con su vida diaria. Y esto puede aislarlos, además debemos considerar
            que el 20% de la población mundial tiene alguna discapacidad.
          </p>

          <p>
           Un periodista especializado en asuntos sobre discapacidad le dijo al
           medio que esta nueva lista de emojis significa que muchas personas
           podrán seleccionar un emoji que los represente. Esto es realmente
           importante para la inclusión en línea. No obstante, dice que existe
           un desafío en descifrar una representación gráfica de discapacidades
           no evidentes o ‘invisibles’, como enfermedades mentales.
           Pero esperamos que en el futuro se encuentre una forma de representarlas
          </p>

        </CardText>
      </Card>
    )
  }
}

export default ContentNews;
