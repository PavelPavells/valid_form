import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import "./Auth.scss";
class Register extends Component {
  constructor() {
    super();
    this.state = {
      company_name: "",
      company_inn: "",
      name: "",
      pass: "",
      email: "",
      contact_person: "",
      company_phone: "",
      errors: {}
    };
  }
  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      company_name: this.state.company_name,
      company_inn: this.state.company_inn,
      contact_person: this.state.contact_person,
      company_phone: this.state.company_phone,
      pass: this.state.pass
    };
    this.props.registerUser(newUser, this.props.history);
  };
  render() {
    const { errors } = this.state;
    return (
      <div className="wrapper">
        <div className="header-logo">
          <img src="../../img/carddex_logo.png" alt="" />
        </div>
        <div className="base-wrapper">
          <div className="main-paragraph">
            <h1>Личный кабинет Карддекс</h1>
            <h3>Личный кабинет партнеров и дилеров Карддекс</h3>
            <p>
              Войдите или зарегистрируйтесь для получения всей доступной
              информации по продуктам Карддекс, вашим заказам, скидкам и
              предложениям.
            </p>
          </div>
          <div className="wrapper-separator"></div>
          <div className="wrapper-auth">
            <div className="wrapper-auth__header">
              <Link to="/" className="link-login">
                Вход
              </Link>
              <Link to="/register" className="link-register active">
                Регистрация
              </Link>
            </div>
            <form className="auth-form" noValidate onSubmit={this.onSubmit}>
              <div className="auth-group">
                <label>
                  <div className="auth-label">Наименование компании</div>
                  <input
                    onChange={this.onChange}
                    value={this.state.company_name}
                    error={errors.company_name}
                    id="company_name"
                    type="company_name"
                    className="auth-input"
                  />
                  <div className="auth-error">{errors.company_name}</div>
                </label>
              </div>
              <div className="auth-group">
                <label>
                  <div className="auth-label">ИНН</div>
                  <input
                    onChange={this.onChange}
                    value={this.state.company_inn}
                    error={errors.company_inn}
                    id="company_inn"
                    type="company_name"
                    className="auth-input"
                  />
                  <div className="auth-error">{errors.company_inn}</div>
                </label>
              </div>
              <div className="auth-group">
                <div className="bottom-group">
                  <label>
                    <div className="auth-label">Имя пользователя</div>
                    <input
                      onChange={this.onChange}
                      value={this.state.name}
                      error={errors.name}
                      id="name"
                      type="text"
                      className="auth-input"
                    />
                    <div className="auth-error">{errors.name}</div>
                  </label>
                </div>
                <div className="auth-group">
                  <label>
                    <div className="auth-label">Пароль</div>
                    <input
                      onChange={this.onChange}
                      value={this.state.pass}
                      error={errors.pass}
                      id="pass"
                      type="pass"
                      className="auth-input"
                    />
                    <div className="auth-error">{errors.pass}</div>
                  </label>
                </div>
    {/*         <div className="auth-group">
                  <label>
                    <div className="auth-label">Повторите пароль</div>
                    <input
                      onChange={this.onChange}
                      value={this.state.password}
                      error={errors.password}
                      id="password"
                      type="password"
                      className="auth-input"
                    />
                    <div className="auth-error">{errors.password}</div>
                  </label>
                </div>
    */}            
                <div className="auth-group">
                  <label>
                    <div className="auth-label">Email</div>
                    <input
                      onChange={this.onChange}
                      value={this.state.email}
                      error={errors.email}
                      id="email"
                      type="email"
                      className="auth-input"
                    />
                    <div className="auth-error">{errors.email}</div>
                  </label>
                </div>
                <div className="auth-group">
                  <label>
                    <div className="auth-label">Контактное лицо</div>
                    <input
                      onChange={this.onChange}
                      value={this.state.contact_person}
                      error={errors.contact_person}
                      id="contact_person"
                      type="contact_person"
                      className="auth-input"
                    />
                    {/*<div className="auth-error">{errors.contactPerson}</div>*/}
                  </label>
                </div>
                <div className="auth-group">
                  <label>
                    <div className="auth-label">Телефон</div>
                    <input
                      onChange={this.onChange}
                      value={this.state.company_phone}
                      error={errors.company_phone}
                      id="company_phone"
                      type="company_name"
                      className="auth-input"
                    />
                   {/*} <div className="auth-error">{errors.companyPhone}</div>*/}
                  </label>
                </div>
                <div>
                  <div className="auth-password__ask">
                    <label>
                      <input type="checkbox" checked />Запомнить меня
                    </label>
                    <a
                      href="https://yandex.ru"
                      className="auth-group__ask-password"
                    >
                      Забыли пароль?
                    </a>
                  </div>
                  <div className="auth-condition">
                    <span>Нажимая кнопку "Войти", вы принимаете</span>
                    <a
                      href="https://yandex.ru"
                      className="auth-conditon__confidiency"
                    >
                      Условия "Политики Конфиденциальности"
                    </a>
                  </div>
                  <button type="submit" className="auth-button">
                    Зарегестрироваться
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="footer">
          <div className="footer-copy">
            <h1>Copyright 2019 &copy; CARDDEX</h1>
            <p>Информация на сайте не является публичной офертой</p>
          </div>
          <div className="footer-phone">
            <img src="../../img/call.png" alt="" />
            <div className="footer-phone__number">
              <h1>8 (800) 333-93-36</h1>
              <h1>8 (499) 64-333-69</h1>
            </div>
          </div>
          <div className="footer-email">
            <img src="../../img/email.png" alt="" />
            <h1>help@carddex.ru</h1>
          </div>
        </div>
      </div>
    );
  }
}
Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
