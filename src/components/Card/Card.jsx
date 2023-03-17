import style from "./Card.module.css"

export default function Card(props) {
   return (
      <div className={style.div}>
         <button className={style.button} onClick={props.onClose}>X</button>
         <h2 className={style.h2Name}>{props.name}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <img className={style.img} src={props.image} alt="" /> 
      </div>
   );
}
