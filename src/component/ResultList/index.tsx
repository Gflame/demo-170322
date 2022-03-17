import PropTypes from 'prop-types'
import Result from '../Result'

export default function ResultList({ items, total_count}) {
  return (
    <div className='repo-list'>
      <p>Showing {items.length} of {total_count}</p>
      {console.log(items)}
      {items.map(item => <Result key={`repo-${item.id}`} {...item} />)}
    </div>
  )
}
ResultList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  total_count: PropTypes.number.isRequired,
}
ResultList.defaultProps = {}

