import { useDispatch, useSelector } from 'react-redux'
import { changeCredentials } from './userSlice'

function UserForm(props) {
  const userState = useSelector((state) => state)
  const dispatch = useDispatch()

  function handleCredentialChange(e) {
    console.log(e)
    dispatch(
      changeCredentials({ property: e.target.name, value: e.target.value })
    )
  }

  return (
    <div>
      <form onChange={handleCredentialChange}>
        <label htmlFor="user-input-first-name">First name: </label>
        <input name="firstName" id="user-input-first-name" />

        <label htmlFor="user-input-last-name">Last name: </label>
        <input name="lastName" id="user-input-last-name" />

        <label htmlFor="user-input-date">date: </label>
        <input type="date" name="date" id="user-input-date" />
      </form>
    </div>
  )
}

export default UserForm
