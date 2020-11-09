module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// object with all compiled WebAssembly.Modules
/******/ 	__webpack_require__.w = {};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/MainRouter.js":
/*!******************************!*\
  !*** ./client/MainRouter.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _Home = __webpack_require__(/*! ./core/Home */ \"./client/core/Home.js\");\n\nvar _Home2 = _interopRequireDefault(_Home);\n\nvar _Users = __webpack_require__(/*! ./user/Users */ \"./client/user/Users.js\");\n\nvar _Users2 = _interopRequireDefault(_Users);\n\nvar _Signup = __webpack_require__(/*! ./user/Signup */ \"./client/user/Signup.js\");\n\nvar _Signup2 = _interopRequireDefault(_Signup);\n\nvar _Signup3 = __webpack_require__(/*! ./user/instructor/Signup */ \"./client/user/instructor/Signup.js\");\n\nvar _Signup4 = _interopRequireDefault(_Signup3);\n\nvar _Signup5 = __webpack_require__(/*! ./user/student/Signup */ \"./client/user/student/Signup.js\");\n\nvar _Signup6 = _interopRequireDefault(_Signup5);\n\nvar _Signin = __webpack_require__(/*! ./auth/Signin */ \"./client/auth/Signin.js\");\n\nvar _Signin2 = _interopRequireDefault(_Signin);\n\nvar _Signin3 = __webpack_require__(/*! ./auth/instructor/Signin */ \"./client/auth/instructor/Signin.js\");\n\nvar _Signin4 = _interopRequireDefault(_Signin3);\n\nvar _Signin5 = __webpack_require__(/*! ./auth/student/Signin */ \"./client/auth/student/Signin.js\");\n\nvar _Signin6 = _interopRequireDefault(_Signin5);\n\nvar _EditProfile = __webpack_require__(/*! ./user/EditProfile */ \"./client/user/EditProfile.js\");\n\nvar _EditProfile2 = _interopRequireDefault(_EditProfile);\n\nvar _Dashboard = __webpack_require__(/*! ./user/instructor/Dashboard */ \"./client/user/instructor/Dashboard.js\");\n\nvar _Dashboard2 = _interopRequireDefault(_Dashboard);\n\nvar _Lesson = __webpack_require__(/*! ./user/instructor/Lesson */ \"./client/user/instructor/Lesson.js\");\n\nvar _Lesson2 = _interopRequireDefault(_Lesson);\n\nvar _Profile = __webpack_require__(/*! ./user/Profile */ \"./client/user/Profile.js\");\n\nvar _Profile2 = _interopRequireDefault(_Profile);\n\nvar _PrivateRoute = __webpack_require__(/*! ./auth/PrivateRoute */ \"./client/auth/PrivateRoute.js\");\n\nvar _PrivateRoute2 = _interopRequireDefault(_PrivateRoute);\n\nvar _Menu = __webpack_require__(/*! ./core/Menu */ \"./client/core/Menu.js\");\n\nvar _Menu2 = _interopRequireDefault(_Menu);\n\nvar _Menu3 = __webpack_require__(/*! ./user/instructor/Menu */ \"./client/user/instructor/Menu.js\");\n\nvar _Menu4 = _interopRequireDefault(_Menu3);\n\nvar _authHelper = __webpack_require__(/*! ./auth/auth-helper */ \"./client/auth/auth-helper.js\");\n\nvar _authHelper2 = _interopRequireDefault(_authHelper);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n    enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n    return a;\n};\n\nvar useStyles = (0, _styles.makeStyles)(function (theme) {\n    return {\n        root: {\n            width: '100%',\n            maxWidth: '100%',\n            backgroundColor: theme.palette.background.paper\n        },\n        nested: {\n            paddingLeft: theme.spacing(4)\n        },\n        main: {}\n    };\n});\n\nvar MainRouter = function MainRouter(props) {\n\n    var classes = useStyles();\n\n    return _react2.default.createElement(\n        'div',\n        null,\n        _authHelper2.default.isAuthenticated() ? _react2.default.createElement(_Menu4.default, null) : _react2.default.createElement(_Menu2.default, null),\n        _react2.default.createElement(\n            _reactRouterDom.Switch,\n            null,\n            _authHelper2.default.isAuthenticated() ? _react2.default.createElement(_PrivateRoute2.default, { path: '/', component: _Dashboard2.default, classes: classes }) : _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', render: function render(props) {\n                    return _react2.default.createElement(_Home2.default, _extends({}, props, { classes: classes }));\n                } }),\n            _react2.default.createElement(_reactRouterDom.Route, { path: '/users', component: _Users2.default }),\n            _react2.default.createElement(_reactRouterDom.Route, { path: '/signup', component: _Signup2.default }),\n            _react2.default.createElement(_reactRouterDom.Route, { path: '/signin', component: _Signin2.default }),\n            _react2.default.createElement(_reactRouterDom.Route, { path: '/instructor/signin', render: function render(props) {\n                    return _react2.default.createElement(_Signin4.default, _extends({}, props, { classes: classes }));\n                } }),\n            _react2.default.createElement(_reactRouterDom.Route, { path: '/studentsignin', component: _Signin6.default }),\n            _react2.default.createElement(_reactRouterDom.Route, { path: '/instructor/signup', component: _Signup4.default }),\n            _react2.default.createElement(_reactRouterDom.Route, { path: '/studentsignup', component: _Signup6.default }),\n            _react2.default.createElement(_PrivateRoute2.default, { path: '/user/edit/:userId', component: _EditProfile2.default }),\n            _react2.default.createElement(_PrivateRoute2.default, { path: '/instructor/dashboard/:userId', component: _Dashboard2.default, classes: classes }),\n            _react2.default.createElement(_PrivateRoute2.default, { path: '/instructor/lessons/:lessonId', component: _Lesson2.default, classes: classes }),\n            _react2.default.createElement(_reactRouterDom.Route, { path: '/user/:userId', component: _Profile2.default })\n        )\n    );\n};\n\n__signature__(MainRouter, 'useStyles{classes}', function () {\n    return [useStyles];\n});\n\nvar _default = MainRouter;\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(useStyles, 'useStyles', '/home/davies/Development/gamifier/client/MainRouter.js');\n    reactHotLoader.register(MainRouter, 'MainRouter', '/home/davies/Development/gamifier/client/MainRouter.js');\n    reactHotLoader.register(_default, 'default', '/home/davies/Development/gamifier/client/MainRouter.js');\n})();\n\n;\n\n(function () {\n    var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n    leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/MainRouter.js?");

/***/ }),

/***/ "./client/auth/PrivateRoute.js":
/*!*************************************!*\
  !*** ./client/auth/PrivateRoute.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _authHelper = __webpack_require__(/*! ./auth-helper */ \"./client/auth/auth-helper.js\");\n\nvar _authHelper2 = _interopRequireDefault(_authHelper);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n    enterModule && enterModule(module);\n})();\n\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n    return a;\n};\n\nvar PrivateRoute = function PrivateRoute(_ref) {\n    var Component = _ref.component,\n        classes = _ref.classes,\n        rest = _objectWithoutProperties(_ref, ['component', 'classes']);\n\n    return _react2.default.createElement(_reactRouterDom.Route, _extends({}, rest, { render: function render(props) {\n            return _authHelper2.default.isAuthenticated() ? _react2.default.createElement(Component, _extends({ classes: classes }, props)) : _react2.default.createElement(_reactRouterDom.Redirect, { to: {\n                    pathname: '/signin',\n                    state: { from: props.location }\n                } });\n        } }));\n};\n\nvar _default = PrivateRoute;\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(PrivateRoute, 'PrivateRoute', '/home/davies/Development/gamifier/client/auth/PrivateRoute.js');\n    reactHotLoader.register(_default, 'default', '/home/davies/Development/gamifier/client/auth/PrivateRoute.js');\n})();\n\n;\n\n(function () {\n    var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n    leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/auth/PrivateRoute.js?");

/***/ }),

/***/ "./client/auth/Signin.js":
/*!*******************************!*\
  !*** ./client/auth/Signin.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Card = __webpack_require__(/*! @material-ui/core/Card */ \"@material-ui/core/Card\");\n\nvar _Card2 = _interopRequireDefault(_Card);\n\nvar _CardActions = __webpack_require__(/*! @material-ui/core/CardActions */ \"@material-ui/core/CardActions\");\n\nvar _CardActions2 = _interopRequireDefault(_CardActions);\n\nvar _CardContent = __webpack_require__(/*! @material-ui/core/CardContent */ \"@material-ui/core/CardContent\");\n\nvar _CardContent2 = _interopRequireDefault(_CardContent);\n\nvar _Button = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nvar _TextField = __webpack_require__(/*! @material-ui/core/TextField */ \"@material-ui/core/TextField\");\n\nvar _TextField2 = _interopRequireDefault(_TextField);\n\nvar _Typography = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _Icon = __webpack_require__(/*! @material-ui/core/Icon */ \"@material-ui/core/Icon\");\n\nvar _Icon2 = _interopRequireDefault(_Icon);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nvar _authHelper = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n\nvar _authHelper2 = _interopRequireDefault(_authHelper);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _apiAuth = __webpack_require__(/*! ./api-auth.js */ \"./client/auth/api-auth.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n    enterModule && enterModule(module);\n})();\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n    return a;\n};\n\nvar styles = function styles(theme) {\n    return {\n        card: {\n            maxWidth: 600,\n            margin: 'auto',\n            textAlign: 'center',\n            marginTop: theme.spacing.unit * 5,\n            paddingBottom: theme.spacing.unit * 2\n        },\n        error: {\n            verticalAlign: 'middle'\n        },\n        title: {\n            marginTop: theme.spacing.unit * 2,\n            color: theme.palette.openTitle\n        },\n        textField: {\n            marginLeft: theme.spacing.unit,\n            marginRight: theme.spacing.unit,\n            width: 300\n        },\n        submit: {\n            margin: 'auto',\n            marginBottom: theme.spacing.unit * 2\n        }\n    };\n};\n\nvar Signin = function (_Component) {\n    _inherits(Signin, _Component);\n\n    function Signin() {\n        var _ref;\n\n        var _temp, _this, _ret;\n\n        _classCallCheck(this, Signin);\n\n        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n            args[_key] = arguments[_key];\n        }\n\n        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Signin.__proto__ || Object.getPrototypeOf(Signin)).call.apply(_ref, [this].concat(args))), _this), _this.state = {\n            email: '',\n            password: '',\n            error: '',\n            redirectToReferrer: false\n        }, _this.clickSubmit = function () {\n            var user = {\n                email: _this.state.email || undefined,\n                password: _this.state.password || undefined\n            };\n\n            (0, _apiAuth.signin)(user).then(function (data) {\n                if (data.error) {\n                    _this.setState({ error: data.error });\n                } else {\n                    _authHelper2.default.authenticate(data, function () {\n                        _this.setState({ redirectToReferrer: true });\n                    });\n                }\n            });\n        }, _this.handleChange = function (name) {\n            return function (event) {\n                _this.setState(_defineProperty({}, name, event.target.value));\n            };\n        }, _temp), _possibleConstructorReturn(_this, _ret);\n    }\n\n    _createClass(Signin, [{\n        key: 'render',\n        value: function render() {\n            var classes = this.props.classes;\n\n            var _ref2 = this.props.location.state || {\n                from: {\n                    pathname: '/'\n                }\n            },\n                from = _ref2.from;\n\n            var redirectToReferrer = this.state.redirectToReferrer;\n\n            if (redirectToReferrer) {\n                return _react2.default.createElement(_reactRouterDom.Redirect, { to: from });\n            }\n\n            return _react2.default.createElement(\n                _Card2.default,\n                { className: classes.card },\n                _react2.default.createElement(\n                    _CardContent2.default,\n                    null,\n                    _react2.default.createElement(\n                        _Typography2.default,\n                        { type: 'headline', component: 'h2', className: classes.title },\n                        'Sign In'\n                    ),\n                    _react2.default.createElement(_TextField2.default, { id: 'email', type: 'email', label: 'Email', className: classes.textField, value: this.state.email, onChange: this.handleChange('email'), margin: 'normal' }),\n                    _react2.default.createElement('br', null),\n                    _react2.default.createElement(_TextField2.default, { id: 'password', type: 'password', label: 'Password', className: classes.textField, value: this.state.password, onChange: this.handleChange('password'), margin: 'normal' }),\n                    _react2.default.createElement('br', null),\n                    ' ',\n                    this.state.error && _react2.default.createElement(\n                        _Typography2.default,\n                        { component: 'p', color: 'error' },\n                        _react2.default.createElement(\n                            _Icon2.default,\n                            { color: 'error', className: classes.error },\n                            'error'\n                        ),\n                        this.state.error\n                    )\n                ),\n                _react2.default.createElement(\n                    _CardActions2.default,\n                    null,\n                    _react2.default.createElement(\n                        _Button2.default,\n                        { color: 'primary', variant: 'raised', onClick: this.clickSubmit, className: classes.submit },\n                        'Submit'\n                    )\n                )\n            );\n        }\n    }, {\n        key: '__reactstandin__regenerateByEval',\n        // @ts-ignore\n        value: function __reactstandin__regenerateByEval(key, code) {\n            // @ts-ignore\n            this[key] = eval(code);\n        }\n    }]);\n\n    return Signin;\n}(_react.Component);\n\nSignin.propTypes = {\n    classes: _propTypes2.default.object.isRequired\n};\n\nvar _default = (0, _styles.withStyles)(styles)(Signin);\n\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(styles, 'styles', '/home/davies/Development/gamifier/client/auth/Signin.js');\n    reactHotLoader.register(Signin, 'Signin', '/home/davies/Development/gamifier/client/auth/Signin.js');\n    reactHotLoader.register(_default, 'default', '/home/davies/Development/gamifier/client/auth/Signin.js');\n})();\n\n;\n\n(function () {\n    var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n    leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/auth/Signin.js?");

/***/ }),

/***/ "./client/auth/api-auth.js":
/*!*********************************!*\
  !*** ./client/auth/api-auth.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\n(function () {\n    var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n    enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n    return a;\n};\n\nvar signin = function signin(user) {\n    return fetch('/auth/signin/', {\n        method: 'POST',\n        headers: {\n            'Accept': 'application/json',\n            'Content-Type': 'application/json'\n        },\n        credentials: 'include',\n        body: JSON.stringify(user)\n    }).then(function (response) {\n        return response.json();\n    }).catch(function (err) {\n        return console.log(err);\n    });\n};\n\nvar signout = function signout() {\n    return fetch('/auth/signout/', {\n        method: 'GET'\n    }).then(function (response) {\n        return response.json();\n    }).catch(function (err) {\n        return console.log(err);\n    });\n};\n\nexports.signin = signin;\nexports.signout = signout;\n;\n\n(function () {\n    var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(signin, 'signin', '/home/davies/Development/gamifier/client/auth/api-auth.js');\n    reactHotLoader.register(signout, 'signout', '/home/davies/Development/gamifier/client/auth/api-auth.js');\n})();\n\n;\n\n(function () {\n    var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n    leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/auth/api-auth.js?");

/***/ }),

/***/ "./client/auth/auth-helper.js":
/*!************************************!*\
  !*** ./client/auth/auth-helper.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _apiAuth = __webpack_require__(/*! ./api-auth.js */ \"./client/auth/api-auth.js\");\n\n(function () {\n    var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n    enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n    return a;\n};\n\nvar auth = {\n    isAuthenticated: function isAuthenticated() {\n        if (typeof window == \"undefined\") return false;\n\n        if (sessionStorage.getItem('jwt')) return JSON.parse(sessionStorage.getItem('jwt'));else return false;\n    },\n    authenticate: function authenticate(jwt, cb) {\n        if (typeof window !== \"undefined\") sessionStorage.setItem('jwt', JSON.stringify(jwt));\n        cb();\n    },\n    signout: function signout(cb) {\n        if (typeof window !== \"undefined\") sessionStorage.removeItem('jwt');\n        cb();\n        //optional\n        (0, _apiAuth.signout)().then(function (data) {\n            document.cookie = \"t=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;\";\n        });\n    }\n};\n\nvar _default = auth;\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(auth, 'auth', '/home/davies/Development/gamifier/client/auth/auth-helper.js');\n    reactHotLoader.register(_default, 'default', '/home/davies/Development/gamifier/client/auth/auth-helper.js');\n})();\n\n;\n\n(function () {\n    var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n    leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/auth/auth-helper.js?");

/***/ }),

/***/ "./client/auth/instructor/Signin.js":
/*!******************************************!*\
  !*** ./client/auth/instructor/Signin.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _authHelper = __webpack_require__(/*! ./../../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n\nvar _authHelper2 = _interopRequireDefault(_authHelper);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _SigninForm = __webpack_require__(/*! ./SigninForm */ \"./client/auth/instructor/SigninForm.js\");\n\nvar _SigninForm2 = _interopRequireDefault(_SigninForm);\n\nvar _CssBaseline = __webpack_require__(/*! @material-ui/core/CssBaseline/CssBaseline */ \"@material-ui/core/CssBaseline/CssBaseline\");\n\nvar _CssBaseline2 = _interopRequireDefault(_CssBaseline);\n\nvar _Container = __webpack_require__(/*! @material-ui/core/Container/Container */ \"@material-ui/core/Container/Container\");\n\nvar _Container2 = _interopRequireDefault(_Container);\n\nvar _Box = __webpack_require__(/*! @material-ui/core/Box/Box */ \"@material-ui/core/Box/Box\");\n\nvar _Box2 = _interopRequireDefault(_Box);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n    enterModule && enterModule(module);\n})();\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n    return a;\n};\n\nvar Signin = function (_Component) {\n    _inherits(Signin, _Component);\n\n    function Signin(props) {\n        _classCallCheck(this, Signin);\n\n        var _this = _possibleConstructorReturn(this, (Signin.__proto__ || Object.getPrototypeOf(Signin)).call(this));\n\n        _this.clickSubmit = function () {\n\n            var user = {\n                email: _this.state.email || undefined,\n                password: _this.state.password || undefined\n            };\n\n            fetch('/api/instructor/auth/signin', {\n                method: 'POST',\n                headers: {\n                    'Accept': 'application/json',\n                    'Content-Type': 'application/json'\n                },\n                credentials: 'include',\n                body: JSON.stringify(user)\n            }).then(function (response) {\n                return response.json();\n            }).then(function (data) {\n                console.log(data);\n                if (data.error) {\n                    _this.setState({ error: data.error });\n                } else {\n                    console.log(data);\n                    _authHelper2.default.authenticate(data, function () {\n                        _this.setState({ redirectToDashboard: true, dashboard: \"/instructor/dashboard/\" + data.instructor._id });\n                    });\n                }\n            }).catch(function (err) {\n                return console.log(err);\n            });\n        };\n\n        _this.handleChange = function (name) {\n            return function (event) {\n                _this.setState(_defineProperty({}, name, event.target.value));\n            };\n        };\n\n        _this.props = props;\n        _this.state = {\n            email: '',\n            password: '',\n            error: '',\n            redirectToDashboard: false,\n            dashboard: '/instructor/dashboard'\n        };\n        return _this;\n    }\n\n    _createClass(Signin, [{\n        key: 'render',\n        value: function render() {\n            var redirectToDashboard = this.state.redirectToDashboard;\n\n            if (redirectToDashboard) {\n                return _react2.default.createElement(_reactRouterDom.Redirect, { to: this.state.dashboard });\n            }\n\n            return _react2.default.createElement(\n                _react2.default.Fragment,\n                null,\n                _react2.default.createElement(_CssBaseline2.default, null),\n                _react2.default.createElement(\n                    _Container2.default,\n                    { fixed: true },\n                    _react2.default.createElement(\n                        _Box2.default,\n                        null,\n                        _react2.default.createElement(_SigninForm2.default, { error: this.state.error, clickSubmit: this.clickSubmit, email: this.state.email, handleChange: this.handleChange, password: this.state.password })\n                    )\n                )\n            );\n        }\n    }, {\n        key: '__reactstandin__regenerateByEval',\n        // @ts-ignore\n        value: function __reactstandin__regenerateByEval(key, code) {\n            // @ts-ignore\n            this[key] = eval(code);\n        }\n    }]);\n\n    return Signin;\n}(_react.Component);\n\nvar _default = Signin;\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(Signin, 'Signin', '/home/davies/Development/gamifier/client/auth/instructor/Signin.js');\n    reactHotLoader.register(_default, 'default', '/home/davies/Development/gamifier/client/auth/instructor/Signin.js');\n})();\n\n;\n\n(function () {\n    var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n    leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/auth/instructor/Signin.js?");

/***/ }),

