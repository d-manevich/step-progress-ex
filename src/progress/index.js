import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeProgress } from './progressReducer'
import Progress from './components/Progress'

const mapStateToProps = state => ({
  progress: state.progressState.progress,
  steps: state.progressState.steps
})

const mapDispatchToProps = dispatch => bindActionCreators({
  onProgressChange: changeProgress
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Progress)
