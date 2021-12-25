import React from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import ItemCard from './features/checklist/ItemCard'
import AddItemForm from './features/checklist/AddItemForm'
import UserForm from './features/user/UserForm'
import { changeMessage, changeVisibility } from './features/alert/alertSlice'
import Alert from './features/alert/Alert'
import Signature from './features/singature/Signature'
import { AppBar, Typography, Grid, Toolbar, Button } from '@mui/material'
import MedicalServicesIcon from '@mui/icons-material/MedicalServices'
import SendIcon from '@mui/icons-material/Send'
import CssBaseline from '@mui/material/CssBaseline'

function App() {
  const equipmentState = useSelector((state) => state.checklist)
  const userState = useSelector((state) => state.user)
  const dispatch = useDispatch()

  function validateForm() {
    if (
      userState.firstName !== '' &&
      userState.lastName !== '' &&
      userState.date !== ''
    ) {
      return true
    } else throw new Error(`something's wrong`)
  }

  function handleFormSubmit(e) {
    try {
      validateForm()
      dispatch(changeVisibility(true))
      dispatch(changeMessage('hooray! form is complete.'))
    } catch (error) {
      dispatch(changeVisibility(true))
      dispatch(changeMessage(`something's wrong with your user details...`))
    }
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <div className="App">
        <Grid container direction="column">
          <Grid item>
            <AppBar sx={{ bgcolor: '#913' }} color="primary" position="static">
              <Toolbar>
                <Typography variant="h5"> Supply Check </Typography>
                <MedicalServicesIcon
                  sx={{
                    marginLeft: 'auto',
                  }}
                />
              </Toolbar>
            </AppBar>
          </Grid>

          <Grid item container>
            <Grid item xs={false} sm={2} />
            <Grid item xs={12} sm={8}>
              <UserForm />
              <div>
                {equipmentState.equipment.map((item, i) => {
                  return (
                    <ItemCard
                      currentQuantity={item.currentQuantity}
                      fullQuantity={item.fullQuantity}
                      name={item.name}
                      key={item.name + i}
                      isCustom={item.isCustom}
                    />
                  )
                })}
              </div>
              <AddItemForm />
              <Grid>
                <Signature />
              </Grid>
              <Button
                variant="contained"
                sx={{ bgcolor: '#913' }}
                endIcon={<SendIcon />}
                onClick={handleFormSubmit}
              >
                Submit Checklist!
              </Button>
              <Alert />
            </Grid>
            <Grid item xs={false} sm={2} />
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  )
}

export default App