/***/ "./client/auth/instructor/SigninForm.js":
/*!**********************************************!*\
  !*** ./client/auth/instructor/SigninForm.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Typography = __webpack_require__(/*! @material-ui/core/Typography/Typography */ \"@material-ui/core/Typography/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _Card = __webpack_require__(/*! @material-ui/core/Card */ \"@material-ui/core/Card\");\n\nvar _Card2 = _interopRequireDefault(_Card);\n\nvar _CardActions = __webpack_require__(/*! @material-ui/core/CardActions */ \"@material-ui/core/CardActions\");\n\nvar _CardActions2 = _interopRequireDefault(_CardActions);\n\nvar _CardContent = __webpack_require__(/*! @material-ui/core/CardContent */ \"@material-ui/core/CardContent\");\n\nvar _CardContent2 = _interopRequireDefault(_CardContent);\n\nvar _Button = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nvar _TextField = __webpack_require__(/*! @material-ui/core/TextField */ \"@material-ui/core/TextField\");\n\nvar _TextField2 = _interopRequireDefault(_TextField);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n    enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n    return a;\n};\n\nvar SigninForm = function SigninForm(props) {\n\n    return _react2.default.createElement(\n        _Card2.default,\n        null,\n        _react2.default.createElement(\n            _CardContent2.default,\n            null,\n            _react2.default.createElement(\n                _Typography2.default,\n                { type: 'headline', component: 'h2' },\n                'Instructor Sign In'\n            ),\n            _react2.default.createElement(_TextField2.default, { id: 'email', type: 'email', label: 'Email', value: props.email, onChange: props.handleChange('email'), margin: 'normal' }),\n            _react2.default.createElement('br', null),\n            _react2.default.createElement(_TextField2.default, { id: 'password', type: 'password', label: 'Password', value: props.password, onChange: props.handleChange('password'), margin: 'normal' }),\n            _react2.default.createElement('br', null),\n            ' ',\n            props.error && _react2.default.createElement(\n                _Typography2.default,\n                { component: 'p', color: 'error' },\n                _react2.default.createElement(\n                    Icon,\n                    { color: 'error' },\n                    'error'\n                ),\n                props.error\n            )\n        ),\n        _react2.default.createElement(\n            _CardActions2.default,\n            null,\n            _react2.default.createElement(\n                _Button2.default,\n                { color: 'primary', variant: 'outlined', onClick: props.clickSubmit },\n                'Submit'\n            )\n        ),\n        _react2.default.createElement(\n            _Typography2.default,\n            { type: 'headline', component: 'h2' },\n            'Don\\'t have an instructor account? Click ',\n            _react2.default.createElement(\n                'a',\n                { href: '/instructor/signup' },\n                'here'\n            ),\n            ' to sign up!'\n        )\n    );\n};\n\nvar _default = SigninForm;\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(SigninForm, 'SigninForm', '/home/davies/Development/gamifier/client/auth/instructor/SigninForm.js');\n    reactHotLoader.register(_default, 'default', '/home/davies/Development/gamifier/client/auth/instructor/SigninForm.js');\n})();\n\n;\n\n(function () {\n    var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n    leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/auth/instructor/SigninForm.js?");

/***/ }),

/***/ "./client/auth/student/Signin.js":
/*!***************************************!*\
  !*** ./client/auth/student/Signin.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Card = __webpack_require__(/*! @material-ui/core/Card */ \"@material-ui/core/Card\");\n\nvar _Card2 = _interopRequireDefault(_Card);\n\nvar _CardActions = __webpack_require__(/*! @material-ui/core/CardActions */ \"@material-ui/core/CardActions\");\n\nvar _CardActions2 = _interopRequireDefault(_CardActions);\n\nvar _CardContent = __webpack_require__(/*! @material-ui/core/CardContent */ \"@material-ui/core/CardContent\");\n\nvar _CardContent2 = _interopRequireDefault(_CardContent);\n\nvar _Button = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nvar _TextField = __webpack_require__(/*! @material-ui/core/TextField */ \"@material-ui/core/TextField\");\n\nvar _TextField2 = _interopRequireDefault(_TextField);\n\nvar _Typography = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _Icon = __webpack_require__(/*! @material-ui/core/Icon */ \"@material-ui/core/Icon\");\n\nvar _Icon2 = _interopRequireDefault(_Icon);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nvar _authHelper = __webpack_require__(/*! ./../../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n\nvar _authHelper2 = _interopRequireDefault(_authHelper);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _apiAuth = __webpack_require__(/*! ./../api-auth.js */ \"./client/auth/api-auth.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n    enterModule && enterModule(module);\n})();\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n    return a;\n};\n\nvar styles = function styles(theme) {\n    return {\n        card: {\n            maxWidth: 600,\n            margin: 'auto',\n            textAlign: 'center',\n            marginTop: theme.spacing.unit * 5,\n            paddingBottom: theme.spacing.unit * 2\n        },\n        error: {\n            verticalAlign: 'middle'\n        },\n        title: {\n            marginTop: theme.spacing.unit * 2,\n            color: theme.palette.openTitle\n        },\n        textField: {\n            marginLeft: theme.spacing.unit,\n            marginRight: theme.spacing.unit,\n            width: 300\n        },\n        submit: {\n            margin: 'auto',\n            marginBottom: theme.spacing.unit * 2\n        }\n    };\n};\n\nvar Signin = function (_Component) {\n    _inherits(Signin, _Component);\n\n    function Signin() {\n        var _ref;\n\n        var _temp, _this, _ret;\n\n        _classCallCheck(this, Signin);\n\n        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n            args[_key] = arguments[_key];\n        }\n\n        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Signin.__proto__ || Object.getPrototypeOf(Signin)).call.apply(_ref, [this].concat(args))), _this), _this.state = {\n            email: '',\n            password: '',\n            error: '',\n            redirectToReferrer: false\n        }, _this.clickSubmit = function () {\n            var user = {\n                email: _this.state.email || undefined,\n                password: _this.state.password || undefined\n            };\n\n            (0, _apiAuth.signin)(user).then(function (data) {\n                if (data.error) {\n                    _this.setState({ error: data.error });\n                } else {\n                    _authHelper2.default.authenticate(data, function () {\n                        _this.setState({ redirectToReferrer: true });\n                    });\n                }\n            });\n        }, _this.handleChange = function (name) {\n            return function (event) {\n                _this.setState(_defineProperty({}, name, event.target.value));\n            };\n        }, _temp), _possibleConstructorReturn(_this, _ret);\n    }\n\n    _createClass(Signin, [{\n        key: 'render',\n        value: function render() {\n            var classes = this.props.classes;\n\n            var _ref2 = this.props.location.state || {\n                from: {\n                    pathname: '/'\n                }\n            },\n                from = _ref2.from;\n\n            var redirectToReferrer = this.state.redirectToReferrer;\n\n            if (redirectToReferrer) {\n                return _react2.default.createElement(_reactRouterDom.Redirect, { to: from });\n            }\n\n            return _react2.default.createElement(\n                _Card2.default,\n                { className: classes.card },\n                _react2.default.createElement(\n                    _CardContent2.default,\n                    null,\n                    _react2.default.createElement(\n                        _Typography2.default,\n                        { type: 'headline', component: 'h2', className: classes.title },\n                        'Student Sign In'\n                    ),\n                    _react2.default.createElement(_TextField2.default, { id: 'email', type: 'email', label: 'Email', className: classes.textField, value: this.state.email, onChange: this.handleChange('email'), margin: 'normal' }),\n                    _react2.default.createElement('br', null),\n                    _react2.default.createElement(_TextField2.default, { id: 'password', type: 'password', label: 'Password', className: classes.textField, value: this.state.password, onChange: this.handleChange('password'), margin: 'normal' }),\n                    _react2.default.createElement('br', null),\n                    ' ',\n                    this.state.error && _react2.default.createElement(\n                        _Typography2.default,\n                        { component: 'p', color: 'error' },\n                        _react2.default.createElement(\n                            _Icon2.default,\n                            { color: 'error', className: classes.error },\n                            'error'\n                        ),\n                        this.state.error\n                    )\n                ),\n                _react2.default.createElement(\n                    _CardActions2.default,\n                    null,\n                    _react2.default.createElement(\n                        _Button2.default,\n                        { color: 'primary', variant: 'raised', onClick: this.clickSubmit, className: classes.submit },\n                        'Submit'\n                    )\n                ),\n                _react2.default.createElement(\n                    _Typography2.default,\n                    { type: 'headline', component: 'h2', className: classes.title },\n                    'Don\\'t have an instructor account? Click ',\n                    _react2.default.createElement(\n                        'a',\n                        { href: '/instructorsignup' },\n                        'here'\n                    ),\n                    ' to sign up!'\n                )\n            );\n        }\n    }, {\n        key: '__reactstandin__regenerateByEval',\n        // @ts-ignore\n        value: function __reactstandin__regenerateByEval(key, code) {\n            // @ts-ignore\n            this[key] = eval(code);\n        }\n    }]);\n\n    return Signin;\n}(_react.Component);\n\nSignin.propTypes = {\n    classes: _propTypes2.default.object.isRequired\n};\n\nvar _default = (0, _styles.withStyles)(styles)(Signin);\n\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(styles, 'styles', '/home/davies/Development/gamifier/client/auth/student/Signin.js');\n    reactHotLoader.register(Signin, 'Signin', '/home/davies/Development/gamifier/client/auth/student/Signin.js');\n    reactHotLoader.register(_default, 'default', '/home/davies/Development/gamifier/client/auth/student/Signin.js');\n})();\n\n;\n\n(function () {\n    var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n    leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/auth/student/Signin.js?");

/***/ }),

/***/ "./client/core/Home.js":
/*!*****************************!*\
  !*** ./client/core/Home.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _CssBaseline = __webpack_require__(/*! @material-ui/core/CssBaseline */ \"@material-ui/core/CssBaseline\");\n\nvar _CssBaseline2 = _interopRequireDefault(_CssBaseline);\n\nvar _Typography = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _Container = __webpack_require__(/*! @material-ui/core/Container */ \"@material-ui/core/Container\");\n\nvar _Container2 = _interopRequireDefault(_Container);\n\nvar _Box = __webpack_require__(/*! @material-ui/core/Box */ \"@material-ui/core/Box\");\n\nvar _Box2 = _interopRequireDefault(_Box);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n    enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n    return a;\n};\n\nvar Home = function Home(props) {\n\n    return _react2.default.createElement(\n        _react2.default.Fragment,\n        null,\n        _react2.default.createElement(_CssBaseline2.default, null),\n        _react2.default.createElement(\n            _Container2.default,\n            { fixed: true },\n            _react2.default.createElement(\n                _Box2.default,\n                null,\n                _react2.default.createElement(\n                    _Typography2.default,\n                    { component: 'p', style: { padding: '1em', backgroundColor: '#cfe8fc', height: '100vh' } },\n                    'hello world'\n                )\n            )\n        )\n    );\n};\n\nvar _default = Home;\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(Home, 'Home', '/home/davies/Development/gamifier/client/core/Home.js');\n    reactHotLoader.register(_default, 'default', '/home/davies/Development/gamifier/client/core/Home.js');\n})();\n\n;\n\n(function () {\n    var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n    leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/core/Home.js?");

/***/ }),

/***/ "./client/core/Menu.js":
/*!*****************************!*\
  !*** ./client/core/Menu.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _AppBar = __webpack_require__(/*! @material-ui/core/AppBar */ \"@material-ui/core/AppBar\");\n\nvar _AppBar2 = _interopRequireDefault(_AppBar);\n\nvar _Toolbar = __webpack_require__(/*! @material-ui/core/Toolbar */ \"@material-ui/core/Toolbar\");\n\nvar _Toolbar2 = _interopRequireDefault(_Toolbar);\n\nvar _Typography = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _IconButton = __webpack_require__(/*! @material-ui/core/IconButton */ \"@material-ui/core/IconButton\");\n\nvar _IconButton2 = _interopRequireDefault(_IconButton);\n\nvar _Home = __webpack_require__(/*! @material-ui/icons/Home */ \"@material-ui/icons/Home\");\n\nvar _Home2 = _interopRequireDefault(_Home);\n\nvar _Button = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nvar _authHelper = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n\nvar _authHelper2 = _interopRequireDefault(_authHelper);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n    enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n    return a;\n};\n\nvar isActive = function isActive(history, path) {\n    if (history.location.pathname == path) return { color: '#ff4081' };else return { color: '#ffffff' };\n};\n\nvar Menu = (0, _reactRouterDom.withRouter)(function (_ref) {\n    var history = _ref.history;\n    return (\n        // auth.isAuthenticated()\n        _react2.default.createElement(\n            _AppBar2.default,\n            { position: 'sticky' },\n            _react2.default.createElement(\n                _Toolbar2.default,\n                null,\n                _react2.default.createElement(\n                    _reactRouterDom.Link,\n                    { to: '/' },\n                    _react2.default.createElement(\n                        _IconButton2.default,\n                        { 'aria-label': 'Home', style: isActive(history, \"/\") },\n                        _react2.default.createElement(_Home2.default, null)\n                    )\n                ),\n                _react2.default.createElement(\n                    _reactRouterDom.Link,\n                    { to: '/instructor/signin' },\n                    _react2.default.createElement(\n                        _Button2.default,\n                        { style: isActive(history, \"/instructor/signin\") },\n                        'Instructor sign in'\n                    )\n                ),\n                _react2.default.createElement(\n                    _reactRouterDom.Link,\n                    { to: '/users' },\n                    _react2.default.createElement(\n                        _Button2.default,\n                        { style: isActive(history, \"/users\") },\n                        'Student sign in'\n                    )\n                ),\n                _react2.default.createElement(\n                    _reactRouterDom.Link,\n                    { to: '/users' },\n                    _react2.default.createElement(\n                        _Button2.default,\n                        { style: isActive(history, \"/users\") },\n                        'About'\n                    )\n                )\n            )\n        )\n    );\n});\n\nvar _default = Menu;\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(isActive, 'isActive', '/home/davies/Development/gamifier/client/core/Menu.js');\n    reactHotLoader.register(Menu, 'Menu', '/home/davies/Development/gamifier/client/core/Menu.js');\n    reactHotLoader.register(_default, 'default', '/home/davies/Development/gamifier/client/core/Menu.js');\n})();\n\n;\n\n(function () {\n    var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n    leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/core/Menu.js?");

/***/ }),

/***/ "./client/user/DeleteUser.js":
/*!***********************************!*\
  !*** ./client/user/DeleteUser.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _IconButton = __webpack_require__(/*! @material-ui/core/IconButton */ \"@material-ui/core/IconButton\");\n\nvar _IconButton2 = _interopRequireDefault(_IconButton);\n\nvar _Button = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nvar _Delete = __webpack_require__(/*! @material-ui/icons/Delete */ \"@material-ui/icons/Delete\");\n\nvar _Delete2 = _interopRequireDefault(_Delete);\n\nvar _Dialog = __webpack_require__(/*! material-ui/Dialog */ \"material-ui/Dialog\");\n\nvar _Dialog2 = _interopRequireDefault(_Dialog);\n\nvar _authHelper = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n\nvar _authHelper2 = _interopRequireDefault(_authHelper);\n\nvar _apiUser = __webpack_require__(/*! ./api-user.js */ \"./client/user/api-user.js\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n    enterModule && enterModule(module);\n})();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n    return a;\n};\n\nvar DeleteUser = function (_Component) {\n    _inherits(DeleteUser, _Component);\n\n    function DeleteUser() {\n        var _ref;\n\n        var _temp, _this, _ret;\n\n        _classCallCheck(this, DeleteUser);\n\n        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n            args[_key] = arguments[_key];\n        }\n\n        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DeleteUser.__proto__ || Object.getPrototypeOf(DeleteUser)).call.apply(_ref, [this].concat(args))), _this), _this.state = {\n            redirect: false,\n            open: false\n        }, _this.clickButton = function () {\n            _this.setState({ open: true });\n        }, _this.deleteAccount = function () {\n            var jwt = _authHelper2.default.isAuthenticated();\n            (0, _apiUser.remove)({\n                userId: _this.props.userId\n            }, { t: jwt.token }).then(function (data) {\n                if (data.error) {\n                    console.log(data.error);\n                } else {\n                    _authHelper2.default.signout(function () {\n                        return console.log('deleted');\n                    });\n                    _this.setState({ redirect: true });\n                }\n            });\n        }, _this.handleRequestClose = function () {\n            _this.setState({ open: false });\n        }, _temp), _possibleConstructorReturn(_this, _ret);\n    }\n\n    _createClass(DeleteUser, [{\n        key: 'render',\n        value: function render() {\n            var redirect = this.state.redirect;\n            if (redirect) {\n                return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });\n            }\n            return _react2.default.createElement(\n                'span',\n                null,\n                _react2.default.createElement(\n                    _Dialog2.default,\n                    { open: this.state.open, onClose: this.handleRequestClose },\n                    _react2.default.createElement(\n                        _Dialog.DialogTitle,\n                        null,\n                        \"Delete Account\"\n                    ),\n                    _react2.default.createElement(\n                        _Dialog.DialogContent,\n                        null,\n                        _react2.default.createElement(\n                            _Dialog.DialogContentText,\n                            null,\n                            'Confirm to delete your account.'\n                        )\n                    ),\n                    _react2.default.createElement(\n                        _Dialog.DialogActions,\n                        null,\n                        _react2.default.createElement(\n                            _Button2.default,\n                            { onClick: this.handleRequestClose, color: 'primary' },\n                            'Cancel'\n                        ),\n                        _react2.default.createElement(\n                            _Button2.default,\n                            { onClick: this.deleteAccount, color: 'secondary', autoFocus: 'autoFocus' },\n                            'Confirm'\n                        )\n                    )\n                )\n            );\n        }\n    }, {\n        key: '__reactstandin__regenerateByEval',\n        // @ts-ignore\n        value: function __reactstandin__regenerateByEval(key, code) {\n            // @ts-ignore\n            this[key] = eval(code);\n        }\n    }]);\n\n    return DeleteUser;\n}(_react.Component);\n\nDeleteUser.propTypes = {\n    userId: _propTypes2.default.string.isRequired\n};\nvar _default = DeleteUser;\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(DeleteUser, 'DeleteUser', '/home/davies/Development/gamifier/client/user/DeleteUser.js');\n    reactHotLoader.register(_default, 'default', '/home/davies/Development/gamifier/client/user/DeleteUser.js');\n})();\n\n;\n\n(function () {\n    var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n    leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/user/DeleteUser.js?");

/***/ }),

