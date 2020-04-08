import React, { Component } from "react";
import styles from "./index.module.css";
import { isEmpty } from "lodash";
import Button from "../Button";
import Input from "../Input";

class LoginForm extends Component {
  state = {
    username: "",
    password: "",
    isLoading: false,
    error: {
      status: false,
      message: ""
    },
    success: false
  };

  handleInputChange = ({ name, value }) => {
    this.setState({
      [name]: value,
      error: {
        status: false,
        message: ""
      }
    });
  };

  shouldSubmitDisable = () => {
    return isEmpty(this.state.username) || isEmpty(this.state.password);
  };

  handleKeyPressed = e => {
    if (e.event.key === "Enter" && !this.shouldSubmitDisable()) {
      this.handleSubmitClick();
    }
  };

  handleSubmitClick = async () => {
    const { username, password } = this.state;
    this.setState({ isLoading: true });

    try {
      //Replace this with api call
      //Or action
      if (username === "Prashant Yadav" && password === "123456789") {
        this.setState({
          success: true
        });
      } else {
        this.setState({
          error: {
            status: true,
            message: "Invalid Credentials"
          }
        });
      }
    } catch (e) {
      this.setState({
        error: {
          status: true,
          message: e
        }
      });
    } finally {
      this.setState({
        isLoading: false
      });
    }
  };

  render() {
    const { username, password, isLoading, error, success } = this.state;

    return (
      <>
        <div className={styles.wrapper}>
          {/* Form element */}
          <form className={styles.box} onSubmit={this.handleSubmitClick}>
            <div className={styles.container}>
              <div className={styles.header}>Sign in</div>

              {/* User credentials input */}
              <div className={styles.content}>
                <Input
                  label="Username"
                  name="username"
                  placeholder="your username"
                  className={styles.userType}
                  value={username}
                  onKeyDown={this.handleKeyPressed}
                  onChange={this.handleInputChange}
                />
                <Input
                  type="password"
                  label="Password"
                  name="password"
                  placeholder="your password"
                  className={styles.userType}
                  value={password}
                  onKeyDown={this.handleKeyPressed}
                  onChange={this.handleInputChange}
                />
              </div>

              {/* Submit Button */}
              <div className={styles.footer}>
                <Button
                  className={styles.submitBtn}
                  type="submit"
                  label="Sign in"
                  disabled={this.shouldSubmitDisable()}
                  onClick={this.handleSubmitClick}
                  isLoading={isLoading}
                />
              </div>

              {/* Forgot password */}
              <div className={styles.forgotPassword}>
                <span>forgot password?</span>
              </div>

              {/* show error message */}
              {error.status && (
                <div className={styles.error}>{error.message}</div>
              )}

              {/* Show success Message */}
              {success && (
                <div className={styles.success}>Login Successful!.</div>
              )}
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default LoginForm;
