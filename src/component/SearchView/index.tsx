
import { type } from 'os'
import PropTypes from 'prop-types'
import { useState } from 'react'
import ResultList from '../ResultList'

export default function SearchView({ result, search, isSearching}) {
  const [query, setQuery] = useState('')
  const [user, setUserSearch ] = useState(true)

  const onSubmit = event => {
    event.preventDefault()
    if (query) {
      search([{ q: query}, {user: user}])
    }
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <input
            type='search'
            placeholder='Query'
            value={query}
            onChange={e => setQuery(e.target.value)}
            className='form-control'
            id='query'
            name='q'
            autoComplete='off'
          />
        <br /> Search User
           <input type='checkbox'
                  checked={user}
                   onChange={e =>  setUserSearch(!user)}
           />
    
        </div>

        <div className='form-group'>
          <button disabled={!query} type='submit' className='form-button'>
            Search
          </button>
        </div>
      </form>
      {isSearching && <p>Searching for '{query}' ...</p>}
      {query && !isSearching && <p>Results for '{query}'</p>}

      {console.log(result)}
      {!isSearching && <ResultList {...result} />}
    </div>
  )
}

SearchView.propTypes = {
  result: PropTypes.any.isRequired,
  search: PropTypes.func.isRequired,
  isSearching: PropTypes.bool,
}
SearchView.defaultProps = {
  isSearching: false
}
function tipe(tipe: any, string: any) {
    throw new Error('Function not implemented.')
}

