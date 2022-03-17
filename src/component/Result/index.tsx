import PropTypes from "prop-types"

export default function Result({ html_url, stargazers_count, full_name, login, avatar_url}) {
  return (
		<div className="repo">
		{	login ? <p>User: <a href={html_url}><img src={avatar_url} width='22px'/>{login}</a></p> : <p>Repo: <a href={html_url}>{full_name}</a> {stargazers_count} stars</p>}
		</div>
	)
}
Result.propTypes = {
  html_url: PropTypes.string.isRequired,
  stargazers_count: PropTypes.number.isRequired,
  full_name: PropTypes.string.isRequired,
}
Result.defaultProps = {}
