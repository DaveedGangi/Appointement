// Write your code here
import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import {format} from 'date-fns'

import './index.css'

import EveryEvent from '../AppointmentItem'

class Appointments extends Component {
  state = {
    TotalEventList: [],
    name: '',
    date: '',
    starred: false,
  }

  submissionOn = event => {
    event.preventDefault()
    const {name, date} = this.state

    const NewEventStoring = {
      id: uuidv4(),
      name,
      date: format(new Date(date), 'dd MMMM yyyy, EEEE'),
      isLike: false,
    }

    this.setState(prevState => ({
      TotalEventList: [...prevState.TotalEventList, NewEventStoring],
      name: '',
      date: '',
    }))
  }

  ChangeName = event => {
    this.setState({name: event.target.value})
  }

  ChangeDate = event => {
    this.setState({date: event.target.value})
  }

  ChangingColorStar = id => {
    this.setState(prevState => ({
      TotalEventList: [
        ...prevState.TotalEventList.map(each => {
          if (id === each.id) {
            return {...each, isLike: !each.isLike}
          }
          return each
        }),
      ],
    }))
  }

  EventsC = () => {
    const {starred} = this.state
    this.setState({starred: !starred})
  }

  staredEvent() {
    const {TotalEventList} = this.state

    const a = TotalEventList.filter(each => each.isLike === true)
    return a
  }

  render() {
    const {TotalEventList, date, starred} = this.state
    console.log(TotalEventList)
    console.log(date)
    const ColorBackground = starred ? 'colorsBg' : ''

    const FilteringDataEvents = starred ? this.staredEvent() : TotalEventList

    return (
      <div className="bg">
        <div className="card">
          <h1 className="AppointsHeader">Add Appointment</h1>
          <img
            className="imgTop"
            src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
            alt="appointments"
          />
          <form id="A" onSubmit={this.submissionOn}>
            <label className="LabelElements" htmlFor="title">
              TITLE
            </label>
            <br />
            <input
              className="DateStyle"
              onChange={this.ChangeName}
              placeholder="Title"
              type="text"
              id="title"
            />
            <br />
            <br />
            <label className="LabelElements" htmlFor="Date">
              Date
            </label>
            <br />
            <input
              className="DateStyle"
              onChange={this.ChangeDate}
              type="date"
              id="Date"
            />
            <br />
            <br />
            <button className="AddButton" type="submit">
              Add
            </button>
          </form>
          <hr />

          <div className="AppointAndStarred">
            <h1 className="AppointsHeader">Appointments</h1>
            <button
              className={`buttonStared ${ColorBackground}`}
              onClick={this.EventsC}
              type="button"
            >
              Starred
            </button>
          </div>

          <ul className="listStyle">
            {FilteringDataEvents.map(each => (
              <EveryEvent
                eachEventPassing={each}
                key={each.id}
                nameValue={each.name}
                dateValue={each.date}
                isLike={each.isLike}
                changeStarColor={this.ChangingColorStar}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