/***/ "./client/user/EditProfile.js":
/*!************************************!*\
  !*** ./client/user/EditProfile.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Card = __webpack_require__(/*! @material-ui/core/Card */ \"@material-ui/core/Card\");\n\nvar _Card2 = _interopRequireDefault(_Card);\n\nvar _Button = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nvar _TextField = __webpack_require__(/*! @material-ui/core/TextField */ \"@material-ui/core/TextField\");\n\nvar _TextField2 = _interopRequireDefault(_TextField);\n\nvar _Typography = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _Icon = __webpack_require__(/*! @material-ui/core/Icon */ \"@material-ui/core/Icon\");\n\nvar _Icon2 = _interopRequireDefault(_Icon);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nvar _authHelper = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n\nvar _authHelper2 = _interopRequireDefault(_authHelper);\n\nvar _apiUser = __webpack_require__(/*! ./api-user.js */ \"./client/user/api-user.js\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n    enterModule && enterModule(module);\n})();\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n    return a;\n};\n\nvar styles = function styles(theme) {\n    return {\n        card: {\n            maxWidth: 600,\n            margin: 'auto',\n            textAlign: 'center',\n            marginTop: theme.spacing.unit * 5,\n            paddingBottom: theme.spacing.unit * 2\n        },\n        title: {\n            margin: theme.spacing.unit * 2,\n            color: theme.palette.protectedTitle\n        },\n        error: {\n            verticalAlign: 'middle'\n        },\n        textField: {\n            marginLeft: theme.spacing.unit,\n            marginRight: theme.spacing.unit,\n            width: 300\n        },\n        submit: {\n            margin: 'auto',\n            marginBottom: theme.spacing.unit * 2\n        }\n    };\n};\n\nvar EditProfile = function (_Component) {\n    _inherits(EditProfile, _Component);\n\n    function EditProfile(_ref) {\n        var match = _ref.match;\n\n        _classCallCheck(this, EditProfile);\n\n        var _this = _possibleConstructorReturn(this, (EditProfile.__proto__ || Object.getPrototypeOf(EditProfile)).call(this));\n\n        _this.componentDidMount = function () {\n            var jwt = _authHelper2.default.isAuthenticated();\n            (0, _apiUser.read)({\n                userId: _this.match.params.userId\n            }, { t: jwt.token }).then(function (data) {\n                if (data.error) {\n                    _this.setState({ error: data.error });\n                } else {\n                    _this.setState({ name: data.name, email: data.email });\n                }\n            });\n        };\n\n        _this.clickSubmit = function () {\n            var jwt = _authHelper2.default.isAuthenticated();\n            var user = {\n                name: _this.state.name || undefined,\n                email: _this.state.email || undefined,\n                password: _this.state.password || undefined\n            };\n            (0, _apiUser.update)({\n                userId: _this.match.params.userId\n            }, {\n                t: jwt.token\n            }, user).then(function (data) {\n                if (data.error) {\n                    _this.setState({ error: data.error });\n                } else {\n                    _this.setState({ 'userId': data._id, 'redirectToProfile': true });\n                }\n            });\n        };\n\n        _this.handleChange = function (name) {\n            return function (event) {\n                _this.setState(_defineProperty({}, name, event.target.value));\n            };\n        };\n\n        _this.state = {\n            name: '',\n            email: '',\n            password: '',\n            redirectToProfile: false,\n            error: ''\n        };\n        _this.match = match;\n        return _this;\n    }\n\n    _createClass(EditProfile, [{\n        key: 'render',\n        value: function render() {\n            var classes = this.props.classes;\n\n            if (this.state.redirectToProfile) {\n                return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/user/' + this.state.userId });\n            }\n            return _react2.default.createElement(\n                _Card2.default,\n                { className: classes.card },\n                _react2.default.createElement(\n                    _Card.CardContent,\n                    null,\n                    _react2.default.createElement(\n                        _Typography2.default,\n                        { type: 'headline', component: 'h2', className: classes.title },\n                        'Edit Profile'\n                    ),\n                    _react2.default.createElement(_TextField2.default, { id: 'name', label: 'Name', className: classes.textField, value: this.state.name, onChange: this.handleChange('name'), margin: 'normal' }),\n                    _react2.default.createElement('br', null),\n                    _react2.default.createElement(_TextField2.default, { id: 'email', type: 'email', label: 'Email', className: classes.textField, value: this.state.email, onChange: this.handleChange('email'), margin: 'normal' }),\n                    _react2.default.createElement('br', null),\n                    _react2.default.createElement(_TextField2.default, { id: 'password', type: 'password', label: 'Password', className: classes.textField, value: this.state.password, onChange: this.handleChange('password'), margin: 'normal' }),\n                    _react2.default.createElement('br', null),\n                    ' ',\n                    this.state.error && _react2.default.createElement(\n                        _Typography2.default,\n                        { component: 'p', color: 'error' },\n                        _react2.default.createElement(\n                            _Icon2.default,\n                            { color: 'error', className: classes.error },\n                            'error'\n                        ),\n                        this.state.error\n                    )\n                ),\n                _react2.default.createElement(\n                    _Card.CardActions,\n                    null,\n                    _react2.default.createElement(\n                        _Button2.default,\n                        { color: 'primary', variant: 'raised', onClick: this.clickSubmit, className: classes.submit },\n                        'Submit'\n                    )\n                )\n            );\n        }\n    }, {\n        key: '__reactstandin__regenerateByEval',\n        // @ts-ignore\n        value: function __reactstandin__regenerateByEval(key, code) {\n            // @ts-ignore\n            this[key] = eval(code);\n        }\n    }]);\n\n    return EditProfile;\n}(_react.Component);\n\nEditProfile.propTypes = {\n    classes: _propTypes2.default.object.isRequired\n};\n\nvar _default = (0, _styles.withStyles)(styles)(EditProfile);\n\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(styles, 'styles', '/home/davies/Development/gamifier/client/user/EditProfile.js');\n    reactHotLoader.register(EditProfile, 'EditProfile', '/home/davies/Development/gamifier/client/user/EditProfile.js');\n    reactHotLoader.register(_default, 'default', '/home/davies/Development/gamifier/client/user/EditProfile.js');\n})();\n\n;\n\n(function () {\n    var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n    leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/user/EditProfile.js?");

/***/ }),

/***/ "./client/user/Profile.js":
/*!********************************!*\
  !*** ./client/user/Profile.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nvar _Paper = __webpack_require__(/*! @material-ui/core/Paper */ \"@material-ui/core/Paper\");\n\nvar _Paper2 = _interopRequireDefault(_Paper);\n\nvar _List = __webpack_require__(/*! @material-ui/core/List */ \"@material-ui/core/List\");\n\nvar _List2 = _interopRequireDefault(_List);\n\nvar _Avatar = __webpack_require__(/*! @material-ui/core/Avatar */ \"@material-ui/core/Avatar\");\n\nvar _Avatar2 = _interopRequireDefault(_Avatar);\n\nvar _IconButton = __webpack_require__(/*! @material-ui/core/IconButton */ \"@material-ui/core/IconButton\");\n\nvar _IconButton2 = _interopRequireDefault(_IconButton);\n\nvar _Button = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nvar _Typography = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _Edit = __webpack_require__(/*! @material-ui/icons/Edit */ \"@material-ui/icons/Edit\");\n\nvar _Edit2 = _interopRequireDefault(_Edit);\n\nvar _Person = __webpack_require__(/*! @material-ui/icons/Person */ \"@material-ui/icons/Person\");\n\nvar _Person2 = _interopRequireDefault(_Person);\n\nvar _Divider = __webpack_require__(/*! @material-ui/core/Divider */ \"@material-ui/core/Divider\");\n\nvar _Divider2 = _interopRequireDefault(_Divider);\n\nvar _DeleteUser = __webpack_require__(/*! ./DeleteUser */ \"./client/user/DeleteUser.js\");\n\nvar _DeleteUser2 = _interopRequireDefault(_DeleteUser);\n\nvar _authHelper = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n\nvar _authHelper2 = _interopRequireDefault(_authHelper);\n\nvar _apiUser = __webpack_require__(/*! ./api-user.js */ \"./client/user/api-user.js\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n    enterModule && enterModule(module);\n})();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n    return a;\n};\n\nconsole.log(\"RENDERING client/user/Profile.js\");\n\nvar styles = function styles(theme) {\n    return {\n        root: theme.mixins.gutters({\n            maxWidth: 600,\n            margin: 'auto',\n            padding: theme.spacing.unit * 3,\n            marginTop: theme.spacing.unit * 5\n        }),\n        title: {\n            margin: theme.spacing.unit * 3 + 'px 0 ' + theme.spacing.unit * 2 + 'px',\n            color: theme.palette.protectedTitle\n        }\n    };\n};\n\nvar Profile = function (_Component) {\n    _inherits(Profile, _Component);\n\n    function Profile(_ref) {\n        var match = _ref.match;\n\n        _classCallCheck(this, Profile);\n\n        var _this = _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).call(this));\n\n        _this.init = function (userId) {\n            var jwt = _authHelper2.default.isAuthenticated();\n            console.log(\"Calling Profile.js:init():read()\");\n            (0, _apiUser.read)({\n                userId: userId\n            }, { t: jwt.token }).then(function (data) {\n                if (data.error) {\n                    _this.setState({ redirectToSignin: true });\n                } else {\n                    _this.setState({ user: data });\n                }\n            });\n        };\n\n        _this.componentWillReceiveProps = function (props) {\n            _this.init(props.match.params.userId);\n        };\n\n        _this.componentDidMount = function () {\n            _this.init(_this.match.params.userId);\n        };\n\n        _this.state = {\n            user: '',\n            redirectToSignin: false\n        };\n        _this.match = match;\n        return _this;\n    }\n\n    _createClass(Profile, [{\n        key: 'render',\n        value: function render() {\n            var classes = this.props.classes;\n\n            var redirectToSignin = this.state.redirectToSignin;\n            if (redirectToSignin) {\n                return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/signin' });\n            }\n            return _react2.default.createElement(\n                _Paper2.default,\n                { className: classes.root, elevation: 4 },\n                _react2.default.createElement(\n                    _Typography2.default,\n                    { type: 'title', className: classes.title },\n                    'Profile'\n                ),\n                _react2.default.createElement(\n                    _List2.default,\n                    { dense: true },\n                    _react2.default.createElement(\n                        _List.ListItem,\n                        null,\n                        _react2.default.createElement(\n                            _List.ListItemAvatar,\n                            null,\n                            _react2.default.createElement(\n                                _Avatar2.default,\n                                null,\n                                _react2.default.createElement(_Person2.default, null)\n                            )\n                        ),\n                        _react2.default.createElement(_List.ListItemText, { primary: this.state.user.name, secondary: this.state.user.email }),\n                        ' ',\n                        _authHelper2.default.isAuthenticated().user && _authHelper2.default.isAuthenticated().user._id == this.state.user._id && _react2.default.createElement(\n                            _List.ListItemSecondaryAction,\n                            null,\n                            _react2.default.createElement(_reactRouterDom.Link, { to: \"/user/edit/\" + this.state.user._id }),\n                            _react2.default.createElement(_DeleteUser2.default, { userId: this.state.user._id })\n                        )\n                    ),\n                    _react2.default.createElement(_Divider2.default, null),\n                    _react2.default.createElement(\n                        _List.ListItem,\n                        null,\n                        _react2.default.createElement(_List.ListItemText, { primary: \"Joined: \" + new Date(this.state.user.created).toDateString() })\n                    )\n                )\n            );\n        }\n    }, {\n        key: '__reactstandin__regenerateByEval',\n        // @ts-ignore\n        value: function __reactstandin__regenerateByEval(key, code) {\n            // @ts-ignore\n            this[key] = eval(code);\n        }\n    }]);\n\n    return Profile;\n}(_react.Component);\n\nProfile.propTypes = {\n    classes: _propTypes2.default.object.isRequired\n};\n\nvar _default = (0, _styles.withStyles)(styles)(Profile);\n\nexports.default = _default;\n\n\nconsole.log(\"LOADED client/user/Profile.js\");\n;\n\n(function () {\n    var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(styles, 'styles', '/home/davies/Development/gamifier/client/user/Profile.js');\n    reactHotLoader.register(Profile, 'Profile', '/home/davies/Development/gamifier/client/user/Profile.js');\n    reactHotLoader.register(_default, 'default', '/home/davies/Development/gamifier/client/user/Profile.js');\n})();\n\n;\n\n(function () {\n    var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n    leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/user/Profile.js?");

/***/ }),

/***/ "./client/user/Signup.js":
/*!*******************************!*\
  !*** ./client/user/Signup.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Card = __webpack_require__(/*! @material-ui/core/Card */ \"@material-ui/core/Card\");\n\nvar _Card2 = _interopRequireDefault(_Card);\n\nvar _CardActions = __webpack_require__(/*! @material-ui/core/CardActions */ \"@material-ui/core/CardActions\");\n\nvar _CardActions2 = _interopRequireDefault(_CardActions);\n\nvar _CardContent = __webpack_require__(/*! @material-ui/core/CardContent */ \"@material-ui/core/CardContent\");\n\nvar _CardContent2 = _interopRequireDefault(_CardContent);\n\nvar _Button = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nvar _TextField = __webpack_require__(/*! @material-ui/core/TextField */ \"@material-ui/core/TextField\");\n\nvar _TextField2 = _interopRequireDefault(_TextField);\n\nvar _Typography = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _Icon = __webpack_require__(/*! @material-ui/core/Icon */ \"@material-ui/core/Icon\");\n\nvar _Icon2 = _interopRequireDefault(_Icon);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nvar _apiUser = __webpack_require__(/*! ./api-user.js */ \"./client/user/api-user.js\");\n\nvar _Dialog = __webpack_require__(/*! @material-ui/core/Dialog */ \"@material-ui/core/Dialog\");\n\nvar _Dialog2 = _interopRequireDefault(_Dialog);\n\nvar _DialogActions = __webpack_require__(/*! @material-ui/core/DialogActions */ \"@material-ui/core/DialogActions\");\n\nvar _DialogActions2 = _interopRequireDefault(_DialogActions);\n\nvar _DialogContent = __webpack_require__(/*! @material-ui/core/DialogContent */ \"@material-ui/core/DialogContent\");\n\nvar _DialogContent2 = _interopRequireDefault(_DialogContent);\n\nvar _DialogContentText = __webpack_require__(/*! @material-ui/core/DialogContentText */ \"@material-ui/core/DialogContentText\");\n\nvar _DialogContentText2 = _interopRequireDefault(_DialogContentText);\n\nvar _DialogTitle = __webpack_require__(/*! @material-ui/core/DialogTitle */ \"@material-ui/core/DialogTitle\");\n\nvar _DialogTitle2 = _interopRequireDefault(_DialogTitle);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n    enterModule && enterModule(module);\n})();\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n    return a;\n};\n\nvar styles = function styles(theme) {\n    return {\n        card: {\n            maxWidth: 600,\n            margin: 'auto',\n            textAlign: 'center',\n            marginTop: theme.spacing.unit * 5,\n            paddingBottom: theme.spacing.unit * 2\n        },\n        error: {\n            verticalAlign: 'middle'\n        },\n        title: {\n            marginTop: theme.spacing.unit * 2,\n            color: theme.palette.openTitle\n        },\n        textField: {\n            marginLeft: theme.spacing.unit,\n            marginRight: theme.spacing.unit,\n            width: 300\n        },\n        submit: {\n            margin: 'auto',\n            marginBottom: theme.spacing.unit * 2\n        }\n    };\n};\n\nvar Signup = function (_Component) {\n    _inherits(Signup, _Component);\n\n    function Signup() {\n        var _ref;\n\n        var _temp, _this, _ret;\n\n        _classCallCheck(this, Signup);\n\n        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n            args[_key] = arguments[_key];\n        }\n\n        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Signup.__proto__ || Object.getPrototypeOf(Signup)).call.apply(_ref, [this].concat(args))), _this), _this.state = {\n            name: '',\n            password: '',\n            email: '',\n            open: false,\n            error: ''\n        }, _this.handleChange = function (name) {\n            return function (event) {\n                _this.setState(_defineProperty({}, name, event.target.value));\n            };\n        }, _this.clickSubmit = function () {\n            var user = {\n                name: _this.state.name || undefined,\n                email: _this.state.email || undefined,\n                password: _this.state.password || undefined\n            };\n            (0, _apiUser.create)(user).then(function (data) {\n                if (data.error) {\n                    _this.setState({ error: data.error });\n                } else {\n                    _this.setState({ error: '', open: true });\n                }\n            });\n        }, _temp), _possibleConstructorReturn(_this, _ret);\n    }\n\n    _createClass(Signup, [{\n        key: 'render',\n        value: function render() {\n            var classes = this.props.classes;\n\n            return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(\n                    _Card2.default,\n                    { className: classes.card },\n                    _react2.default.createElement(\n                        _CardContent2.default,\n                        null,\n                        _react2.default.createElement(\n                            _Typography2.default,\n                            { type: 'headline', component: 'h2', className: classes.title },\n                            'Sign Up'\n                        ),\n                        _react2.default.createElement(_TextField2.default, { id: 'name', label: 'Name', className: classes.textField, value: this.state.name, onChange: this.handleChange('name'), margin: 'normal' }),\n                        _react2.default.createElement('br', null),\n                        _react2.default.createElement(_TextField2.default, { id: 'email', type: 'email', label: 'Email', className: classes.textField, value: this.state.email, onChange: this.handleChange('email'), margin: 'normal' }),\n                        _react2.default.createElement('br', null),\n                        _react2.default.createElement(_TextField2.default, { id: 'password', type: 'password', label: 'Password', className: classes.textField, value: this.state.password, onChange: this.handleChange('password'), margin: 'normal' }),\n                        _react2.default.createElement('br', null),\n                        ' ',\n                        this.state.error && _react2.default.createElement(\n                            _Typography2.default,\n                            { component: 'p', color: 'error' },\n                            _react2.default.createElement(\n                                _Icon2.default,\n                                { color: 'error', className: classes.error },\n                                'error'\n                            ),\n                            this.state.error\n                        )\n                    ),\n                    _react2.default.createElement(\n                        _CardActions2.default,\n                        null,\n                        _react2.default.createElement(\n                            _Button2.default,\n                            { color: 'primary', variant: 'raised', onClick: this.clickSubmit, className: classes.submit },\n                            'Submit'\n                        )\n                    )\n                ),\n                _react2.default.createElement(\n                    _Dialog2.default,\n                    { open: this.state.open, disableBackdropClick: true },\n                    _react2.default.createElement(\n                        _DialogTitle2.default,\n                        null,\n                        'New Account'\n                    ),\n                    _react2.default.createElement(\n                        _DialogContent2.default,\n                        null,\n                        _react2.default.createElement(\n                            _DialogContentText2.default,\n                            null,\n                            'New account successfully created.'\n                        )\n                    ),\n                    _react2.default.createElement(\n                        _DialogActions2.default,\n                        null,\n                        _react2.default.createElement(\n                            _reactRouterDom.Link,\n                            { to: '/signin' },\n                            _react2.default.createElement(\n                                _Button2.default,\n                                { color: 'primary', autoFocus: 'autoFocus', variant: 'raised' },\n                                'Sign In'\n                            )\n                        )\n                    )\n                )\n            );\n        }\n    }, {\n        key: '__reactstandin__regenerateByEval',\n        // @ts-ignore\n        value: function __reactstandin__regenerateByEval(key, code) {\n            // @ts-ignore\n            this[key] = eval(code);\n        }\n    }]);\n\n    return Signup;\n}(_react.Component);\n\nSignup.propTypes = {\n    classes: _propTypes2.default.object.isRequired\n};\n\nvar _default = (0, _styles.withStyles)(styles)(Signup);\n\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(styles, 'styles', '/home/davies/Development/gamifier/client/user/Signup.js');\n    reactHotLoader.register(Signup, 'Signup', '/home/davies/Development/gamifier/client/user/Signup.js');\n    reactHotLoader.register(_default, 'default', '/home/davies/Development/gamifier/client/user/Signup.js');\n})();\n\n;\n\n(function () {\n    var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n    leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/user/Signup.js?");

/***/ }),

