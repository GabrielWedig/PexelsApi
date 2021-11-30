import "./style.scss"

const Card = ({ nome, foto, download }) => {
  return (
    <article className="card">    
      <img src={foto} alt="foto"/>
      <div>
        <p>{nome}</p>
        <a href={download}>Download</a>
      </div>
    </article>
  )
}

export default Card;