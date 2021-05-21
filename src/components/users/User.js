import React, { Component } from "react";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";
import Repos from "../Repos/Repos";
import { Link } from "react-router-dom";

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
    this.props.getUserRepos(this.props.match.params.login);
  }
  static propTypes = {
    loading: PropTypes.bool,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired,
    repos: PropTypes.array.isRequired,
    getUserRepos: PropTypes.func.isRequired,
  };
  render() {
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
    } = this.props.user;
    const { loading, repos } = this.props;
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
  }
}

export default User;
