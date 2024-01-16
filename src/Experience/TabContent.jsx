function TabContent({ tab }) {
  return (
    <div key="tab-id" className={'tab-content ' + tab.id}>
        <h3>{tab.header}</h3>
        <ul>
            {
                tab.content.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default TabContent
