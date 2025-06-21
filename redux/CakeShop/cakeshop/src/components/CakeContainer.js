import React from 'react'
import { connect } from 'react-redux'

function CakeContainer() {
  return (
    <div>
        <h2>Number Of Cakes - {props.numOfCakes}</h2>
        <button>Buy Cake</button>
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
        numOfCakes: state.numOfCakes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: () => dispatch({ type: 'BUY_CAKE' })
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
) (CakeContainer)
