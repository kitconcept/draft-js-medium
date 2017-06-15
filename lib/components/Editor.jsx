'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _draftJs = require('draft-js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Editor = function (_Component) {
  _inherits(Editor, _Component);

  function Editor(props) {
    _classCallCheck(this, Editor);

    var _this = _possibleConstructorReturn(this, (Editor.__proto__ || Object.getPrototypeOf(Editor)).call(this, props));

    _this.state = { editorState: _draftJs.EditorState.createEmpty() };
    return _this;
  }

  _createClass(Editor, [{
    key: 'onChange',
    value: function onChange(editorState) {
      this.setState({ editorState: editorState });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'ui black pointing below label' },
          _react2.default.createElement(
            'div',
            { className: 'ui black buttons' },
            _react2.default.createElement(
              'button',
              { className: 'ui icon button' },
              _react2.default.createElement('i', { 'aria-hidden': 'true', className: 'bold icon' })
            ),
            _react2.default.createElement(
              'button',
              { className: 'ui icon button' },
              _react2.default.createElement('i', { 'aria-hidden': 'true', className: 'italic icon' })
            ),
            _react2.default.createElement(
              'button',
              { className: 'ui icon button' },
              _react2.default.createElement('i', { 'aria-hidden': 'true', className: 'linkify icon' })
            )
          )
        ),
        _react2.default.createElement(_draftJs.Editor, {
          editorState: this.state.editorState,
          onChange: this.onChange
        })
      );
    }
  }]);

  return Editor;
}(_react.Component);

exports.default = Editor;