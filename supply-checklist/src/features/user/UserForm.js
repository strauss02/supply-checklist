import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { changeCredentials } from './userSlice'

function UserForm(props) {
  const userState = useSelector((state) => state)
  const dispatch = useDispatch()
  // eslint-disable-next-line no-unused-vars
  const [errorMessage, setErrorMessage] = useState('')

  function handleCredentialChange(e) {
    dispatch(
      changeCredentials({ property: e.target.name, value: e.target.value })
    )
  }

  return (
    <div className="user-form">
      <form onChange={handleCredentialChange}>
        <label htmlFor="user-input-first-name">First name: </label>
        <input
          value={userState.firstName}
          name="firstName"
          id="user-input-first-name"
        />

        <label htmlFor="user-input-last-name">Last name: </label>
        <input
          value={userState.lastName}
          name="lastName"
          id="user-input-last-name"
        />

        <label htmlFor="user-input-date">date: </label>
        <input
          value={userState.date}
          type="date"
          name="date"
          id="user-input-date"
        />
      </form>
      {errorMessage ? <div> {errorMessage}</div> : ''}
    </div>
  )
}

export default UserForm