/***/ "./client/user/Users.js":
/*!******************************!*\
  !*** ./client/user/Users.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nvar _Paper = __webpack_require__(/*! @material-ui/core/Paper */ \"@material-ui/core/Paper\");\n\nvar _Paper2 = _interopRequireDefault(_Paper);\n\nvar _List = __webpack_require__(/*! @material-ui/core/List */ \"@material-ui/core/List\");\n\nvar _List2 = _interopRequireDefault(_List);\n\nvar _ListItem = __webpack_require__(/*! @material-ui/core/ListItem */ \"@material-ui/core/ListItem\");\n\nvar _ListItem2 = _interopRequireDefault(_ListItem);\n\nvar _ListItemAvatar = __webpack_require__(/*! @material-ui/core/ListItemAvatar */ \"@material-ui/core/ListItemAvatar\");\n\nvar _ListItemAvatar2 = _interopRequireDefault(_ListItemAvatar);\n\nvar _ListItemText = __webpack_require__(/*! @material-ui/core/ListItemText */ \"@material-ui/core/ListItemText\");\n\nvar _ListItemText2 = _interopRequireDefault(_ListItemText);\n\nvar _ListItemSecondaryAction = __webpack_require__(/*! @material-ui/core/ListItemSecondaryAction */ \"@material-ui/core/ListItemSecondaryAction\");\n\nvar _ListItemSecondaryAction2 = _interopRequireDefault(_ListItemSecondaryAction);\n\nvar _Avatar = __webpack_require__(/*! @material-ui/core/Avatar */ \"@material-ui/core/Avatar\");\n\nvar _Avatar2 = _interopRequireDefault(_Avatar);\n\nvar _IconButton = __webpack_require__(/*! @material-ui/core/IconButton */ \"@material-ui/core/IconButton\");\n\nvar _IconButton2 = _interopRequireDefault(_IconButton);\n\nvar _Typography = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _ArrowForward = __webpack_require__(/*! @material-ui/icons/ArrowForward */ \"@material-ui/icons/ArrowForward\");\n\nvar _ArrowForward2 = _interopRequireDefault(_ArrowForward);\n\nvar _Person = __webpack_require__(/*! @material-ui/icons/Person */ \"@material-ui/icons/Person\");\n\nvar _Person2 = _interopRequireDefault(_Person);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _apiUser = __webpack_require__(/*! ./api-user.js */ \"./client/user/api-user.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n    enterModule && enterModule(module);\n})();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n    return a;\n};\n\nvar styles = function styles(theme) {\n    return {\n        root: theme.mixins.gutters({\n            padding: theme.spacing.unit,\n            margin: theme.spacing.unit * 5\n        }),\n        title: {\n            margin: theme.spacing.unit * 4 + 'px 0 ' + theme.spacing.unit * 2 + 'px',\n            color: theme.palette.openTitle\n        }\n    };\n};\n\nvar Users = function (_Component) {\n    _inherits(Users, _Component);\n\n    function Users(_ref) {\n        var match = _ref.match;\n\n        _classCallCheck(this, Users);\n\n        var _this = _possibleConstructorReturn(this, (Users.__proto__ || Object.getPrototypeOf(Users)).call(this));\n\n        _this.state = {\n            users: [{\n                \"id\": \"Al\",\n                \"name\": \"Albert\"\n            }]\n        };\n        return _this;\n    }\n\n    _createClass(Users, [{\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            var _this2 = this;\n\n            (0, _apiUser.list)().then(function (data) {\n                if (data.error) {\n                    console.log(data.error);\n                } else {\n                    _this2.setState({ users: data });\n                }\n            });\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var classes = this.props.classes;\n\n            return _react2.default.createElement(\n                _Paper2.default,\n                { className: classes.root, elevation: 4 },\n                _react2.default.createElement(\n                    _Typography2.default,\n                    { type: 'title', className: classes.title },\n                    'All Users'\n                ),\n                _react2.default.createElement(\n                    _List2.default,\n                    null,\n                    this.state.users.map(function (item, i) {\n                        return _react2.default.createElement(\n                            _reactRouterDom.Link,\n                            { to: \"/user/\" + item.id, key: i },\n                            _react2.default.createElement(\n                                _ListItem2.default,\n                                null,\n                                _react2.default.createElement(\n                                    _ListItemAvatar2.default,\n                                    null,\n                                    _react2.default.createElement(\n                                        _Avatar2.default,\n                                        null,\n                                        _react2.default.createElement(_Person2.default, null)\n                                    )\n                                ),\n                                _react2.default.createElement(_ListItemText2.default, { primary: item.name }),\n                                _react2.default.createElement(\n                                    _ListItemSecondaryAction2.default,\n                                    null,\n                                    _react2.default.createElement(\n                                        _IconButton2.default,\n                                        null,\n                                        _react2.default.createElement(_ArrowForward2.default, null)\n                                    )\n                                )\n                            )\n                        );\n                    })\n                )\n            );\n        }\n    }, {\n        key: '__reactstandin__regenerateByEval',\n        // @ts-ignore\n        value: function __reactstandin__regenerateByEval(key, code) {\n            // @ts-ignore\n            this[key] = eval(code);\n        }\n    }]);\n\n    return Users;\n}(_react.Component);\n\nUsers.propTypes = {\n    classes: _propTypes2.default.object.isRequired\n};\n\nvar _default = (0, _styles.withStyles)(styles)(Users);\n\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(styles, 'styles', '/home/davies/Development/gamifier/client/user/Users.js');\n    reactHotLoader.register(Users, 'Users', '/home/davies/Development/gamifier/client/user/Users.js');\n    reactHotLoader.register(_default, 'default', '/home/davies/Development/gamifier/client/user/Users.js');\n})();\n\n;\n\n(function () {\n    var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n    leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/user/Users.js?");

/***/ }),

/***/ "./client/user/api-user.js":
/*!*********************************!*\
  !*** ./client/user/api-user.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\n(function () {\n    var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n    enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n    return a;\n};\n\nvar create = function create(user) {\n    return fetch('/api/users/', {\n        method: 'POST',\n        headers: {\n            'Accept': 'application/json',\n            'Content-Type': 'application/json'\n        },\n        body: JSON.stringify(user)\n    }).then(function (response) {\n        return response.json();\n    }).catch(function (err) {\n        return console.log(err);\n    });\n};\n\nvar list = function list() {\n    return fetch('/api/users/', {\n        method: 'GET'\n    }).then(function (response) {\n        return response.json();\n    }).catch(function (err) {\n        return console.log(err);\n    });\n};\n\nvar read = function read(params, credentials) {\n    return fetch('/api/users/' + params.userId, {\n        method: 'GET',\n        headers: {\n            'Accept': 'application/json',\n            'Content-Type': 'application/json',\n            'Authorization': 'Bearer ' + credentials.t\n        }\n    }).then(function (response) {\n        return response.json();\n    }).catch(function (err) {\n        return console.log(err);\n    });\n};\n\nvar update = function update(params, credentials, user) {\n    return fetch('/api/users/' + params.userId, {\n        method: 'PUT',\n        headers: {\n            'Accept': 'application/json',\n            'Content-Type': 'application/json',\n            'Authorization': 'Bearer ' + credentials.t\n        },\n        body: JSON.stringify(user)\n    }).then(function (response) {\n        return response.json();\n    }).catch(function (err) {\n        console.log(err);\n    });\n};\n\nvar remove = function remove(params, credentials) {\n    return fetch('/api/users/' + params.userId, {\n        method: 'DELETE',\n        headers: {\n            'Accept': 'application/json',\n            'Content-Type': 'application/json',\n            'Authorization': 'Bearer ' + credentials.t\n        }\n    }).then(function (response) {\n        return response.json();\n    }).catch(function (err) {\n        console.log(err);\n    });\n};\n\nexports.create = create;\nexports.list = list;\nexports.read = read;\nexports.update = update;\nexports.remove = remove;\n;\n\n(function () {\n    var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(create, 'create', '/home/davies/Development/gamifier/client/user/api-user.js');\n    reactHotLoader.register(list, 'list', '/home/davies/Development/gamifier/client/user/api-user.js');\n    reactHotLoader.register(read, 'read', '/home/davies/Development/gamifier/client/user/api-user.js');\n    reactHotLoader.register(update, 'update', '/home/davies/Development/gamifier/client/user/api-user.js');\n    reactHotLoader.register(remove, 'remove', '/home/davies/Development/gamifier/client/user/api-user.js');\n})();\n\n;\n\n(function () {\n    var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n    leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/user/api-user.js?");

/***/ }),

/***/ "./client/user/instructor/Course.js":
/*!******************************************!*\
  !*** ./client/user/instructor/Course.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _SvgIcon = __webpack_require__(/*! @material-ui/core/SvgIcon/SvgIcon */ \"@material-ui/core/SvgIcon/SvgIcon\");\n\nvar _SvgIcon2 = _interopRequireDefault(_SvgIcon);\n\nvar _Typography = __webpack_require__(/*! @material-ui/core/Typography/Typography */ \"@material-ui/core/Typography/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _Divider = __webpack_require__(/*! @material-ui/core/Divider */ \"@material-ui/core/Divider\");\n\nvar _Divider2 = _interopRequireDefault(_Divider);\n\nvar _ListItem = __webpack_require__(/*! @material-ui/core/ListItem */ \"@material-ui/core/ListItem\");\n\nvar _ListItem2 = _interopRequireDefault(_ListItem);\n\nvar _Lessons = __webpack_require__(/*! ./Lessons */ \"./client/user/instructor/Lessons.js\");\n\nvar _Lessons2 = _interopRequireDefault(_Lessons);\n\nvar _Collapse = __webpack_require__(/*! @material-ui/core/Collapse */ \"@material-ui/core/Collapse\");\n\nvar _Collapse2 = _interopRequireDefault(_Collapse);\n\nvar _ExpandLess = __webpack_require__(/*! @material-ui/icons/ExpandLess */ \"@material-ui/icons/ExpandLess\");\n\nvar _ExpandLess2 = _interopRequireDefault(_ExpandLess);\n\nvar _ExpandMore = __webpack_require__(/*! @material-ui/icons/ExpandMore */ \"@material-ui/icons/ExpandMore\");\n\nvar _ExpandMore2 = _interopRequireDefault(_ExpandMore);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n    enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n    return a;\n};\n\nvar Course = function Course(props) {\n    return _react2.default.createElement(\n        \"div\",\n        null,\n        _react2.default.createElement(\n            _ListItem2.default,\n            { button: true, onClick: props.handleClick },\n            _react2.default.createElement(\n                _Typography2.default,\n                null,\n                props.courseName\n            ),\n            _react2.default.createElement(_Divider2.default, null),\n            open ? _react2.default.createElement(_ExpandLess2.default, null) : _react2.default.createElement(_ExpandMore2.default, null)\n        ),\n        _react2.default.createElement(\n            _Collapse2.default,\n            { \"in\": props.open, timeout: \"auto\", unmountOnExit: true },\n            _react2.default.createElement(_Lessons2.default, { lessons: props.lessons, classes: props.classes, key: props.courseName })\n        )\n    );\n};\n\nvar _default = Course;\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(Course, \"Course\", \"/home/davies/Development/gamifier/client/user/instructor/Course.js\");\n    reactHotLoader.register(_default, \"default\", \"/home/davies/Development/gamifier/client/user/instructor/Course.js\");\n})();\n\n;\n\n(function () {\n    var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n    leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/user/instructor/Course.js?");

/***/ }),

/***/ "./client/user/instructor/Courses.js":
/*!*******************************************!*\
  !*** ./client/user/instructor/Courses.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Typography = __webpack_require__(/*! @material-ui/core/Typography/Typography */ \"@material-ui/core/Typography/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _Course = __webpack_require__(/*! ./Course.js */ \"./client/user/instructor/Course.js\");\n\nvar _Course2 = _interopRequireDefault(_Course);\n\nvar _List = __webpack_require__(/*! @material-ui/core/List */ \"@material-ui/core/List\");\n\nvar _List2 = _interopRequireDefault(_List);\n\nvar _ListSubheader = __webpack_require__(/*! @material-ui/core/ListSubheader */ \"@material-ui/core/ListSubheader\");\n\nvar _ListSubheader2 = _interopRequireDefault(_ListSubheader);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n    enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n    return a;\n};\n\nvar Courses = function Courses(props) {\n    var _React$useState = _react2.default.useState(false),\n        _React$useState2 = _slicedToArray(_React$useState, 2),\n        open = _React$useState2[0],\n        setOpen = _React$useState2[1];\n\n    var handleClick = function handleClick() {\n        setOpen(!open);\n    };\n\n    return _react2.default.createElement(\n        _List2.default,\n        {\n            component: 'nav',\n            'aria-labelledby': 'nested-list-subheader',\n            subheader: _react2.default.createElement(\n                _ListSubheader2.default,\n                { component: 'div', id: 'courses' },\n                'Select a course'\n            ) },\n        props.courses.map(function (course, i) {\n            return _react2.default.createElement(_Course2.default, { handleClick: handleClick, setOpen: setOpen, open: open, courseName: course.course.name, lessons: course.lessons, key: i, classes: props.classes });\n        })\n    );\n};\n\n__signature__(Courses, 'useState{[open, setOpen](false)}');\n\nvar _default = Courses;\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(Courses, 'Courses', '/home/davies/Development/gamifier/client/user/instructor/Courses.js');\n    reactHotLoader.register(_default, 'default', '/home/davies/Development/gamifier/client/user/instructor/Courses.js');\n})();\n\n;\n\n(function () {\n    var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n    leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/user/instructor/Courses.js?");

/***/ }),

/***/ "./client/user/instructor/Dashboard.js":
/*!*********************************************!*\
  !*** ./client/user/instructor/Dashboard.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _CssBaseline = __webpack_require__(/*! @material-ui/core/CssBaseline */ \"@material-ui/core/CssBaseline\");\n\nvar _CssBaseline2 = _interopRequireDefault(_CssBaseline);\n\nvar _Container = __webpack_require__(/*! @material-ui/core/Container */ \"@material-ui/core/Container\");\n\nvar _Container2 = _interopRequireDefault(_Container);\n\nvar _authHelper = __webpack_require__(/*! ./../../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n\nvar _authHelper2 = _interopRequireDefault(_authHelper);\n\nvar _Courses = __webpack_require__(/*! ./Courses */ \"./client/user/instructor/Courses.js\");\n\nvar _Courses2 = _interopRequireDefault(_Courses);\n\nvar _Box = __webpack_require__(/*! @material-ui/core/Box/Box */ \"@material-ui/core/Box/Box\");\n\nvar _Box2 = _interopRequireDefault(_Box);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n    enterModule && enterModule(module);\n})();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n    return a;\n};\n\nvar Dashboard = function (_Component) {\n    _inherits(Dashboard, _Component);\n\n    function Dashboard(props) {\n        _classCallCheck(this, Dashboard);\n\n        var _this = _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).call(this));\n\n        _this.componentDidMount = function () {\n            var jwt = _authHelper2.default.isAuthenticated();\n\n            if (jwt === false) {\n                console.log('Not logged in as an instructor');\n            } else {\n\n                console.log(jwt);\n                fetch('/api/instructor/' + jwt.instructor._id, {\n                    method: 'GET',\n                    headers: {\n                        'Accept': 'application/json',\n                        'Content-Type': 'application/json',\n                        'Authorization': 'Bearer ' + jwt.token\n                    }\n                }).then(function (response) {\n                    return response.json();\n                }).then(function (data) {\n                    console.log(data);\n                    _this.setState({ instructor: data });\n                    _this.loadCourses(jwt.instructor._id);\n                }).catch(function (err) {\n                    return console.log(err);\n                });\n            }\n        };\n\n        _this.state = {\n            'instructor': null,\n            'mycourses': []\n        };\n        return _this;\n    }\n\n    _createClass(Dashboard, [{\n        key: 'loadCourses',\n        value: function loadCourses(instructor_id) {\n            var _this2 = this;\n\n            fetch('/api/courses/' + instructor_id, {\n                method: 'GET',\n                headers: {\n                    'Accept': 'application/json',\n                    'Content-Type': 'application/json'\n                }\n            }).then(function (response) {\n                return response.json();\n            }).then(function (data) {\n                console.log(data);\n                _this2.setState({ mycourses: data.courses });\n            }).catch(function (err) {\n                return console.log(err);\n            });\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n\n            // http://localhost:3000/instructor/dashboard/5f98eac6cab9c9c4fa4d807b\n\n            return _react2.default.createElement(\n                _react2.default.Fragment,\n                null,\n                _react2.default.createElement(_CssBaseline2.default, null),\n                _react2.default.createElement(\n                    _Container2.default,\n                    { fixed: true },\n                    _react2.default.createElement(\n                        _Box2.default,\n                        null,\n                        _react2.default.createElement(_Courses2.default, { classes: this.props.classes, courses: this.state.mycourses })\n                    )\n                )\n            );\n        }\n    }, {\n        key: '__reactstandin__regenerateByEval',\n        // @ts-ignore\n        value: function __reactstandin__regenerateByEval(key, code) {\n            // @ts-ignore\n            this[key] = eval(code);\n        }\n    }]);\n\n    return Dashboard;\n}(_react.Component);\n\nvar _default = Dashboard;\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(Dashboard, 'Dashboard', '/home/davies/Development/gamifier/client/user/instructor/Dashboard.js');\n    reactHotLoader.register(_default, 'default', '/home/davies/Development/gamifier/client/user/instructor/Dashboard.js');\n})();\n\n;\n\n(function () {\n    var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n    leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/user/instructor/Dashboard.js?");

/***/ }),

/***/ "./client/user/instructor/Lesson.js":
/*!******************************************!*\
  !*** ./client/user/instructor/Lesson.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Typography = __webpack_require__(/*! @material-ui/core/Typography/Typography */ \"@material-ui/core/Typography/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _Divider = __webpack_require__(/*! @material-ui/core/Divider */ \"@material-ui/core/Divider\");\n\nvar _Divider2 = _interopRequireDefault(_Divider);\n\nvar _reactHtmlParser = __webpack_require__(/*! react-html-parser */ \"react-html-parser\");\n\nvar _reactHtmlParser2 = _interopRequireDefault(_reactHtmlParser);\n\nvar _CssBaseline = __webpack_require__(/*! @material-ui/core/CssBaseline/CssBaseline */ \"@material-ui/core/CssBaseline/CssBaseline\");\n\nvar _CssBaseline2 = _interopRequireDefault(_CssBaseline);\n\nvar _Container = __webpack_require__(/*! @material-ui/core/Container/Container */ \"@material-ui/core/Container/Container\");\n\nvar _Container2 = _interopRequireDefault(_Container);\n\nvar _Box = __webpack_require__(/*! @material-ui/core/Box/Box */ \"@material-ui/core/Box/Box\");\n\nvar _Box2 = _interopRequireDefault(_Box);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n    enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n    return a;\n};\n\nvar Lesson = function Lesson(props) {\n\n    console.log(\"Lesson\");\n    console.log(props);\n\n    return _react2.default.createElement(\n        _react2.default.Fragment,\n        null,\n        _react2.default.createElement(_CssBaseline2.default, null),\n        _react2.default.createElement(\n            _Container2.default,\n            { fixed: true },\n            _react2.default.createElement(\n                _Box2.default,\n                { className: props.classes },\n                props.location.state.lesson.lesson.title,\n                (0, _reactHtmlParser2.default)(props.location.state.lesson.lesson.content)\n            )\n        )\n    );\n};\n\nvar _default = Lesson;\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(Lesson, \"Lesson\", \"/home/davies/Development/gamifier/client/user/instructor/Lesson.js\");\n    reactHotLoader.register(_default, \"default\", \"/home/davies/Development/gamifier/client/user/instructor/Lesson.js\");\n})();\n\n;\n\n(function () {\n    var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n    leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/user/instructor/Lesson.js?");

/***/ }),

/***/ "./client/user/instructor/Lessons.js":
/*!*******************************************!*\
  !*** ./client/user/instructor/Lessons.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Divider = __webpack_require__(/*! @material-ui/core/Divider */ \"@material-ui/core/Divider\");\n\nvar _Divider2 = _interopRequireDefault(_Divider);\n\nvar _Lesson = __webpack_require__(/*! ./Lesson */ \"./client/user/instructor/Lesson.js\");\n\nvar _Lesson2 = _interopRequireDefault(_Lesson);\n\nvar _ListSubheader = __webpack_require__(/*! @material-ui/core/ListSubheader/ListSubheader */ \"@material-ui/core/ListSubheader/ListSubheader\");\n\nvar _ListSubheader2 = _interopRequireDefault(_ListSubheader);\n\nvar _List = __webpack_require__(/*! @material-ui/core/List/List */ \"@material-ui/core/List/List\");\n\nvar _List2 = _interopRequireDefault(_List);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _ListItem = __webpack_require__(/*! @material-ui/core/ListItem/ListItem */ \"@material-ui/core/ListItem/ListItem\");\n\nvar _ListItem2 = _interopRequireDefault(_ListItem);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n    enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n    return a;\n};\n\nvar Lessons = function Lessons(props) {\n\n    return _react2.default.createElement(\n        _List2.default,\n        { component: \"div\", disablePadding: true, subheader: _react2.default.createElement(\n                _ListSubheader2.default,\n                { component: \"div\", id: \"lessons\" },\n                \"Select a lesson\"\n            ),\n            className: props.classes.root },\n        props.lessons.map(function (lesson, i) {\n            return _react2.default.createElement(\n                _ListItem2.default,\n                { key: i },\n                _react2.default.createElement(\n                    _reactRouterDom.Link,\n                    { to: {\n                            pathname: \"/instructor/lessons/:\" + lesson.id,\n                            state: {\n                                lesson: { lesson: lesson }\n                            }\n                        }, classes: props.classes },\n                    lesson.title\n                )\n            );\n        }),\n        _react2.default.createElement(_Divider2.default, null)\n    );\n};\n\nvar _default = Lessons;\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(Lessons, \"Lessons\", \"/home/davies/Development/gamifier/client/user/instructor/Lessons.js\");\n    reactHotLoader.register(_default, \"default\", \"/home/davies/Development/gamifier/client/user/instructor/Lessons.js\");\n})();\n\n;\n\n(function () {\n    var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n    leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/user/instructor/Lessons.js?");

/***/ }),

