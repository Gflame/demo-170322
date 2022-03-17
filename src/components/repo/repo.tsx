import React from "react";
import PropTypes from "prop-types";

export default function Repo({ html_url, stargazers_count, full_name }) {
  return (
		<div className="repo">
			<p><a href={html_url}>{full_name}</a> {stargazers_count} stars</p>
		</div>
	);
}
Repo.propTypes = {
  html_url: PropTypes.string.isRequired,
  stargazers_count: PropTypes.number.isRequired,
  full_name: PropTypes.string.isRequired,
};
Repo.defaultProps = {};
