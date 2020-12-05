'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var obj = {
    title: 'React Web Application',
    subtitle: 'Concepts'
};

var Container = function (_React$Component) {
    _inherits(Container, _React$Component);

    function Container() {
        _classCallCheck(this, Container);

        return _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).apply(this, arguments));
    }

    _createClass(Container, [{
        key: 'render',
        value: function render() {

            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: obj.title, subtitle: obj.subtitle }),
                React.createElement(Body, null)
            );
        }
    }]);

    return Container;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    this.props.title
                ),
                React.createElement(
                    'h2',
                    null,
                    this.props.subtitle
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Body = function (_React$Component3) {
    _inherits(Body, _React$Component3);

    function Body() {
        _classCallCheck(this, Body);

        return _possibleConstructorReturn(this, (Body.__proto__ || Object.getPrototypeOf(Body)).apply(this, arguments));
    }

    _createClass(Body, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(Signup, null)
            );
        }
    }]);

    return Body;
}(React.Component);

var Signup = function (_React$Component4) {
    _inherits(Signup, _React$Component4);

    function Signup() {
        _classCallCheck(this, Signup);

        return _possibleConstructorReturn(this, (Signup.__proto__ || Object.getPrototypeOf(Signup)).apply(this, arguments));
    }

    _createClass(Signup, [{
        key: 'give',
        value: function give(e) {
            e.preventDefault();
            var userName = document.getElementById('Uname').value;
            var password = document.getElementById('Pass').value;
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'form',
                { onKeyUp: this.give },
                React.createElement('input', { type: 'text', id: 'Uname' }),
                React.createElement(
                    'p',
                    null,
                    this.userName ? '  wrong username' : ' '
                ),
                React.createElement('input', { type: 'password', id: 'Pass' }),
                React.createElement(
                    'p',
                    null,
                    this.password ? 'wrong Password' : ' '
                ),
                React.createElement(
                    'button',
                    null,
                    'Submit'
                ),
                React.createElement('br', null),
                React.createElement(
                    'label',
                    null,
                    this.userName && this.password ? 'gud' : 'bad'
                )
            );
        }
    }]);

    return Signup;
}(React.Component);

ReactDOM.render(React.createElement(Container, null), document.getElementById('app'));
