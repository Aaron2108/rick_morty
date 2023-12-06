const LocationInfo = ({infoApi}) => {
  return (
    <article className="article_title">
        <h2>{infoApi?.name}</h2>
        <ul className="ul_info">
            <li><span>Type: <br />{infoApi?.type}</span></li>
            <li><span>Dimension: <br /> {infoApi?.dimension || 'unknow'}</span></li>
            <li><span>Population: <br />{infoApi?.residents.length}</span></li>
        </ul>
    </article>
  )
}
export default LocationInfo