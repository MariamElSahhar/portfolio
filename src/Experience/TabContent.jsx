function TabContent({ group }) {
  return (
    <div key={group.id} className='tab-content' id={group.id}>
      {
        group.positions.map((position) => (
          <div key={position.name}>
            <h3>{position.name}</h3>
            <ul>
              {position.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))
      }
    </div>
  )
}

export default TabContent
