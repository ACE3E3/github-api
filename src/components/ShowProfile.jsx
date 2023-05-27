import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom"
import "../App.css";

const ShowProfile = props => {
  console.log(props.reposData)
  return (
    <div className="getData">
      <br/>
      <img src={props.image_url} alt="" />
      <h1>Username : {props.username}</h1>
      <h2>Repositories : {props.repos}</h2>
      <h2>Following : {props.following}</h2>
      <h2>Followers : {props.followers}</h2>
    <a href="/"><div className="btn btn-success btn-lg">HOME</div></a>
      <br />
      <div className="our-faq-wrapper">
      <h1>
        All Public Repositories of the user
      </h1>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="accordion" id="accordion">
                {props.reposData.map((reps) => {
                  return(
                            <div className="card">
                              <div className="card-header head" style={{backgroundColor: '#242C42'}} id="headingOne">
                                <h5 className="mb-0">
                                  <a href={reps.html_url}><div className="btn btn-link" type="button"> {reps.name} </div></a>
                                </h5>
                              </div>
                              <div id="collapseOne" className="collapse show" data-parent="#accordion">
                                <div className="card-body">
                                  <ul  className="feats">
                                    <li>Stars : {reps.stargazers_count}</li>
                                    <li>Forks : {reps.forks}</li>
                                    <li>Watchers: {reps.watchers}</li>
                                    <li>Language : {reps.language}</li>
                                    <li>Created On : {reps.created_at}</li>
                                    <a href={reps.html_url}><div className="btn btn-primary">Go to repository</div></a>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          
                    );
                })}
                </div>
              </div>
            </div>
          </div>
          </div>
      <br />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    username: state.username,
    repos: state.repos,
    following: state.following,
    followers: state.followers,
    grabbedData: state.grabbedData,
    image_url: state.image_url,
    reposData: state.reposData
  };
};

export default connect(
  mapStateToProps,
  null
)(ShowProfile);