/***/ "./client/user/instructor/Menu.js":
/*!****************************************!*\
  !*** ./client/user/instructor/Menu.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _AppBar = __webpack_require__(/*! @material-ui/core/AppBar */ \"@material-ui/core/AppBar\");\n\nvar _AppBar2 = _interopRequireDefault(_AppBar);\n\nvar _Toolbar = __webpack_require__(/*! @material-ui/core/Toolbar */ \"@material-ui/core/Toolbar\");\n\nvar _Toolbar2 = _interopRequireDefault(_Toolbar);\n\nvar _Typography = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _IconButton = __webpack_require__(/*! @material-ui/core/IconButton */ \"@material-ui/core/IconButton\");\n\nvar _IconButton2 = _interopRequireDefault(_IconButton);\n\nvar _Home = __webpack_require__(/*! @material-ui/icons/Home */ \"@material-ui/icons/Home\");\n\nvar _Home2 = _interopRequireDefault(_Home);\n\nvar _Button = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nvar _authHelper = __webpack_require__(/*! ../../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n\nvar _authHelper2 = _interopRequireDefault(_authHelper);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n    enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n    return a;\n};\n\nvar isActive = function isActive(history, path) {\n    if (history.location.pathname == path) return { color: '#ff4081' };else return { color: '#ffffff' };\n};\n\nvar Menu = (0, _reactRouterDom.withRouter)(function (_ref) {\n    var history = _ref.history;\n    return (\n        // auth.isAuthenticated()\n        _react2.default.createElement(\n            _AppBar2.default,\n            { position: 'sticky' },\n            _react2.default.createElement(\n                _Toolbar2.default,\n                null,\n                _react2.default.createElement(\n                    _reactRouterDom.Link,\n                    { to: '/' },\n                    _react2.default.createElement(\n                        _IconButton2.default,\n                        { 'aria-label': 'Home', style: isActive(history, \"/\") },\n                        _react2.default.createElement(_Home2.default, null)\n                    )\n                ),\n                _react2.default.createElement(\n                    _reactRouterDom.Link,\n                    { to: '/courses' },\n                    _react2.default.createElement(\n                        _Button2.default,\n                        { style: isActive(history, \"/courses\") },\n                        'Courses'\n                    )\n                )\n            )\n        )\n    );\n});\n\nvar _default = Menu;\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(isActive, 'isActive', '/home/davies/Development/gamifier/client/user/instructor/Menu.js');\n    reactHotLoader.register(Menu, 'Menu', '/home/davies/Development/gamifier/client/user/instructor/Menu.js');\n    reactHotLoader.register(_default, 'default', '/home/davies/Development/gamifier/client/user/instructor/Menu.js');\n})();\n\n;\n\n(function () {\n    var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n    leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/user/instructor/Menu.js?");

/***/ }),

/***/ "./client/user/instructor/Signup.js":
/*!******************************************!*\
  !*** ./client/user/instructor/Signup.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Card = __webpack_require__(/*! @material-ui/core/Card */ \"@material-ui/core/Card\");\n\nvar _Card2 = _interopRequireDefault(_Card);\n\nvar _CardActions = __webpack_require__(/*! @material-ui/core/CardActions */ \"@material-ui/core/CardActions\");\n\nvar _CardActions2 = _interopRequireDefault(_CardActions);\n\nvar _CardContent = __webpack_require__(/*! @material-ui/core/CardContent */ \"@material-ui/core/CardContent\");\n\nvar _CardContent2 = _interopRequireDefault(_CardContent);\n\nvar _Button = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nvar _TextField = __webpack_require__(/*! @material-ui/core/TextField */ \"@material-ui/core/TextField\");\n\nvar _TextField2 = _interopRequireDefault(_TextField);\n\nvar _Typography = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _Icon = __webpack_require__(/*! @material-ui/core/Icon */ \"@material-ui/core/Icon\");\n\nvar _Icon2 = _interopRequireDefault(_Icon);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _apiUser = __webpack_require__(/*! ./../instructor/api-user.js */ \"./client/user/instructor/api-user.js\");\n\nvar _Dialog = __webpack_require__(/*! @material-ui/core/Dialog */ \"@material-ui/core/Dialog\");\n\nvar _Dialog2 = _interopRequireDefault(_Dialog);\n\nvar _DialogActions = __webpack_require__(/*! @material-ui/core/DialogActions */ \"@material-ui/core/DialogActions\");\n\nvar _DialogActions2 = _interopRequireDefault(_DialogActions);\n\nvar _DialogContent = __webpack_require__(/*! @material-ui/core/DialogContent */ \"@material-ui/core/DialogContent\");\n\nvar _DialogContent2 = _interopRequireDefault(_DialogContent);\n\nvar _DialogContentText = __webpack_require__(/*! @material-ui/core/DialogContentText */ \"@material-ui/core/DialogContentText\");\n\nvar _DialogContentText2 = _interopRequireDefault(_DialogContentText);\n\nvar _DialogTitle = __webpack_require__(/*! @material-ui/core/DialogTitle */ \"@material-ui/core/DialogTitle\");\n\nvar _DialogTitle2 = _interopRequireDefault(_DialogTitle);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _CssBaseline = __webpack_require__(/*! @material-ui/core/CssBaseline/CssBaseline */ \"@material-ui/core/CssBaseline/CssBaseline\");\n\nvar _CssBaseline2 = _interopRequireDefault(_CssBaseline);\n\nvar _Container = __webpack_require__(/*! @material-ui/core/Container */ \"@material-ui/core/Container\");\n\nvar _Container2 = _interopRequireDefault(_Container);\n\nvar _Box = __webpack_require__(/*! @material-ui/core/Box */ \"@material-ui/core/Box\");\n\nvar _Box2 = _interopRequireDefault(_Box);\n\nvar _SignupForm = __webpack_require__(/*! ../../user/instructor/SignupForm */ \"./client/user/instructor/SignupForm.js\");\n\nvar _SignupForm2 = _interopRequireDefault(_SignupForm);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n    enterModule && enterModule(module);\n})();\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n    return a;\n};\n\nvar Signup = function (_Component) {\n    _inherits(Signup, _Component);\n\n    function Signup(props) {\n        _classCallCheck(this, Signup);\n\n        var _this = _possibleConstructorReturn(this, (Signup.__proto__ || Object.getPrototypeOf(Signup)).call(this));\n\n        _this.handleChange = function (name) {\n            return function (event) {\n                _this.setState(_defineProperty({}, name, event.target.value));\n            };\n        };\n\n        _this.clickSubmit = function () {\n\n            var user = {\n                name: _this.state.name || undefined,\n                email: _this.state.email || undefined,\n                password: _this.state.password || undefined\n            };\n\n            return fetch('/api/instructors', {\n                method: 'POST',\n                headers: {\n                    'Accept': 'application/json',\n                    'Content-Type': 'application/json'\n                },\n                body: JSON.stringify(user)\n            }).then(function (response) {\n                return response.json();\n            }).then(function (data) {\n                console.log(data);\n                if (data.status !== 201) {\n                    alert(data.error);\n                } else {\n                    _this.setState({ open: true });\n                }\n            }).catch(function (err) {\n                console.log(err);\n            });\n        };\n\n        _this.state = {\n            name: '',\n            password: '',\n            email: '',\n            open: false,\n            error: ''\n        };\n        return _this;\n    }\n\n    _createClass(Signup, [{\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                _react2.default.Fragment,\n                null,\n                _react2.default.createElement(_CssBaseline2.default, null),\n                _react2.default.createElement(\n                    _Container2.default,\n                    { fixed: true },\n                    _react2.default.createElement(\n                        _Box2.default,\n                        null,\n                        _react2.default.createElement(_SignupForm2.default, { open_dialog: this.state.open, error: this.state.error, clickSubmit: this.clickSubmit, user_name: this.state.name, email: this.state.email, handleChange: this.handleChange, password: this.state.password })\n                    )\n                )\n            );\n        }\n    }, {\n        key: '__reactstandin__regenerateByEval',\n        // @ts-ignore\n        value: function __reactstandin__regenerateByEval(key, code) {\n            // @ts-ignore\n            this[key] = eval(code);\n        }\n    }]);\n\n    return Signup;\n}(_react.Component);\n\nvar _default = Signup;\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(Signup, 'Signup', '/home/davies/Development/gamifier/client/user/instructor/Signup.js');\n    reactHotLoader.register(_default, 'default', '/home/davies/Development/gamifier/client/user/instructor/Signup.js');\n})();\n\n;\n\n(function () {\n    var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n    leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/user/instructor/Signup.js?");

/***/ }),

/***/ "./client/user/instructor/SignupForm.js":
/*!**********************************************!*\
  !*** ./client/user/instructor/SignupForm.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Typography = __webpack_require__(/*! @material-ui/core/Typography/Typography */ \"@material-ui/core/Typography/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _Card = __webpack_require__(/*! @material-ui/core/Card */ \"@material-ui/core/Card\");\n\nvar _Card2 = _interopRequireDefault(_Card);\n\nvar _CardActions = __webpack_require__(/*! @material-ui/core/CardActions */ \"@material-ui/core/CardActions\");\n\nvar _CardActions2 = _interopRequireDefault(_CardActions);\n\nvar _CardContent = __webpack_require__(/*! @material-ui/core/CardContent */ \"@material-ui/core/CardContent\");\n\nvar _CardContent2 = _interopRequireDefault(_CardContent);\n\nvar _Button = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nvar _TextField = __webpack_require__(/*! @material-ui/core/TextField */ \"@material-ui/core/TextField\");\n\nvar _TextField2 = _interopRequireDefault(_TextField);\n\nvar _Icon = __webpack_require__(/*! @material-ui/core/Icon */ \"@material-ui/core/Icon\");\n\nvar _Icon2 = _interopRequireDefault(_Icon);\n\nvar _DialogTitle = __webpack_require__(/*! @material-ui/core/DialogTitle/DialogTitle */ \"@material-ui/core/DialogTitle/DialogTitle\");\n\nvar _DialogTitle2 = _interopRequireDefault(_DialogTitle);\n\nvar _DialogContent = __webpack_require__(/*! @material-ui/core/DialogContent/DialogContent */ \"@material-ui/core/DialogContent/DialogContent\");\n\nvar _DialogContent2 = _interopRequireDefault(_DialogContent);\n\nvar _DialogContentText = __webpack_require__(/*! @material-ui/core/DialogContentText */ \"@material-ui/core/DialogContentText\");\n\nvar _DialogContentText2 = _interopRequireDefault(_DialogContentText);\n\nvar _DialogActions = __webpack_require__(/*! @material-ui/core/DialogActions/DialogActions */ \"@material-ui/core/DialogActions/DialogActions\");\n\nvar _DialogActions2 = _interopRequireDefault(_DialogActions);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _Dialog = __webpack_require__(/*! @material-ui/core/Dialog/Dialog */ \"@material-ui/core/Dialog/Dialog\");\n\nvar _Dialog2 = _interopRequireDefault(_Dialog);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n    enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n    return a;\n};\n\nvar SignupForm = function SignupForm(props) {\n\n    return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n            _Card2.default,\n            null,\n            _react2.default.createElement(\n                _CardContent2.default,\n                null,\n                _react2.default.createElement(\n                    _Typography2.default,\n                    { type: 'headline', component: 'h2' },\n                    'Instructor Sign Up'\n                ),\n                _react2.default.createElement(_TextField2.default, { id: 'name', label: 'Name', value: props.user_name, onChange: undefined.handleChange('name'), margin: 'normal' }),\n                _react2.default.createElement('br', null),\n                _react2.default.createElement(_TextField2.default, { id: 'email', type: 'email', label: 'Email', value: props.email, onChange: undefined.handleChange('email'), margin: 'normal' }),\n                _react2.default.createElement('br', null),\n                _react2.default.createElement(_TextField2.default, { id: 'password', type: 'password', label: 'Password', value: props.password, onChange: undefined.handleChange('password'), margin: 'normal' }),\n                _react2.default.createElement('br', null),\n                ' ',\n                props.error && _react2.default.createElement(\n                    _Typography2.default,\n                    { component: 'p', color: 'error' },\n                    _react2.default.createElement(\n                        _Icon2.default,\n                        { color: 'error' },\n                        'error'\n                    ),\n                    props.error\n                )\n            ),\n            _react2.default.createElement(\n                _CardActions2.default,\n                null,\n                _react2.default.createElement(\n                    _Button2.default,\n                    { color: 'primary', variant: 'outlined', onClick: props.clickSubmit },\n                    'Submit'\n                )\n            )\n        ),\n        _react2.default.createElement(\n            _Dialog2.default,\n            { open: props.open_dialog, disableBackdropClick: true },\n            _react2.default.createElement(\n                _DialogTitle2.default,\n                null,\n                'New Account'\n            ),\n            _react2.default.createElement(\n                _DialogContent2.default,\n                null,\n                _react2.default.createElement(\n                    _DialogContentText2.default,\n                    null,\n                    'New account successfully created.'\n                )\n            ),\n            _react2.default.createElement(\n                _DialogActions2.default,\n                null,\n                _react2.default.createElement(\n                    _reactRouterDom.Link,\n                    { to: '/instructor/signin' },\n                    _react2.default.createElement(\n                        _Button2.default,\n                        { color: 'primary', autoFocus: 'autoFocus', variant: 'outlined' },\n                        'Sign In'\n                    )\n                )\n            )\n        )\n    );\n};\n\nvar _default = SignupForm;\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(SignupForm, 'SignupForm', '/home/davies/Development/gamifier/client/user/instructor/SignupForm.js');\n    reactHotLoader.register(_default, 'default', '/home/davies/Development/gamifier/client/user/instructor/SignupForm.js');\n})();\n\n;\n\n(function () {\n    var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n    leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/user/instructor/SignupForm.js?");

/***/ }),

/***/ "./client/user/instructor/api-user.js":
/*!********************************************!*\
  !*** ./client/user/instructor/api-user.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\n(function () {\n    var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n    enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n    return a;\n};\n\n// Routes are defined in server/routes/instructor.routes.js\nvar create = function create(user) {\n    return fetch('/api/instructor/', {\n        method: 'POST',\n        headers: {\n            'Accept': 'application/json',\n            'Content-Type': 'application/json'\n        },\n        body: JSON.stringify(user)\n    }).then(function (response) {\n        return response.json();\n    }).catch(function (err) {\n        return console.log(err);\n    });\n};\n\nvar list = function list() {\n    return fetch('/api/instructor/', {\n        method: 'GET'\n    }).then(function (response) {\n        return response.json();\n    }).catch(function (err) {\n        return console.log(err);\n    });\n};\n\nvar read = function read(params, credentials) {\n    return fetch('/api/instructor/' + params.userId, {\n        method: 'GET',\n        headers: {\n            'Accept': 'application/json',\n            'Content-Type': 'application/json',\n            'Authorization': 'Bearer ' + credentials.t\n        }\n    }).then(function (response) {\n        return response.json();\n    }).catch(function (err) {\n        return console.log(err);\n    });\n};\n\nvar update = function update(params, credentials, user) {\n    return fetch('/api/instructor/' + params.userId, {\n        method: 'PUT',\n        headers: {\n            'Accept': 'application/json',\n            'Content-Type': 'application/json',\n            'Authorization': 'Bearer ' + credentials.t\n        },\n        body: JSON.stringify(user)\n    }).then(function (response) {\n        return response.json();\n    }).catch(function (err) {\n        console.log(err);\n    });\n};\n\nvar remove = function remove(params, credentials) {\n    return fetch('/api/instructor/' + params.userId, {\n        method: 'DELETE',\n        headers: {\n            'Accept': 'application/json',\n            'Content-Type': 'application/json',\n            'Authorization': 'Bearer ' + credentials.t\n        }\n    }).then(function (response) {\n        return response.json();\n    }).catch(function (err) {\n        console.log(err);\n    });\n};\n\nexports.create = create;\nexports.list = list;\nexports.read = read;\nexports.update = update;\nexports.remove = remove;\n;\n\n(function () {\n    var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(create, 'create', '/home/davies/Development/gamifier/client/user/instructor/api-user.js');\n    reactHotLoader.register(list, 'list', '/home/davies/Development/gamifier/client/user/instructor/api-user.js');\n    reactHotLoader.register(read, 'read', '/home/davies/Development/gamifier/client/user/instructor/api-user.js');\n    reactHotLoader.register(update, 'update', '/home/davies/Development/gamifier/client/user/instructor/api-user.js');\n    reactHotLoader.register(remove, 'remove', '/home/davies/Development/gamifier/client/user/instructor/api-user.js');\n})();\n\n;\n\n(function () {\n    var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n    leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/user/instructor/api-user.js?");

/***/ }),

/***/ "./client/user/student/Signup.js":
/*!***************************************!*\
  !*** ./client/user/student/Signup.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Card = __webpack_require__(/*! @material-ui/core/Card */ \"@material-ui/core/Card\");\n\nvar _Card2 = _interopRequireDefault(_Card);\n\nvar _CardActions = __webpack_require__(/*! @material-ui/core/CardActions */ \"@material-ui/core/CardActions\");\n\nvar _CardActions2 = _interopRequireDefault(_CardActions);\n\nvar _CardContent = __webpack_require__(/*! @material-ui/core/CardContent */ \"@material-ui/core/CardContent\");\n\nvar _CardContent2 = _interopRequireDefault(_CardContent);\n\nvar _Button = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nvar _TextField = __webpack_require__(/*! @material-ui/core/TextField */ \"@material-ui/core/TextField\");\n\nvar _TextField2 = _interopRequireDefault(_TextField);\n\nvar _Typography = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _Icon = __webpack_require__(/*! @material-ui/core/Icon */ \"@material-ui/core/Icon\");\n\nvar _Icon2 = _interopRequireDefault(_Icon);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nvar _apiUser = __webpack_require__(/*! ./../api-user.js */ \"./client/user/api-user.js\");\n\nvar _Dialog = __webpack_require__(/*! @material-ui/core/Dialog */ \"@material-ui/core/Dialog\");\n\nvar _Dialog2 = _interopRequireDefault(_Dialog);\n\nvar _DialogActions = __webpack_require__(/*! @material-ui/core/DialogActions */ \"@material-ui/core/DialogActions\");\n\nvar _DialogActions2 = _interopRequireDefault(_DialogActions);\n\nvar _DialogContent = __webpack_require__(/*! @material-ui/core/DialogContent */ \"@material-ui/core/DialogContent\");\n\nvar _DialogContent2 = _interopRequireDefault(_DialogContent);\n\nvar _DialogContentText = __webpack_require__(/*! @material-ui/core/DialogContentText */ \"@material-ui/core/DialogContentText\");\n\nvar _DialogContentText2 = _interopRequireDefault(_DialogContentText);\n\nvar _DialogTitle = __webpack_require__(/*! @material-ui/core/DialogTitle */ \"@material-ui/core/DialogTitle\");\n\nvar _DialogTitle2 = _interopRequireDefault(_DialogTitle);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n    enterModule && enterModule(module);\n})();\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n    return a;\n};\n\nvar styles = function styles(theme) {\n    return {\n        card: {\n            maxWidth: 600,\n            margin: 'auto',\n            textAlign: 'center',\n            marginTop: theme.spacing.unit * 5,\n            paddingBottom: theme.spacing.unit * 2\n        },\n        error: {\n            verticalAlign: 'middle'\n        },\n        title: {\n            marginTop: theme.spacing.unit * 2,\n            color: theme.palette.openTitle\n        },\n        textField: {\n            marginLeft: theme.spacing.unit,\n            marginRight: theme.spacing.unit,\n            width: 300\n        },\n        submit: {\n            margin: 'auto',\n            marginBottom: theme.spacing.unit * 2\n        }\n    };\n};\n\nvar Signup = function (_Component) {\n    _inherits(Signup, _Component);\n\n    function Signup() {\n        var _ref;\n\n        var _temp, _this, _ret;\n\n        _classCallCheck(this, Signup);\n\n        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n            args[_key] = arguments[_key];\n        }\n\n        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Signup.__proto__ || Object.getPrototypeOf(Signup)).call.apply(_ref, [this].concat(args))), _this), _this.state = {\n            name: '',\n            password: '',\n            email: '',\n            open: false,\n            error: ''\n        }, _this.handleChange = function (name) {\n            return function (event) {\n                _this.setState(_defineProperty({}, name, event.target.value));\n            };\n        }, _this.clickSubmit = function () {\n            var user = {\n                name: _this.state.name || undefined,\n                email: _this.state.email || undefined,\n                password: _this.state.password || undefined\n            };\n            (0, _apiUser.create)(user).then(function (data) {\n                if (data.error) {\n                    _this.setState({ error: data.error });\n                } else {\n                    _this.setState({ error: '', open: true });\n                }\n            });\n        }, _temp), _possibleConstructorReturn(_this, _ret);\n    }\n\n    _createClass(Signup, [{\n        key: 'render',\n        value: function render() {\n            var classes = this.props.classes;\n\n            return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(\n                    _Card2.default,\n                    { className: classes.card },\n                    _react2.default.createElement(\n                        _CardContent2.default,\n                        null,\n                        _react2.default.createElement(\n                            _Typography2.default,\n                            { type: 'headline', component: 'h2', className: classes.title },\n                            'Student Sign Up'\n                        ),\n                        _react2.default.createElement(_TextField2.default, { id: 'name', label: 'Name', className: classes.textField, value: this.state.name, onChange: this.handleChange('name'), margin: 'normal' }),\n                        _react2.default.createElement('br', null),\n                        _react2.default.createElement(_TextField2.default, { id: 'email', type: 'email', label: 'Email', className: classes.textField, value: this.state.email, onChange: this.handleChange('email'), margin: 'normal' }),\n                        _react2.default.createElement('br', null),\n                        _react2.default.createElement(_TextField2.default, { id: 'password', type: 'password', label: 'Password', className: classes.textField, value: this.state.password, onChange: this.handleChange('password'), margin: 'normal' }),\n                        _react2.default.createElement('br', null),\n                        ' ',\n                        this.state.error && _react2.default.createElement(\n                            _Typography2.default,\n                            { component: 'p', color: 'error' },\n                            _react2.default.createElement(\n                                _Icon2.default,\n                                { color: 'error', className: classes.error },\n                                'error'\n                            ),\n                            this.state.error\n                        )\n                    ),\n                    _react2.default.createElement(\n                        _CardActions2.default,\n                        null,\n                        _react2.default.createElement(\n                            _Button2.default,\n                            { color: 'primary', variant: 'raised', onClick: this.clickSubmit, className: classes.submit },\n                            'Submit'\n                        )\n                    )\n                ),\n                _react2.default.createElement(\n                    _Dialog2.default,\n                    { open: this.state.open, disableBackdropClick: true },\n                    _react2.default.createElement(\n                        _DialogTitle2.default,\n                        null,\n                        'New Account'\n                    ),\n                    _react2.default.createElement(\n                        _DialogContent2.default,\n                        null,\n                        _react2.default.createElement(\n                            _DialogContentText2.default,\n                            null,\n                            'New account successfully created.'\n                        )\n                    ),\n                    _react2.default.createElement(\n                        _DialogActions2.default,\n                        null,\n                        _react2.default.createElement(\n                            _reactRouterDom.Link,\n                            { to: '/signin' },\n                            _react2.default.createElement(\n                                _Button2.default,\n                                { color: 'primary', autoFocus: 'autoFocus', variant: 'raised' },\n                                'Sign In'\n                            )\n                        )\n                    )\n                )\n            );\n        }\n    }, {\n        key: '__reactstandin__regenerateByEval',\n        // @ts-ignore\n        value: function __reactstandin__regenerateByEval(key, code) {\n            // @ts-ignore\n            this[key] = eval(code);\n        }\n    }]);\n\n    return Signup;\n}(_react.Component);\n\nSignup.propTypes = {\n    classes: _propTypes2.default.object.isRequired\n};\n\nvar _default = (0, _styles.withStyles)(styles)(Signup);\n\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(styles, 'styles', '/home/davies/Development/gamifier/client/user/student/Signup.js');\n    reactHotLoader.register(Signup, 'Signup', '/home/davies/Development/gamifier/client/user/student/Signup.js');\n    reactHotLoader.register(_default, 'default', '/home/davies/Development/gamifier/client/user/student/Signup.js');\n})();\n\n;\n\n(function () {\n    var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n    leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/user/student/Signup.js?");

