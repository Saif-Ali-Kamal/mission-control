import React, { useState } from 'react'
import { useParams, useHistory } from "react-router-dom"
import { useSelector } from 'react-redux';

import { Button, Icon, Select } from 'antd';
import DbSelector from '../../components/db-selector/DbSelector'
import SelectProject from '../../components/select-project/SelectProject'
import './topbar.css'

import logo from '../../assets/logo-black.svg';

const Topbar = (props) => {
  const history = useHistory()
  const { projectID, selectedDB } = useParams()
  const [modalVisible, setModalVisible] = useState(false)
  const projects = useSelector(state => state.projects)
  const selectedProject = projects.find(project => project.id === projectID)
  const projectName = selectedProject ? selectedProject.name : ""
  const handleDBSelect = (dbName) => history.push(`/mission-control/projects/${projectID}/database/${dbName}`)
  return (
    <div>
      <div className="topbar">
        <img src={logo} alt="logo" />
        {props.showProjectSelector && <div className="btn-position">
          <Button className="action-rounded" onClick={() => setModalVisible(true)}>{projectName}
            <Icon type="caret-down" />
          </Button>
        </div>}
        {(props.showDbSelector) &&
          <DbSelector handleSelect={handleDBSelect} selectedDb={selectedDB} />
        }
        <SelectProject visible={modalVisible} handleCancel={() => setModalVisible(false)} />
      </div>
    </div>
  )
}

export default Topbar;