module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/@babel/runtime/helpers/defineProperty.js":
/*!**************************************************************************************************************!*\
  !*** C:/WebDEV/C O U R S E S/ecommerce-wesbos/backend/node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/extends.js":
/*!*******************************************************************************************************!*\
  !*** C:/WebDEV/C O U R S E S/ecommerce-wesbos/backend/node_modules/@babel/runtime/helpers/extends.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/objectSpread2.js":
/*!*************************************************************************************************************!*\
  !*** C:/WebDEV/C O U R S E S/ecommerce-wesbos/backend/node_modules/@babel/runtime/helpers/objectSpread2.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./defineProperty */ "../../node_modules/@babel/runtime/helpers/defineProperty.js");

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

module.exports = _objectSpread2;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
/*!***********************************************************************************************************************!*\
  !*** C:/WebDEV/C O U R S E S/ecommerce-wesbos/backend/node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "../../node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!****************************************************************************************************************************!*\
  !*** C:/WebDEV/C O U R S E S/ecommerce-wesbos/backend/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/toPrimitive.js":
/*!***********************************************************************************************************!*\
  !*** C:/WebDEV/C O U R S E S/ecommerce-wesbos/backend/node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../../node_modules/@babel/runtime/helpers/typeof.js");

function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];

  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }

  return (hint === "string" ? String : Number)(input);
}

module.exports = _toPrimitive;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/toPropertyKey.js":
/*!*************************************************************************************************************!*\
  !*** C:/WebDEV/C O U R S E S/ecommerce-wesbos/backend/node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../../node_modules/@babel/runtime/helpers/typeof.js");

var toPrimitive = __webpack_require__(/*! ./toPrimitive */ "../../node_modules/@babel/runtime/helpers/toPrimitive.js");

function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}

module.exports = _toPropertyKey;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/typeof.js":
/*!******************************************************************************************************!*\
  !*** C:/WebDEV/C O U R S E S/ecommerce-wesbos/backend/node_modules/@babel/runtime/helpers/typeof.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "../../node_modules/@keystone-next/cloudinary/views/dist/cloudinary.cjs.dev.js":
/*!********************************************************************************************************************************!*\
  !*** C:/WebDEV/C O U R S E S/ecommerce-wesbos/backend/node_modules/@keystone-next/cloudinary/views/dist/cloudinary.cjs.dev.js ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var core = __webpack_require__(/*! @keystone-ui/core */ "@keystone-ui/core");
var _extends = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../../node_modules/@babel/runtime/helpers/extends.js");
var react = __webpack_require__(/*! react */ "react");
var fields = __webpack_require__(/*! @keystone-ui/fields */ "@keystone-ui/fields");
var pill = __webpack_require__(/*! @keystone-ui/pill */ "@keystone-ui/pill");
var button = __webpack_require__(/*! @keystone-ui/button */ "@keystone-ui/button");

function useObjectURL(fileData) {
  let [objectURL, setObjectURL] = react.useState(undefined);
  react.useEffect(() => {
    if (fileData) {
      let url = URL.createObjectURL(fileData);
      setObjectURL(url);
      return () => {
        URL.revokeObjectURL(url);
      };
    }
  }, [fileData]);
  return objectURL;
}

function Field({
  autoFocus,
  field,
  value,
  onChange
}) {
  const inputRef = react.useRef(null);
  const errorMessage = value.kind === 'upload' ? validateImage(value.data) : undefined;
  const imagePathFromUpload = useObjectURL(errorMessage === undefined && value.kind === 'upload' ? value.data.file : undefined);
  const imagePath = value.kind === 'from-server' ? value.data.publicUrlTransformed : imagePathFromUpload; // Generate a random input key when the value changes, to ensure the file input is unmounted and
  // remounted (this is the only way to reset its value and ensure onChange will fire again if
  // the user selects the same file again)

  const inputKey = react.useMemo(() => Math.random(), [value]);
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), value.kind === 'from-server' || value.kind === 'upload' ? core.jsx(core.Stack, {
    gap: "small"
  }, imagePath && errorMessage === undefined && core.jsx(Image, {
    src: imagePath,
    alt: field.path
  }), onChange && core.jsx(core.Stack, {
    across: true,
    gap: "small",
    align: "center"
  }, core.jsx(button.Button, {
    size: "small",
    onClick: () => {
      var _inputRef$current;

      (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.click();
    }
  }, "Change image"), value.kind === 'from-server' && core.jsx(button.Button, {
    size: "small",
    tone: "negative",
    onClick: () => {
      onChange({
        kind: 'remove',
        previous: value
      });
    }
  }, "Remove"), value.kind === 'upload' && core.jsx(button.Button, {
    size: "small",
    tone: "negative",
    onClick: () => {
      onChange(value.previous);
    }
  }, "Cancel"), errorMessage ? core.jsx(pill.Pill, {
    tone: "negative",
    weight: "light"
  }, errorMessage) : value.kind === 'upload' && core.jsx(pill.Pill, {
    weight: "light",
    tone: "positive"
  }, "Save to upload this image"))) : core.jsx(core.Stack, {
    css: {
      alignItems: 'center'
    },
    gap: "small",
    across: true
  }, core.jsx(button.Button, {
    size: "small",
    disabled: onChange === undefined,
    onClick: () => {
      var _inputRef$current2;

      (_inputRef$current2 = inputRef.current) === null || _inputRef$current2 === void 0 ? void 0 : _inputRef$current2.click();
    }
  }, "Upload Image"), value.kind === 'remove' && core.jsx(button.Button, {
    size: "small",
    tone: "negative",
    onClick: () => {
      onChange === null || onChange === void 0 ? void 0 : onChange(value.previous);
    }
  }, "Undo removal"), value.kind === 'remove' && // NOTE -- UX decision is to not display this, I think it would only be relevant
  // for deleting uploaded images (and we don't support that yet)
  // <Pill weight="light" tone="warning">
  //   Save to remove this image
  // </Pill>
  null), core.jsx("input", {
    css: {
      display: 'none'
    },
    autoComplete: "off",
    autoFocus: autoFocus,
    ref: inputRef,
    key: inputKey,
    name: field.path,
    onChange: ({
      target: {
        validity,
        files
      }
    }) => {
      const file = files === null || files === void 0 ? void 0 : files[0];
      if (!file) return; // bail if the user cancels from the file browser

      onChange === null || onChange === void 0 ? void 0 : onChange({
        kind: 'upload',
        data: {
          file,
          validity
        },
        previous: value
      });
    },
    type: "file",
    disabled: onChange === undefined
  }));
}
function validateImage({
  file,
  validity
}) {
  if (!validity.valid) {
    return 'Something went wrong, please reload and try again.';
  } // check if the file is actually an image


  if (!file.type.includes('image')) {
    return 'Only image files are allowed. Please try again.';
  }
} // ==============================
// Styled Components
// ==============================

const Image = props => {
  const theme = core.useTheme();
  return core.jsx("div", {
    css: {
      backgroundColor: 'white',
      borderRadius: theme.radii.medium,
      border: `1px solid ${theme.colors.border}`,
      flexShrink: 0,
      lineHeight: 0,
      padding: 4,
      position: 'relative',
      textAlign: 'center',
      width: 130 // 120px image + chrome

    }
  }, core.jsx("img", _extends({
    css: {
      height: 'auto',
      maxWidth: '100%'
    }
  }, props)));
};

/* @jsx jsx */
const Cell = ({
  item,
  field
}) => {
  const data = item[field.path];
  if (!data) return null;
  return core.jsx("div", {
    css: {
      alignItems: 'center',
      display: 'flex',
      height: 24,
      lineHeight: 0,
      width: 24
    }
  }, core.jsx("img", {
    alt: data.filename,
    css: {
      maxHeight: '100%',
      maxWidth: '100%'
    },
    src: data.publicUrlTransformed
  }));
};
const CardValue = ({
  item,
  field
}) => {
  const data = item[field.path];
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), data && core.jsx("img", {
    alt: data.filename,
    src: data.publicUrlTransformed
  }));
};
const controller = config => {
  return {
    path: config.path,
    label: config.label,
    graphqlSelection: `${config.path} {
        id
        filename
        publicUrlTransformed(transformation: { width: "120" crop: "limit" })
      }`,
    defaultValue: {
      kind: 'empty'
    },

    deserialize(item) {
      const value = item[config.path];
      if (!value) return {
        kind: 'empty'
      };
      return {
        kind: 'from-server',
        data: value
      };
    },

    validate(value) {
      return value.kind !== 'upload' || validateImage(value.data) === undefined;
    },

    serialize(value) {
      if (value.kind === 'upload') {
        return {
          [config.path]: value.data.file
        };
      }

      if (value.kind === 'remove') {
        return {
          [config.path]: null
        };
      }

      return {};
    }

  };
};

exports.CardValue = CardValue;
exports.Cell = Cell;
exports.Field = Field;
exports.controller = controller;


/***/ }),

/***/ "../../node_modules/@keystone-next/cloudinary/views/dist/cloudinary.cjs.js":
/*!****************************************************************************************************************************!*\
  !*** C:/WebDEV/C O U R S E S/ecommerce-wesbos/backend/node_modules/@keystone-next/cloudinary/views/dist/cloudinary.cjs.js ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cloudinary.cjs.dev.js */ "../../node_modules/@keystone-next/cloudinary/views/dist/cloudinary.cjs.dev.js");
}


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/checkbox/views/dist/fields.cjs.dev.js":
/*!***************************************************************************************************************************************!*\
  !*** C:/WebDEV/C O U R S E S/ecommerce-wesbos/backend/node_modules/@keystone-next/fields/types/checkbox/views/dist/fields.cjs.dev.js ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var components = __webpack_require__(/*! @keystone-next/admin-ui/components */ "@keystone-next/admin-ui/components");
var core = __webpack_require__(/*! @keystone-ui/core */ "@keystone-ui/core");
var fields = __webpack_require__(/*! @keystone-ui/fields */ "@keystone-ui/fields");

/* @jsx jsx */
const Field = ({
  field,
  value,
  onChange,
  autoFocus
}) => {
  const {
    fields: fields$1,
    typography
  } = core.useTheme();
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.Checkbox, {
    autoFocus: autoFocus,
    disabled: onChange === undefined,
    onChange: event => {
      onChange === null || onChange === void 0 ? void 0 : onChange(event.target.checked);
    },
    checked: value
  }, core.jsx("span", {
    css: {
      fontWeight: typography.fontWeight.semibold,
      color: fields$1.labelColor
    }
  }, field.label)));
};
const Cell = ({
  item,
  field
}) => {
  const value = !!item[field.path];
  return core.jsx(components.CellContainer, null, core.jsx(fields.Checkbox, {
    disabled: true,
    checked: value,
    size: "small"
  }, core.jsx("span", {
    css: {}
  }, value ? 'True' : 'False')));
};
const CardValue = ({
  item,
  field
}) => {
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), item[field.path] + '');
};
const controller = config => {
  return {
    path: config.path,
    label: config.label,
    graphqlSelection: config.path,
    defaultValue: false,

    deserialize(item) {
      const value = item[config.path];
      return typeof value === 'boolean' ? value : false;
    },

    serialize(value) {
      return {
        [config.path]: value
      };
    },

    filter: {
      Filter() {
        return null;
      },

      graphql({
        type,
        value
      }) {
        const key = type === 'is' ? `${config.path}` : `${config.path}_${type}`;
        return {
          [key]: value
        };
      },

      Label({
        label
      }) {
        return label.toLowerCase();
      },

      types: {
        is: {
          label: 'is',
          initialValue: true
        },
        not: {
          label: 'is not',
          initialValue: true
        }
      }
    }
  };
};

exports.CardValue = CardValue;
exports.Cell = Cell;
exports.Field = Field;
exports.controller = controller;


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/checkbox/views/dist/fields.cjs.js":
/*!***********************************************************************************************************************************!*\
  !*** C:/WebDEV/C O U R S E S/ecommerce-wesbos/backend/node_modules/@keystone-next/fields/types/checkbox/views/dist/fields.cjs.js ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./fields.cjs.dev.js */ "../../node_modules/@keystone-next/fields/types/checkbox/views/dist/fields.cjs.dev.js");
}


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/integer/views/dist/fields.cjs.dev.js":
/*!**************************************************************************************************************************************!*\
  !*** C:/WebDEV/C O U R S E S/ecommerce-wesbos/backend/node_modules/@keystone-next/fields/types/integer/views/dist/fields.cjs.dev.js ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var core = __webpack_require__(/*! @keystone-ui/core */ "@keystone-ui/core");
var fields = __webpack_require__(/*! @keystone-ui/fields */ "@keystone-ui/fields");
var components = __webpack_require__(/*! @keystone-next/admin-ui/components */ "@keystone-next/admin-ui/components");

/* @jsx jsx */
const Field = ({
  field,
  value,
  onChange,
  autoFocus
}) => core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), onChange ? core.jsx(fields.TextInput, {
  autoFocus: autoFocus,
  type: "number",
  onChange: event => {
    onChange(event.target.value.replace(/\D/g, ''));
  },
  value: value
}) : value);
const Cell = ({
  item,
  field,
  linkTo
}) => {
  let value = item[field.path] + '';
  return linkTo ? core.jsx(components.CellLink, linkTo, value) : core.jsx(components.CellContainer, null, value);
};
Cell.supportsLinkTo = true;
const CardValue = ({
  item,
  field
}) => {
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), item[field.path]);
};
const controller = config => {
  return {
    path: config.path,
    label: config.label,
    graphqlSelection: config.path,
    defaultValue: '',
    deserialize: data => {
      const value = data[config.path];
      return typeof value === 'number' ? value + '' : '';
    },
    serialize: value => ({
      [config.path]: value === '' ? null : parseInt(value, 10)
    }),
    filter: {
      Filter(props) {
        return core.jsx(fields.TextInput, {
          type: "number",
          onChange: event => {
            props.onChange(event.target.value.replace(/[^\d,\s]/g, ''));
          },
          value: props.value,
          autoFocus: props.autoFocus
        });
      },

      graphql: ({
        type,
        value
      }) => {
        const key = type === 'is' ? config.path : `${config.path}_${type}`;
        const valueWithoutWhitespace = value.replace(/\s/g, '');
        return {
          [key]: ['in', 'not_in'].includes(type) ? valueWithoutWhitespace.split(',').map(i => parseInt(i)) : parseInt(valueWithoutWhitespace)
        };
      },

      Label({
        label,
        value,
        type
      }) {
        let renderedValue = value;

        if (['in', 'not_in'].includes(type)) {
          renderedValue = value.split(',').map(value => value.trim()).join(', ');
        }

        return `${label.toLowerCase()}: ${renderedValue}`;
      },

      types: {
        is: {
          label: 'Is exactly',
          initialValue: ''
        },
        not: {
          label: 'Is not exactly',
          initialValue: ''
        },
        gt: {
          label: 'Is greater than',
          initialValue: ''
        },
        lt: {
          label: 'Is less than',
          initialValue: ''
        },
        gte: {
          label: 'Is greater than or equal to',
          initialValue: ''
        },
        lte: {
          label: 'Is less than or equal to',
          initialValue: ''
        },
        in: {
          label: 'Is one of',
          initialValue: ''
        },
        not_in: {
          label: 'Is not one of',
          initialValue: ''
        }
      }
    }
  };
};

exports.CardValue = CardValue;
exports.Cell = Cell;
exports.Field = Field;
exports.controller = controller;


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/integer/views/dist/fields.cjs.js":
/*!**********************************************************************************************************************************!*\
  !*** C:/WebDEV/C O U R S E S/ecommerce-wesbos/backend/node_modules/@keystone-next/fields/types/integer/views/dist/fields.cjs.js ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./fields.cjs.dev.js */ "../../node_modules/@keystone-next/fields/types/integer/views/dist/fields.cjs.dev.js");
}


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/mongoId/views/dist/fields.cjs.dev.js":
/*!**************************************************************************************************************************************!*\
  !*** C:/WebDEV/C O U R S E S/ecommerce-wesbos/backend/node_modules/@keystone-next/fields/types/mongoId/views/dist/fields.cjs.dev.js ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var core = __webpack_require__(/*! @keystone-ui/core */ "@keystone-ui/core");
var fields = __webpack_require__(/*! @keystone-ui/fields */ "@keystone-ui/fields");
var types_text_views_dist_fields = __webpack_require__(/*! ../../../text/views/dist/fields.cjs.dev.js */ "../../node_modules/@keystone-next/fields/types/text/views/dist/fields.cjs.dev.js");
__webpack_require__(/*! @keystone-next/admin-ui/components */ "@keystone-next/admin-ui/components");

/* @jsx jsx */
const controller = config => {
  return {
    path: config.path,
    label: config.label,
    graphqlSelection: config.path,
    defaultValue: '',

    deserialize(item) {
      const value = item[config.path];
      return typeof value === 'string' ? value : '';
    },

    serialize(value) {
      return {
        [config.path]: value
      };
    },

    filter: {
      Filter(props) {
        return core.jsx(fields.TextInput, {
          onChange: event => {
            props.onChange(event.target.value);
          },
          value: props.value,
          autoFocus: true
        });
      },

      graphql({
        type,
        value
      }) {
        switch (type) {
          case 'is':
            {
              return {
                [config.path]: value
              };
            }

          case 'not':
            {
              return {
                [`${config.path}_not`]: value
              };
            }

          case 'in':
            {
              return {
                [`${config.path}_in`]: value.split(',').map(value => value.trim())
              };
            }

          case 'not_in':
            {
              return {
                [`${config.path}_not_in`]: value.split(',').map(value => value.trim())
              };
            }
        }

        return {};
      },

      Label({
        label,
        type,
        value
      }) {
        let renderedValue = value;

        if (['in', 'not_in'].includes(type)) {
          renderedValue = value.split(',').map(value => value.trim()).join(', ');
        }

        return `${label.toLowerCase()}: ${renderedValue}`;
      },

      types: {
        is: {
          label: 'Is exactly',
          initialValue: ''
        },
        not: {
          label: 'Is not',
          initialValue: ''
        },
        in: {
          label: 'Is one of',
          initialValue: ''
        },
        not_in: {
          label: 'Is not one of',
          initialValue: ''
        }
      }
    }
  };
};

exports.CardValue = types_text_views_dist_fields.CardValue;
exports.Cell = types_text_views_dist_fields.Cell;
exports.Field = types_text_views_dist_fields.Field;
exports.controller = controller;


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/mongoId/views/dist/fields.cjs.js":
/*!**********************************************************************************************************************************!*\
  !*** C:/WebDEV/C O U R S E S/ecommerce-wesbos/backend/node_modules/@keystone-next/fields/types/mongoId/views/dist/fields.cjs.js ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./fields.cjs.dev.js */ "../../node_modules/@keystone-next/fields/types/mongoId/views/dist/fields.cjs.dev.js");
}


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/password/views/dist/fields.cjs.dev.js":
/*!***************************************************************************************************************************************!*\
  !*** C:/WebDEV/C O U R S E S/ecommerce-wesbos/backend/node_modules/@keystone-next/fields/types/password/views/dist/fields.cjs.dev.js ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var _objectSpread = __webpack_require__(/*! @babel/runtime/helpers/objectSpread2 */ "../../node_modules/@babel/runtime/helpers/objectSpread2.js");
var React = __webpack_require__(/*! react */ "react");
var components = __webpack_require__(/*! @keystone-next/admin-ui/components */ "@keystone-next/admin-ui/components");
var button = __webpack_require__(/*! @keystone-ui/button */ "@keystone-ui/button");
var core = __webpack_require__(/*! @keystone-ui/core */ "@keystone-ui/core");
var fields = __webpack_require__(/*! @keystone-ui/fields */ "@keystone-ui/fields");
var EyeIcon = __webpack_require__(/*! @keystone-ui/icons/icons/EyeIcon */ "@keystone-ui/icons/icons/EyeIcon");
var EyeOffIcon = __webpack_require__(/*! @keystone-ui/icons/icons/EyeOffIcon */ "@keystone-ui/icons/icons/EyeOffIcon");
var XIcon = __webpack_require__(/*! @keystone-ui/icons/icons/XIcon */ "@keystone-ui/icons/icons/XIcon");
var segmentedControl = __webpack_require__(/*! @keystone-ui/segmented-control */ "@keystone-ui/segmented-control");

const Field = ({
  field,
  value,
  onChange,
  forceValidation,
  autoFocus
}) => {
  const [showInputValue, setShowInputValue] = React.useState(false);
  const [touchedFirstInput, setTouchedFirstInput] = React.useState(false);
  const [touchedSecondInput, setTouchedSecondInput] = React.useState(false);
  const shouldShowValidation = forceValidation || touchedFirstInput && touchedSecondInput;
  const validation = shouldShowValidation && value.kind === 'editing' ? value.value === value.confirm ? value.value.length >= field.minLength ? undefined : `The password must be at least ${field.minLength} characters long` : 'The passwords do not match' : undefined;
  const inputType = showInputValue ? 'text' : 'password';
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), onChange === undefined ? value.isSet ? 'Password is set' : 'Password is not set' : value.kind === 'initial' ? core.jsx(button.Button, {
    autoFocus: autoFocus,
    onClick: () => {
      onChange({
        kind: 'editing',
        confirm: '',
        value: '',
        isSet: value.isSet
      });
    }
  }, value.isSet ? 'Change Password' : 'Set Password') : core.jsx(core.Stack, {
    gap: "small"
  }, core.jsx("div", {
    css: {
      display: 'flex'
    }
  }, core.jsx(fields.TextInput, {
    autoFocus: true,
    invalid: validation !== undefined,
    type: inputType,
    value: value.value,
    placeholder: "New Password",
    onChange: event => {
      onChange(_objectSpread(_objectSpread({}, value), {}, {
        value: event.target.value
      }));
    },
    onBlur: () => {
      setTouchedFirstInput(true);
    }
  }), core.jsx(Spacer, null), core.jsx(fields.TextInput, {
    invalid: validation !== undefined,
    type: inputType,
    value: value.confirm,
    placeholder: "Confirm Password",
    onChange: event => {
      onChange(_objectSpread(_objectSpread({}, value), {}, {
        confirm: event.target.value
      }));
    },
    onBlur: () => {
      setTouchedSecondInput(true);
    }
  }), core.jsx(Spacer, null), core.jsx(button.Button, {
    onClick: () => {
      setShowInputValue(!showInputValue);
    }
  }, core.jsx(core.VisuallyHidden, null, showInputValue ? 'Hide Text' : 'Show Text'), showInputValue ? core.jsx(EyeOffIcon.EyeOffIcon, null) : core.jsx(EyeIcon.EyeIcon, null)), core.jsx(Spacer, null), core.jsx(button.Button, {
    onClick: () => {
      onChange({
        kind: 'initial',
        isSet: value.isSet
      });
    }
  }, core.jsx(core.VisuallyHidden, null, "Cancel"), core.jsx(XIcon.XIcon, null))), validation && core.jsx(core.Text, {
    color: "red600",
    size: "small"
  }, validation)));
};
const Cell = ({
  item,
  field
}) => {
  return core.jsx(components.CellContainer, null, item[`${field.path}_is_set`] ? 'Is set' : 'Is not set');
};
const CardValue = ({
  item,
  field
}) => {
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), item[`${field.path}_is_set`] ? 'Is set' : 'Is not set');
};
const controller = config => {
  return {
    path: config.path,
    label: config.label,
    graphqlSelection: `${config.path}_is_set`,
    minLength: config.fieldMeta.minLength,
    defaultValue: {
      kind: 'initial',
      isSet: null
    },

    validate(state) {
      return state.kind === 'initial' || state.value === state.confirm && state.value.length >= config.fieldMeta.minLength;
    },

    deserialize: data => ({
      kind: 'initial',
      isSet: data[`${config.path}_is_set`]
    }),
    serialize: value => {
      if (value.kind === 'initial') return {};
      return {
        [config.path]: value.value
      };
    },
    filter: {
      Filter(props) {
        return core.jsx(segmentedControl.SegmentedControl, {
          selectedIndex: Number(props.value),
          onChange: value => {
            props.onChange(!!value);
          },
          segments: ['Is Not Set', 'Is Set']
        });
      },

      graphql: ({
        type,
        value
      }) => {
        return {
          [`${config.path}_${type}`]: value
        };
      },

      Label({
        value
      }) {
        return value ? 'is set' : 'is not set';
      },

      types: {
        is_set: {
          label: 'Is Set',
          initialValue: true
        }
      }
    }
  };
};

const Spacer = () => {
  const {
    spacing
  } = core.useTheme();
  return core.jsx("div", {
    css: {
      width: spacing.small,
      flexShrink: 0
    }
  });
};

exports.CardValue = CardValue;
exports.Cell = Cell;
exports.Field = Field;
exports.controller = controller;


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/password/views/dist/fields.cjs.js":
/*!***********************************************************************************************************************************!*\
  !*** C:/WebDEV/C O U R S E S/ecommerce-wesbos/backend/node_modules/@keystone-next/fields/types/password/views/dist/fields.cjs.js ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./fields.cjs.dev.js */ "../../node_modules/@keystone-next/fields/types/password/views/dist/fields.cjs.dev.js");
}


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/relationship/views/RelationshipSelect/dist/fields.cjs.dev.js":
/*!**************************************************************************************************************************************************************!*\
  !*** C:/WebDEV/C O U R S E S/ecommerce-wesbos/backend/node_modules/@keystone-next/fields/types/relationship/views/RelationshipSelect/dist/fields.cjs.dev.js ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var _toPropertyKey = __webpack_require__(/*! @babel/runtime/helpers/toPropertyKey */ "../../node_modules/@babel/runtime/helpers/toPropertyKey.js");
var _objectWithoutProperties = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
__webpack_require__(/*! intersection-observer */ "intersection-observer");
var React = __webpack_require__(/*! react */ "react");
var apollo = __webpack_require__(/*! @keystone-next/admin-ui/apollo */ "@keystone-next/admin-ui/apollo");
var core = __webpack_require__(/*! @keystone-ui/core */ "@keystone-ui/core");
var fields = __webpack_require__(/*! @keystone-ui/fields */ "@keystone-ui/fields");

function useIntersectionObserver(cb, ref) {
  React.useEffect(() => {
    let observer = new IntersectionObserver(cb, {});
    let node = ref.current;

    if (node !== null) {
      observer.observe(node);
      return () => observer.unobserve(node);
    }
  });
}

const initialItemsToLoad = 10;
const subsequentItemsToLoad = 50;
const idField = '____id____';
const labelField = '____label____';
const RelationshipSelect = ({
  autoFocus,
  controlShouldRenderValue,
  isDisabled,
  isLoading,
  list,
  placeholder,
  state,
  extraSelection = ''
}) => {
  var _data$items;

  const [search, setSearch] = React.useState('');
  const QUERY = apollo.gql`
    query RelationshipSelect($search: String!, $first: Int!, $skip: Int!) {
      items: ${list.gqlNames.listQueryName}(search: $search, first: $first, skip: $skip) {
        ${idField}: id
        ${labelField}: ${list.labelField}
        ${extraSelection}
      }

      meta: ${list.gqlNames.listQueryMetaName}(search: $search) {
        count
      }
    }
  `;
  const {
    data,
    error,
    loading,
    fetchMore
  } = apollo.useQuery(QUERY, {
    fetchPolicy: 'network-only',
    variables: {
      search,
      first: initialItemsToLoad,
      skip: 0
    }
  });
  const count = (data === null || data === void 0 ? void 0 : data.meta.count) || 0;
  const relationshipSelectComponents = React.useMemo(() => ({
    MenuList: (_ref) => {
      let {
        children
      } = _ref,
          props = _objectWithoutProperties(_ref, ["children"]);

      const loadingRef = React.useRef(null);
      const QUERY = apollo.gql`
            query RelationshipSelectMore($search: String!, $first: Int!, $skip: Int!) {
              items: ${list.gqlNames.listQueryName}(search: $search, first: $first, skip: $skip) {
                ${labelField}: ${list.labelField}
                ${idField}: id
                ${extraSelection}
              }
            }
          `;
      useIntersectionObserver(([{
        isIntersecting
      }]) => {
        if (!props.selectProps.isLoading && isIntersecting && props.options.length < count) {
          fetchMore({
            query: QUERY,
            variables: {
              search,
              first: subsequentItemsToLoad,
              skip: props.options.length
            },
            updateQuery: (prev, {
              fetchMoreResult
            }) => {
              if (!fetchMoreResult) return prev;
              return {
                meta: prev.meta,
                items: [...prev.items, ...fetchMoreResult.items]
              };
            }
          });
        }
      }, loadingRef);
      return core.jsx(fields.selectComponents.MenuList, props, children, core.jsx("div", {
        css: {
          textAlign: 'center'
        },
        ref: loadingRef
      }, props.options.length < count && core.jsx("span", {
        css: {
          padding: 8
        }
      }, "Loading...")));
    }
  }), [count, list.gqlNames.listQueryName]); // TODO: better error UI
  // TODO: Handle permission errors
  // (ie; user has permission to read this relationship field, but
  // not the related list, or some items on the list)

  if (error) {
    return core.jsx("span", null, "Error");
  }

  const options = (data === null || data === void 0 ? void 0 : (_data$items = data.items) === null || _data$items === void 0 ? void 0 : _data$items.map((_ref2) => {
    let {
      [idField]: value,
      [labelField]: label
    } = _ref2,
        data = _objectWithoutProperties(_ref2, [idField, labelField].map(_toPropertyKey));

    return {
      value,
      label: label || value,
      data
    };
  })) || [];

  if (state.kind === 'one') {
    return core.jsx(fields.Select // this is necessary because react-select passes a second argument to onInputChange
    // and useState setters log a warning if a second argument is passed
    , {
      onInputChange: val => setSearch(val),
      isLoading: loading || isLoading,
      autoFocus: autoFocus,
      components: relationshipSelectComponents,
      portalMenu: true,
      value: state.value ? {
        value: state.value.id,
        label: state.value.label,
        // @ts-ignore
        data: state.value.data
      } : null,
      options: options,
      onChange: value => {
        state.onChange(value ? {
          id: value.value,
          label: value.label,
          data: value.data
        } : null);
      },
      placeholder: placeholder,
      controlShouldRenderValue: controlShouldRenderValue,
      isClearable: controlShouldRenderValue,
      isDisabled: isDisabled
    });
  }

  return core.jsx(fields.MultiSelect // this is necessary because react-select passes a second argument to onInputChange
  // and useState setters log a warning if a second argument is passed
  , {
    onInputChange: val => setSearch(val),
    isLoading: loading || isLoading,
    autoFocus: autoFocus,
    components: relationshipSelectComponents,
    portalMenu: true,
    value: state.value.map(value => ({
      value: value.id,
      label: value.label,
      data: value.data
    })),
    options: options,
    onChange: value => {
      state.onChange(value.map(x => ({
        id: x.value,
        label: x.label,
        data: x.data
      })));
    },
    placeholder: placeholder,
    controlShouldRenderValue: controlShouldRenderValue,
    isClearable: controlShouldRenderValue,
    isDisabled: isDisabled
  });
};

exports.RelationshipSelect = RelationshipSelect;


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/relationship/views/dist/fields.cjs.dev.js":
/*!*******************************************************************************************************************************************!*\
  !*** C:/WebDEV/C O U R S E S/ecommerce-wesbos/backend/node_modules/@keystone-next/fields/types/relationship/views/dist/fields.cjs.dev.js ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var _objectSpread = __webpack_require__(/*! @babel/runtime/helpers/objectSpread2 */ "../../node_modules/@babel/runtime/helpers/objectSpread2.js");
var _extends = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../../node_modules/@babel/runtime/helpers/extends.js");
var React = __webpack_require__(/*! react */ "react");
var components = __webpack_require__(/*! @keystone-next/admin-ui/components */ "@keystone-next/admin-ui/components");
var context = __webpack_require__(/*! @keystone-next/admin-ui/context */ "@keystone-next/admin-ui/context");
var router = __webpack_require__(/*! @keystone-next/admin-ui/router */ "@keystone-next/admin-ui/router");
var button = __webpack_require__(/*! @keystone-ui/button */ "@keystone-ui/button");
var core = __webpack_require__(/*! @keystone-ui/core */ "@keystone-ui/core");
var fields = __webpack_require__(/*! @keystone-ui/fields */ "@keystone-ui/fields");
var modals = __webpack_require__(/*! @keystone-ui/modals */ "@keystone-ui/modals");
var _objectWithoutProperties = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
var tooltip = __webpack_require__(/*! @keystone-ui/tooltip */ "@keystone-ui/tooltip");
var loading = __webpack_require__(/*! @keystone-ui/loading */ "@keystone-ui/loading");
var adminUiUtils = __webpack_require__(/*! @keystone-next/admin-ui-utils */ "@keystone-next/admin-ui-utils");
var apollo = __webpack_require__(/*! @keystone-next/admin-ui/apollo */ "@keystone-next/admin-ui/apollo");
var toast = __webpack_require__(/*! @keystone-ui/toast */ "@keystone-ui/toast");
var isDeepEqual = __webpack_require__(/*! fast-deep-equal */ "fast-deep-equal");
var types_relationship_views_RelationshipSelect_dist_fields = __webpack_require__(/*! ../RelationshipSelect/dist/fields.cjs.dev.js */ "../../node_modules/@keystone-next/fields/types/relationship/views/RelationshipSelect/dist/fields.cjs.dev.js");
__webpack_require__(/*! @babel/runtime/helpers/toPropertyKey */ "../../node_modules/@babel/runtime/helpers/toPropertyKey.js");
__webpack_require__(/*! intersection-observer */ "intersection-observer");

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var isDeepEqual__default = /*#__PURE__*/_interopDefault(isDeepEqual);

function useItemState({
  selectedFields,
  localList,
  id,
  field
}) {
  const {
    data,
    error,
    loading
  } = apollo.useQuery(apollo.gql`query($id: ID!) {
  item: ${localList.key}(where: {id: $id}) {
    id
    relationship: ${field.path} {
      ${selectedFields}
    }
  }
}`, {
    variables: {
      id
    },
    errorPolicy: 'all'
  });
  const {
    itemsArrFromData,
    relationshipGetter
  } = React.useMemo(() => {
    const dataGetter = adminUiUtils.makeDataGetter(data, error === null || error === void 0 ? void 0 : error.graphQLErrors);
    const relationshipGetter = dataGetter.get('item').get('relationship');
    const isMany = Array.isArray(relationshipGetter.data);
    const itemsArrFromData = (isMany ? relationshipGetter.data.map((_, i) => relationshipGetter.get(i)) : [relationshipGetter]).filter(x => {
      var _x$data;

      return ((_x$data = x.data) === null || _x$data === void 0 ? void 0 : _x$data.id) != null;
    });
    return {
      relationshipGetter,
      itemsArrFromData
    };
  }, [data, error]);
  let [{
    items,
    itemsArrFromData: itemsArrFromDataState
  }, setItemsState] = React.useState({
    itemsArrFromData: [],
    items: {}
  });

  if (itemsArrFromDataState !== itemsArrFromData) {
    let newItems = {};
    itemsArrFromData.forEach(item => {
      var _items$item$data$id, _item$errors, _initialItemInState$e;

      const initialItemInState = (_items$item$data$id = items[item.data.id]) === null || _items$item$data$id === void 0 ? void 0 : _items$item$data$id.fromInitialQuery;

      if ((items[item.data.id] && initialItemInState || !items[item.data.id]) && (!initialItemInState || item.data !== initialItemInState.data || ((_item$errors = item.errors) === null || _item$errors === void 0 ? void 0 : _item$errors.length) !== ((_initialItemInState$e = initialItemInState.errors) === null || _initialItemInState$e === void 0 ? void 0 : _initialItemInState$e.length) || (item.errors || []).some((err, i) => {
        var _initialItemInState$e2;

        return err !== ((_initialItemInState$e2 = initialItemInState.errors) === null || _initialItemInState$e2 === void 0 ? void 0 : _initialItemInState$e2[i]);
      }))) {
        newItems[item.data.id] = {
          current: item,
          fromInitialQuery: item
        };
      } else {
        newItems[item.data.id] = items[item.data.id];
      }
    });
    items = newItems;
    setItemsState({
      items: newItems,
      itemsArrFromData
    });
  }

  return {
    items: React.useMemo(() => {
      const itemsToReturn = {};
      Object.keys(items).forEach(id => {
        itemsToReturn[id] = items[id].current;
      });
      return itemsToReturn;
    }, [items]),
    setItems: React.useCallback(items => {
      setItemsState(state => {
        let itemsForState = {};
        Object.keys(items).forEach(id => {
          var _state$items$id;

          if (items[id] === ((_state$items$id = state.items[id]) === null || _state$items$id === void 0 ? void 0 : _state$items$id.current)) {
            itemsForState[id] = state.items[id];
          } else {
            var _state$items$id2;

            itemsForState[id] = {
              current: items[id],
              fromInitialQuery: (_state$items$id2 = state.items[id]) === null || _state$items$id2 === void 0 ? void 0 : _state$items$id2.fromInitialQuery
            };
          }
        });
        return {
          itemsArrFromData: state.itemsArrFromData,
          items: itemsForState
        };
      });
    }, [setItemsState]),
    state: (() => {
      if (loading) {
        return {
          kind: 'loading'
        };
      }

      if (error !== null && error !== void 0 && error.networkError) {
        return {
          kind: 'error',
          message: error.networkError.message
        };
      }

      if (field.many && !relationshipGetter.data) {
        var _relationshipGetter$e;

        return {
          kind: 'error',
          message: ((_relationshipGetter$e = relationshipGetter.errors) === null || _relationshipGetter$e === void 0 ? void 0 : _relationshipGetter$e[0].message) || ''
        };
      }

      return {
        kind: 'loaded'
      };
    })()
  };
}
function useFieldsObj(list, fields) {
  return React.useMemo(() => {
    const editFields = {};
    fields === null || fields === void 0 ? void 0 : fields.forEach(fieldPath => {
      editFields[fieldPath] = list.fields[fieldPath];
    });
    return editFields;
  }, [fields, list.fields]);
}

function InlineEdit({
  fields,
  list,
  selectedFields,
  itemGetter,
  onCancel,
  onSave
}) {
  var _itemGetter$errors;

  const fieldsObj = useFieldsObj(list, fields);
  const [update, {
    loading,
    error
  }] = apollo.useMutation(apollo.gql`mutation ($data: ${list.gqlNames.updateInputName}!, $id: ID!) {
          item: ${list.gqlNames.updateMutationName}(id: $id, data: $data) {
            ${selectedFields}
          }
        }`, {
    errorPolicy: 'all'
  });
  const [state, setValue] = React.useState(() => {
    const value = adminUiUtils.deserializeValue(fieldsObj, itemGetter);
    return {
      value,
      item: itemGetter.data
    };
  });

  if (state.item !== itemGetter.data && (_itemGetter$errors = itemGetter.errors) !== null && _itemGetter$errors !== void 0 && _itemGetter$errors.every(x => {
    var _x$path;

    return ((_x$path = x.path) === null || _x$path === void 0 ? void 0 : _x$path.length) !== 1;
  })) {
    const value = adminUiUtils.deserializeValue(fieldsObj, itemGetter);
    setValue({
      value,
      item: itemGetter.data
    });
  }

  const {
    changedFields,
    dataForUpdate
  } = adminUiUtils.useChangedFieldsAndDataForUpdate(fieldsObj, itemGetter, state.value);
  const invalidFields = adminUiUtils.useInvalidFields(fieldsObj, state.value);
  const [forceValidation, setForceValidation] = React.useState(false);
  const toasts = toast.useToasts();
  const saveButtonProps = {
    isLoading: loading,
    weight: 'bold',
    size: 'small',
    tone: 'active',
    onClick: () => {
      const newForceValidation = invalidFields.size !== 0;
      setForceValidation(newForceValidation);
      if (newForceValidation) return;
      update({
        variables: {
          data: dataForUpdate,
          id: itemGetter.get('id').data
        }
      }).then(({
        data,
        errors
      }) => {
        // we're checking for path.length === 1 because errors with a path larger than 1 will be field level errors
        // which are handled seperately and do not indicate a failure to update the item
        const error = errors === null || errors === void 0 ? void 0 : errors.find(x => {
          var _x$path2;

          return ((_x$path2 = x.path) === null || _x$path2 === void 0 ? void 0 : _x$path2.length) === 1;
        });

        if (error) {
          toasts.addToast({
            title: 'Failed to update item',
            tone: 'negative',
            message: error.message
          });
        } else {
          toasts.addToast({
            title: data.item[list.labelField] || data.item.id,
            tone: 'positive',
            message: 'Saved successfully'
          });
          onSave(adminUiUtils.makeDataGetter(data, errors).get('item'));
        }
      }).catch(err => {
        toasts.addToast({
          title: 'Failed to update item',
          tone: 'negative',
          message: err.message
        });
      });
    },
    children: 'Save'
  };
  return core.jsx(core.Stack, {
    gap: "xlarge"
  }, error && core.jsx(components.GraphQLErrorNotice, {
    networkError: error === null || error === void 0 ? void 0 : error.networkError // we're checking for path.length === 1 because errors with a path larger than 1 will be field level errors
    // which are handled seperately and do not indicate a failure to update the item
    ,
    errors: error === null || error === void 0 ? void 0 : error.graphQLErrors.filter(x => {
      var _x$path3;

      return ((_x$path3 = x.path) === null || _x$path3 === void 0 ? void 0 : _x$path3.length) === 1;
    })
  }), core.jsx(adminUiUtils.Fields, {
    fieldModes: null,
    fields: fieldsObj,
    forceValidation: forceValidation,
    invalidFields: invalidFields,
    onChange: React.useCallback(value => {
      setValue(state => ({
        item: state.item,
        value: value(state.value)
      }));
    }, [setValue]),
    value: state.value
  }), core.jsx(core.Stack, {
    across: true,
    gap: "small"
  }, changedFields.size ? core.jsx(button.Button, saveButtonProps) : core.jsx(tooltip.Tooltip, {
    content: "No fields have been modified so you cannot save changes"
  }, props => core.jsx(button.Button, _extends({}, props, saveButtonProps, {
    // making onClick undefined instead of making the button disabled so the button can be focussed so keyboard users can see the tooltip
    onClick: undefined
  }))), core.jsx(button.Button, {
    size: "small",
    weight: "none",
    onClick: onCancel
  }, "Cancel")));
}

/* @jsx jsx */
function InlineCreate({
  list,
  onCancel,
  onCreate,
  fields: fieldPaths,
  selectedFields
}) {
  const toasts = toast.useToasts();
  const fields = useFieldsObj(list, fieldPaths);
  const [createItem, {
    loading,
    error
  }] = apollo.useMutation(apollo.gql`mutation($data: ${list.gqlNames.createInputName}!) {
      item: ${list.gqlNames.createMutationName}(data: $data) {
        ${selectedFields}
    }
  }`);
  const [value, setValue] = React.useState(() => {
    const value = {};
    Object.keys(fields).forEach(fieldPath => {
      value[fieldPath] = {
        kind: 'value',
        value: fields[fieldPath].controller.defaultValue
      };
    });
    return value;
  });
  const invalidFields = adminUiUtils.useInvalidFields(fields, value);
  const [forceValidation, setForceValidation] = React.useState(false);

  const onCreateClick = () => {
    const newForceValidation = invalidFields.size !== 0;
    setForceValidation(newForceValidation);
    if (newForceValidation) return;
    const data = {};
    const allSerializedValues = adminUiUtils.serializeValueToObjByFieldKey(fields, value);
    Object.keys(allSerializedValues).forEach(fieldPath => {
      const {
        controller
      } = fields[fieldPath];
      const serialized = allSerializedValues[fieldPath];

      if (!isDeepEqual__default['default'](serialized, controller.serialize(controller.defaultValue))) {
        Object.assign(data, serialized);
      }
    });
    createItem({
      variables: {
        data
      }
    }).then(({
      data,
      errors
    }) => {
      // we're checking for path.length === 1 because errors with a path larger than 1 will be field level errors
      // which are handled seperately and do not indicate a failure to update the item
      const error = errors === null || errors === void 0 ? void 0 : errors.find(x => {
        var _x$path;

        return ((_x$path = x.path) === null || _x$path === void 0 ? void 0 : _x$path.length) === 1;
      });

      if (error) {
        toasts.addToast({
          title: 'Failed to create item',
          tone: 'negative',
          message: error.message
        });
      } else {
        toasts.addToast({
          title: data.item[list.labelField] || data.item.id,
          tone: 'positive',
          message: 'Saved successfully'
        });
        onCreate(adminUiUtils.makeDataGetter(data, errors).get('item'));
      }
    }).catch(err => {
      toasts.addToast({
        title: 'Failed to update item',
        tone: 'negative',
        message: err.message
      });
    });
  };

  return core.jsx(core.Stack, {
    gap: "xlarge"
  }, error && core.jsx(components.GraphQLErrorNotice, {
    networkError: error === null || error === void 0 ? void 0 : error.networkError,
    errors: error === null || error === void 0 ? void 0 : error.graphQLErrors
  }), core.jsx(adminUiUtils.Fields, {
    fieldModes: null,
    fields: fields,
    forceValidation: forceValidation,
    invalidFields: invalidFields,
    onChange: setValue,
    value: value
  }), core.jsx(core.Stack, {
    gap: "small",
    across: true
  }, core.jsx(button.Button, {
    isLoading: loading,
    size: "small",
    tone: "positive",
    weight: "bold",
    onClick: onCreateClick
  }, "Create ", list.singular), core.jsx(button.Button, {
    size: "small",
    weight: "none",
    onClick: onCancel
  }, "Cancel")));
}

const CardContainer = (_ref) => {
  let {
    mode = 'view'
  } = _ref,
      props = _objectWithoutProperties(_ref, ["mode"]);

  const {
    tones
  } = core.useTheme();
  const tone = tones[mode === 'edit' ? 'active' : mode === 'create' ? 'positive' : 'passive'];
  return core.jsx(core.Box, _extends({
    paddingLeft: "xlarge",
    css: {
      position: 'relative',
      ':before': {
        content: '" "',
        backgroundColor: tone.border,
        borderRadius: 4,
        width: 4,
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        zIndex: 1
      }
    }
  }, props));
};

function Cards({
  localList,
  field,
  foreignList,
  id,
  value,
  onChange,
  forceValidation
}) {
  var _field$display$inline;

  let selectedFields = [...new Set([...field.display.cardFields, ...(((_field$display$inline = field.display.inlineEdit) === null || _field$display$inline === void 0 ? void 0 : _field$display$inline.fields) || [])])].map(fieldPath => {
    return foreignList.fields[fieldPath].controller.graphqlSelection;
  }).join('\n');

  if (!field.display.cardFields.includes('id')) {
    selectedFields += '\nid';
  }

  if (!field.display.cardFields.includes(foreignList.labelField) && foreignList.labelField !== 'id') {
    selectedFields += `\n${foreignList.labelField}`;
  }

  const {
    items,
    setItems,
    state: itemsState
  } = useItemState({
    selectedFields,
    localList,
    id,
    field
  });
  const client = apollo.useApolloClient();
  const [isLoadingLazyItems, setIsLoadingLazyItems] = React.useState(false);
  const [showConnectItems, setShowConnectItems] = React.useState(false);
  const [hideConnectItemsLabel, setHideConnectItemsLabel] = React.useState('Cancel');
  const isMountedRef = React.useRef(false);
  React.useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  });

  if (itemsState.kind === 'loading') {
    return core.jsx("div", null, core.jsx(loading.LoadingDots, {
      label: `Loading items for ${field.label} field`
    }));
  }

  if (itemsState.kind === 'error') {
    return core.jsx("span", {
      css: {
        color: 'red'
      }
    }, itemsState.message);
  }

  return core.jsx(core.Stack, {
    gap: "xlarge"
  }, [...value.currentIds].map(id => {
    const itemGetter = items[id];
    return value.itemsBeingEdited.has(id) && onChange !== undefined ? core.jsx(CardContainer, {
      mode: "edit",
      key: id
    }, core.jsx(InlineEdit, {
      list: foreignList,
      fields: field.display.inlineEdit.fields,
      onSave: newItemGetter => {
        setItems(_objectSpread(_objectSpread({}, items), {}, {
          [id]: newItemGetter
        }));
        const itemsBeingEdited = new Set(value.itemsBeingEdited);
        itemsBeingEdited.delete(id);
        onChange(_objectSpread(_objectSpread({}, value), {}, {
          itemsBeingEdited
        }));
      },
      selectedFields: selectedFields,
      itemGetter: itemGetter,
      onCancel: () => {
        const itemsBeingEdited = new Set(value.itemsBeingEdited);
        itemsBeingEdited.delete(id);
        onChange(_objectSpread(_objectSpread({}, value), {}, {
          itemsBeingEdited
        }));
      }
    })) : core.jsx(CardContainer, {
      mode: "view",
      key: id
    }, core.jsx(core.Stack, {
      gap: "xlarge"
    }, field.display.cardFields.map(fieldPath => {
      const field = foreignList.fields[fieldPath];
      const itemForField = {};

      for (const graphqlField of adminUiUtils.getRootGraphQLFieldsFromFieldController(field.controller)) {
        const fieldGetter = itemGetter.get(graphqlField);

        if (fieldGetter.errors) {
          const errorMessage = fieldGetter.errors[0].message;
          return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), errorMessage);
        }

        itemForField[graphqlField] = fieldGetter.data;
      }

      return core.jsx(field.views.CardValue, {
        key: fieldPath,
        field: field.controller,
        item: itemForField
      });
    })), core.jsx(core.Stack, {
      across: true,
      gap: "small",
      marginTop: "xlarge"
    }, field.display.inlineEdit && onChange !== undefined && core.jsx(button.Button, {
      size: "small",
      disabled: onChange === undefined,
      onClick: () => {
        onChange(_objectSpread(_objectSpread({}, value), {}, {
          itemsBeingEdited: new Set([...value.itemsBeingEdited, id])
        }));
      },
      tone: "active"
    }, "Edit"), field.display.removeMode === 'disconnect' && onChange !== undefined && core.jsx(tooltip.Tooltip, {
      content: "This item will not be deleted. It will only be removed from this field."
    }, props => core.jsx(button.Button, _extends({
      size: "small",
      disabled: onChange === undefined,
      onClick: () => {
        const currentIds = new Set(value.currentIds);
        currentIds.delete(id);
        onChange(_objectSpread(_objectSpread({}, value), {}, {
          currentIds
        }));
      }
    }, props, {
      tone: "negative"
    }), "Remove")), field.display.linkToItem && core.jsx(button.Button, {
      size: "small",
      weight: "link",
      tone: "active",
      css: {
        textDecoration: 'none'
      },
      as: router.Link,
      href: `/${foreignList.path}/${id}`
    }, "View ", foreignList.singular, " details")));
  }), onChange === undefined ? null : field.display.inlineConnect && showConnectItems ? core.jsx(CardContainer, {
    mode: "edit"
  }, core.jsx(core.Stack, {
    gap: "small",
    marginY: "medium",
    across: true
  }, core.jsx(types_relationship_views_RelationshipSelect_dist_fields.RelationshipSelect, {
    autoFocus: true,
    controlShouldRenderValue: isLoadingLazyItems,
    isDisabled: onChange === undefined,
    list: foreignList,
    isLoading: isLoadingLazyItems,
    placeholder: `Select a ${foreignList.singular}`,
    state: {
      kind: 'many',

      async onChange(options) {
        // TODO: maybe use the extraSelection prop on RelationshipSelect here
        const itemsToFetchAndConnect = [];
        options.forEach(item => {
          if (!value.currentIds.has(item.id)) {
            itemsToFetchAndConnect.push(item.id);
          }
        });

        if (itemsToFetchAndConnect.length) {
          try {
            const {
              data,
              errors
            } = await client.query({
              query: apollo.gql`query ($ids: [ID!]!) {
                      items: ${foreignList.gqlNames.listQueryName}(where: {id_in:$ids}) {
                        ${selectedFields}
                      }
                    }`,
              variables: {
                ids: itemsToFetchAndConnect
              }
            });

            if (isMountedRef.current) {
              const dataGetters = adminUiUtils.makeDataGetter(data, errors);
              const itemsDataGetter = dataGetters.get('items');

              let newItems = _objectSpread({}, items);

              let newCurrentIds = field.many ? new Set(value.currentIds) : new Set();

              if (Array.isArray(itemsDataGetter.data)) {
                itemsDataGetter.data.forEach((item, i) => {
                  if ((item === null || item === void 0 ? void 0 : item.id) != null) {
                    newCurrentIds.add(item.id);
                    newItems[item.id] = itemsDataGetter.get(i);
                  }
                });
              }

              if (newCurrentIds.size) {
                setItems(newItems);
                onChange(_objectSpread(_objectSpread({}, value), {}, {
                  currentIds: newCurrentIds
                }));
                setHideConnectItemsLabel('Done');
              }
            }
          } finally {
            if (isMountedRef.current) {
              setIsLoadingLazyItems(false);
            }
          }
        }
      },

      value: (() => {
        let options = [];
        Object.keys(items).forEach(id => {
          if (value.currentIds.has(id)) {
            options.push({
              id,
              label: id
            });
          }
        });
        return options;
      })()
    }
  }), core.jsx(button.Button, {
    onClick: () => setShowConnectItems(false)
  }, hideConnectItemsLabel))) : value.itemBeingCreated ? core.jsx(CardContainer, {
    mode: "create"
  }, core.jsx(InlineCreate, {
    selectedFields: selectedFields,
    fields: field.display.inlineCreate.fields,
    list: foreignList,
    onCancel: () => {
      onChange(_objectSpread(_objectSpread({}, value), {}, {
        itemBeingCreated: false
      }));
    },
    onCreate: itemGetter => {
      const id = itemGetter.data.id;
      setItems(_objectSpread(_objectSpread({}, items), {}, {
        [id]: itemGetter
      }));
      onChange(_objectSpread(_objectSpread({}, value), {}, {
        itemBeingCreated: false,
        currentIds: field.many ? new Set([...value.currentIds, id]) : new Set([id])
      }));
    }
  })) : field.display.inlineCreate || field.display.inlineConnect ? core.jsx(CardContainer, {
    mode: "create"
  }, core.jsx(core.Stack, {
    gap: "small",
    marginTop: "medium",
    across: true
  }, field.display.inlineCreate && core.jsx(button.Button, {
    size: "small",
    disabled: onChange === undefined,
    tone: "positive",
    onClick: () => {
      onChange(_objectSpread(_objectSpread({}, value), {}, {
        itemBeingCreated: true
      }));
    }
  }, "Create ", foreignList.singular), field.display.inlineConnect && core.jsx(button.Button, {
    size: "small",
    weight: "none",
    tone: "passive",
    onClick: () => {
      setShowConnectItems(true);
      setHideConnectItemsLabel('Cancel');
    }
  }, "Link existing ", foreignList.singular))) : null, forceValidation && core.jsx(core.Text, {
    color: "red600",
    size: "small"
  }, "You must finish creating and editing any related ", foreignList.label.toLowerCase(), " before saving the ", localList.singular.toLowerCase()));
}

function LinkToRelatedItems({
  value,
  list
}) {
  var _value$value;

  const commonProps = {
    size: 'small',
    tone: 'active',
    weight: 'link'
  };

  if (value.kind === 'many') {
    return core.jsx(button.Button, _extends({}, commonProps, {
      as: router.Link // What happens when there are 10,000 ids? The URL would be too
      // big, so we arbitrarily limit it to the first 100
      // TODO: we should be able to filter by this, no?
      ,
      href: `/${list.path}?!id_in="${value.value.slice(0, 100).map(({
        id
      }) => id).join(',')}"`
    }), "View related ", list.plural);
  }

  return core.jsx(button.Button, _extends({}, commonProps, {
    as: router.Link,
    href: `/${list.path}/${(_value$value = value.value) === null || _value$value === void 0 ? void 0 : _value$value.id}`
  }), "View ", list.singular, " details");
}

const RelationshipLinkButton = ({
  href,
  children
}) => core.jsx(button.Button, {
  css: {
    padding: 0,
    height: 'auto'
  },
  weight: "link",
  tone: "active",
  as: router.Link,
  href: href
}, children);

const RelationshipDisplay = ({
  list,
  value
}) => {
  if (value.kind === 'many') {
    if (value.value.length) {
      return core.jsx(core.Inline, {
        gap: "small"
      }, value.value.map(i => core.jsx(RelationshipLinkButton, {
        href: `/${list.path}/${i.id}`
      }, i.label)));
    } else {
      return core.jsx("div", null, "(No ", list.plural, ")");
    }
  } else {
    if (value.value) {
      return core.jsx(RelationshipLinkButton, {
        href: `/${list.path}/${value.value.id}`
      }, value.value.label);
    } else {
      return core.jsx("div", null, "(No ", list.singular, ")");
    }
  }
};

const Field = ({
  field,
  autoFocus,
  value,
  onChange,
  forceValidation
}) => {
  const keystone = context.useKeystone();
  const foreignList = context.useList(field.refListKey);
  const localList = context.useList(field.listKey);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  if (value.kind === 'cards-view') {
    return core.jsx(core.Stack, {
      as: "fieldset",
      gap: "medium"
    }, core.jsx(fields.FieldLegend, null, field.label), core.jsx(Cards, {
      forceValidation: forceValidation,
      field: field,
      id: value.id,
      value: value,
      onChange: onChange,
      foreignList: foreignList,
      localList: localList
    }));
  }

  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, {
    as: "legend"
  }, field.label), onChange ? core.jsx(React.Fragment, null, core.jsx(core.Stack, {
    gap: "medium"
  }, core.jsx(types_relationship_views_RelationshipSelect_dist_fields.RelationshipSelect, {
    controlShouldRenderValue: true,
    autoFocus: autoFocus,
    isDisabled: onChange === undefined,
    list: foreignList,
    state: value.kind === 'many' ? {
      kind: 'many',
      value: value.value,

      onChange(newItems) {
        onChange(_objectSpread(_objectSpread({}, value), {}, {
          value: newItems
        }));
      }

    } : {
      kind: 'one',
      value: value.value,

      onChange(newVal) {
        if (value.kind === 'one') {
          onChange(_objectSpread(_objectSpread({}, value), {}, {
            value: newVal
          }));
        }
      }

    }
  }), core.jsx(core.Stack, {
    across: true,
    gap: "small"
  }, !field.hideCreate && core.jsx(button.Button, {
    size: "small",
    disabled: isDrawerOpen,
    onClick: () => {
      setIsDrawerOpen(true);
    }
  }, "Create related ", foreignList.singular), keystone.authenticatedItem.state === 'authenticated' && keystone.authenticatedItem.listKey === field.refListKey && core.jsx(button.Button, {
    size: "small",
    isDisabled: onChange === undefined,
    onClick: () => {
      if (keystone.authenticatedItem.state === 'authenticated') {
        const val = {
          label: keystone.authenticatedItem.label,
          id: keystone.authenticatedItem.id
        };

        if (value.kind === 'many') {
          onChange(_objectSpread(_objectSpread({}, value), {}, {
            value: [...value.value, val]
          }));
        } else {
          onChange(_objectSpread(_objectSpread({}, value), {}, {
            value: val
          }));
        }
      }
    }
  }, value.kind === 'many' ? 'Add ' : 'Set as ', keystone.authenticatedItem.label), !!(value.kind === 'many' ? value.value.length : value.kind === 'one' && value.value) && core.jsx(LinkToRelatedItems, {
    list: foreignList,
    value: value
  }))), core.jsx(modals.DrawerController, {
    isOpen: isDrawerOpen
  }, core.jsx(components.CreateItemDrawer, {
    listKey: foreignList.key,
    onClose: () => {
      setIsDrawerOpen(false);
    },
    onCreate: val => {
      setIsDrawerOpen(false);

      if (value.kind === 'many') {
        onChange(_objectSpread(_objectSpread({}, value), {}, {
          value: [...value.value, val]
        }));
      } else if (value.kind === 'one') {
        onChange(_objectSpread(_objectSpread({}, value), {}, {
          value: val
        }));
      }
    }
  }))) : core.jsx(RelationshipDisplay, {
    value: value,
    list: foreignList
  }));
};
const Cell = ({
  field,
  item
}) => {
  const list = context.useList(field.refListKey);
  const data = item[field.path];
  const items = (Array.isArray(data) ? data : [data]).filter(item => item);
  const displayItems = items.length < 5 ? items : items.slice(0, 3);
  const overflow = items.length < 5 ? 0 : items.length - 3;
  const {
    colors
  } = core.useTheme();
  const styles = {
    color: colors.foreground,
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'underline'
    }
  };
  return core.jsx(components.CellContainer, null, displayItems.map((item, index) => core.jsx(React.Fragment, {
    key: item.id
  }, !!index ? ', ' : '', core.jsx(router.Link, {
    href: `/${list.path}/[id]`,
    as: `/${list.path}/${item.id}`,
    css: styles
  }, item.label || item.id))), overflow ? `, and ${overflow} more` : null);
};
const CardValue = ({
  field,
  item
}) => {
  const list = context.useList(field.refListKey);
  const data = item[field.path];
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), (Array.isArray(data) ? data : [data]).filter(item => item).map((item, index) => core.jsx(React.Fragment, {
    key: item.id
  }, !!index ? ', ' : '', core.jsx(router.Link, {
    href: `/${list.path}/[id]`,
    as: `/${list.path}/${item.id}`
  }, item.label || item.id))));
};
const controller = config => {
  return {
    many: config.fieldMeta.many,
    listKey: config.listKey,
    path: config.path,
    label: config.label,
    display: config.fieldMeta.displayMode === 'cards' ? {
      mode: 'cards',
      cardFields: config.fieldMeta.cardFields,
      inlineCreate: config.fieldMeta.inlineCreate,
      inlineEdit: config.fieldMeta.inlineEdit,
      linkToItem: config.fieldMeta.linkToItem,
      removeMode: config.fieldMeta.removeMode,
      inlineConnect: config.fieldMeta.inlineConnect
    } : {
      mode: 'select',
      refLabelField: config.fieldMeta.refLabelField
    },
    refListKey: config.fieldMeta.refListKey,
    graphqlSelection: config.fieldMeta.displayMode === 'cards' ? // TODO: namespace this stuff at the Keystone level
    `${config.path}__id: id
           ${config.path} {
            id
           }` : `${config.path} {
             id
             label: ${config.fieldMeta.refLabelField}
           }`,
    hideCreate: config.fieldMeta.hideCreate,
    defaultValue: config.fieldMeta.many ? {
      kind: 'many',
      initialValue: [],
      value: []
    } : {
      kind: 'one',
      value: null,
      initialValue: null
    },
    deserialize: data => {
      if (config.fieldMeta.displayMode === 'cards') {
        const initialIds = new Set((Array.isArray(data[config.path]) ? data[config.path] : data[config.path] ? [data[config.path]] : []).map(x => x.id));
        return {
          kind: 'cards-view',
          id: data[`${config.path}__id`],
          itemsBeingEdited: new Set(),
          itemBeingCreated: false,
          initialIds,
          currentIds: initialIds
        };
      }

      if (config.fieldMeta.many) {
        let value = (data[config.path] || []).map(x => ({
          id: x.id,
          label: x.label || x.id
        }));
        return {
          kind: 'many',
          initialValue: value,
          value
        };
      }

      let value = data[config.path];

      if (value) {
        value = {
          id: value.id,
          label: value.label || value.id
        };
      }

      return {
        kind: 'one',
        value,
        initialValue: value
      };
    },

    validate(value) {
      return value.kind !== 'cards-view' || value.itemsBeingEdited.size === 0 && !value.itemBeingCreated;
    },

    serialize: state => {
      if (state.kind === 'many') {
        const newAllIds = new Set(state.value.map(x => x.id));
        const initialIds = new Set(state.initialValue.map(x => x.id));
        let disconnect = state.initialValue.filter(x => !newAllIds.has(x.id)).map(x => ({
          id: x.id
        }));
        let connect = state.value.filter(x => !initialIds.has(x.id)).map(x => ({
          id: x.id
        }));

        if (disconnect.length || connect.length) {
          let output = {};

          if (disconnect.length) {
            output.disconnect = disconnect;
          }

          if (connect.length) {
            output.connect = connect;
          }

          return {
            [config.path]: output
          };
        }
      } else if (state.kind === 'one') {
        var _state$initialValue;

        if (state.initialValue && !state.value) {
          return {
            [config.path]: {
              disconnect: {
                id: state.initialValue.id
              }
            }
          };
        } else if (state.value && state.value.id !== ((_state$initialValue = state.initialValue) === null || _state$initialValue === void 0 ? void 0 : _state$initialValue.id)) {
          return {
            [config.path]: {
              connect: {
                id: state.value.id
              }
            }
          };
        }
      } else if (state.kind === 'cards-view') {
        let disconnect = [...state.initialIds].filter(id => !state.currentIds.has(id)).map(id => ({
          id
        }));
        let connect = [...state.currentIds].filter(id => !state.initialIds.has(id)).map(id => ({
          id
        }));

        if (config.fieldMeta.many) {
          if (disconnect.length || connect.length) {
            return {
              [config.path]: {
                connect: connect.length ? connect : undefined,
                disconnect: disconnect.length ? disconnect : undefined
              }
            };
          }
        } else if (connect.length) {
          return {
            [config.path]: {
              connect: connect[0]
            }
          };
        } else if (disconnect.length) {
          return {
            [config.path]: {
              disconnect: disconnect[0]
            }
          };
        }
      }

      return {};
    }
  };
};

exports.CardValue = CardValue;
exports.Cell = Cell;
exports.Field = Field;
exports.controller = controller;


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/relationship/views/dist/fields.cjs.js":
/*!***************************************************************************************************************************************!*\
  !*** C:/WebDEV/C O U R S E S/ecommerce-wesbos/backend/node_modules/@keystone-next/fields/types/relationship/views/dist/fields.cjs.js ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./fields.cjs.dev.js */ "../../node_modules/@keystone-next/fields/types/relationship/views/dist/fields.cjs.dev.js");
}


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/select/views/dist/fields.cjs.dev.js":
/*!*************************************************************************************************************************************!*\
  !*** C:/WebDEV/C O U R S E S/ecommerce-wesbos/backend/node_modules/@keystone-next/fields/types/select/views/dist/fields.cjs.dev.js ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var components = __webpack_require__(/*! @keystone-next/admin-ui/components */ "@keystone-next/admin-ui/components");
var core = __webpack_require__(/*! @keystone-ui/core */ "@keystone-ui/core");
var fields = __webpack_require__(/*! @keystone-ui/fields */ "@keystone-ui/fields");
var segmentedControl = __webpack_require__(/*! @keystone-ui/segmented-control */ "@keystone-ui/segmented-control");

/* @jsx jsx */
const Field = ({
  field,
  value,
  onChange,
  autoFocus
}) => core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), field.displayMode === 'select' ? core.jsx(fields.Select, {
  isClearable: true,
  autoFocus: autoFocus,
  options: field.options,
  isDisabled: onChange === undefined,
  onChange: value => {
    onChange === null || onChange === void 0 ? void 0 : onChange(value);
  },
  value: value,
  portalMenu: true
}) : core.jsx(segmentedControl.SegmentedControl, {
  segments: field.options.map(x => x.label),
  selectedIndex: value ? field.options.findIndex(x => x.value === value.value) : undefined,
  onChange: index => {
    onChange === null || onChange === void 0 ? void 0 : onChange(field.options[index]);
  }
}));
const Cell = ({
  item,
  field,
  linkTo
}) => {
  var _field$options$find;

  let value = item[field.path] + '';
  const label = (_field$options$find = field.options.find(x => x.value === value)) === null || _field$options$find === void 0 ? void 0 : _field$options$find.label;
  return linkTo ? core.jsx(components.CellLink, linkTo, label) : core.jsx(components.CellContainer, null, label);
};
Cell.supportsLinkTo = true;
const CardValue = ({
  item,
  field
}) => {
  var _field$options$find2;

  const label = (_field$options$find2 = field.options.find(x => x.value === item[field.path])) === null || _field$options$find2 === void 0 ? void 0 : _field$options$find2.label;
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), label);
};
const controller = config => {
  const optionsWithStringValues = config.fieldMeta.options.map(x => ({
    label: x.label,
    value: x.value.toString()
  }));
  return {
    path: config.path,
    label: config.label,
    graphqlSelection: config.path,
    defaultValue: null,
    dataType: config.fieldMeta.dataType,
    displayMode: config.fieldMeta.displayMode,
    options: optionsWithStringValues,
    deserialize: data => {
      for (const option of config.fieldMeta.options) {
        if (option.value === data[config.path]) {
          return {
            label: option.label,
            value: option.value.toString()
          };
        }
      }

      return null;
    },
    serialize: value => {
      var _value$value;

      return {
        [config.path]: (_value$value = value === null || value === void 0 ? void 0 : value.value) !== null && _value$value !== void 0 ? _value$value : null
      };
    },
    filter: {
      Filter(props) {
        return core.jsx(fields.MultiSelect, {
          onChange: props.onChange,
          options: optionsWithStringValues,
          value: props.value,
          autoFocus: true
        });
      },

      graphql: ({
        type,
        value: options
      }) => {
        const inverted = type === 'not_matches';

        if (!options.length) {
          return {
            [`${config.path}${inverted ? '_not' : ''}`]: null
          };
        }

        const isMulti = options.length > 1;
        let key = config.path;

        if (isMulti && inverted) {
          key = `${config.path}_not_in`;
        } else if (isMulti) {
          key = `${config.path}_in`;
        } else if (inverted) {
          key = `${config.path}_not`;
        }

        const value = isMulti ? options.map(x => x.value) : options[0].value;
        return {
          [key]: value
        };
      },

      Label({
        type,
        value
      }) {
        if (!value.length) {
          return type === 'not_matches' ? `is set` : `has no value`;
        }

        if (value.length > 1) {
          const values = value.map(i => i.label).join(', ');
          return type === 'not_matches' ? `is not in [${values}]` : `is in [${values}]`;
        }

        const optionLabel = value[0].label;
        return type === 'not_matches' ? `is not ${optionLabel}` : `is ${optionLabel}`;
      },

      types: {
        matches: {
          label: 'Matches',
          initialValue: []
        },
        not_matches: {
          label: 'Does not match',
          initialValue: []
        }
      }
    }
  };
};

exports.CardValue = CardValue;
exports.Cell = Cell;
exports.Field = Field;
exports.controller = controller;


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/select/views/dist/fields.cjs.js":
/*!*********************************************************************************************************************************!*\
  !*** C:/WebDEV/C O U R S E S/ecommerce-wesbos/backend/node_modules/@keystone-next/fields/types/select/views/dist/fields.cjs.js ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./fields.cjs.dev.js */ "../../node_modules/@keystone-next/fields/types/select/views/dist/fields.cjs.dev.js");
}


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/text/views/dist/fields.cjs.dev.js":
/*!***********************************************************************************************************************************!*\
  !*** C:/WebDEV/C O U R S E S/ecommerce-wesbos/backend/node_modules/@keystone-next/fields/types/text/views/dist/fields.cjs.dev.js ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var components = __webpack_require__(/*! @keystone-next/admin-ui/components */ "@keystone-next/admin-ui/components");
var core = __webpack_require__(/*! @keystone-ui/core */ "@keystone-ui/core");
var fields = __webpack_require__(/*! @keystone-ui/fields */ "@keystone-ui/fields");

/* @jsx jsx */
const Field = ({
  field,
  value,
  onChange,
  autoFocus
}) => core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), onChange ? field.displayMode === 'textarea' ? core.jsx(fields.TextArea, {
  autoFocus: autoFocus,
  onChange: event => onChange(event.target.value),
  value: value
}) : core.jsx(fields.TextInput, {
  autoFocus: autoFocus,
  onChange: event => onChange(event.target.value),
  value: value
}) : value);
const Cell = ({
  item,
  field,
  linkTo
}) => {
  let value = item[field.path] + '';
  return linkTo ? core.jsx(components.CellLink, linkTo, value) : core.jsx(components.CellContainer, null, value);
};
Cell.supportsLinkTo = true;
const CardValue = ({
  item,
  field
}) => {
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), item[field.path]);
};
const controller = config => {
  return {
    path: config.path,
    label: config.label,
    graphqlSelection: config.path,
    defaultValue: '',
    displayMode: config.fieldMeta.displayMode,
    deserialize: data => {
      const value = data[config.path];
      return typeof value === 'string' ? value : '';
    },
    serialize: value => ({
      [config.path]: value
    }),
    filter: {
      Filter(props) {
        return core.jsx(fields.TextInput, {
          onChange: event => {
            props.onChange(event.target.value);
          },
          value: props.value,
          autoFocus: true
        });
      },

      graphql: ({
        type,
        value
      }) => {
        const key = type === 'is_i' ? `${config.path}_i` : `${config.path}_${type}`;
        return {
          [key]: value
        };
      },

      Label({
        label,
        value
      }) {
        return `${label.toLowerCase()}: "${value}"`;
      },

      types: {
        contains_i: {
          label: 'Contains',
          initialValue: ''
        },
        not_contains_i: {
          label: 'Does not contain',
          initialValue: ''
        },
        is_i: {
          label: 'Is exactly',
          initialValue: ''
        },
        not_i: {
          label: 'Is not exactly',
          initialValue: ''
        },
        starts_with_i: {
          label: 'Starts with',
          initialValue: ''
        },
        not_starts_with_i: {
          label: 'Does not start with',
          initialValue: ''
        },
        ends_with_i: {
          label: 'Ends with',
          initialValue: ''
        },
        not_ends_with_i: {
          label: 'Does not end with',
          initialValue: ''
        }
      }
    }
  };
};

exports.CardValue = CardValue;
exports.Cell = Cell;
exports.Field = Field;
exports.controller = controller;


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/text/views/dist/fields.cjs.js":
/*!*******************************************************************************************************************************!*\
  !*** C:/WebDEV/C O U R S E S/ecommerce-wesbos/backend/node_modules/@keystone-next/fields/types/text/views/dist/fields.cjs.js ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./fields.cjs.dev.js */ "../../node_modules/@keystone-next/fields/types/text/views/dist/fields.cjs.dev.js");
}


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/timestamp/views/dist/fields.cjs.dev.js":
/*!****************************************************************************************************************************************!*\
  !*** C:/WebDEV/C O U R S E S/ecommerce-wesbos/backend/node_modules/@keystone-next/fields/types/timestamp/views/dist/fields.cjs.dev.js ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var _objectSpread = __webpack_require__(/*! @babel/runtime/helpers/objectSpread2 */ "../../node_modules/@babel/runtime/helpers/objectSpread2.js");
var React = __webpack_require__(/*! react */ "react");
var dateFns = __webpack_require__(/*! date-fns */ "date-fns");
var components = __webpack_require__(/*! @keystone-next/admin-ui/components */ "@keystone-next/admin-ui/components");
var core = __webpack_require__(/*! @keystone-ui/core */ "@keystone-ui/core");
var fields = __webpack_require__(/*! @keystone-ui/fields */ "@keystone-ui/fields");

const getTime = timeValue => {
  if (!timeValue) return [0, 0];
  return timeValue.split(':').map(n => Number(n));
};

function isValidDate(date) {
  if (!date) return false;
  return Boolean(dateFns.parseISO(date).toISOString());
}
function isValidTime(time) {
  if (!time) {
    return false;
  }

  return dateFns.isValid(dateFns.parse(time, 'HH:mm', new Date()));
}
function isValidISO(value) {
  try {
    // toISOString converts our string into zulu time
    // instead of checking for the timestamp to be specifically in zulu time
    // we relax the validation here a little, to just be a valid ISO string.
    return Boolean(dateFns.parseISO(constructTimestamp(value)).toISOString());
  } catch (err) {
    return false;
  }
}
function constructTimestamp({
  dateValue,
  timeValue
}) {
  let formattedDate = new Date(dateValue);
  const [hours, minutes] = getTime(timeValue);
  formattedDate.setHours(hours);
  formattedDate.setMinutes(minutes);
  return dateFns.formatISO(formattedDate);
}
function deconstructTimestamp(value) {
  return {
    dateValue: value,
    timeValue: resolveInitialTimeValue(value)
  };
}
function formatOutput(value) {
  if (!value) return '';
  const date = new Date(value);
  return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
}
function resolveInitialTimeValue(value, defaultValue) {
  const date = value || defaultValue;
  if (!date) return '';
  return new Date(date).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });
}

const TimePicker = ({
  autoFocus,
  onBlur,
  disabled,
  onChange,
  format = '24hr',
  value
}) => {
  return core.jsx(fields.TextInput, {
    autoFocus: autoFocus,
    maxLength: format === '24hr' ? 5 : 7,
    disabled: disabled,
    onChange: onChange,
    onBlur: onBlur,
    placeholder: format === '24hr' ? '00:00' : '00:00am',
    value: value
  });
};

const Field = ({
  field,
  value,
  onChange,
  forceValidation
}) => {
  const [touchedFirstInput, setTouchedFirstInput] = React.useState(false);
  const [touchedSecondInput, setTouchedSecondInput] = React.useState(false);
  const showValidation = touchedFirstInput && touchedSecondInput || forceValidation;

  const showDateError = dateValue => {
    if (!dateValue) {
      return core.jsx("div", {
        css: {
          color: 'red'
        }
      }, "Please select a date value.");
    }

    return !isValidDate(dateValue) && core.jsx("div", {
      css: {
        color: 'red'
      }
    }, "Incorrect date value");
  };

  const showTimeError = timeValue => {
    if (!timeValue) {
      return core.jsx("div", {
        css: {
          color: 'red'
        }
      }, "Please select a time value.");
    }

    return !isValidTime(timeValue) && core.jsx("div", {
      css: {
        color: 'red'
      }
    }, "Time must be in the form HH:mm");
  };

  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), onChange ? core.jsx(core.Stack, null, core.jsx(core.Inline, {
    gap: "small"
  }, core.jsx(core.Stack, null, core.jsx(fields.DatePicker, {
    onUpdate: date => {
      onChange(_objectSpread(_objectSpread({}, value), {}, {
        dateValue: date || ''
      }));
    },
    onClear: () => {
      onChange(_objectSpread(_objectSpread({}, value), {}, {
        dateValue: ''
      }));
    },
    onBlur: () => setTouchedFirstInput(true),
    value: value.dateValue
  }), showValidation && showDateError(value.dateValue)), core.jsx(core.Stack, null, core.jsx(TimePicker, {
    onBlur: () => setTouchedSecondInput(true),
    disabled: onChange === undefined,
    format: "24hr",
    onChange: event => onChange(_objectSpread(_objectSpread({}, value), {}, {
      timeValue: event.target.value
    })),
    value: value.timeValue || ''
  }), showValidation && showTimeError(value.timeValue)))) : isValidISO(value) ? formatOutput(constructTimestamp(value)) : '');
};
const Cell = ({
  item,
  field,
  linkTo
}) => {
  let value = item[field.path];
  return linkTo ? core.jsx(components.CellLink, linkTo, formatOutput(value)) : core.jsx(components.CellContainer, null, formatOutput(value));
};
Cell.supportsLinkTo = true;
const CardValue = ({
  item,
  field
}) => {
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), item[field.path]);
};
const controller = config => {
  return {
    path: config.path,
    label: config.label,
    graphqlSelection: config.path,
    defaultValue: {
      dateValue: '',
      timeValue: ''
    },
    deserialize: data => {
      const value = data[config.path];

      if (value) {
        return deconstructTimestamp(value);
      }

      return {
        dateValue: '',
        timeValue: ''
      };
    },
    serialize: ({
      dateValue,
      timeValue
    }) => {
      if (dateValue && timeValue && isValidISO({
        dateValue,
        timeValue
      })) {
        let formattedDate = constructTimestamp({
          dateValue,
          timeValue
        });
        return {
          [config.path]: formattedDate
        };
      }

      return {
        [config.path]: null
      };
    },

    validate({
      dateValue,
      timeValue
    }) {
      if (!dateValue && !timeValue) return true;
      if (!dateValue) return false;
      if (!timeValue) return false;
      return isValidISO({
        dateValue,
        timeValue
      });
    }

  };
};

exports.CardValue = CardValue;
exports.Cell = Cell;
exports.Field = Field;
exports.controller = controller;


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/timestamp/views/dist/fields.cjs.js":
/*!************************************************************************************************************************************!*\
  !*** C:/WebDEV/C O U R S E S/ecommerce-wesbos/backend/node_modules/@keystone-next/fields/types/timestamp/views/dist/fields.cjs.js ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./fields.cjs.dev.js */ "../../node_modules/@keystone-next/fields/types/timestamp/views/dist/fields.cjs.dev.js");
}


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/virtual/views/dist/fields.cjs.dev.js":
/*!**************************************************************************************************************************************!*\
  !*** C:/WebDEV/C O U R S E S/ecommerce-wesbos/backend/node_modules/@keystone-next/fields/types/virtual/views/dist/fields.cjs.dev.js ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var core = __webpack_require__(/*! @keystone-ui/core */ "@keystone-ui/core");
var fields = __webpack_require__(/*! @keystone-ui/fields */ "@keystone-ui/fields");
var React = __webpack_require__(/*! react */ "react");

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

// but I'd like to present it as best as possible.
// ToDo: Better presentation for more types of data

const stringify = data => {
  const omitTypename = (key, value) => key === '__typename' ? undefined : value;

  const dataWithoutTypename = JSON.parse(JSON.stringify(data), omitTypename);
  return JSON.stringify(dataWithoutTypename, null, 2);
};

function PrettyData({
  data
}) {
  if (!data) return null;
  let prettyData = '';
  if (typeof data === 'string') prettyData = data;else if (typeof data === 'number') prettyData = data;else if (typeof data === 'object') {
    prettyData = /*#__PURE__*/React__default['default'].createElement("pre", null, stringify(data));
  } else {
    prettyData = /*#__PURE__*/React__default['default'].createElement("pre", null, stringify(data));
  }
  return /*#__PURE__*/React__default['default'].createElement(React.Fragment, null, prettyData);
}

/* @jsx jsx */
const Field = ({
  field,
  value
}) => value === createViewValue ? null : core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), core.jsx(PrettyData, {
  data: value
}));
const Cell = ({
  item,
  field
}) => {
  return core.jsx(PrettyData, {
    data: item[field.path]
  });
};
const CardValue = ({
  item,
  field
}) => {
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), core.jsx(PrettyData, {
    data: item[field.path]
  }));
};
const createViewValue = Symbol('create view virtual field value');
const controller = config => {
  return {
    path: config.path,
    label: config.label,
    graphqlSelection: `${config.path}${config.fieldMeta.graphQLReturnFragment}`,
    defaultValue: createViewValue,
    deserialize: data => {
      return data[config.path];
    },
    serialize: () => ({})
  };
};

exports.CardValue = CardValue;
exports.Cell = Cell;
exports.Field = Field;
exports.controller = controller;


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/virtual/views/dist/fields.cjs.js":
/*!**********************************************************************************************************************************!*\
  !*** C:/WebDEV/C O U R S E S/ecommerce-wesbos/backend/node_modules/@keystone-next/fields/types/virtual/views/dist/fields.cjs.js ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./fields.cjs.dev.js */ "../../node_modules/@keystone-next/fields/types/virtual/views/dist/fields.cjs.dev.js");
}


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _keystone_next_admin_ui_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @keystone-next/admin-ui/context */ "@keystone-next/admin-ui/context");
/* harmony import */ var _keystone_next_admin_ui_context__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_keystone_next_admin_ui_context__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _keystone_next_admin_ui_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @keystone-next/admin-ui/components */ "@keystone-next/admin-ui/components");
/* harmony import */ var _keystone_next_admin_ui_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_keystone_next_admin_ui_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _keystone_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @keystone-ui/core */ "@keystone-ui/core");
/* harmony import */ var _keystone_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_keystone_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_keystone_next_fields_types_mongoId_views__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/@keystone-next/fields/types/mongoId/views */ "../../node_modules/@keystone-next/fields/types/mongoId/views/dist/fields.cjs.js");
/* harmony import */ var _node_modules_keystone_next_fields_types_mongoId_views__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_keystone_next_fields_types_mongoId_views__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_keystone_next_fields_types_text_views__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../node_modules/@keystone-next/fields/types/text/views */ "../../node_modules/@keystone-next/fields/types/text/views/dist/fields.cjs.js");
/* harmony import */ var _node_modules_keystone_next_fields_types_text_views__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_keystone_next_fields_types_text_views__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_keystone_next_fields_types_password_views__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../node_modules/@keystone-next/fields/types/password/views */ "../../node_modules/@keystone-next/fields/types/password/views/dist/fields.cjs.js");
/* harmony import */ var _node_modules_keystone_next_fields_types_password_views__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_node_modules_keystone_next_fields_types_password_views__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _node_modules_keystone_next_fields_types_relationship_views__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../node_modules/@keystone-next/fields/types/relationship/views */ "../../node_modules/@keystone-next/fields/types/relationship/views/dist/fields.cjs.js");
/* harmony import */ var _node_modules_keystone_next_fields_types_relationship_views__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_node_modules_keystone_next_fields_types_relationship_views__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _node_modules_keystone_next_fields_types_timestamp_views__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../node_modules/@keystone-next/fields/types/timestamp/views */ "../../node_modules/@keystone-next/fields/types/timestamp/views/dist/fields.cjs.js");
/* harmony import */ var _node_modules_keystone_next_fields_types_timestamp_views__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_node_modules_keystone_next_fields_types_timestamp_views__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _node_modules_keystone_next_fields_types_select_views__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../node_modules/@keystone-next/fields/types/select/views */ "../../node_modules/@keystone-next/fields/types/select/views/dist/fields.cjs.js");
/* harmony import */ var _node_modules_keystone_next_fields_types_select_views__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_node_modules_keystone_next_fields_types_select_views__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _node_modules_keystone_next_fields_types_integer_views__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../node_modules/@keystone-next/fields/types/integer/views */ "../../node_modules/@keystone-next/fields/types/integer/views/dist/fields.cjs.js");
/* harmony import */ var _node_modules_keystone_next_fields_types_integer_views__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_node_modules_keystone_next_fields_types_integer_views__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _node_modules_keystone_next_cloudinary_views__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../node_modules/@keystone-next/cloudinary/views */ "../../node_modules/@keystone-next/cloudinary/views/dist/cloudinary.cjs.js");
/* harmony import */ var _node_modules_keystone_next_cloudinary_views__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_node_modules_keystone_next_cloudinary_views__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _node_modules_keystone_next_fields_types_virtual_views__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../node_modules/@keystone-next/fields/types/virtual/views */ "../../node_modules/@keystone-next/fields/types/virtual/views/dist/fields.cjs.js");
/* harmony import */ var _node_modules_keystone_next_fields_types_virtual_views__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_node_modules_keystone_next_fields_types_virtual_views__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _node_modules_keystone_next_fields_types_checkbox_views__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../node_modules/@keystone-next/fields/types/checkbox/views */ "../../node_modules/@keystone-next/fields/types/checkbox/views/dist/fields.cjs.js");
/* harmony import */ var _node_modules_keystone_next_fields_types_checkbox_views__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_node_modules_keystone_next_fields_types_checkbox_views__WEBPACK_IMPORTED_MODULE_13__);














const adminConfig = {};
const fieldViews = {
  viewd02b8dc7: _node_modules_keystone_next_fields_types_mongoId_views__WEBPACK_IMPORTED_MODULE_4__,
  view232f5100: _node_modules_keystone_next_fields_types_text_views__WEBPACK_IMPORTED_MODULE_5__,
  view422b92c5: _node_modules_keystone_next_fields_types_password_views__WEBPACK_IMPORTED_MODULE_6__,
  view981c7340: _node_modules_keystone_next_fields_types_relationship_views__WEBPACK_IMPORTED_MODULE_7__,
  view06aeffe1: _node_modules_keystone_next_fields_types_timestamp_views__WEBPACK_IMPORTED_MODULE_8__,
  viewce231929: _node_modules_keystone_next_fields_types_select_views__WEBPACK_IMPORTED_MODULE_9__,
  view153316d6: _node_modules_keystone_next_fields_types_integer_views__WEBPACK_IMPORTED_MODULE_10__,
  viewcc596f80: _node_modules_keystone_next_cloudinary_views__WEBPACK_IMPORTED_MODULE_11__,
  viewb7d6b25a: _node_modules_keystone_next_fields_types_virtual_views__WEBPACK_IMPORTED_MODULE_12__,
  view0361b026: _node_modules_keystone_next_fields_types_checkbox_views__WEBPACK_IMPORTED_MODULE_13__
};
const lazyMetadataQuery = {
  kind: 'Document',
  definitions: [{
    kind: 'OperationDefinition',
    operation: 'query',
    selectionSet: {
      kind: 'SelectionSet',
      selections: [{
        kind: 'Field',
        name: {
          kind: 'Name',
          value: 'keystone',
          loc: {
            start: 22,
            end: 30
          }
        },
        arguments: [],
        directives: [],
        selectionSet: {
          kind: 'SelectionSet',
          selections: [{
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'adminMeta',
              loc: {
                start: 39,
                end: 48
              }
            },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'lists',
                  loc: {
                    start: 59,
                    end: 64
                  }
                },
                arguments: [],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [{
                    kind: 'Field',
                    name: {
                      kind: 'Name',
                      value: 'key',
                      loc: {
                        start: 77,
                        end: 80
                      }
                    },
                    arguments: [],
                    directives: [],
                    loc: {
                      start: 77,
                      end: 80
                    }
                  }, {
                    kind: 'Field',
                    name: {
                      kind: 'Name',
                      value: 'isHidden',
                      loc: {
                        start: 91,
                        end: 99
                      }
                    },
                    arguments: [],
                    directives: [],
                    loc: {
                      start: 91,
                      end: 99
                    }
                  }, {
                    kind: 'Field',
                    name: {
                      kind: 'Name',
                      value: 'fields',
                      loc: {
                        start: 110,
                        end: 116
                      }
                    },
                    arguments: [],
                    directives: [],
                    selectionSet: {
                      kind: 'SelectionSet',
                      selections: [{
                        kind: 'Field',
                        name: {
                          kind: 'Name',
                          value: 'path',
                          loc: {
                            start: 131,
                            end: 135
                          }
                        },
                        arguments: [],
                        directives: [],
                        loc: {
                          start: 131,
                          end: 135
                        }
                      }, {
                        kind: 'Field',
                        name: {
                          kind: 'Name',
                          value: 'createView',
                          loc: {
                            start: 148,
                            end: 158
                          }
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [{
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'fieldMode',
                              loc: {
                                start: 175,
                                end: 184
                              }
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 175,
                              end: 184
                            }
                          }],
                          loc: {
                            start: 159,
                            end: 198
                          }
                        },
                        loc: {
                          start: 148,
                          end: 198
                        }
                      }],
                      loc: {
                        start: 117,
                        end: 210
                      }
                    },
                    loc: {
                      start: 110,
                      end: 210
                    }
                  }],
                  loc: {
                    start: 65,
                    end: 220
                  }
                },
                loc: {
                  start: 59,
                  end: 220
                }
              }],
              loc: {
                start: 49,
                end: 228
              }
            },
            loc: {
              start: 39,
              end: 228
            }
          }],
          loc: {
            start: 31,
            end: 234
          }
        },
        loc: {
          start: 22,
          end: 234
        }
      }, {
        kind: 'Field',
        name: {
          kind: 'Name',
          value: 'authenticatedItem'
        },
        selectionSet: {
          kind: 'SelectionSet',
          selections: [{
            kind: 'InlineFragment',
            typeCondition: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'User'
              }
            },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'id'
                }
              }, {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'name'
                }
              }]
            }
          }]
        }
      }]
    }
  }]
};
function App({
  Component,
  pageProps
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_keystone_ui_core__WEBPACK_IMPORTED_MODULE_3__["Core"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_keystone_next_admin_ui_context__WEBPACK_IMPORTED_MODULE_1__["KeystoneProvider"], {
    adminConfig: adminConfig,
    adminMetaHash: "1d9uyvc",
    fieldViews: fieldViews,
    lazyMetadataQuery: lazyMetadataQuery
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_keystone_next_admin_ui_components__WEBPACK_IMPORTED_MODULE_2__["ErrorBoundary"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, pageProps))));
}

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@keystone-next/admin-ui-utils":
/*!************************************************!*\
  !*** external "@keystone-next/admin-ui-utils" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-next/admin-ui-utils");

/***/ }),

/***/ "@keystone-next/admin-ui/apollo":
/*!*************************************************!*\
  !*** external "@keystone-next/admin-ui/apollo" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-next/admin-ui/apollo");

/***/ }),

/***/ "@keystone-next/admin-ui/components":
/*!*****************************************************!*\
  !*** external "@keystone-next/admin-ui/components" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-next/admin-ui/components");

/***/ }),

/***/ "@keystone-next/admin-ui/context":
/*!**************************************************!*\
  !*** external "@keystone-next/admin-ui/context" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-next/admin-ui/context");

/***/ }),

/***/ "@keystone-next/admin-ui/router":
/*!*************************************************!*\
  !*** external "@keystone-next/admin-ui/router" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-next/admin-ui/router");

/***/ }),

/***/ "@keystone-ui/button":
/*!**************************************!*\
  !*** external "@keystone-ui/button" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-ui/button");

/***/ }),

/***/ "@keystone-ui/core":
/*!************************************!*\
  !*** external "@keystone-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-ui/core");

/***/ }),

/***/ "@keystone-ui/fields":
/*!**************************************!*\
  !*** external "@keystone-ui/fields" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-ui/fields");

/***/ }),

/***/ "@keystone-ui/icons/icons/EyeIcon":
/*!***************************************************!*\
  !*** external "@keystone-ui/icons/icons/EyeIcon" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-ui/icons/icons/EyeIcon");

/***/ }),

/***/ "@keystone-ui/icons/icons/EyeOffIcon":
/*!******************************************************!*\
  !*** external "@keystone-ui/icons/icons/EyeOffIcon" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-ui/icons/icons/EyeOffIcon");

/***/ }),

/***/ "@keystone-ui/icons/icons/XIcon":
/*!*************************************************!*\
  !*** external "@keystone-ui/icons/icons/XIcon" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-ui/icons/icons/XIcon");

/***/ }),

/***/ "@keystone-ui/loading":
/*!***************************************!*\
  !*** external "@keystone-ui/loading" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-ui/loading");

/***/ }),

/***/ "@keystone-ui/modals":
/*!**************************************!*\
  !*** external "@keystone-ui/modals" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-ui/modals");

/***/ }),

/***/ "@keystone-ui/pill":
/*!************************************!*\
  !*** external "@keystone-ui/pill" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-ui/pill");

/***/ }),

/***/ "@keystone-ui/segmented-control":
/*!*************************************************!*\
  !*** external "@keystone-ui/segmented-control" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-ui/segmented-control");

/***/ }),

/***/ "@keystone-ui/toast":
/*!*************************************!*\
  !*** external "@keystone-ui/toast" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-ui/toast");

/***/ }),

/***/ "@keystone-ui/tooltip":
/*!***************************************!*\
  !*** external "@keystone-ui/tooltip" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-ui/tooltip");

/***/ }),

/***/ "date-fns":
/*!***************************!*\
  !*** external "date-fns" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("date-fns");

/***/ }),

/***/ "fast-deep-equal":
/*!**********************************!*\
  !*** external "fast-deep-equal" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fast-deep-equal");

/***/ }),

/***/ "intersection-observer":
/*!****************************************!*\
  !*** external "intersection-observer" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("intersection-observer");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL0M6L1dlYkRFVi9DIE8gVSBSIFMgRSBTL2Vjb21tZXJjZS13ZXNib3MvYmFja2VuZC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vQzovV2ViREVWL0MgTyBVIFIgUyBFIFMvZWNvbW1lcmNlLXdlc2Jvcy9iYWNrZW5kL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vL0M6L1dlYkRFVi9DIE8gVSBSIFMgRSBTL2Vjb21tZXJjZS13ZXNib3MvYmFja2VuZC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RTcHJlYWQyLmpzIiwid2VicGFjazovLy9DOi9XZWJERVYvQyBPIFUgUiBTIEUgUy9lY29tbWVyY2Utd2VzYm9zL2JhY2tlbmQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vL0M6L1dlYkRFVi9DIE8gVSBSIFMgRSBTL2Vjb21tZXJjZS13ZXNib3MvYmFja2VuZC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwid2VicGFjazovLy9DOi9XZWJERVYvQyBPIFUgUiBTIEUgUy9lY29tbWVyY2Utd2VzYm9zL2JhY2tlbmQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9QcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vL0M6L1dlYkRFVi9DIE8gVSBSIFMgRSBTL2Vjb21tZXJjZS13ZXNib3MvYmFja2VuZC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b1Byb3BlcnR5S2V5LmpzIiwid2VicGFjazovLy9DOi9XZWJERVYvQyBPIFUgUiBTIEUgUy9lY29tbWVyY2Utd2VzYm9zL2JhY2tlbmQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy9DOi9XZWJERVYvQyBPIFUgUiBTIEUgUy9lY29tbWVyY2Utd2VzYm9zL2JhY2tlbmQvbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2Nsb3VkaW5hcnkvdmlld3MvZGlzdC9jbG91ZGluYXJ5LmNqcy5kZXYuanMiLCJ3ZWJwYWNrOi8vL0M6L1dlYkRFVi9DIE8gVSBSIFMgRSBTL2Vjb21tZXJjZS13ZXNib3MvYmFja2VuZC9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQvY2xvdWRpbmFyeS92aWV3cy9kaXN0L2Nsb3VkaW5hcnkuY2pzLmpzIiwid2VicGFjazovLy9DOi9XZWJERVYvQyBPIFUgUiBTIEUgUy9lY29tbWVyY2Utd2VzYm9zL2JhY2tlbmQvbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2ZpZWxkcy90eXBlcy9jaGVja2JveC92aWV3cy9kaXN0L2ZpZWxkcy5janMuZGV2LmpzIiwid2VicGFjazovLy9DOi9XZWJERVYvQyBPIFUgUiBTIEUgUy9lY29tbWVyY2Utd2VzYm9zL2JhY2tlbmQvbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2ZpZWxkcy90eXBlcy9jaGVja2JveC92aWV3cy9kaXN0L2ZpZWxkcy5janMuanMiLCJ3ZWJwYWNrOi8vL0M6L1dlYkRFVi9DIE8gVSBSIFMgRSBTL2Vjb21tZXJjZS13ZXNib3MvYmFja2VuZC9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQvZmllbGRzL3R5cGVzL2ludGVnZXIvdmlld3MvZGlzdC9maWVsZHMuY2pzLmRldi5qcyIsIndlYnBhY2s6Ly8vQzovV2ViREVWL0MgTyBVIFIgUyBFIFMvZWNvbW1lcmNlLXdlc2Jvcy9iYWNrZW5kL25vZGVfbW9kdWxlcy9Aa2V5c3RvbmUtbmV4dC9maWVsZHMvdHlwZXMvaW50ZWdlci92aWV3cy9kaXN0L2ZpZWxkcy5janMuanMiLCJ3ZWJwYWNrOi8vL0M6L1dlYkRFVi9DIE8gVSBSIFMgRSBTL2Vjb21tZXJjZS13ZXNib3MvYmFja2VuZC9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQvZmllbGRzL3R5cGVzL21vbmdvSWQvdmlld3MvZGlzdC9maWVsZHMuY2pzLmRldi5qcyIsIndlYnBhY2s6Ly8vQzovV2ViREVWL0MgTyBVIFIgUyBFIFMvZWNvbW1lcmNlLXdlc2Jvcy9iYWNrZW5kL25vZGVfbW9kdWxlcy9Aa2V5c3RvbmUtbmV4dC9maWVsZHMvdHlwZXMvbW9uZ29JZC92aWV3cy9kaXN0L2ZpZWxkcy5janMuanMiLCJ3ZWJwYWNrOi8vL0M6L1dlYkRFVi9DIE8gVSBSIFMgRSBTL2Vjb21tZXJjZS13ZXNib3MvYmFja2VuZC9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQvZmllbGRzL3R5cGVzL3Bhc3N3b3JkL3ZpZXdzL2Rpc3QvZmllbGRzLmNqcy5kZXYuanMiLCJ3ZWJwYWNrOi8vL0M6L1dlYkRFVi9DIE8gVSBSIFMgRSBTL2Vjb21tZXJjZS13ZXNib3MvYmFja2VuZC9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQvZmllbGRzL3R5cGVzL3Bhc3N3b3JkL3ZpZXdzL2Rpc3QvZmllbGRzLmNqcy5qcyIsIndlYnBhY2s6Ly8vQzovV2ViREVWL0MgTyBVIFIgUyBFIFMvZWNvbW1lcmNlLXdlc2Jvcy9iYWNrZW5kL25vZGVfbW9kdWxlcy9Aa2V5c3RvbmUtbmV4dC9maWVsZHMvdHlwZXMvcmVsYXRpb25zaGlwL3ZpZXdzL1JlbGF0aW9uc2hpcFNlbGVjdC9kaXN0L2ZpZWxkcy5janMuZGV2LmpzIiwid2VicGFjazovLy9DOi9XZWJERVYvQyBPIFUgUiBTIEUgUy9lY29tbWVyY2Utd2VzYm9zL2JhY2tlbmQvbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2ZpZWxkcy90eXBlcy9yZWxhdGlvbnNoaXAvdmlld3MvZGlzdC9maWVsZHMuY2pzLmRldi5qcyIsIndlYnBhY2s6Ly8vQzovV2ViREVWL0MgTyBVIFIgUyBFIFMvZWNvbW1lcmNlLXdlc2Jvcy9iYWNrZW5kL25vZGVfbW9kdWxlcy9Aa2V5c3RvbmUtbmV4dC9maWVsZHMvdHlwZXMvcmVsYXRpb25zaGlwL3ZpZXdzL2Rpc3QvZmllbGRzLmNqcy5qcyIsIndlYnBhY2s6Ly8vQzovV2ViREVWL0MgTyBVIFIgUyBFIFMvZWNvbW1lcmNlLXdlc2Jvcy9iYWNrZW5kL25vZGVfbW9kdWxlcy9Aa2V5c3RvbmUtbmV4dC9maWVsZHMvdHlwZXMvc2VsZWN0L3ZpZXdzL2Rpc3QvZmllbGRzLmNqcy5kZXYuanMiLCJ3ZWJwYWNrOi8vL0M6L1dlYkRFVi9DIE8gVSBSIFMgRSBTL2Vjb21tZXJjZS13ZXNib3MvYmFja2VuZC9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQvZmllbGRzL3R5cGVzL3NlbGVjdC92aWV3cy9kaXN0L2ZpZWxkcy5janMuanMiLCJ3ZWJwYWNrOi8vL0M6L1dlYkRFVi9DIE8gVSBSIFMgRSBTL2Vjb21tZXJjZS13ZXNib3MvYmFja2VuZC9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQvZmllbGRzL3R5cGVzL3RleHQvdmlld3MvZGlzdC9maWVsZHMuY2pzLmRldi5qcyIsIndlYnBhY2s6Ly8vQzovV2ViREVWL0MgTyBVIFIgUyBFIFMvZWNvbW1lcmNlLXdlc2Jvcy9iYWNrZW5kL25vZGVfbW9kdWxlcy9Aa2V5c3RvbmUtbmV4dC9maWVsZHMvdHlwZXMvdGV4dC92aWV3cy9kaXN0L2ZpZWxkcy5janMuanMiLCJ3ZWJwYWNrOi8vL0M6L1dlYkRFVi9DIE8gVSBSIFMgRSBTL2Vjb21tZXJjZS13ZXNib3MvYmFja2VuZC9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQvZmllbGRzL3R5cGVzL3RpbWVzdGFtcC92aWV3cy9kaXN0L2ZpZWxkcy5janMuZGV2LmpzIiwid2VicGFjazovLy9DOi9XZWJERVYvQyBPIFUgUiBTIEUgUy9lY29tbWVyY2Utd2VzYm9zL2JhY2tlbmQvbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2ZpZWxkcy90eXBlcy90aW1lc3RhbXAvdmlld3MvZGlzdC9maWVsZHMuY2pzLmpzIiwid2VicGFjazovLy9DOi9XZWJERVYvQyBPIFUgUiBTIEUgUy9lY29tbWVyY2Utd2VzYm9zL2JhY2tlbmQvbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2ZpZWxkcy90eXBlcy92aXJ0dWFsL3ZpZXdzL2Rpc3QvZmllbGRzLmNqcy5kZXYuanMiLCJ3ZWJwYWNrOi8vL0M6L1dlYkRFVi9DIE8gVSBSIFMgRSBTL2Vjb21tZXJjZS13ZXNib3MvYmFja2VuZC9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQvZmllbGRzL3R5cGVzL3ZpcnR1YWwvdmlld3MvZGlzdC9maWVsZHMuY2pzLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGtleXN0b25lLW5leHQvYWRtaW4tdWktdXRpbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAa2V5c3RvbmUtbmV4dC9hZG1pbi11aS9hcG9sbG9cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAa2V5c3RvbmUtbmV4dC9hZG1pbi11aS9jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGtleXN0b25lLW5leHQvYWRtaW4tdWkvY29udGV4dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBrZXlzdG9uZS1uZXh0L2FkbWluLXVpL3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBrZXlzdG9uZS11aS9idXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAa2V5c3RvbmUtdWkvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBrZXlzdG9uZS11aS9maWVsZHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAa2V5c3RvbmUtdWkvaWNvbnMvaWNvbnMvRXllSWNvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBrZXlzdG9uZS11aS9pY29ucy9pY29ucy9FeWVPZmZJY29uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGtleXN0b25lLXVpL2ljb25zL2ljb25zL1hJY29uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGtleXN0b25lLXVpL2xvYWRpbmdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAa2V5c3RvbmUtdWkvbW9kYWxzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGtleXN0b25lLXVpL3BpbGxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAa2V5c3RvbmUtdWkvc2VnbWVudGVkLWNvbnRyb2xcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAa2V5c3RvbmUtdWkvdG9hc3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAa2V5c3RvbmUtdWkvdG9vbHRpcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImRhdGUtZm5zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmFzdC1kZWVwLWVxdWFsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW50ZXJzZWN0aW9uLW9ic2VydmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJhZG1pbkNvbmZpZyIsImZpZWxkVmlld3MiLCJ2aWV3ZDAyYjhkYzciLCJ2aWV3MjMyZjUxMDAiLCJ2aWV3NDIyYjkyYzUiLCJ2aWV3OTgxYzczNDAiLCJ2aWV3MDZhZWZmZTEiLCJ2aWV3Y2UyMzE5MjkiLCJ2aWV3MTUzMzE2ZDYiLCJ2aWV3Y2M1OTZmODAiLCJ2aWV3YjdkNmIyNWEiLCJ2aWV3MDM2MWIwMjYiLCJsYXp5TWV0YWRhdGFRdWVyeSIsImtpbmQiLCJkZWZpbml0aW9ucyIsIm9wZXJhdGlvbiIsInNlbGVjdGlvblNldCIsInNlbGVjdGlvbnMiLCJuYW1lIiwidmFsdWUiLCJsb2MiLCJzdGFydCIsImVuZCIsImFyZ3VtZW50cyIsImRpcmVjdGl2ZXMiLCJ0eXBlQ29uZGl0aW9uIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtR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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLHVCQUF1QjtBQUNsRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLGtDQUFrQyxZQUFZO0FBQzlDLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLFlBQVk7QUFDM0Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLCtDQUErQyxZQUFZO0FBQzNEO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLFlBQVk7QUFDM0Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxZQUFZO0FBQzNEO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLFlBQVk7QUFDM0Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxL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QSxnRDs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSw2RDs7Ozs7Ozs7Ozs7QUNBQSxnRTs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5OyIsImZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kczsiLCJ2YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiLi9kZWZpbmVQcm9wZXJ0eVwiKTtcblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpO1xuICAgIGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHtcbiAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlO1xuICAgIH0pO1xuICAgIGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTtcbiAgfVxuXG4gIHJldHVybiBrZXlzO1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkMih0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTtcblxuICAgIGlmIChpICUgMikge1xuICAgICAgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9vYmplY3RTcHJlYWQyOyIsInZhciBvYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlID0gcmVxdWlyZShcIi4vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiKTtcblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSBvYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpO1xuICB2YXIga2V5LCBpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTtcbiAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlO1xuICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllczsiLCJmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKGlucHV0LCBoaW50KSB7XG4gIGlmIChfdHlwZW9mKGlucHV0KSAhPT0gXCJvYmplY3RcIiB8fCBpbnB1dCA9PT0gbnVsbCkgcmV0dXJuIGlucHV0O1xuICB2YXIgcHJpbSA9IGlucHV0W1N5bWJvbC50b1ByaW1pdGl2ZV07XG5cbiAgaWYgKHByaW0gIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgXCJkZWZhdWx0XCIpO1xuICAgIGlmIChfdHlwZW9mKHJlcykgIT09IFwib2JqZWN0XCIpIHJldHVybiByZXM7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpO1xuICB9XG5cbiAgcmV0dXJuIChoaW50ID09PSBcInN0cmluZ1wiID8gU3RyaW5nIDogTnVtYmVyKShpbnB1dCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3RvUHJpbWl0aXZlOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKFwiLi90b1ByaW1pdGl2ZVwiKTtcblxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkoYXJnKSB7XG4gIHZhciBrZXkgPSB0b1ByaW1pdGl2ZShhcmcsIFwic3RyaW5nXCIpO1xuICByZXR1cm4gX3R5cGVvZihrZXkpID09PSBcInN5bWJvbFwiID8ga2V5IDogU3RyaW5nKGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3RvUHJvcGVydHlLZXk7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGNvcmUgPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvY29yZScpO1xudmFyIF9leHRlbmRzID0gcmVxdWlyZSgnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzJyk7XG52YXIgcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIGZpZWxkcyA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9maWVsZHMnKTtcbnZhciBwaWxsID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL3BpbGwnKTtcbnZhciBidXR0b24gPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvYnV0dG9uJyk7XG5cbmZ1bmN0aW9uIHVzZU9iamVjdFVSTChmaWxlRGF0YSkge1xuICBsZXQgW29iamVjdFVSTCwgc2V0T2JqZWN0VVJMXSA9IHJlYWN0LnVzZVN0YXRlKHVuZGVmaW5lZCk7XG4gIHJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGZpbGVEYXRhKSB7XG4gICAgICBsZXQgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlRGF0YSk7XG4gICAgICBzZXRPYmplY3RVUkwodXJsKTtcbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwodXJsKTtcbiAgICAgIH07XG4gICAgfVxuICB9LCBbZmlsZURhdGFdKTtcbiAgcmV0dXJuIG9iamVjdFVSTDtcbn1cblxuZnVuY3Rpb24gRmllbGQoe1xuICBhdXRvRm9jdXMsXG4gIGZpZWxkLFxuICB2YWx1ZSxcbiAgb25DaGFuZ2Vcbn0pIHtcbiAgY29uc3QgaW5wdXRSZWYgPSByZWFjdC51c2VSZWYobnVsbCk7XG4gIGNvbnN0IGVycm9yTWVzc2FnZSA9IHZhbHVlLmtpbmQgPT09ICd1cGxvYWQnID8gdmFsaWRhdGVJbWFnZSh2YWx1ZS5kYXRhKSA6IHVuZGVmaW5lZDtcbiAgY29uc3QgaW1hZ2VQYXRoRnJvbVVwbG9hZCA9IHVzZU9iamVjdFVSTChlcnJvck1lc3NhZ2UgPT09IHVuZGVmaW5lZCAmJiB2YWx1ZS5raW5kID09PSAndXBsb2FkJyA/IHZhbHVlLmRhdGEuZmlsZSA6IHVuZGVmaW5lZCk7XG4gIGNvbnN0IGltYWdlUGF0aCA9IHZhbHVlLmtpbmQgPT09ICdmcm9tLXNlcnZlcicgPyB2YWx1ZS5kYXRhLnB1YmxpY1VybFRyYW5zZm9ybWVkIDogaW1hZ2VQYXRoRnJvbVVwbG9hZDsgLy8gR2VuZXJhdGUgYSByYW5kb20gaW5wdXQga2V5IHdoZW4gdGhlIHZhbHVlIGNoYW5nZXMsIHRvIGVuc3VyZSB0aGUgZmlsZSBpbnB1dCBpcyB1bm1vdW50ZWQgYW5kXG4gIC8vIHJlbW91bnRlZCAodGhpcyBpcyB0aGUgb25seSB3YXkgdG8gcmVzZXQgaXRzIHZhbHVlIGFuZCBlbnN1cmUgb25DaGFuZ2Ugd2lsbCBmaXJlIGFnYWluIGlmXG4gIC8vIHRoZSB1c2VyIHNlbGVjdHMgdGhlIHNhbWUgZmlsZSBhZ2FpbilcblxuICBjb25zdCBpbnB1dEtleSA9IHJlYWN0LnVzZU1lbW8oKCkgPT4gTWF0aC5yYW5kb20oKSwgW3ZhbHVlXSk7XG4gIHJldHVybiBjb3JlLmpzeChmaWVsZHMuRmllbGRDb250YWluZXIsIG51bGwsIGNvcmUuanN4KGZpZWxkcy5GaWVsZExhYmVsLCBudWxsLCBmaWVsZC5sYWJlbCksIHZhbHVlLmtpbmQgPT09ICdmcm9tLXNlcnZlcicgfHwgdmFsdWUua2luZCA9PT0gJ3VwbG9hZCcgPyBjb3JlLmpzeChjb3JlLlN0YWNrLCB7XG4gICAgZ2FwOiBcInNtYWxsXCJcbiAgfSwgaW1hZ2VQYXRoICYmIGVycm9yTWVzc2FnZSA9PT0gdW5kZWZpbmVkICYmIGNvcmUuanN4KEltYWdlLCB7XG4gICAgc3JjOiBpbWFnZVBhdGgsXG4gICAgYWx0OiBmaWVsZC5wYXRoXG4gIH0pLCBvbkNoYW5nZSAmJiBjb3JlLmpzeChjb3JlLlN0YWNrLCB7XG4gICAgYWNyb3NzOiB0cnVlLFxuICAgIGdhcDogXCJzbWFsbFwiLFxuICAgIGFsaWduOiBcImNlbnRlclwiXG4gIH0sIGNvcmUuanN4KGJ1dHRvbi5CdXR0b24sIHtcbiAgICBzaXplOiBcInNtYWxsXCIsXG4gICAgb25DbGljazogKCkgPT4ge1xuICAgICAgdmFyIF9pbnB1dFJlZiRjdXJyZW50O1xuXG4gICAgICAoX2lucHV0UmVmJGN1cnJlbnQgPSBpbnB1dFJlZi5jdXJyZW50KSA9PT0gbnVsbCB8fCBfaW5wdXRSZWYkY3VycmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2lucHV0UmVmJGN1cnJlbnQuY2xpY2soKTtcbiAgICB9XG4gIH0sIFwiQ2hhbmdlIGltYWdlXCIpLCB2YWx1ZS5raW5kID09PSAnZnJvbS1zZXJ2ZXInICYmIGNvcmUuanN4KGJ1dHRvbi5CdXR0b24sIHtcbiAgICBzaXplOiBcInNtYWxsXCIsXG4gICAgdG9uZTogXCJuZWdhdGl2ZVwiLFxuICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgIG9uQ2hhbmdlKHtcbiAgICAgICAga2luZDogJ3JlbW92ZScsXG4gICAgICAgIHByZXZpb3VzOiB2YWx1ZVxuICAgICAgfSk7XG4gICAgfVxuICB9LCBcIlJlbW92ZVwiKSwgdmFsdWUua2luZCA9PT0gJ3VwbG9hZCcgJiYgY29yZS5qc3goYnV0dG9uLkJ1dHRvbiwge1xuICAgIHNpemU6IFwic21hbGxcIixcbiAgICB0b25lOiBcIm5lZ2F0aXZlXCIsXG4gICAgb25DbGljazogKCkgPT4ge1xuICAgICAgb25DaGFuZ2UodmFsdWUucHJldmlvdXMpO1xuICAgIH1cbiAgfSwgXCJDYW5jZWxcIiksIGVycm9yTWVzc2FnZSA/IGNvcmUuanN4KHBpbGwuUGlsbCwge1xuICAgIHRvbmU6IFwibmVnYXRpdmVcIixcbiAgICB3ZWlnaHQ6IFwibGlnaHRcIlxuICB9LCBlcnJvck1lc3NhZ2UpIDogdmFsdWUua2luZCA9PT0gJ3VwbG9hZCcgJiYgY29yZS5qc3gocGlsbC5QaWxsLCB7XG4gICAgd2VpZ2h0OiBcImxpZ2h0XCIsXG4gICAgdG9uZTogXCJwb3NpdGl2ZVwiXG4gIH0sIFwiU2F2ZSB0byB1cGxvYWQgdGhpcyBpbWFnZVwiKSkpIDogY29yZS5qc3goY29yZS5TdGFjaywge1xuICAgIGNzczoge1xuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcidcbiAgICB9LFxuICAgIGdhcDogXCJzbWFsbFwiLFxuICAgIGFjcm9zczogdHJ1ZVxuICB9LCBjb3JlLmpzeChidXR0b24uQnV0dG9uLCB7XG4gICAgc2l6ZTogXCJzbWFsbFwiLFxuICAgIGRpc2FibGVkOiBvbkNoYW5nZSA9PT0gdW5kZWZpbmVkLFxuICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgIHZhciBfaW5wdXRSZWYkY3VycmVudDI7XG5cbiAgICAgIChfaW5wdXRSZWYkY3VycmVudDIgPSBpbnB1dFJlZi5jdXJyZW50KSA9PT0gbnVsbCB8fCBfaW5wdXRSZWYkY3VycmVudDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9pbnB1dFJlZiRjdXJyZW50Mi5jbGljaygpO1xuICAgIH1cbiAgfSwgXCJVcGxvYWQgSW1hZ2VcIiksIHZhbHVlLmtpbmQgPT09ICdyZW1vdmUnICYmIGNvcmUuanN4KGJ1dHRvbi5CdXR0b24sIHtcbiAgICBzaXplOiBcInNtYWxsXCIsXG4gICAgdG9uZTogXCJuZWdhdGl2ZVwiLFxuICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgIG9uQ2hhbmdlID09PSBudWxsIHx8IG9uQ2hhbmdlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvbkNoYW5nZSh2YWx1ZS5wcmV2aW91cyk7XG4gICAgfVxuICB9LCBcIlVuZG8gcmVtb3ZhbFwiKSwgdmFsdWUua2luZCA9PT0gJ3JlbW92ZScgJiYgLy8gTk9URSAtLSBVWCBkZWNpc2lvbiBpcyB0byBub3QgZGlzcGxheSB0aGlzLCBJIHRoaW5rIGl0IHdvdWxkIG9ubHkgYmUgcmVsZXZhbnRcbiAgLy8gZm9yIGRlbGV0aW5nIHVwbG9hZGVkIGltYWdlcyAoYW5kIHdlIGRvbid0IHN1cHBvcnQgdGhhdCB5ZXQpXG4gIC8vIDxQaWxsIHdlaWdodD1cImxpZ2h0XCIgdG9uZT1cIndhcm5pbmdcIj5cbiAgLy8gICBTYXZlIHRvIHJlbW92ZSB0aGlzIGltYWdlXG4gIC8vIDwvUGlsbD5cbiAgbnVsbCksIGNvcmUuanN4KFwiaW5wdXRcIiwge1xuICAgIGNzczoge1xuICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgfSxcbiAgICBhdXRvQ29tcGxldGU6IFwib2ZmXCIsXG4gICAgYXV0b0ZvY3VzOiBhdXRvRm9jdXMsXG4gICAgcmVmOiBpbnB1dFJlZixcbiAgICBrZXk6IGlucHV0S2V5LFxuICAgIG5hbWU6IGZpZWxkLnBhdGgsXG4gICAgb25DaGFuZ2U6ICh7XG4gICAgICB0YXJnZXQ6IHtcbiAgICAgICAgdmFsaWRpdHksXG4gICAgICAgIGZpbGVzXG4gICAgICB9XG4gICAgfSkgPT4ge1xuICAgICAgY29uc3QgZmlsZSA9IGZpbGVzID09PSBudWxsIHx8IGZpbGVzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBmaWxlc1swXTtcbiAgICAgIGlmICghZmlsZSkgcmV0dXJuOyAvLyBiYWlsIGlmIHRoZSB1c2VyIGNhbmNlbHMgZnJvbSB0aGUgZmlsZSBicm93c2VyXG5cbiAgICAgIG9uQ2hhbmdlID09PSBudWxsIHx8IG9uQ2hhbmdlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvbkNoYW5nZSh7XG4gICAgICAgIGtpbmQ6ICd1cGxvYWQnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgZmlsZSxcbiAgICAgICAgICB2YWxpZGl0eVxuICAgICAgICB9LFxuICAgICAgICBwcmV2aW91czogdmFsdWVcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgdHlwZTogXCJmaWxlXCIsXG4gICAgZGlzYWJsZWQ6IG9uQ2hhbmdlID09PSB1bmRlZmluZWRcbiAgfSkpO1xufVxuZnVuY3Rpb24gdmFsaWRhdGVJbWFnZSh7XG4gIGZpbGUsXG4gIHZhbGlkaXR5XG59KSB7XG4gIGlmICghdmFsaWRpdHkudmFsaWQpIHtcbiAgICByZXR1cm4gJ1NvbWV0aGluZyB3ZW50IHdyb25nLCBwbGVhc2UgcmVsb2FkIGFuZCB0cnkgYWdhaW4uJztcbiAgfSAvLyBjaGVjayBpZiB0aGUgZmlsZSBpcyBhY3R1YWxseSBhbiBpbWFnZVxuXG5cbiAgaWYgKCFmaWxlLnR5cGUuaW5jbHVkZXMoJ2ltYWdlJykpIHtcbiAgICByZXR1cm4gJ09ubHkgaW1hZ2UgZmlsZXMgYXJlIGFsbG93ZWQuIFBsZWFzZSB0cnkgYWdhaW4uJztcbiAgfVxufSAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFN0eWxlZCBDb21wb25lbnRzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgSW1hZ2UgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHRoZW1lID0gY29yZS51c2VUaGVtZSgpO1xuICByZXR1cm4gY29yZS5qc3goXCJkaXZcIiwge1xuICAgIGNzczoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuICAgICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5yYWRpaS5tZWRpdW0sXG4gICAgICBib3JkZXI6IGAxcHggc29saWQgJHt0aGVtZS5jb2xvcnMuYm9yZGVyfWAsXG4gICAgICBmbGV4U2hyaW5rOiAwLFxuICAgICAgbGluZUhlaWdodDogMCxcbiAgICAgIHBhZGRpbmc6IDQsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICB3aWR0aDogMTMwIC8vIDEyMHB4IGltYWdlICsgY2hyb21lXG5cbiAgICB9XG4gIH0sIGNvcmUuanN4KFwiaW1nXCIsIF9leHRlbmRzKHtcbiAgICBjc3M6IHtcbiAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgbWF4V2lkdGg6ICcxMDAlJ1xuICAgIH1cbiAgfSwgcHJvcHMpKSk7XG59O1xuXG4vKiBAanN4IGpzeCAqL1xuY29uc3QgQ2VsbCA9ICh7XG4gIGl0ZW0sXG4gIGZpZWxkXG59KSA9PiB7XG4gIGNvbnN0IGRhdGEgPSBpdGVtW2ZpZWxkLnBhdGhdO1xuICBpZiAoIWRhdGEpIHJldHVybiBudWxsO1xuICByZXR1cm4gY29yZS5qc3goXCJkaXZcIiwge1xuICAgIGNzczoge1xuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBoZWlnaHQ6IDI0LFxuICAgICAgbGluZUhlaWdodDogMCxcbiAgICAgIHdpZHRoOiAyNFxuICAgIH1cbiAgfSwgY29yZS5qc3goXCJpbWdcIiwge1xuICAgIGFsdDogZGF0YS5maWxlbmFtZSxcbiAgICBjc3M6IHtcbiAgICAgIG1heEhlaWdodDogJzEwMCUnLFxuICAgICAgbWF4V2lkdGg6ICcxMDAlJ1xuICAgIH0sXG4gICAgc3JjOiBkYXRhLnB1YmxpY1VybFRyYW5zZm9ybWVkXG4gIH0pKTtcbn07XG5jb25zdCBDYXJkVmFsdWUgPSAoe1xuICBpdGVtLFxuICBmaWVsZFxufSkgPT4ge1xuICBjb25zdCBkYXRhID0gaXRlbVtmaWVsZC5wYXRoXTtcbiAgcmV0dXJuIGNvcmUuanN4KGZpZWxkcy5GaWVsZENvbnRhaW5lciwgbnVsbCwgY29yZS5qc3goZmllbGRzLkZpZWxkTGFiZWwsIG51bGwsIGZpZWxkLmxhYmVsKSwgZGF0YSAmJiBjb3JlLmpzeChcImltZ1wiLCB7XG4gICAgYWx0OiBkYXRhLmZpbGVuYW1lLFxuICAgIHNyYzogZGF0YS5wdWJsaWNVcmxUcmFuc2Zvcm1lZFxuICB9KSk7XG59O1xuY29uc3QgY29udHJvbGxlciA9IGNvbmZpZyA9PiB7XG4gIHJldHVybiB7XG4gICAgcGF0aDogY29uZmlnLnBhdGgsXG4gICAgbGFiZWw6IGNvbmZpZy5sYWJlbCxcbiAgICBncmFwaHFsU2VsZWN0aW9uOiBgJHtjb25maWcucGF0aH0ge1xuICAgICAgICBpZFxuICAgICAgICBmaWxlbmFtZVxuICAgICAgICBwdWJsaWNVcmxUcmFuc2Zvcm1lZCh0cmFuc2Zvcm1hdGlvbjogeyB3aWR0aDogXCIxMjBcIiBjcm9wOiBcImxpbWl0XCIgfSlcbiAgICAgIH1gLFxuICAgIGRlZmF1bHRWYWx1ZToge1xuICAgICAga2luZDogJ2VtcHR5J1xuICAgIH0sXG5cbiAgICBkZXNlcmlhbGl6ZShpdGVtKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGl0ZW1bY29uZmlnLnBhdGhdO1xuICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuIHtcbiAgICAgICAga2luZDogJ2VtcHR5J1xuICAgICAgfTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGtpbmQ6ICdmcm9tLXNlcnZlcicsXG4gICAgICAgIGRhdGE6IHZhbHVlXG4gICAgICB9O1xuICAgIH0sXG5cbiAgICB2YWxpZGF0ZSh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlLmtpbmQgIT09ICd1cGxvYWQnIHx8IHZhbGlkYXRlSW1hZ2UodmFsdWUuZGF0YSkgPT09IHVuZGVmaW5lZDtcbiAgICB9LFxuXG4gICAgc2VyaWFsaXplKHZhbHVlKSB7XG4gICAgICBpZiAodmFsdWUua2luZCA9PT0gJ3VwbG9hZCcpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBbY29uZmlnLnBhdGhdOiB2YWx1ZS5kYXRhLmZpbGVcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKHZhbHVlLmtpbmQgPT09ICdyZW1vdmUnKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgW2NvbmZpZy5wYXRoXTogbnVsbFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gIH07XG59O1xuXG5leHBvcnRzLkNhcmRWYWx1ZSA9IENhcmRWYWx1ZTtcbmV4cG9ydHMuQ2VsbCA9IENlbGw7XG5leHBvcnRzLkZpZWxkID0gRmllbGQ7XG5leHBvcnRzLmNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vY2xvdWRpbmFyeS5janMucHJvZC5qc1wiKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vY2xvdWRpbmFyeS5janMuZGV2LmpzXCIpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgY29tcG9uZW50cyA9IHJlcXVpcmUoJ0BrZXlzdG9uZS1uZXh0L2FkbWluLXVpL2NvbXBvbmVudHMnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL2NvcmUnKTtcbnZhciBmaWVsZHMgPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvZmllbGRzJyk7XG5cbi8qIEBqc3gganN4ICovXG5jb25zdCBGaWVsZCA9ICh7XG4gIGZpZWxkLFxuICB2YWx1ZSxcbiAgb25DaGFuZ2UsXG4gIGF1dG9Gb2N1c1xufSkgPT4ge1xuICBjb25zdCB7XG4gICAgZmllbGRzOiBmaWVsZHMkMSxcbiAgICB0eXBvZ3JhcGh5XG4gIH0gPSBjb3JlLnVzZVRoZW1lKCk7XG4gIHJldHVybiBjb3JlLmpzeChmaWVsZHMuRmllbGRDb250YWluZXIsIG51bGwsIGNvcmUuanN4KGZpZWxkcy5DaGVja2JveCwge1xuICAgIGF1dG9Gb2N1czogYXV0b0ZvY3VzLFxuICAgIGRpc2FibGVkOiBvbkNoYW5nZSA9PT0gdW5kZWZpbmVkLFxuICAgIG9uQ2hhbmdlOiBldmVudCA9PiB7XG4gICAgICBvbkNoYW5nZSA9PT0gbnVsbCB8fCBvbkNoYW5nZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogb25DaGFuZ2UoZXZlbnQudGFyZ2V0LmNoZWNrZWQpO1xuICAgIH0sXG4gICAgY2hlY2tlZDogdmFsdWVcbiAgfSwgY29yZS5qc3goXCJzcGFuXCIsIHtcbiAgICBjc3M6IHtcbiAgICAgIGZvbnRXZWlnaHQ6IHR5cG9ncmFwaHkuZm9udFdlaWdodC5zZW1pYm9sZCxcbiAgICAgIGNvbG9yOiBmaWVsZHMkMS5sYWJlbENvbG9yXG4gICAgfVxuICB9LCBmaWVsZC5sYWJlbCkpKTtcbn07XG5jb25zdCBDZWxsID0gKHtcbiAgaXRlbSxcbiAgZmllbGRcbn0pID0+IHtcbiAgY29uc3QgdmFsdWUgPSAhIWl0ZW1bZmllbGQucGF0aF07XG4gIHJldHVybiBjb3JlLmpzeChjb21wb25lbnRzLkNlbGxDb250YWluZXIsIG51bGwsIGNvcmUuanN4KGZpZWxkcy5DaGVja2JveCwge1xuICAgIGRpc2FibGVkOiB0cnVlLFxuICAgIGNoZWNrZWQ6IHZhbHVlLFxuICAgIHNpemU6IFwic21hbGxcIlxuICB9LCBjb3JlLmpzeChcInNwYW5cIiwge1xuICAgIGNzczoge31cbiAgfSwgdmFsdWUgPyAnVHJ1ZScgOiAnRmFsc2UnKSkpO1xufTtcbmNvbnN0IENhcmRWYWx1ZSA9ICh7XG4gIGl0ZW0sXG4gIGZpZWxkXG59KSA9PiB7XG4gIHJldHVybiBjb3JlLmpzeChmaWVsZHMuRmllbGRDb250YWluZXIsIG51bGwsIGNvcmUuanN4KGZpZWxkcy5GaWVsZExhYmVsLCBudWxsLCBmaWVsZC5sYWJlbCksIGl0ZW1bZmllbGQucGF0aF0gKyAnJyk7XG59O1xuY29uc3QgY29udHJvbGxlciA9IGNvbmZpZyA9PiB7XG4gIHJldHVybiB7XG4gICAgcGF0aDogY29uZmlnLnBhdGgsXG4gICAgbGFiZWw6IGNvbmZpZy5sYWJlbCxcbiAgICBncmFwaHFsU2VsZWN0aW9uOiBjb25maWcucGF0aCxcbiAgICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxuXG4gICAgZGVzZXJpYWxpemUoaXRlbSkge1xuICAgICAgY29uc3QgdmFsdWUgPSBpdGVtW2NvbmZpZy5wYXRoXTtcbiAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJyA/IHZhbHVlIDogZmFsc2U7XG4gICAgfSxcblxuICAgIHNlcmlhbGl6ZSh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgW2NvbmZpZy5wYXRoXTogdmFsdWVcbiAgICAgIH07XG4gICAgfSxcblxuICAgIGZpbHRlcjoge1xuICAgICAgRmlsdGVyKCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0sXG5cbiAgICAgIGdyYXBocWwoe1xuICAgICAgICB0eXBlLFxuICAgICAgICB2YWx1ZVxuICAgICAgfSkge1xuICAgICAgICBjb25zdCBrZXkgPSB0eXBlID09PSAnaXMnID8gYCR7Y29uZmlnLnBhdGh9YCA6IGAke2NvbmZpZy5wYXRofV8ke3R5cGV9YDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBba2V5XTogdmFsdWVcbiAgICAgICAgfTtcbiAgICAgIH0sXG5cbiAgICAgIExhYmVsKHtcbiAgICAgICAgbGFiZWxcbiAgICAgIH0pIHtcbiAgICAgICAgcmV0dXJuIGxhYmVsLnRvTG93ZXJDYXNlKCk7XG4gICAgICB9LFxuXG4gICAgICB0eXBlczoge1xuICAgICAgICBpczoge1xuICAgICAgICAgIGxhYmVsOiAnaXMnLFxuICAgICAgICAgIGluaXRpYWxWYWx1ZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBub3Q6IHtcbiAgICAgICAgICBsYWJlbDogJ2lzIG5vdCcsXG4gICAgICAgICAgaW5pdGlhbFZhbHVlOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG59O1xuXG5leHBvcnRzLkNhcmRWYWx1ZSA9IENhcmRWYWx1ZTtcbmV4cG9ydHMuQ2VsbCA9IENlbGw7XG5leHBvcnRzLkZpZWxkID0gRmllbGQ7XG5leHBvcnRzLmNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vZmllbGRzLmNqcy5wcm9kLmpzXCIpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9maWVsZHMuY2pzLmRldi5qc1wiKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGNvcmUgPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvY29yZScpO1xudmFyIGZpZWxkcyA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9maWVsZHMnKTtcbnZhciBjb21wb25lbnRzID0gcmVxdWlyZSgnQGtleXN0b25lLW5leHQvYWRtaW4tdWkvY29tcG9uZW50cycpO1xuXG4vKiBAanN4IGpzeCAqL1xuY29uc3QgRmllbGQgPSAoe1xuICBmaWVsZCxcbiAgdmFsdWUsXG4gIG9uQ2hhbmdlLFxuICBhdXRvRm9jdXNcbn0pID0+IGNvcmUuanN4KGZpZWxkcy5GaWVsZENvbnRhaW5lciwgbnVsbCwgY29yZS5qc3goZmllbGRzLkZpZWxkTGFiZWwsIG51bGwsIGZpZWxkLmxhYmVsKSwgb25DaGFuZ2UgPyBjb3JlLmpzeChmaWVsZHMuVGV4dElucHV0LCB7XG4gIGF1dG9Gb2N1czogYXV0b0ZvY3VzLFxuICB0eXBlOiBcIm51bWJlclwiLFxuICBvbkNoYW5nZTogZXZlbnQgPT4ge1xuICAgIG9uQ2hhbmdlKGV2ZW50LnRhcmdldC52YWx1ZS5yZXBsYWNlKC9cXEQvZywgJycpKTtcbiAgfSxcbiAgdmFsdWU6IHZhbHVlXG59KSA6IHZhbHVlKTtcbmNvbnN0IENlbGwgPSAoe1xuICBpdGVtLFxuICBmaWVsZCxcbiAgbGlua1RvXG59KSA9PiB7XG4gIGxldCB2YWx1ZSA9IGl0ZW1bZmllbGQucGF0aF0gKyAnJztcbiAgcmV0dXJuIGxpbmtUbyA/IGNvcmUuanN4KGNvbXBvbmVudHMuQ2VsbExpbmssIGxpbmtUbywgdmFsdWUpIDogY29yZS5qc3goY29tcG9uZW50cy5DZWxsQ29udGFpbmVyLCBudWxsLCB2YWx1ZSk7XG59O1xuQ2VsbC5zdXBwb3J0c0xpbmtUbyA9IHRydWU7XG5jb25zdCBDYXJkVmFsdWUgPSAoe1xuICBpdGVtLFxuICBmaWVsZFxufSkgPT4ge1xuICByZXR1cm4gY29yZS5qc3goZmllbGRzLkZpZWxkQ29udGFpbmVyLCBudWxsLCBjb3JlLmpzeChmaWVsZHMuRmllbGRMYWJlbCwgbnVsbCwgZmllbGQubGFiZWwpLCBpdGVtW2ZpZWxkLnBhdGhdKTtcbn07XG5jb25zdCBjb250cm9sbGVyID0gY29uZmlnID0+IHtcbiAgcmV0dXJuIHtcbiAgICBwYXRoOiBjb25maWcucGF0aCxcbiAgICBsYWJlbDogY29uZmlnLmxhYmVsLFxuICAgIGdyYXBocWxTZWxlY3Rpb246IGNvbmZpZy5wYXRoLFxuICAgIGRlZmF1bHRWYWx1ZTogJycsXG4gICAgZGVzZXJpYWxpemU6IGRhdGEgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBkYXRhW2NvbmZpZy5wYXRoXTtcbiAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInID8gdmFsdWUgKyAnJyA6ICcnO1xuICAgIH0sXG4gICAgc2VyaWFsaXplOiB2YWx1ZSA9PiAoe1xuICAgICAgW2NvbmZpZy5wYXRoXTogdmFsdWUgPT09ICcnID8gbnVsbCA6IHBhcnNlSW50KHZhbHVlLCAxMClcbiAgICB9KSxcbiAgICBmaWx0ZXI6IHtcbiAgICAgIEZpbHRlcihwcm9wcykge1xuICAgICAgICByZXR1cm4gY29yZS5qc3goZmllbGRzLlRleHRJbnB1dCwge1xuICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICAgICAgb25DaGFuZ2U6IGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHByb3BzLm9uQ2hhbmdlKGV2ZW50LnRhcmdldC52YWx1ZS5yZXBsYWNlKC9bXlxcZCxcXHNdL2csICcnKSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICB2YWx1ZTogcHJvcHMudmFsdWUsXG4gICAgICAgICAgYXV0b0ZvY3VzOiBwcm9wcy5hdXRvRm9jdXNcbiAgICAgICAgfSk7XG4gICAgICB9LFxuXG4gICAgICBncmFwaHFsOiAoe1xuICAgICAgICB0eXBlLFxuICAgICAgICB2YWx1ZVxuICAgICAgfSkgPT4ge1xuICAgICAgICBjb25zdCBrZXkgPSB0eXBlID09PSAnaXMnID8gY29uZmlnLnBhdGggOiBgJHtjb25maWcucGF0aH1fJHt0eXBlfWA7XG4gICAgICAgIGNvbnN0IHZhbHVlV2l0aG91dFdoaXRlc3BhY2UgPSB2YWx1ZS5yZXBsYWNlKC9cXHMvZywgJycpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIFtrZXldOiBbJ2luJywgJ25vdF9pbiddLmluY2x1ZGVzKHR5cGUpID8gdmFsdWVXaXRob3V0V2hpdGVzcGFjZS5zcGxpdCgnLCcpLm1hcChpID0+IHBhcnNlSW50KGkpKSA6IHBhcnNlSW50KHZhbHVlV2l0aG91dFdoaXRlc3BhY2UpXG4gICAgICAgIH07XG4gICAgICB9LFxuXG4gICAgICBMYWJlbCh7XG4gICAgICAgIGxhYmVsLFxuICAgICAgICB2YWx1ZSxcbiAgICAgICAgdHlwZVxuICAgICAgfSkge1xuICAgICAgICBsZXQgcmVuZGVyZWRWYWx1ZSA9IHZhbHVlO1xuXG4gICAgICAgIGlmIChbJ2luJywgJ25vdF9pbiddLmluY2x1ZGVzKHR5cGUpKSB7XG4gICAgICAgICAgcmVuZGVyZWRWYWx1ZSA9IHZhbHVlLnNwbGl0KCcsJykubWFwKHZhbHVlID0+IHZhbHVlLnRyaW0oKSkuam9pbignLCAnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBgJHtsYWJlbC50b0xvd2VyQ2FzZSgpfTogJHtyZW5kZXJlZFZhbHVlfWA7XG4gICAgICB9LFxuXG4gICAgICB0eXBlczoge1xuICAgICAgICBpczoge1xuICAgICAgICAgIGxhYmVsOiAnSXMgZXhhY3RseScsXG4gICAgICAgICAgaW5pdGlhbFZhbHVlOiAnJ1xuICAgICAgICB9LFxuICAgICAgICBub3Q6IHtcbiAgICAgICAgICBsYWJlbDogJ0lzIG5vdCBleGFjdGx5JyxcbiAgICAgICAgICBpbml0aWFsVmFsdWU6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIGd0OiB7XG4gICAgICAgICAgbGFiZWw6ICdJcyBncmVhdGVyIHRoYW4nLFxuICAgICAgICAgIGluaXRpYWxWYWx1ZTogJydcbiAgICAgICAgfSxcbiAgICAgICAgbHQ6IHtcbiAgICAgICAgICBsYWJlbDogJ0lzIGxlc3MgdGhhbicsXG4gICAgICAgICAgaW5pdGlhbFZhbHVlOiAnJ1xuICAgICAgICB9LFxuICAgICAgICBndGU6IHtcbiAgICAgICAgICBsYWJlbDogJ0lzIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0bycsXG4gICAgICAgICAgaW5pdGlhbFZhbHVlOiAnJ1xuICAgICAgICB9LFxuICAgICAgICBsdGU6IHtcbiAgICAgICAgICBsYWJlbDogJ0lzIGxlc3MgdGhhbiBvciBlcXVhbCB0bycsXG4gICAgICAgICAgaW5pdGlhbFZhbHVlOiAnJ1xuICAgICAgICB9LFxuICAgICAgICBpbjoge1xuICAgICAgICAgIGxhYmVsOiAnSXMgb25lIG9mJyxcbiAgICAgICAgICBpbml0aWFsVmFsdWU6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIG5vdF9pbjoge1xuICAgICAgICAgIGxhYmVsOiAnSXMgbm90IG9uZSBvZicsXG4gICAgICAgICAgaW5pdGlhbFZhbHVlOiAnJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xufTtcblxuZXhwb3J0cy5DYXJkVmFsdWUgPSBDYXJkVmFsdWU7XG5leHBvcnRzLkNlbGwgPSBDZWxsO1xuZXhwb3J0cy5GaWVsZCA9IEZpZWxkO1xuZXhwb3J0cy5jb250cm9sbGVyID0gY29udHJvbGxlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2ZpZWxkcy5janMucHJvZC5qc1wiKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vZmllbGRzLmNqcy5kZXYuanNcIik7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBjb3JlID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL2NvcmUnKTtcbnZhciBmaWVsZHMgPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvZmllbGRzJyk7XG52YXIgdHlwZXNfdGV4dF92aWV3c19kaXN0X2ZpZWxkcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3RleHQvdmlld3MvZGlzdC9maWVsZHMuY2pzLmRldi5qcycpO1xucmVxdWlyZSgnQGtleXN0b25lLW5leHQvYWRtaW4tdWkvY29tcG9uZW50cycpO1xuXG4vKiBAanN4IGpzeCAqL1xuY29uc3QgY29udHJvbGxlciA9IGNvbmZpZyA9PiB7XG4gIHJldHVybiB7XG4gICAgcGF0aDogY29uZmlnLnBhdGgsXG4gICAgbGFiZWw6IGNvbmZpZy5sYWJlbCxcbiAgICBncmFwaHFsU2VsZWN0aW9uOiBjb25maWcucGF0aCxcbiAgICBkZWZhdWx0VmFsdWU6ICcnLFxuXG4gICAgZGVzZXJpYWxpemUoaXRlbSkge1xuICAgICAgY29uc3QgdmFsdWUgPSBpdGVtW2NvbmZpZy5wYXRoXTtcbiAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gdmFsdWUgOiAnJztcbiAgICB9LFxuXG4gICAgc2VyaWFsaXplKHZhbHVlKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBbY29uZmlnLnBhdGhdOiB2YWx1ZVxuICAgICAgfTtcbiAgICB9LFxuXG4gICAgZmlsdGVyOiB7XG4gICAgICBGaWx0ZXIocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIGNvcmUuanN4KGZpZWxkcy5UZXh0SW5wdXQsIHtcbiAgICAgICAgICBvbkNoYW5nZTogZXZlbnQgPT4ge1xuICAgICAgICAgICAgcHJvcHMub25DaGFuZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHZhbHVlOiBwcm9wcy52YWx1ZSxcbiAgICAgICAgICBhdXRvRm9jdXM6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9LFxuXG4gICAgICBncmFwaHFsKHtcbiAgICAgICAgdHlwZSxcbiAgICAgICAgdmFsdWVcbiAgICAgIH0pIHtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSAnaXMnOlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIFtjb25maWcucGF0aF06IHZhbHVlXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICBjYXNlICdub3QnOlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIFtgJHtjb25maWcucGF0aH1fbm90YF06IHZhbHVlXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICBjYXNlICdpbic6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgW2Ake2NvbmZpZy5wYXRofV9pbmBdOiB2YWx1ZS5zcGxpdCgnLCcpLm1hcCh2YWx1ZSA9PiB2YWx1ZS50cmltKCkpXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICBjYXNlICdub3RfaW4nOlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIFtgJHtjb25maWcucGF0aH1fbm90X2luYF06IHZhbHVlLnNwbGl0KCcsJykubWFwKHZhbHVlID0+IHZhbHVlLnRyaW0oKSlcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7fTtcbiAgICAgIH0sXG5cbiAgICAgIExhYmVsKHtcbiAgICAgICAgbGFiZWwsXG4gICAgICAgIHR5cGUsXG4gICAgICAgIHZhbHVlXG4gICAgICB9KSB7XG4gICAgICAgIGxldCByZW5kZXJlZFZhbHVlID0gdmFsdWU7XG5cbiAgICAgICAgaWYgKFsnaW4nLCAnbm90X2luJ10uaW5jbHVkZXModHlwZSkpIHtcbiAgICAgICAgICByZW5kZXJlZFZhbHVlID0gdmFsdWUuc3BsaXQoJywnKS5tYXAodmFsdWUgPT4gdmFsdWUudHJpbSgpKS5qb2luKCcsICcpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGAke2xhYmVsLnRvTG93ZXJDYXNlKCl9OiAke3JlbmRlcmVkVmFsdWV9YDtcbiAgICAgIH0sXG5cbiAgICAgIHR5cGVzOiB7XG4gICAgICAgIGlzOiB7XG4gICAgICAgICAgbGFiZWw6ICdJcyBleGFjdGx5JyxcbiAgICAgICAgICBpbml0aWFsVmFsdWU6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIG5vdDoge1xuICAgICAgICAgIGxhYmVsOiAnSXMgbm90JyxcbiAgICAgICAgICBpbml0aWFsVmFsdWU6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIGluOiB7XG4gICAgICAgICAgbGFiZWw6ICdJcyBvbmUgb2YnLFxuICAgICAgICAgIGluaXRpYWxWYWx1ZTogJydcbiAgICAgICAgfSxcbiAgICAgICAgbm90X2luOiB7XG4gICAgICAgICAgbGFiZWw6ICdJcyBub3Qgb25lIG9mJyxcbiAgICAgICAgICBpbml0aWFsVmFsdWU6ICcnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG59O1xuXG5leHBvcnRzLkNhcmRWYWx1ZSA9IHR5cGVzX3RleHRfdmlld3NfZGlzdF9maWVsZHMuQ2FyZFZhbHVlO1xuZXhwb3J0cy5DZWxsID0gdHlwZXNfdGV4dF92aWV3c19kaXN0X2ZpZWxkcy5DZWxsO1xuZXhwb3J0cy5GaWVsZCA9IHR5cGVzX3RleHRfdmlld3NfZGlzdF9maWVsZHMuRmllbGQ7XG5leHBvcnRzLmNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vZmllbGRzLmNqcy5wcm9kLmpzXCIpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9maWVsZHMuY2pzLmRldi5qc1wiKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIF9vYmplY3RTcHJlYWQgPSByZXF1aXJlKCdAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFNwcmVhZDInKTtcbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgY29tcG9uZW50cyA9IHJlcXVpcmUoJ0BrZXlzdG9uZS1uZXh0L2FkbWluLXVpL2NvbXBvbmVudHMnKTtcbnZhciBidXR0b24gPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvYnV0dG9uJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9jb3JlJyk7XG52YXIgZmllbGRzID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL2ZpZWxkcycpO1xudmFyIEV5ZUljb24gPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvaWNvbnMvaWNvbnMvRXllSWNvbicpO1xudmFyIEV5ZU9mZkljb24gPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvaWNvbnMvaWNvbnMvRXllT2ZmSWNvbicpO1xudmFyIFhJY29uID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL2ljb25zL2ljb25zL1hJY29uJyk7XG52YXIgc2VnbWVudGVkQ29udHJvbCA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9zZWdtZW50ZWQtY29udHJvbCcpO1xuXG5jb25zdCBGaWVsZCA9ICh7XG4gIGZpZWxkLFxuICB2YWx1ZSxcbiAgb25DaGFuZ2UsXG4gIGZvcmNlVmFsaWRhdGlvbixcbiAgYXV0b0ZvY3VzXG59KSA9PiB7XG4gIGNvbnN0IFtzaG93SW5wdXRWYWx1ZSwgc2V0U2hvd0lucHV0VmFsdWVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdG91Y2hlZEZpcnN0SW5wdXQsIHNldFRvdWNoZWRGaXJzdElucHV0XSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3RvdWNoZWRTZWNvbmRJbnB1dCwgc2V0VG91Y2hlZFNlY29uZElucHV0XSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgc2hvdWxkU2hvd1ZhbGlkYXRpb24gPSBmb3JjZVZhbGlkYXRpb24gfHwgdG91Y2hlZEZpcnN0SW5wdXQgJiYgdG91Y2hlZFNlY29uZElucHV0O1xuICBjb25zdCB2YWxpZGF0aW9uID0gc2hvdWxkU2hvd1ZhbGlkYXRpb24gJiYgdmFsdWUua2luZCA9PT0gJ2VkaXRpbmcnID8gdmFsdWUudmFsdWUgPT09IHZhbHVlLmNvbmZpcm0gPyB2YWx1ZS52YWx1ZS5sZW5ndGggPj0gZmllbGQubWluTGVuZ3RoID8gdW5kZWZpbmVkIDogYFRoZSBwYXNzd29yZCBtdXN0IGJlIGF0IGxlYXN0ICR7ZmllbGQubWluTGVuZ3RofSBjaGFyYWN0ZXJzIGxvbmdgIDogJ1RoZSBwYXNzd29yZHMgZG8gbm90IG1hdGNoJyA6IHVuZGVmaW5lZDtcbiAgY29uc3QgaW5wdXRUeXBlID0gc2hvd0lucHV0VmFsdWUgPyAndGV4dCcgOiAncGFzc3dvcmQnO1xuICByZXR1cm4gY29yZS5qc3goZmllbGRzLkZpZWxkQ29udGFpbmVyLCBudWxsLCBjb3JlLmpzeChmaWVsZHMuRmllbGRMYWJlbCwgbnVsbCwgZmllbGQubGFiZWwpLCBvbkNoYW5nZSA9PT0gdW5kZWZpbmVkID8gdmFsdWUuaXNTZXQgPyAnUGFzc3dvcmQgaXMgc2V0JyA6ICdQYXNzd29yZCBpcyBub3Qgc2V0JyA6IHZhbHVlLmtpbmQgPT09ICdpbml0aWFsJyA/IGNvcmUuanN4KGJ1dHRvbi5CdXR0b24sIHtcbiAgICBhdXRvRm9jdXM6IGF1dG9Gb2N1cyxcbiAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICBvbkNoYW5nZSh7XG4gICAgICAgIGtpbmQ6ICdlZGl0aW5nJyxcbiAgICAgICAgY29uZmlybTogJycsXG4gICAgICAgIHZhbHVlOiAnJyxcbiAgICAgICAgaXNTZXQ6IHZhbHVlLmlzU2V0XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHZhbHVlLmlzU2V0ID8gJ0NoYW5nZSBQYXNzd29yZCcgOiAnU2V0IFBhc3N3b3JkJykgOiBjb3JlLmpzeChjb3JlLlN0YWNrLCB7XG4gICAgZ2FwOiBcInNtYWxsXCJcbiAgfSwgY29yZS5qc3goXCJkaXZcIiwge1xuICAgIGNzczoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnXG4gICAgfVxuICB9LCBjb3JlLmpzeChmaWVsZHMuVGV4dElucHV0LCB7XG4gICAgYXV0b0ZvY3VzOiB0cnVlLFxuICAgIGludmFsaWQ6IHZhbGlkYXRpb24gIT09IHVuZGVmaW5lZCxcbiAgICB0eXBlOiBpbnB1dFR5cGUsXG4gICAgdmFsdWU6IHZhbHVlLnZhbHVlLFxuICAgIHBsYWNlaG9sZGVyOiBcIk5ldyBQYXNzd29yZFwiLFxuICAgIG9uQ2hhbmdlOiBldmVudCA9PiB7XG4gICAgICBvbkNoYW5nZShfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHZhbHVlKSwge30sIHtcbiAgICAgICAgdmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfSkpO1xuICAgIH0sXG4gICAgb25CbHVyOiAoKSA9PiB7XG4gICAgICBzZXRUb3VjaGVkRmlyc3RJbnB1dCh0cnVlKTtcbiAgICB9XG4gIH0pLCBjb3JlLmpzeChTcGFjZXIsIG51bGwpLCBjb3JlLmpzeChmaWVsZHMuVGV4dElucHV0LCB7XG4gICAgaW52YWxpZDogdmFsaWRhdGlvbiAhPT0gdW5kZWZpbmVkLFxuICAgIHR5cGU6IGlucHV0VHlwZSxcbiAgICB2YWx1ZTogdmFsdWUuY29uZmlybSxcbiAgICBwbGFjZWhvbGRlcjogXCJDb25maXJtIFBhc3N3b3JkXCIsXG4gICAgb25DaGFuZ2U6IGV2ZW50ID0+IHtcbiAgICAgIG9uQ2hhbmdlKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgdmFsdWUpLCB7fSwge1xuICAgICAgICBjb25maXJtOiBldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH0pKTtcbiAgICB9LFxuICAgIG9uQmx1cjogKCkgPT4ge1xuICAgICAgc2V0VG91Y2hlZFNlY29uZElucHV0KHRydWUpO1xuICAgIH1cbiAgfSksIGNvcmUuanN4KFNwYWNlciwgbnVsbCksIGNvcmUuanN4KGJ1dHRvbi5CdXR0b24sIHtcbiAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICBzZXRTaG93SW5wdXRWYWx1ZSghc2hvd0lucHV0VmFsdWUpO1xuICAgIH1cbiAgfSwgY29yZS5qc3goY29yZS5WaXN1YWxseUhpZGRlbiwgbnVsbCwgc2hvd0lucHV0VmFsdWUgPyAnSGlkZSBUZXh0JyA6ICdTaG93IFRleHQnKSwgc2hvd0lucHV0VmFsdWUgPyBjb3JlLmpzeChFeWVPZmZJY29uLkV5ZU9mZkljb24sIG51bGwpIDogY29yZS5qc3goRXllSWNvbi5FeWVJY29uLCBudWxsKSksIGNvcmUuanN4KFNwYWNlciwgbnVsbCksIGNvcmUuanN4KGJ1dHRvbi5CdXR0b24sIHtcbiAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICBvbkNoYW5nZSh7XG4gICAgICAgIGtpbmQ6ICdpbml0aWFsJyxcbiAgICAgICAgaXNTZXQ6IHZhbHVlLmlzU2V0XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIGNvcmUuanN4KGNvcmUuVmlzdWFsbHlIaWRkZW4sIG51bGwsIFwiQ2FuY2VsXCIpLCBjb3JlLmpzeChYSWNvbi5YSWNvbiwgbnVsbCkpKSwgdmFsaWRhdGlvbiAmJiBjb3JlLmpzeChjb3JlLlRleHQsIHtcbiAgICBjb2xvcjogXCJyZWQ2MDBcIixcbiAgICBzaXplOiBcInNtYWxsXCJcbiAgfSwgdmFsaWRhdGlvbikpKTtcbn07XG5jb25zdCBDZWxsID0gKHtcbiAgaXRlbSxcbiAgZmllbGRcbn0pID0+IHtcbiAgcmV0dXJuIGNvcmUuanN4KGNvbXBvbmVudHMuQ2VsbENvbnRhaW5lciwgbnVsbCwgaXRlbVtgJHtmaWVsZC5wYXRofV9pc19zZXRgXSA/ICdJcyBzZXQnIDogJ0lzIG5vdCBzZXQnKTtcbn07XG5jb25zdCBDYXJkVmFsdWUgPSAoe1xuICBpdGVtLFxuICBmaWVsZFxufSkgPT4ge1xuICByZXR1cm4gY29yZS5qc3goZmllbGRzLkZpZWxkQ29udGFpbmVyLCBudWxsLCBjb3JlLmpzeChmaWVsZHMuRmllbGRMYWJlbCwgbnVsbCwgZmllbGQubGFiZWwpLCBpdGVtW2Ake2ZpZWxkLnBhdGh9X2lzX3NldGBdID8gJ0lzIHNldCcgOiAnSXMgbm90IHNldCcpO1xufTtcbmNvbnN0IGNvbnRyb2xsZXIgPSBjb25maWcgPT4ge1xuICByZXR1cm4ge1xuICAgIHBhdGg6IGNvbmZpZy5wYXRoLFxuICAgIGxhYmVsOiBjb25maWcubGFiZWwsXG4gICAgZ3JhcGhxbFNlbGVjdGlvbjogYCR7Y29uZmlnLnBhdGh9X2lzX3NldGAsXG4gICAgbWluTGVuZ3RoOiBjb25maWcuZmllbGRNZXRhLm1pbkxlbmd0aCxcbiAgICBkZWZhdWx0VmFsdWU6IHtcbiAgICAgIGtpbmQ6ICdpbml0aWFsJyxcbiAgICAgIGlzU2V0OiBudWxsXG4gICAgfSxcblxuICAgIHZhbGlkYXRlKHN0YXRlKSB7XG4gICAgICByZXR1cm4gc3RhdGUua2luZCA9PT0gJ2luaXRpYWwnIHx8IHN0YXRlLnZhbHVlID09PSBzdGF0ZS5jb25maXJtICYmIHN0YXRlLnZhbHVlLmxlbmd0aCA+PSBjb25maWcuZmllbGRNZXRhLm1pbkxlbmd0aDtcbiAgICB9LFxuXG4gICAgZGVzZXJpYWxpemU6IGRhdGEgPT4gKHtcbiAgICAgIGtpbmQ6ICdpbml0aWFsJyxcbiAgICAgIGlzU2V0OiBkYXRhW2Ake2NvbmZpZy5wYXRofV9pc19zZXRgXVxuICAgIH0pLFxuICAgIHNlcmlhbGl6ZTogdmFsdWUgPT4ge1xuICAgICAgaWYgKHZhbHVlLmtpbmQgPT09ICdpbml0aWFsJykgcmV0dXJuIHt9O1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgW2NvbmZpZy5wYXRoXTogdmFsdWUudmFsdWVcbiAgICAgIH07XG4gICAgfSxcbiAgICBmaWx0ZXI6IHtcbiAgICAgIEZpbHRlcihwcm9wcykge1xuICAgICAgICByZXR1cm4gY29yZS5qc3goc2VnbWVudGVkQ29udHJvbC5TZWdtZW50ZWRDb250cm9sLCB7XG4gICAgICAgICAgc2VsZWN0ZWRJbmRleDogTnVtYmVyKHByb3BzLnZhbHVlKSxcbiAgICAgICAgICBvbkNoYW5nZTogdmFsdWUgPT4ge1xuICAgICAgICAgICAgcHJvcHMub25DaGFuZ2UoISF2YWx1ZSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzZWdtZW50czogWydJcyBOb3QgU2V0JywgJ0lzIFNldCddXG4gICAgICAgIH0pO1xuICAgICAgfSxcblxuICAgICAgZ3JhcGhxbDogKHtcbiAgICAgICAgdHlwZSxcbiAgICAgICAgdmFsdWVcbiAgICAgIH0pID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBbYCR7Y29uZmlnLnBhdGh9XyR7dHlwZX1gXTogdmFsdWVcbiAgICAgICAgfTtcbiAgICAgIH0sXG5cbiAgICAgIExhYmVsKHtcbiAgICAgICAgdmFsdWVcbiAgICAgIH0pIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlID8gJ2lzIHNldCcgOiAnaXMgbm90IHNldCc7XG4gICAgICB9LFxuXG4gICAgICB0eXBlczoge1xuICAgICAgICBpc19zZXQ6IHtcbiAgICAgICAgICBsYWJlbDogJ0lzIFNldCcsXG4gICAgICAgICAgaW5pdGlhbFZhbHVlOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG59O1xuXG5jb25zdCBTcGFjZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBzcGFjaW5nXG4gIH0gPSBjb3JlLnVzZVRoZW1lKCk7XG4gIHJldHVybiBjb3JlLmpzeChcImRpdlwiLCB7XG4gICAgY3NzOiB7XG4gICAgICB3aWR0aDogc3BhY2luZy5zbWFsbCxcbiAgICAgIGZsZXhTaHJpbms6IDBcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0cy5DYXJkVmFsdWUgPSBDYXJkVmFsdWU7XG5leHBvcnRzLkNlbGwgPSBDZWxsO1xuZXhwb3J0cy5GaWVsZCA9IEZpZWxkO1xuZXhwb3J0cy5jb250cm9sbGVyID0gY29udHJvbGxlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2ZpZWxkcy5janMucHJvZC5qc1wiKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vZmllbGRzLmNqcy5kZXYuanNcIik7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBfdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmUoJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Qcm9wZXJ0eUtleScpO1xudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyA9IHJlcXVpcmUoJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnKTtcbnJlcXVpcmUoJ2ludGVyc2VjdGlvbi1vYnNlcnZlcicpO1xudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBhcG9sbG8gPSByZXF1aXJlKCdAa2V5c3RvbmUtbmV4dC9hZG1pbi11aS9hcG9sbG8nKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL2NvcmUnKTtcbnZhciBmaWVsZHMgPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvZmllbGRzJyk7XG5cbmZ1bmN0aW9uIHVzZUludGVyc2VjdGlvbk9ic2VydmVyKGNiLCByZWYpIHtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoY2IsIHt9KTtcbiAgICBsZXQgbm9kZSA9IHJlZi5jdXJyZW50O1xuXG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIG9ic2VydmVyLm9ic2VydmUobm9kZSk7XG4gICAgICByZXR1cm4gKCkgPT4gb2JzZXJ2ZXIudW5vYnNlcnZlKG5vZGUpO1xuICAgIH1cbiAgfSk7XG59XG5cbmNvbnN0IGluaXRpYWxJdGVtc1RvTG9hZCA9IDEwO1xuY29uc3Qgc3Vic2VxdWVudEl0ZW1zVG9Mb2FkID0gNTA7XG5jb25zdCBpZEZpZWxkID0gJ19fX19pZF9fX18nO1xuY29uc3QgbGFiZWxGaWVsZCA9ICdfX19fbGFiZWxfX19fJztcbmNvbnN0IFJlbGF0aW9uc2hpcFNlbGVjdCA9ICh7XG4gIGF1dG9Gb2N1cyxcbiAgY29udHJvbFNob3VsZFJlbmRlclZhbHVlLFxuICBpc0Rpc2FibGVkLFxuICBpc0xvYWRpbmcsXG4gIGxpc3QsXG4gIHBsYWNlaG9sZGVyLFxuICBzdGF0ZSxcbiAgZXh0cmFTZWxlY3Rpb24gPSAnJ1xufSkgPT4ge1xuICB2YXIgX2RhdGEkaXRlbXM7XG5cbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IFJlYWN0LnVzZVN0YXRlKCcnKTtcbiAgY29uc3QgUVVFUlkgPSBhcG9sbG8uZ3FsYFxuICAgIHF1ZXJ5IFJlbGF0aW9uc2hpcFNlbGVjdCgkc2VhcmNoOiBTdHJpbmchLCAkZmlyc3Q6IEludCEsICRza2lwOiBJbnQhKSB7XG4gICAgICBpdGVtczogJHtsaXN0LmdxbE5hbWVzLmxpc3RRdWVyeU5hbWV9KHNlYXJjaDogJHNlYXJjaCwgZmlyc3Q6ICRmaXJzdCwgc2tpcDogJHNraXApIHtcbiAgICAgICAgJHtpZEZpZWxkfTogaWRcbiAgICAgICAgJHtsYWJlbEZpZWxkfTogJHtsaXN0LmxhYmVsRmllbGR9XG4gICAgICAgICR7ZXh0cmFTZWxlY3Rpb259XG4gICAgICB9XG5cbiAgICAgIG1ldGE6ICR7bGlzdC5ncWxOYW1lcy5saXN0UXVlcnlNZXRhTmFtZX0oc2VhcmNoOiAkc2VhcmNoKSB7XG4gICAgICAgIGNvdW50XG4gICAgICB9XG4gICAgfVxuICBgO1xuICBjb25zdCB7XG4gICAgZGF0YSxcbiAgICBlcnJvcixcbiAgICBsb2FkaW5nLFxuICAgIGZldGNoTW9yZVxuICB9ID0gYXBvbGxvLnVzZVF1ZXJ5KFFVRVJZLCB7XG4gICAgZmV0Y2hQb2xpY3k6ICduZXR3b3JrLW9ubHknLFxuICAgIHZhcmlhYmxlczoge1xuICAgICAgc2VhcmNoLFxuICAgICAgZmlyc3Q6IGluaXRpYWxJdGVtc1RvTG9hZCxcbiAgICAgIHNraXA6IDBcbiAgICB9XG4gIH0pO1xuICBjb25zdCBjb3VudCA9IChkYXRhID09PSBudWxsIHx8IGRhdGEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRhdGEubWV0YS5jb3VudCkgfHwgMDtcbiAgY29uc3QgcmVsYXRpb25zaGlwU2VsZWN0Q29tcG9uZW50cyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gKHtcbiAgICBNZW51TGlzdDogKF9yZWYpID0+IHtcbiAgICAgIGxldCB7XG4gICAgICAgIGNoaWxkcmVuXG4gICAgICB9ID0gX3JlZixcbiAgICAgICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbXCJjaGlsZHJlblwiXSk7XG5cbiAgICAgIGNvbnN0IGxvYWRpbmdSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gICAgICBjb25zdCBRVUVSWSA9IGFwb2xsby5ncWxgXG4gICAgICAgICAgICBxdWVyeSBSZWxhdGlvbnNoaXBTZWxlY3RNb3JlKCRzZWFyY2g6IFN0cmluZyEsICRmaXJzdDogSW50ISwgJHNraXA6IEludCEpIHtcbiAgICAgICAgICAgICAgaXRlbXM6ICR7bGlzdC5ncWxOYW1lcy5saXN0UXVlcnlOYW1lfShzZWFyY2g6ICRzZWFyY2gsIGZpcnN0OiAkZmlyc3QsIHNraXA6ICRza2lwKSB7XG4gICAgICAgICAgICAgICAgJHtsYWJlbEZpZWxkfTogJHtsaXN0LmxhYmVsRmllbGR9XG4gICAgICAgICAgICAgICAgJHtpZEZpZWxkfTogaWRcbiAgICAgICAgICAgICAgICAke2V4dHJhU2VsZWN0aW9ufVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYDtcbiAgICAgIHVzZUludGVyc2VjdGlvbk9ic2VydmVyKChbe1xuICAgICAgICBpc0ludGVyc2VjdGluZ1xuICAgICAgfV0pID0+IHtcbiAgICAgICAgaWYgKCFwcm9wcy5zZWxlY3RQcm9wcy5pc0xvYWRpbmcgJiYgaXNJbnRlcnNlY3RpbmcgJiYgcHJvcHMub3B0aW9ucy5sZW5ndGggPCBjb3VudCkge1xuICAgICAgICAgIGZldGNoTW9yZSh7XG4gICAgICAgICAgICBxdWVyeTogUVVFUlksXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgICAgc2VhcmNoLFxuICAgICAgICAgICAgICBmaXJzdDogc3Vic2VxdWVudEl0ZW1zVG9Mb2FkLFxuICAgICAgICAgICAgICBza2lwOiBwcm9wcy5vcHRpb25zLmxlbmd0aFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVwZGF0ZVF1ZXJ5OiAocHJldiwge1xuICAgICAgICAgICAgICBmZXRjaE1vcmVSZXN1bHRcbiAgICAgICAgICAgIH0pID0+IHtcbiAgICAgICAgICAgICAgaWYgKCFmZXRjaE1vcmVSZXN1bHQpIHJldHVybiBwcmV2O1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG1ldGE6IHByZXYubWV0YSxcbiAgICAgICAgICAgICAgICBpdGVtczogWy4uLnByZXYuaXRlbXMsIC4uLmZldGNoTW9yZVJlc3VsdC5pdGVtc11cbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSwgbG9hZGluZ1JlZik7XG4gICAgICByZXR1cm4gY29yZS5qc3goZmllbGRzLnNlbGVjdENvbXBvbmVudHMuTWVudUxpc3QsIHByb3BzLCBjaGlsZHJlbiwgY29yZS5qc3goXCJkaXZcIiwge1xuICAgICAgICBjc3M6IHtcbiAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInXG4gICAgICAgIH0sXG4gICAgICAgIHJlZjogbG9hZGluZ1JlZlxuICAgICAgfSwgcHJvcHMub3B0aW9ucy5sZW5ndGggPCBjb3VudCAmJiBjb3JlLmpzeChcInNwYW5cIiwge1xuICAgICAgICBjc3M6IHtcbiAgICAgICAgICBwYWRkaW5nOiA4XG4gICAgICAgIH1cbiAgICAgIH0sIFwiTG9hZGluZy4uLlwiKSkpO1xuICAgIH1cbiAgfSksIFtjb3VudCwgbGlzdC5ncWxOYW1lcy5saXN0UXVlcnlOYW1lXSk7IC8vIFRPRE86IGJldHRlciBlcnJvciBVSVxuICAvLyBUT0RPOiBIYW5kbGUgcGVybWlzc2lvbiBlcnJvcnNcbiAgLy8gKGllOyB1c2VyIGhhcyBwZXJtaXNzaW9uIHRvIHJlYWQgdGhpcyByZWxhdGlvbnNoaXAgZmllbGQsIGJ1dFxuICAvLyBub3QgdGhlIHJlbGF0ZWQgbGlzdCwgb3Igc29tZSBpdGVtcyBvbiB0aGUgbGlzdClcblxuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4gY29yZS5qc3goXCJzcGFuXCIsIG51bGwsIFwiRXJyb3JcIik7XG4gIH1cblxuICBjb25zdCBvcHRpb25zID0gKGRhdGEgPT09IG51bGwgfHwgZGF0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kYXRhJGl0ZW1zID0gZGF0YS5pdGVtcykgPT09IG51bGwgfHwgX2RhdGEkaXRlbXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kYXRhJGl0ZW1zLm1hcCgoX3JlZjIpID0+IHtcbiAgICBsZXQge1xuICAgICAgW2lkRmllbGRdOiB2YWx1ZSxcbiAgICAgIFtsYWJlbEZpZWxkXTogbGFiZWxcbiAgICB9ID0gX3JlZjIsXG4gICAgICAgIGRhdGEgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZjIsIFtpZEZpZWxkLCBsYWJlbEZpZWxkXS5tYXAoX3RvUHJvcGVydHlLZXkpKTtcblxuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZSxcbiAgICAgIGxhYmVsOiBsYWJlbCB8fCB2YWx1ZSxcbiAgICAgIGRhdGFcbiAgICB9O1xuICB9KSkgfHwgW107XG5cbiAgaWYgKHN0YXRlLmtpbmQgPT09ICdvbmUnKSB7XG4gICAgcmV0dXJuIGNvcmUuanN4KGZpZWxkcy5TZWxlY3QgLy8gdGhpcyBpcyBuZWNlc3NhcnkgYmVjYXVzZSByZWFjdC1zZWxlY3QgcGFzc2VzIGEgc2Vjb25kIGFyZ3VtZW50IHRvIG9uSW5wdXRDaGFuZ2VcbiAgICAvLyBhbmQgdXNlU3RhdGUgc2V0dGVycyBsb2cgYSB3YXJuaW5nIGlmIGEgc2Vjb25kIGFyZ3VtZW50IGlzIHBhc3NlZFxuICAgICwge1xuICAgICAgb25JbnB1dENoYW5nZTogdmFsID0+IHNldFNlYXJjaCh2YWwpLFxuICAgICAgaXNMb2FkaW5nOiBsb2FkaW5nIHx8IGlzTG9hZGluZyxcbiAgICAgIGF1dG9Gb2N1czogYXV0b0ZvY3VzLFxuICAgICAgY29tcG9uZW50czogcmVsYXRpb25zaGlwU2VsZWN0Q29tcG9uZW50cyxcbiAgICAgIHBvcnRhbE1lbnU6IHRydWUsXG4gICAgICB2YWx1ZTogc3RhdGUudmFsdWUgPyB7XG4gICAgICAgIHZhbHVlOiBzdGF0ZS52YWx1ZS5pZCxcbiAgICAgICAgbGFiZWw6IHN0YXRlLnZhbHVlLmxhYmVsLFxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGRhdGE6IHN0YXRlLnZhbHVlLmRhdGFcbiAgICAgIH0gOiBudWxsLFxuICAgICAgb3B0aW9uczogb3B0aW9ucyxcbiAgICAgIG9uQ2hhbmdlOiB2YWx1ZSA9PiB7XG4gICAgICAgIHN0YXRlLm9uQ2hhbmdlKHZhbHVlID8ge1xuICAgICAgICAgIGlkOiB2YWx1ZS52YWx1ZSxcbiAgICAgICAgICBsYWJlbDogdmFsdWUubGFiZWwsXG4gICAgICAgICAgZGF0YTogdmFsdWUuZGF0YVxuICAgICAgICB9IDogbnVsbCk7XG4gICAgICB9LFxuICAgICAgcGxhY2Vob2xkZXI6IHBsYWNlaG9sZGVyLFxuICAgICAgY29udHJvbFNob3VsZFJlbmRlclZhbHVlOiBjb250cm9sU2hvdWxkUmVuZGVyVmFsdWUsXG4gICAgICBpc0NsZWFyYWJsZTogY29udHJvbFNob3VsZFJlbmRlclZhbHVlLFxuICAgICAgaXNEaXNhYmxlZDogaXNEaXNhYmxlZFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGNvcmUuanN4KGZpZWxkcy5NdWx0aVNlbGVjdCAvLyB0aGlzIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIHJlYWN0LXNlbGVjdCBwYXNzZXMgYSBzZWNvbmQgYXJndW1lbnQgdG8gb25JbnB1dENoYW5nZVxuICAvLyBhbmQgdXNlU3RhdGUgc2V0dGVycyBsb2cgYSB3YXJuaW5nIGlmIGEgc2Vjb25kIGFyZ3VtZW50IGlzIHBhc3NlZFxuICAsIHtcbiAgICBvbklucHV0Q2hhbmdlOiB2YWwgPT4gc2V0U2VhcmNoKHZhbCksXG4gICAgaXNMb2FkaW5nOiBsb2FkaW5nIHx8IGlzTG9hZGluZyxcbiAgICBhdXRvRm9jdXM6IGF1dG9Gb2N1cyxcbiAgICBjb21wb25lbnRzOiByZWxhdGlvbnNoaXBTZWxlY3RDb21wb25lbnRzLFxuICAgIHBvcnRhbE1lbnU6IHRydWUsXG4gICAgdmFsdWU6IHN0YXRlLnZhbHVlLm1hcCh2YWx1ZSA9PiAoe1xuICAgICAgdmFsdWU6IHZhbHVlLmlkLFxuICAgICAgbGFiZWw6IHZhbHVlLmxhYmVsLFxuICAgICAgZGF0YTogdmFsdWUuZGF0YVxuICAgIH0pKSxcbiAgICBvcHRpb25zOiBvcHRpb25zLFxuICAgIG9uQ2hhbmdlOiB2YWx1ZSA9PiB7XG4gICAgICBzdGF0ZS5vbkNoYW5nZSh2YWx1ZS5tYXAoeCA9PiAoe1xuICAgICAgICBpZDogeC52YWx1ZSxcbiAgICAgICAgbGFiZWw6IHgubGFiZWwsXG4gICAgICAgIGRhdGE6IHguZGF0YVxuICAgICAgfSkpKTtcbiAgICB9LFxuICAgIHBsYWNlaG9sZGVyOiBwbGFjZWhvbGRlcixcbiAgICBjb250cm9sU2hvdWxkUmVuZGVyVmFsdWU6IGNvbnRyb2xTaG91bGRSZW5kZXJWYWx1ZSxcbiAgICBpc0NsZWFyYWJsZTogY29udHJvbFNob3VsZFJlbmRlclZhbHVlLFxuICAgIGlzRGlzYWJsZWQ6IGlzRGlzYWJsZWRcbiAgfSk7XG59O1xuXG5leHBvcnRzLlJlbGF0aW9uc2hpcFNlbGVjdCA9IFJlbGF0aW9uc2hpcFNlbGVjdDtcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIF9vYmplY3RTcHJlYWQgPSByZXF1aXJlKCdAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFNwcmVhZDInKTtcbnZhciBfZXh0ZW5kcyA9IHJlcXVpcmUoJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBjb21wb25lbnRzID0gcmVxdWlyZSgnQGtleXN0b25lLW5leHQvYWRtaW4tdWkvY29tcG9uZW50cycpO1xudmFyIGNvbnRleHQgPSByZXF1aXJlKCdAa2V5c3RvbmUtbmV4dC9hZG1pbi11aS9jb250ZXh0Jyk7XG52YXIgcm91dGVyID0gcmVxdWlyZSgnQGtleXN0b25lLW5leHQvYWRtaW4tdWkvcm91dGVyJyk7XG52YXIgYnV0dG9uID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL2J1dHRvbicpO1xudmFyIGNvcmUgPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvY29yZScpO1xudmFyIGZpZWxkcyA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9maWVsZHMnKTtcbnZhciBtb2RhbHMgPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvbW9kYWxzJyk7XG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzID0gcmVxdWlyZSgnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcycpO1xudmFyIHRvb2x0aXAgPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvdG9vbHRpcCcpO1xudmFyIGxvYWRpbmcgPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvbG9hZGluZycpO1xudmFyIGFkbWluVWlVdGlscyA9IHJlcXVpcmUoJ0BrZXlzdG9uZS1uZXh0L2FkbWluLXVpLXV0aWxzJyk7XG52YXIgYXBvbGxvID0gcmVxdWlyZSgnQGtleXN0b25lLW5leHQvYWRtaW4tdWkvYXBvbGxvJyk7XG52YXIgdG9hc3QgPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvdG9hc3QnKTtcbnZhciBpc0RlZXBFcXVhbCA9IHJlcXVpcmUoJ2Zhc3QtZGVlcC1lcXVhbCcpO1xudmFyIHR5cGVzX3JlbGF0aW9uc2hpcF92aWV3c19SZWxhdGlvbnNoaXBTZWxlY3RfZGlzdF9maWVsZHMgPSByZXF1aXJlKCcuLi9SZWxhdGlvbnNoaXBTZWxlY3QvZGlzdC9maWVsZHMuY2pzLmRldi5qcycpO1xucmVxdWlyZSgnQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b1Byb3BlcnR5S2V5Jyk7XG5yZXF1aXJlKCdpbnRlcnNlY3Rpb24tb2JzZXJ2ZXInKTtcblxuZnVuY3Rpb24gX2ludGVyb3BEZWZhdWx0IChlKSB7IHJldHVybiBlICYmIGUuX19lc01vZHVsZSA/IGUgOiB7ICdkZWZhdWx0JzogZSB9OyB9XG5cbnZhciBpc0RlZXBFcXVhbF9fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9faW50ZXJvcERlZmF1bHQoaXNEZWVwRXF1YWwpO1xuXG5mdW5jdGlvbiB1c2VJdGVtU3RhdGUoe1xuICBzZWxlY3RlZEZpZWxkcyxcbiAgbG9jYWxMaXN0LFxuICBpZCxcbiAgZmllbGRcbn0pIHtcbiAgY29uc3Qge1xuICAgIGRhdGEsXG4gICAgZXJyb3IsXG4gICAgbG9hZGluZ1xuICB9ID0gYXBvbGxvLnVzZVF1ZXJ5KGFwb2xsby5ncWxgcXVlcnkoJGlkOiBJRCEpIHtcbiAgaXRlbTogJHtsb2NhbExpc3Qua2V5fSh3aGVyZToge2lkOiAkaWR9KSB7XG4gICAgaWRcbiAgICByZWxhdGlvbnNoaXA6ICR7ZmllbGQucGF0aH0ge1xuICAgICAgJHtzZWxlY3RlZEZpZWxkc31cbiAgICB9XG4gIH1cbn1gLCB7XG4gICAgdmFyaWFibGVzOiB7XG4gICAgICBpZFxuICAgIH0sXG4gICAgZXJyb3JQb2xpY3k6ICdhbGwnXG4gIH0pO1xuICBjb25zdCB7XG4gICAgaXRlbXNBcnJGcm9tRGF0YSxcbiAgICByZWxhdGlvbnNoaXBHZXR0ZXJcbiAgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IGRhdGFHZXR0ZXIgPSBhZG1pblVpVXRpbHMubWFrZURhdGFHZXR0ZXIoZGF0YSwgZXJyb3IgPT09IG51bGwgfHwgZXJyb3IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVycm9yLmdyYXBoUUxFcnJvcnMpO1xuICAgIGNvbnN0IHJlbGF0aW9uc2hpcEdldHRlciA9IGRhdGFHZXR0ZXIuZ2V0KCdpdGVtJykuZ2V0KCdyZWxhdGlvbnNoaXAnKTtcbiAgICBjb25zdCBpc01hbnkgPSBBcnJheS5pc0FycmF5KHJlbGF0aW9uc2hpcEdldHRlci5kYXRhKTtcbiAgICBjb25zdCBpdGVtc0FyckZyb21EYXRhID0gKGlzTWFueSA/IHJlbGF0aW9uc2hpcEdldHRlci5kYXRhLm1hcCgoXywgaSkgPT4gcmVsYXRpb25zaGlwR2V0dGVyLmdldChpKSkgOiBbcmVsYXRpb25zaGlwR2V0dGVyXSkuZmlsdGVyKHggPT4ge1xuICAgICAgdmFyIF94JGRhdGE7XG5cbiAgICAgIHJldHVybiAoKF94JGRhdGEgPSB4LmRhdGEpID09PSBudWxsIHx8IF94JGRhdGEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF94JGRhdGEuaWQpICE9IG51bGw7XG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlbGF0aW9uc2hpcEdldHRlcixcbiAgICAgIGl0ZW1zQXJyRnJvbURhdGFcbiAgICB9O1xuICB9LCBbZGF0YSwgZXJyb3JdKTtcbiAgbGV0IFt7XG4gICAgaXRlbXMsXG4gICAgaXRlbXNBcnJGcm9tRGF0YTogaXRlbXNBcnJGcm9tRGF0YVN0YXRlXG4gIH0sIHNldEl0ZW1zU3RhdGVdID0gUmVhY3QudXNlU3RhdGUoe1xuICAgIGl0ZW1zQXJyRnJvbURhdGE6IFtdLFxuICAgIGl0ZW1zOiB7fVxuICB9KTtcblxuICBpZiAoaXRlbXNBcnJGcm9tRGF0YVN0YXRlICE9PSBpdGVtc0FyckZyb21EYXRhKSB7XG4gICAgbGV0IG5ld0l0ZW1zID0ge307XG4gICAgaXRlbXNBcnJGcm9tRGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgdmFyIF9pdGVtcyRpdGVtJGRhdGEkaWQsIF9pdGVtJGVycm9ycywgX2luaXRpYWxJdGVtSW5TdGF0ZSRlO1xuXG4gICAgICBjb25zdCBpbml0aWFsSXRlbUluU3RhdGUgPSAoX2l0ZW1zJGl0ZW0kZGF0YSRpZCA9IGl0ZW1zW2l0ZW0uZGF0YS5pZF0pID09PSBudWxsIHx8IF9pdGVtcyRpdGVtJGRhdGEkaWQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9pdGVtcyRpdGVtJGRhdGEkaWQuZnJvbUluaXRpYWxRdWVyeTtcblxuICAgICAgaWYgKChpdGVtc1tpdGVtLmRhdGEuaWRdICYmIGluaXRpYWxJdGVtSW5TdGF0ZSB8fCAhaXRlbXNbaXRlbS5kYXRhLmlkXSkgJiYgKCFpbml0aWFsSXRlbUluU3RhdGUgfHwgaXRlbS5kYXRhICE9PSBpbml0aWFsSXRlbUluU3RhdGUuZGF0YSB8fCAoKF9pdGVtJGVycm9ycyA9IGl0ZW0uZXJyb3JzKSA9PT0gbnVsbCB8fCBfaXRlbSRlcnJvcnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9pdGVtJGVycm9ycy5sZW5ndGgpICE9PSAoKF9pbml0aWFsSXRlbUluU3RhdGUkZSA9IGluaXRpYWxJdGVtSW5TdGF0ZS5lcnJvcnMpID09PSBudWxsIHx8IF9pbml0aWFsSXRlbUluU3RhdGUkZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2luaXRpYWxJdGVtSW5TdGF0ZSRlLmxlbmd0aCkgfHwgKGl0ZW0uZXJyb3JzIHx8IFtdKS5zb21lKChlcnIsIGkpID0+IHtcbiAgICAgICAgdmFyIF9pbml0aWFsSXRlbUluU3RhdGUkZTI7XG5cbiAgICAgICAgcmV0dXJuIGVyciAhPT0gKChfaW5pdGlhbEl0ZW1JblN0YXRlJGUyID0gaW5pdGlhbEl0ZW1JblN0YXRlLmVycm9ycykgPT09IG51bGwgfHwgX2luaXRpYWxJdGVtSW5TdGF0ZSRlMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2luaXRpYWxJdGVtSW5TdGF0ZSRlMltpXSk7XG4gICAgICB9KSkpIHtcbiAgICAgICAgbmV3SXRlbXNbaXRlbS5kYXRhLmlkXSA9IHtcbiAgICAgICAgICBjdXJyZW50OiBpdGVtLFxuICAgICAgICAgIGZyb21Jbml0aWFsUXVlcnk6IGl0ZW1cbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld0l0ZW1zW2l0ZW0uZGF0YS5pZF0gPSBpdGVtc1tpdGVtLmRhdGEuaWRdO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGl0ZW1zID0gbmV3SXRlbXM7XG4gICAgc2V0SXRlbXNTdGF0ZSh7XG4gICAgICBpdGVtczogbmV3SXRlbXMsXG4gICAgICBpdGVtc0FyckZyb21EYXRhXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGl0ZW1zOiBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICAgIGNvbnN0IGl0ZW1zVG9SZXR1cm4gPSB7fTtcbiAgICAgIE9iamVjdC5rZXlzKGl0ZW1zKS5mb3JFYWNoKGlkID0+IHtcbiAgICAgICAgaXRlbXNUb1JldHVybltpZF0gPSBpdGVtc1tpZF0uY3VycmVudDtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGl0ZW1zVG9SZXR1cm47XG4gICAgfSwgW2l0ZW1zXSksXG4gICAgc2V0SXRlbXM6IFJlYWN0LnVzZUNhbGxiYWNrKGl0ZW1zID0+IHtcbiAgICAgIHNldEl0ZW1zU3RhdGUoc3RhdGUgPT4ge1xuICAgICAgICBsZXQgaXRlbXNGb3JTdGF0ZSA9IHt9O1xuICAgICAgICBPYmplY3Qua2V5cyhpdGVtcykuZm9yRWFjaChpZCA9PiB7XG4gICAgICAgICAgdmFyIF9zdGF0ZSRpdGVtcyRpZDtcblxuICAgICAgICAgIGlmIChpdGVtc1tpZF0gPT09ICgoX3N0YXRlJGl0ZW1zJGlkID0gc3RhdGUuaXRlbXNbaWRdKSA9PT0gbnVsbCB8fCBfc3RhdGUkaXRlbXMkaWQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9zdGF0ZSRpdGVtcyRpZC5jdXJyZW50KSkge1xuICAgICAgICAgICAgaXRlbXNGb3JTdGF0ZVtpZF0gPSBzdGF0ZS5pdGVtc1tpZF07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBfc3RhdGUkaXRlbXMkaWQyO1xuXG4gICAgICAgICAgICBpdGVtc0ZvclN0YXRlW2lkXSA9IHtcbiAgICAgICAgICAgICAgY3VycmVudDogaXRlbXNbaWRdLFxuICAgICAgICAgICAgICBmcm9tSW5pdGlhbFF1ZXJ5OiAoX3N0YXRlJGl0ZW1zJGlkMiA9IHN0YXRlLml0ZW1zW2lkXSkgPT09IG51bGwgfHwgX3N0YXRlJGl0ZW1zJGlkMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3N0YXRlJGl0ZW1zJGlkMi5mcm9tSW5pdGlhbFF1ZXJ5XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaXRlbXNBcnJGcm9tRGF0YTogc3RhdGUuaXRlbXNBcnJGcm9tRGF0YSxcbiAgICAgICAgICBpdGVtczogaXRlbXNGb3JTdGF0ZVxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfSwgW3NldEl0ZW1zU3RhdGVdKSxcbiAgICBzdGF0ZTogKCgpID0+IHtcbiAgICAgIGlmIChsb2FkaW5nKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAga2luZDogJ2xvYWRpbmcnXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGlmIChlcnJvciAhPT0gbnVsbCAmJiBlcnJvciAhPT0gdm9pZCAwICYmIGVycm9yLm5ldHdvcmtFcnJvcikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGtpbmQ6ICdlcnJvcicsXG4gICAgICAgICAgbWVzc2FnZTogZXJyb3IubmV0d29ya0Vycm9yLm1lc3NhZ2VcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZpZWxkLm1hbnkgJiYgIXJlbGF0aW9uc2hpcEdldHRlci5kYXRhKSB7XG4gICAgICAgIHZhciBfcmVsYXRpb25zaGlwR2V0dGVyJGU7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBraW5kOiAnZXJyb3InLFxuICAgICAgICAgIG1lc3NhZ2U6ICgoX3JlbGF0aW9uc2hpcEdldHRlciRlID0gcmVsYXRpb25zaGlwR2V0dGVyLmVycm9ycykgPT09IG51bGwgfHwgX3JlbGF0aW9uc2hpcEdldHRlciRlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfcmVsYXRpb25zaGlwR2V0dGVyJGVbMF0ubWVzc2FnZSkgfHwgJydcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAga2luZDogJ2xvYWRlZCdcbiAgICAgIH07XG4gICAgfSkoKVxuICB9O1xufVxuZnVuY3Rpb24gdXNlRmllbGRzT2JqKGxpc3QsIGZpZWxkcykge1xuICByZXR1cm4gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgZWRpdEZpZWxkcyA9IHt9O1xuICAgIGZpZWxkcyA9PT0gbnVsbCB8fCBmaWVsZHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGZpZWxkcy5mb3JFYWNoKGZpZWxkUGF0aCA9PiB7XG4gICAgICBlZGl0RmllbGRzW2ZpZWxkUGF0aF0gPSBsaXN0LmZpZWxkc1tmaWVsZFBhdGhdO1xuICAgIH0pO1xuICAgIHJldHVybiBlZGl0RmllbGRzO1xuICB9LCBbZmllbGRzLCBsaXN0LmZpZWxkc10pO1xufVxuXG5mdW5jdGlvbiBJbmxpbmVFZGl0KHtcbiAgZmllbGRzLFxuICBsaXN0LFxuICBzZWxlY3RlZEZpZWxkcyxcbiAgaXRlbUdldHRlcixcbiAgb25DYW5jZWwsXG4gIG9uU2F2ZVxufSkge1xuICB2YXIgX2l0ZW1HZXR0ZXIkZXJyb3JzO1xuXG4gIGNvbnN0IGZpZWxkc09iaiA9IHVzZUZpZWxkc09iaihsaXN0LCBmaWVsZHMpO1xuICBjb25zdCBbdXBkYXRlLCB7XG4gICAgbG9hZGluZyxcbiAgICBlcnJvclxuICB9XSA9IGFwb2xsby51c2VNdXRhdGlvbihhcG9sbG8uZ3FsYG11dGF0aW9uICgkZGF0YTogJHtsaXN0LmdxbE5hbWVzLnVwZGF0ZUlucHV0TmFtZX0hLCAkaWQ6IElEISkge1xuICAgICAgICAgIGl0ZW06ICR7bGlzdC5ncWxOYW1lcy51cGRhdGVNdXRhdGlvbk5hbWV9KGlkOiAkaWQsIGRhdGE6ICRkYXRhKSB7XG4gICAgICAgICAgICAke3NlbGVjdGVkRmllbGRzfVxuICAgICAgICAgIH1cbiAgICAgICAgfWAsIHtcbiAgICBlcnJvclBvbGljeTogJ2FsbCdcbiAgfSk7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0VmFsdWVdID0gUmVhY3QudXNlU3RhdGUoKCkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gYWRtaW5VaVV0aWxzLmRlc2VyaWFsaXplVmFsdWUoZmllbGRzT2JqLCBpdGVtR2V0dGVyKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWUsXG4gICAgICBpdGVtOiBpdGVtR2V0dGVyLmRhdGFcbiAgICB9O1xuICB9KTtcblxuICBpZiAoc3RhdGUuaXRlbSAhPT0gaXRlbUdldHRlci5kYXRhICYmIChfaXRlbUdldHRlciRlcnJvcnMgPSBpdGVtR2V0dGVyLmVycm9ycykgIT09IG51bGwgJiYgX2l0ZW1HZXR0ZXIkZXJyb3JzICE9PSB2b2lkIDAgJiYgX2l0ZW1HZXR0ZXIkZXJyb3JzLmV2ZXJ5KHggPT4ge1xuICAgIHZhciBfeCRwYXRoO1xuXG4gICAgcmV0dXJuICgoX3gkcGF0aCA9IHgucGF0aCkgPT09IG51bGwgfHwgX3gkcGF0aCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3gkcGF0aC5sZW5ndGgpICE9PSAxO1xuICB9KSkge1xuICAgIGNvbnN0IHZhbHVlID0gYWRtaW5VaVV0aWxzLmRlc2VyaWFsaXplVmFsdWUoZmllbGRzT2JqLCBpdGVtR2V0dGVyKTtcbiAgICBzZXRWYWx1ZSh7XG4gICAgICB2YWx1ZSxcbiAgICAgIGl0ZW06IGl0ZW1HZXR0ZXIuZGF0YVxuICAgIH0pO1xuICB9XG5cbiAgY29uc3Qge1xuICAgIGNoYW5nZWRGaWVsZHMsXG4gICAgZGF0YUZvclVwZGF0ZVxuICB9ID0gYWRtaW5VaVV0aWxzLnVzZUNoYW5nZWRGaWVsZHNBbmREYXRhRm9yVXBkYXRlKGZpZWxkc09iaiwgaXRlbUdldHRlciwgc3RhdGUudmFsdWUpO1xuICBjb25zdCBpbnZhbGlkRmllbGRzID0gYWRtaW5VaVV0aWxzLnVzZUludmFsaWRGaWVsZHMoZmllbGRzT2JqLCBzdGF0ZS52YWx1ZSk7XG4gIGNvbnN0IFtmb3JjZVZhbGlkYXRpb24sIHNldEZvcmNlVmFsaWRhdGlvbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHRvYXN0cyA9IHRvYXN0LnVzZVRvYXN0cygpO1xuICBjb25zdCBzYXZlQnV0dG9uUHJvcHMgPSB7XG4gICAgaXNMb2FkaW5nOiBsb2FkaW5nLFxuICAgIHdlaWdodDogJ2JvbGQnLFxuICAgIHNpemU6ICdzbWFsbCcsXG4gICAgdG9uZTogJ2FjdGl2ZScsXG4gICAgb25DbGljazogKCkgPT4ge1xuICAgICAgY29uc3QgbmV3Rm9yY2VWYWxpZGF0aW9uID0gaW52YWxpZEZpZWxkcy5zaXplICE9PSAwO1xuICAgICAgc2V0Rm9yY2VWYWxpZGF0aW9uKG5ld0ZvcmNlVmFsaWRhdGlvbik7XG4gICAgICBpZiAobmV3Rm9yY2VWYWxpZGF0aW9uKSByZXR1cm47XG4gICAgICB1cGRhdGUoe1xuICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICBkYXRhOiBkYXRhRm9yVXBkYXRlLFxuICAgICAgICAgIGlkOiBpdGVtR2V0dGVyLmdldCgnaWQnKS5kYXRhXG4gICAgICAgIH1cbiAgICAgIH0pLnRoZW4oKHtcbiAgICAgICAgZGF0YSxcbiAgICAgICAgZXJyb3JzXG4gICAgICB9KSA9PiB7XG4gICAgICAgIC8vIHdlJ3JlIGNoZWNraW5nIGZvciBwYXRoLmxlbmd0aCA9PT0gMSBiZWNhdXNlIGVycm9ycyB3aXRoIGEgcGF0aCBsYXJnZXIgdGhhbiAxIHdpbGwgYmUgZmllbGQgbGV2ZWwgZXJyb3JzXG4gICAgICAgIC8vIHdoaWNoIGFyZSBoYW5kbGVkIHNlcGVyYXRlbHkgYW5kIGRvIG5vdCBpbmRpY2F0ZSBhIGZhaWx1cmUgdG8gdXBkYXRlIHRoZSBpdGVtXG4gICAgICAgIGNvbnN0IGVycm9yID0gZXJyb3JzID09PSBudWxsIHx8IGVycm9ycyA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXJyb3JzLmZpbmQoeCA9PiB7XG4gICAgICAgICAgdmFyIF94JHBhdGgyO1xuXG4gICAgICAgICAgcmV0dXJuICgoX3gkcGF0aDIgPSB4LnBhdGgpID09PSBudWxsIHx8IF94JHBhdGgyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfeCRwYXRoMi5sZW5ndGgpID09PSAxO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICB0b2FzdHMuYWRkVG9hc3Qoe1xuICAgICAgICAgICAgdGl0bGU6ICdGYWlsZWQgdG8gdXBkYXRlIGl0ZW0nLFxuICAgICAgICAgICAgdG9uZTogJ25lZ2F0aXZlJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2VcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0b2FzdHMuYWRkVG9hc3Qoe1xuICAgICAgICAgICAgdGl0bGU6IGRhdGEuaXRlbVtsaXN0LmxhYmVsRmllbGRdIHx8IGRhdGEuaXRlbS5pZCxcbiAgICAgICAgICAgIHRvbmU6ICdwb3NpdGl2ZScsXG4gICAgICAgICAgICBtZXNzYWdlOiAnU2F2ZWQgc3VjY2Vzc2Z1bGx5J1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIG9uU2F2ZShhZG1pblVpVXRpbHMubWFrZURhdGFHZXR0ZXIoZGF0YSwgZXJyb3JzKS5nZXQoJ2l0ZW0nKSk7XG4gICAgICAgIH1cbiAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIHRvYXN0cy5hZGRUb2FzdCh7XG4gICAgICAgICAgdGl0bGU6ICdGYWlsZWQgdG8gdXBkYXRlIGl0ZW0nLFxuICAgICAgICAgIHRvbmU6ICduZWdhdGl2ZScsXG4gICAgICAgICAgbWVzc2FnZTogZXJyLm1lc3NhZ2VcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGNoaWxkcmVuOiAnU2F2ZSdcbiAgfTtcbiAgcmV0dXJuIGNvcmUuanN4KGNvcmUuU3RhY2ssIHtcbiAgICBnYXA6IFwieGxhcmdlXCJcbiAgfSwgZXJyb3IgJiYgY29yZS5qc3goY29tcG9uZW50cy5HcmFwaFFMRXJyb3JOb3RpY2UsIHtcbiAgICBuZXR3b3JrRXJyb3I6IGVycm9yID09PSBudWxsIHx8IGVycm9yID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlcnJvci5uZXR3b3JrRXJyb3IgLy8gd2UncmUgY2hlY2tpbmcgZm9yIHBhdGgubGVuZ3RoID09PSAxIGJlY2F1c2UgZXJyb3JzIHdpdGggYSBwYXRoIGxhcmdlciB0aGFuIDEgd2lsbCBiZSBmaWVsZCBsZXZlbCBlcnJvcnNcbiAgICAvLyB3aGljaCBhcmUgaGFuZGxlZCBzZXBlcmF0ZWx5IGFuZCBkbyBub3QgaW5kaWNhdGUgYSBmYWlsdXJlIHRvIHVwZGF0ZSB0aGUgaXRlbVxuICAgICxcbiAgICBlcnJvcnM6IGVycm9yID09PSBudWxsIHx8IGVycm9yID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlcnJvci5ncmFwaFFMRXJyb3JzLmZpbHRlcih4ID0+IHtcbiAgICAgIHZhciBfeCRwYXRoMztcblxuICAgICAgcmV0dXJuICgoX3gkcGF0aDMgPSB4LnBhdGgpID09PSBudWxsIHx8IF94JHBhdGgzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfeCRwYXRoMy5sZW5ndGgpID09PSAxO1xuICAgIH0pXG4gIH0pLCBjb3JlLmpzeChhZG1pblVpVXRpbHMuRmllbGRzLCB7XG4gICAgZmllbGRNb2RlczogbnVsbCxcbiAgICBmaWVsZHM6IGZpZWxkc09iaixcbiAgICBmb3JjZVZhbGlkYXRpb246IGZvcmNlVmFsaWRhdGlvbixcbiAgICBpbnZhbGlkRmllbGRzOiBpbnZhbGlkRmllbGRzLFxuICAgIG9uQ2hhbmdlOiBSZWFjdC51c2VDYWxsYmFjayh2YWx1ZSA9PiB7XG4gICAgICBzZXRWYWx1ZShzdGF0ZSA9PiAoe1xuICAgICAgICBpdGVtOiBzdGF0ZS5pdGVtLFxuICAgICAgICB2YWx1ZTogdmFsdWUoc3RhdGUudmFsdWUpXG4gICAgICB9KSk7XG4gICAgfSwgW3NldFZhbHVlXSksXG4gICAgdmFsdWU6IHN0YXRlLnZhbHVlXG4gIH0pLCBjb3JlLmpzeChjb3JlLlN0YWNrLCB7XG4gICAgYWNyb3NzOiB0cnVlLFxuICAgIGdhcDogXCJzbWFsbFwiXG4gIH0sIGNoYW5nZWRGaWVsZHMuc2l6ZSA/IGNvcmUuanN4KGJ1dHRvbi5CdXR0b24sIHNhdmVCdXR0b25Qcm9wcykgOiBjb3JlLmpzeCh0b29sdGlwLlRvb2x0aXAsIHtcbiAgICBjb250ZW50OiBcIk5vIGZpZWxkcyBoYXZlIGJlZW4gbW9kaWZpZWQgc28geW91IGNhbm5vdCBzYXZlIGNoYW5nZXNcIlxuICB9LCBwcm9wcyA9PiBjb3JlLmpzeChidXR0b24uQnV0dG9uLCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHNhdmVCdXR0b25Qcm9wcywge1xuICAgIC8vIG1ha2luZyBvbkNsaWNrIHVuZGVmaW5lZCBpbnN0ZWFkIG9mIG1ha2luZyB0aGUgYnV0dG9uIGRpc2FibGVkIHNvIHRoZSBidXR0b24gY2FuIGJlIGZvY3Vzc2VkIHNvIGtleWJvYXJkIHVzZXJzIGNhbiBzZWUgdGhlIHRvb2x0aXBcbiAgICBvbkNsaWNrOiB1bmRlZmluZWRcbiAgfSkpKSwgY29yZS5qc3goYnV0dG9uLkJ1dHRvbiwge1xuICAgIHNpemU6IFwic21hbGxcIixcbiAgICB3ZWlnaHQ6IFwibm9uZVwiLFxuICAgIG9uQ2xpY2s6IG9uQ2FuY2VsXG4gIH0sIFwiQ2FuY2VsXCIpKSk7XG59XG5cbi8qIEBqc3gganN4ICovXG5mdW5jdGlvbiBJbmxpbmVDcmVhdGUoe1xuICBsaXN0LFxuICBvbkNhbmNlbCxcbiAgb25DcmVhdGUsXG4gIGZpZWxkczogZmllbGRQYXRocyxcbiAgc2VsZWN0ZWRGaWVsZHNcbn0pIHtcbiAgY29uc3QgdG9hc3RzID0gdG9hc3QudXNlVG9hc3RzKCk7XG4gIGNvbnN0IGZpZWxkcyA9IHVzZUZpZWxkc09iaihsaXN0LCBmaWVsZFBhdGhzKTtcbiAgY29uc3QgW2NyZWF0ZUl0ZW0sIHtcbiAgICBsb2FkaW5nLFxuICAgIGVycm9yXG4gIH1dID0gYXBvbGxvLnVzZU11dGF0aW9uKGFwb2xsby5ncWxgbXV0YXRpb24oJGRhdGE6ICR7bGlzdC5ncWxOYW1lcy5jcmVhdGVJbnB1dE5hbWV9ISkge1xuICAgICAgaXRlbTogJHtsaXN0LmdxbE5hbWVzLmNyZWF0ZU11dGF0aW9uTmFtZX0oZGF0YTogJGRhdGEpIHtcbiAgICAgICAgJHtzZWxlY3RlZEZpZWxkc31cbiAgICB9XG4gIH1gKTtcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZSgoKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSB7fTtcbiAgICBPYmplY3Qua2V5cyhmaWVsZHMpLmZvckVhY2goZmllbGRQYXRoID0+IHtcbiAgICAgIHZhbHVlW2ZpZWxkUGF0aF0gPSB7XG4gICAgICAgIGtpbmQ6ICd2YWx1ZScsXG4gICAgICAgIHZhbHVlOiBmaWVsZHNbZmllbGRQYXRoXS5jb250cm9sbGVyLmRlZmF1bHRWYWx1ZVxuICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH0pO1xuICBjb25zdCBpbnZhbGlkRmllbGRzID0gYWRtaW5VaVV0aWxzLnVzZUludmFsaWRGaWVsZHMoZmllbGRzLCB2YWx1ZSk7XG4gIGNvbnN0IFtmb3JjZVZhbGlkYXRpb24sIHNldEZvcmNlVmFsaWRhdGlvbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgb25DcmVhdGVDbGljayA9ICgpID0+IHtcbiAgICBjb25zdCBuZXdGb3JjZVZhbGlkYXRpb24gPSBpbnZhbGlkRmllbGRzLnNpemUgIT09IDA7XG4gICAgc2V0Rm9yY2VWYWxpZGF0aW9uKG5ld0ZvcmNlVmFsaWRhdGlvbik7XG4gICAgaWYgKG5ld0ZvcmNlVmFsaWRhdGlvbikgcmV0dXJuO1xuICAgIGNvbnN0IGRhdGEgPSB7fTtcbiAgICBjb25zdCBhbGxTZXJpYWxpemVkVmFsdWVzID0gYWRtaW5VaVV0aWxzLnNlcmlhbGl6ZVZhbHVlVG9PYmpCeUZpZWxkS2V5KGZpZWxkcywgdmFsdWUpO1xuICAgIE9iamVjdC5rZXlzKGFsbFNlcmlhbGl6ZWRWYWx1ZXMpLmZvckVhY2goZmllbGRQYXRoID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgY29udHJvbGxlclxuICAgICAgfSA9IGZpZWxkc1tmaWVsZFBhdGhdO1xuICAgICAgY29uc3Qgc2VyaWFsaXplZCA9IGFsbFNlcmlhbGl6ZWRWYWx1ZXNbZmllbGRQYXRoXTtcblxuICAgICAgaWYgKCFpc0RlZXBFcXVhbF9fZGVmYXVsdFsnZGVmYXVsdCddKHNlcmlhbGl6ZWQsIGNvbnRyb2xsZXIuc2VyaWFsaXplKGNvbnRyb2xsZXIuZGVmYXVsdFZhbHVlKSkpIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihkYXRhLCBzZXJpYWxpemVkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjcmVhdGVJdGVtKHtcbiAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICBkYXRhXG4gICAgICB9XG4gICAgfSkudGhlbigoe1xuICAgICAgZGF0YSxcbiAgICAgIGVycm9yc1xuICAgIH0pID0+IHtcbiAgICAgIC8vIHdlJ3JlIGNoZWNraW5nIGZvciBwYXRoLmxlbmd0aCA9PT0gMSBiZWNhdXNlIGVycm9ycyB3aXRoIGEgcGF0aCBsYXJnZXIgdGhhbiAxIHdpbGwgYmUgZmllbGQgbGV2ZWwgZXJyb3JzXG4gICAgICAvLyB3aGljaCBhcmUgaGFuZGxlZCBzZXBlcmF0ZWx5IGFuZCBkbyBub3QgaW5kaWNhdGUgYSBmYWlsdXJlIHRvIHVwZGF0ZSB0aGUgaXRlbVxuICAgICAgY29uc3QgZXJyb3IgPSBlcnJvcnMgPT09IG51bGwgfHwgZXJyb3JzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlcnJvcnMuZmluZCh4ID0+IHtcbiAgICAgICAgdmFyIF94JHBhdGg7XG5cbiAgICAgICAgcmV0dXJuICgoX3gkcGF0aCA9IHgucGF0aCkgPT09IG51bGwgfHwgX3gkcGF0aCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3gkcGF0aC5sZW5ndGgpID09PSAxO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICB0b2FzdHMuYWRkVG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOiAnRmFpbGVkIHRvIGNyZWF0ZSBpdGVtJyxcbiAgICAgICAgICB0b25lOiAnbmVnYXRpdmUnLFxuICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2VcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0b2FzdHMuYWRkVG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOiBkYXRhLml0ZW1bbGlzdC5sYWJlbEZpZWxkXSB8fCBkYXRhLml0ZW0uaWQsXG4gICAgICAgICAgdG9uZTogJ3Bvc2l0aXZlJyxcbiAgICAgICAgICBtZXNzYWdlOiAnU2F2ZWQgc3VjY2Vzc2Z1bGx5J1xuICAgICAgICB9KTtcbiAgICAgICAgb25DcmVhdGUoYWRtaW5VaVV0aWxzLm1ha2VEYXRhR2V0dGVyKGRhdGEsIGVycm9ycykuZ2V0KCdpdGVtJykpO1xuICAgICAgfVxuICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICB0b2FzdHMuYWRkVG9hc3Qoe1xuICAgICAgICB0aXRsZTogJ0ZhaWxlZCB0byB1cGRhdGUgaXRlbScsXG4gICAgICAgIHRvbmU6ICduZWdhdGl2ZScsXG4gICAgICAgIG1lc3NhZ2U6IGVyci5tZXNzYWdlXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gY29yZS5qc3goY29yZS5TdGFjaywge1xuICAgIGdhcDogXCJ4bGFyZ2VcIlxuICB9LCBlcnJvciAmJiBjb3JlLmpzeChjb21wb25lbnRzLkdyYXBoUUxFcnJvck5vdGljZSwge1xuICAgIG5ldHdvcmtFcnJvcjogZXJyb3IgPT09IG51bGwgfHwgZXJyb3IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVycm9yLm5ldHdvcmtFcnJvcixcbiAgICBlcnJvcnM6IGVycm9yID09PSBudWxsIHx8IGVycm9yID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlcnJvci5ncmFwaFFMRXJyb3JzXG4gIH0pLCBjb3JlLmpzeChhZG1pblVpVXRpbHMuRmllbGRzLCB7XG4gICAgZmllbGRNb2RlczogbnVsbCxcbiAgICBmaWVsZHM6IGZpZWxkcyxcbiAgICBmb3JjZVZhbGlkYXRpb246IGZvcmNlVmFsaWRhdGlvbixcbiAgICBpbnZhbGlkRmllbGRzOiBpbnZhbGlkRmllbGRzLFxuICAgIG9uQ2hhbmdlOiBzZXRWYWx1ZSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfSksIGNvcmUuanN4KGNvcmUuU3RhY2ssIHtcbiAgICBnYXA6IFwic21hbGxcIixcbiAgICBhY3Jvc3M6IHRydWVcbiAgfSwgY29yZS5qc3goYnV0dG9uLkJ1dHRvbiwge1xuICAgIGlzTG9hZGluZzogbG9hZGluZyxcbiAgICBzaXplOiBcInNtYWxsXCIsXG4gICAgdG9uZTogXCJwb3NpdGl2ZVwiLFxuICAgIHdlaWdodDogXCJib2xkXCIsXG4gICAgb25DbGljazogb25DcmVhdGVDbGlja1xuICB9LCBcIkNyZWF0ZSBcIiwgbGlzdC5zaW5ndWxhciksIGNvcmUuanN4KGJ1dHRvbi5CdXR0b24sIHtcbiAgICBzaXplOiBcInNtYWxsXCIsXG4gICAgd2VpZ2h0OiBcIm5vbmVcIixcbiAgICBvbkNsaWNrOiBvbkNhbmNlbFxuICB9LCBcIkNhbmNlbFwiKSkpO1xufVxuXG5jb25zdCBDYXJkQ29udGFpbmVyID0gKF9yZWYpID0+IHtcbiAgbGV0IHtcbiAgICBtb2RlID0gJ3ZpZXcnXG4gIH0gPSBfcmVmLFxuICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgW1wibW9kZVwiXSk7XG5cbiAgY29uc3Qge1xuICAgIHRvbmVzXG4gIH0gPSBjb3JlLnVzZVRoZW1lKCk7XG4gIGNvbnN0IHRvbmUgPSB0b25lc1ttb2RlID09PSAnZWRpdCcgPyAnYWN0aXZlJyA6IG1vZGUgPT09ICdjcmVhdGUnID8gJ3Bvc2l0aXZlJyA6ICdwYXNzaXZlJ107XG4gIHJldHVybiBjb3JlLmpzeChjb3JlLkJveCwgX2V4dGVuZHMoe1xuICAgIHBhZGRpbmdMZWZ0OiBcInhsYXJnZVwiLFxuICAgIGNzczoge1xuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAnOmJlZm9yZSc6IHtcbiAgICAgICAgY29udGVudDogJ1wiIFwiJyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0b25lLmJvcmRlcixcbiAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxuICAgICAgICB3aWR0aDogNCxcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICB6SW5kZXg6IDFcbiAgICAgIH1cbiAgICB9XG4gIH0sIHByb3BzKSk7XG59O1xuXG5mdW5jdGlvbiBDYXJkcyh7XG4gIGxvY2FsTGlzdCxcbiAgZmllbGQsXG4gIGZvcmVpZ25MaXN0LFxuICBpZCxcbiAgdmFsdWUsXG4gIG9uQ2hhbmdlLFxuICBmb3JjZVZhbGlkYXRpb25cbn0pIHtcbiAgdmFyIF9maWVsZCRkaXNwbGF5JGlubGluZTtcblxuICBsZXQgc2VsZWN0ZWRGaWVsZHMgPSBbLi4ubmV3IFNldChbLi4uZmllbGQuZGlzcGxheS5jYXJkRmllbGRzLCAuLi4oKChfZmllbGQkZGlzcGxheSRpbmxpbmUgPSBmaWVsZC5kaXNwbGF5LmlubGluZUVkaXQpID09PSBudWxsIHx8IF9maWVsZCRkaXNwbGF5JGlubGluZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2ZpZWxkJGRpc3BsYXkkaW5saW5lLmZpZWxkcykgfHwgW10pXSldLm1hcChmaWVsZFBhdGggPT4ge1xuICAgIHJldHVybiBmb3JlaWduTGlzdC5maWVsZHNbZmllbGRQYXRoXS5jb250cm9sbGVyLmdyYXBocWxTZWxlY3Rpb247XG4gIH0pLmpvaW4oJ1xcbicpO1xuXG4gIGlmICghZmllbGQuZGlzcGxheS5jYXJkRmllbGRzLmluY2x1ZGVzKCdpZCcpKSB7XG4gICAgc2VsZWN0ZWRGaWVsZHMgKz0gJ1xcbmlkJztcbiAgfVxuXG4gIGlmICghZmllbGQuZGlzcGxheS5jYXJkRmllbGRzLmluY2x1ZGVzKGZvcmVpZ25MaXN0LmxhYmVsRmllbGQpICYmIGZvcmVpZ25MaXN0LmxhYmVsRmllbGQgIT09ICdpZCcpIHtcbiAgICBzZWxlY3RlZEZpZWxkcyArPSBgXFxuJHtmb3JlaWduTGlzdC5sYWJlbEZpZWxkfWA7XG4gIH1cblxuICBjb25zdCB7XG4gICAgaXRlbXMsXG4gICAgc2V0SXRlbXMsXG4gICAgc3RhdGU6IGl0ZW1zU3RhdGVcbiAgfSA9IHVzZUl0ZW1TdGF0ZSh7XG4gICAgc2VsZWN0ZWRGaWVsZHMsXG4gICAgbG9jYWxMaXN0LFxuICAgIGlkLFxuICAgIGZpZWxkXG4gIH0pO1xuICBjb25zdCBjbGllbnQgPSBhcG9sbG8udXNlQXBvbGxvQ2xpZW50KCk7XG4gIGNvbnN0IFtpc0xvYWRpbmdMYXp5SXRlbXMsIHNldElzTG9hZGluZ0xhenlJdGVtc10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzaG93Q29ubmVjdEl0ZW1zLCBzZXRTaG93Q29ubmVjdEl0ZW1zXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2hpZGVDb25uZWN0SXRlbXNMYWJlbCwgc2V0SGlkZUNvbm5lY3RJdGVtc0xhYmVsXSA9IFJlYWN0LnVzZVN0YXRlKCdDYW5jZWwnKTtcbiAgY29uc3QgaXNNb3VudGVkUmVmID0gUmVhY3QudXNlUmVmKGZhbHNlKTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpc01vdW50ZWRSZWYuY3VycmVudCA9IHRydWU7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlzTW91bnRlZFJlZi5jdXJyZW50ID0gZmFsc2U7XG4gICAgfTtcbiAgfSk7XG5cbiAgaWYgKGl0ZW1zU3RhdGUua2luZCA9PT0gJ2xvYWRpbmcnKSB7XG4gICAgcmV0dXJuIGNvcmUuanN4KFwiZGl2XCIsIG51bGwsIGNvcmUuanN4KGxvYWRpbmcuTG9hZGluZ0RvdHMsIHtcbiAgICAgIGxhYmVsOiBgTG9hZGluZyBpdGVtcyBmb3IgJHtmaWVsZC5sYWJlbH0gZmllbGRgXG4gICAgfSkpO1xuICB9XG5cbiAgaWYgKGl0ZW1zU3RhdGUua2luZCA9PT0gJ2Vycm9yJykge1xuICAgIHJldHVybiBjb3JlLmpzeChcInNwYW5cIiwge1xuICAgICAgY3NzOiB7XG4gICAgICAgIGNvbG9yOiAncmVkJ1xuICAgICAgfVxuICAgIH0sIGl0ZW1zU3RhdGUubWVzc2FnZSk7XG4gIH1cblxuICByZXR1cm4gY29yZS5qc3goY29yZS5TdGFjaywge1xuICAgIGdhcDogXCJ4bGFyZ2VcIlxuICB9LCBbLi4udmFsdWUuY3VycmVudElkc10ubWFwKGlkID0+IHtcbiAgICBjb25zdCBpdGVtR2V0dGVyID0gaXRlbXNbaWRdO1xuICAgIHJldHVybiB2YWx1ZS5pdGVtc0JlaW5nRWRpdGVkLmhhcyhpZCkgJiYgb25DaGFuZ2UgIT09IHVuZGVmaW5lZCA/IGNvcmUuanN4KENhcmRDb250YWluZXIsIHtcbiAgICAgIG1vZGU6IFwiZWRpdFwiLFxuICAgICAga2V5OiBpZFxuICAgIH0sIGNvcmUuanN4KElubGluZUVkaXQsIHtcbiAgICAgIGxpc3Q6IGZvcmVpZ25MaXN0LFxuICAgICAgZmllbGRzOiBmaWVsZC5kaXNwbGF5LmlubGluZUVkaXQuZmllbGRzLFxuICAgICAgb25TYXZlOiBuZXdJdGVtR2V0dGVyID0+IHtcbiAgICAgICAgc2V0SXRlbXMoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBpdGVtcyksIHt9LCB7XG4gICAgICAgICAgW2lkXTogbmV3SXRlbUdldHRlclxuICAgICAgICB9KSk7XG4gICAgICAgIGNvbnN0IGl0ZW1zQmVpbmdFZGl0ZWQgPSBuZXcgU2V0KHZhbHVlLml0ZW1zQmVpbmdFZGl0ZWQpO1xuICAgICAgICBpdGVtc0JlaW5nRWRpdGVkLmRlbGV0ZShpZCk7XG4gICAgICAgIG9uQ2hhbmdlKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgdmFsdWUpLCB7fSwge1xuICAgICAgICAgIGl0ZW1zQmVpbmdFZGl0ZWRcbiAgICAgICAgfSkpO1xuICAgICAgfSxcbiAgICAgIHNlbGVjdGVkRmllbGRzOiBzZWxlY3RlZEZpZWxkcyxcbiAgICAgIGl0ZW1HZXR0ZXI6IGl0ZW1HZXR0ZXIsXG4gICAgICBvbkNhbmNlbDogKCkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtc0JlaW5nRWRpdGVkID0gbmV3IFNldCh2YWx1ZS5pdGVtc0JlaW5nRWRpdGVkKTtcbiAgICAgICAgaXRlbXNCZWluZ0VkaXRlZC5kZWxldGUoaWQpO1xuICAgICAgICBvbkNoYW5nZShfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHZhbHVlKSwge30sIHtcbiAgICAgICAgICBpdGVtc0JlaW5nRWRpdGVkXG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICB9KSkgOiBjb3JlLmpzeChDYXJkQ29udGFpbmVyLCB7XG4gICAgICBtb2RlOiBcInZpZXdcIixcbiAgICAgIGtleTogaWRcbiAgICB9LCBjb3JlLmpzeChjb3JlLlN0YWNrLCB7XG4gICAgICBnYXA6IFwieGxhcmdlXCJcbiAgICB9LCBmaWVsZC5kaXNwbGF5LmNhcmRGaWVsZHMubWFwKGZpZWxkUGF0aCA9PiB7XG4gICAgICBjb25zdCBmaWVsZCA9IGZvcmVpZ25MaXN0LmZpZWxkc1tmaWVsZFBhdGhdO1xuICAgICAgY29uc3QgaXRlbUZvckZpZWxkID0ge307XG5cbiAgICAgIGZvciAoY29uc3QgZ3JhcGhxbEZpZWxkIG9mIGFkbWluVWlVdGlscy5nZXRSb290R3JhcGhRTEZpZWxkc0Zyb21GaWVsZENvbnRyb2xsZXIoZmllbGQuY29udHJvbGxlcikpIHtcbiAgICAgICAgY29uc3QgZmllbGRHZXR0ZXIgPSBpdGVtR2V0dGVyLmdldChncmFwaHFsRmllbGQpO1xuXG4gICAgICAgIGlmIChmaWVsZEdldHRlci5lcnJvcnMpIHtcbiAgICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBmaWVsZEdldHRlci5lcnJvcnNbMF0ubWVzc2FnZTtcbiAgICAgICAgICByZXR1cm4gY29yZS5qc3goZmllbGRzLkZpZWxkQ29udGFpbmVyLCBudWxsLCBjb3JlLmpzeChmaWVsZHMuRmllbGRMYWJlbCwgbnVsbCwgZmllbGQubGFiZWwpLCBlcnJvck1lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgaXRlbUZvckZpZWxkW2dyYXBocWxGaWVsZF0gPSBmaWVsZEdldHRlci5kYXRhO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29yZS5qc3goZmllbGQudmlld3MuQ2FyZFZhbHVlLCB7XG4gICAgICAgIGtleTogZmllbGRQYXRoLFxuICAgICAgICBmaWVsZDogZmllbGQuY29udHJvbGxlcixcbiAgICAgICAgaXRlbTogaXRlbUZvckZpZWxkXG4gICAgICB9KTtcbiAgICB9KSksIGNvcmUuanN4KGNvcmUuU3RhY2ssIHtcbiAgICAgIGFjcm9zczogdHJ1ZSxcbiAgICAgIGdhcDogXCJzbWFsbFwiLFxuICAgICAgbWFyZ2luVG9wOiBcInhsYXJnZVwiXG4gICAgfSwgZmllbGQuZGlzcGxheS5pbmxpbmVFZGl0ICYmIG9uQ2hhbmdlICE9PSB1bmRlZmluZWQgJiYgY29yZS5qc3goYnV0dG9uLkJ1dHRvbiwge1xuICAgICAgc2l6ZTogXCJzbWFsbFwiLFxuICAgICAgZGlzYWJsZWQ6IG9uQ2hhbmdlID09PSB1bmRlZmluZWQsXG4gICAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgIG9uQ2hhbmdlKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgdmFsdWUpLCB7fSwge1xuICAgICAgICAgIGl0ZW1zQmVpbmdFZGl0ZWQ6IG5ldyBTZXQoWy4uLnZhbHVlLml0ZW1zQmVpbmdFZGl0ZWQsIGlkXSlcbiAgICAgICAgfSkpO1xuICAgICAgfSxcbiAgICAgIHRvbmU6IFwiYWN0aXZlXCJcbiAgICB9LCBcIkVkaXRcIiksIGZpZWxkLmRpc3BsYXkucmVtb3ZlTW9kZSA9PT0gJ2Rpc2Nvbm5lY3QnICYmIG9uQ2hhbmdlICE9PSB1bmRlZmluZWQgJiYgY29yZS5qc3godG9vbHRpcC5Ub29sdGlwLCB7XG4gICAgICBjb250ZW50OiBcIlRoaXMgaXRlbSB3aWxsIG5vdCBiZSBkZWxldGVkLiBJdCB3aWxsIG9ubHkgYmUgcmVtb3ZlZCBmcm9tIHRoaXMgZmllbGQuXCJcbiAgICB9LCBwcm9wcyA9PiBjb3JlLmpzeChidXR0b24uQnV0dG9uLCBfZXh0ZW5kcyh7XG4gICAgICBzaXplOiBcInNtYWxsXCIsXG4gICAgICBkaXNhYmxlZDogb25DaGFuZ2UgPT09IHVuZGVmaW5lZCxcbiAgICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudElkcyA9IG5ldyBTZXQodmFsdWUuY3VycmVudElkcyk7XG4gICAgICAgIGN1cnJlbnRJZHMuZGVsZXRlKGlkKTtcbiAgICAgICAgb25DaGFuZ2UoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCB2YWx1ZSksIHt9LCB7XG4gICAgICAgICAgY3VycmVudElkc1xuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgfSwgcHJvcHMsIHtcbiAgICAgIHRvbmU6IFwibmVnYXRpdmVcIlxuICAgIH0pLCBcIlJlbW92ZVwiKSksIGZpZWxkLmRpc3BsYXkubGlua1RvSXRlbSAmJiBjb3JlLmpzeChidXR0b24uQnV0dG9uLCB7XG4gICAgICBzaXplOiBcInNtYWxsXCIsXG4gICAgICB3ZWlnaHQ6IFwibGlua1wiLFxuICAgICAgdG9uZTogXCJhY3RpdmVcIixcbiAgICAgIGNzczoge1xuICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnXG4gICAgICB9LFxuICAgICAgYXM6IHJvdXRlci5MaW5rLFxuICAgICAgaHJlZjogYC8ke2ZvcmVpZ25MaXN0LnBhdGh9LyR7aWR9YFxuICAgIH0sIFwiVmlldyBcIiwgZm9yZWlnbkxpc3Quc2luZ3VsYXIsIFwiIGRldGFpbHNcIikpKTtcbiAgfSksIG9uQ2hhbmdlID09PSB1bmRlZmluZWQgPyBudWxsIDogZmllbGQuZGlzcGxheS5pbmxpbmVDb25uZWN0ICYmIHNob3dDb25uZWN0SXRlbXMgPyBjb3JlLmpzeChDYXJkQ29udGFpbmVyLCB7XG4gICAgbW9kZTogXCJlZGl0XCJcbiAgfSwgY29yZS5qc3goY29yZS5TdGFjaywge1xuICAgIGdhcDogXCJzbWFsbFwiLFxuICAgIG1hcmdpblk6IFwibWVkaXVtXCIsXG4gICAgYWNyb3NzOiB0cnVlXG4gIH0sIGNvcmUuanN4KHR5cGVzX3JlbGF0aW9uc2hpcF92aWV3c19SZWxhdGlvbnNoaXBTZWxlY3RfZGlzdF9maWVsZHMuUmVsYXRpb25zaGlwU2VsZWN0LCB7XG4gICAgYXV0b0ZvY3VzOiB0cnVlLFxuICAgIGNvbnRyb2xTaG91bGRSZW5kZXJWYWx1ZTogaXNMb2FkaW5nTGF6eUl0ZW1zLFxuICAgIGlzRGlzYWJsZWQ6IG9uQ2hhbmdlID09PSB1bmRlZmluZWQsXG4gICAgbGlzdDogZm9yZWlnbkxpc3QsXG4gICAgaXNMb2FkaW5nOiBpc0xvYWRpbmdMYXp5SXRlbXMsXG4gICAgcGxhY2Vob2xkZXI6IGBTZWxlY3QgYSAke2ZvcmVpZ25MaXN0LnNpbmd1bGFyfWAsXG4gICAgc3RhdGU6IHtcbiAgICAgIGtpbmQ6ICdtYW55JyxcblxuICAgICAgYXN5bmMgb25DaGFuZ2Uob3B0aW9ucykge1xuICAgICAgICAvLyBUT0RPOiBtYXliZSB1c2UgdGhlIGV4dHJhU2VsZWN0aW9uIHByb3Agb24gUmVsYXRpb25zaGlwU2VsZWN0IGhlcmVcbiAgICAgICAgY29uc3QgaXRlbXNUb0ZldGNoQW5kQ29ubmVjdCA9IFtdO1xuICAgICAgICBvcHRpb25zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgaWYgKCF2YWx1ZS5jdXJyZW50SWRzLmhhcyhpdGVtLmlkKSkge1xuICAgICAgICAgICAgaXRlbXNUb0ZldGNoQW5kQ29ubmVjdC5wdXNoKGl0ZW0uaWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGl0ZW1zVG9GZXRjaEFuZENvbm5lY3QubGVuZ3RoKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgICAgZXJyb3JzXG4gICAgICAgICAgICB9ID0gYXdhaXQgY2xpZW50LnF1ZXJ5KHtcbiAgICAgICAgICAgICAgcXVlcnk6IGFwb2xsby5ncWxgcXVlcnkgKCRpZHM6IFtJRCFdISkge1xuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiAke2ZvcmVpZ25MaXN0LmdxbE5hbWVzLmxpc3RRdWVyeU5hbWV9KHdoZXJlOiB7aWRfaW46JGlkc30pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICR7c2VsZWN0ZWRGaWVsZHN9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9YCxcbiAgICAgICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICAgICAgaWRzOiBpdGVtc1RvRmV0Y2hBbmRDb25uZWN0XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoaXNNb3VudGVkUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgY29uc3QgZGF0YUdldHRlcnMgPSBhZG1pblVpVXRpbHMubWFrZURhdGFHZXR0ZXIoZGF0YSwgZXJyb3JzKTtcbiAgICAgICAgICAgICAgY29uc3QgaXRlbXNEYXRhR2V0dGVyID0gZGF0YUdldHRlcnMuZ2V0KCdpdGVtcycpO1xuXG4gICAgICAgICAgICAgIGxldCBuZXdJdGVtcyA9IF9vYmplY3RTcHJlYWQoe30sIGl0ZW1zKTtcblxuICAgICAgICAgICAgICBsZXQgbmV3Q3VycmVudElkcyA9IGZpZWxkLm1hbnkgPyBuZXcgU2V0KHZhbHVlLmN1cnJlbnRJZHMpIDogbmV3IFNldCgpO1xuXG4gICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGl0ZW1zRGF0YUdldHRlci5kYXRhKSkge1xuICAgICAgICAgICAgICAgIGl0ZW1zRGF0YUdldHRlci5kYXRhLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmICgoaXRlbSA9PT0gbnVsbCB8fCBpdGVtID09PSB2b2lkIDAgPyB2b2lkIDAgOiBpdGVtLmlkKSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld0N1cnJlbnRJZHMuYWRkKGl0ZW0uaWQpO1xuICAgICAgICAgICAgICAgICAgICBuZXdJdGVtc1tpdGVtLmlkXSA9IGl0ZW1zRGF0YUdldHRlci5nZXQoaSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAobmV3Q3VycmVudElkcy5zaXplKSB7XG4gICAgICAgICAgICAgICAgc2V0SXRlbXMobmV3SXRlbXMpO1xuICAgICAgICAgICAgICAgIG9uQ2hhbmdlKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgdmFsdWUpLCB7fSwge1xuICAgICAgICAgICAgICAgICAgY3VycmVudElkczogbmV3Q3VycmVudElkc1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICBzZXRIaWRlQ29ubmVjdEl0ZW1zTGFiZWwoJ0RvbmUnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBpZiAoaXNNb3VudGVkUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgc2V0SXNMb2FkaW5nTGF6eUl0ZW1zKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIHZhbHVlOiAoKCkgPT4ge1xuICAgICAgICBsZXQgb3B0aW9ucyA9IFtdO1xuICAgICAgICBPYmplY3Qua2V5cyhpdGVtcykuZm9yRWFjaChpZCA9PiB7XG4gICAgICAgICAgaWYgKHZhbHVlLmN1cnJlbnRJZHMuaGFzKGlkKSkge1xuICAgICAgICAgICAgb3B0aW9ucy5wdXNoKHtcbiAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgIGxhYmVsOiBpZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgICB9KSgpXG4gICAgfVxuICB9KSwgY29yZS5qc3goYnV0dG9uLkJ1dHRvbiwge1xuICAgIG9uQ2xpY2s6ICgpID0+IHNldFNob3dDb25uZWN0SXRlbXMoZmFsc2UpXG4gIH0sIGhpZGVDb25uZWN0SXRlbXNMYWJlbCkpKSA6IHZhbHVlLml0ZW1CZWluZ0NyZWF0ZWQgPyBjb3JlLmpzeChDYXJkQ29udGFpbmVyLCB7XG4gICAgbW9kZTogXCJjcmVhdGVcIlxuICB9LCBjb3JlLmpzeChJbmxpbmVDcmVhdGUsIHtcbiAgICBzZWxlY3RlZEZpZWxkczogc2VsZWN0ZWRGaWVsZHMsXG4gICAgZmllbGRzOiBmaWVsZC5kaXNwbGF5LmlubGluZUNyZWF0ZS5maWVsZHMsXG4gICAgbGlzdDogZm9yZWlnbkxpc3QsXG4gICAgb25DYW5jZWw6ICgpID0+IHtcbiAgICAgIG9uQ2hhbmdlKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgdmFsdWUpLCB7fSwge1xuICAgICAgICBpdGVtQmVpbmdDcmVhdGVkOiBmYWxzZVxuICAgICAgfSkpO1xuICAgIH0sXG4gICAgb25DcmVhdGU6IGl0ZW1HZXR0ZXIgPT4ge1xuICAgICAgY29uc3QgaWQgPSBpdGVtR2V0dGVyLmRhdGEuaWQ7XG4gICAgICBzZXRJdGVtcyhfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGl0ZW1zKSwge30sIHtcbiAgICAgICAgW2lkXTogaXRlbUdldHRlclxuICAgICAgfSkpO1xuICAgICAgb25DaGFuZ2UoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCB2YWx1ZSksIHt9LCB7XG4gICAgICAgIGl0ZW1CZWluZ0NyZWF0ZWQ6IGZhbHNlLFxuICAgICAgICBjdXJyZW50SWRzOiBmaWVsZC5tYW55ID8gbmV3IFNldChbLi4udmFsdWUuY3VycmVudElkcywgaWRdKSA6IG5ldyBTZXQoW2lkXSlcbiAgICAgIH0pKTtcbiAgICB9XG4gIH0pKSA6IGZpZWxkLmRpc3BsYXkuaW5saW5lQ3JlYXRlIHx8IGZpZWxkLmRpc3BsYXkuaW5saW5lQ29ubmVjdCA/IGNvcmUuanN4KENhcmRDb250YWluZXIsIHtcbiAgICBtb2RlOiBcImNyZWF0ZVwiXG4gIH0sIGNvcmUuanN4KGNvcmUuU3RhY2ssIHtcbiAgICBnYXA6IFwic21hbGxcIixcbiAgICBtYXJnaW5Ub3A6IFwibWVkaXVtXCIsXG4gICAgYWNyb3NzOiB0cnVlXG4gIH0sIGZpZWxkLmRpc3BsYXkuaW5saW5lQ3JlYXRlICYmIGNvcmUuanN4KGJ1dHRvbi5CdXR0b24sIHtcbiAgICBzaXplOiBcInNtYWxsXCIsXG4gICAgZGlzYWJsZWQ6IG9uQ2hhbmdlID09PSB1bmRlZmluZWQsXG4gICAgdG9uZTogXCJwb3NpdGl2ZVwiLFxuICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgIG9uQ2hhbmdlKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgdmFsdWUpLCB7fSwge1xuICAgICAgICBpdGVtQmVpbmdDcmVhdGVkOiB0cnVlXG4gICAgICB9KSk7XG4gICAgfVxuICB9LCBcIkNyZWF0ZSBcIiwgZm9yZWlnbkxpc3Quc2luZ3VsYXIpLCBmaWVsZC5kaXNwbGF5LmlubGluZUNvbm5lY3QgJiYgY29yZS5qc3goYnV0dG9uLkJ1dHRvbiwge1xuICAgIHNpemU6IFwic21hbGxcIixcbiAgICB3ZWlnaHQ6IFwibm9uZVwiLFxuICAgIHRvbmU6IFwicGFzc2l2ZVwiLFxuICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgIHNldFNob3dDb25uZWN0SXRlbXModHJ1ZSk7XG4gICAgICBzZXRIaWRlQ29ubmVjdEl0ZW1zTGFiZWwoJ0NhbmNlbCcpO1xuICAgIH1cbiAgfSwgXCJMaW5rIGV4aXN0aW5nIFwiLCBmb3JlaWduTGlzdC5zaW5ndWxhcikpKSA6IG51bGwsIGZvcmNlVmFsaWRhdGlvbiAmJiBjb3JlLmpzeChjb3JlLlRleHQsIHtcbiAgICBjb2xvcjogXCJyZWQ2MDBcIixcbiAgICBzaXplOiBcInNtYWxsXCJcbiAgfSwgXCJZb3UgbXVzdCBmaW5pc2ggY3JlYXRpbmcgYW5kIGVkaXRpbmcgYW55IHJlbGF0ZWQgXCIsIGZvcmVpZ25MaXN0LmxhYmVsLnRvTG93ZXJDYXNlKCksIFwiIGJlZm9yZSBzYXZpbmcgdGhlIFwiLCBsb2NhbExpc3Quc2luZ3VsYXIudG9Mb3dlckNhc2UoKSkpO1xufVxuXG5mdW5jdGlvbiBMaW5rVG9SZWxhdGVkSXRlbXMoe1xuICB2YWx1ZSxcbiAgbGlzdFxufSkge1xuICB2YXIgX3ZhbHVlJHZhbHVlO1xuXG4gIGNvbnN0IGNvbW1vblByb3BzID0ge1xuICAgIHNpemU6ICdzbWFsbCcsXG4gICAgdG9uZTogJ2FjdGl2ZScsXG4gICAgd2VpZ2h0OiAnbGluaydcbiAgfTtcblxuICBpZiAodmFsdWUua2luZCA9PT0gJ21hbnknKSB7XG4gICAgcmV0dXJuIGNvcmUuanN4KGJ1dHRvbi5CdXR0b24sIF9leHRlbmRzKHt9LCBjb21tb25Qcm9wcywge1xuICAgICAgYXM6IHJvdXRlci5MaW5rIC8vIFdoYXQgaGFwcGVucyB3aGVuIHRoZXJlIGFyZSAxMCwwMDAgaWRzPyBUaGUgVVJMIHdvdWxkIGJlIHRvb1xuICAgICAgLy8gYmlnLCBzbyB3ZSBhcmJpdHJhcmlseSBsaW1pdCBpdCB0byB0aGUgZmlyc3QgMTAwXG4gICAgICAvLyBUT0RPOiB3ZSBzaG91bGQgYmUgYWJsZSB0byBmaWx0ZXIgYnkgdGhpcywgbm8/XG4gICAgICAsXG4gICAgICBocmVmOiBgLyR7bGlzdC5wYXRofT8haWRfaW49XCIke3ZhbHVlLnZhbHVlLnNsaWNlKDAsIDEwMCkubWFwKCh7XG4gICAgICAgIGlkXG4gICAgICB9KSA9PiBpZCkuam9pbignLCcpfVwiYFxuICAgIH0pLCBcIlZpZXcgcmVsYXRlZCBcIiwgbGlzdC5wbHVyYWwpO1xuICB9XG5cbiAgcmV0dXJuIGNvcmUuanN4KGJ1dHRvbi5CdXR0b24sIF9leHRlbmRzKHt9LCBjb21tb25Qcm9wcywge1xuICAgIGFzOiByb3V0ZXIuTGluayxcbiAgICBocmVmOiBgLyR7bGlzdC5wYXRofS8keyhfdmFsdWUkdmFsdWUgPSB2YWx1ZS52YWx1ZSkgPT09IG51bGwgfHwgX3ZhbHVlJHZhbHVlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdmFsdWUkdmFsdWUuaWR9YFxuICB9KSwgXCJWaWV3IFwiLCBsaXN0LnNpbmd1bGFyLCBcIiBkZXRhaWxzXCIpO1xufVxuXG5jb25zdCBSZWxhdGlvbnNoaXBMaW5rQnV0dG9uID0gKHtcbiAgaHJlZixcbiAgY2hpbGRyZW5cbn0pID0+IGNvcmUuanN4KGJ1dHRvbi5CdXR0b24sIHtcbiAgY3NzOiB7XG4gICAgcGFkZGluZzogMCxcbiAgICBoZWlnaHQ6ICdhdXRvJ1xuICB9LFxuICB3ZWlnaHQ6IFwibGlua1wiLFxuICB0b25lOiBcImFjdGl2ZVwiLFxuICBhczogcm91dGVyLkxpbmssXG4gIGhyZWY6IGhyZWZcbn0sIGNoaWxkcmVuKTtcblxuY29uc3QgUmVsYXRpb25zaGlwRGlzcGxheSA9ICh7XG4gIGxpc3QsXG4gIHZhbHVlXG59KSA9PiB7XG4gIGlmICh2YWx1ZS5raW5kID09PSAnbWFueScpIHtcbiAgICBpZiAodmFsdWUudmFsdWUubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gY29yZS5qc3goY29yZS5JbmxpbmUsIHtcbiAgICAgICAgZ2FwOiBcInNtYWxsXCJcbiAgICAgIH0sIHZhbHVlLnZhbHVlLm1hcChpID0+IGNvcmUuanN4KFJlbGF0aW9uc2hpcExpbmtCdXR0b24sIHtcbiAgICAgICAgaHJlZjogYC8ke2xpc3QucGF0aH0vJHtpLmlkfWBcbiAgICAgIH0sIGkubGFiZWwpKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjb3JlLmpzeChcImRpdlwiLCBudWxsLCBcIihObyBcIiwgbGlzdC5wbHVyYWwsIFwiKVwiKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKHZhbHVlLnZhbHVlKSB7XG4gICAgICByZXR1cm4gY29yZS5qc3goUmVsYXRpb25zaGlwTGlua0J1dHRvbiwge1xuICAgICAgICBocmVmOiBgLyR7bGlzdC5wYXRofS8ke3ZhbHVlLnZhbHVlLmlkfWBcbiAgICAgIH0sIHZhbHVlLnZhbHVlLmxhYmVsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGNvcmUuanN4KFwiZGl2XCIsIG51bGwsIFwiKE5vIFwiLCBsaXN0LnNpbmd1bGFyLCBcIilcIik7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBGaWVsZCA9ICh7XG4gIGZpZWxkLFxuICBhdXRvRm9jdXMsXG4gIHZhbHVlLFxuICBvbkNoYW5nZSxcbiAgZm9yY2VWYWxpZGF0aW9uXG59KSA9PiB7XG4gIGNvbnN0IGtleXN0b25lID0gY29udGV4dC51c2VLZXlzdG9uZSgpO1xuICBjb25zdCBmb3JlaWduTGlzdCA9IGNvbnRleHQudXNlTGlzdChmaWVsZC5yZWZMaXN0S2V5KTtcbiAgY29uc3QgbG9jYWxMaXN0ID0gY29udGV4dC51c2VMaXN0KGZpZWxkLmxpc3RLZXkpO1xuICBjb25zdCBbaXNEcmF3ZXJPcGVuLCBzZXRJc0RyYXdlck9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXG4gIGlmICh2YWx1ZS5raW5kID09PSAnY2FyZHMtdmlldycpIHtcbiAgICByZXR1cm4gY29yZS5qc3goY29yZS5TdGFjaywge1xuICAgICAgYXM6IFwiZmllbGRzZXRcIixcbiAgICAgIGdhcDogXCJtZWRpdW1cIlxuICAgIH0sIGNvcmUuanN4KGZpZWxkcy5GaWVsZExlZ2VuZCwgbnVsbCwgZmllbGQubGFiZWwpLCBjb3JlLmpzeChDYXJkcywge1xuICAgICAgZm9yY2VWYWxpZGF0aW9uOiBmb3JjZVZhbGlkYXRpb24sXG4gICAgICBmaWVsZDogZmllbGQsXG4gICAgICBpZDogdmFsdWUuaWQsXG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBvbkNoYW5nZTogb25DaGFuZ2UsXG4gICAgICBmb3JlaWduTGlzdDogZm9yZWlnbkxpc3QsXG4gICAgICBsb2NhbExpc3Q6IGxvY2FsTGlzdFxuICAgIH0pKTtcbiAgfVxuXG4gIHJldHVybiBjb3JlLmpzeChmaWVsZHMuRmllbGRDb250YWluZXIsIG51bGwsIGNvcmUuanN4KGZpZWxkcy5GaWVsZExhYmVsLCB7XG4gICAgYXM6IFwibGVnZW5kXCJcbiAgfSwgZmllbGQubGFiZWwpLCBvbkNoYW5nZSA/IGNvcmUuanN4KFJlYWN0LkZyYWdtZW50LCBudWxsLCBjb3JlLmpzeChjb3JlLlN0YWNrLCB7XG4gICAgZ2FwOiBcIm1lZGl1bVwiXG4gIH0sIGNvcmUuanN4KHR5cGVzX3JlbGF0aW9uc2hpcF92aWV3c19SZWxhdGlvbnNoaXBTZWxlY3RfZGlzdF9maWVsZHMuUmVsYXRpb25zaGlwU2VsZWN0LCB7XG4gICAgY29udHJvbFNob3VsZFJlbmRlclZhbHVlOiB0cnVlLFxuICAgIGF1dG9Gb2N1czogYXV0b0ZvY3VzLFxuICAgIGlzRGlzYWJsZWQ6IG9uQ2hhbmdlID09PSB1bmRlZmluZWQsXG4gICAgbGlzdDogZm9yZWlnbkxpc3QsXG4gICAgc3RhdGU6IHZhbHVlLmtpbmQgPT09ICdtYW55JyA/IHtcbiAgICAgIGtpbmQ6ICdtYW55JyxcbiAgICAgIHZhbHVlOiB2YWx1ZS52YWx1ZSxcblxuICAgICAgb25DaGFuZ2UobmV3SXRlbXMpIHtcbiAgICAgICAgb25DaGFuZ2UoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCB2YWx1ZSksIHt9LCB7XG4gICAgICAgICAgdmFsdWU6IG5ld0l0ZW1zXG4gICAgICAgIH0pKTtcbiAgICAgIH1cblxuICAgIH0gOiB7XG4gICAgICBraW5kOiAnb25lJyxcbiAgICAgIHZhbHVlOiB2YWx1ZS52YWx1ZSxcblxuICAgICAgb25DaGFuZ2UobmV3VmFsKSB7XG4gICAgICAgIGlmICh2YWx1ZS5raW5kID09PSAnb25lJykge1xuICAgICAgICAgIG9uQ2hhbmdlKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgdmFsdWUpLCB7fSwge1xuICAgICAgICAgICAgdmFsdWU6IG5ld1ZhbFxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfVxuICB9KSwgY29yZS5qc3goY29yZS5TdGFjaywge1xuICAgIGFjcm9zczogdHJ1ZSxcbiAgICBnYXA6IFwic21hbGxcIlxuICB9LCAhZmllbGQuaGlkZUNyZWF0ZSAmJiBjb3JlLmpzeChidXR0b24uQnV0dG9uLCB7XG4gICAgc2l6ZTogXCJzbWFsbFwiLFxuICAgIGRpc2FibGVkOiBpc0RyYXdlck9wZW4sXG4gICAgb25DbGljazogKCkgPT4ge1xuICAgICAgc2V0SXNEcmF3ZXJPcGVuKHRydWUpO1xuICAgIH1cbiAgfSwgXCJDcmVhdGUgcmVsYXRlZCBcIiwgZm9yZWlnbkxpc3Quc2luZ3VsYXIpLCBrZXlzdG9uZS5hdXRoZW50aWNhdGVkSXRlbS5zdGF0ZSA9PT0gJ2F1dGhlbnRpY2F0ZWQnICYmIGtleXN0b25lLmF1dGhlbnRpY2F0ZWRJdGVtLmxpc3RLZXkgPT09IGZpZWxkLnJlZkxpc3RLZXkgJiYgY29yZS5qc3goYnV0dG9uLkJ1dHRvbiwge1xuICAgIHNpemU6IFwic21hbGxcIixcbiAgICBpc0Rpc2FibGVkOiBvbkNoYW5nZSA9PT0gdW5kZWZpbmVkLFxuICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgIGlmIChrZXlzdG9uZS5hdXRoZW50aWNhdGVkSXRlbS5zdGF0ZSA9PT0gJ2F1dGhlbnRpY2F0ZWQnKSB7XG4gICAgICAgIGNvbnN0IHZhbCA9IHtcbiAgICAgICAgICBsYWJlbDoga2V5c3RvbmUuYXV0aGVudGljYXRlZEl0ZW0ubGFiZWwsXG4gICAgICAgICAgaWQ6IGtleXN0b25lLmF1dGhlbnRpY2F0ZWRJdGVtLmlkXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHZhbHVlLmtpbmQgPT09ICdtYW55Jykge1xuICAgICAgICAgIG9uQ2hhbmdlKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgdmFsdWUpLCB7fSwge1xuICAgICAgICAgICAgdmFsdWU6IFsuLi52YWx1ZS52YWx1ZSwgdmFsXVxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvbkNoYW5nZShfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHZhbHVlKSwge30sIHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWxcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIHZhbHVlLmtpbmQgPT09ICdtYW55JyA/ICdBZGQgJyA6ICdTZXQgYXMgJywga2V5c3RvbmUuYXV0aGVudGljYXRlZEl0ZW0ubGFiZWwpLCAhISh2YWx1ZS5raW5kID09PSAnbWFueScgPyB2YWx1ZS52YWx1ZS5sZW5ndGggOiB2YWx1ZS5raW5kID09PSAnb25lJyAmJiB2YWx1ZS52YWx1ZSkgJiYgY29yZS5qc3goTGlua1RvUmVsYXRlZEl0ZW1zLCB7XG4gICAgbGlzdDogZm9yZWlnbkxpc3QsXG4gICAgdmFsdWU6IHZhbHVlXG4gIH0pKSksIGNvcmUuanN4KG1vZGFscy5EcmF3ZXJDb250cm9sbGVyLCB7XG4gICAgaXNPcGVuOiBpc0RyYXdlck9wZW5cbiAgfSwgY29yZS5qc3goY29tcG9uZW50cy5DcmVhdGVJdGVtRHJhd2VyLCB7XG4gICAgbGlzdEtleTogZm9yZWlnbkxpc3Qua2V5LFxuICAgIG9uQ2xvc2U6ICgpID0+IHtcbiAgICAgIHNldElzRHJhd2VyT3BlbihmYWxzZSk7XG4gICAgfSxcbiAgICBvbkNyZWF0ZTogdmFsID0+IHtcbiAgICAgIHNldElzRHJhd2VyT3BlbihmYWxzZSk7XG5cbiAgICAgIGlmICh2YWx1ZS5raW5kID09PSAnbWFueScpIHtcbiAgICAgICAgb25DaGFuZ2UoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCB2YWx1ZSksIHt9LCB7XG4gICAgICAgICAgdmFsdWU6IFsuLi52YWx1ZS52YWx1ZSwgdmFsXVxuICAgICAgICB9KSk7XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlLmtpbmQgPT09ICdvbmUnKSB7XG4gICAgICAgIG9uQ2hhbmdlKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgdmFsdWUpLCB7fSwge1xuICAgICAgICAgIHZhbHVlOiB2YWxcbiAgICAgICAgfSkpO1xuICAgICAgfVxuICAgIH1cbiAgfSkpKSA6IGNvcmUuanN4KFJlbGF0aW9uc2hpcERpc3BsYXksIHtcbiAgICB2YWx1ZTogdmFsdWUsXG4gICAgbGlzdDogZm9yZWlnbkxpc3RcbiAgfSkpO1xufTtcbmNvbnN0IENlbGwgPSAoe1xuICBmaWVsZCxcbiAgaXRlbVxufSkgPT4ge1xuICBjb25zdCBsaXN0ID0gY29udGV4dC51c2VMaXN0KGZpZWxkLnJlZkxpc3RLZXkpO1xuICBjb25zdCBkYXRhID0gaXRlbVtmaWVsZC5wYXRoXTtcbiAgY29uc3QgaXRlbXMgPSAoQXJyYXkuaXNBcnJheShkYXRhKSA/IGRhdGEgOiBbZGF0YV0pLmZpbHRlcihpdGVtID0+IGl0ZW0pO1xuICBjb25zdCBkaXNwbGF5SXRlbXMgPSBpdGVtcy5sZW5ndGggPCA1ID8gaXRlbXMgOiBpdGVtcy5zbGljZSgwLCAzKTtcbiAgY29uc3Qgb3ZlcmZsb3cgPSBpdGVtcy5sZW5ndGggPCA1ID8gMCA6IGl0ZW1zLmxlbmd0aCAtIDM7XG4gIGNvbnN0IHtcbiAgICBjb2xvcnNcbiAgfSA9IGNvcmUudXNlVGhlbWUoKTtcbiAgY29uc3Qgc3R5bGVzID0ge1xuICAgIGNvbG9yOiBjb2xvcnMuZm9yZWdyb3VuZCxcbiAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgICc6aG92ZXInOiB7XG4gICAgICB0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZSdcbiAgICB9XG4gIH07XG4gIHJldHVybiBjb3JlLmpzeChjb21wb25lbnRzLkNlbGxDb250YWluZXIsIG51bGwsIGRpc3BsYXlJdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiBjb3JlLmpzeChSZWFjdC5GcmFnbWVudCwge1xuICAgIGtleTogaXRlbS5pZFxuICB9LCAhIWluZGV4ID8gJywgJyA6ICcnLCBjb3JlLmpzeChyb3V0ZXIuTGluaywge1xuICAgIGhyZWY6IGAvJHtsaXN0LnBhdGh9L1tpZF1gLFxuICAgIGFzOiBgLyR7bGlzdC5wYXRofS8ke2l0ZW0uaWR9YCxcbiAgICBjc3M6IHN0eWxlc1xuICB9LCBpdGVtLmxhYmVsIHx8IGl0ZW0uaWQpKSksIG92ZXJmbG93ID8gYCwgYW5kICR7b3ZlcmZsb3d9IG1vcmVgIDogbnVsbCk7XG59O1xuY29uc3QgQ2FyZFZhbHVlID0gKHtcbiAgZmllbGQsXG4gIGl0ZW1cbn0pID0+IHtcbiAgY29uc3QgbGlzdCA9IGNvbnRleHQudXNlTGlzdChmaWVsZC5yZWZMaXN0S2V5KTtcbiAgY29uc3QgZGF0YSA9IGl0ZW1bZmllbGQucGF0aF07XG4gIHJldHVybiBjb3JlLmpzeChmaWVsZHMuRmllbGRDb250YWluZXIsIG51bGwsIGNvcmUuanN4KGZpZWxkcy5GaWVsZExhYmVsLCBudWxsLCBmaWVsZC5sYWJlbCksIChBcnJheS5pc0FycmF5KGRhdGEpID8gZGF0YSA6IFtkYXRhXSkuZmlsdGVyKGl0ZW0gPT4gaXRlbSkubWFwKChpdGVtLCBpbmRleCkgPT4gY29yZS5qc3goUmVhY3QuRnJhZ21lbnQsIHtcbiAgICBrZXk6IGl0ZW0uaWRcbiAgfSwgISFpbmRleCA/ICcsICcgOiAnJywgY29yZS5qc3gocm91dGVyLkxpbmssIHtcbiAgICBocmVmOiBgLyR7bGlzdC5wYXRofS9baWRdYCxcbiAgICBhczogYC8ke2xpc3QucGF0aH0vJHtpdGVtLmlkfWBcbiAgfSwgaXRlbS5sYWJlbCB8fCBpdGVtLmlkKSkpKTtcbn07XG5jb25zdCBjb250cm9sbGVyID0gY29uZmlnID0+IHtcbiAgcmV0dXJuIHtcbiAgICBtYW55OiBjb25maWcuZmllbGRNZXRhLm1hbnksXG4gICAgbGlzdEtleTogY29uZmlnLmxpc3RLZXksXG4gICAgcGF0aDogY29uZmlnLnBhdGgsXG4gICAgbGFiZWw6IGNvbmZpZy5sYWJlbCxcbiAgICBkaXNwbGF5OiBjb25maWcuZmllbGRNZXRhLmRpc3BsYXlNb2RlID09PSAnY2FyZHMnID8ge1xuICAgICAgbW9kZTogJ2NhcmRzJyxcbiAgICAgIGNhcmRGaWVsZHM6IGNvbmZpZy5maWVsZE1ldGEuY2FyZEZpZWxkcyxcbiAgICAgIGlubGluZUNyZWF0ZTogY29uZmlnLmZpZWxkTWV0YS5pbmxpbmVDcmVhdGUsXG4gICAgICBpbmxpbmVFZGl0OiBjb25maWcuZmllbGRNZXRhLmlubGluZUVkaXQsXG4gICAgICBsaW5rVG9JdGVtOiBjb25maWcuZmllbGRNZXRhLmxpbmtUb0l0ZW0sXG4gICAgICByZW1vdmVNb2RlOiBjb25maWcuZmllbGRNZXRhLnJlbW92ZU1vZGUsXG4gICAgICBpbmxpbmVDb25uZWN0OiBjb25maWcuZmllbGRNZXRhLmlubGluZUNvbm5lY3RcbiAgICB9IDoge1xuICAgICAgbW9kZTogJ3NlbGVjdCcsXG4gICAgICByZWZMYWJlbEZpZWxkOiBjb25maWcuZmllbGRNZXRhLnJlZkxhYmVsRmllbGRcbiAgICB9LFxuICAgIHJlZkxpc3RLZXk6IGNvbmZpZy5maWVsZE1ldGEucmVmTGlzdEtleSxcbiAgICBncmFwaHFsU2VsZWN0aW9uOiBjb25maWcuZmllbGRNZXRhLmRpc3BsYXlNb2RlID09PSAnY2FyZHMnID8gLy8gVE9ETzogbmFtZXNwYWNlIHRoaXMgc3R1ZmYgYXQgdGhlIEtleXN0b25lIGxldmVsXG4gICAgYCR7Y29uZmlnLnBhdGh9X19pZDogaWRcbiAgICAgICAgICAgJHtjb25maWcucGF0aH0ge1xuICAgICAgICAgICAgaWRcbiAgICAgICAgICAgfWAgOiBgJHtjb25maWcucGF0aH0ge1xuICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgbGFiZWw6ICR7Y29uZmlnLmZpZWxkTWV0YS5yZWZMYWJlbEZpZWxkfVxuICAgICAgICAgICB9YCxcbiAgICBoaWRlQ3JlYXRlOiBjb25maWcuZmllbGRNZXRhLmhpZGVDcmVhdGUsXG4gICAgZGVmYXVsdFZhbHVlOiBjb25maWcuZmllbGRNZXRhLm1hbnkgPyB7XG4gICAgICBraW5kOiAnbWFueScsXG4gICAgICBpbml0aWFsVmFsdWU6IFtdLFxuICAgICAgdmFsdWU6IFtdXG4gICAgfSA6IHtcbiAgICAgIGtpbmQ6ICdvbmUnLFxuICAgICAgdmFsdWU6IG51bGwsXG4gICAgICBpbml0aWFsVmFsdWU6IG51bGxcbiAgICB9LFxuICAgIGRlc2VyaWFsaXplOiBkYXRhID0+IHtcbiAgICAgIGlmIChjb25maWcuZmllbGRNZXRhLmRpc3BsYXlNb2RlID09PSAnY2FyZHMnKSB7XG4gICAgICAgIGNvbnN0IGluaXRpYWxJZHMgPSBuZXcgU2V0KChBcnJheS5pc0FycmF5KGRhdGFbY29uZmlnLnBhdGhdKSA/IGRhdGFbY29uZmlnLnBhdGhdIDogZGF0YVtjb25maWcucGF0aF0gPyBbZGF0YVtjb25maWcucGF0aF1dIDogW10pLm1hcCh4ID0+IHguaWQpKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBraW5kOiAnY2FyZHMtdmlldycsXG4gICAgICAgICAgaWQ6IGRhdGFbYCR7Y29uZmlnLnBhdGh9X19pZGBdLFxuICAgICAgICAgIGl0ZW1zQmVpbmdFZGl0ZWQ6IG5ldyBTZXQoKSxcbiAgICAgICAgICBpdGVtQmVpbmdDcmVhdGVkOiBmYWxzZSxcbiAgICAgICAgICBpbml0aWFsSWRzLFxuICAgICAgICAgIGN1cnJlbnRJZHM6IGluaXRpYWxJZHNcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbmZpZy5maWVsZE1ldGEubWFueSkge1xuICAgICAgICBsZXQgdmFsdWUgPSAoZGF0YVtjb25maWcucGF0aF0gfHwgW10pLm1hcCh4ID0+ICh7XG4gICAgICAgICAgaWQ6IHguaWQsXG4gICAgICAgICAgbGFiZWw6IHgubGFiZWwgfHwgeC5pZFxuICAgICAgICB9KSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAga2luZDogJ21hbnknLFxuICAgICAgICAgIGluaXRpYWxWYWx1ZTogdmFsdWUsXG4gICAgICAgICAgdmFsdWVcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgbGV0IHZhbHVlID0gZGF0YVtjb25maWcucGF0aF07XG5cbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICB2YWx1ZSA9IHtcbiAgICAgICAgICBpZDogdmFsdWUuaWQsXG4gICAgICAgICAgbGFiZWw6IHZhbHVlLmxhYmVsIHx8IHZhbHVlLmlkXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGtpbmQ6ICdvbmUnLFxuICAgICAgICB2YWx1ZSxcbiAgICAgICAgaW5pdGlhbFZhbHVlOiB2YWx1ZVxuICAgICAgfTtcbiAgICB9LFxuXG4gICAgdmFsaWRhdGUodmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZS5raW5kICE9PSAnY2FyZHMtdmlldycgfHwgdmFsdWUuaXRlbXNCZWluZ0VkaXRlZC5zaXplID09PSAwICYmICF2YWx1ZS5pdGVtQmVpbmdDcmVhdGVkO1xuICAgIH0sXG5cbiAgICBzZXJpYWxpemU6IHN0YXRlID0+IHtcbiAgICAgIGlmIChzdGF0ZS5raW5kID09PSAnbWFueScpIHtcbiAgICAgICAgY29uc3QgbmV3QWxsSWRzID0gbmV3IFNldChzdGF0ZS52YWx1ZS5tYXAoeCA9PiB4LmlkKSk7XG4gICAgICAgIGNvbnN0IGluaXRpYWxJZHMgPSBuZXcgU2V0KHN0YXRlLmluaXRpYWxWYWx1ZS5tYXAoeCA9PiB4LmlkKSk7XG4gICAgICAgIGxldCBkaXNjb25uZWN0ID0gc3RhdGUuaW5pdGlhbFZhbHVlLmZpbHRlcih4ID0+ICFuZXdBbGxJZHMuaGFzKHguaWQpKS5tYXAoeCA9PiAoe1xuICAgICAgICAgIGlkOiB4LmlkXG4gICAgICAgIH0pKTtcbiAgICAgICAgbGV0IGNvbm5lY3QgPSBzdGF0ZS52YWx1ZS5maWx0ZXIoeCA9PiAhaW5pdGlhbElkcy5oYXMoeC5pZCkpLm1hcCh4ID0+ICh7XG4gICAgICAgICAgaWQ6IHguaWRcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIGlmIChkaXNjb25uZWN0Lmxlbmd0aCB8fCBjb25uZWN0Lmxlbmd0aCkge1xuICAgICAgICAgIGxldCBvdXRwdXQgPSB7fTtcblxuICAgICAgICAgIGlmIChkaXNjb25uZWN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgb3V0cHV0LmRpc2Nvbm5lY3QgPSBkaXNjb25uZWN0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChjb25uZWN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgb3V0cHV0LmNvbm5lY3QgPSBjb25uZWN0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBbY29uZmlnLnBhdGhdOiBvdXRwdXRcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHN0YXRlLmtpbmQgPT09ICdvbmUnKSB7XG4gICAgICAgIHZhciBfc3RhdGUkaW5pdGlhbFZhbHVlO1xuXG4gICAgICAgIGlmIChzdGF0ZS5pbml0aWFsVmFsdWUgJiYgIXN0YXRlLnZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFtjb25maWcucGF0aF06IHtcbiAgICAgICAgICAgICAgZGlzY29ubmVjdDoge1xuICAgICAgICAgICAgICAgIGlkOiBzdGF0ZS5pbml0aWFsVmFsdWUuaWRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAoc3RhdGUudmFsdWUgJiYgc3RhdGUudmFsdWUuaWQgIT09ICgoX3N0YXRlJGluaXRpYWxWYWx1ZSA9IHN0YXRlLmluaXRpYWxWYWx1ZSkgPT09IG51bGwgfHwgX3N0YXRlJGluaXRpYWxWYWx1ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3N0YXRlJGluaXRpYWxWYWx1ZS5pZCkpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgW2NvbmZpZy5wYXRoXToge1xuICAgICAgICAgICAgICBjb25uZWN0OiB7XG4gICAgICAgICAgICAgICAgaWQ6IHN0YXRlLnZhbHVlLmlkXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHN0YXRlLmtpbmQgPT09ICdjYXJkcy12aWV3Jykge1xuICAgICAgICBsZXQgZGlzY29ubmVjdCA9IFsuLi5zdGF0ZS5pbml0aWFsSWRzXS5maWx0ZXIoaWQgPT4gIXN0YXRlLmN1cnJlbnRJZHMuaGFzKGlkKSkubWFwKGlkID0+ICh7XG4gICAgICAgICAgaWRcbiAgICAgICAgfSkpO1xuICAgICAgICBsZXQgY29ubmVjdCA9IFsuLi5zdGF0ZS5jdXJyZW50SWRzXS5maWx0ZXIoaWQgPT4gIXN0YXRlLmluaXRpYWxJZHMuaGFzKGlkKSkubWFwKGlkID0+ICh7XG4gICAgICAgICAgaWRcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIGlmIChjb25maWcuZmllbGRNZXRhLm1hbnkpIHtcbiAgICAgICAgICBpZiAoZGlzY29ubmVjdC5sZW5ndGggfHwgY29ubmVjdC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIFtjb25maWcucGF0aF06IHtcbiAgICAgICAgICAgICAgICBjb25uZWN0OiBjb25uZWN0Lmxlbmd0aCA/IGNvbm5lY3QgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgZGlzY29ubmVjdDogZGlzY29ubmVjdC5sZW5ndGggPyBkaXNjb25uZWN0IDogdW5kZWZpbmVkXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGNvbm5lY3QubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFtjb25maWcucGF0aF06IHtcbiAgICAgICAgICAgICAgY29ubmVjdDogY29ubmVjdFswXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAoZGlzY29ubmVjdC5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgW2NvbmZpZy5wYXRoXToge1xuICAgICAgICAgICAgICBkaXNjb25uZWN0OiBkaXNjb25uZWN0WzBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4ge307XG4gICAgfVxuICB9O1xufTtcblxuZXhwb3J0cy5DYXJkVmFsdWUgPSBDYXJkVmFsdWU7XG5leHBvcnRzLkNlbGwgPSBDZWxsO1xuZXhwb3J0cy5GaWVsZCA9IEZpZWxkO1xuZXhwb3J0cy5jb250cm9sbGVyID0gY29udHJvbGxlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2ZpZWxkcy5janMucHJvZC5qc1wiKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vZmllbGRzLmNqcy5kZXYuanNcIik7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBjb21wb25lbnRzID0gcmVxdWlyZSgnQGtleXN0b25lLW5leHQvYWRtaW4tdWkvY29tcG9uZW50cycpO1xudmFyIGNvcmUgPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvY29yZScpO1xudmFyIGZpZWxkcyA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9maWVsZHMnKTtcbnZhciBzZWdtZW50ZWRDb250cm9sID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL3NlZ21lbnRlZC1jb250cm9sJyk7XG5cbi8qIEBqc3gganN4ICovXG5jb25zdCBGaWVsZCA9ICh7XG4gIGZpZWxkLFxuICB2YWx1ZSxcbiAgb25DaGFuZ2UsXG4gIGF1dG9Gb2N1c1xufSkgPT4gY29yZS5qc3goZmllbGRzLkZpZWxkQ29udGFpbmVyLCBudWxsLCBjb3JlLmpzeChmaWVsZHMuRmllbGRMYWJlbCwgbnVsbCwgZmllbGQubGFiZWwpLCBmaWVsZC5kaXNwbGF5TW9kZSA9PT0gJ3NlbGVjdCcgPyBjb3JlLmpzeChmaWVsZHMuU2VsZWN0LCB7XG4gIGlzQ2xlYXJhYmxlOiB0cnVlLFxuICBhdXRvRm9jdXM6IGF1dG9Gb2N1cyxcbiAgb3B0aW9uczogZmllbGQub3B0aW9ucyxcbiAgaXNEaXNhYmxlZDogb25DaGFuZ2UgPT09IHVuZGVmaW5lZCxcbiAgb25DaGFuZ2U6IHZhbHVlID0+IHtcbiAgICBvbkNoYW5nZSA9PT0gbnVsbCB8fCBvbkNoYW5nZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogb25DaGFuZ2UodmFsdWUpO1xuICB9LFxuICB2YWx1ZTogdmFsdWUsXG4gIHBvcnRhbE1lbnU6IHRydWVcbn0pIDogY29yZS5qc3goc2VnbWVudGVkQ29udHJvbC5TZWdtZW50ZWRDb250cm9sLCB7XG4gIHNlZ21lbnRzOiBmaWVsZC5vcHRpb25zLm1hcCh4ID0+IHgubGFiZWwpLFxuICBzZWxlY3RlZEluZGV4OiB2YWx1ZSA/IGZpZWxkLm9wdGlvbnMuZmluZEluZGV4KHggPT4geC52YWx1ZSA9PT0gdmFsdWUudmFsdWUpIDogdW5kZWZpbmVkLFxuICBvbkNoYW5nZTogaW5kZXggPT4ge1xuICAgIG9uQ2hhbmdlID09PSBudWxsIHx8IG9uQ2hhbmdlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvbkNoYW5nZShmaWVsZC5vcHRpb25zW2luZGV4XSk7XG4gIH1cbn0pKTtcbmNvbnN0IENlbGwgPSAoe1xuICBpdGVtLFxuICBmaWVsZCxcbiAgbGlua1RvXG59KSA9PiB7XG4gIHZhciBfZmllbGQkb3B0aW9ucyRmaW5kO1xuXG4gIGxldCB2YWx1ZSA9IGl0ZW1bZmllbGQucGF0aF0gKyAnJztcbiAgY29uc3QgbGFiZWwgPSAoX2ZpZWxkJG9wdGlvbnMkZmluZCA9IGZpZWxkLm9wdGlvbnMuZmluZCh4ID0+IHgudmFsdWUgPT09IHZhbHVlKSkgPT09IG51bGwgfHwgX2ZpZWxkJG9wdGlvbnMkZmluZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2ZpZWxkJG9wdGlvbnMkZmluZC5sYWJlbDtcbiAgcmV0dXJuIGxpbmtUbyA/IGNvcmUuanN4KGNvbXBvbmVudHMuQ2VsbExpbmssIGxpbmtUbywgbGFiZWwpIDogY29yZS5qc3goY29tcG9uZW50cy5DZWxsQ29udGFpbmVyLCBudWxsLCBsYWJlbCk7XG59O1xuQ2VsbC5zdXBwb3J0c0xpbmtUbyA9IHRydWU7XG5jb25zdCBDYXJkVmFsdWUgPSAoe1xuICBpdGVtLFxuICBmaWVsZFxufSkgPT4ge1xuICB2YXIgX2ZpZWxkJG9wdGlvbnMkZmluZDI7XG5cbiAgY29uc3QgbGFiZWwgPSAoX2ZpZWxkJG9wdGlvbnMkZmluZDIgPSBmaWVsZC5vcHRpb25zLmZpbmQoeCA9PiB4LnZhbHVlID09PSBpdGVtW2ZpZWxkLnBhdGhdKSkgPT09IG51bGwgfHwgX2ZpZWxkJG9wdGlvbnMkZmluZDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9maWVsZCRvcHRpb25zJGZpbmQyLmxhYmVsO1xuICByZXR1cm4gY29yZS5qc3goZmllbGRzLkZpZWxkQ29udGFpbmVyLCBudWxsLCBjb3JlLmpzeChmaWVsZHMuRmllbGRMYWJlbCwgbnVsbCwgZmllbGQubGFiZWwpLCBsYWJlbCk7XG59O1xuY29uc3QgY29udHJvbGxlciA9IGNvbmZpZyA9PiB7XG4gIGNvbnN0IG9wdGlvbnNXaXRoU3RyaW5nVmFsdWVzID0gY29uZmlnLmZpZWxkTWV0YS5vcHRpb25zLm1hcCh4ID0+ICh7XG4gICAgbGFiZWw6IHgubGFiZWwsXG4gICAgdmFsdWU6IHgudmFsdWUudG9TdHJpbmcoKVxuICB9KSk7XG4gIHJldHVybiB7XG4gICAgcGF0aDogY29uZmlnLnBhdGgsXG4gICAgbGFiZWw6IGNvbmZpZy5sYWJlbCxcbiAgICBncmFwaHFsU2VsZWN0aW9uOiBjb25maWcucGF0aCxcbiAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgZGF0YVR5cGU6IGNvbmZpZy5maWVsZE1ldGEuZGF0YVR5cGUsXG4gICAgZGlzcGxheU1vZGU6IGNvbmZpZy5maWVsZE1ldGEuZGlzcGxheU1vZGUsXG4gICAgb3B0aW9uczogb3B0aW9uc1dpdGhTdHJpbmdWYWx1ZXMsXG4gICAgZGVzZXJpYWxpemU6IGRhdGEgPT4ge1xuICAgICAgZm9yIChjb25zdCBvcHRpb24gb2YgY29uZmlnLmZpZWxkTWV0YS5vcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRpb24udmFsdWUgPT09IGRhdGFbY29uZmlnLnBhdGhdKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxhYmVsOiBvcHRpb24ubGFiZWwsXG4gICAgICAgICAgICB2YWx1ZTogb3B0aW9uLnZhbHVlLnRvU3RyaW5nKClcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0sXG4gICAgc2VyaWFsaXplOiB2YWx1ZSA9PiB7XG4gICAgICB2YXIgX3ZhbHVlJHZhbHVlO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBbY29uZmlnLnBhdGhdOiAoX3ZhbHVlJHZhbHVlID0gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHZhbHVlLnZhbHVlKSAhPT0gbnVsbCAmJiBfdmFsdWUkdmFsdWUgIT09IHZvaWQgMCA/IF92YWx1ZSR2YWx1ZSA6IG51bGxcbiAgICAgIH07XG4gICAgfSxcbiAgICBmaWx0ZXI6IHtcbiAgICAgIEZpbHRlcihwcm9wcykge1xuICAgICAgICByZXR1cm4gY29yZS5qc3goZmllbGRzLk11bHRpU2VsZWN0LCB7XG4gICAgICAgICAgb25DaGFuZ2U6IHByb3BzLm9uQ2hhbmdlLFxuICAgICAgICAgIG9wdGlvbnM6IG9wdGlvbnNXaXRoU3RyaW5nVmFsdWVzLFxuICAgICAgICAgIHZhbHVlOiBwcm9wcy52YWx1ZSxcbiAgICAgICAgICBhdXRvRm9jdXM6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9LFxuXG4gICAgICBncmFwaHFsOiAoe1xuICAgICAgICB0eXBlLFxuICAgICAgICB2YWx1ZTogb3B0aW9uc1xuICAgICAgfSkgPT4ge1xuICAgICAgICBjb25zdCBpbnZlcnRlZCA9IHR5cGUgPT09ICdub3RfbWF0Y2hlcyc7XG5cbiAgICAgICAgaWYgKCFvcHRpb25zLmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBbYCR7Y29uZmlnLnBhdGh9JHtpbnZlcnRlZCA/ICdfbm90JyA6ICcnfWBdOiBudWxsXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGlzTXVsdGkgPSBvcHRpb25zLmxlbmd0aCA+IDE7XG4gICAgICAgIGxldCBrZXkgPSBjb25maWcucGF0aDtcblxuICAgICAgICBpZiAoaXNNdWx0aSAmJiBpbnZlcnRlZCkge1xuICAgICAgICAgIGtleSA9IGAke2NvbmZpZy5wYXRofV9ub3RfaW5gO1xuICAgICAgICB9IGVsc2UgaWYgKGlzTXVsdGkpIHtcbiAgICAgICAgICBrZXkgPSBgJHtjb25maWcucGF0aH1faW5gO1xuICAgICAgICB9IGVsc2UgaWYgKGludmVydGVkKSB7XG4gICAgICAgICAga2V5ID0gYCR7Y29uZmlnLnBhdGh9X25vdGA7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB2YWx1ZSA9IGlzTXVsdGkgPyBvcHRpb25zLm1hcCh4ID0+IHgudmFsdWUpIDogb3B0aW9uc1swXS52YWx1ZTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBba2V5XTogdmFsdWVcbiAgICAgICAgfTtcbiAgICAgIH0sXG5cbiAgICAgIExhYmVsKHtcbiAgICAgICAgdHlwZSxcbiAgICAgICAgdmFsdWVcbiAgICAgIH0pIHtcbiAgICAgICAgaWYgKCF2YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4gdHlwZSA9PT0gJ25vdF9tYXRjaGVzJyA/IGBpcyBzZXRgIDogYGhhcyBubyB2YWx1ZWA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWUubGVuZ3RoID4gMSkge1xuICAgICAgICAgIGNvbnN0IHZhbHVlcyA9IHZhbHVlLm1hcChpID0+IGkubGFiZWwpLmpvaW4oJywgJyk7XG4gICAgICAgICAgcmV0dXJuIHR5cGUgPT09ICdub3RfbWF0Y2hlcycgPyBgaXMgbm90IGluIFske3ZhbHVlc31dYCA6IGBpcyBpbiBbJHt2YWx1ZXN9XWA7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvcHRpb25MYWJlbCA9IHZhbHVlWzBdLmxhYmVsO1xuICAgICAgICByZXR1cm4gdHlwZSA9PT0gJ25vdF9tYXRjaGVzJyA/IGBpcyBub3QgJHtvcHRpb25MYWJlbH1gIDogYGlzICR7b3B0aW9uTGFiZWx9YDtcbiAgICAgIH0sXG5cbiAgICAgIHR5cGVzOiB7XG4gICAgICAgIG1hdGNoZXM6IHtcbiAgICAgICAgICBsYWJlbDogJ01hdGNoZXMnLFxuICAgICAgICAgIGluaXRpYWxWYWx1ZTogW11cbiAgICAgICAgfSxcbiAgICAgICAgbm90X21hdGNoZXM6IHtcbiAgICAgICAgICBsYWJlbDogJ0RvZXMgbm90IG1hdGNoJyxcbiAgICAgICAgICBpbml0aWFsVmFsdWU6IFtdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG59O1xuXG5leHBvcnRzLkNhcmRWYWx1ZSA9IENhcmRWYWx1ZTtcbmV4cG9ydHMuQ2VsbCA9IENlbGw7XG5leHBvcnRzLkZpZWxkID0gRmllbGQ7XG5leHBvcnRzLmNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vZmllbGRzLmNqcy5wcm9kLmpzXCIpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9maWVsZHMuY2pzLmRldi5qc1wiKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGNvbXBvbmVudHMgPSByZXF1aXJlKCdAa2V5c3RvbmUtbmV4dC9hZG1pbi11aS9jb21wb25lbnRzJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9jb3JlJyk7XG52YXIgZmllbGRzID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL2ZpZWxkcycpO1xuXG4vKiBAanN4IGpzeCAqL1xuY29uc3QgRmllbGQgPSAoe1xuICBmaWVsZCxcbiAgdmFsdWUsXG4gIG9uQ2hhbmdlLFxuICBhdXRvRm9jdXNcbn0pID0+IGNvcmUuanN4KGZpZWxkcy5GaWVsZENvbnRhaW5lciwgbnVsbCwgY29yZS5qc3goZmllbGRzLkZpZWxkTGFiZWwsIG51bGwsIGZpZWxkLmxhYmVsKSwgb25DaGFuZ2UgPyBmaWVsZC5kaXNwbGF5TW9kZSA9PT0gJ3RleHRhcmVhJyA/IGNvcmUuanN4KGZpZWxkcy5UZXh0QXJlYSwge1xuICBhdXRvRm9jdXM6IGF1dG9Gb2N1cyxcbiAgb25DaGFuZ2U6IGV2ZW50ID0+IG9uQ2hhbmdlKGV2ZW50LnRhcmdldC52YWx1ZSksXG4gIHZhbHVlOiB2YWx1ZVxufSkgOiBjb3JlLmpzeChmaWVsZHMuVGV4dElucHV0LCB7XG4gIGF1dG9Gb2N1czogYXV0b0ZvY3VzLFxuICBvbkNoYW5nZTogZXZlbnQgPT4gb25DaGFuZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKSxcbiAgdmFsdWU6IHZhbHVlXG59KSA6IHZhbHVlKTtcbmNvbnN0IENlbGwgPSAoe1xuICBpdGVtLFxuICBmaWVsZCxcbiAgbGlua1RvXG59KSA9PiB7XG4gIGxldCB2YWx1ZSA9IGl0ZW1bZmllbGQucGF0aF0gKyAnJztcbiAgcmV0dXJuIGxpbmtUbyA/IGNvcmUuanN4KGNvbXBvbmVudHMuQ2VsbExpbmssIGxpbmtUbywgdmFsdWUpIDogY29yZS5qc3goY29tcG9uZW50cy5DZWxsQ29udGFpbmVyLCBudWxsLCB2YWx1ZSk7XG59O1xuQ2VsbC5zdXBwb3J0c0xpbmtUbyA9IHRydWU7XG5jb25zdCBDYXJkVmFsdWUgPSAoe1xuICBpdGVtLFxuICBmaWVsZFxufSkgPT4ge1xuICByZXR1cm4gY29yZS5qc3goZmllbGRzLkZpZWxkQ29udGFpbmVyLCBudWxsLCBjb3JlLmpzeChmaWVsZHMuRmllbGRMYWJlbCwgbnVsbCwgZmllbGQubGFiZWwpLCBpdGVtW2ZpZWxkLnBhdGhdKTtcbn07XG5jb25zdCBjb250cm9sbGVyID0gY29uZmlnID0+IHtcbiAgcmV0dXJuIHtcbiAgICBwYXRoOiBjb25maWcucGF0aCxcbiAgICBsYWJlbDogY29uZmlnLmxhYmVsLFxuICAgIGdyYXBocWxTZWxlY3Rpb246IGNvbmZpZy5wYXRoLFxuICAgIGRlZmF1bHRWYWx1ZTogJycsXG4gICAgZGlzcGxheU1vZGU6IGNvbmZpZy5maWVsZE1ldGEuZGlzcGxheU1vZGUsXG4gICAgZGVzZXJpYWxpemU6IGRhdGEgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBkYXRhW2NvbmZpZy5wYXRoXTtcbiAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gdmFsdWUgOiAnJztcbiAgICB9LFxuICAgIHNlcmlhbGl6ZTogdmFsdWUgPT4gKHtcbiAgICAgIFtjb25maWcucGF0aF06IHZhbHVlXG4gICAgfSksXG4gICAgZmlsdGVyOiB7XG4gICAgICBGaWx0ZXIocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIGNvcmUuanN4KGZpZWxkcy5UZXh0SW5wdXQsIHtcbiAgICAgICAgICBvbkNoYW5nZTogZXZlbnQgPT4ge1xuICAgICAgICAgICAgcHJvcHMub25DaGFuZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHZhbHVlOiBwcm9wcy52YWx1ZSxcbiAgICAgICAgICBhdXRvRm9jdXM6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9LFxuXG4gICAgICBncmFwaHFsOiAoe1xuICAgICAgICB0eXBlLFxuICAgICAgICB2YWx1ZVxuICAgICAgfSkgPT4ge1xuICAgICAgICBjb25zdCBrZXkgPSB0eXBlID09PSAnaXNfaScgPyBgJHtjb25maWcucGF0aH1faWAgOiBgJHtjb25maWcucGF0aH1fJHt0eXBlfWA7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgW2tleV06IHZhbHVlXG4gICAgICAgIH07XG4gICAgICB9LFxuXG4gICAgICBMYWJlbCh7XG4gICAgICAgIGxhYmVsLFxuICAgICAgICB2YWx1ZVxuICAgICAgfSkge1xuICAgICAgICByZXR1cm4gYCR7bGFiZWwudG9Mb3dlckNhc2UoKX06IFwiJHt2YWx1ZX1cImA7XG4gICAgICB9LFxuXG4gICAgICB0eXBlczoge1xuICAgICAgICBjb250YWluc19pOiB7XG4gICAgICAgICAgbGFiZWw6ICdDb250YWlucycsXG4gICAgICAgICAgaW5pdGlhbFZhbHVlOiAnJ1xuICAgICAgICB9LFxuICAgICAgICBub3RfY29udGFpbnNfaToge1xuICAgICAgICAgIGxhYmVsOiAnRG9lcyBub3QgY29udGFpbicsXG4gICAgICAgICAgaW5pdGlhbFZhbHVlOiAnJ1xuICAgICAgICB9LFxuICAgICAgICBpc19pOiB7XG4gICAgICAgICAgbGFiZWw6ICdJcyBleGFjdGx5JyxcbiAgICAgICAgICBpbml0aWFsVmFsdWU6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIG5vdF9pOiB7XG4gICAgICAgICAgbGFiZWw6ICdJcyBub3QgZXhhY3RseScsXG4gICAgICAgICAgaW5pdGlhbFZhbHVlOiAnJ1xuICAgICAgICB9LFxuICAgICAgICBzdGFydHNfd2l0aF9pOiB7XG4gICAgICAgICAgbGFiZWw6ICdTdGFydHMgd2l0aCcsXG4gICAgICAgICAgaW5pdGlhbFZhbHVlOiAnJ1xuICAgICAgICB9LFxuICAgICAgICBub3Rfc3RhcnRzX3dpdGhfaToge1xuICAgICAgICAgIGxhYmVsOiAnRG9lcyBub3Qgc3RhcnQgd2l0aCcsXG4gICAgICAgICAgaW5pdGlhbFZhbHVlOiAnJ1xuICAgICAgICB9LFxuICAgICAgICBlbmRzX3dpdGhfaToge1xuICAgICAgICAgIGxhYmVsOiAnRW5kcyB3aXRoJyxcbiAgICAgICAgICBpbml0aWFsVmFsdWU6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIG5vdF9lbmRzX3dpdGhfaToge1xuICAgICAgICAgIGxhYmVsOiAnRG9lcyBub3QgZW5kIHdpdGgnLFxuICAgICAgICAgIGluaXRpYWxWYWx1ZTogJydcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG5cbmV4cG9ydHMuQ2FyZFZhbHVlID0gQ2FyZFZhbHVlO1xuZXhwb3J0cy5DZWxsID0gQ2VsbDtcbmV4cG9ydHMuRmllbGQgPSBGaWVsZDtcbmV4cG9ydHMuY29udHJvbGxlciA9IGNvbnRyb2xsZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9maWVsZHMuY2pzLnByb2QuanNcIik7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2ZpZWxkcy5janMuZGV2LmpzXCIpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgX29iamVjdFNwcmVhZCA9IHJlcXVpcmUoJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0U3ByZWFkMicpO1xudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBkYXRlRm5zID0gcmVxdWlyZSgnZGF0ZS1mbnMnKTtcbnZhciBjb21wb25lbnRzID0gcmVxdWlyZSgnQGtleXN0b25lLW5leHQvYWRtaW4tdWkvY29tcG9uZW50cycpO1xudmFyIGNvcmUgPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvY29yZScpO1xudmFyIGZpZWxkcyA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9maWVsZHMnKTtcblxuY29uc3QgZ2V0VGltZSA9IHRpbWVWYWx1ZSA9PiB7XG4gIGlmICghdGltZVZhbHVlKSByZXR1cm4gWzAsIDBdO1xuICByZXR1cm4gdGltZVZhbHVlLnNwbGl0KCc6JykubWFwKG4gPT4gTnVtYmVyKG4pKTtcbn07XG5cbmZ1bmN0aW9uIGlzVmFsaWREYXRlKGRhdGUpIHtcbiAgaWYgKCFkYXRlKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBCb29sZWFuKGRhdGVGbnMucGFyc2VJU08oZGF0ZSkudG9JU09TdHJpbmcoKSk7XG59XG5mdW5jdGlvbiBpc1ZhbGlkVGltZSh0aW1lKSB7XG4gIGlmICghdGltZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBkYXRlRm5zLmlzVmFsaWQoZGF0ZUZucy5wYXJzZSh0aW1lLCAnSEg6bW0nLCBuZXcgRGF0ZSgpKSk7XG59XG5mdW5jdGlvbiBpc1ZhbGlkSVNPKHZhbHVlKSB7XG4gIHRyeSB7XG4gICAgLy8gdG9JU09TdHJpbmcgY29udmVydHMgb3VyIHN0cmluZyBpbnRvIHp1bHUgdGltZVxuICAgIC8vIGluc3RlYWQgb2YgY2hlY2tpbmcgZm9yIHRoZSB0aW1lc3RhbXAgdG8gYmUgc3BlY2lmaWNhbGx5IGluIHp1bHUgdGltZVxuICAgIC8vIHdlIHJlbGF4IHRoZSB2YWxpZGF0aW9uIGhlcmUgYSBsaXR0bGUsIHRvIGp1c3QgYmUgYSB2YWxpZCBJU08gc3RyaW5nLlxuICAgIHJldHVybiBCb29sZWFuKGRhdGVGbnMucGFyc2VJU08oY29uc3RydWN0VGltZXN0YW1wKHZhbHVlKSkudG9JU09TdHJpbmcoKSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuZnVuY3Rpb24gY29uc3RydWN0VGltZXN0YW1wKHtcbiAgZGF0ZVZhbHVlLFxuICB0aW1lVmFsdWVcbn0pIHtcbiAgbGV0IGZvcm1hdHRlZERhdGUgPSBuZXcgRGF0ZShkYXRlVmFsdWUpO1xuICBjb25zdCBbaG91cnMsIG1pbnV0ZXNdID0gZ2V0VGltZSh0aW1lVmFsdWUpO1xuICBmb3JtYXR0ZWREYXRlLnNldEhvdXJzKGhvdXJzKTtcbiAgZm9ybWF0dGVkRGF0ZS5zZXRNaW51dGVzKG1pbnV0ZXMpO1xuICByZXR1cm4gZGF0ZUZucy5mb3JtYXRJU08oZm9ybWF0dGVkRGF0ZSk7XG59XG5mdW5jdGlvbiBkZWNvbnN0cnVjdFRpbWVzdGFtcCh2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGRhdGVWYWx1ZTogdmFsdWUsXG4gICAgdGltZVZhbHVlOiByZXNvbHZlSW5pdGlhbFRpbWVWYWx1ZSh2YWx1ZSlcbiAgfTtcbn1cbmZ1bmN0aW9uIGZvcm1hdE91dHB1dCh2YWx1ZSkge1xuICBpZiAoIXZhbHVlKSByZXR1cm4gJyc7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh2YWx1ZSk7XG4gIHJldHVybiBgJHtkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygpfSAke2RhdGUudG9Mb2NhbGVUaW1lU3RyaW5nKCl9YDtcbn1cbmZ1bmN0aW9uIHJlc29sdmVJbml0aWFsVGltZVZhbHVlKHZhbHVlLCBkZWZhdWx0VmFsdWUpIHtcbiAgY29uc3QgZGF0ZSA9IHZhbHVlIHx8IGRlZmF1bHRWYWx1ZTtcbiAgaWYgKCFkYXRlKSByZXR1cm4gJyc7XG4gIHJldHVybiBuZXcgRGF0ZShkYXRlKS50b0xvY2FsZVRpbWVTdHJpbmcoW10sIHtcbiAgICBob3VyOiAnMi1kaWdpdCcsXG4gICAgbWludXRlOiAnMi1kaWdpdCcsXG4gICAgaG91cjEyOiBmYWxzZVxuICB9KTtcbn1cblxuY29uc3QgVGltZVBpY2tlciA9ICh7XG4gIGF1dG9Gb2N1cyxcbiAgb25CbHVyLFxuICBkaXNhYmxlZCxcbiAgb25DaGFuZ2UsXG4gIGZvcm1hdCA9ICcyNGhyJyxcbiAgdmFsdWVcbn0pID0+IHtcbiAgcmV0dXJuIGNvcmUuanN4KGZpZWxkcy5UZXh0SW5wdXQsIHtcbiAgICBhdXRvRm9jdXM6IGF1dG9Gb2N1cyxcbiAgICBtYXhMZW5ndGg6IGZvcm1hdCA9PT0gJzI0aHInID8gNSA6IDcsXG4gICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgIG9uQ2hhbmdlOiBvbkNoYW5nZSxcbiAgICBvbkJsdXI6IG9uQmx1cixcbiAgICBwbGFjZWhvbGRlcjogZm9ybWF0ID09PSAnMjRocicgPyAnMDA6MDAnIDogJzAwOjAwYW0nLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9KTtcbn07XG5cbmNvbnN0IEZpZWxkID0gKHtcbiAgZmllbGQsXG4gIHZhbHVlLFxuICBvbkNoYW5nZSxcbiAgZm9yY2VWYWxpZGF0aW9uXG59KSA9PiB7XG4gIGNvbnN0IFt0b3VjaGVkRmlyc3RJbnB1dCwgc2V0VG91Y2hlZEZpcnN0SW5wdXRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdG91Y2hlZFNlY29uZElucHV0LCBzZXRUb3VjaGVkU2Vjb25kSW5wdXRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBzaG93VmFsaWRhdGlvbiA9IHRvdWNoZWRGaXJzdElucHV0ICYmIHRvdWNoZWRTZWNvbmRJbnB1dCB8fCBmb3JjZVZhbGlkYXRpb247XG5cbiAgY29uc3Qgc2hvd0RhdGVFcnJvciA9IGRhdGVWYWx1ZSA9PiB7XG4gICAgaWYgKCFkYXRlVmFsdWUpIHtcbiAgICAgIHJldHVybiBjb3JlLmpzeChcImRpdlwiLCB7XG4gICAgICAgIGNzczoge1xuICAgICAgICAgIGNvbG9yOiAncmVkJ1xuICAgICAgICB9XG4gICAgICB9LCBcIlBsZWFzZSBzZWxlY3QgYSBkYXRlIHZhbHVlLlwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gIWlzVmFsaWREYXRlKGRhdGVWYWx1ZSkgJiYgY29yZS5qc3goXCJkaXZcIiwge1xuICAgICAgY3NzOiB7XG4gICAgICAgIGNvbG9yOiAncmVkJ1xuICAgICAgfVxuICAgIH0sIFwiSW5jb3JyZWN0IGRhdGUgdmFsdWVcIik7XG4gIH07XG5cbiAgY29uc3Qgc2hvd1RpbWVFcnJvciA9IHRpbWVWYWx1ZSA9PiB7XG4gICAgaWYgKCF0aW1lVmFsdWUpIHtcbiAgICAgIHJldHVybiBjb3JlLmpzeChcImRpdlwiLCB7XG4gICAgICAgIGNzczoge1xuICAgICAgICAgIGNvbG9yOiAncmVkJ1xuICAgICAgICB9XG4gICAgICB9LCBcIlBsZWFzZSBzZWxlY3QgYSB0aW1lIHZhbHVlLlwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gIWlzVmFsaWRUaW1lKHRpbWVWYWx1ZSkgJiYgY29yZS5qc3goXCJkaXZcIiwge1xuICAgICAgY3NzOiB7XG4gICAgICAgIGNvbG9yOiAncmVkJ1xuICAgICAgfVxuICAgIH0sIFwiVGltZSBtdXN0IGJlIGluIHRoZSBmb3JtIEhIOm1tXCIpO1xuICB9O1xuXG4gIHJldHVybiBjb3JlLmpzeChmaWVsZHMuRmllbGRDb250YWluZXIsIG51bGwsIGNvcmUuanN4KGZpZWxkcy5GaWVsZExhYmVsLCBudWxsLCBmaWVsZC5sYWJlbCksIG9uQ2hhbmdlID8gY29yZS5qc3goY29yZS5TdGFjaywgbnVsbCwgY29yZS5qc3goY29yZS5JbmxpbmUsIHtcbiAgICBnYXA6IFwic21hbGxcIlxuICB9LCBjb3JlLmpzeChjb3JlLlN0YWNrLCBudWxsLCBjb3JlLmpzeChmaWVsZHMuRGF0ZVBpY2tlciwge1xuICAgIG9uVXBkYXRlOiBkYXRlID0+IHtcbiAgICAgIG9uQ2hhbmdlKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgdmFsdWUpLCB7fSwge1xuICAgICAgICBkYXRlVmFsdWU6IGRhdGUgfHwgJydcbiAgICAgIH0pKTtcbiAgICB9LFxuICAgIG9uQ2xlYXI6ICgpID0+IHtcbiAgICAgIG9uQ2hhbmdlKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgdmFsdWUpLCB7fSwge1xuICAgICAgICBkYXRlVmFsdWU6ICcnXG4gICAgICB9KSk7XG4gICAgfSxcbiAgICBvbkJsdXI6ICgpID0+IHNldFRvdWNoZWRGaXJzdElucHV0KHRydWUpLFxuICAgIHZhbHVlOiB2YWx1ZS5kYXRlVmFsdWVcbiAgfSksIHNob3dWYWxpZGF0aW9uICYmIHNob3dEYXRlRXJyb3IodmFsdWUuZGF0ZVZhbHVlKSksIGNvcmUuanN4KGNvcmUuU3RhY2ssIG51bGwsIGNvcmUuanN4KFRpbWVQaWNrZXIsIHtcbiAgICBvbkJsdXI6ICgpID0+IHNldFRvdWNoZWRTZWNvbmRJbnB1dCh0cnVlKSxcbiAgICBkaXNhYmxlZDogb25DaGFuZ2UgPT09IHVuZGVmaW5lZCxcbiAgICBmb3JtYXQ6IFwiMjRoclwiLFxuICAgIG9uQ2hhbmdlOiBldmVudCA9PiBvbkNoYW5nZShfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHZhbHVlKSwge30sIHtcbiAgICAgIHRpbWVWYWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgfSkpLFxuICAgIHZhbHVlOiB2YWx1ZS50aW1lVmFsdWUgfHwgJydcbiAgfSksIHNob3dWYWxpZGF0aW9uICYmIHNob3dUaW1lRXJyb3IodmFsdWUudGltZVZhbHVlKSkpKSA6IGlzVmFsaWRJU08odmFsdWUpID8gZm9ybWF0T3V0cHV0KGNvbnN0cnVjdFRpbWVzdGFtcCh2YWx1ZSkpIDogJycpO1xufTtcbmNvbnN0IENlbGwgPSAoe1xuICBpdGVtLFxuICBmaWVsZCxcbiAgbGlua1RvXG59KSA9PiB7XG4gIGxldCB2YWx1ZSA9IGl0ZW1bZmllbGQucGF0aF07XG4gIHJldHVybiBsaW5rVG8gPyBjb3JlLmpzeChjb21wb25lbnRzLkNlbGxMaW5rLCBsaW5rVG8sIGZvcm1hdE91dHB1dCh2YWx1ZSkpIDogY29yZS5qc3goY29tcG9uZW50cy5DZWxsQ29udGFpbmVyLCBudWxsLCBmb3JtYXRPdXRwdXQodmFsdWUpKTtcbn07XG5DZWxsLnN1cHBvcnRzTGlua1RvID0gdHJ1ZTtcbmNvbnN0IENhcmRWYWx1ZSA9ICh7XG4gIGl0ZW0sXG4gIGZpZWxkXG59KSA9PiB7XG4gIHJldHVybiBjb3JlLmpzeChmaWVsZHMuRmllbGRDb250YWluZXIsIG51bGwsIGNvcmUuanN4KGZpZWxkcy5GaWVsZExhYmVsLCBudWxsLCBmaWVsZC5sYWJlbCksIGl0ZW1bZmllbGQucGF0aF0pO1xufTtcbmNvbnN0IGNvbnRyb2xsZXIgPSBjb25maWcgPT4ge1xuICByZXR1cm4ge1xuICAgIHBhdGg6IGNvbmZpZy5wYXRoLFxuICAgIGxhYmVsOiBjb25maWcubGFiZWwsXG4gICAgZ3JhcGhxbFNlbGVjdGlvbjogY29uZmlnLnBhdGgsXG4gICAgZGVmYXVsdFZhbHVlOiB7XG4gICAgICBkYXRlVmFsdWU6ICcnLFxuICAgICAgdGltZVZhbHVlOiAnJ1xuICAgIH0sXG4gICAgZGVzZXJpYWxpemU6IGRhdGEgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBkYXRhW2NvbmZpZy5wYXRoXTtcblxuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBkZWNvbnN0cnVjdFRpbWVzdGFtcCh2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRhdGVWYWx1ZTogJycsXG4gICAgICAgIHRpbWVWYWx1ZTogJydcbiAgICAgIH07XG4gICAgfSxcbiAgICBzZXJpYWxpemU6ICh7XG4gICAgICBkYXRlVmFsdWUsXG4gICAgICB0aW1lVmFsdWVcbiAgICB9KSA9PiB7XG4gICAgICBpZiAoZGF0ZVZhbHVlICYmIHRpbWVWYWx1ZSAmJiBpc1ZhbGlkSVNPKHtcbiAgICAgICAgZGF0ZVZhbHVlLFxuICAgICAgICB0aW1lVmFsdWVcbiAgICAgIH0pKSB7XG4gICAgICAgIGxldCBmb3JtYXR0ZWREYXRlID0gY29uc3RydWN0VGltZXN0YW1wKHtcbiAgICAgICAgICBkYXRlVmFsdWUsXG4gICAgICAgICAgdGltZVZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIFtjb25maWcucGF0aF06IGZvcm1hdHRlZERhdGVcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgW2NvbmZpZy5wYXRoXTogbnVsbFxuICAgICAgfTtcbiAgICB9LFxuXG4gICAgdmFsaWRhdGUoe1xuICAgICAgZGF0ZVZhbHVlLFxuICAgICAgdGltZVZhbHVlXG4gICAgfSkge1xuICAgICAgaWYgKCFkYXRlVmFsdWUgJiYgIXRpbWVWYWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgICBpZiAoIWRhdGVWYWx1ZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgaWYgKCF0aW1lVmFsdWUpIHJldHVybiBmYWxzZTtcbiAgICAgIHJldHVybiBpc1ZhbGlkSVNPKHtcbiAgICAgICAgZGF0ZVZhbHVlLFxuICAgICAgICB0aW1lVmFsdWVcbiAgICAgIH0pO1xuICAgIH1cblxuICB9O1xufTtcblxuZXhwb3J0cy5DYXJkVmFsdWUgPSBDYXJkVmFsdWU7XG5leHBvcnRzLkNlbGwgPSBDZWxsO1xuZXhwb3J0cy5GaWVsZCA9IEZpZWxkO1xuZXhwb3J0cy5jb250cm9sbGVyID0gY29udHJvbGxlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2ZpZWxkcy5janMucHJvZC5qc1wiKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vZmllbGRzLmNqcy5kZXYuanNcIik7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBjb3JlID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL2NvcmUnKTtcbnZhciBmaWVsZHMgPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvZmllbGRzJyk7XG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcERlZmF1bHQgKGUpIHsgcmV0dXJuIGUgJiYgZS5fX2VzTW9kdWxlID8gZSA6IHsgJ2RlZmF1bHQnOiBlIH07IH1cblxudmFyIFJlYWN0X19kZWZhdWx0ID0gLyojX19QVVJFX18qL19pbnRlcm9wRGVmYXVsdChSZWFjdCk7XG5cbi8vIGJ1dCBJJ2QgbGlrZSB0byBwcmVzZW50IGl0IGFzIGJlc3QgYXMgcG9zc2libGUuXG4vLyBUb0RvOiBCZXR0ZXIgcHJlc2VudGF0aW9uIGZvciBtb3JlIHR5cGVzIG9mIGRhdGFcblxuY29uc3Qgc3RyaW5naWZ5ID0gZGF0YSA9PiB7XG4gIGNvbnN0IG9taXRUeXBlbmFtZSA9IChrZXksIHZhbHVlKSA9PiBrZXkgPT09ICdfX3R5cGVuYW1lJyA/IHVuZGVmaW5lZCA6IHZhbHVlO1xuXG4gIGNvbnN0IGRhdGFXaXRob3V0VHlwZW5hbWUgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGRhdGEpLCBvbWl0VHlwZW5hbWUpO1xuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGF0YVdpdGhvdXRUeXBlbmFtZSwgbnVsbCwgMik7XG59O1xuXG5mdW5jdGlvbiBQcmV0dHlEYXRhKHtcbiAgZGF0YVxufSkge1xuICBpZiAoIWRhdGEpIHJldHVybiBudWxsO1xuICBsZXQgcHJldHR5RGF0YSA9ICcnO1xuICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSBwcmV0dHlEYXRhID0gZGF0YTtlbHNlIGlmICh0eXBlb2YgZGF0YSA9PT0gJ251bWJlcicpIHByZXR0eURhdGEgPSBkYXRhO2Vsc2UgaWYgKHR5cGVvZiBkYXRhID09PSAnb2JqZWN0Jykge1xuICAgIHByZXR0eURhdGEgPSAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFwicHJlXCIsIG51bGwsIHN0cmluZ2lmeShkYXRhKSk7XG4gIH0gZWxzZSB7XG4gICAgcHJldHR5RGF0YSA9IC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXCJwcmVcIiwgbnVsbCwgc3RyaW5naWZ5KGRhdGEpKTtcbiAgfVxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0WydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgcHJldHR5RGF0YSk7XG59XG5cbi8qIEBqc3gganN4ICovXG5jb25zdCBGaWVsZCA9ICh7XG4gIGZpZWxkLFxuICB2YWx1ZVxufSkgPT4gdmFsdWUgPT09IGNyZWF0ZVZpZXdWYWx1ZSA/IG51bGwgOiBjb3JlLmpzeChmaWVsZHMuRmllbGRDb250YWluZXIsIG51bGwsIGNvcmUuanN4KGZpZWxkcy5GaWVsZExhYmVsLCBudWxsLCBmaWVsZC5sYWJlbCksIGNvcmUuanN4KFByZXR0eURhdGEsIHtcbiAgZGF0YTogdmFsdWVcbn0pKTtcbmNvbnN0IENlbGwgPSAoe1xuICBpdGVtLFxuICBmaWVsZFxufSkgPT4ge1xuICByZXR1cm4gY29yZS5qc3goUHJldHR5RGF0YSwge1xuICAgIGRhdGE6IGl0ZW1bZmllbGQucGF0aF1cbiAgfSk7XG59O1xuY29uc3QgQ2FyZFZhbHVlID0gKHtcbiAgaXRlbSxcbiAgZmllbGRcbn0pID0+IHtcbiAgcmV0dXJuIGNvcmUuanN4KGZpZWxkcy5GaWVsZENvbnRhaW5lciwgbnVsbCwgY29yZS5qc3goZmllbGRzLkZpZWxkTGFiZWwsIG51bGwsIGZpZWxkLmxhYmVsKSwgY29yZS5qc3goUHJldHR5RGF0YSwge1xuICAgIGRhdGE6IGl0ZW1bZmllbGQucGF0aF1cbiAgfSkpO1xufTtcbmNvbnN0IGNyZWF0ZVZpZXdWYWx1ZSA9IFN5bWJvbCgnY3JlYXRlIHZpZXcgdmlydHVhbCBmaWVsZCB2YWx1ZScpO1xuY29uc3QgY29udHJvbGxlciA9IGNvbmZpZyA9PiB7XG4gIHJldHVybiB7XG4gICAgcGF0aDogY29uZmlnLnBhdGgsXG4gICAgbGFiZWw6IGNvbmZpZy5sYWJlbCxcbiAgICBncmFwaHFsU2VsZWN0aW9uOiBgJHtjb25maWcucGF0aH0ke2NvbmZpZy5maWVsZE1ldGEuZ3JhcGhRTFJldHVybkZyYWdtZW50fWAsXG4gICAgZGVmYXVsdFZhbHVlOiBjcmVhdGVWaWV3VmFsdWUsXG4gICAgZGVzZXJpYWxpemU6IGRhdGEgPT4ge1xuICAgICAgcmV0dXJuIGRhdGFbY29uZmlnLnBhdGhdO1xuICAgIH0sXG4gICAgc2VyaWFsaXplOiAoKSA9PiAoe30pXG4gIH07XG59O1xuXG5leHBvcnRzLkNhcmRWYWx1ZSA9IENhcmRWYWx1ZTtcbmV4cG9ydHMuQ2VsbCA9IENlbGw7XG5leHBvcnRzLkZpZWxkID0gRmllbGQ7XG5leHBvcnRzLmNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vZmllbGRzLmNqcy5wcm9kLmpzXCIpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9maWVsZHMuY2pzLmRldi5qc1wiKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEtleXN0b25lUHJvdmlkZXIgfSBmcm9tICdAa2V5c3RvbmUtbmV4dC9hZG1pbi11aS9jb250ZXh0JztcbmltcG9ydCB7IEVycm9yQm91bmRhcnkgfSBmcm9tICdAa2V5c3RvbmUtbmV4dC9hZG1pbi11aS9jb21wb25lbnRzJztcbmltcG9ydCB7IENvcmUgfSBmcm9tICdAa2V5c3RvbmUtdWkvY29yZSc7XG5cbmltcG9ydCAqIGFzIHZpZXdkMDJiOGRjNyBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQvZmllbGRzL3R5cGVzL21vbmdvSWQvdmlld3MnO1xuaW1wb3J0ICogYXMgdmlldzIzMmY1MTAwIGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Aa2V5c3RvbmUtbmV4dC9maWVsZHMvdHlwZXMvdGV4dC92aWV3cyc7XG5pbXBvcnQgKiBhcyB2aWV3NDIyYjkyYzUgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2ZpZWxkcy90eXBlcy9wYXNzd29yZC92aWV3cyc7XG5pbXBvcnQgKiBhcyB2aWV3OTgxYzczNDAgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2ZpZWxkcy90eXBlcy9yZWxhdGlvbnNoaXAvdmlld3MnO1xuaW1wb3J0ICogYXMgdmlldzA2YWVmZmUxIGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Aa2V5c3RvbmUtbmV4dC9maWVsZHMvdHlwZXMvdGltZXN0YW1wL3ZpZXdzJztcbmltcG9ydCAqIGFzIHZpZXdjZTIzMTkyOSBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQvZmllbGRzL3R5cGVzL3NlbGVjdC92aWV3cyc7XG5pbXBvcnQgKiBhcyB2aWV3MTUzMzE2ZDYgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2ZpZWxkcy90eXBlcy9pbnRlZ2VyL3ZpZXdzJztcbmltcG9ydCAqIGFzIHZpZXdjYzU5NmY4MCBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQvY2xvdWRpbmFyeS92aWV3cyc7XG5pbXBvcnQgKiBhcyB2aWV3YjdkNmIyNWEgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2ZpZWxkcy90eXBlcy92aXJ0dWFsL3ZpZXdzJztcbmltcG9ydCAqIGFzIHZpZXcwMzYxYjAyNiBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQvZmllbGRzL3R5cGVzL2NoZWNrYm94L3ZpZXdzJztcblxuY29uc3QgYWRtaW5Db25maWcgPSB7fTtcblxuY29uc3QgZmllbGRWaWV3cyA9IHtcbiAgdmlld2QwMmI4ZGM3LFxuICB2aWV3MjMyZjUxMDAsXG4gIHZpZXc0MjJiOTJjNSxcbiAgdmlldzk4MWM3MzQwLFxuICB2aWV3MDZhZWZmZTEsXG4gIHZpZXdjZTIzMTkyOSxcbiAgdmlldzE1MzMxNmQ2LFxuICB2aWV3Y2M1OTZmODAsXG4gIHZpZXdiN2Q2YjI1YSxcbiAgdmlldzAzNjFiMDI2LFxufTtcblxuY29uc3QgbGF6eU1ldGFkYXRhUXVlcnkgPSB7XG4gIGtpbmQ6ICdEb2N1bWVudCcsXG4gIGRlZmluaXRpb25zOiBbXG4gICAge1xuICAgICAga2luZDogJ09wZXJhdGlvbkRlZmluaXRpb24nLFxuICAgICAgb3BlcmF0aW9uOiAncXVlcnknLFxuICAgICAgc2VsZWN0aW9uU2V0OiB7XG4gICAgICAgIGtpbmQ6ICdTZWxlY3Rpb25TZXQnLFxuICAgICAgICBzZWxlY3Rpb25zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAga2luZDogJ0ZpZWxkJyxcbiAgICAgICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgICAga2luZDogJ05hbWUnLFxuICAgICAgICAgICAgICB2YWx1ZTogJ2tleXN0b25lJyxcbiAgICAgICAgICAgICAgbG9jOiB7IHN0YXJ0OiAyMiwgZW5kOiAzMCB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFyZ3VtZW50czogW10sXG4gICAgICAgICAgICBkaXJlY3RpdmVzOiBbXSxcbiAgICAgICAgICAgIHNlbGVjdGlvblNldDoge1xuICAgICAgICAgICAgICBraW5kOiAnU2VsZWN0aW9uU2V0JyxcbiAgICAgICAgICAgICAgc2VsZWN0aW9uczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtpbmQ6ICdGaWVsZCcsXG4gICAgICAgICAgICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdOYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdhZG1pbk1ldGEnLFxuICAgICAgICAgICAgICAgICAgICBsb2M6IHsgc3RhcnQ6IDM5LCBlbmQ6IDQ4IH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgYXJndW1lbnRzOiBbXSxcbiAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtdLFxuICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uU2V0OiB7XG4gICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdTZWxlY3Rpb25TZXQnLFxuICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25zOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAga2luZDogJ0ZpZWxkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2luZDogJ05hbWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ2xpc3RzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jOiB7IHN0YXJ0OiA1OSwgZW5kOiA2NCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3VtZW50czogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvblNldDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBraW5kOiAnU2VsZWN0aW9uU2V0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdGaWVsZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdOYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdrZXknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2M6IHsgc3RhcnQ6IDc3LCBlbmQ6IDgwIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJndW1lbnRzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jOiB7IHN0YXJ0OiA3NywgZW5kOiA4MCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2luZDogJ0ZpZWxkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2luZDogJ05hbWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ2lzSGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jOiB7IHN0YXJ0OiA5MSwgZW5kOiA5OSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3VtZW50czogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYzogeyBzdGFydDogOTEsIGVuZDogOTkgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdGaWVsZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdOYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdmaWVsZHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2M6IHsgc3RhcnQ6IDExMCwgZW5kOiAxMTYgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmd1bWVudHM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25TZXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2luZDogJ1NlbGVjdGlvblNldCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbnM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBraW5kOiAnRmllbGQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBraW5kOiAnTmFtZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAncGF0aCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYzogeyBzdGFydDogMTMxLCBlbmQ6IDEzNSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3VtZW50czogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYzogeyBzdGFydDogMTMxLCBlbmQ6IDEzNSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2luZDogJ0ZpZWxkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2luZDogJ05hbWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ2NyZWF0ZVZpZXcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2M6IHsgc3RhcnQ6IDE0OCwgZW5kOiAxNTggfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmd1bWVudHM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25TZXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2luZDogJ1NlbGVjdGlvblNldCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbnM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBraW5kOiAnRmllbGQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBraW5kOiAnTmFtZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnZmllbGRNb2RlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jOiB7IHN0YXJ0OiAxNzUsIGVuZDogMTg0IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJndW1lbnRzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jOiB7IHN0YXJ0OiAxNzUsIGVuZDogMTg0IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jOiB7IHN0YXJ0OiAxNTksIGVuZDogMTk4IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jOiB7IHN0YXJ0OiAxNDgsIGVuZDogMTk4IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jOiB7IHN0YXJ0OiAxMTcsIGVuZDogMjEwIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jOiB7IHN0YXJ0OiAxMTAsIGVuZDogMjEwIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jOiB7IHN0YXJ0OiA2NSwgZW5kOiAyMjAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2M6IHsgc3RhcnQ6IDU5LCBlbmQ6IDIyMCB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIGxvYzogeyBzdGFydDogNDksIGVuZDogMjI4IH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgbG9jOiB7IHN0YXJ0OiAzOSwgZW5kOiAyMjggfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBsb2M6IHsgc3RhcnQ6IDMxLCBlbmQ6IDIzNCB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxvYzogeyBzdGFydDogMjIsIGVuZDogMjM0IH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBraW5kOiAnRmllbGQnLFxuICAgICAgICAgICAgbmFtZTogeyBraW5kOiAnTmFtZScsIHZhbHVlOiAnYXV0aGVudGljYXRlZEl0ZW0nIH0sXG4gICAgICAgICAgICBzZWxlY3Rpb25TZXQ6IHtcbiAgICAgICAgICAgICAga2luZDogJ1NlbGVjdGlvblNldCcsXG4gICAgICAgICAgICAgIHNlbGVjdGlvbnM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBraW5kOiAnSW5saW5lRnJhZ21lbnQnLFxuICAgICAgICAgICAgICAgICAgdHlwZUNvbmRpdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBraW5kOiAnTmFtZWRUeXBlJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogeyBraW5kOiAnTmFtZScsIHZhbHVlOiAnVXNlcicgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBzZWxlY3Rpb25TZXQ6IHtcbiAgICAgICAgICAgICAgICAgICAga2luZDogJ1NlbGVjdGlvblNldCcsXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbnM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7IGtpbmQ6ICdGaWVsZCcsIG5hbWU6IHsga2luZDogJ05hbWUnLCB2YWx1ZTogJ2lkJyB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgeyBraW5kOiAnRmllbGQnLCBuYW1lOiB7IGtpbmQ6ICdOYW1lJywgdmFsdWU6ICduYW1lJyB9IH0sXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIH0sXG4gIF0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPENvcmU+XG4gICAgICA8S2V5c3RvbmVQcm92aWRlclxuICAgICAgICBhZG1pbkNvbmZpZz17YWRtaW5Db25maWd9XG4gICAgICAgIGFkbWluTWV0YUhhc2g9XCIxZDl1eXZjXCJcbiAgICAgICAgZmllbGRWaWV3cz17ZmllbGRWaWV3c31cbiAgICAgICAgbGF6eU1ldGFkYXRhUXVlcnk9e2xhenlNZXRhZGF0YVF1ZXJ5fVxuICAgICAgPlxuICAgICAgICA8RXJyb3JCb3VuZGFyeT5cbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDwvRXJyb3JCb3VuZGFyeT5cbiAgICAgIDwvS2V5c3RvbmVQcm92aWRlcj5cbiAgICA8L0NvcmU+XG4gICk7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAa2V5c3RvbmUtbmV4dC9hZG1pbi11aS11dGlsc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAa2V5c3RvbmUtbmV4dC9hZG1pbi11aS9hcG9sbG9cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGtleXN0b25lLW5leHQvYWRtaW4tdWkvY29tcG9uZW50c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAa2V5c3RvbmUtbmV4dC9hZG1pbi11aS9jb250ZXh0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBrZXlzdG9uZS1uZXh0L2FkbWluLXVpL3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAa2V5c3RvbmUtdWkvYnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBrZXlzdG9uZS11aS9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBrZXlzdG9uZS11aS9maWVsZHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGtleXN0b25lLXVpL2ljb25zL2ljb25zL0V5ZUljb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGtleXN0b25lLXVpL2ljb25zL2ljb25zL0V5ZU9mZkljb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGtleXN0b25lLXVpL2ljb25zL2ljb25zL1hJY29uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBrZXlzdG9uZS11aS9sb2FkaW5nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBrZXlzdG9uZS11aS9tb2RhbHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGtleXN0b25lLXVpL3BpbGxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGtleXN0b25lLXVpL3NlZ21lbnRlZC1jb250cm9sXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBrZXlzdG9uZS11aS90b2FzdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAa2V5c3RvbmUtdWkvdG9vbHRpcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkYXRlLWZuc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmYXN0LWRlZXAtZXF1YWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW50ZXJzZWN0aW9uLW9ic2VydmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=