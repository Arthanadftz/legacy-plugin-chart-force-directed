"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@superset-ui/core");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ForceDirected = _interopRequireDefault(require("./ForceDirected"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
const ReactComponent = (0, _core.reactify)(_ForceDirected.default);

const ForceDirected = ({
  className,
  ...otherProps
}) => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: className
  }, /*#__PURE__*/_react.default.createElement(ReactComponent, otherProps));
};

ForceDirected.propTypes = {
  className: _propTypes.default.string.isRequired
};

var _default = (0, _core.styled)(ForceDirected)`
  .superset-legacy-chart-force-directed {
    path.link {
      fill: none;
      stroke: #000;
      stroke-width: 1.5px;
    }
    circle {
      fill: #ccc;
      stroke: #000;
      stroke-width: 1.5px;
      stroke-opacity: 1;
      opacity: 0.75;
    }
    text {
      fill: #000;
      font: 10px sans-serif;
      pointer-events: none;
    }
  }
`;

exports.default = _default;