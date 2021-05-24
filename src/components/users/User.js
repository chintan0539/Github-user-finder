import React, { useEffect } from "react";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";
import Repos from "../Repos/Repos";
import { Link } from "react-router-dom";

const User = ({ user, loading, repos, getUser, getUserRepos, match }) => {
  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    company,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) return <Spinner />;

  return (
    <div>
      <Link to="/" className="btn btn-light">
        Back to search
      </Link>
      Hireable:{" "}
      {hireable ? (
        <i className="fas fa-check text-success" />
      ) : (
        <i className="fas fa-times-circle text-danger" />
      )}
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            alt=""
            className="round-img"
            style={{ width: "150px" }}
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        {bio && (
          <div>
            <h3>Bio</h3>
            <p>{bio}</p>
          </div>
        )}
        <a href={html_url} className="btn btn-dark my-1">
          Visit Github Profile
        </a>
        <ul>
          <li>
            {login && (
              <div>
                <strong>Username:</strong>
                {login}
              </div>
            )}
          </li>
          <li>
            {company && (
              <div>
                <strong>Company:</strong>
                {company}
              </div>
            )}
          </li>
          <li>
            {blog && (
              <div>
                <strong>Website:</strong>
                {blog}
              </div>
            )}
          </li>
        </ul>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary"> Followers:{followers}</div>
        <div className="badge badge-success"> Following:{following}</div>
        <div className="badge badge-light"> Public Repos:{public_repos}</div>
        <div className="badge badge-dark"> Public Gists:{public_gists}</div>
      </div>
      <Repos repos={repos} />
    </div>
  );
};
User.propTypes = {
  loading: PropTypes.bool,
  user: PropTypes.object.isRequired,
  getUser: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired,
  getUserRepos: PropTypes.func.isRequired,
};

export default User;
