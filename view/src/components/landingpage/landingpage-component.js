import { React, useState, useEffect } from 'react'

import { Col } from 'react-bootstrap'

import '../../styles/landingpage/landingpage.scss'

import Header from './header-component.js'
import CategoryButtons from './categorybuttons-component.js'

export default function LandingPage(props) {
  return(
    <Col id="landingpage">
        <Header viewport={props.viewport}/>
        <CategoryButtons viewport={props.viewport}/>
    </Col>
  )
}