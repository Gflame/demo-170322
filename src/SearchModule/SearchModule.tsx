import { useState } from 'react'
import PropTypes from 'prop-types'

const defaultResult = { items: [], total_count: 0 }

export default function SearchModule ({ children }) {
  const [result, setResult] = useState(defaultResult)
  const [isSearching, setIsSearching] = useState(false)

  // create a function to pass through as render prop,
  // which will trigger a search with params
  const search = async (params: any)  => {
   
    // set state that searching is active
    setIsSearching(true)
    try {
      // should use a library for constructing a query
      const query = Object.entries(params[0])
        .map(([k, v]) => `${k}=${v}`)
        .join('=')

      // use the `fetch` api to get the data, convert to json
      const urlRepo = `https://api.github.com/search/repositories?${query}`
      const urlUser = `https://api.github.com/search/users?${query}`
      const response = await fetch(params[1].user ? urlUser : urlRepo)
      const json = await response.json()

       console.log(json, params[1])

      // set the results
      setResult(json)
    } catch (e) {
      // if we had an error, reset the result to default
      setResult(defaultResult)
    } finally {
      // whether we errored or not, we aren't searching any more
      setIsSearching(false)
    }
  }
  // cool - let's run the render child fn with props
  return children({ result, search, isSearching })
}

SearchModule.propTypes = {
  children: PropTypes.func.isRequired
}
SearchModule.defaultProps = {}
