import React, { Fragment , useEffect, useState} from "react";
import PropTypes from "prop-types";
import ListadoDeEventos from "./Turnos";
import ListadoDeIniciativas from './Iniciativas';
import MultipleSelect from "./HorarioAtencion";
import { Tab, Tabs, Box, Typography } from "@material-ui/core"
import UserDataArea from "./ListaPacientes";
import { listPatients } from "../../../controllers/api/api.patients"

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function SettingsArea(props) {

  const {
    targets,
    setTargets,
    pushMessageToSnackbar,
  } = props;

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  const [miLista, setLista] = useState([])

  return (
    <Fragment>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Eventos" />
        <Tab label="Iniciativas" />
      </Tabs>

      <TabPanel value={value} index={0}>
        <ListadoDeEventos pushMessageToSnackbar={pushMessageToSnackbar} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ListadoDeIniciativas pushMessageToSnackbar={pushMessageToSnackbar} />
        
      </TabPanel>
      <TabPanel value={value} index={2}>
        <MultipleSelect pushMessageToSnackbar={pushMessageToSnackbar} />
      </TabPanel>
    </Fragment>
  );
}

SettingsArea.propTypes = {
  pushMessageToSnackbar: PropTypes.func
};

export default SettingsArea;
/*
UserDataArea va en el index 1 como componente con todo eso
<UserDataArea
          //pushMessageToSnackbar={pushMessageToSnackbar}
          //targets={miLista}
          //setTargets={setTargets}
        />
        */