import Card from '../Card/Card';
import style from "./Cards.module.css"


export default function Cards(props) {
   const { characters } = props;
   return <ul className={style.cards}>
      {characters.map(personaje => {
         return <Card
         name = {personaje.name}
         species={personaje.species}
         gender={personaje.gender}
         image={personaje.image}
         onClose={() => window.alert('Emulamos que se cierra la card')}
         />
      })}
   </ul>;
}