/***/ }),

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\n(function () {\n    var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n    enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n    return a;\n};\n\nvar config = {\n    env: \"development\" || 'development',\n    port: process.env.PORT || 3000,\n    jwtSecret: process.env.JWT_SECRET || \"YOUR_secret_key\",\n    mongoUri: process.env.MONGODB_URI || process.env.MONGO_HOST || 'mongodb://' + (process.env.IP || 'localhost') + ':' + (process.env.MONGO_PORT || '27017') + '/mernproject'\n};\n\nvar _default = config;\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(config, 'config', '/home/davies/Development/gamifier/config/config.js');\n    reactHotLoader.register(_default, 'default', '/home/davies/Development/gamifier/config/config.js');\n})();\n\n;\n\n(function () {\n    var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n    leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./config/config.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function() {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/module.js?");

/***/ }),

/***/ "./server/controllers/auth.controller.js":
/*!***********************************************!*\
  !*** ./server/controllers/auth.controller.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _user = __webpack_require__(/*! ../models/user.model */ \"./server/models/user.model.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _expressJwt = __webpack_require__(/*! express-jwt */ \"express-jwt\");\n\nvar _expressJwt2 = _interopRequireDefault(_expressJwt);\n\nvar _config = __webpack_require__(/*! ./../../config/config */ \"./config/config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n    enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n    return a;\n};\n\nvar signin = function signin(req, res) {\n    _user2.default.findOne({\n        \"email\": req.body.email\n    }, function (err, user) {\n\n        if (err || !user) return res.status('401').json({\n            error: \"User not found\"\n        });\n\n        if (!user.authenticate(req.body.password)) {\n            return res.status('401').send({\n                error: \"Email and password don't match.\"\n            });\n        }\n\n        // @todo\n        /*\n        const token = jwt.sign({\n            _id: user._id,\n            algorithms: ['HS256'],\n        }, config.jwtSecret)\n        */\n        var token = 'hello world';\n\n        res.cookie(\"t\", token, {\n            expire: new Date() + 9999\n        });\n\n        return res.json({\n            token: token,\n            user: { _id: user._id, name: user.name, email: user.email }\n        });\n    });\n};\n\nvar signout = function signout(req, res) {\n    res.clearCookie(\"t\");\n    return res.status('200').json({\n        message: \"signed out\"\n    });\n};\n\nvar requireSignin = (0, _expressJwt2.default)({\n    secret: _config2.default.jwtSecret,\n    userProperty: 'auth',\n    algorithms: ['HS256']\n});\n\nvar hasAuthorization = function hasAuthorization(req, res, next) {\n    var authorized = req.profile && req.auth && req.profile._id === req.auth._id;\n    if (!authorized) {\n        return res.status('403').json({\n            error: \"User is not authorized\"\n        });\n    }\n    next();\n};\n\nvar _default = {\n    signin: signin,\n    signout: signout,\n    requireSignin: requireSignin,\n    hasAuthorization: hasAuthorization\n};\nexports.default = _default;\n\n\nconsole.log(\"LOADED server/controllers/auth.controller.js\");\n;\n\n(function () {\n    var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(signin, 'signin', '/home/davies/Development/gamifier/server/controllers/auth.controller.js');\n    reactHotLoader.register(signout, 'signout', '/home/davies/Development/gamifier/server/controllers/auth.controller.js');\n    reactHotLoader.register(requireSignin, 'requireSignin', '/home/davies/Development/gamifier/server/controllers/auth.controller.js');\n    reactHotLoader.register(hasAuthorization, 'hasAuthorization', '/home/davies/Development/gamifier/server/controllers/auth.controller.js');\n    reactHotLoader.register(_default, 'default', '/home/davies/Development/gamifier/server/controllers/auth.controller.js');\n})();\n\n;\n\n(function () {\n    var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n    leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/controllers/auth.controller.js?");

/***/ }),

/***/ "./server/controllers/course.controller.js":
/*!*************************************************!*\
  !*** ./server/controllers/course.controller.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nvar _course = __webpack_require__(/*! ../models/course.model */ \"./server/models/course.model.js\");\n\nvar _course2 = _interopRequireDefault(_course);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n    enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n    return a;\n};\n\nvar CourseController = function CourseController(collection) {\n\n    var course = new _course2.default(collection);\n\n    return {\n        \"list\": function list(req, res) {\n            course.list(req, res);\n        },\n        \"create\": function create(req, res) {\n            course.create(req, res);\n        },\n        \"read\": function read(req, res) {\n            course.read(req, res);\n        },\n        \"update\": function update(req, res) {\n            course.update(req, res);\n        },\n        \"delete\": function _delete(req, res) {\n            course.remove(req, res);\n        },\n        userByID: function userByID(req, res, next, id) {\n            course.userByID(req, res, next, id);\n        }\n    };\n};\n\nmodule.exports = CourseController;\n;\n\n(function () {\n    var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(CourseController, \"CourseController\", \"/home/davies/Development/gamifier/server/controllers/course.controller.js\");\n})();\n\n;\n\n(function () {\n    var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n    leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/controllers/course.controller.js?");

/***/ }),

/***/ "./server/controllers/instructor.auth.controller.js":
/*!**********************************************************!*\
  !*** ./server/controllers/instructor.auth.controller.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nvar _instructor = __webpack_require__(/*! ../models/instructor.model */ \"./server/models/instructor.model.js\");\n\nvar _instructor2 = _interopRequireDefault(_instructor);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n    enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n    return a;\n};\n\nvar InstructorAuthController = function InstructorAuthController(collection) {\n\n    var instructor = new _instructor2.default(collection);\n\n    return {\n        \"signin\": function signin(req, res) {\n            instructor.signin(req, res);\n        },\n        \"signout\": function signout(req, res) {\n            instructor.signout(req, res);\n        }\n    };\n};\n\nmodule.exports = InstructorAuthController;\n;\n\n(function () {\n    var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(InstructorAuthController, \"InstructorAuthController\", \"/home/davies/Development/gamifier/server/controllers/instructor.auth.controller.js\");\n})();\n\n;\n\n(function () {\n    var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n    leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/controllers/instructor.auth.controller.js?");

/***/ }),

/***/ "./server/controllers/instructor.controller.js":
/*!*****************************************************!*\
  !*** ./server/controllers/instructor.controller.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nvar _instructor = __webpack_require__(/*! ../models/instructor.model */ \"./server/models/instructor.model.js\");\n\nvar _instructor2 = _interopRequireDefault(_instructor);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n    enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n    return a;\n};\n\nvar InstructorController = function InstructorController(collection) {\n\n    var instructor = new _instructor2.default(collection);\n\n    return {\n        \"list\": function list(req, res) {\n            res.json([{\n                'status': 403,\n                'error': 'Only admins can view instructors'\n            }]);\n        },\n        \"create\": function create(req, res) {\n            instructor.create(req, res);\n        },\n        \"read\": function read(req, res) {\n            instructor.read(req, res);\n        },\n        \"update\": function update(req, res) {\n            instructor.update(req, res);\n        },\n        \"delete\": function _delete(req, res) {\n            instructor.remove(req, res);\n        },\n        userByID: function userByID(req, res, next, id) {\n            instructor.userByID(req, res, next, id);\n        }\n    };\n};\n\nmodule.exports = InstructorController;\n;\n\n(function () {\n    var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(InstructorController, \"InstructorController\", \"/home/davies/Development/gamifier/server/controllers/instructor.controller.js\");\n})();\n\n;\n\n(function () {\n    var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n    leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/controllers/instructor.controller.js?");

/***/ }),

/***/ "./server/controllers/student.auth.controller.js":
/*!*******************************************************!*\
  !*** ./server/controllers/student.auth.controller.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nvar _student = __webpack_require__(/*! ../models/student.model */ \"./server/models/student.model.js\");\n\nvar _student2 = _interopRequireDefault(_student);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n    enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n    return a;\n};\n\nvar StudentAuthController = function StudentAuthController(collection) {\n\n    var student = new _student2.default(collection);\n\n    return {\n        \"signin\": function signin(req, res) {\n            student.signin(req, res);\n        },\n        \"signout\": function signout(req, res) {\n            student.signout(req, res);\n        }\n    };\n};\n\nmodule.exports = StudentAuthController;\n;\n\n(function () {\n    var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(StudentAuthController, \"StudentAuthController\", \"/home/davies/Development/gamifier/server/controllers/student.auth.controller.js\");\n})();\n\n;\n\n(function () {\n    var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n    leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/controllers/student.auth.controller.js?");

/***/ }),

/***/ "./server/controllers/student.controller.js":
/*!**************************************************!*\
  !*** ./server/controllers/student.controller.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nvar _student = __webpack_require__(/*! ../models/student.model */ \"./server/models/student.model.js\");\n\nvar _student2 = _interopRequireDefault(_student);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n    enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n    return a;\n};\n\nvar StudentController = function StudentController(collection) {\n\n    var student = new _student2.default(collection);\n\n    return {\n        \"list\": function list(req, res) {\n            res.json([{\n                'status': 403,\n                'error': 'Only admins can view students'\n            }]);\n        },\n        \"create\": function create(req, res) {\n            student.create(req, res);\n        },\n        \"read\": function read(req, res) {\n            student.read(req, res);\n        },\n        \"update\": function update(req, res) {\n            student.update(req, res);\n        },\n        \"delete\": function _delete(req, res) {\n            student.remove(req, res);\n        },\n        userByID: function userByID(req, res, next, id) {\n            student.userByID(req, res, next, id);\n        }\n    };\n};\n\nmodule.exports = StudentController;\n;\n\n(function () {\n    var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(StudentController, \"StudentController\", \"/home/davies/Development/gamifier/server/controllers/student.controller.js\");\n})();\n\n;\n\n(function () {\n    var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n    leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/controllers/student.controller.js?");

/***/ }),

/***/ "./server/controllers/user.controller.js":
/*!***********************************************!*\
  !*** ./server/controllers/user.controller.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nvar _user = __webpack_require__(/*! ../models/user.model */ \"./server/models/user.model.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n    enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n    return a;\n};\n\nvar create = function create(req, res, next) {\n    // “const user = new User(req.body)”\n    res.json({});\n};\nvar list = function list(req, res) {\n    console.log(\"listing users\");\n    res.json([{\n        \"id\": \"B\",\n        \"name\": \"Bob\"\n    }]);\n};\nvar userByID = function userByID(req, res, next, id) {\n    res.json({});\n};\nvar read = function read(req, res) {\n    res.json({});\n};\nvar update = function update(req, res, next) {\n    res.json({});\n};\nvar remove = function remove(req, res, next) {\n    res.json({});\n};\n\n//export default { create, userByID, read, list, remove, update }\n\nmodule.exports = { create: create, userByID: userByID, read: read, list: list, remove: remove, update: update };\n\nconsole.log(\"LOADED server/controllers/user.controller.js\");\n;\n\n(function () {\n    var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(create, 'create', '/home/davies/Development/gamifier/server/controllers/user.controller.js');\n    reactHotLoader.register(list, 'list', '/home/davies/Development/gamifier/server/controllers/user.controller.js');\n    reactHotLoader.register(userByID, 'userByID', '/home/davies/Development/gamifier/server/controllers/user.controller.js');\n    reactHotLoader.register(read, 'read', '/home/davies/Development/gamifier/server/controllers/user.controller.js');\n    reactHotLoader.register(update, 'update', '/home/davies/Development/gamifier/server/controllers/user.controller.js');\n    reactHotLoader.register(remove, 'remove', '/home/davies/Development/gamifier/server/controllers/user.controller.js');\n})();\n\n;\n\n(function () {\n    var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n    leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/controllers/user.controller.js?");

/***/ }),

/***/ "./server/devBundle.js":
/*!*****************************!*\
  !*** ./server/devBundle.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nvar _webpack2 = _interopRequireDefault(_webpack);\n\nvar _webpackDevMiddleware = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n\nvar _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);\n\nvar _webpackHotMiddleware = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n\nvar _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);\n\nvar _webpackConfigClient = __webpack_require__(/*! ./../webpack.config.client.js */ \"./webpack.config.client.js\");\n\nvar _webpackConfigClient2 = _interopRequireDefault(_webpackConfigClient);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconsole.log(\"RENDERING server/devBundle.js\");\n\nvar compile = function compile(app) {\n  if (true) {\n    var compiler = (0, _webpack2.default)(_webpackConfigClient2.default);\n    var middleware = (0, _webpackDevMiddleware2.default)(compiler, {\n      publicPath: _webpackConfigClient2.default.output.publicPath\n    });\n    app.use(middleware);\n    app.use((0, _webpackHotMiddleware2.default)(compiler));\n  }\n};\n\nvar _default = {\n  compile: compile\n};\nexports.default = _default;\n\n\nconsole.log(\"LOADED server/devBundle.js\");\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(compile, 'compile', '/home/davies/Development/gamifier/server/devBundle.js');\n  reactHotLoader.register(_default, 'default', '/home/davies/Development/gamifier/server/devBundle.js');\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/devBundle.js?");

/***/ }),

/***/ "./server/express.js":
/*!***************************!*\
  !*** ./server/express.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _path = __webpack_require__(/*! path */ \"path\");\n\nvar _path2 = _interopRequireDefault(_path);\n\nvar _bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\nvar _bodyParser2 = _interopRequireDefault(_bodyParser);\n\nvar _cookieParser = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n\nvar _cookieParser2 = _interopRequireDefault(_cookieParser);\n\nvar _compression = __webpack_require__(/*! compression */ \"compression\");\n\nvar _compression2 = _interopRequireDefault(_compression);\n\nvar _cors = __webpack_require__(/*! cors */ \"cors\");\n\nvar _cors2 = _interopRequireDefault(_cors);\n\nvar _template = __webpack_require__(/*! ./../template */ \"./template.js\");\n\nvar _template2 = _interopRequireDefault(_template);\n\nvar _user = __webpack_require__(/*! ./routes/user.routes */ \"./server/routes/user.routes.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _auth = __webpack_require__(/*! ./routes/auth.routes */ \"./server/routes/auth.routes.js\");\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nvar _studentAuth = __webpack_require__(/*! ./routes/student.auth.routes */ \"./server/routes/student.auth.routes.js\");\n\nvar _studentAuth2 = _interopRequireDefault(_studentAuth);\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _server2 = _interopRequireDefault(_server);\n\nvar _MainRouter = __webpack_require__(/*! ./../client/MainRouter */ \"./client/MainRouter.js\");\n\nvar _MainRouter2 = _interopRequireDefault(_MainRouter);\n\nvar _jss = __webpack_require__(/*! react-jss/lib/jss */ \"react-jss/lib/jss\");\n\nvar _JssProvider = __webpack_require__(/*! react-jss/lib/JssProvider */ \"react-jss/lib/JssProvider\");\n\nvar _JssProvider2 = _interopRequireDefault(_JssProvider);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nvar _colors = __webpack_require__(/*! @material-ui/core/colors */ \"@material-ui/core/colors\");\n\nvar _devBundle = __webpack_require__(/*! ./devBundle */ \"./server/devBundle.js\");\n\nvar _devBundle2 = _interopRequireDefault(_devBundle);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n    enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n    return a;\n};\n\nconsole.log(\"RENDERING server/express.js\");\n//import helmet from 'helmet'\n\n\n// modules for server side rendering\n\nvar StaticRouter = __webpack_require__(/*! react-router-dom */ \"react-router-dom\").StaticRouter;\n\n// @todo\n\n//end\n\n//comment out before building for production\n\n\nvar CURRENT_WORKING_DIR = process.cwd();\n\nvar App = function App(collections) {\n    var app = (0, _express2.default)();\n\n    //comment out before building for production\n    _devBundle2.default.compile(app);\n\n    // parse body params and attache them to req.body\n    app.use(_bodyParser2.default.json());\n    app.use(_bodyParser2.default.urlencoded({ extended: true }));\n    app.use((0, _cookieParser2.default)());\n    app.use((0, _compression2.default)());\n    // secure apps by setting various HTTP headers\n    //app.use(helmet())\n    // enable CORS - Cross Origin Resource Sharing\n    app.use((0, _cors2.default)());\n\n    app.use('/dist', _express2.default.static(_path2.default.join(CURRENT_WORKING_DIR, 'dist')));\n\n    // mount routes\n    app.use('/', _user2.default);\n    app.use('/', _auth2.default);\n\n    var instructorAuthRoutes = __webpack_require__(/*! ./routes/instructor.auth.routes */ \"./server/routes/instructor.auth.routes.js\")(collections.collection(\"instructors\"));\n    var studentAuthRoutes = __webpack_require__(/*! ./routes/student.auth.routes */ \"./server/routes/student.auth.routes.js\")(collections.collection(\"students\"));\n    var instructorRoutes = __webpack_require__(/*! ./routes/instructor.routes */ \"./server/routes/instructor.routes.js\")(collections.collection(\"instructors\"));\n    var studentRoutes = __webpack_require__(/*! ./routes/student.routes */ \"./server/routes/student.routes.js\")(collections.collection(\"students\"));\n    var courseRoutes = __webpack_require__(/*! ./routes/course.routes */ \"./server/routes/course.routes.js\")(collections.collection(\"courses\"));\n\n    app.use('/', instructorRoutes);\n    app.use('/', studentRoutes);\n    app.use('/', instructorAuthRoutes);\n    app.use('/', studentAuthRoutes);\n    app.use('/', courseRoutes);\n\n    app.get('*', function (req, res) {\n        console.log('Calling app.get');\n        var sheetsRegistry = new _jss.SheetsRegistry();\n        console.log('Got sheetsRegistry');\n\n        // @see https://material-ui.com/customization/theming/\n        var theme = (0, _styles.createMuiTheme)({\n            palette: {\n                primary: {\n                    light: '#757de8',\n                    main: '#3f51b5',\n                    dark: '#002984',\n                    contrastText: '#fff'\n                },\n                secondary: {\n                    light: '#ff79b0',\n                    main: '#ff4081',\n                    dark: '#c60055',\n                    contrastText: '#000'\n                },\n                openTitle: _colors.indigo['400'],\n                protectedTitle: _colors.pink['400'],\n                type: 'light'\n            }\n        });\n        console.log(\"Got theme\");\n\n        //const generateClassName = createGenerateClassName()\n        // console.log(\"Got class name: \" + generateClassName)\n        var context = {\n            \"muiTheme\": theme\n        };\n\n        if (context.url) {\n            return res.redirect(303, context.url);\n        }\n\n        res.status(200).send((0, _template2.default)({}));\n\n        // Catch unauthorised errors\n        app.use(function (err, req, res, next) {\n            if (err.name === 'UnauthorizedError') {\n                res.status(401).json({ \"error\": err.name + \": \" + err.message });\n            }\n        });\n    } // app.get\n    );\n\n    return app;\n}; // const App =\n\nmodule.exports = App;\n;\n\n(function () {\n    var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(StaticRouter, 'StaticRouter', '/home/davies/Development/gamifier/server/express.js');\n    reactHotLoader.register(CURRENT_WORKING_DIR, 'CURRENT_WORKING_DIR', '/home/davies/Development/gamifier/server/express.js');\n    reactHotLoader.register(App, 'App', '/home/davies/Development/gamifier/server/express.js');\n})();\n\n;\n\n(function () {\n    var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n    leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/express.js?");

