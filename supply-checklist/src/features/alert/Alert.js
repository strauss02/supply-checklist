import { useSelector } from 'react-redux'

function Alert(props) {
  const alertState = useSelector((state) => state.alert)

  return (
    <div>
      <p>{alertState.message} </p>
    </div>
  )
}

export default Alert
