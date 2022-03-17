import React from "react";
import PropTypes from "prop-types";

import Repo from "../repo/repo";

export default function RepoList({ items, total_count }) {
  return (
    <div className="repo-list">
      <p>Showing {items.length} of {total_count}</p>
      {items.map(item => <Repo key={`repo-${item.id}`} {...item} />)}
    </div>
  );
}
RepoList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  total_count: PropTypes.number.isRequired,
};
RepoList.defaultProps = {};

