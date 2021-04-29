import React from 'react';

export const AuthPage = () => {
  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <h1>Shorten the link</h1>
        <div className="card blue darken-1">
          <div className="card-content white-text">
            <span className="card-title">Authorization</span>
            <div>
              <div className="input-field">
                <input
                  placeholder="Email"
                  id="email"
                  type="text"
                  name="email"
                />
                <label htmlFor="email">Email</label>
              </div>

              <div className="input-field">
                <input
                  placeholder="Password"
                  id="password"
                  type="password"
                  name="password"
                />
                <label htmlFor="password">First Name</label>
              </div>
            </div>
          </div>
          <div className="card-action">
            <button className="btn yellow darken-4 mr10 bold-text">
              Sign In
            </button>

            <button className="btn grey lighten-1 black-text bold-text">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