/***/ }),

/***/ "./server/models/authentication.model.js":
/*!***********************************************!*\
  !*** ./server/models/authentication.model.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nvar _jsonwebtoken = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n\nvar _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);\n\nvar _expressJwt = __webpack_require__(/*! express-jwt */ \"express-jwt\");\n\nvar _expressJwt2 = _interopRequireDefault(_expressJwt);\n\nvar _config = __webpack_require__(/*! ./../../config/config */ \"./config/config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n    enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n    return a;\n};\n\nvar crypto = __webpack_require__(/*! crypto */ \"crypto\");\n\nvar Authentication = function Authentication() {\n\n    return {\n\n        makeSalt: function makeSalt() {\n            return Math.round(new Date().valueOf() * Math.random()) + '';\n        },\n\n        validate: function validate(plain_text_password, is_new) {\n            if (plain_text_password && plain_text_password < 6) {\n                return { 'error': 'Password must be at least 6 characters.' };\n            }\n            if (is_new && !plain_text_password) {\n                return { 'error': 'Password is required' };\n            }\n            return { 'status': 'ok' };\n        },\n\n        encryptPassword: function encryptPassword(plain_text_password, salt) {\n\n            if (!plain_text_password) return '';\n            try {\n                return crypto.createHmac('sha1', salt).update(plain_text_password).digest('hex');\n            } catch (err) {\n                return err.toString();\n            }\n        },\n\n        authenticate: function authenticate(plain_text_password, salt, hashed_password) {\n            return this.encryptPassword(plain_text_password, salt) === hashed_password;\n        },\n\n        requireSignin: (0, _expressJwt2.default)({\n            secret: _config2.default.jwtSecret,\n            userProperty: 'auth',\n            algorithms: ['HS256']\n        }),\n\n        hasAuthorization: function hasAuthorization(req, res, next) {\n            var authorized = req.profile && req.auth && req.profile._id.toString() === req.auth._id;\n            if (!authorized) {\n                return res.status('403').json({\n                    error: \"User is not authorized\"\n                });\n            }\n            next();\n        }\n\n    };\n};\n\nmodule.exports = Authentication;\n;\n\n(function () {\n    var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(Authentication, 'Authentication', '/home/davies/Development/gamifier/server/models/authentication.model.js');\n})();\n\n;\n\n(function () {\n    var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n    leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/models/authentication.model.js?");

/***/ }),

/***/ "./server/models/course.model.js":
/*!***************************************!*\
  !*** ./server/models/course.model.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _jsonwebtoken = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n\nvar _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);\n\nvar _expressJwt = __webpack_require__(/*! express-jwt */ \"express-jwt\");\n\nvar _expressJwt2 = _interopRequireDefault(_expressJwt);\n\nvar _config = __webpack_require__(/*! ./../../config/config */ \"./config/config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n    enterModule && enterModule(module);\n})();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n    return a;\n};\n\nvar crypto = __webpack_require__(/*! crypto */ \"crypto\");\n\nvar Course = function () {\n    function Course(collection) {\n        _classCallCheck(this, Course);\n\n        this.collection = collection;\n        this.state = {};\n        this.authenticator = __webpack_require__(/*! ./authentication.model */ \"./server/models/authentication.model.js\")();\n    }\n\n    _createClass(Course, [{\n        key: 'create',\n        value: function create(req, res) {}\n    }, {\n        key: 'userByID',\n        value: function userByID(req, res, next, id) {\n\n            req.instructor_id = id;\n            next();\n        }\n    }, {\n        key: 'list',\n        value: function list(req, res) {\n\n            var s = {};\n\n            if (undefined !== req.instructor_id) {\n                s = {\n                    'instructors': req.instructor_id\n                };\n            }\n\n            this.collection.find(s).toArray(function (err, courses) {\n                if (err) {\n                    res.json({\n                        'error': err\n                    });\n                } else {\n                    res.status('201').json({\n                        courses: courses\n                    });\n                }\n            });\n        }\n    }, {\n        key: 'read',\n        value: function read(req, res) {}\n    }, {\n        key: 'update',\n        value: function update(req, res, next) {}\n    }, {\n        key: 'remove',\n        value: function remove(req, res, next) {}\n    }, {\n        key: '__reactstandin__regenerateByEval',\n        // @ts-ignore\n        value: function __reactstandin__regenerateByEval(key, code) {\n            // @ts-ignore\n            this[key] = eval(code);\n        }\n    }]);\n\n    return Course;\n}();\n\nmodule.exports = Course;\n;\n\n(function () {\n    var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(Course, 'Course', '/home/davies/Development/gamifier/server/models/course.model.js');\n})();\n\n;\n\n(function () {\n    var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n    leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/models/course.model.js?");

/***/ }),

/***/ "./server/models/instructor.model.js":
/*!*******************************************!*\
  !*** ./server/models/instructor.model.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _jsonwebtoken = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n\nvar _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);\n\nvar _expressJwt = __webpack_require__(/*! express-jwt */ \"express-jwt\");\n\nvar _expressJwt2 = _interopRequireDefault(_expressJwt);\n\nvar _config = __webpack_require__(/*! ./../../config/config */ \"./config/config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n    enterModule && enterModule(module);\n})();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n    return a;\n};\n\nvar crypto = __webpack_require__(/*! crypto */ \"crypto\");\n\nvar Instructor = function () {\n    function Instructor(collection) {\n        _classCallCheck(this, Instructor);\n\n        this.collection = collection;\n        this.state = {};\n        this.authenticator = __webpack_require__(/*! ./authentication.model */ \"./server/models/authentication.model.js\")();\n    }\n\n    _createClass(Instructor, [{\n        key: 'create',\n        value: function create(req, res) {\n            var _this = this;\n\n            var validate = this.authenticator.validate(req.body.password, true);\n\n            if (undefined !== validate.error) {\n                res.status('403').json({\n                    error: validate.error\n                });\n            } else {\n\n                // Check email\n                if (req.body.email.match(/.+\\@.+\\..+/) === false) {\n                    res.status('402').json({\n                        error: 'Email is invalid'\n                    });\n                } else {\n                    this.collection.findOne({ 'email': req.body.email }, function (err, instructor) {\n                        if (err) {\n                            res.json({\n                                'error': err\n                            });\n                        } else if (instructor) {\n                            res.status('409').json({\n                                error: 'Email already exists',\n                                email: instructor.email\n                            });\n                        } else {\n\n                            // We're ok\n                            var salt = _this.authenticator.makeSalt();\n                            _this.hashed_password = _this.authenticator.encryptPassword(req.body.password, salt);\n                            _this.state = {\n                                'first_name': req.body.first_name,\n                                'last_name': req.body.last_name,\n                                'email': req.body.email,\n                                'password': _this.hashed_password,\n                                'created': Date.now(),\n                                'salt': salt\n                            };\n\n                            _this.collection.insertOne(_this.state, function (err, result) {\n                                if (err) {\n                                    res.json({\n                                        'error': err\n                                    });\n                                } else {\n                                    res.json({\n                                        'status': 201,\n                                        'message': 'Instructor created',\n                                        'Location': '/api/instructor/' + result.insertedId\n                                    });\n                                }\n                            });\n                        }\n                    });\n                }\n            }\n        }\n    }, {\n        key: 'signin',\n        value: function signin(req, res) {\n            var _this2 = this;\n\n            this.collection.findOne({ 'email': req.body.email }, function (err, instructor) {\n                if (err) {\n                    res.json({\n                        'error': err\n                    });\n                } else if (instructor === null || !instructor) {\n                    res.status('401').json({\n                        error: \"Instructor not found\"\n                    });\n                } else {\n\n                    if (!_this2.authenticator.authenticate(req.body.password, instructor.salt, instructor.password)) {\n                        res.status('403').json({\n                            error: \"Invalid password\"\n                        });\n                    } else {\n\n                        var token = _jsonwebtoken2.default.sign({\n                            _id: instructor._id,\n                            algorithms: ['HS256']\n                        }, _config2.default.jwtSecret);\n\n                        res.cookie(\"t\", token, {\n                            expire: new Date() + 9999\n                        });\n\n                        return res.json({\n                            token: token,\n                            instructor: {\n                                _id: instructor._id,\n                                first_name: instructor.first_name,\n                                last_name: instructor.last_name,\n                                email: instructor.email }\n                        });\n                    }\n                }\n            });\n        }\n    }, {\n        key: 'userByID',\n        value: function userByID(req, res, next, id) {\n\n            var ObjectId = __webpack_require__(/*! mongodb */ \"mongodb\").ObjectId;\n            var o_id = new ObjectId(id);\n\n            this.collection.findOne({ '_id': o_id }, function (err, instructor) {\n                if (err) {\n                    res.json({\n                        'error': err\n                    });\n                } else if (instructor === null || !instructor) {\n                    res.status('401').json({\n                        error: \"Instructor not found\"\n                    });\n                } else {\n                    req.profile = instructor;\n                    next();\n                }\n            });\n        }\n    }, {\n        key: 'read',\n        value: function read(req, res) {\n            req.profile.hashed_password = undefined;\n            req.profile.salt = undefined;\n            res.json(req.profile);\n        }\n    }, {\n        key: 'update',\n        value: function update(req, res, next) {\n\n            var id = req.profile._id;\n            var instructor = req.profile;\n\n            instructor = _lodash2.default.extend(instructor, req.body);\n            instructor.updated = Date.now();\n\n            var ObjectId = __webpack_require__(/*! mongodb */ \"mongodb\").ObjectId;\n            var o_id = new ObjectId(id);\n\n            this.collection.updateOne({ '_id': o_id }, { $set: instructor }, function (err) {\n                if (err) {\n                    res.json({\n                        'error': err\n                    });\n                } else {\n                    res.json({\n                        status: 200,\n                        Location: '/api/instructor/' + id\n                    });\n                }\n            });\n        }\n    }, {\n        key: 'remove',\n        value: function remove(req, res, next) {\n            var id = req.profile._id;\n            var ObjectId = __webpack_require__(/*! mongodb */ \"mongodb\").ObjectId;\n            var o_id = new ObjectId(id);\n            this.collection.deleteOne({ '_id': o_id }, function (err) {\n                if (err) {\n                    res.json({\n                        'error': err\n                    });\n                } else {\n                    res.json({\n                        'status': 204\n                    });\n                }\n            });\n        }\n    }, {\n        key: 'signout',\n        value: function signout(req, res) {\n            res.clearCookie(\"t\");\n            return res.status('200').json({\n                message: \"signed out\"\n            });\n        }\n    }, {\n        key: '__reactstandin__regenerateByEval',\n        // @ts-ignore\n        value: function __reactstandin__regenerateByEval(key, code) {\n            // @ts-ignore\n            this[key] = eval(code);\n        }\n    }]);\n\n    return Instructor;\n}();\n\nmodule.exports = Instructor;\n;\n\n(function () {\n    var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(Instructor, 'Instructor', '/home/davies/Development/gamifier/server/models/instructor.model.js');\n})();\n\n;\n\n(function () {\n    var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n    leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/models/instructor.model.js?");

/***/ }),

/***/ "./server/models/student.model.js":
/*!****************************************!*\
  !*** ./server/models/student.model.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _jsonwebtoken = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n\nvar _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);\n\nvar _expressJwt = __webpack_require__(/*! express-jwt */ \"express-jwt\");\n\nvar _expressJwt2 = _interopRequireDefault(_expressJwt);\n\nvar _config = __webpack_require__(/*! ./../../config/config */ \"./config/config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n    enterModule && enterModule(module);\n})();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n    return a;\n};\n\nvar crypto = __webpack_require__(/*! crypto */ \"crypto\");\n\nvar Student = function () {\n    function Student(collection) {\n        _classCallCheck(this, Student);\n\n        this.collection = collection;\n        this.state = {};\n        this.authenticator = __webpack_require__(/*! ./authentication.model */ \"./server/models/authentication.model.js\")();\n    }\n\n    _createClass(Student, [{\n        key: 'create',\n        value: function create(req, res) {\n            var _this = this;\n\n            var validate = this.authenticator.validate(req.body.password, true);\n\n            if (undefined !== validate.error) {\n                res.status('403').json({\n                    error: validate.error\n                });\n            } else {\n\n                // Check email\n                if (req.body.email.match(/.+\\@.+\\..+/) === false) {\n                    res.status('402').json({\n                        error: 'Email is invalid'\n                    });\n                } else {\n                    this.collection.findOne({ 'email': req.body.email }, function (err, student) {\n                        if (err) {\n                            res.json({\n                                'error': err\n                            });\n                        } else if (student) {\n                            res.status('409').json({\n                                error: 'Email already exists',\n                                email: student.email\n                            });\n                        } else {\n\n                            // We're ok\n                            var salt = _this.authenticator.makeSalt();\n                            _this.hashed_password = _this.authenticator.encryptPassword(req.body.password, salt);\n                            _this.state = {\n                                'first_name': req.body.first_name,\n                                'last_name': req.body.last_name,\n                                'email': req.body.email,\n                                'password': _this.hashed_password,\n                                'created': Date.now(),\n                                'salt': salt\n                            };\n\n                            _this.collection.insertOne(_this.state, function (err, result) {\n                                if (err) {\n                                    res.json({\n                                        'error': err\n                                    });\n                                } else {\n                                    res.json({\n                                        'status': 201,\n                                        'message': 'student created',\n                                        'Location': '/api/student/' + result.insertedId\n                                    });\n                                }\n                            });\n                        }\n                    });\n                }\n            }\n        }\n    }, {\n        key: 'signin',\n        value: function signin(req, res) {\n            var _this2 = this;\n\n            this.collection.findOne({ 'email': req.body.email }, function (err, student) {\n                if (err) {\n                    res.json({\n                        'error': err\n                    });\n                } else if (student === null || !student) {\n                    res.status('401').json({\n                        error: \"student not found\"\n                    });\n                } else {\n\n                    if (!_this2.authenticator.authenticate(req.body.password, student.salt, student.password)) {\n                        res.status('403').json({\n                            error: \"Invalid password\"\n                        });\n                    } else {\n\n                        var token = _jsonwebtoken2.default.sign({\n                            _id: student._id,\n                            algorithms: ['HS256']\n                        }, _config2.default.jwtSecret);\n\n                        res.cookie(\"t\", token, {\n                            expire: new Date() + 9999\n                        });\n\n                        return res.json({\n                            token: token,\n                            student: {\n                                _id: student._id,\n                                first_name: student.first_name,\n                                last_name: student.last_name,\n                                email: student.email }\n                        });\n                    }\n                }\n            });\n        }\n    }, {\n        key: 'userByID',\n        value: function userByID(req, res, next, id) {\n\n            var ObjectId = __webpack_require__(/*! mongodb */ \"mongodb\").ObjectId;\n            var o_id = new ObjectId(id);\n\n            this.collection.findOne({ '_id': o_id }, function (err, student) {\n                if (err) {\n                    res.json({\n                        'error': err\n                    });\n                } else if (student === null || !student) {\n                    res.status('401').json({\n                        error: \"student not found\"\n                    });\n                } else {\n                    req.profile = student;\n                    next();\n                }\n            });\n        }\n    }, {\n        key: 'read',\n        value: function read(req, res) {\n            req.profile.hashed_password = undefined;\n            req.profile.salt = undefined;\n            res.json(req.profile);\n        }\n    }, {\n        key: 'update',\n        value: function update(req, res, next) {\n\n            var id = req.profile._id;\n            var student = req.profile;\n\n            student = _lodash2.default.extend(student, req.body);\n            student.updated = Date.now();\n\n            var ObjectId = __webpack_require__(/*! mongodb */ \"mongodb\").ObjectId;\n            var o_id = new ObjectId(id);\n\n            this.collection.updateOne({ '_id': o_id }, { $set: student }, function (err) {\n                if (err) {\n                    res.json({\n                        'error': err\n                    });\n                } else {\n                    res.json({\n                        status: 200,\n                        Location: '/api/student/' + id\n                    });\n                }\n            });\n        }\n    }, {\n        key: 'remove',\n        value: function remove(req, res, next) {\n            var id = req.profile._id;\n            var ObjectId = __webpack_require__(/*! mongodb */ \"mongodb\").ObjectId;\n            var o_id = new ObjectId(id);\n            this.collection.deleteOne({ '_id': o_id }, function (err) {\n                if (err) {\n                    res.json({\n                        'error': err\n                    });\n                } else {\n                    res.json({\n                        'status': 204\n                    });\n                }\n            });\n        }\n    }, {\n        key: 'signout',\n        value: function signout(req, res) {\n            res.clearCookie(\"t\");\n            return res.status('200').json({\n                message: \"signed out\"\n            });\n        }\n    }, {\n        key: '__reactstandin__regenerateByEval',\n        // @ts-ignore\n        value: function __reactstandin__regenerateByEval(key, code) {\n            // @ts-ignore\n            this[key] = eval(code);\n        }\n    }]);\n\n    return Student;\n}();\n\nmodule.exports = Student;\n;\n\n(function () {\n    var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(Student, 'Student', '/home/davies/Development/gamifier/server/models/student.model.js');\n})();\n\n;\n\n(function () {\n    var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n    leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/models/student.model.js?");

/***/ }),

/***/ "./server/models/user.model.js":
/*!*************************************!*\
  !*** ./server/models/user.model.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconsole.log(\"RENDERING server/models/user.model.js\");\nconsole.log(\"LOADED server/models/user.model.js\");\n\n//# sourceURL=webpack:///./server/models/user.model.js?");

/***/ }),

/***/ "./server/routes/auth.routes.js":
/*!**************************************!*\
  !*** ./server/routes/auth.routes.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _auth = __webpack_require__(/*! ../controllers/auth.controller */ \"./server/controllers/auth.controller.js\");\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n    enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n    return a;\n};\n\nconsole.log(\"RENDERING server/routes/auth.routes.js\");\n\nvar router = _express2.default.Router();\n\nrouter.route('/auth/signin').post(_auth2.default.signin);\nrouter.route('/auth/signout').get(_auth2.default.signout);\n\n// export default router\nmodule.exports = router;\n;\n\n(function () {\n    var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(router, 'router', '/home/davies/Development/gamifier/server/routes/auth.routes.js');\n})();\n\n;\n\n(function () {\n    var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n    leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/routes/auth.routes.js?");

/***/ }),

/***/ "./server/routes/course.routes.js":
/*!****************************************!*\
  !*** ./server/routes/course.routes.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n    enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n    return a;\n};\n\nvar CourseRouter = function CourseRouter(collection) {\n\n    var router = _express2.default.Router();\n    var courseController = __webpack_require__(/*! ../controllers/course.controller */ \"./server/controllers/course.controller.js\")(collection);\n\n    router.route('/api/courses').get(courseController.list).post(courseController.create);\n\n    var Authenticator = __webpack_require__(/*! ../models/authentication.model */ \"./server/models/authentication.model.js\")();\n\n    router.route('/api/courses/:userId').get(courseController.list);\n\n    router.route('/api/course/:userId').get(courseController.read).put(Authenticator.requireSignin, Authenticator.hasAuthorization, courseController.update).delete(Authenticator.requireSignin, Authenticator.hasAuthorization, courseController.delete);\n\n    router.param('userId', courseController.userByID);\n\n    return router;\n};\n\nmodule.exports = CourseRouter;\n;\n\n(function () {\n    var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(CourseRouter, 'CourseRouter', '/home/davies/Development/gamifier/server/routes/course.routes.js');\n})();\n\n;\n\n(function () {\n    var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n    leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/routes/course.routes.js?");

