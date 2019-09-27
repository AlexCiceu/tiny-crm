(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/css/app.css":
/*!****************************!*\
  !*** ./assets/css/app.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/app.css */ "./assets/css/app.css");
/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_app_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Home */ "./assets/js/components/Home.js");





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Home__WEBPACK_IMPORTED_MODULE_4__["default"], null)), document.getElementById('root'));

/***/ }),

/***/ "./assets/js/components/Books.js":
/*!***************************************!*\
  !*** ./assets/js/components/Books.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_15__);















function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Books =
/*#__PURE__*/
function (_Component) {
  _inherits(Books, _Component);

  function Books(props) {
    var _this;

    _classCallCheck(this, Books);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Books).call(this, props));
    _this.state = {
      books: [],
      loading: true,
      bookTitle: '',
      bookAuthor: '',
      bookDescription: '',
      bookUrl: ''
    };
    _this.handleTitle = _this.handleTitle.bind(_assertThisInitialized(_this));
    _this.handleAuthor = _this.handleAuthor.bind(_assertThisInitialized(_this));
    _this.handleDescription = _this.handleDescription.bind(_assertThisInitialized(_this));
    _this.handleUrl = _this.handleUrl.bind(_assertThisInitialized(_this));
    _this.insertBook = _this.insertBook.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Books, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getBooks();
    }
  }, {
    key: "handleTitle",
    value: function handleTitle(event) {
      this.setState({
        bookTitle: event.target.value
      });
    }
  }, {
    key: "handleAuthor",
    value: function handleAuthor(event) {
      this.setState({
        bookAuthor: event.target.value
      });
    }
  }, {
    key: "handleDescription",
    value: function handleDescription(event) {
      this.setState({
        bookDescription: event.target.value
      });
    }
  }, {
    key: "handleUrl",
    value: function handleUrl(event) {
      this.setState({
        bookUrl: event.target.value
      });
    }
  }, {
    key: "getBooks",
    value: function getBooks() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_15___default.a.get("http://localhost:8000/api/books").then(function (books) {
        _this2.setState({
          books: books.data,
          loading: false
        });
      });
    }
  }, {
    key: "insertBook",
    value: function insertBook() {
      axios__WEBPACK_IMPORTED_MODULE_15___default.a.post('http://localhost:8000/api/insert_books', {
        name: this.state.bookTitle,
        author: this.state.bookAuthor,
        description: this.state.bookDescription,
        imageURL: this.state.bookUrl
      }, {
        'Content-Type': 'application/x-www-form-urlencoded'
      }).then(function (response) {
        window.location.reload();
        console.log('This shit finally worked');
      });
    }
  }, {
    key: "render",
    value: function render() {
      var loading = this.state.loading;
      return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("section", {
        className: "row-section"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("h2", {
        className: "text-center"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("span", null, "List of books"))), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "col-md-10 offset-md-1 row-block"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("form", null, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        "class": "media"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "media-left align-self-center"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("img", {
        className: "rounded-circle",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk6G0P3qiNLxphD_scyvciRqhzfHvxro1_Gl5TQVRtz9TkRIz9"
      })), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "media-body"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("h4", null, "Book title"), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("input", {
        type: "text",
        onChange: this.handleTitle
      }), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("h4", null, "Author"), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("input", {
        type: "text",
        onChange: this.handleAuthor
      }), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("h4", null, "Description"), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("input", {
        type: "text",
        onChange: this.handleDescription
      }), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("h4", null, "Book image URL"), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("input", {
        type: "text",
        onChange: this.handleUrl
      })), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "media-right align-self-center"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("a", {
        href: "#",
        className: "btn btn-default",
        onClick: this.insertBook
      }, "Add Book"))))), loading ? react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: 'row text-center'
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("span", {
        className: "fa fa-spin fa-spinner fa-4x"
      })) : react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: 'row'
      }, this.state.books.map(function (book) {
        return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
          className: "col-md-10 offset-md-1 row-block",
          key: book.id
        }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("ul", {
          id: "sortable"
        }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
          className: "media"
        }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
          className: "media-left align-self-center"
        }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("img", {
          className: "rounded-circle",
          src: book.imageURL
        })), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
          className: "media-body"
        }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("h4", null, book.name), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("h4", null, book.author), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("p", null, book.description))))));
      })))));
    }
  }]);

  return Books;
}(react__WEBPACK_IMPORTED_MODULE_14__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Books);

