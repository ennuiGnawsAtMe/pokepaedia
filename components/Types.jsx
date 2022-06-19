const typeColour = (expression) => {
        switch (expression) {
          case 'fire':
            return "background-color: #AB1E23;"
          case 'normal':
            return "background-color: #76515B;"
          case 'bug':
            return "background-color: #204B28;"
          case 'dark':
            return "background-color: #040805;"
          case 'flying':
            return "background-color: #49677D;"
          case 'poison':
            return "background-color: #5E2E87;"
          case 'ghost':
            return "background-color: #33336B;"
          case 'dragon':
            return "background-color: #438B95;"
          case 'psychic':
            return "background-color: #A72B6E;"
          case 'rock':
            return "background-color: #47180B;"
          case 'grass':
            return "background-color: #147B3E;"
          case 'electric':
            return "background-color: #E3E32A;"
          case 'fairy':
            return "background-color: #971943;"
          case 'ground':
            return "background-color: #A9702C;"
          case 'steel':
            return "background-color: #5F746D;"
          case 'water':
            return   "background-color: #1452E2;"
          case 'ice':
            return "background-color: #87D1F5;"
          case 'fighting':
            return "background-color: #994022;"
          default:
            return null
        }
    }

const Types = (props) => {
  return (
      <div className="container">
          <p>{props.type}</p>
          <style jsx>{`
          .container {
            ${typeColour(props.type)}
            border-radius: 5px;
            color: white;
            width: 100px;
            text-align: center;
            }
            p {
                margin: 3px;
                padding: 3px;
            }
          `}</style>
      </div>
  )
  }

export default Types