/***/ }),

/***/ "./server/routes/instructor.auth.routes.js":
/*!*************************************************!*\
  !*** ./server/routes/instructor.auth.routes.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n    enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n    return a;\n};\n\nvar InstructorAuthRouter = function InstructorAuthRouter(collection) {\n\n    var router = _express2.default.Router();\n\n    var instructorAuthController = __webpack_require__(/*! ../controllers/instructor.auth.controller */ \"./server/controllers/instructor.auth.controller.js\")(collection);\n\n    router.route('/api/instructor/auth/signin').post(instructorAuthController.signin);\n\n    router.route('/instructor/auth/signout').get(instructorAuthController.signout);\n\n    return router;\n};\n\nmodule.exports = InstructorAuthRouter;\n;\n\n(function () {\n    var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(InstructorAuthRouter, 'InstructorAuthRouter', '/home/davies/Development/gamifier/server/routes/instructor.auth.routes.js');\n})();\n\n;\n\n(function () {\n    var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n    leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/routes/instructor.auth.routes.js?");

/***/ }),

/***/ "./server/routes/instructor.routes.js":
/*!********************************************!*\
  !*** ./server/routes/instructor.routes.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n    enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n    return a;\n};\n\nvar InstructorRouter = function InstructorRouter(collection) {\n\n    var router = _express2.default.Router();\n    var instructorController = __webpack_require__(/*! ../controllers/instructor.controller */ \"./server/controllers/instructor.controller.js\")(collection);\n\n    router.route('/api/instructors').get(instructorController.list).post(instructorController.create);\n\n    var Authenticator = __webpack_require__(/*! ../models/authentication.model */ \"./server/models/authentication.model.js\")();\n\n    router.route('/api/instructor/:userId').get(instructorController.read).put(Authenticator.requireSignin, Authenticator.hasAuthorization, instructorController.update).delete(Authenticator.requireSignin, Authenticator.hasAuthorization, instructorController.delete);\n\n    router.param('userId', instructorController.userByID);\n\n    return router;\n};\n\nmodule.exports = InstructorRouter;\n;\n\n(function () {\n    var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(InstructorRouter, 'InstructorRouter', '/home/davies/Development/gamifier/server/routes/instructor.routes.js');\n})();\n\n;\n\n(function () {\n    var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n    leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/routes/instructor.routes.js?");

/***/ }),

/***/ "./server/routes/student.auth.routes.js":
/*!**********************************************!*\
  !*** ./server/routes/student.auth.routes.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n    enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n    return a;\n};\n\nvar StudentAuthRouter = function StudentAuthRouter(collection) {\n\n    var router = _express2.default.Router();\n    var studentAuthController = __webpack_require__(/*! ../controllers/student.auth.controller */ \"./server/controllers/student.auth.controller.js\")(collection);\n\n    router.route('/api/students/auth/signin').post(studentAuthController.signin);\n\n    router.route('/student/auth/signout').get(studentAuthController.signout);\n\n    return router;\n};\n\nmodule.exports = StudentAuthRouter;\n;\n\n(function () {\n    var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(StudentAuthRouter, 'StudentAuthRouter', '/home/davies/Development/gamifier/server/routes/student.auth.routes.js');\n})();\n\n;\n\n(function () {\n    var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n    leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/routes/student.auth.routes.js?");

/***/ }),

/***/ "./server/routes/student.routes.js":
/*!*****************************************!*\
  !*** ./server/routes/student.routes.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n    enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n    return a;\n};\n\nvar StudentRouter = function StudentRouter(collection) {\n\n    var router = _express2.default.Router();\n    var studentController = __webpack_require__(/*! ../controllers/student.controller */ \"./server/controllers/student.controller.js\")(collection);\n\n    router.route('/api/students').get(studentController.list).post(studentController.create);\n\n    var Authenticator = __webpack_require__(/*! ../models/authentication.model */ \"./server/models/authentication.model.js\")();\n\n    router.route('/api/student/:userId').get(studentController.read).put(Authenticator.requireSignin, Authenticator.hasAuthorization, studentController.update).delete(Authenticator.requireSignin, Authenticator.hasAuthorization, studentController.delete);\n\n    router.param('userId', studentController.userByID);\n\n    return router;\n};\n\nmodule.exports = StudentRouter;\n;\n\n(function () {\n    var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(StudentRouter, 'StudentRouter', '/home/davies/Development/gamifier/server/routes/student.routes.js');\n})();\n\n;\n\n(function () {\n    var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n    leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/routes/student.routes.js?");

/***/ }),

/***/ "./server/routes/user.routes.js":
/*!**************************************!*\
  !*** ./server/routes/user.routes.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _user = __webpack_require__(/*! ../controllers/user.controller */ \"./server/controllers/user.controller.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _auth = __webpack_require__(/*! ../controllers/auth.controller */ \"./server/controllers/auth.controller.js\");\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n    enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n    return a;\n};\n\nconsole.log(\"RENDERING server/routes/user.routes.js\");\n\nvar router = _express2.default.Router();\n\nrouter.route('/api/users').get(_user2.default.list).post(_user2.default.create);\n\nrouter.route('/api/users/:userId').get(_auth2.default.requireSignin, _user2.default.read).put(_auth2.default.requireSignin, _auth2.default.hasAuthorization, _user2.default.update).delete(_auth2.default.requireSignin, _auth2.default.hasAuthorization, _user2.default.remove);\n\nrouter.param('userId', _user2.default.userByID);\n\nvar _default = router;\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(router, 'router', '/home/davies/Development/gamifier/server/routes/user.routes.js');\n    reactHotLoader.register(_default, 'default', '/home/davies/Development/gamifier/server/routes/user.routes.js');\n})();\n\n;\n\n(function () {\n    var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n    leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/routes/user.routes.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nvar _config = __webpack_require__(/*! ./../config/config */ \"./config/config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n    enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n    return a;\n};\n\nconsole.log(\"RENDERING server/server.js\");\n\n// import app from './express'\nvar MongoClient = __webpack_require__(/*! mongodb */ \"mongodb\").MongoClient;\nvar assert = __webpack_require__(/*! assert */ \"assert\");\n__webpack_require__(/*! dotenv */ \"dotenv\").config();\n\n// Database Connection URL\nvar uri = \"mongodb+srv://\" + process.env.MONGODBUSER + \":\" + process.env.MONGODBPASSWORD + \"@cluster0.awqh6.mongodb.net/\" + process.env.MONGODB + \"?retryWrites=true&w=majority\";\nvar mongoClient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });\n\nmongoClient.connect(function (err) {\n    assert.equal(err, null);\n    var collections = mongoClient.db(process.env.MONGODB);\n    console.log(\"Connected successfully to mongodb server\");\n    var app = __webpack_require__(/*! ./express */ \"./server/express.js\")(collections);\n    app.listen(_config2.default.port, function (err) {\n        if (err) {\n            console.log(err);\n        }\n        console.info('Server started on port %s.', _config2.default.port);\n    });\n});\n;\n\n(function () {\n    var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(MongoClient, 'MongoClient', '/home/davies/Development/gamifier/server/server.js');\n    reactHotLoader.register(uri, 'uri', '/home/davies/Development/gamifier/server/server.js');\n    reactHotLoader.register(mongoClient, 'mongoClient', '/home/davies/Development/gamifier/server/server.js');\n})();\n\n;\n\n(function () {\n    var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n    leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/server.js?");

/***/ }),

/***/ "./template.js":
/*!*********************!*\
  !*** ./template.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconsole.log(\"RENDERING template.js\");\n\nvar _default = function _default(_ref) {\n  var markup = _ref.markup,\n      css = _ref.css;\n\n  return \"<!doctype html>\\n      <html lang=\\\"en\\\">\\n        <head>\\n          <meta charset=\\\"utf-8\\\">\\n          <title>MERN Skeleton</title>\\n          <link rel=\\\"stylesheet\\\" href=\\\"https://fonts.googleapis.com/css?family=Roboto:100,300,400\\\">\\n          <link rel=\\\"stylesheet\\\" href=\\\"https://fonts.googleapis.com/icon?family=Material+Icons\\\">\\n          <style>\\n              a{\\n                text-decoration: none\\n              }\\n          </style>\\n        </head>\\n        <body style=\\\"margin:0\\\">\\n          <div id=\\\"root\\\">\" + markup + \"</div>\\n          <style id=\\\"jss-server-side\\\">\" + css + \"</style>\\n          <script type=\\\"text/javascript\\\" src=\\\"/dist/bundle.js\\\"></script>\\n        </body>\\n      </html>\";\n};\n\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"/home/davies/Development/gamifier/template.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./template.js?");

/***/ }),

/***/ "./webpack.config.client.js":
/*!**********************************!*\
  !*** ./webpack.config.client.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\n(function () {\n    var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n    enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n    return a;\n};\n\nvar path = __webpack_require__(/*! path */ \"path\");\nvar webpack = __webpack_require__(/*! webpack */ \"webpack\");\nvar CURRENT_WORKING_DIR = process.cwd();\n\nvar config = {\n    name: \"browser\",\n    mode: \"development\",\n    devtool: 'eval-source-map',\n    entry: ['react-hot-loader/patch', 'webpack-hot-middleware/client?reload=true', path.join(CURRENT_WORKING_DIR, 'client/main.js')],\n    output: {\n        path: path.join(CURRENT_WORKING_DIR, '/dist'),\n        filename: 'bundle.js',\n        publicPath: '/dist/'\n    },\n    module: {\n        rules: [{\n            test: /\\.jsx?$/,\n            exclude: /node_modules/,\n            use: ['babel-loader']\n        }, {\n            test: /\\.(ttf|eot|svg|gif|jpg|png)(\\?[\\s\\S]+)?$/,\n            use: 'file-loader'\n        }]\n    }, plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()]\n};\n\nmodule.exports = config;\n;\n\n(function () {\n    var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(CURRENT_WORKING_DIR, 'CURRENT_WORKING_DIR', '/home/davies/Development/gamifier/webpack.config.client.js');\n    reactHotLoader.register(config, 'config', '/home/davies/Development/gamifier/webpack.config.client.js');\n})();\n\n;\n\n(function () {\n    var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n    leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./webpack.config.client.js?");

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./server/server.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /home/davies/Development/gamifier/server/server.js */\"./server/server.js\");\n\n\n//# sourceURL=webpack:///multi_./server/server.js?");

/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/AppBar\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/AppBar%22?");

/***/ }),

/***/ "@material-ui/core/Avatar":
/*!*******************************************!*\
  !*** external "@material-ui/core/Avatar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Avatar\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Avatar%22?");

/***/ }),

/***/ "@material-ui/core/Box":
/*!****************************************!*\
  !*** external "@material-ui/core/Box" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Box\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Box%22?");

/***/ }),

/***/ "@material-ui/core/Box/Box":
/*!********************************************!*\
  !*** external "@material-ui/core/Box/Box" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Box/Box\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Box/Box%22?");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Button\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Button%22?");

/***/ }),

/***/ "@material-ui/core/Card":
/*!*****************************************!*\
  !*** external "@material-ui/core/Card" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Card\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Card%22?");

/***/ }),

/***/ "@material-ui/core/CardActions":
/*!************************************************!*\
  !*** external "@material-ui/core/CardActions" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/CardActions\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/CardActions%22?");

/***/ }),

/***/ "@material-ui/core/CardContent":
/*!************************************************!*\
  !*** external "@material-ui/core/CardContent" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/CardContent\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/CardContent%22?");

/***/ }),

/***/ "@material-ui/core/Collapse":
/*!*********************************************!*\
  !*** external "@material-ui/core/Collapse" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Collapse\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Collapse%22?");

/***/ }),

/***/ "@material-ui/core/Container":
/*!**********************************************!*\
  !*** external "@material-ui/core/Container" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Container\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Container%22?");

/***/ }),

/***/ "@material-ui/core/Container/Container":
/*!********************************************************!*\
  !*** external "@material-ui/core/Container/Container" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Container/Container\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Container/Container%22?");

/***/ }),

/***/ "@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/CssBaseline\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/CssBaseline%22?");

/***/ }),

/***/ "@material-ui/core/CssBaseline/CssBaseline":
/*!************************************************************!*\
  !*** external "@material-ui/core/CssBaseline/CssBaseline" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/CssBaseline/CssBaseline\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/CssBaseline/CssBaseline%22?");

/***/ }),

/***/ "@material-ui/core/Dialog":
/*!*******************************************!*\
  !*** external "@material-ui/core/Dialog" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Dialog\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Dialog%22?");

/***/ }),

/***/ "@material-ui/core/Dialog/Dialog":
/*!**************************************************!*\
  !*** external "@material-ui/core/Dialog/Dialog" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Dialog/Dialog\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Dialog/Dialog%22?");

/***/ }),

/***/ "@material-ui/core/DialogActions":
/*!**************************************************!*\
  !*** external "@material-ui/core/DialogActions" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/DialogActions\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/DialogActions%22?");

/***/ }),

/***/ "@material-ui/core/DialogActions/DialogActions":
/*!****************************************************************!*\
  !*** external "@material-ui/core/DialogActions/DialogActions" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/DialogActions/DialogActions\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/DialogActions/DialogActions%22?");

/***/ }),

/***/ "@material-ui/core/DialogContent":
/*!**************************************************!*\
  !*** external "@material-ui/core/DialogContent" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/DialogContent\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/DialogContent%22?");

/***/ }),

/***/ "@material-ui/core/DialogContent/DialogContent":
/*!****************************************************************!*\
  !*** external "@material-ui/core/DialogContent/DialogContent" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/DialogContent/DialogContent\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/DialogContent/DialogContent%22?");

/***/ }),

/***/ "@material-ui/core/DialogContentText":
/*!******************************************************!*\
  !*** external "@material-ui/core/DialogContentText" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/DialogContentText\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/DialogContentText%22?");

/***/ }),

/***/ "@material-ui/core/DialogTitle":
/*!************************************************!*\
  !*** external "@material-ui/core/DialogTitle" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/DialogTitle\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/DialogTitle%22?");

/***/ }),

/***/ "@material-ui/core/DialogTitle/DialogTitle":
/*!************************************************************!*\
  !*** external "@material-ui/core/DialogTitle/DialogTitle" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/DialogTitle/DialogTitle\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/DialogTitle/DialogTitle%22?");

/***/ }),

/***/ "@material-ui/core/Divider":
/*!********************************************!*\
  !*** external "@material-ui/core/Divider" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Divider\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Divider%22?");

/***/ }),

/***/ "@material-ui/core/Icon":
/*!*****************************************!*\
  !*** external "@material-ui/core/Icon" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Icon\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Icon%22?");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/IconButton\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/IconButton%22?");

/***/ }),

/***/ "@material-ui/core/List":
/*!*****************************************!*\
  !*** external "@material-ui/core/List" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/List\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/List%22?");

/***/ }),

/***/ "@material-ui/core/List/List":
/*!**********************************************!*\
  !*** external "@material-ui/core/List/List" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/List/List\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/List/List%22?");

/***/ }),

/***/ "@material-ui/core/ListItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/ListItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/ListItem\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/ListItem%22?");

/***/ }),

/***/ "@material-ui/core/ListItem/ListItem":
/*!******************************************************!*\
  !*** external "@material-ui/core/ListItem/ListItem" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/ListItem/ListItem\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/ListItem/ListItem%22?");

/***/ }),

/***/ "@material-ui/core/ListItemAvatar":
/*!***************************************************!*\
  !*** external "@material-ui/core/ListItemAvatar" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/ListItemAvatar\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/ListItemAvatar%22?");

/***/ }),

/***/ "@material-ui/core/ListItemSecondaryAction":
/*!************************************************************!*\
  !*** external "@material-ui/core/ListItemSecondaryAction" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/ListItemSecondaryAction\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/ListItemSecondaryAction%22?");

/***/ }),

/***/ "@material-ui/core/ListItemText":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemText" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/ListItemText\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/ListItemText%22?");

/***/ }),

/***/ "@material-ui/core/ListSubheader":
/*!**************************************************!*\
  !*** external "@material-ui/core/ListSubheader" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/ListSubheader\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/ListSubheader%22?");

/***/ }),

/***/ "@material-ui/core/ListSubheader/ListSubheader":
/*!****************************************************************!*\
  !*** external "@material-ui/core/ListSubheader/ListSubheader" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/ListSubheader/ListSubheader\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/ListSubheader/ListSubheader%22?");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Paper\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Paper%22?");

/***/ }),

/***/ "@material-ui/core/SvgIcon/SvgIcon":
/*!****************************************************!*\
  !*** external "@material-ui/core/SvgIcon/SvgIcon" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/SvgIcon/SvgIcon\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/SvgIcon/SvgIcon%22?");

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/TextField\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/TextField%22?");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Toolbar\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Toolbar%22?");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Typography\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Typography%22?");

/***/ }),

/***/ "@material-ui/core/Typography/Typography":
/*!**********************************************************!*\
  !*** external "@material-ui/core/Typography/Typography" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Typography/Typography\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Typography/Typography%22?");

/***/ }),

/***/ "@material-ui/core/colors":
/*!*******************************************!*\
  !*** external "@material-ui/core/colors" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/colors\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/colors%22?");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/styles\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/styles%22?");

/***/ }),

/***/ "@material-ui/icons/ArrowForward":
/*!**************************************************!*\
  !*** external "@material-ui/icons/ArrowForward" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/ArrowForward\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/ArrowForward%22?");

/***/ }),

/***/ "@material-ui/icons/Delete":
/*!********************************************!*\
  !*** external "@material-ui/icons/Delete" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Delete\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Delete%22?");

/***/ }),

/***/ "@material-ui/icons/Edit":
/*!******************************************!*\
  !*** external "@material-ui/icons/Edit" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Edit\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Edit%22?");

/***/ }),

/***/ "@material-ui/icons/ExpandLess":
/*!************************************************!*\
  !*** external "@material-ui/icons/ExpandLess" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/ExpandLess\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/ExpandLess%22?");

/***/ }),

/***/ "@material-ui/icons/ExpandMore":
/*!************************************************!*\
  !*** external "@material-ui/icons/ExpandMore" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/ExpandMore\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/ExpandMore%22?");

/***/ }),

/***/ "@material-ui/icons/Home":
/*!******************************************!*\
  !*** external "@material-ui/icons/Home" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Home\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Home%22?");

/***/ }),

/***/ "@material-ui/icons/Person":
/*!********************************************!*\
  !*** external "@material-ui/icons/Person" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Person\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Person%22?");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"assert\");\n\n//# sourceURL=webpack:///external_%22assert%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-parser\");\n\n//# sourceURL=webpack:///external_%22cookie-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"crypto\");\n\n//# sourceURL=webpack:///external_%22crypto%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-jwt":
/*!******************************!*\
  !*** external "express-jwt" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-jwt\");\n\n//# sourceURL=webpack:///external_%22express-jwt%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash\");\n\n//# sourceURL=webpack:///external_%22lodash%22?");

/***/ }),

/***/ "material-ui/Dialog":
/*!*************************************!*\
  !*** external "material-ui/Dialog" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/Dialog\");\n\n//# sourceURL=webpack:///external_%22material-ui/Dialog%22?");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");\n\n//# sourceURL=webpack:///external_%22mongodb%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-html-parser":
/*!************************************!*\
  !*** external "react-html-parser" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-html-parser\");\n\n//# sourceURL=webpack:///external_%22react-html-parser%22?");

/***/ }),

/***/ "react-jss/lib/JssProvider":
/*!********************************************!*\
  !*** external "react-jss/lib/JssProvider" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-jss/lib/JssProvider\");\n\n//# sourceURL=webpack:///external_%22react-jss/lib/JssProvider%22?");

/***/ }),

/***/ "react-jss/lib/jss":
/*!************************************!*\
  !*** external "react-jss/lib/jss" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-jss/lib/jss\");\n\n//# sourceURL=webpack:///external_%22react-jss/lib/jss%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack:///external_%22webpack%22?");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-dev-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-dev-middleware%22?");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-hot-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-hot-middleware%22?");

/***/ })

/******/ });