/***/ }),

/***/ "./assets/js/components/Home.js":
/*!**************************************!*\
  !*** ./assets/js/components/Home.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Books__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Books */ "./assets/js/components/Books.js");
/* harmony import */ var _Reviews__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Reviews */ "./assets/js/components/Reviews.js");












function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var Home =
/*#__PURE__*/
function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, _getPrototypeOf(Home).apply(this, arguments));
  }

  _createClass(Home, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("nav", {
        className: "navbar navbar-expand-lg navbar-dark bg-dark"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__["Link"], {
        className: "navbar-brand",
        to: "/"
      }, " Symfony React Project "), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "collapse navbar-collapse",
        id: "navbarText"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("ul", {
        className: "navbar-nav mr-auto"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        className: "nav-item"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__["Link"], {
        className: "nav-link",
        to: "/reviews"
      }, " Reviews ")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        className: "nav-item"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__["Link"], {
        className: "nav-link",
        to: "/books"
      }, " Books "))))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__["Redirect"], {
        exact: true,
        from: "/",
        to: "/books"
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__["Route"], {
        path: "/books",
        component: _Books__WEBPACK_IMPORTED_MODULE_13__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__["Route"], {
        path: "/reviews",
        component: _Reviews__WEBPACK_IMPORTED_MODULE_14__["default"]
      })));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./assets/js/components/Reviews.js":
/*!*****************************************!*\
  !*** ./assets/js/components/Reviews.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_14__);














function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Reviews =
/*#__PURE__*/
function (_Component) {
  _inherits(Reviews, _Component);

  function Reviews(props) {
    var _this;

    _classCallCheck(this, Reviews);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Reviews).call(this, props));
    _this.state = {
      posts: [],
      loading: true,
      postTitle: '',
      postBody: ''
    };
    _this.handleTitle = _this.handleTitle.bind(_assertThisInitialized(_this));
    _this.handleBody = _this.handleBody.bind(_assertThisInitialized(_this));
    _this.postReview = _this.postReview.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Reviews, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getPosts();
    }
  }, {
    key: "getPosts",
    value: function getPosts() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_14___default.a.get("http://localhost:8000/api/reviews").then(function (posts) {
        _this2.setState({
          posts: posts.data,
          loading: false
        });
      });
    }
  }, {
    key: "postReview",
    value: function postReview() {
      axios__WEBPACK_IMPORTED_MODULE_14___default.a.post('http://localhost:8000/api/post_review', {
        title: this.state.postTitle,
        body: this.state.postBody
      }, {
        'Content-Type': 'application/x-www-form-urlencoded'
      }).then(function (response) {
        window.location.reload();
        console.log('This shit finally worked');
      });
    }
  }, {
    key: "handleTitle",
    value: function handleTitle(event) {
      this.setState({
        postTitle: event.target.value
      });
    }
  }, {
    key: "handleBody",
    value: function handleBody(event) {
      this.setState({
        postBody: event.target.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      var loading = this.state.loading;
      return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("section", {
        className: "row-section"
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("h2", {
        className: "text-center"
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("span", null, "List of reviews"))), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
        className: 'row'
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
        className: "col-md-10 offset-md-1 row-block"
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("ul", {
        id: "sortable"
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
        className: "media"
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
        className: "media-body"
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("form", null, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("h4", null, 'Book Title'), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("input", {
        type: "text",
        onChange: this.handleTitle
      }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("h4", null, 'Your review'), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("input", {
        type: "text",
        onChange: this.handleBody
      }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
        className: "media-right align-self-center"
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("button", {
        onClick: this.postReview
      }, "Post review"))))))))), loading ? react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
        className: 'row text-center'
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("span", {
        className: "fa fa-spin fa-spinner fa-4x"
      })) : react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
        className: 'row'
      }, this.state.posts.map(function (post) {
        return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
          className: "col-md-10 offset-md-1 row-block",
          key: post.id
        }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("ul", {
          id: "sortable"
        }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
          className: "media"
        }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
          className: "media-body"
        }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("h4", null, post.title), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("p", null, post.body))))));
      })))));
    }
  }]);

  return Reviews;
}(react__WEBPACK_IMPORTED_MODULE_13__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Reviews);

