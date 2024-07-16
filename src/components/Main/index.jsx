import React, { useEffect, useState } from 'react';
import "./style.scss"
import Card from '../Card';

const Main = () => {
  const [result, setResult] = useState(null)
  const [pagina, setPagina] = useState(1)
  const [hideButton, setHideButton] = useState(true)

  const auth = '563492ad6f917000010000012a9b04b5026748cf9c8e7d526b2fd8ba'
  
  useEffect(() => {
    let url = `https://api.pexels.com/v1/curated?per_page=15&page=${pagina}`

    if(pagina === 1) {
      setHideButton(false)
    } else setHideButton(true)
    
    fetch(url, {
      headers: {
        Accept: 'application/json',
        Authorization: auth
      }
    })
      .then(res => res.json())
      .then(json => setResult(json)) 
  },[pagina])

  const card = result?.photos?.map((param) => {
    return <Card nome={param.photographer} foto={param.src.large} download={param.src.original}/>
  })
  
  return (
    <main className="conteudo">
      <section>
        {card}
      </section>

      <div className='conteudo-box'>
        {hideButton && 
          <button className="botao" onClick={() => {
            setPagina(pagina - 1)
            window.scrollTo(0, 0)
          }}>Página anterior</button>
        }

        <button className="botao" onClick={() => {
          setPagina(pagina + 1)
          window.scrollTo(0, 0)
        }}>Próxima página</button>
      </div>
    </main>
  )
}

export default Main;