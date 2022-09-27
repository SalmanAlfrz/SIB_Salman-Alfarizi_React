import { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement, incrementByTen } from './counterSlice';

class CounterClass extends Component {
    state = {
        incrementAmount: 0
    }

    setIncrementAmount = (e) => {
        this.setState({ incrementAmount: Number(e) || 0 })
    }
    render() {
        return (
            <div className='demo'>
                <h1>Counter Class Component</h1>
                <h1 id='counter'>{this.props.localCount}</h1>
                <button id='decrement' onClick={() => this.props.dispatch(decrement())}>-</button> {' '}
                <button id='increment' onClick={() => this.props.dispatch(increment())}>+</button> {' '}
                <input type='number' value={this.state.incrementAmount} onChange={(e) => this.setIncrementAmount(e.target.value)} /> {' '}
                <button id='incrementByTen' onClick={() => this.props.dispatch(incrementByTen({amount:this.state.incrementAmount}))}>Add Amount</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        localCount: state.counter.count
    }
}
export default connect(mapStateToProps)(CounterClass);