/***/ })

},[["./assets/js/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Cb29rcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Ib21lLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Jldmlld3MuanMiXSwibmFtZXMiOlsiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiQm9va3MiLCJwcm9wcyIsInN0YXRlIiwiYm9va3MiLCJsb2FkaW5nIiwiYm9va1RpdGxlIiwiYm9va0F1dGhvciIsImJvb2tEZXNjcmlwdGlvbiIsImJvb2tVcmwiLCJoYW5kbGVUaXRsZSIsImJpbmQiLCJoYW5kbGVBdXRob3IiLCJoYW5kbGVEZXNjcmlwdGlvbiIsImhhbmRsZVVybCIsImluc2VydEJvb2siLCJnZXRCb29rcyIsImV2ZW50Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImF4aW9zIiwiZ2V0IiwidGhlbiIsImRhdGEiLCJwb3N0IiwibmFtZSIsImF1dGhvciIsImRlc2NyaXB0aW9uIiwiaW1hZ2VVUkwiLCJyZXNwb25zZSIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiY29uc29sZSIsImxvZyIsIm1hcCIsImJvb2siLCJpZCIsIkNvbXBvbmVudCIsIkhvbWUiLCJSZXZpZXdzIiwicG9zdHMiLCJwb3N0VGl0bGUiLCJwb3N0Qm9keSIsImhhbmRsZUJvZHkiLCJwb3N0UmV2aWV3IiwiZ2V0UG9zdHMiLCJ0aXRsZSIsImJvZHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLGdEQUFRLENBQUNDLE1B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QVo7QUFBbUIsZ0JBQVEsRUFBRSxLQUFLbUM7QUFBbEMsUUFKSixFQUtJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0k7QUFBUSxlQUFPLEVBQUUsS0FBS0M7QUFBdEIsdUJBREosQ0FMSixDQURKLENBREosQ0FESixDQURKLENBRFIsQ0FEUixDQUxKLEVBMkJLekMsT0FBTyxHQUNKO0FBQUssaUJBQVMsRUFBRTtBQUFoQixTQUNJO0FBQU0saUJBQVMsRUFBQztBQUFoQixRQURKLENBREksR0FPSjtBQUFLLGlCQUFTLEVBQUU7QUFBaEIsU0FDSyxLQUFLRixLQUFMLENBQVd1QyxLQUFYLENBQWlCTixHQUFqQixDQUFxQixVQUFBWCxJQUFJO0FBQUEsZUFDdEI7QUFBSyxtQkFBUyxFQUFDLGlDQUFmO0FBQWlELGFBQUcsRUFBRUEsSUFBSSxDQUFDYTtBQUEzRCxXQUNJO0FBQUksWUFBRSxFQUFDO0FBQVAsV0FDSSx3RUFDSTtBQUFLLG1CQUFTLEVBQUM7QUFBZixXQUNJO0FBQUssbUJBQVMsRUFBQztBQUFmLFdBQ0ksd0VBQUtiLElBQUksQ0FBQ3VCLEtBQVYsQ0FESixFQUVJLHVFQUFJdkIsSUFBSSxDQUFDd0IsSUFBVCxDQUZKLENBREosQ0FESixDQURKLENBREosQ0FEc0I7QUFBQSxPQUF6QixDQURMLENBbENSLENBREosQ0FESixDQURKO0FBMERIOzs7O0VBbkdpQlYsZ0Q7O0FBc0dQRSxzRUFBZixFIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgJy4uL2Nzcy9hcHAuY3NzJztcbmltcG9ydCBIb21lIGZyb20gJy4vY29tcG9uZW50cy9Ib21lJztcbiAgICBcblJlYWN0RE9NLnJlbmRlcig8Um91dGVyPjxIb21lIC8+PC9Sb3V0ZXI+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTsiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuICAgIFxyXG5jbGFzcyBCb29rcyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0geyBib29rczogW10sIGxvYWRpbmc6IHRydWUsIGJvb2tUaXRsZTogJycsIGJvb2tBdXRob3I6ICcnLCBib29rRGVzY3JpcHRpb246ICcnLCBib29rVXJsOiAnJ307XHJcbiAgICAgICAgdGhpcy5oYW5kbGVUaXRsZSA9IHRoaXMuaGFuZGxlVGl0bGUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZUF1dGhvciA9IHRoaXMuaGFuZGxlQXV0aG9yLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVEZXNjcmlwdGlvbiA9IHRoaXMuaGFuZGxlRGVzY3JpcHRpb24uYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVVybCA9IHRoaXMuaGFuZGxlVXJsLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5pbnNlcnRCb29rID0gdGhpcy5pbnNlcnRCb29rLmJpbmQodGhpcyk7XHJcbiAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5nZXRCb29rcygpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVRpdGxlKGV2ZW50KXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtib29rVGl0bGU6IGV2ZW50LnRhcmdldC52YWx1ZX0pXHJcbiAgICB9XHJcbiAgICBoYW5kbGVBdXRob3IoZXZlbnQpe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2Jvb2tBdXRob3I6IGV2ZW50LnRhcmdldC52YWx1ZX0pXHJcbiAgICB9XHJcbiAgICBoYW5kbGVEZXNjcmlwdGlvbihldmVudCl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Ym9va0Rlc2NyaXB0aW9uOiBldmVudC50YXJnZXQudmFsdWV9KVxyXG4gICAgfVxyXG4gICAgaGFuZGxlVXJsKGV2ZW50KXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtib29rVXJsOiBldmVudC50YXJnZXQudmFsdWV9KVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXRCb29rcygpIHtcclxuICAgICAgIGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9ib29rc2ApLnRoZW4oYm9va3MgPT4ge1xyXG4gICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBib29rczogYm9va3MuZGF0YSwgbG9hZGluZzogZmFsc2V9KVxyXG4gICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBpbnNlcnRCb29rKCl7XHJcbiAgICAgICAgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9pbnNlcnRfYm9va3MnLCB7XHJcbiAgICAgICAgICAgIG5hbWU6IHRoaXMuc3RhdGUuYm9va1RpdGxlLFxyXG4gICAgICAgICAgICBhdXRob3I6IHRoaXMuc3RhdGUuYm9va0F1dGhvcixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuc3RhdGUuYm9va0Rlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICBpbWFnZVVSTDogdGhpcy5zdGF0ZS5ib29rVXJsXHJcbiAgICAgICAgfSx7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xyXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2Upe1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaGlzIHNoaXQgZmluYWxseSB3b3JrZWQnKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgbG9hZGluZyA9IHRoaXMuc3RhdGUubG9hZGluZztcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyb3ctc2VjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj48c3Bhbj5MaXN0IG9mIGJvb2tzPC9zcGFuPjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMCBvZmZzZXQtbWQtMSByb3ctYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbWVkaWEnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtbGVmdCBhbGlnbi1zZWxmLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInJvdW5kZWQtY2lyY2xlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPSdodHRwczovL2VuY3J5cHRlZC10Ym4wLmdzdGF0aWMuY29tL2ltYWdlcz9xPXRibjpBTmQ5R2NTazZHMFAzcWlOTHhwaERfc2N5dmNpUnFoemZIdnhybzFfR2w1VFFWUnR6OVRrUkl6OScvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+Qm9vayB0aXRsZTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBvbkNoYW5nZT17dGhpcy5oYW5kbGVUaXRsZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+QXV0aG9yPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUF1dGhvcn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+RGVzY3JpcHRpb248L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRGVzY3JpcHRpb259Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PkJvb2sgaW1hZ2UgVVJMPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVybH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtcmlnaHQgYWxpZ24tc2VsZi1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiIG9uQ2xpY2s9e3RoaXMuaW5zZXJ0Qm9va30+QWRkIEJvb2s8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtsb2FkaW5nID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydyb3cgdGV4dC1jZW50ZXInfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYSBmYS1zcGluIGZhLXNwaW5uZXIgZmEtNHhcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsncm93J30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0aGlzLnN0YXRlLmJvb2tzLm1hcChib29rID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEwIG9mZnNldC1tZC0xIHJvdy1ibG9ja1wiIGtleT17Ym9vay5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgaWQ9XCJzb3J0YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1sZWZ0IGFsaWduLXNlbGYtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJyb3VuZGVkLWNpcmNsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Jvb2suaW1hZ2VVUkx9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0Pntib29rLm5hbWV9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+e2Jvb2suYXV0aG9yfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2Jvb2suZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBCb29rczsiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtSb3V0ZSwgU3dpdGNoLFJlZGlyZWN0LCBMaW5rLCB3aXRoUm91dGVyfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IEJvb2tzIGZyb20gJy4vQm9va3MnO1xyXG5pbXBvcnQgUmV2aWV3cyBmcm9tICcuL1Jldmlld3MnO1xyXG4gICAgXHJcbmNsYXNzIEhvbWUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kLWxnIG5hdmJhci1kYXJrIGJnLWRhcmtcIj5cclxuICAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT17XCJuYXZiYXItYnJhbmRcIn0gdG89e1wiL1wifT4gU3ltZm9ueSBSZWFjdCBQcm9qZWN0IDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJuYXZiYXJUZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbXItYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT17XCJuYXYtbGlua1wifSB0bz17XCIvcmV2aWV3c1wifT4gUmV2aWV3cyA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9e1wibmF2LWxpbmtcIn0gdG89e1wiL2Jvb2tzXCJ9PiBCb29rcyA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgICAgPFN3aXRjaD5cclxuICAgICAgICAgICAgICAgICAgIDxSZWRpcmVjdCBleGFjdCBmcm9tPVwiL1wiIHRvPVwiL2Jvb2tzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2Jvb2tzXCIgY29tcG9uZW50PXtCb29rc30gLz5cclxuICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3Jldmlld3NcIiBjb21wb25lbnQ9e1Jldmlld3N9IC8+XHJcbiAgICAgICAgICAgICAgIDwvU3dpdGNoPlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG4gICAgXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbiAgICBcclxuICAgIFxyXG5jbGFzcyBSZXZpZXdzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IHBvc3RzOiBbXSwgbG9hZGluZzogdHJ1ZSwgcG9zdFRpdGxlOiAnJywgcG9zdEJvZHk6ICcnfVxyXG4gICAgICAgIHRoaXMuaGFuZGxlVGl0bGUgPSB0aGlzLmhhbmRsZVRpdGxlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVCb2R5ID0gdGhpcy5oYW5kbGVCb2R5LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5wb3N0UmV2aWV3ID0gdGhpcy5wb3N0UmV2aWV3LmJpbmQodGhpcyk7XHJcblxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLmdldFBvc3RzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UG9zdHMoKSB7XHJcbiAgICAgICAgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3Jldmlld3NgKS50aGVuKHBvc3RzID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBvc3RzOiBwb3N0cy5kYXRhLCBsb2FkaW5nOiBmYWxzZX0pXHJcbiAgICAgICAgfSlcclxuICAgICB9XHJcblxyXG4gICAgcG9zdFJldmlldygpe1xyXG4gICAgICAgIGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvcG9zdF9yZXZpZXcnLCB7XHJcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLnN0YXRlLnBvc3RUaXRsZSxcclxuICAgICAgICAgICAgYm9keTogdGhpcy5zdGF0ZS5wb3N0Qm9keVxyXG4gICAgICAgIH0se1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcclxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKXtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVGhpcyBzaGl0IGZpbmFsbHkgd29ya2VkJylcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVUaXRsZShldmVudCl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cG9zdFRpdGxlOiBldmVudC50YXJnZXQudmFsdWV9KVxyXG4gICAgfVxyXG4gICAgaGFuZGxlQm9keShldmVudCl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cG9zdEJvZHk6IGV2ZW50LnRhcmdldC52YWx1ZX0pXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCBsb2FkaW5nID0gdGhpcy5zdGF0ZS5sb2FkaW5nO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyb3ctc2VjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj48c3Bhbj5MaXN0IG9mIHJldmlld3M8L3NwYW4+PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3Jvdyd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEwIG9mZnNldC1tZC0xIHJvdy1ibG9ja1wiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBpZD1cInNvcnRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PnsnQm9vayBUaXRsZSd9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVRpdGxlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND57J1lvdXIgcmV2aWV3J308L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQm9keX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLXJpZ2h0IGFsaWduLXNlbGYtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMucG9zdFJldmlld30+UG9zdCByZXZpZXc8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtsb2FkaW5nID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydyb3cgdGV4dC1jZW50ZXInfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYSBmYS1zcGluIGZhLXNwaW5uZXIgZmEtNHhcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3Jvdyd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnBvc3RzLm1hcChwb3N0ID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEwIG9mZnNldC1tZC0xIHJvdy1ibG9ja1wiIGtleT17cG9zdC5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgaWQ9XCJzb3J0YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0Pntwb3N0LnRpdGxlfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3Bvc3QuYm9keX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbiAgICBcclxuZXhwb3J0IGRlZmF1bHQgUmV2aWV3czsiXSwic291cmNlUm9vdCI6IiJ9