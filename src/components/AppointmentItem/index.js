// Write your code here
import './index.css'

const EveryEvent = props => {
  const {
    eachEventPassing,
    nameValue,
    dateValue,
    isLike,
    changeStarColor,
  } = props
  const {id} = eachEventPassing
  const StarChange = () => {
    changeStarColor(id)
  }
  console.log(dateValue)

  // console.log(format(new Date(2021, 19, 07), 'dd MMMM yyyy, EEEE')) // 19 July 2021, Monday

  const Star = isLike
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <li>
      <hr />
      <div className="AppointsCollection">
        <h1 className="NameStyle">{nameValue}</h1>
        <button
          className="Stars"
          onClick={StarChange}
          type="button"
          data-testid="star"
        >
          <img src={Star} alt="star" />
        </button>
      </div>
      <p className="DatePara">Date:{dateValue}</p>
    </li>
  )
}

export default EveryEvent
