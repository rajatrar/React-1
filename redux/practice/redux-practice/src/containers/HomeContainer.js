import React from 'react'
import Home from '../components/Home'
import {connect} from 'react-redux'
import { addTOCart } from '../Services/Actions/Actions'

const mapDispatchToProps = dispatch => ({
  addTOCartHandler : data => dispatch(addTOCart(data))
})

const mapStateToProps = state => ({
  cardData: state.cardItem.cardData
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)

