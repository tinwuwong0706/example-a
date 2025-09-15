"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Greeting = exports.CustomButton = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var CustomButton = function (_a) {
    var children = _a.children, onClick = _a.onClick, _b = _a.variant, variant = _b === void 0 ? 'primary' : _b;
    return ((0, jsx_runtime_1.jsx)("button", { onClick: onClick, style: {
            padding: '10px 20px',
            border: 'none',
            borderRadius: '4px',
            backgroundColor: variant === 'primary' ? '#ff7bff' : '#6c757d',
            color: 'yellow',
            cursor: 'pointer',
            fontSize: '16px'
        }, children: children }));
};
exports.CustomButton = CustomButton;
var Greeting = function (_a) {
    var name = _a.name;
    return (0, jsx_runtime_1.jsxs)("h1", { children: ["Hello, ", name, "! Welcome from Example A!"] });
};
exports.Greeting = Greeting;
