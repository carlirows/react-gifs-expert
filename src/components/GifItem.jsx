

export const GifItem = ({gif}) => {
  return (
    <div className="card">
        <img src={gif.url} alt={gif.title} />
        <p key={gif.id}>{gif.title}</p>
    </div>
  )
}

