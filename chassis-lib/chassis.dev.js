/**
  * v1.0.116 generated on: Wed Aug 10 2016 21:50:28 GMT+0000 (UTC)
  * Copyright (c) 2014-2016, Ecor Ventures LLC. All Rights Reserved. See LICENSE (BSD).
  */
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Polyfill for IE11 & Safari
// This is required to make the remove method work properly.
if (!Array.prototype.findIndex) {
  Array.prototype.findIndex = function (predicate) {
    // eslint-disable-line no-extend-native
    if (this === null) {
      throw new Error('Array.prototype.findIndex called on null or undefined');
    }
    // if (typeof predicate !== 'function') {
    //   throw new Error('Predicate must be a function (received ' + (typeof predicate) + ')')
    // }
    var list = Object(this);
    var length = list.length >>> 0;
    var thisArg = arguments[1];
    var value;

    for (var i = 0; i < length; i++) {
      value = list[i];
      if (predicate.call(thisArg, value, i, list)) {
        return i;
      }
    }
    return -1;
  };
}

'use strict';

window.NGN = {};

'use strict';

/**
 * @class NGN
 * @singleton
 */
/**
  * @method define
  * Create an object definition for a property.
  * For example:
  *
  * ```
  * Object.defineProperty('attr', NGN.define(true, false, true, 'value'))
  *
  * // The snippet above is the same as:
  * Object.defineProperty(this, 'attr', {
  *  enumberable: true,
  *  writable: false,
  *  configurable: true,
  *  value: 'value'
  * })
  * ```
  * @param  {boolean} enumerable
  * Determines if the attribute is considered an accessible part of the object.
  * Making an attribute enumerable will make it show up as a key in an object,
  * which can be iterated over (ex: `Object.keys()`). A non-enumerable asset is
  * treated as a private attribute.
  * @param  {boolean} writable
  * Determines whether the value can be changed.
  * @param  {boolean} configurable
  * Determines whether the attribute can be removed from the object.
  * @param  {any} value
  * The actual value of the attribute.
  * @private
  */
Object.defineProperty(NGN, 'define', {
  enumerable: false,
  writable: false,
  configurable: false,
  value: function value(e, w, c, v) {
    return {
      enumerable: e,
      writable: w,
      configurable: c,
      value: v
    };
  }
});

Object.defineProperties(NGN, {
  /**
   * @method public
   * Create a `public` property definition for an object.
   * Example:
   *
   * ```
   * Object.defineProperty(this, 'attr', NGN.public('somevalue'))
   *
   * // Longhand equivalent
   * Object.defineProperty(this, 'attr', {
   *  enumerable: true,
   *  writable: true,
   *  configurable: false,
   *  value: 'somevalue'
   * })
   * ```
   * @param  {any} value
   * Any valid JavaScript value (function, boolean, number, string, etc)
   * used as the value for the object attribute.
   * @private
   */
  public: NGN.define(false, false, false, function (value) {
    return NGN.define(true, typeof value !== 'function', false, value);
  }),

  /**
   * @method private
   * Create a `private` property definition for an object.
   * Example:
   *
   * ```
   * Object.defineProperty(this, 'attr', NGN.private('somevalue'))
   *
   * // Longhand equivalent
   * Object.defineProperty(this, 'attr', {
   *  enumerable: false,
   *  writable: true,
   *  configurable: false,
   *  value: 'somevalue'
   * })
   * ```
   * @param  {any} value
   * Any valid JavaScript value (function, boolean, number, string, etc)
   * used as the value for the object attribute.
   * @private
   */
  private: NGN.define(false, false, false, function (value) {
    return NGN.define(false, typeof value !== 'function', false, value);
  }),

  /**
   * @method const
   * Create a `public` constant property definition for an object.
   * Example:
   *
   * ```
   * Object.defineProperty(this, 'attr', NGN.const('somevalue'))
   *
   * // Longhand equivalent
   * Object.defineProperty(this, 'attr', {
   *  enumerable: true,
   *  writable: false,
   *  configurable: false,
   *  value: 'somevalue'
   * })
   * ```
   * @param  {any} value
   * Any valid JavaScript value (function, boolean, number, string, etc)
   * used as the value for the object attribute.
   * @private
   */
  const: NGN.define(false, false, false, function (value) {
    return NGN.define(true, false, false, value);
  }),

  /**
   * @method privateconst
   * Create a `private` constant property definition for an object.
   * Example:
   *
   * ```
   * Object.defineProperty(this, 'attr', NGN.privateconst('somevalue'))
   *
   * // Longhand equivalent
   * Object.defineProperty(this, 'attr', {
   *  enumerable: false,
   *  writable: false,
   *  configurable: false,
   *  value: 'somevalue'
   * })
   * ```
   * @param  {any} value
   * Any valid JavaScript value (function, boolean, number, string, etc)
   * used as the value for the object attribute.
   * @private
   */
  privateconst: NGN.define(false, false, false, function (value) {
    return NGN.define(false, false, false, value);
  }),

  /**
   * @method get
   * Create a private `getter` property definition for an object.
   * Public getters are part of the ES2015 class spec.
   *
   * Example:
   *
   * ```
   * let myFunction = function () {
   *  return 'somevalue'
   * }
   *
   * // Longhand equivalent
   * Object.defineProperty(this, 'attr', {
   *  enumerable: false,
   *  get: function () {
   *    return 'somevalue'
   *  }
   * })
   * ```
   * @param  {function} fn
   * Any valid async JavaScript function with a `return` value.
   * @private
   */
  get: NGN.define(false, false, false, function (fn) {
    return {
      enumerable: false,
      get: fn
    };
  }),

  /**
   * @method get
   * Create a private `setter` property definition for an object.
   * Public setters are part of the ES2015 class spec.
   *
   * Example:
   *
   * ```
   * let myFunction = function () {
   *  return 'somevalue'
   * }
   *
   * // Longhand equivalent
   * Object.defineProperty(this, 'attr', {
   *  enumerable: false,
   *  set: function (value) {
   *    somethingElse = value
   *  }
   * })
   * ```
   * @param  {function} fn
   * Any valid async JavaScript function with a `return` value.
   * @private
   */
  set: NGN.define(false, false, false, function (fn) {
    return {
      enumerable: false,
      set: fn
    };
  })
});

Object.defineProperties(NGN, {
  /**
   * @method extend
   * Extend the NGN core object. Extending NGN is the equivalent of:
   *
   * Example:
   * ```
   * NGN.extend('greet', NGN.public(function (recipient) {
   *  return 'Hello, ' + recipient + '!'
   * }))
   *
   * // Equivalent of:
   *
   * Object.defineProperty(NGN, 'greet', {
   *  enumerable: true,
   *  writable: false,
   *  configurable: false,
   *  value: function (recipient) {
   *    return 'Hello, ' + recipient + '!'
   *  }
   * })
   * ```
   * The example above produces a public function available from NGN:
   *
   * ```
   * console.log(NGN.greet('world')) // outputs Hello, world!
   * @param  {string} attribute
   * Name of the attribute to add to the object.
   * @param  {Object} specification
   * The object specification, i.e.
   * ```
   * {
   *  enumerable: true/false,
   *  writable: true/false,
   *  configurable: true/false,
   *  value: {any}
   * }
   *
   * // OR
   *
   * {
   *  enumerable: true/false,
   *  get: function () { return ... },
   *  set: function (value) { some = value ... }
   * }
   * ```
   * @private
   */
  extend: NGN.privateconst(function (attribute, specification) {
    Object.defineProperty(this, attribute, specification);
  }),

  /**
   * @method inherit
   * Inherit the properties of another object/class.
   * @param  {object|function} source
   * The source object (i.e. what gets copied)
   * @param  {object|function} destination
   * The object properties get copied to.
   */
  inherit: NGN.const(function (source, dest) {
    if (!source || !dest) {
      return;
    }
    source = typeof source === 'function' ? source.prototype : source;
    dest = typeof dest === 'function' ? dest.prototype : dest;
    Object.getOwnPropertyNames(source).forEach(function (attr) {
      var definition = Object.getOwnPropertyDescriptor(source, attr);
      Object.defineProperty(dest, attr, definition);
    });
  }),

  /**
   * @method slice
   * Converts an array-like object to an array.
   *
   * Example:
   * ```
   * function () {
   *  return NGN.slice(arguments)
   * }
   * @param  {Object} obj
   * The object to slice into an array.
   * @return {array}
   * @private
   */
  slice: NGN.private(function (obj) {
    return Array.prototype.slice.call(obj);
  }),

  /**
   * @method splice
   * Converts an array-like object to a spliced array.
   *
   * Example:
   * ```
   * function () {
   *  return NGN.splice(arguments)
   * }
   * @param  {Object} obj
   * The object to splice into an array.
   * @return {array}
   * @private
   */
  splice: NGN.private(function (obj) {
    return Array.prototype.splice.call(obj);
  }),

  /**
   * @method coalesce
   * Finds the first non-null/defined value in a list of arguments.
   * This can be used with {@link Boolean Boolean} values, since `true`/`false` is a
   * non-null/defined value.
   * @param {Mixed} args
   * Any number of arguments can be passed to this method.
   */
  coalesce: NGN.public(function () {
    for (var arg in arguments) {
      if (arguments[arg] !== undefined && arguments[arg] !== null) {
        return arguments[arg];
      }
    }
    return null;
  }),

  /**
   * @property {boolean} nodelike
   * Indicates NGN is running in a node-like environment supporting
   * the `require` statement. This will detect node, io.js, Electron,
   * NW.js, and other environments presumably supporting Node.js.
   * @private
   */
  nodelike: NGN.get(function () {
    var node = false;
    try {
      node = require !== undefined;
    } catch (e) {}
    return node;
  }),

  /**
   * @method dedupe
   * Deduplicate a simple array.
   * @param {array} array
   * The array to deduplicate.
   * @return {array}
   * The array with unique records.
   * @private
   */
  dedupe: NGN.private(function (array) {
    return array.filter(function (element, index) {
      return array.indexOf(element) === index;
    });
  }),

  /**
   * @method typeof
   * A more specific typeof method.
   * @param  {any} element
   * The element to determine the type of.
   * @return {string}
   * Returns the type (all lower case).
   */
  typeof: NGN.define(false, false, false, function (el) {
    var value = Object.prototype.toString.call(el).split(' ')[1].replace(/\]|\[/gi, '').toLowerCase();
    if (value === 'function') {
      if (!el.name) {
        return el.toString().replace(/\n/gi, '').replace(/^function\s|\(.*$/mgi, '').toLowerCase();
      } else {
        value = el.name || 'function';
      }
    }
    return value.toLowerCase();
  }),

  /**
   * @method stack
   * Retrieve the stack trace from a specific code location without throwing
   * an exception. Files are always listed from the root. This is the default
   * order in browsers, but the reverse of the normal stack order in node-like
   * environments.
   *
   * For example, the following stack on node shows `_test.js` as the last item
   * in the array. In node-like environments, the `_test.js` would normally be
   * the first item in the stacktrace.
   *
   * ```js
   * [
   *   { path: 'node.js:348:7', file: 'node.js', line: 348, column: 7 },
   *   { path: 'module.js:575:10',
   *     file: 'module.js',
   *     line: 575,
   *     column: 10 },
   *   { path: 'module.js:550:10',
   *     file: 'module.js',
   *     line: 550,
   *     column: 10 },
   *   { path: 'module.js:541:32',
   *     file: 'module.js',
   *     line: 541,
   *     column: 32 },
   *   { path: '/_test.js:8:14', file: '/_test.js', line: 8, column: 14 }
   * ]
   * ```
   *
   * By standardizing the order of the stack trace, it is easier to programmatically
   * identify sources of problems. This method does not prevent developers from
   * accessing a normal stacktrace.
   * @private
   * @returns {array}
   * Returns an array of objects. Each object contains the file, line, column,
   * and path within the stack. For example:
   *
   * ```
   * {
   * 	 path: 'path/to/file.js:127:14'
   *   file: 'path/to/file.js',
   *   line: 127,
   *   column: 14
   * }
   * ```
   *
   * If a stacktrace is unavailable for any reason, the array will contain a
   * single element like:
   *
   * ```js
   * {
   *   path: 'unknown',
   *   file: 'unknown',
   *   line: 0,
   *   column: 0
   * }
   * ```
   */
  stack: NGN.get(function () {
    var me = this;
    var originalStack = new Error().stack.split('\n');
    var stack = new Error().stack.split('\n') || [];

    stack = stack.filter(function (item) {
      return item.split(':').length > 1;
    }).map(function (item) {
      item = item.replace(/^.*\s\(/i, '').replace(/\)/gi, '').replace(/^.*\@/i, '').replace(window !== undefined ? window.location.origin : process !== undefined ? process.cwd() : '', '').replace(/^.*\:\/\//, '').replace(/\s{1,100}at\s{1,100}/gi, '').replace(/anonymous\>/, 'console').trim().split(':');

      return {
        path: item[0].substr(me.nodelike ? 0 : 1, item[0].length - (me.nodelike ? 0 : 1)) + ':' + item[1] + ':' + item[2],
        file: item[0].substr(me.nodelike ? 0 : 1, item[0].length - (me.nodelike ? 0 : 1)),
        line: parseInt(item[1], 10),
        column: parseInt(item[2], 10)
      };
    });

    if (stack.length === 0) {
      return [{
        path: 'unknown',
        file: 'unknown',
        line: 0,
        column: 0
      }];
    } else if (me.nodelike) {
      stack.reverse();
    }

    return stack;
  }),

  /**
   * @property css
   * A CSS string used for highlighting console output in Chrome and Firefox.
   *
   * **Example:**
   *
   * ```js
   * console.log('%cHighlight %c some text and leave the rest normal.', NGN.css, '')
   * ```
   * @private
   */
  css: NGN.privateconst('font-weight: bold;')
});

'use strict';

Object.defineProperty(NGN, 'global', NGN.privateconst(NGN.nodelike ? global : window));

// Force scope
document.addEventListener('DOMContentLoaded', function () {
  document.body.classList.add('ngn');
});

'use strict';

if (!window.NGN) {
  throw new Error('The EventEmitter class is dependent on the presence of NGN.');
}

/**
 * @class EventEmitter
 * This is an extendable generic class used to apply event management
 * to non-DOM objects, such as data models, logging, and other common
 * elements of JavaScript programming.
 * @protected
 */

var EventEmitter = function () {
  /**
   * @constructor
   * ```
   * let EE = new EventEmitter()
   * ```
   * This is a protected class. It is most commonly instantiated through
   * the NGN namespace (i.e. `new NGN.EventEmitter()`). However; it is
   * designed for use within the NGN library, not directly as an event emitter.
   * Use with caution.
   */

  function EventEmitter(cfg) {
    _classCallCheck(this, EventEmitter);

    cfg = cfg || {};
    Object.defineProperties(this, {
      handlers: NGN.private({}),
      adhoc: NGN.private({}),
      maxlisteners: NGN.private(cfg.defaultMaxListeners || 10)
    });
  }

  /**
   * @property {object} subscribers
   * An array of all subscribers which currently have a registered event handler.
   * @warning This is a UI-only method.
   */


  _createClass(EventEmitter, [{
    key: 'listenerCount',


    /**
     * @method {number} listenerCount
     * The number of listeners for a specific event.
     * @param {string} eventName
     * The name of the event to count listeners for.
     */
    value: function listenerCount(eventName) {
      return (this.handlers[eventName] || []).length + (this.adhoc[eventName] || []).length;
    }

    /**
     * @method getMaxListeners
     * A node-like reference to the #defaultMaxListeners value.
     * @return {number}
     */

  }, {
    key: 'getMaxListeners',
    value: function getMaxListeners() {
      return this.defaultMaxListeners;
    }

    /**
     * @method setMaxListeners
     * A node-like reference to the #defaultMaxListeners value (setter).
     */

  }, {
    key: 'setMaxListeners',
    value: function setMaxListeners(value) {
      this.defaultMaxListeners = value;
    }

    /**
     * @method eventNames
     * A node-like reference providing an array of recognized event names.
     * @return {array}
     */

  }, {
    key: 'eventNames',
    value: function eventNames() {
      var handlers = Object.keys(this.handlers);
      var adhoc = Object.keys(this.adhoc);
      return NGN.dedupe(handlers.concat(adhoc));
    }

    /**
     * @method listeners
     * Returns the raw listener methods for the event.
     * @param {string} eventName
     * Name of the event to retrieve listeners for.
     * @return {array}
     */

  }, {
    key: 'listeners',
    value: function listeners(eventName) {
      var handlers = this.handlers[eventName] || [];
      var adhoc = this.adhoc[eventName] || [];
      return handlers.concat(adhoc);
    }

    /**
     * @method on
     * Create a new event handler for the specified event.
     * @param  {string} eventName
     * Name of the event to listen for.
     * @param  {Function} handler
     * The method responsible for responding to the event.
     * @param {boolean} [prepend=false]
     * When set to `true`, the event is added to the beginning of
     * the processing list instead of the end.
     */

  }, {
    key: 'on',
    value: function on(eventName, callback, prepend) {
      this.handlers[eventName] = this.handlers[eventName] || [];
      this.handlers[eventName][NGN.coalesce(prepend, false) ? 'unshift' : 'push'](callback);
      this.emit('newListener', eventName, callback);
      if (this.listenerCount(eventName) > this.maxlisteners) {
        throw new Error('Maximum event listeners exceeded. Use setMaxListeners() to adjust the level.');
      }
    }

    /**
     * @method addListener
     * A node-like reference to the #on method.
     */

  }, {
    key: 'addListener',
    value: function addListener() {
      this.on.apply(this, arguments);
    }

    /**
     * @method prependListener
     * A node-like reference to the #on method, adding events to the
     * beginning of the event list (processed before others) instead of the end.
     * @param  {string} eventName
     * Name of the event to listen for.
     * @param  {Function} handler
     * The method responsible for responding to the event.
     */

  }, {
    key: 'prependListener',
    value: function prependListener() {
      var args = NGN.slice(arguments).push(true);
      this.on.apply(this, args);
    }

    /**
     * @method on
     * Create a new event handler for the specified event. The
     * handler will be removed immediately after it is executed. This
     * effectively listens for an event to happen once and only once
     * before the handler is destroyed.
     * @param  {string} eventName
     * Name of the event to listen for.
     * @param  {Function} handler
     * The method responsible for responding to the event.
     * @param {boolean} [prepend=false]
     * When set to `true`, the event is added to the beginning of
     * the processing list instead of the end.
     */

  }, {
    key: 'once',
    value: function once(eventName, callback, prepend) {
      this.adhoc[eventName] = this.adhoc[eventName] || [];
      this.adhoc[eventName][NGN.coalesce(prepend, false) ? 'unshift' : 'push'](callback);
      this.emit('newListener', eventName, callback);
      if (this.listenerCount(eventName) > this.maxlisteners) {
        throw new Error('Maximum event listeners exceeded. Use setMaxListeners() to adjust the level.');
      }
    }

    /**
     * @method prependOnceListener
     * A node-like reference to the #once method, adding events to the
     * beginning of the event list (processed before others) instead of the end.
     * @param  {string} eventName
     * Name of the event to listen for.
     * @param  {Function} handler
     * The method responsible for responding to the event.
     */

  }, {
    key: 'prependOnceListener',
    value: function prependOnceListener() {
      var args = NGN.slice(arguments).push(true);
      this.once.apply(this, args);
    }

    /**
     * @method off
     * Remove an event handler. If no handler is specified, all handlers for
     * the specified event will be removed.
     * @param {string} eventName
     * Name of the event to remove.
     * @param {function} [handlerFn]
     * The handler function to remove from the event handlers.
     */

  }, {
    key: 'off',
    value: function off(eventName, callback) {
      if (this.handlers[eventName]) {
        if (!callback) {
          delete this.handlers[eventName];
          return;
        }

        var position = this.handlers[eventName].indexOf(callback);

        while (position >= 0) {
          this.handlers[eventName].splice(position, 1);
          this.emit('removeListener', eventName, callback);
          position = this.handlers[eventName].indexOf(callback);
        }

        if (this.handlers[eventName].length === 0) {
          delete this.handlers[eventName];
        }
      }
    }

    /**
     * @method onceoff
     * Remove an event handler that was originally created using #once. If no
     * handler is specified, all handlers for the spcified event will be removed.
     * @param {string} eventName
     * Name of the event to remove.
     * @param {function} handlerFn
     * The handler function to remove from the event handlers.
     */

  }, {
    key: 'onceoff',
    value: function onceoff(eventName, callback) {
      if (this.adhoc[eventName]) {
        if (!callback) {
          delete this.adhoc[eventName];
          return;
        }

        var position = this.adhoc[eventName].indexOf(callback);

        while (position > 0) {
          this.adhoc.splice(position, 1);
          position = this.adhoc[eventName].indexOf(callback);
        }
        if (this.adhoc[eventName].length === 0) {
          delete this.adhoc[eventName];
        }
      }
    }

    /**
     * @alias removeListener
     * A node-like alias of the #off and #onceoff method (combined).
     */

  }, {
    key: 'removeListener',
    value: function removeListener() {
      this.off.apply(this, arguments);
      this.onceoff.apply(this, arguments);
    }

    /**
     * @method clear
     * Remove all event handlers from the EventEmitter (both regular and adhoc).
     */

  }, {
    key: 'clear',
    value: function clear() {
      var _this = this;

      if (arguments.length > 0) {
        NGN.slice(arguments).forEach(function (eventName) {
          delete _this.handlers[eventName];
          delete _this.adhoc[eventName];
        });
      } else {
        this.handlers = {};
        this.adhoc = {};
      }
    }

    /**
     * @alias removeAllListeners
     * A node-like alias of the #clear method.
     */

  }, {
    key: 'removeAllListeners',
    value: function removeAllListeners() {
      this.clear.apply(this, arguments);
    }

    /**
     * @method emit
     * Fires an event. This method accepts one or more arguments. The
     * first argument is always the event name, followed by any number
     * of payload arguments.
     *
     * Example:
     * ```
     * const EE = new NGN.EventEmitter()
     *
     * EE.emit('someevent', {payload: 1}, {payload: 2})
     * ```
     * The example above triggers an event called `someevent` and applies
     * the remaining two arguments to any event handlers.
     * @param {string} eventName
     * The name of the event to trigger.
     */

  }, {
    key: 'emit',
    value: function emit() {
      var args = NGN.slice(arguments);
      var eventName = args.shift();
      var events = this.getAllEvents(eventName);

      var scope = {
        event: eventName
      };

      for (var name in events) {
        var adhocEvent = this.adhoc[events[name]];
        // Adhoc event handling
        if (adhocEvent) {
          delete this.adhoc[events[name]];

          while (adhocEvent.length > 0) {
            var fn = adhocEvent.pop();
            scope.handler = fn;
            fn.apply(scope, args);
          }
        }

        // Regular event handling
        var handler = this.handlers[events[name]];
        if (handler) {
          for (var _fn in handler) {
            scope.handler = handler[_fn];
            handler[_fn].apply(scope, args);
          }
        }
      }
    }

    /**
     * @method getAllEvents
     * Returns all of the events that match an event name. The event name
     * may contain wildcards (i.e. `*`) or it can be a regular expression.
     * @param  {string|regexp} eventName
     * A string or regular expression defining which event names to identify.
     * A string value containing an asterisk (*) will be converted to a regular
     * expression for simplistic wildcard event handling purposes.
     * @return {array}
     * An array of unique event names with handlers or adhoc handlers.
     * @private
     */

  }, {
    key: 'getAllEvents',
    value: function getAllEvents(eventName) {
      var regularEvents = Object.keys(this.handlers);
      var adhocEvents = Object.keys(this.adhoc);
      var allEvents = NGN.dedupe(regularEvents.concat(adhocEvents));

      allEvents = allEvents.filter(function (event) {
        // If the event is an exact match, don't filter it out.
        if (event === eventName) {
          return true;
        }

        // If the event is a regexp/wildcard, further processing is necessary.
        if (NGN.typeof(event) === 'regexp' || event.indexOf('*') >= 0) {
          // Convert wildcard events to a regular expression.
          if (NGN.typeof(event) !== 'regexp') {
            event = new RegExp(event.replace('*', '.*', 'gi'));
          }
          // If the event name matches the event, keep it.
          return event.test(eventName);
        }

        // None of the criteria were met. Ignore the event.
        return false;
      });

      return allEvents;
    }
  }, {
    key: 'subscribers',
    get: function get() {
      var subscriberList = {};

      for (var eventName in this.handlers) {
        subscriberList[eventName] = {
          handler: this.handlers[eventName].length,
          adhoc: 0
        };
      }

      for (var _eventName in this.adhoc) {
        subscriberList[_eventName] = subscriberList[_eventName] || {
          handler: 0
        };

        subscriberList[_eventName].adhoc = this.adhoc[_eventName].length;
      }

      return subscriberList;
    }

    /**
     * @property defaultMaxListeners
     * The maximum number of listeners for a single event.
     */

  }, {
    key: 'defaultMaxListeners',
    get: function get() {
      return this.maxlisteners;
    },
    set: function set(value) {
      this.maxlisteners = value;
    }
  }]);

  return EventEmitter;
}();

NGN.extend('EventEmitter', NGN.private(EventEmitter));

'use strict';

/**
 * @class NGN.EventEmitter
 * @inheritdoc
 */
NGN.inherit(Object.defineProperties({}, {
  queued: NGN.private({}),

  /**
   * @method pool
   * A helper command to create multiple related subscribers
   * all at once. This is a convenience function.
   * @property {string} [prefix]
   * Supply a prefix to be added to every event. For example,
   * `myScope.` would turn `someEvent` into `myScope.someEvent`.
   * @property {Object} subscriberObject
   * A key:value object where the key is the name of the
   * unprefixed event and the key is the handler function.
   * @property {Function} [callback]
   * A callback to run after the entire pool is registered. Receives
   * a single {Object} argument containing all of the subscribers for
   * each event registered within the pool.
   */
  pool: NGN.const(function (prefix, group, callback) {
    if (typeof prefix !== 'string') {
      group = prefix;
      prefix = '';
    }

    var pool = {};

    for (var eventName in group) {
      var topic = (prefix.trim() || '') + eventName;
      if (typeof group[eventName] === 'function') {
        pool[eventName] = this.on(topic, group[eventName]);
      } else {
        console.warn('%c' + topic + '%c could not be pooled in the event emitter because it\'s value is not a function.', NGN.css, '');
      }
    }
    if (callback) {
      callback(pool);
    }
  }),

  /**
   * @method attach
   * Attach a function to a topic. This can be used
   * to forward events in response to asynchronous functions.
   *
   * For example:
   *
   * ```js
   * myAsyncDataFetch(NGN.BUS.attach('topicName'))
   * ```
   *
   * This is the same as:
   *
   * ```js
   * myAsyncCall(function(data){
   *  NGN.BUS.emit('topicName', data)
   * })
   * ```
   * @param {string} eventName
   * The name of the event to attach a handler method to.
   * @param {boolean} [preventDefaultAction=false]
   * Setting this to `true` will execute a `event.preventDefault()` before
   * attaching the handler.
   * @returns {function}
   * Returns a function that will automatically be associated with an event.
   */
  attach: NGN.const(function (eventName, preventDefaultAction) {
    var me = this;
    preventDefaultAction = NGN.coalesce(preventDefaultAction, false);

    return function (e) {
      if (preventDefaultAction && e.hasOwnProperty('preventDefault')) {
        e.preventDefault();
      }
      var args = NGN.slice(arguments); //NGN.slice(arguments)
      args.unshift(eventName);
      me.emit.apply(me, args);
    };
  }),

  /**
   * @method bind
   * A special subscriber that fires one or more event in response to
   * to an event. This is used to bubble events up/down an event chain.
   *
   * For example:
   *
   * ```js
   * BUS.bind('sourceEvent', ['someEvent','anotherEvent'], {payload:true})
   * ```
   * When `sourceEvent` is published, the bind method triggers `someEvent` and
   * `anotherEvent`, passing the payload object to `someEvent` and
   * `anotherEvent` subscribers simultaneously.
   *
   * @param {String} sourceEvent
   * The event to subscribe to.
   * @param {String|Array} triggeredEvent
   * An event or array of events to fire in response to the sourceEvent.
   * @param {any} data
   * Optional data to pass to each bound event handler.
   * @returns {Object}
   * Returns an object with a single `remove()` method.
   */
  bind: NGN.const(function (eventName, triggers, payload) {
    triggers = typeof triggers === 'string' ? [triggers] : triggers;

    var me = this;
    var listener = function listener() {
      var args = NGN.slice(arguments);

      if (payload) {
        args.push(payload);
      }

      for (var trigger in triggers) {
        var argList = args.slice();
        argList.unshift(triggers[trigger]);
        me.emit.apply(me, argList);
      }
    };

    this.on(eventName, listener);

    // Provide handle back for removal of topic
    return {
      remove: function remove() {
        me.off(eventName, listener);
      }
    };
  }),

  /**
   * @method queue
   * This method waits for the specified duration, then publishes an
   * event once. This will publish the event only once at the end of the
   * wait period, even if the event is triggered multiple times. This can
   * be useful when working with many events triggered in rapid succession.
   *
   * For example, an NGN.DATA.Model representing a person may be used to
   * track a user profile. The NGN.DATA.Model fires an event called `field.update`
   * every time a data field is modified. In many cases, a user may update
   * multiple fields of their profile using a form with a "Save" button.
   * Instead of generating a new "save" (to disk, to memory, to an API, etc)
   * operation for each field, the publishOnce event can wait until all
   * changes are made before running the save operation.
   *
   * ```js
   * // Create a data model representing a person.
   * var Person = new NGN.DATA.Model({....})
   *
   * // Create a new person record for a user.
   * var user = new Person()
   *
   * // When the user is modified, save the data.
   * user.on('field.update', function () {
   * 	 // Wait 300 milliseconds to trigger the save event
   *   NGN.BUS.queue('user.save', 300)
   * })
   *
   * // Save the user using an API
   * NGN.BUS.on('user.save', function () {
   * 	 NGN.HTTP.put({
   * 	   url: 'https://my.api.com/user',
   * 	   json: user.data
   * 	 })
   * })
   *
   * // Modify the record attributes (which are blank by default)
   * user.firstname = 'John'
   * user.lastname = 'Doe'
   * user.age = 42
   *
   * // Make another update 1 second later
   * setTimeout(function () {
   *   user.age = 32
   * }, 1000)
   * ```
   *
   * The code above sets up a model and record. Then it listens to the record
   * for field updates. Each time it recognizes an update, it queues the "save"
   * event. When the queue matures, it fires the `user.save` event.
   *
   * The first `field.update` is triggered when `user.firstname = 'John'` runs.
   * This initiates a queue for `user.save`, set to mature in 300 millisenconds.
   * Next, a `field.update` is triggered when `user.lastname = 'Doe'` runs.
   * This time, since the queue for `user.save` is already initiated, notthing
   * new happens. Finally, a `field.update` is triggered when `user.age = 42`
   * runs. Just like the last one, nothing happens since the `user.save` queue
   * is already active.
   *
   * The `user.save` queue "matures" after 300 milliseconds. This means after
   * 300 milliseconds have elapsed, the `user.save` event is triggered. In this
   * example, it means the `NGN.HTTP.put()` code will be executed. As a result,
   * all 3 change (firstname, lastname, and age) will be complete before the
   * API request is executed. The queue is cleared immediately.
   *
   * The final update occurs 1 second later (700 milliseconds after the queue
   * matures). This triggers a `field.update`, but since the queue is no
   * longer active, it is re-initiated. 300 milliseconds later, the `user.save`
   * event is fired again, thus executing the API request again (1.3 seconds
   * in total).
   * @param {string} eventName
   * The event/topic to publish/emit.
   * @param {Number} [delay=300]
   * The number of milliseconds to wait before firing the event.
   * @param {Any} [payload]
   * An optional payload, such as data to be passed to an event handler.
   */
  queue: NGN.const(function (eventName, delay) {
    var _this2 = this,
        _arguments = arguments;

    if (!this.queued.hasOwnProperty(eventName)) {
      (function () {
        var me = _this2;
        var args = NGN.slice(_arguments);
        args.splice(1, 1);

        _this2.queued[eventName] = setTimeout(function () {
          delete me.queued[eventName];
          me.emit.apply(me, args);
        }, delay);
      })();
    }
  })
}), NGN.EventEmitter);

'use strict';

var CustomException = function (_Error) {
  _inherits(CustomException, _Error);

  // eslint-disable-line

  function CustomException(config) {
    _classCallCheck(this, CustomException);

    var _this3 = _possibleConstructorReturn(this, Object.getPrototypeOf(CustomException).call(this));

    config = config || {};
    config = typeof config === 'string' ? { message: config } : config;
    config.custom = config.custom || {};

    var me = _this3;

    _this3.name = config.name || 'NgnError';
    _this3.type = config.type || 'TypeError';
    _this3.severity = config.severity || 'minor';
    _this3.message = config.message || 'Unknown Error';
    _this3.category = config.category || 'operational'; // Alternative is "programmer"

    // Cleanup name
    _this3.name = _this3.name.replace(/[^a-zA-Z0-9_]/gi, '');

    // Add any custom properties
    for (var attr in config.custom) {
      if (config.custom.hasOwnProperty(attr)) {
        _this3[attr] = config.custom[attr];
      }
    }
    _this3.hasOwnProperty('custom') && delete _this3.custom;

    if (NGN.nodelike || Error.prepareStackTrace) {
      //   console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')
      // Capture the stack trace on a new error so the detail can be saved as a structured trace.
      Error.prepareStackTrace = function (_, stack) {
        return stack;
      };

      var _err = new Error();
      Error.captureStackTrace(_err, _this3);

      _this3.rawstack = _err.stack;

      Error.prepareStackTrace = function (err, stack) {
        // eslint-disable-line handle-callback-err
        me.cause && console.warn(me.cause);
        me.help && console.info(me.help);

        return me.name + ': ' + me.message + '\n' + stack.filter(function (frame) {
          return frame.getFileName() !== __filename && frame.getFileName();
        }).map(function (el) {
          return '    at ' + el;
        }).join('\n');
      };

      // Enable stack trace
      Error.captureStackTrace(_this3);
    }
    return _this3;
  }

  /*
   * @property {Array} trace
   * The structured data of the stacktrace. Each array element is a JSON object corresponding to
   * the full stack trace:
   *
   * ```js
   * {
   *   filename: String,
   *   line: Number,
   *   column: Number,
   *   functionname: String,
   *   native: Boolean,
   *   eval: Boolean,
   *   type: String
   * }
   * ```
   * @readonly
   */


  _createClass(CustomException, [{
    key: 'trace',
    get: function get() {
      return this.rawstack.filter(function (frame) {
        return frame.getFileName() !== __filename && frame.getFileName();
      }).map(function (frame) {
        return {
          filename: frame.getFileName(),
          line: frame.getLineNumber(),
          column: frame.getColumnNumber(),
          functionname: frame.getFunctionName(),
          native: frame.isNative(),
          eval: frame.isEval(),
          type: frame.getTypeName()
        };
      });
    }
  }]);

  return CustomException;
}(Error);

if (NGN.nodelike) {
  module.exports = CustomException;
}

'use strict';

/**
 * @class NGN
 * @inheritdoc
 */
/**
 * @method createException
 * Create a custom global exception.
 * For more information, see the [Custom Exceptions Guide](#!/guide/customerrors).
 * @param {Object} config
 * The configuration of the new error.
 * @param {String} [config.name=NgnError]
 * The pretty name of the exception. Alphanumeric characters only (underscore is acceptable).
 * @param {String} [config.type=TypeError]
 * The type of error. This is commonly `TypeError` or `ReferenceError`, but
 * it can be any custom value.
 * @param {String} [config.severity=minor]
 * A descriptive "level" indicating how critical the error is.
 * @param {String} [config.message=Unknown Error]
 * The default message to output when none is specified.
 * @param {Object} [config.custom]
 * Provide a key/value object of custom attributes for the error.
 * There are two "special" custom attributes: `help` and `cause`.
 * When provided, these will be written to stdout whenever the error's
 * stack is viewed.
 *
 * For example:
 *
 * ```js
 * require('ngn')
 *
 * NGN.createException({
 *   name: 'Test Problem',
 *   message: 'An example error.',
 *   custom: {
 *     help: 'Remove the throw statement.',
 *     cause: 'Testing the error output.'
 *   }
 * });
 *
 * throw TestProblem()
 * ```
 * The code above generates the following console output:
 *
 * ```sh
 * Testing the error output.
 * Remove the throw statement.
 * /path/to/test.js:12
 *    throw TestProblem();
 *    ^
 *
 * TestProblem: An example error.
 *    at null._onTimeout (/path/to/test.js:12:11)
 *    at Timer.listOnTimeout (timers.js:92:15)
 * ```
 */
NGN.extend('createException', NGN.public(function (config) {
  config = config || {};
  config = typeof config === 'string' ? { message: config } : config;
  config.name = config.name || 'NgnError';
  config.name = config.name.replace(/[^a-zA-Z0-9_]/gi, '');

  // Create the error as a function
  NGN.global[config.name] = function () {
    if (arguments.length > 0) {
      config.message = arguments[0];
    }
    return new CustomException(config);
  };
}));

/**
 * @class DOM
 * A utility class to simplify some DOM management tasks.
 */
NGN.DOM = {};

Object.defineProperties(NGN.DOM, {
  /**
   * @method ready
   * Executes code after the DOM is loaded.
   * @param {function} callback
   * The function to call when the DOM is fully loaded.
   */
  ready: NGN.const(function (callback) {
    document.addEventListener('DOMContentLoaded', callback);
  }),

  /**
   * @method destroy
   * Remove a DOM element.
   * @param {HTMLElement|NodeList|String|Array} node
   * Accepts a single `HTMLElement`, a `NodeList`, a CSS selector, or
   * an array of `HTMLElements`/`NodeList`/CSS Selectors.
   */
  destroy: NGN.const(function (element) {
    // Process a CSS selector
    if (typeof element === 'string') {
      var str = element;
      element = document.querySelectorAll(element);

      if (element.length === 0) {
        console.warn('The \"' + str + '\" selector did not return any elements.');
        return;
      }
      // Iterate through results and remove each element.
      NGN.slice(element).forEach(this.destroy);
    } else {
      switch (NGN.typeof(element)) {
        case 'array':
          element.forEach(this.destroy);
          return;
        case 'nodelist':
          NGN.slice(element).forEach(this.destroy);
          return;
        case 'htmlelement':
          element.parentNode.removeChild(element);
          return;
        default:
          if (/^html.*element$/.test(NGN.typeof(element))) {
            element.parentNode.removeChild(element);
            return;
          }
          console.warn('An unknown error occurred while trying to remove DOM elements.');
          console.log('Unknown Element', element);
      }
    }
  }),

  /**
   * @method findParent
   * Find a distant parent of a DOM element. This can be thought
   * of as a reverse CSS selector that traverses UP the DOM chain
   * to find the parent element.
   *
   * For example:
   *
   * Assume the following HTML structure & JS code:
   *
   * ```html
   * <section>
   *   <header class="MyGroup">
   *     <div>
   *       <div>
   *         <button>Delete Entire Group</button>
   *       </div>
   *     </div>
   *   </header>
   * </section>
   * ```
   *
   * ```js
   * ref.find('button.remove').addEventListener('click', function (event) {
   *   event.preventDefault()
   *   let removeButton = event.currentTarget
   *   let group = ref.findParent(removeButton,'header')
   *   ref.destroy(group)
   * })
   * ```
   *
   * The code above listens for a click on the button. When the button
   * is clicked, the `findPerent` method recognizes the "Delete Entire Group"
   * button and traverses UP the DOM chain until it finds a `header` DOM
   * element. The `header` DOM element is returned (as `group` letiable). The
   * group is then removed using the `ref.destroy` method.
   *
   * Alternatively, the same effect could have been achieved if line 4
   * of the JS code was:
   * ```js
   * let group = ref.findParent(removeButton, '.MyGroup')
   * ```
   * @param {HTMLElement|String} element
   * The DOM element or a CSS selector string identifying the
   * element whose parent should be found.
   * @param {String} selector
   * A minimal CSS selector used to identify the parent.
   * @param {Number} maxDepth
   * The maximum number of elements to traverse. This can be used to
   * cap a selector and force it to fail before reaching a known limit.
   * By default, there is no limit (i.e. maxDepth=null).
   * @returns {HTMLElement}
   * Responds with the DOM Element, or `null` if none was found.
   */
  findParent: NGN.const(function (node, selector, maxDepth) {
    if (typeof node === 'string') {
      node = document.querySelectorAll(node);
      if (node.length === 0) {
        console.warn('\"' + node + '\" is an invalid CSS selector (Does not identify any DOM elements).');
        return null;
      }
      node = node[0];
    }

    var currentNode = node.parentNode;
    var i = 0;
    maxDepth = typeof maxDepth === 'number' ? maxDepth : -1;

    while (currentNode.parentNode.querySelector(selector) === null && currentNode.nodeName !== 'BODY') {
      i++;
      if (maxDepth > 0 && i > maxDepth) {
        return null;
      }
      currentNode = currentNode.parentNode;
    }

    return currentNode;
  }),

  /**
   * @method indexOfParent
   * Returns the zero-based index of the DOM element related
   * to its parent element.
   * For example:
   *
   * `html
   * <div>
   *   <p>...</p>
   *   <p>...</p>
   *   <button id="btn"></button>
   *   <p>...</p>
   * </div>
   * ```
   *
   * ```js
   * let i = NGN.DOM.indexOfParent(document.getElementById('btn'))
   * console.log(i) // 2
   * ```
   * @param {HTMLElement} el
   * The reference element.
   * @returns {number}
   */
  indexOfParent: NGN.const(function (element) {
    return NGN.slice(element.parentNode.children).indexOf(element);
  })
});

/**
 * @class BUS
 * The bus acts as a pub/sub messaging system (as opposed to a queue). It is primarily
 * designed for asynchronous communication between javascript objects, but can also be
 * bound to DOM events.
 *
 * The most common use looks like:
 * ```js
 *   var subscriber = NGN.BUS.subscribe('test', function () {
 *     console.log('test handled')
 *   })
 *
 *   NGN.BUS.subscribeOnce('test', function () {
 *     console.log('RESPOND ONCE!')
 *   })
 *
 *   NGN.BUS.publish('test') // Outputs "test handled" and "RESPOND ONCE".
 *
 *   NGN.BUS.publish('test') // Outputs "test handled" only.
 *
 *   subscriber.unsubscribe() // Removes the listener
 *
 *   NGN.BUS.publish('test') // Outputs nothing since the subscription was removed.
 * ```
 * There are a few aliases for ease of use, including `on() --> subscribe()`,
 * `once() --> subscribeOnce()`, and `emit() --> publish()`.
 *
 * It is also possible to use a wildcard in a subscription.
 *
 * ```js
 *   var subscriber = NGN.BUS.subscribe('test.*', function () {
 *     console.log('test handled')
 *   })
 *   var subscriber = NGN.BUS.subscribe('test.create', function () {
 *     console.log('test create handled')
 *   })
 *
 *   NGN.BUS.publish('test.create') // Outputs "test handled" and "test create handled"
 *
 *   NGN.BUS.publish('test.delete') // Outputs "test handled"
 * ```
 * @singleton
 */
NGN.extend('BUS', NGN.const(new NGN.EventEmitter()));

/**
 * @class NGN.ref
 * A global "pointer" to DOM elements. This is used to reference and manipulate
 * DOM elements in a simple and standard way, without restricting native functionality.
 */
'use strict';

NGN.ref = new function () {
  var requireBUS = function requireBUS(trigger, event, scope, nm, preventDefault) {
    if (NGN.BUS === undefined) {
      return console.error('The event BUS is required for ' + nm + '().');
    }
    preventDefault = NGN.coalesce(preventDefault, false);
    var fn = function fn(e) {
      if (preventDefault && e.preventDefault) {
        e.preventDefault();
      }
      NGN.BUS.emit(event, e);
    };
    scope.addEventListener(trigger, fn);
  };

  var qs = function qs(value, selector, all) {
    if (typeof value === 'string') {
      return document[all ? 'querySelector' : 'querySelectorAll']((value + ' > ' + selector).trim());
    }
    return value[all ? 'querySelector' : 'querySelectorAll'](selector.trim());
  };

  Object.defineProperties(this, {

    keys: NGN.define(false, true, false, {}),

    _find: NGN.define(false, false, false, function (value, selector) {
      if (typeof value === 'string') {
        var reference = NGN.ref.find((value + ' > ' + selector).trim());
        if (reference.length === 0) {
          var tmpref = NGN.ref.find(value.trim())[0].parentNode.querySelectorAll(selector);
          if (tmpref.length > 0) {
            if (tmpref.length === 1) {
              return tmpref[0];
            }
            return tmpref;
          }
        }
        return reference;
      }
      return NGN.ref.find(value.querySelectorAll(selector));
    }),

    /**
     * @method find
     * Retrieve the DOM element(s) for the given selector. This method provides
     * an **unmanaged** reference object.
     * @private
     * @param {String} selector
     * The selector (CSS-style).
     * @returns {ref}
     * Returns an instance of the reference.
     */
    find: NGN.define(false, false, false, function (value) {
      var html = typeof value !== 'string';
      var els = html === false ? document.querySelectorAll(value) : value;
      var result = null;

      if (els.length === 1) {
        if (!els[0].hasOwnProperty('isArray')) {
          Object.defineProperties(els[0], {
            isArray: NGN.get(function () {
              return false;
            }, false)
          });
        }

        if (!els[0].hasOwnProperty('find')) {
          Object.defineProperty(els[0], 'find', NGN.const(function (selector) {
            return NGN.ref._find(value, selector);
          }));
        }

        if (!els[0].hasOwnProperty('forward')) {
          Object.defineProperty(els[0], 'forward', NGN.const(function (trigger, event) {
            requireBUS(trigger, event, this, 'forward');
          }));
        }

        if (!els[0].hasOwnProperty('on')) {
          Object.defineProperty(els[0], 'on', NGN.const(function () {
            this.addEventListener.apply(this, arguments);
          }));
        }

        result = els[0];
      } else {
        var base = NGN.slice(els);
        if (NGN.typeof(els) === 'nodelist' && base.length === 1) {
          base = base[0];
        }

        // Apply querySelector/All to the response for chaining.
        Object.defineProperties(base, {
          querySelector: NGN.define(false, false, false, function (selector) {
            qs(value, selector);
          }),

          querySelectorAll: NGN.define(false, false, false, function (selector) {
            qs(value, selector, true);
          }),

          addEventListener: NGN.define(false, false, false, function (evt, fn) {
            for (var el = 0; el < this.length; el++) {
              this[el].addEventListener(evt, fn);
            }
          }),

          removeEventListener: NGN.define(false, false, false, function (evt, fn) {
            for (var el = 0; el < this.length; el++) {
              this[el].removeEventListener(evt, fn);
            }
          }),

          find: NGN.const(function (selector) {
            return NGN.ref._find(value, selector);
          }),

          isArray: NGN.get(function () {
            return true;
          }, false),

          forward: NGN.define(false, false, false, function (trigger, event) {
            requireBUS(trigger, event, this, 'forward');
          })
        });
        result = base;
      }

      return result;
    }),

    /**
     * @method create
     * Add a reference.
     * @param {String} [key]
     * The key/name of the reference. For example, if this is `myElement`,
     * then `ref.myElement` will return a pointer to this reference.
     * @param {string} selector
     * The CSS selector path.
     */
    create: NGN.const(function (key, value) {
      // If the key is not provided but the value is a DOM element, make
      // an ephemeral reference.
      if (!value && typeof key !== 'string') {
        return this.find(key);
      }

      // Basic error checking
      if (typeof key !== 'string' && typeof key !== 'number') {
        throw new Error('Cannot add a non-alphanumeric selector reference.');
      }
      if (key.trim().length === 0) {
        throw new Error('Cannot add a blank selector reference.');
      }
      if (value === undefined || value === null || value.trim().length === 0) {
        throw new Error('Cannot create a null/undefined selector reference.');
      }

      // Create a reference object
      var cleankey = this.cleanKey(key);
      var me = this;
      Object.defineProperty(NGN.ref, cleankey, NGN.private(value));

      Object.defineProperty(NGN.ref, key, {
        enumerable: true,
        get: function get() {
          return me.find(value);
        },
        set: function set(val) {
          if (val === undefined || val === null || val.trim().length === 0) {
            throw new Error('Cannot create a null/undefined selector reference.');
          }
          NGN.ref[cleankey] = val;
        }
      });

      this.keys[key] = value;
      this.keys[this.cleanKey(key)] = value;
    }),

    /**
     * @method remove
     * Removes a key from the reference manager.
     */
    remove: NGN.const(function (key) {
      if (this[key]) {
        delete this[key];
        delete this.keys[key];
      }
      var ck = this.cleanKey(key);
      if (this[ck]) {
        delete this[ck];
        delete this.keys[ck];
      }
    }),

    /**
     * @method cleanKey
     * Creates a clean version of the key used to uniquely identify the reference.
     * @private
     * @param {String} key
     * The key to clean.
     */
    cleanKey: NGN.define(false, false, false, function (key) {
      return key.replace(/[^A-Za-z0-9\_\#\$\@\-\+]/gi, '') + key.length;
    }),

    /**
     * @property json
     * A JSON representation of the managed keys and their associated selectors.
     * @returns {Object}
     * A key:selector object.
     */
    json: {
      enumerable: true,
      get: function get() {
        var me = this;
        var obj = {};

        Object.keys(this).forEach(function (el) {
          if (me.hasOwnProperty(el) && ['json', 'find', 'remove'].indexOf(el.trim().toLowerCase()) < 0 && typeof me[el] !== 'function') {
            obj[el] = me.keys[el];
          }
        });
        return obj;
      }
    }
  });
}();

/**
 * @class NGN.NET
 * A library to issue network requests, typically viaHTTP/S requests.
 * This acts as an AJAX library among other things.
 * @author Corey Butler
 * @singleton
 */
var parser = new DOMParser();
var fs = NGN.nodelike ? require('fs') : null;

var Network = function () {
  function Network() {
    _classCallCheck(this, Network);

    Object.defineProperties(this, {
      /**
       * @method xhr
       * Issue an XHR request.
       * @private
       * @param  {Function} callback
       * The callback to execute when the request finishes (or times out.)
       */
      xhr: NGN.privateconst(function (callback) {
        var res = void 0;

        if (window.XMLHttpRequest) {
          // code for IE7+, Firefox, Chrome, Opera, Safari
          res = new XMLHttpRequest();
        }

        res.onreadystatechange = function () {
          if (res.readyState === 4) {
            if (callback) {
              callback(res);
            }
          }
        };

        return res;
      }),

      /**
       * @method run
       * A wrapper to execute a request.
       * @private
       * @param  {string} method required
       * The method to issue, such as GET, POST, PUT, DELETE, OPTIONS, etc.
       * @param  {string} url
       * The URL where the request is issued to.
       * @param  {Function} callback
       * A function to call upon completion.
       */
      run: NGN.privateconst(function (method, url, callback) {
        var res = NGN.NET.xhr(callback);
        res.open(method, url, true);
        res.send();
      }),

      /**
       * @method applyRequestSettings
       * Apply any configuration details to issue with the request,
       * such as `username`, `password`, `headers`, etc.
       * @private
       * @param {object} xhr
       * The XHR request object.
       * @param {object} cfg
       * The key/value configuration object to apply to the request.
       * @param {object} cfg.params
       * A key/value object containing URL paramaters to be passed with the request.
       * These will automatically be URI-encoded.
       * @param {object} cfg.headers
       * A key/value object containing additional headers and associated values to
       * be passed with the request.
       * @param {object} cfg.body
       * An arbitrary body to pass with the request. If no `Content-Type` header is
       * provided, a `Content-Type: application/textcharset=UTF-8` header is automatically supplied.
       * This cannot be used with @cfg.json.
       * @param {object} cfg.json
       * A JSON object to be sent with the request. It will automatically be
       * parsed for submission. By default, a `Content-Type: application/json`
       * header will be applied (this can be overwritten using @cfg.headers).
       * @param {object} cfg.form
       * This accepts a key/value object of form elements, or a reference to a <FORM>
       * HTML element. This automatically adds the appropriate headers.
       * @param {string} username
       * A basicauth username to add to the request. This is sent in plain
       * text, so using SSL to encrypt/protect it is recommended.
       * @param {string} password
       * A basicauth password to add to the request. This is sent in plain
       * text, so using SSL to encrypt/protect it is recommended.
       * @param {boolean} [withCredentials=false]
       * indicates whether or not cross-site `Access-Control` requests should be
       * made using credentials such as cookies or authorization headers.
       * The default is `false`.
       */
      applyRequestSettings: NGN.privateconst(function (xhr, cfg) {
        if (!xhr || !cfg) {
          throw new Error('No XHR or configuration object defined.');
        }

        // Add URL Parameters
        if (cfg.params) {
          var parms = Object.keys(cfg.params).map(function (parm) {
            return parm + '=' + encodeURIComponent(cfg.params[parm]);
          });
          cfg.url += '?' + parms.join('&');
        }

        xhr.open(cfg.method || 'POST', cfg.url, true);

        // Set headers
        cfg.header = cfg.header || cfg.headers || {};
        Object.keys(cfg.header).forEach(function (header) {
          xhr.setRequestHeader(header, cfg.header[header]);
        });

        // Handle body (Blank, plain text, or JSON)
        var body = null;
        if (cfg.json) {
          if (!cfg.header || cfg.header && !cfg.header['Content-Type']) {
            xhr.setRequestHeader('Content-Type', 'application/jsoncharset=UTF-8');
          }
          body = JSON.stringify(cfg.json).trim();
        } else if (cfg.body) {
          if (!cfg.header || cfg.header && !cfg.header['Content-Type']) {
            xhr.setRequestHeader('Content-Type', 'application/text');
          }
          body = cfg.body;
        } else if (cfg.form) {
          body = new FormData();
          Object.keys(cfg.form).forEach(function (el) {
            body.append(el, cfg.form[el]);
          });
        }

        // Handle withCredentials
        if (cfg.withCredentials) {
          xhr.withCredentials = cfg.withCredentials;
        }

        // Handle credentials sent with request
        if (cfg.username && cfg.password) {
          // Basic Auth
          xhr.setRequestHeader('Authorization', 'Basic ' + btoa(cfg.username + ':' + cfg.password));
        } else if (cfg.accessToken) {
          // Bearer Auth
          xhr.setRequestHeader('Authorization', 'Bearer ' + cfg.accessToken);
        }

        return body;
      }),

      /**
       * @method prepend
       * A helper method to prepend arguments.
       * @private
       * @param  {[type]} args [description]
       * @param  {[type]} el   [description]
       * @return {[type]}      [description]
       */
      prepend: NGN.privateconst(function (args, el) {
        args = NGN.slice(args);
        args.unshift(el);
        return args;
      }),

      /**
       * @method getFile
       * A "get" method specifically for node-like environments.
       * @param {string} url
       * The URL to issue the request to.
       * @param {Function} callback
       * A callback method to run when the request is complete.
       * This receives the response object as the only argument.
       * @private
       */
      getFile: NGN.privateconst(function (url) {
        if (fs !== null) {
          var rsp = {
            status: fs.existsSync(url.replace('file://', '')) ? 200 : 400
          };
          rsp.responseText = rsp.status === 200 ? fs.readFileSync(url.replace('file://', '')).toString() : 'File could not be found.';
          return rsp;
        } else {
          throw new Error(url + ' does not exist or could not be found.');
        }
      }),

      /**
       * @method normalizeUrl
       * Cleanup a URL.
       * @private
       */
      normalizeUrl: NGN.privateconst(function (url) {
        var uri = [];

        url.split('/').forEach(function (el) {
          if (el === '..') {
            uri.pop();
          } else if (el !== '.') {
            uri.push(el);
          }
        });

        return uri.join('/').replace(/\:\/{3,50}/gi, '://');
      }),

      /**
       * @method processImport
       * A helper class to process imported content and place
       * it in the DOM accordingly.
       * @param {string} url
       * The URL of remote HTML snippet.
       * @param {HTMLElement} target
       * The DOM element where the resulting code should be appended.
       * @param {string} callback
       * Returns the HTMLElement, which can be directly inserted into the DOM.
       * @param {HTMLElement} callback.element
       * The new DOM element/NodeList.
       * @param {boolean} [before=false]
       * If set to true, insert before the callback.element.
       * @private
       */
      processImport: NGN.privateconst(function (url, target, callback, before) {
        before = before !== undefined ? before : false;
        this.import(url, function (element) {
          if (typeof element === 'string') {
            element = document.createTextNode(element);
          } else if (element.length) {
            var _ret2 = function () {
              var out = [];
              NGN.slice(element).forEach(function (el) {
                if (before) {
                  out.push(target.parentNode.insertBefore(el, target));
                  target = el;
                } else {
                  out.push(target.appendChild(el));
                }
              });
              callback && callback(out);
              return {
                v: void 0
              };
            }();

            if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === "object") return _ret2.v;
          }
          if (before) {
            target.parentNode.insertBefore(element, target);
          } else {
            target.appendChild(element);
          }
          callback && callback(element);
        });
      }),

      /**
       * @method domainRoot
       * Returns the root (no http/s) of the URL.
       * @param {string} url
       * The URL to get the root of.
       * @private
       */
      domainRoot: NGN.privateconst(function (url) {
        var r = url.search(/^https?\:\/\//) !== -1 ? url.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i, '') : url.match(/^([^\/?#]+)(?:[\/?#]|$)/i, '');
        return r === null || r[1].length < 3 ? window.location.host : r[1];
      }),

      /**
       * @method isCrossOrigin
       * Determine if accessing a URL is considered a cross origin request.
       * @param {string} url
       * The URL to identify as a COR.
       * @returns {boolean}
       * @private
       */
      isCrossOrigin: NGN.privateconst(function (url) {
        return this.domainRoot(url) !== window.location.host;
      }),

      /**
       * @method prelink
       * A helper method to construct pre-fetch style DOM elements.
       * This also fires an event when the element is added to the DOM.
       * @param {string} url
       * The URL of the operation.
       * @param {string} rel
       * The type of operation. For example: `preconnect`.
       * @param {boolean} [crossorigin]
       * Set to `true` to identify the request as a cross origin request.
       * By default, NGN will compare the URL to the current URL in an
       * attempt to determine if the request is across origins.
       * @private
       */
      prelink: NGN.privateconst(function (url, rel, cor) {
        if (!document.head) {
          console.warn('Cannot use a preconnect, predns, etc because there is no HEAD in the HTML document.');
          return;
        }

        var p = document.createElement('link');
        p.rel = rel;
        p.href = url.trim().toLowerCase().substr(0, 4) !== 'http' ? this.normalizeUrl(window.location.origin + window.location.pathname + url) : url;

        NGN.coalesce(cor, this.isCrossOrigin(url)) && p.setAttribute('crossorigin', 'true');
        document.head.appendChild(p);
        NGN.BUS.emit('network.' + rel);
      }),

      importCache: NGN.private({}),

      createElement: NGN.privateconst(function (str) {
        return parser.parseFromString(str, 'text/html').querySelector('body').children;
      }),

      applyData: NGN.privateconst(function (tpl, data, callback) {
        if (tpl === undefined) {
          console.warn('Empty template.');
          callback && callback();
          return;
        }

        // Apply data to the template.
        Object.keys(data).forEach(function (key) {
          var re = new RegExp('\{\{' + key + '\}\}', 'gm');
          tpl = tpl.replace(re, data[key]);
        });

        // Clear any unused template code
        tpl = tpl.replace(/(\{\{.*\}\})/gm, '');

        var el = this.createElement(tpl);
        callback && callback(el[0]);
      })
    });
  }

  /**
   * @method send
   * Send the request via HTTP/S.
   * @param  {object} cfg
   * The configuration to use when sending the request. See @applyRequestSettings#cfg
   * for configuration details.
   * @param  {Function} callback
   * A callback to excute upon completion. This receives a standard response
   * object.
   */


  _createClass(Network, [{
    key: 'send',
    value: function send(cfg, callback) {
      cfg = cfg || {};
      var res = this.xhr(callback);
      var body = this.applyRequestSettings(res, cfg);
      res.send(body);
    }

    /**
     * @method get
     * Issue a `GET` request.
     * @param {string} url
     * The URL to issue the request to.
     * @param {Function} callback
     * A callback method to run when the request is complete.
     * This receives the response object as the only argument.
     */

  }, {
    key: 'get',
    value: function get() {
      if (_typeof(arguments[0]) === 'object') {
        var cfg = arguments[0];
        cfg.method = 'GET';
        cfg.url = typeof arguments[1] === 'string' ? arguments[1] : cfg.url;
        if (cfg.url.substr(0, 4) && NGN.nodelike) {
          return arguments[arguments.length - 1](this.getFile(cfg.url));
        }
        return this.send(cfg, arguments[arguments.length - 1]);
      }
      if (arguments[0].substr(0, 4) === 'file' && NGN.nodelike) {
        return arguments[arguments.length - 1](this.getFile(arguments[0]));
      }
      this.run.apply(this.run, this.prepend(arguments, 'GET'));
    }

    /**
     * @method head
     * Issue a `HEAD` request.
     * @param {string} url
     * The URL to issue the request to.
     * @param {Function} callback
     * A callback method to run when the request is complete.
     * This receives the response object as the only argument.
     */

  }, {
    key: 'head',
    value: function head(uri, callback) {
      if (_typeof(arguments[0]) === 'object') {
        var cfg = arguments[0];
        cfg.method = 'HEAD';
        cfg.url = typeof arguments[1] === 'string' ? arguments[1] : cfg.url;
        return this.send(cfg, arguments[arguments.length - 1]);
      }
      this.run.apply(this.run, this.prepend(arguments, 'HEAD'));
    }

    /**
     * @method put
     * Issue a `PUT` request.
     * @param  {object} cfg
     * See the options for @send#cfg
     * @param  {Function} callback
     * A callback method to run when the request is complete.
     * This receives the response object as the only argument.
     */

  }, {
    key: 'put',
    value: function put(cfg, callback) {
      cfg = cfg || {};
      cfg.method = 'PUT';
      cfg.url = cfg.url || window.location;
      this.send(cfg, callback);
    }

    /**
     * @method post
     * Issue a `POST` request.
     * @param  {object} cfg
     * See the options for @send#cfg
     * @param  {Function} callback
     * A callback method to run when the request is complete.
     * This receives the response object as the only argument.
     */

  }, {
    key: 'post',
    value: function post(cfg, callback) {
      cfg = cfg || {};
      cfg.method = 'POST';
      cfg.url = cfg.url || window.location;
      this.send(cfg, callback);
    }

    /**
     * @method delete
     * Issue a `DELETE` request.
     * @param {string} url
     * The URL to issue the request to.
     * @param {Function} callback
     * A callback method to run when the request is complete.
     * This receives the response object as the only argument.
     */

  }, {
    key: 'delete',
    value: function _delete() {
      this.run.apply(this.run, this.prepend(arguments, 'DELETE'));
    }

    /**
     * @method json
     * This is a shortcut method for creating a `GET` request and
     * auto-processing the response body into a JSON object.
     * @param  {string} url
     * The URL to issue the request to.
     * @param  {Function} callback
     * This receives a JSON response object from the server as its only argument.
     */

  }, {
    key: 'json',
    value: function json(cfg, url, callback) {
      if (typeof cfg === 'string') {
        callback = url;
        url = cfg;
        cfg = null;
      }
      if (cfg === null) {
        this.run('GET', url, function (res) {
          if (res.status !== 200) {
            throw Error('Could not retrieve JSON data from ' + url + ' (Status Code: ' + res.status + ').');
          }
          try {
            res.json = JSON.parse(res.responseText);
          } catch (e) {
            res.json = null;
          }
          callback && callback(res.json);
        });
      } else {
        cfg.url = url;
        this.get(cfg, function (res) {
          if (res.status !== 200) {
            throw Error('Could not retrieve JSON data from ' + url + ' (Status Code: ' + res.status + ').');
          }
          try {
            res.json = JSON.parse(res.responseText);
          } catch (e) {
            res.json = null;
          }
          callback && callback(res.json);
        });
      }
    }

    /**
     * @method import
     * Import a remote HTML fragment.
     * @param {string|array} url
     * The URL of remote HTML snippet. If the URL has a `.js` or `.css`
     * extension, it will automatically be added to the `<head>`.
     * It is also possible to provide an array of string values. Take
     * note that the callback may return a different value based on
     * this input.
     * @param {string|array} callback
     * If a **string** is provided as the URL, this returns the HTMLElement,
     * which can be directly inserted into the DOM. If an **array** is
     * provided as the URL, the callback will return an array of HTMLElements.
     * For example:
     *
     * ```js
     * NGN.NET.import([
     *   '/path/a.html',
     *   '/path/b.html',
     *   '/path/a.js'],
     *    function (elements){
     *      console.dir(elements)
     *    }
     * })
     *```
     * The result `elements` array would look like:
     *
     * ```js
     * [
     *   HTMLElement, // DOM element created for a.html
     *   HTMLElement, // DOM element created for b.html
     *   HTMLElement  // DOM element created for a.js (this will be in the <head>)
     * ]
     * ```
     * The last array element is `null`
     * @param {boolean} [bypassCache=false]
     * When set to `true`, bypass the cache.
     * @fires html.import
     * Returns the HTMLElement/NodeList as an argument to the event handler.
     */

  }, {
    key: 'import',
    value: function _import(url, callback, bypassCache) {
      var _this4 = this;

      // Support multiple simultaneous imports
      if (Array.isArray(url)) {
        var _ret3 = function () {
          var self = _this4;
          var out = new Array(url.length);
          var i = 0;
          url.forEach(function (uri, num) {
            self.import(uri, function (el) {
              out[num] = el;
              i++;
            }, bypassCache);
          });
          if (callback) {
            (function () {
              var int = setInterval(function () {
                if (i === url.length) {
                  clearInterval(int);
                  callback(out);
                }
              }, 5);
            })();
          }
          return {
            v: void 0
          };
        }();

        if ((typeof _ret3 === 'undefined' ? 'undefined' : _typeof(_ret3)) === "object") return _ret3.v;
      }

      // Support JS/CSS
      var ext = null;
      try {
        (function () {
          ext = url.split('/').pop().split('?')[0].split('.').pop().toLowerCase();
          var s = void 0;
          if (ext === 'js') {
            s = document.createElement('script');
            s.setAttribute('type', 'text/javascript');
            s.setAttribute('src', url);
          } else if (ext === 'css') {
            s = document.createElement('link');
            s.setAttribute('rel', 'stylesheet');
            s.setAttribute('type', 'text/css');
            s.setAttribute('href', url);
          }
          s.onload = typeof callback === 'function' ? function () {
            callback(s);
          } : function () {};
          document.getElementsByTagName('head')[0].appendChild(s);
        })();
      } catch (e) {}

      if (['js', 'css'].indexOf((ext || '').trim().toLowerCase()) >= 0) {
        return;
      }

      bypassCache = typeof bypassCache === 'boolean' ? bypassCache : false;

      // If a local reference is provided, complete the path.
      if (url.substr(0, 4) !== 'http') {
        var path = window.location.href.split('/');
        path.pop();
        url = path.join('/') + '/' + url;
      }

      // Use the cache if defined & not bypassed
      if (!bypassCache && this.importCache.hasOwnProperty(url)) {
        var doc = this.createElement(this.importCache[url]);
        callback && callback(doc.length === 1 ? doc[0] : doc);
        if (window.NGN.BUS) {
          window.NGN.BUS.emit('html.import', doc.length === 1 ? doc[0] : doc);
        }
        // console.warn('Used cached version of '+url)
        return;
      }

      // Retrieve the file content
      var me = this;
      this.get(url, function (res) {
        if (res.status !== 200) {
          return console.warn('Check the file path of the snippet that needs to be imported. ' + url + ' could not be found (' + res.status + ')');
        }

        var doc = me.createElement(res.responseText);
        me.importCache[url] = res.responseText;

        if (doc.length === 0) {
          console.warn(me.normalizeUrl(url) + ' import has no HTML tags.');
          callback && callback(res.responseText);
          if (window.NGN.BUS) {
            window.NGN.BUS.emit('html.import', res.responseText);
          }
        } else {
          var el = doc.length === 1 ? doc[0] : doc;
          callback && callback(el);
          if (window.NGN.BUS) {
            window.NGN.BUS.emit('html.import', el);
          }
        }
      });
    }

    /**
     * @method importTo
     * This helper method uses the #import method to retrieve an HTML
     * fragment and insert it into the specified DOM element. This is
     * the equivalent of using results of the #import to retrieve a
     * snippet, then doing a `target.appendChild(importedElement)`.
     * @param {string} url
     * The URL of remote HTML snippet.
     * @param {HTMLElement} target
     * The DOM element where the resulting code should be appended.
     * @param {string} callback
     * Returns the HTMLElement, which can be directly inserted into the DOM.
     * @param {HTMLElement} callback.element
     * The new DOM element/NodeList.
     */

  }, {
    key: 'importTo',
    value: function importTo(url, target, callback) {
      this.processImport(url, target, callback);
    }

    /**
     * @method importBefore
     * This helper method uses the #import method to retrieve an HTML
     * fragment and insert it into the DOM before the target element. This is
     * the equivalent of using results of the #import to retrieve a snippet,
     * then doing a `target.parentNode.insertBefore(importedElement, target)`.
     * @param {string} url
     * The URL of remote HTML snippet.
     * @param {HTMLElement} target
     * The DOM element where the resulting code should be appended.
     * @param {string} callback
     * Returns the HTMLElement/NodeList, which can be directly inserted into the DOM.
     * @param {HTMLElement} callback.element
     * The new DOM element/NodeList.
     */

  }, {
    key: 'importBefore',
    value: function importBefore(url, target, callback) {
      this.processImport(url, target, callback, true);
    }

    /**
     * @method predns
     * This notifies the browser domains which will be accessed at a later
     * time. This helps the browser resolve DNS inquiries quickly.
     * @param {string} domain
     * The domain to resolve.
     * @param {boolean} [crossorigin]
     * Set to `true` to identify the request as a cross origin request.
     * By default, NGN will compare the URL to the current URL in an
     * attempt to determine if the request is across origins.
     * @fires network-dns-prefetch
     * Fired when a pre-fetched DNS request is issued to the browser.
     */

  }, {
    key: 'predns',
    value: function predns(domain, cor) {
      this.prelink(window.location.protocol + '//' + domain, 'dns-prefetch', cor);
    }

    /**
     * @method preconnect
     * Tell the browser which remote resources will or may be used in the
     * future by issuing a `Preconnect`. This will resolve DNS (#predns), make the TCP
     * handshake, and negotiate TLS (if necessary). This can be done directly
     * in HTML without JS, but this method allows you to easily preconnect
     * a resource in response to a user interaction or NGN.BUS activity.
     * @param {string} url
     * The URL to preconnect to.
     * @param {boolean} [crossorigin]
     * Set to `true` to identify the request as a cross origin request.
     * By default, NGN will compare the URL to the current URL in an
     * attempt to determine if the request is across origins.
     * @fires network.preconnect
     * Fired when a preconnect is issued to the browser.
     */

  }, {
    key: 'preconnect',
    value: function preconnect(url, cor) {
      this.prelink(url, 'preconnect', cor);
    }

    /**
     * @method prefetch
     * Fetch a specific resource and cache it.
     * @param {string} url
     * URL of the resource to download and cache.
     * @param {boolean} [crossorigin]
     * Set to `true` to identify the request as a cross origin request.
     * By default, NGN will compare the URL to the current URL in an
     * attempt to determine if the request is across origins.
     * @fires network.prefetch
     * Fired when a prefetch is issued to the browser.
     */

  }, {
    key: 'prefetch',
    value: function prefetch(url, cor) {
      this.prelink(url, 'prefetch', cor);
    }

    /**
     * @method subresource
     * A prioritized version of #prefetch. This should be used
     * if the asset is required for the current page. Think of this
     * as "needed ASAP". Otherwise, use #prefetch.
     * @param {string} url
     * URL of the resource to download and cache.
     * @param {boolean} [crossorigin]
     * Set to `true` to identify the request as a cross origin request.
     * By default, NGN will compare the URL to the current URL in an
     * attempt to determine if the request is across origins.
     * @fires network.prefetch
     * Fired when a prefetch is issued to the browser.
     */

  }, {
    key: 'subresource',
    value: function subresource(url, cor) {
      this.prelink(url, 'subresource', cor);
    }

    /**
     * @method prerender
     * Prerender an entire page. This behaves as though a page is
     * opened in a hidden tab, then displayed when called. This is
     * powerful, but should only be used when there is absolute
     * certainty that the prerendered page will be needed. Otherwise
     * all of the assets are loaded for no reason (i.e. uselessly
     * consuming bandwidth).
     * @param {string} url
     * URL of the page to download and cache.
     * @param {boolean} [crossorigin]
     * Set to `true` to identify the request as a cross origin request.
     * By default, NGN will compare the URL to the current URL in an
     * attempt to determine if the request is across origins.
     * @fires network.prerender
     * Fired when a prerender is issued to the browser.
     */

  }, {
    key: 'prerender',
    value: function prerender(url, cor) {
      this.prelink(url, 'prerender', cor);
    }

    /**
     * @method template
     * Include a simple letiable replacement template and apply
     * values to it. This is always cached client side.
     * @param {string} url
     * URL of the template to retrieve.
     * @param {object} [letiables]
     * A key/value objct containing letiables to replace in
     * the template.
     * @param {function} callback
     * The callback receives a single argument with the HTMLElement/
     * NodeList generated by the template.
     */

  }, {
    key: 'template',
    value: function template(url, data, callback) {
      url = this.normalizeUrl(url);

      if (typeof data === 'function') {
        callback = data;
        data = {};
      }

      data = data || {};

      var me = this;
      var tpl = void 0;

      // Check the cache
      if (this.importCache.hasOwnProperty(url)) {
        tpl = this.importCache[url];
        return this.applyData(tpl, data, callback);
      }

      this.get(url, function (res) {
        var ext = null;
        try {
          ext = url.split('/').pop().split('?')[0].split('.').pop().toLowerCase();
        } catch (e) {}
        if (['js', 'css'].indexOf((ext || '').trim().toLowerCase()) >= 0) {
          console.warn('Cannot use a .' + ext + ' file as a template. Only HTML templates are supported.');
          return;
        }

        me.importCache[url] = res.responseText;
        me.applyData(res.responseText, data, callback);
      });
    }
  }]);

  return Network;
}();

NGN.NET = new Network();

/**
 * @class NGN.DOM.svg
 * Provides a way to easily manage SVG images within a document while
 * retaining the ability to style them with external CSS.
 * @singleton
 */
/* This file should be loaded in the <head>, not at the end of the <body>.
* By loading this script before the rest of the DOM, it will insert the
* FOUC (Flash of Unstyled Content) CSS into the page BEFORE unstyled SVG images
* are loaded. If this script is included in the <body>, the CSS will be loaded
* AFTER the SVG images are loaded, meaning they may display briefly before
* proper styling can be applied to the DOM.
*/

// Prevent FOUC
// (function () {
//   let ss = document.createElement('style')
//   let str = document.createTextNode('svg[src]{display:none}svg.loading{height:0px !important;width:0px !important}')
//   ss.appendChild(str)
//   document.head.appendChild(ss)
// })()
var fuoc = function fuoc() {
  var ss = document.createElement('style');
  var str = document.createTextNode('svg[src]{display:none}svg.loading{height:0px !important;width:0px !important}');
  ss.appendChild(str);
  document.head.appendChild(ss);
};
fuoc();

// SVG Controller
NGN.DOM = NGN.DOM || {};
NGN.DOM.svg = {};

Object.defineProperties(NGN.DOM.svg, {
  /**
   * @property {Object} _cache
   * A cache of SVG images.
   */
  _cache: NGN.private({}),

  /**
   * @method swap
   * Replace image tags with the SVG equivalent.
   * @param {HTMLElement|NodeList} imgs
   * The HTML element or node list containing the images that should be swapped out for SVG files.
   * @param {function} [callback]
   * Executed when the image swap is complete. There are no arguments passed to the callback.
   * @private
   */
  swap: NGN.privateconst(function (svgs, callback) {
    var me = this;
    for (var i = 0; i < svgs.length; i++) {
      var attr = svgs[i].attributes;
      var output = me._cache[svgs[i].getAttribute('src')];
      var attrs = [];

      try {
        attrs = /<svg(\s.*=[\"\'].*?[\"\'])?>/i.exec(output)[1].trim();
        var sep = /[\"\']\s/i.exec(attrs);
        sep = sep !== null ? sep[0] : '\" ';
        attrs = attrs.replace(new RegExp(sep, 'gi'), sep.replace(/\s/ig, ',')).split(',');
      } catch (e) {
        console.error(e);
      }

      attrs = Array.isArray(attrs) ? attrs : [attrs];

      var map = attrs.map(function (els) {
        return els.split('=')[0].trim().toLowerCase();
      });

      for (var x = 0; x < attr.length; x++) {
        var idx = map.indexOf(attr[x].name.toLowerCase());
        if (idx < 0) {
          attrs.push(attr[x].name + '="' + attr[x].value + '"');
        } else {
          attrs[idx] = attr[x].name + '="' + attr[x].value + '"';
        }
      }

      attrs = attrs.filter(function (a) {
        return a.split('=')[0].toLowerCase() !== 'src';
      });

      var svg = '<svg ' + attrs.join(' ') + '>';

      svgs[i].outerHTML = output.replace(/<svg.*?>/i, svg);
    }

    callback && callback();
  }),

  /**
   * @method id
   * @param  {string} url
   * Create an ID that can be used to reference an SVG symbol.
   * @return {string}
   * @private
   */
  id: NGN.privateconst(function (url) {
    return url.replace(/.*\:\/\/|[^A-Za-z0-9]|www/gi, '');
  }),

  /**
   * @method cleanCode
   * Captures all of the content between the <svg></svg> tag.
   * @param  {string} code
   * The code to clean up.
   * @return {string}
   * @private
   */
  cleanCode: NGN.privateconst(function (code) {
    try {
      return code.toString().trim().replace(/(\r\n|\n|\r)/gm, '').replace(/\s+/g, ' ').match(/\<svg.*\<\/svg\>/igm, '')[0];
    } catch (e) {
      return '';
    }
  }),

  /**
   * @method viewbox
   * Retrieves the viewbox attribute from the source code.
   * @param  {string} code
   * The code to extract the viewbox attribute from.
   * @return {string}
   * @private
   */
  viewbox: NGN.privateconst(function (code) {
    return (/(viewbox=["'])(.*?)(["'])/igm.exec(code.toString().trim())[2] || '0 0 100 100'
    );
  }),

  cache: NGN.privateconst(function (url, svg) {
    this._cache[url] = svg;
  }),

  fetchFile: NGN.privateconst(function (url, callback) {
    var _this5 = this;

    if (NGN.nodelike) {
      callback && callback(require('fs').readFileSync(require('path').join('.', url).replace('file://', '')).toString());
    } else {
      (function () {
        var me = _this5;
        NGN.NET.get(url, function (res) {
          callback && callback(res.status !== 200 ? new Error(res.responseText) : me.cleanCode(res.responseText));
        });
      })();
    }
  }),

  /**
   * @method update
   * Replace any <img src="*.svg"> with the SVG equivalent.
   * @param {HTMLElement|NodeList} section
   * The HTML DOM element to update. All children of this element will also be updated.
   * @param {function} callback
   * Execute this function after the update is complete.
   */
  update: NGN.const(function (section, callback) {
    if (typeof section === 'function') {
      callback = section;
      section = document.body;
    } else {
      section = section || document.body;
    }

    if (section.nodeName === '#text') {
      return;
    }

    var me = this;
    section = section.hasOwnProperty('length') === true ? NGN._splice(section) : [section];

    section.forEach(function (sec) {
      var imgs = sec.querySelectorAll('svg[src]');

      // Loop through images, prime the cache.
      for (var i = 0; i < imgs.length; i++) {
        me._cache[imgs[i].getAttribute('src')] = me._cache[imgs[i].getAttribute('src')] || null;
      }

      // Fetch all of the unrecognized svg files
      var unfetched = Object.keys(me._cache).filter(function (url) {
        return me._cache[url] === null;
      });

      var remaining = unfetched.length;
      unfetched.forEach(function (url) {
        me.fetchFile(url, function (content) {
          if (!(content instanceof Error)) {
            me.cache(url, content);
          }
          remaining--;
        });
      });

      // Monitor for download completion
      var monitor = setInterval(function () {
        if (remaining === 0) {
          clearInterval(monitor);
          me.swap(imgs, callback);
        }
      }, 5);
    });
  })
});

/**
 * @layer SANITY
 * The sanity layer adds dummy checks around methods to make sure they are being called correctly throughout the application.
 * It is designed for development, and not meant to be included in production.
 */
NGN.SANITY = {};

Object.defineProperties(NGN.SANITY, {
  /**
   * @method isValid
   * Checks whether or not a method has been called correctly.
   * @private
   * @param {String} methodName The associated method name
   * @param {Array} args The arguments provided with the original method call
   * @returns {Boolean} Whether or not the method has been called correctly
   *
   */
  isValid: NGN.privateconst(function (methodName, args) {
    switch (methodName) {
      case 'EE.emit':
        if (!args.length) {
          return this.warn('emit() called without any arguments. Did you mean to specify an event and payload?');
        }
        break;
      case 'EE.listenerCount':
        if (!args.length) {
          return this.warn('listenerCount() called without any arguments. Did you mean to specify an event?');
        }
        break;
      case 'EE.on':
        if (!args.length) {
          return this.warn('on() called without any arguments. Did you mean to specify an eventName and callback?');
        }
        break;
      case 'EE.prependListener':
        if (!args.length) {
          return this.warn('prependListener() called without any arguments. Did you mean to specify an eventName and callback?');
        }
        break;
      case 'EE.once':
        if (!args.length) {
          return this.warn('once() called without any arguments. Did you mean to specify an eventName and callback?');
        }
        break;
      case 'EE.prependOnceListener':
        if (!args.length) {
          return this.warn('prependOnceListener() called without any arguments. Did you mean to specify an eventName and callback?');
        }
        break;
      case 'EE.off':
        if (!args.length) {
          return this.warn('off() called without any arguments. Did you mean to specify an eventName?');
        }
        break;
      case 'EE.onceoff':
        if (!args.length) {
          return this.warn('onceoff() called without any arguments. Did you mean to specify an eventName?');
        }
        break;
      case 'EE.getAllEvents':
        if (!args.length) {
          return this.warn('getAllEvents() called without any arguments. Did you mean to specify an eventName?');
        }
        break;
    }
    return true;
  }),

  warn: NGN.privateconst(function (msg) {
    console.warn(msg);
    return false;
  })
});

var original = {
  NGN: {
    EventEmitter: {
      emit: NGN.EventEmitter.prototype.emit,
      listenerCount: NGN.EventEmitter.prototype.listenerCount,
      on: NGN.EventEmitter.prototype.on,
      prependListener: NGN.EventEmitter.prototype.prependListener,
      once: NGN.EventEmitter.prototype.once,
      prependOnceListener: NGN.EventEmitter.prototype.prependOnceListener,
      off: NGN.EventEmitter.prototype.off,
      onceoff: NGN.EventEmitter.prototype.onceoff,
      getAllEvents: NGN.EventEmitter.prototype.getAllEvents
    }
  }
};

NGN.EventEmitter.prototype.emit = function () {
  NGN.SANITY.isValid('EE.emit', arguments) ? original.NGN.EventEmitter.emit.apply(this, arguments) : null;
};

NGN.EventEmitter.prototype.listenerCount = function () {
  return NGN.SANITY.isValid('EE.listenerCount', arguments) ? original.NGN.EventEmitter.listenerCount.apply(this, arguments) : 0;
};

NGN.EventEmitter.prototype.on = function () {
  NGN.SANITY.isValid('EE.on', arguments) ? original.NGN.EventEmitter.on.apply(this, arguments) : null;
};

NGN.EventEmitter.prototype.prependListener = function () {
  NGN.SANITY.isValid('EE.prependListener', arguments) ? original.NGN.EventEmitter.prependListener.apply(this, arguments) : null;
};

NGN.EventEmitter.prototype.once = function () {
  NGN.SANITY.isValid('EE.once', arguments) ? original.NGN.EventEmitter.once.apply(this, arguments) : null;
};

NGN.EventEmitter.prototype.prependOnceListener = function () {
  NGN.SANITY.isValid('EE.prependOnceListener', arguments) ? original.NGN.EventEmitter.prependOnceListener.apply(this, arguments) : null;
};

NGN.EventEmitter.prototype.off = function () {
  NGN.SANITY.isValid('EE.off', arguments) ? original.NGN.EventEmitter.off.apply(this, arguments) : null;
};

NGN.EventEmitter.prototype.onceoff = function () {
  NGN.SANITY.isValid('EE.onceoff', arguments) ? original.NGN.EventEmitter.onceoff.apply(this, arguments) : null;
};

NGN.EventEmitter.prototype.getAllEvents = function () {
  return NGN.SANITY.isValid('EE.getAllEvents', arguments) ? original.NGN.EventEmitter.getAllEvents.apply(this, arguments) : [];
};

'use strict';

NGN.DATA = NGN.DATA || {};
NGN.DATA.util = {};

Object.defineProperties(NGN.DATA.util, {
  // CRC table for checksum (cached)
  crcTable: NGN.private(null),

  /**
   * @method makeCRCTable
   * Generate the CRC table for checksums. This is a fairly complex
   * operation that should only be executed once and cached for
   * repeat use.
   * @private
   */
  makeCRCTable: NGN.privateconst(function () {
    var c = void 0;
    var crcTable = [];
    for (var n = 0; n < 256; n++) {
      c = n;
      for (var k = 0; k < 8; k++) {
        c = c & 1 ? 0xEDB88320 ^ c >>> 1 : c >>> 1;
      }
      crcTable[n] = c;
    }
    return crcTable;
  }),

  /**
   * @method checksum
   * Create the checksum of the specified string.
   * @param  {string} content
   * The content to generate a checksum for.
   * @return {string}
   * Generates a checksum value.
   */
  checksum: NGN.const(function (str) {
    var crcTable = this.crcTable || (this.crcTable = this.makeCRCTable());
    var crc = 0 ^ -1;

    for (var i = 0; i < str.length; i++) {
      crc = crc >>> 8 ^ crcTable[(crc ^ str.charCodeAt(i)) & 0xFF];
    }

    return (crc ^ -1) >>> 0;
  }),

  /**
   * @method GUID
   * Generate  a globally unique identifier.
   *
   * This is a "fast" GUID generator, designed to work in the browser.
   * The likelihood of an ID collision is 1:3.26x10^15 (1 in 3.26 Quadrillion),
   * and it will generate the ID between approximately 105ms (Desktop) and 726ms
   * (Android) as of May 2016. This code came from StackOverflow, courtesy of
   * an answer from Jeff Ward.
   * @return {string}
   * Returns a V4 GUID.
   */
  GUID: NGN.const(function () {
    var lut = [];
    for (var i = 0; i < 256; i++) {
      lut[i] = (i < 16 ? '0' : '') + i.toString(16);
    }

    var d0 = Math.random() * 0xffffffff | 0;
    var d1 = Math.random() * 0xffffffff | 0;
    var d2 = Math.random() * 0xffffffff | 0;
    var d3 = Math.random() * 0xffffffff | 0;

    return lut[d0 & 0xff] + lut[d0 >> 8 & 0xff] + lut[d0 >> 16 & 0xff] + lut[d0 >> 24 & 0xff] + '-' + lut[d1 & 0xff] + lut[d1 >> 8 & 0xff] + '-' + lut[d1 >> 16 & 0x0f | 0x40] + lut[d1 >> 24 & 0xff] + '-' + lut[d2 & 0x3f | 0x80] + lut[d2 >> 8 & 0xff] + '-' + lut[d2 >> 16 & 0xff] + lut[d2 >> 24 & 0xff] + lut[d3 & 0xff] + lut[d3 >> 8 & 0xff] + lut[d3 >> 16 & 0xff] + lut[d3 >> 24 & 0xff];
  })
});

'use strict';

/**
 * @class NGN.DATA.Model
 * Represents a data model/record.
 * @extends NGN.Class
 * @fires field.update
 * Fired when a datafield value is changed.
 * @fires field.create
 * Fired when a datafield is created.
 * @fires field.remove
 * Fired when a datafield is deleted.
 * @fires field.invalid
 * Fired when an invalid value is detected in an data field.
 */

var Model = function (_NGN$EventEmitter) {
  _inherits(Model, _NGN$EventEmitter);

  function Model(config) {
    _classCallCheck(this, Model);

    config = config || {};

    var _this6 = _possibleConstructorReturn(this, Object.getPrototypeOf(Model).call(this));

    var me = _this6;

    Object.defineProperties(_this6, {
      /**
       * @cfg {String} [idAttribute='id']
       * Setting this allows an attribute of the object to be used as the ID.
       * For example, if an email is the ID of a user, this would be set to
       * `email`.
       */
      idAttribute: NGN.privateconst(config.idAttribute || 'id'),

      /**
       * @cfg {object} fields
       * A private object containing the data fields of the model, including
       * validators & default values.
       * ```js
       * fields: {
       *   fieldname: {
       *     required: true,
       *     type: String,
       *     default: 'default field value'
       *   },
       *   fieldname2: null // Uses default field config (default value is null)
       * }
       * ```
       */
      /**
       * @datafield {string} [id=null]
       * The unique ID of the person.
       */
      fields: NGN.private(config.fields || {
        id: {
          required: true,
          type: String,
          'default': config.id || null
        }
      }),

      /**
       * @cfg {object|NGN.DATA.Model|NGN.DATA.Store} relationships
       * An object containing fields that reference another data set. This can
       * contain a configuration, an NGN.DATA.Model, or an NGN.DATA.Store.
       * ```js
       * // Metadata
       * relationships: {
       *   fieldname: {
       *     required: true,
       *     ref: MyModel
       *   },
       *   fieldname2: {
       *     required: false,
       *     ref: MyDataStore,
       *     default: {}
       *   }
       * }
       * // or
       * relationships: {
       *   fieldname: MyModel
       * }
       * ```
       * Using the second syntax assumes the field **is required**.
       *
       * It is then possible to reference a join by the fieldname. For example:
       *
       * ```js
       * console.log(MyModel.fieldname.data) // Displays the MyModel data.
       * ```
       * @type {[type]}
       */
      joins: NGN.private(config.relationships || {}),

      /**
       * @cfg {Object} virtuals
       * A private object containing virtual data attributes and generated data.
       * Virtual datafields are derived values. They are not part of the
       * underlying data.
       *
       * **Example:**
       *
       * ```js
       * let Model = new NGN.DATA.Model({
       *   fields: {
       *     dateOfBirth: null
       *   },
       *   virtuals: {
       *     age: function () {
       *       return YearsApart(new Date(), this.dateOfBirth)
       *     }
       *   }
       * })
       * ```
       * The `age` example above compares the `dateOfBirth` field
       * to the current date, expecting a numeric response.
       * @private
       */
      virtuals: NGN.private(config.virtuals || {}),

      /**
       * @property {Object}
       * The validation rules used to verify data integrity when persisting to a datasource.
       * @private
       */
      validators: NGN.private({}),

      /**
       * @cfgproperty {boolean} [validation=true]
       * Toggle data validation using this.
       */
      validation: NGN.public(NGN.coalesce(config.validation, true)),

      /**
       * @property {Boolean}
       * Indicates the model is new or does not exist according to the persistence store.
       * @private
       * @readonly
       */
      isNew: NGN.private(true),

      /**
       * @property {Boolean}
       * Indicates the model has been destroyed/deleted and should no longer exist.
       * @private
       * @readonly
       */
      isDestroyed: NGN.private(false),

      /**
       * @property {String} [oid=null]
       * The raw object ID, which is either the #id or #idAttribute depending
       * on how the object is configured.
       * @private
       */
      oid: NGN.private(config[_this6.idAttribute] || null),

      /**
       * @cfg {boolean} [autoid=false]
       * If the NGN.DATA.Model#idAttribute/id is not provided for a record,
       * unique ID will be automatically generated for it. This means there
       * will not be a `null` ID.
       *
       * An NGN.DATA.Store using a model with this set to `true` will never
       * have a duplicate record, since the #id or #idAttribute will always
       * be unique.
       */
      autoid: NGN.public(NGN.coalesce(config.autoid, false)),

      benchmark: NGN.private(null),

      /**
       * @cfgproperty {Date|Number} [expires]
       * When this is set to a date/time, the model record will be marked
       * as expired at the specified time/date. If a number is specified
       * (milliseconds), the record will be marked as expired after the
       * specified time period has elapsed. When a record/model is marked as
       * "expired", it triggers the `expired` event. By default, expired
       * records/models within an NGN.DATA.Store will be removed from the store.
       *
       * Setting this to any value less than `0` disables expiration.
       * @fires expired
       * Triggered when the model/record expires.
       */
      expiration: NGN.private(null),

      // Used to hold a setTimeout method for expiration events.
      expirationTimeout: NGN.private(null),

      // Placeholder expiration flag.
      hasExpired: NGN.private(false),

      // Used to prevent expiration of a record.
      ignoreTTL: NGN.private(false),

      /**
       * @property {Number} created
       * The date/time when the model is created. This is represented as
       * the number of milliseconds since the epoch (Jan 1, 1970, 00:00:00 UTC).
       * @private
       */
      createDate: NGN.privateconst(Date.now()),

      /**
       * @method setUnmodified
       * This method forces the model to be viewed as unmodified, as though
       * the record was just loaded from it's source. This method should only
       * be used when custom loading data. The #load method automatically
       * invokes this when record data is loaded. This also clears the history,
       * just as if the record is brand new.
       * @private
       */
      setUnmodified: NGN.privateconst(function () {
        this.benchmark = this.checksum;
        this.changelog = [];
      }),

      /**
       * @cfg {Boolean} [allowInvalidSave=false]
       * Set this to true to allow a save even though not all of the data properties
       * pass validation tests.
       */
      allowInvalidSave: NGN.private(NGN.coalesce(config.allowInvalidSave, false)),

      /**
       * @cfg {Boolean} [disableDataValidation=false]
       * Only used when #save is called. Setting this to `true` will bypass data validation.
       */
      disableDataValidation: NGN.private(NGN.coalesce(config.disableDataValidation, false)),

      invalidDataAttributes: NGN.private([]),

      initialDataAttributes: NGN.private([]),

      /**
       * @property {array} changelog
       * An ordered array of changes made to the object data properties.
       * This cannot be changed manually. Instead, use #history
       * and #undo to manage this list.
       * @private
       */
      changelog: NGN.private([]),

      _nativeValidators: NGN.privateconst({
        min: function min(minimum, value) {
          if (NGN.typeof(value) === 'array') {
            return value.length >= minimum;
          }

          if (NGN.typeof(value) === 'number') {
            return value >= minimum;
          }

          if (NGN.typeof(value) === 'string') {
            return value.trim().length >= minimum;
          }

          if (NGN.typeof(value) === 'date') {
            return value.parse() >= minimum.parse();
          }

          return false;
        },

        max: function max(maximum, value) {
          if (NGN.typeof(value) === 'array') {
            return value.length <= maximum;
          }

          if (NGN.typeof(value) === 'number') {
            return value <= maximum;
          }

          if (NGN.typeof(value) === 'string') {
            return value.trim().length <= maximum;
          }

          if (NGN.typeof(value) === 'date') {
            return value.parse() <= maximum.parse();
          }

          return false;
        },

        enum: function _enum(valid, value) {
          return valid.indexOf(value) >= 0;
        },

        required: function required(field, value) {
          return me.hasOwnProperty(field) && me[value] !== null;
        }
      }),

      /**
       * @cfgproperty {Object} dataMap
       * An object mapping model attribute names to data storage field names.
       *
       * _Example_
       * ```
       * {
       *   father: 'dad',
       *	 email: 'eml',
       *	 image: 'img',
       *	 displayName: 'dn',
       *	 firstName: 'gn',
       *	 lastName: 'sn',
       *	 middleName: 'mn',
       *	 gender: 'sex',
       *	 dob: 'bd',
       * }
       * ```
       */
      _dataMap: NGN.private(config.dataMap || null),
      _reverseDataMap: NGN.public(null),

      /**
       * @property {object} raw
       * The raw data.
       * @private
       */
      raw: NGN.private({}),

      /**
       * @property {object} rawjoins
       * The related data models/stores.
       * @private
       */
      rawjoins: NGN.private({}),

      _store: NGN.private(null)
    });

    // Make sure there aren't duplicate field names defined (includes joins)
    var allfields = _this6.datafields.concat(_this6.virtualdatafields).concat(_this6.relationships).filter(function (key, i, a) {
      return a.indexOf(key) !== i;
    });

    if (allfields.length > 0) {
      throw new Error('Duplicate field names exist: ' + allfields.join(', ') + '. Unique fieldnames are required for data fields, virtuals, and relationship fields.');
    }

    // Make sure an ID reference is available.
    if (!_this6.fields.hasOwnProperty('id')) {
      config.fields.id = {
        required: true,
        type: String,
        'default': config.id || null
      };
    }

    // Add fields
    Object.keys(_this6.fields).forEach(function (field) {
      if (_typeof(me.fields[field]) !== 'object' && me.fields[field] !== null) {
        me.fields[field] = {
          required: true,
          type: me.fields[field],
          default: null,
          name: field
        };
      }
      me.addField(field, true);
    });

    // Add virtuals
    Object.keys(_this6.virtuals).forEach(function (v) {
      Object.defineProperty(me, v, NGN.get(function () {
        return me.virtuals[v].apply(me);
      }));
    });

    // Add relationships
    Object.keys(_this6.joins).forEach(function (field) {
      me.addRelationshipField(field, me.joins[field], true);
    });

    var events = ['field.update', 'field.create', 'field.remove', 'field.invalid', 'validator.add', 'validator.remove', 'relationship.create', 'relationship.remove', 'expired'];

    if (NGN.BUS) {
      events.forEach(function (eventName) {
        me.on(eventName, function () {
          var args = NGN.slice(arguments);
          args.push(me);
          args.unshift(eventName);
          NGN.BUS.emit.apply(NGN.BUS, args);
        });
      });
    }

    // If an expiration is defined, set it.
    if (config.hasOwnProperty('expires')) {
      _this6.expires = config.expires;
    }
    return _this6;
  }

  _createClass(Model, [{
    key: 'expire',


    /**
     * @method expire
     * Forcibly expire the model/record.
     * @param {Date|Number} [duration]
     * Optionally provide a new expiration time. This is an alternative
     * way of setting #expires. If no value is specified, the record
     * will immediately be marked as `expired`.
     */
    value: function expire(duration) {
      if (this.expired) {
        return;
      }

      if (duration) {
        this.expires = duration;
        return;
      }

      if (this.ignoreTTL) {
        return;
      }

      // Force expiration.
      this.hasExpired = true;

      clearTimeout(this.expirationTimeout);

      this.emit('expired', this);
    }

    /**
     * @method disableExpiration
     * Do not expire this model/record.
     */

  }, {
    key: 'disableExpiration',
    value: function disableExpiration() {
      this.expires = -1;
    }

    /**
      * @method addValidator
      * Add or update a validation rule for a specific model property.
      * @param {String} field
      * The data field to test.
      * @param {Function/String[]/Number[]/Date[]/RegExp/Array} validator
      * The validation used to test the property value. This should return
      * `true` when the data is valid and `false` when it is not.
      *
      * * When this is a _function_, the value is passed to it as an argument.
      * * When this is a _String_, the value is compared for an exact match (case sensitive)
      * * When this is a _Number_, the value is compared for equality.
      * * When this is a _Date_, the value is compared for exact equality.
      * * When this is a _RegExp_, the value is tested and the results of the RegExp#test are used to validate.
      * * When this is an _Array_, the value is checked to exist in the array, regardless of data type. This is treated as an `enum`.
      * * When this is _an array of dates_, the value is compared to each date for equality.
      * @fires validator.add
      */

  }, {
    key: 'addValidator',
    value: function addValidator(property, validator) {
      if (!this.hasOwnProperty(property)) {
        console.warn('No validator could be create for %c' + property + '%c. It is not an attribute of %c' + this.type + '%c.', NGN.css, '', NGN.css, '');
        return;
      }

      switch (typeof validator === 'undefined' ? 'undefined' : _typeof(validator)) {
        case 'function':
          this.validators[property] = this.validators[property] || [];
          this.validators[property].push(validator);
          this.emit('validator.add', property);
          break;
        case 'object':
          if (Array.isArray(validator)) {
            this.validators[property] = this.validators[property] || [];
            this.validators[property].push(function (value) {
              return validator.indexOf(value) >= 0;
            });
            this.emit('validator.add', property);
          } else if (validator.test) {
            // RegExp
            this.validators[property] = this.validators[property] || [];
            this.validators[property].push(function (value) {
              return validator.test(value);
            });
            this.emit('validator.add', property);
          } else {
            console.warn('No validator could be created for %c' + property + '%c. The validator appears to be invalid.', NGN.css, '');
          }
          break;
        case 'string':
        case 'number':
        case 'date':
          this.validators[property] = this.validators[property] || [];
          this.validators[property].push(function (value) {
            return value === validator;
          });
          this.emit('validator.add', property);
          break;
        default:
          console.warn('No validator could be create for %c' + property + '%c. The validator appears to be invalid.', NGN.css, '');
      }
    }

    /**
      * @method removeValidator
      * Remove a data validator from the object.
      * @param {String} attribute
      * The name of the attribute to remove from the validators.
      * @fires validator.remove
      */

  }, {
    key: 'removeValidator',
    value: function removeValidator(attribute) {
      if (this.validators.hasOwnProperty(attribute)) {
        delete this.validators[attribute];
        this.emit('validator.remove', attribute);
      }
    }

    /**
      * @method validate
      * Validate one or all attributes of the data.
      * @param {String} [attribute=null]
      * Validate a specific attribute. By default, all attributes are tested.
      * @private
      * @returns {Boolean}
      * Returns true or false based on the validity of data.
      */

  }, {
    key: 'validate',
    value: function validate(attribute) {
      // If validation is turned off, treat everything as valid.
      if (!this.validation) {
        return true;
      }
      var me = this;

      // Single Attribute Validation
      if (attribute) {
        if (this.validators.hasOwnProperty(attribute)) {
          for (var i = 0; i < this.validators[attribute].length; i++) {
            if (!me.validators[attribute][i].apply(me, [me[attribute]])) {
              me.invalidDataAttributes.indexOf(attribute) < 0 && me.invalidDataAttributes.push(attribute);
              return false;
            } else {
              me.invalidDataAttributes = me.invalidDataAttributes.filter(function (attr) {
                return attribute !== attr;
              });
            }
          }

          if (!this.validateDataType(attribute)) {
            this.invalidDataAttributes.push(attribute);
            return false;
          }
        }

        return true;
      }

      // Validate data type of each attribute
      this.datafields.forEach(function (field) {
        me.validate(field);
      });
    }

    /**
     * @method validateDataType
     * Indicates the data types match.
     * @param {string} fieldname
     * Name of the field whose data should be validated.
     * @private
     * @return {boolean}
     */

  }, {
    key: 'validateDataType',
    value: function validateDataType(field) {
      var fieldType = NGN.typeof(this[field]);
      var expectedType = NGN.typeof(this.fields[field].type);

      if (fieldType !== 'null') {
        return fieldType === expectedType;
      }

      if (this[field] === null && this.fields[field].required) {
        if (this.autoid && field === this.idAttribute) {
          return true;
        }

        return false;
      }

      return true;
    }

    /**
     * @method getRelationshipField
     * Provides specific detail/configuration about a join/relationship.
     * @param {String} fieldname
     * The name of the field.
     * @returns {Object}
     */

  }, {
    key: 'getRelationshipField',
    value: function getRelationshipField(fieldname) {
      return this.joins[fieldname];
    }

    /**
     * @method hasRelationship
     * Indicates a data join exists.
     * @param {String} fieldname
     * The name of the data field.
     * @returns {Boolean}
     */

  }, {
    key: 'hasRelationship',
    value: function hasRelationship(fieldname) {
      return this.joins.hasOwnProperty(fieldname);
    }

    /**
       * @method getDataField
       * Provides specific detail/configuration about a field.
       * @param {String} fieldname
       * The name of the data field.
       * @returns {Object}
       */

  }, {
    key: 'getDataField',
    value: function getDataField(fieldname) {
      return this.fields[fieldname];
    }

    /**
     * @method hasDataField
     * Indicates a data field exists.
     * @param {String} fieldname
     * The name of the data field.
     * @returns {Boolean}
     */

  }, {
    key: 'hasDataField',
    value: function hasDataField(fieldname) {
      return this.fields.hasOwnProperty(fieldname);
    }

    /**
      * @method serialize
      * Creates a JSON data object with no functions. Only uses enumerable attributes of the object by default.
      * Specific data values can be included/excluded using #enumerableProperties & #nonEnumerableProperties.
      *
      * Any object property that begins with a special character will be ignored by default. Functions & Setters are always
      * ignored. Getters are evaluated recursively until a simple object type is found or there are no further nested attributes.
      *
      * If a value is an instance of NGN.model.Model (i.e. a nested model or array of models), reference string is returned in the data.
      * The model itself can be returned using #getXRef.
      * @param {Object} [obj]
      * Defaults to this object.
      * @protected
      */

  }, {
    key: 'serialize',
    value: function serialize(obj) {
      var _obj = obj || this.raw;
      var rtn = {};

      for (var key in _obj) {
        _obj.nonEnumerableProperties = _obj.nonEnumerableProperties || '';
        if (this.fields.hasOwnProperty(key)) {
          key = key === 'id' ? this.idAttribute : key;
          if (_obj.hasOwnProperty(key) && _obj.nonEnumerableProperties.indexOf(key) < 0 && /^[a-z0-9 ]$/.test(key.substr(0, 1)) || _obj[key] !== undefined && _obj.enumerableProperties.indexOf(key) >= 0) {
            var dsc = Object.getOwnPropertyDescriptor(_obj, key);
            if (!dsc.set) {
              // Handle everything else
              switch (_typeof(dsc.value)) {
                case 'function':
                  // Support date & regex proxies
                  if (dsc.value.name === 'Date') {
                    rtn[key] = _obj[key].refs.toJSON();
                  } else if (dsc.value.name === 'RegExp') {
                    rtn[key] = dsc.value();
                  }
                  break;
                case 'object':
                  // Support array proxies
                  if (_obj[key] instanceof Array && !Array.isArray(_obj[key])) {
                    _obj[key] = _obj[key].slice(0);
                  }

                  rtn[key] = _obj[key];
                  break;
                default:
                  rtn[key] = _obj[key];
                  break;
              }
            }
          }
        }
      }

      var me = this;
      this.relationships.forEach(function (r) {
        rtn[r] = me.rawjoins[r].data;
      });

      return rtn;
    }

    /**
     * @method addField
     * Add a data field after the initial model definition.
     * @param {string} fieldname
     * The name of the field.
     * @param {object} [fieldConfiguration=null]
     * The field configuration (see cfg#fields for syntax).
     * @param {boolean} [suppressEvents=false]
     * Set to `true` to prevent events from firing when the field is added.
     */

  }, {
    key: 'addField',
    value: function addField(field, fieldcfg, suppressEvents) {
      if (typeof fieldcfg === 'boolean') {
        suppressEvents = fieldcfg;
        fieldcfg = null;
      }
      suppressEvents = suppressEvents !== undefined ? suppressEvents : false;
      var me = this;
      var cfg = null;

      if (field.toLowerCase() !== 'id') {
        if ((typeof field === 'undefined' ? 'undefined' : _typeof(field)) === 'object') {
          if (!field.name) {
            throw new Error('Cannot create data field. The supplied configuration does not contain a unique data field name.');
          }

          cfg = field;
          field = cfg.name;
          delete cfg.name;
        }

        if (me[field] !== undefined) {
          try {
            var source = NGN.stack.pop();
            console.warn('%c' + field + '%c data field defined multiple times (at %c' + source.path + '%c). Only the last defintion will be used.', NGN.css, '', NGN.css, '');
          } catch (e) {
            console.warn('%c' + field + '%c data field defined multiple times. Only the last definition will be used.', NGN.css, '', NGN.css, '');
          }

          delete me[field];
        }

        // Create the data field as an object attribute & getter/setter
        me.fields[field] = cfg || me.fields[field] || {};
        me.fields[field].required = NGN.coalesce(me.fields[field].required, false);

        if (!me.fields[field].hasOwnProperty('type')) {
          if (me.fields[field].hasOwnProperty('default')) {
            var type = NGN.typeof(me.fields[field].default);
            type = type.charAt(0).toUpperCase() + type.slice(1);
            me.fields[field].type = eval(type);
          }
        }
        me.fields[field].type = NGN.coalesce(me.fields[field].type, String);
        if (field === me.idAttribute && me.autoid === true) {
          me.fields[field].type = String;
          me.fields[field]['default'] = NGN.DATA.util.GUID();
        } else {
          me.fields[field]['default'] = me.fields[field]['default'] || null;
        }
        me.raw[field] = me.fields[field]['default'];
        me[field] = me.raw[field];

        Object.defineProperty(me, field, {
          get: function get() {
            return me.raw[field];
          },
          set: function set(value) {
            var old = me.raw[field];
            var wasInvalid = !me.validate(field);

            me.raw[field] = value;

            var c = {
              action: 'update',
              field: field,
              old: old,
              new: me.raw[field]
            };

            this.changelog.push(c);
            this.emit('field.update', c);
            this.emit('field.update.' + field, c);

            // If the field is invalid, fire event.
            if (!me.validate(field)) {
              me.emit('field.invalid', {
                field: field
              });
            } else if (wasInvalid) {
              // If the field BECAME valid (compared to prior value),
              // emit an event.
              me.emit('field.valid', {
                field: field
              });
            }
          }
        });

        if (!suppressEvents) {
          var c = {
            action: 'create',
            field: field
          };
          this.changelog.push(c);
          this.emit('field.create', c);
        }

        // Add field validators
        if (me.fields.hasOwnProperty(field)) {
          if (me.fields[field].hasOwnProperty('pattern')) {
            me.addValidator(field, me.fields[field].pattern);
          }
          ['min', 'max', 'enum'].forEach(function (v) {
            if (me.fields[field].hasOwnProperty(v)) {
              me.addValidator(field, function (val) {
                return me._nativeValidators[v](me.fields[field][v], val);
              });
            }
          });
          if (me.fields[field].hasOwnProperty('required')) {
            if (me.fields[field].required) {
              me.addValidator(field, function (val) {
                return me._nativeValidators.required(field, val);
              });
            }
          }
          if (me.fields[field].hasOwnProperty('validate')) {
            if (typeof me.fields[field].validate === 'function') {
              me.addValidator(field, function (val) {
                return me.fields[field].validate.apply(me, [val]);
              });
            } else {
              var _source = NGN.stack.pop();
              console.warn('Invalid custom validation function (in %c' + _source.path + '%c). The value passed to the validate attribute must be a function.', NGN.css, '');
            }
          }
        }
      } else if (me.id === null && me.autoid) {
        me.id = NGN.DATA.util.GUID();
      }
    }

    /**
     * @method addVirtual
     * Add a virtual field dynamically.
     * @param {string} name
     * The name of the attribute to add.
     * @param {function} handler
     * The synchronous method (or generator) that produces
     * the desired output.
     */

  }, {
    key: 'addVirtual',
    value: function addVirtual(name, fn) {
      var me = this;
      Object.defineProperty(this, name, {
        get: function get() {
          return fn.apply(me);
        }
      });
    }

    /**
     * @method addRelationshipField
     * Join another model dynamically.
     * @param {string} name
     * The name of the field to add.
     * @param {Object|NGN.DATA.Model} config
     * The configuration or data model type. This follows the same syntax
     * defined in the #joins attribute.
     * @param {boolean} [suppressEvents=false]
     * Set to `true` to prevent events from firing when the field is added.
     */

  }, {
    key: 'addRelationshipField',
    value: function addRelationshipField(name, cfg, suppressEvents) {
      suppressEvents = suppressEvents !== undefined ? suppressEvents : false;

      if (this.rawjoins.hasOwnProperty(name) || this.fields.hasOwnProperty(name) || this.hasOwnProperty(name)) {
        throw new Error(name + ' already exists. It cannot be added to the model again.');
      }

      if (typeof cfg === 'function' || (typeof cfg === 'undefined' ? 'undefined' : _typeof(cfg)) === 'object' && !cfg.hasOwnProperty('type')) {
        cfg = {
          type: cfg
        };
      }

      if (!cfg.type) {
        throw new Error('Configuration has no reference! The reference must be an NGN.DATA.Model or NGN.DATA.Store.');
      }

      cfg.required = NGN.coalesce(cfg.required, true);
      cfg.default = cfg.default || null;

      var me = this;
      var entityType = 'model';

      if (cfg.type instanceof NGN.DATA.Store) {
        entityType = 'store';
      } else if (NGN.typeof(cfg.type) === 'array') {
        if (cfg.type.length === 0) {
          throw new Error(name + ' cannot be an empty store. A model must be provided.');
        }

        entityType = 'collection';
      } else if (_typeof(cfg.type) === 'object') {
        if (cfg.type.model) {
          entityType = 'store';
        }
      }

      if (entityType === 'store') {
        var storeCfg = {};
        if (cfg.type instanceof NGN.DATA.Store) {
          this.rawjoins[name] = cfg.type;
          storeCfg = null;
        } else if (cfg.type.model) {
          storeCfg = cfg.type;
        } else {
          throw new Error('Nested store configuration is invalid or was not recognized.');
        }

        if (storeCfg !== null) {
          this.rawjoins[name] = new NGN.DATA.Store(storeCfg);
        }
        this.applyStoreMonitor(name);
      } else if (entityType === 'collection') {
        this.rawjoins[name] = new NGN.DATA.Store({
          model: cfg.type[0]
        });
        this.applyStoreMonitor(name);
      } else if (!cfg.type.data) {
        this.rawjoins[name] = cfg.default !== null ? new cfg.type(cfg.default) : new cfg.type(); // eslint-disable-line new-cap
        this.applyModelMonitor(name);
      } else if (cfg.type.data) {
        this.rawjoins[name] = cfg.type;
        this.applyStoreMonitor(name);
      } else {
        throw new Error('Nested store configuration is invalid or was not recognized.');
      }

      Object.defineProperty(this, name, {
        enumerable: true,
        get: function get() {
          return me.rawjoins[name];
        }
      });

      if (!suppressEvents) {
        var c = {
          action: 'create',
          field: name
        };
        this.changelog.push(c);
        this.emit('relationship.create', c);
      }
    }

    /**
     * @method applyModelMonitor
     * Applies event handlers for bubbling model events.
     * @param {string} field
     * The relationship field name.
     * @private
     */

  }, {
    key: 'applyModelMonitor',
    value: function applyModelMonitor(name) {
      var model = this.rawjoins[name];
      var me = this;

      model.on('field.update', function (delta) {
        var payload = {
          action: 'update',
          field: name + '.' + delta.field,
          old: delta.old,
          new: delta.new,
          join: true,
          originalEvent: {
            event: 'field.update',
            record: model
          }
        };

        me.emit('field.update', payload);
        me.emit('field.update.' + name + '.' + delta.field, payload);
      });

      model.on('field.create', function (delta) {
        var payload = {
          action: 'update',
          field: name + '.' + delta.field,
          old: null,
          new: null,
          join: true,
          originalEvent: {
            event: 'field.create',
            record: model
          }
        };

        me.emit('field.update', payload);
        me.emit('field.update.' + name + '.' + delta.field, payload);
      });

      model.on('field.remove', function (delta) {
        var payload = {
          action: 'update',
          field: name + '.' + delta.field,
          old: delta.value,
          new: null,
          join: true,
          originalEvent: {
            event: 'field.remove',
            record: model
          }
        };

        me.emit('field.update', payload);
        me.emit('field.update.' + name + '.' + delta.field, payload);
      });

      model.on('field.invalid', function (data) {
        me.emit('field.invalid');
        me.emit('field.invalid.' + name + '.' + data.field);
      });

      model.on('field.valid', function (data) {
        me.emit('field.valid');
        me.emit('field.valid.' + name + '.' + data.field);
      });
    }

    /**
     * @method applyStoreMonitor
     * Applies event handlers for store data.
     * @param {string} name
     * Name of the raw join.
     * @private
     */

  }, {
    key: 'applyStoreMonitor',
    value: function applyStoreMonitor(name) {
      var _this7 = this;

      if (!this.rawjoins.hasOwnProperty(name)) {
        return;
      }

      if (this.rawjoins[name].hasOwnProperty('proxy')) {
        (function () {
          var me = _this7;

          _this7.rawjoins[name].on('record.create', function (record) {
            var old = me[name].data;
            old.pop();

            var c = {
              action: 'update',
              field: name,
              join: true,
              old: old,
              new: me[name].data,
              originalEvent: {
                event: 'record.create',
                record: record
              }
            };

            me.emit('field.update', c);
            me.emit('field.update.' + name, c);
          });

          _this7.rawjoins[name].on('record.update', function (record, delta) {
            if (!delta) {
              return;
            }

            var c = {
              action: 'update',
              field: name + '.' + delta.field,
              join: true,
              old: delta.old,
              new: delta.new,
              originalEvent: {
                event: 'record.update',
                record: record
              }
            };

            me.emit('field.update', c);
            me.emit('field.update.' + name + '.' + delta.field, c);
          });

          _this7.rawjoins[name].on('record.delete', function (record) {
            var old = me[name].data;
            old.push(record.data);

            var c = {
              action: 'update',
              field: name,
              join: true,
              old: old,
              new: me[name].data,
              originalEvent: {
                event: 'record.delete',
                record: record
              }
            };

            me.emit('field.update', c);
            me.emit('field.update.' + name, c);
          });

          _this7.rawjoins[name].on('record.invalid', function (data) {
            me.emit('field.invalid', data.field);
            me.emit('field.invalid.' + name, data.field);
          });

          _this7.rawjoins[name].on('record.valid', function (data) {
            me.emit('field.valid', data.field);
            me.emit('field.valid.' + name, data.field);
          });
        })();
      }
    }

    /**
     * @method removeField
     * Remove a field from the data model.
     * @param {string} name
     * Name of the field to remove.
     */

  }, {
    key: 'removeField',
    value: function removeField(name) {
      if (this.raw.hasOwnProperty(name)) {
        var val = this.raw[name];
        delete this[name];
        delete this.fields[name]; // eslint-disable-line no-undef
        delete this.raw[name]; // eslint-disable-line no-undef
        if (this.invalidDataAttributes.indexOf(name) >= 0) {
          this.invalidDataAttributes.splice(this.invalidDataAttributes.indexOf(name), 1);
        }
        var c = {
          action: 'delete',
          field: name,
          value: val
        };
        this.emit('field.remove', c);
        this.changelog.push(c);
      }
    }

    /**
     * @method removeVirtual
     * Remove a virtual field.
     * @param {string} name
     * Name of the field.
     */

  }, {
    key: 'removeVirtual',
    value: function removeVirtual(name) {
      delete this[name];
    }

    /**
     * @method removeRelationshipField
     * Remove an existing join dynamically.
     * @param {string} name
     * The name of the relationship field to remove.
     * @param {boolean} [suppressEvents=false]
     * Set to `true` to prevent events from firing when the field is added.
     */

  }, {
    key: 'removeRelationshipField',
    value: function removeRelationshipField(name, suppressEvents) {
      suppressEvents = suppressEvents !== undefined ? suppressEvents : false;
      if (this.joins.hasOwnProperty(name)) {
        var val = this.rawjoins[name];
        delete this.rawjoins[name];
        delete this[name];
        delete this.joins[name];
        if (!suppressEvents) {
          var c = {
            action: 'delete',
            field: name,
            old: val,
            join: true
          };
          this.changelog.push(c);
          this.emit('relationship.remove', c);
        }
      }
    }

    /**
     * @method undo
     * A rollback function to undo changes. This operation affects
     * the changelog. It is possible to undo an undo (i.e. redo).
     * This works with relationship creating/removing relationship fields,
     * but not updates to the related model. To undo changes to a relationship
     * field, the `undo()` method _of the related model_ must be called.
     * @param {number} [OperationCount=1]
     * The number of operations to "undo". Defaults to a single operation.
     */

  }, {
    key: 'undo',
    value: function undo(back) {
      back = back || 1;
      var old = this.changelog.splice(this.changelog.length - back, back);
      var me = this;

      old.reverse().forEach(function (change) {
        if (!(typeof change.join === 'boolean' ? change.join : false)) {
          switch (change.action) {
            case 'update':
              me[change.field] = change.old;
              break;
            case 'create':
              me.removeField(change.field);
              break;
            case 'delete':
              me.addField(change.field);
              me[change.field] = me.old;
              break;
          }
        } else {
          switch (change.action) {
            case 'create':
              me.removeRelationshipField(change.field);
              break;
            case 'delete':
              me.addRelationshipField(change.field);
              me[change.field] = change.old;
              break;
          }
        }
      });
    }

    /**
     * @method load
     * Load a data record. This clears the #history. #modified
     * will be set to `false`, as though the record has been untouched.
     * @param {object} data
     * The data to apply to the model.
     */

  }, {
    key: 'load',
    value: function load(data) {
      data = data || {};

      // Handle data maps
      var me = this;
      if (this._dataMap !== null) {
        Object.keys(this.reverseMap).forEach(function (key) {
          if (data.hasOwnProperty(key)) {
            data[me.reverseMap[key]] = data[key];
            delete data[key];
          }
        });
      }

      // Loop through the keys and add data fields
      Object.keys(data).forEach(function (key) {
        if (me.fields.hasOwnProperty(key)) {
          if (me.raw.hasOwnProperty(key)) {
            me.raw[key] = data[key];
          } else if (key === me.idAttribute) {
            me.id = data[key];
          }
        } else if (me.joins.hasOwnProperty(key)) {
          // let tmp = new me.getRelated(key).type() // eslint-disable-line new-cap
          // tmp.load(data[key])
          // me.rawjoin[key] = tmp
          me.rawjoins[key].load(data[key]);
        } else {
          try {
            var source = NGN.stack.pop();
            console.warn('%c' + key + '%c specified in %c' + source.path + '%c as a data field but is not defined in the model.', NGN.css, '', NGN.css, '');
          } catch (e) {
            console.warn('%c' + key + '%c specified as a data field but is not defined in the model.', NGN.css, '');
          }
        }
      });

      this.setUnmodified();
    }
  }, {
    key: 'expires',
    get: function get() {
      return this.expiration;
    },
    set: function set(value) {
      var _this8 = this;

      // Validate data type
      if (NGN.typeof(value) !== 'date' && NGN.typeof(value) !== 'number') {
        try {
          var source = NGN.stack.pop();
          console.warn('Expiration could not be set at %c' + source.path + '%c (Invalid data type. Must be a Date or number).', NGN.css, '');
        } catch (e) {
          console.warn('Expiration could not be set (Invalid data type. Must be a Date or number).');
        }

        return;
      }

      // Clear existing expiration timer if it is already set.
      clearTimeout(this.expirationTimeout);

      // If the new value is a number, convert to a date.
      if (NGN.typeof(value) === 'number') {
        if (value < 0) {
          this.ignoreTTL = true;
          return;
        }

        var currentDate = new Date();

        value = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), currentDate.getHours(), currentDate.getMinutes(), currentDate.getSeconds(), currentDate.getMilliseconds() + value);
      }

      // If the process has reached this far, expiration
      // actions should be enabled.
      this.ignoreTTL = false;

      // Set the new expiration time period
      this.expiration = value;

      // If the record is already expired, immediately trigger the expiration.
      if (Date.now() >= this.expiration.getTime()) {
        this.expire();
        return;
      }

      this.hasExpired = false;

      // If the expiration is in the future, set a timer to expire.
      var waitPeriod = this.expiration.getTime() - Date.now();
      this.expirationTimeout = setTimeout(function () {
        _this8.expire();
      }, waitPeriod);
    }

    /**
     * @property {boolean} expired
     * Indicates the record/model is expired.
     */

  }, {
    key: 'expired',
    get: function get() {
      if (this.ignoreTTL) {
        return false;
      }

      return this.hasExpired;
    }

    /**
     * @property {Boolean}
     * Indicates one or more data properties has changed.
     * @readonly
     */

  }, {
    key: 'modified',
    get: function get() {
      return this.checksum !== this.benchmark;
    }

    /**
     * @cfgproperty {String/Number/Date} [id=null]
     * The unique ID of the model object. If #idAttribute is defined,
     * this will get/set the #idAttribute value.
     */

  }, {
    key: 'id',
    get: function get() {
      return this.oid;
    },
    set: function set(value) {
      this.oid = value;
    }

    /**
     * @property checksum
     * The unique checksum of the record (i.e. a record fingerprint).
     * This will change as the data changes.
     */

  }, {
    key: 'checksum',
    get: function get() {
      return NGN.DATA.util.checksum(JSON.stringify(this.data));
    }

    /**
     * @property {Object} dataMap
     * The current data map.
     * @private
     */

  }, {
    key: 'dataMap',
    get: function get() {
      return this._dataMap;
    },
    set: function set(value) {
      this._dataMap = value;
      this._reverseDataMap = null;
    }

    /**
     * @property {NGN.DATA.Store} store
     * If a store is associated with the model, this will
     * provide a reference to it. If there is no store, this
     * will return `null`.
     */

  }, {
    key: 'datastore',
    get: function get() {
      return this._store;
    }

    /**
     * @property {boolean} valid
     * Indicates the record is valid.
     */

  }, {
    key: 'valid',
    get: function get() {
      this.validate();
      return this.invalidDataAttributes.length === 0;
    }

    /**
     * @property datafields
     * Provides an array of data fields associated with the model.
     * @returns {String[]}
     */

  }, {
    key: 'datafields',
    get: function get() {
      return Object.keys(this.fields);
    }

    /**
     * @property reslationships
     * Provides an array of join fields associated with the model.
     * @returns {String[]}
     */

  }, {
    key: 'relationships',
    get: function get() {
      return Object.keys(this.joins);
    }

    /**
     * @property virtualdatafields
     * Provides an array of virtual data fields associated with the model.
     * @returns {String[]}
     */

  }, {
    key: 'virtualdatafields',
    get: function get() {
      return Object.keys(this.virtuals);
    }

    /**
     * @property {object} reverseMap
     * Reverses the data map. For example, if the original #dataMap
     * looks like:
     *
     * ```js
     * {
     *    firstname: 'gn',
     *    lastname: 'sn
     * }
     * ```
     *
     * The reverse map will look like:
     *
     * ```js
     * {
     *    gn: 'firstname',
     *    sn: 'lastname
     * }
     * ```
     */

  }, {
    key: 'reverseMap',
    get: function get() {
      var _this9 = this;

      if (this.dataMap !== null) {
        var _ret8 = function () {
          if (_this9._reverseDataMap !== null) {
            return {
              v: _this9._reverseDataMap
            };
          }
          var rmap = {};
          var me = _this9;
          Object.keys(_this9._dataMap).forEach(function (attr) {
            rmap[me._dataMap[attr]] = attr;
          });
          _this9._reverseDataMap = rmap;
          return {
            v: rmap
          };
        }();

        if ((typeof _ret8 === 'undefined' ? 'undefined' : _typeof(_ret8)) === "object") return _ret8.v;
      }
      return null;
    }

    /**
      * @property data
      * Creates a JSON representation of the data entity. This is
      * a record that can be persisted to a database or other data store.
      * @readonly.
      */

  }, {
    key: 'data',
    get: function get() {
      var _this10 = this;

      var d = this.serialize();
      if (!d.hasOwnProperty(this.idAttribute) && this.autoid) {
        d[this.idAttribute] = this[this.idAttribute];
      }
      if (this.dataMap) {
        (function () {
          var me = _this10;
          // Loop through the map keys
          Object.keys(_this10.dataMap).forEach(function (key) {
            // If the node contains key, make the mapping
            if (d.hasOwnProperty(key)) {
              if (d[key] instanceof NGN.DATA.Model) {
                d[me.dataMap[key]] = d[key].data;
              } else {
                d[me.dataMap[key]] = d[key];
              }
              delete d[key];
            }
          });
        })();
      }
      return d;
    }

    /**
     * @property history
     * The history of the entity (i.e. changelog).The history
     * is shown from most recent to oldest change. Keep in mind that
     * some actions, such as adding new custom fields on the fly, may
     * be triggered before other updates.
     * @returns {array}
     */

  }, {
    key: 'history',
    get: function get() {
      return this.changelog.reverse();
    }
  }]);

  return Model;
}(NGN.EventEmitter);

NGN.DATA = NGN.DATA || {};

// Object.defineProperty(NGN.DATA, 'Model', NGN.public(Entity))

Object.defineProperties(NGN.DATA, {
  Model: NGN.public(function (cfg) {
    var ModelLoader = function ModelLoader(data) {
      var model = new Model(cfg);
      if (data) {
        model.load(data);
      }
      return model;
    };

    return ModelLoader;
  }),

  Entity: NGN.private(Model)
});

if (NGN.nodelike) {
  module.exports = NGN.DATA;
}

'use strict';

/**
 * @class NGN.DATA.Store
 * Represents a collection of data.
 * @fires record.create
 * Fired when a new record is created. The new
 * record is provided as an argument to the event
 * handler.
 * @fires record.delete
 * Fired when a record(s) is removed. The old record
 * is provided as an argument to the event handler.
 */

var Store = function (_NGN$EventEmitter2) {
  _inherits(Store, _NGN$EventEmitter2);

  function Store(cfg) {
    _classCallCheck(this, Store);

    cfg = cfg || {};

    var _this11 = _possibleConstructorReturn(this, Object.getPrototypeOf(Store).call(this, cfg));

    Object.defineProperties(_this11, {
      /**
       * @cfg {NGN.DATA.Model} model
       * An NGN Data Model to which data records conform.
       */
      model: NGN.const(cfg.model || null),

      // The raw data collection
      _data: NGN.private([]),

      // The raw filters
      _filters: NGN.private([]),

      // The raw indexes
      _index: NGN.private(cfg.index || []),

      // Placeholders to track the data that's added/removed
      // during the lifespan of the store. Modified data is
      // tracked within each model record.
      _created: NGN.private([]),
      _deleted: NGN.private([]),
      _loading: NGN.private(false),
      _softarchive: NGN.private([]),

      /**
       * @property {NGN.DATA.Proxy} proxy
       * The proxy used to transmit data over a network.
       * @private
       */
      proxy: NGN.private(null),

      /**
       * @cfg {boolean} [allowDuplicates=true]
       * Set to `false` to prevent duplicate records from being added.
       * If a duplicate record is added, it will be ignored and an
       * error will be thrown.
       */
      allowDuplicates: NGN.public(NGN.coalesce(cfg.allowDuplicates, true)),

      /**
       * @cfg {boolean} [errorOnDuplicate=false]
       * Set to `true` to throw an error when a duplicate record is detected.
       * If this is not set, it will default to the value of #allowDuplicates.
       * If #allowDuplicates is not defined either, this will be `true`
       */
      errorOnDuplicate: NGN.const(NGN.coalesce(cfg.errorOnDuplicate, cfg.allowDuplicates, true)),

      /**
       * @cfgproperty {boolean} [autoRemoveExpiredRecords=true]
       * When set to `true`, the store will automatically delete expired records.
       */
      autoRemoveExpiredRecords: NGN.privateconst(NGN.coalesce(cfg.autoRemoveExpiredRecords, true)),

      /**
       * @cfg {boolean} [softDelete=false]
       * When set to `true`, the store makes a copy of a record before removing
       * it from the store. The store will still emit a `record.delete` event,
       * and it will still behanve as though the record has been completely
       * removed. However; the record copy can be retrieved using the #restore
       * method.
       *
       * Since it is not always desirable to store a copy of every deleted
       * record indefinitely, it is possible to expire and permanently remove
       * records by setting the #softDeleteTtl.
       *
       * ```js
       * var People = new NGN.DATA.Store({
       *   model: Person,
       *   softDelete: true,
       *   softDeleteTtl: 10000
       * })
       *
       * People.add(somePerson)
       *
       * var removedRecordId
       * People.once('record.delete', function (record) {
       *   removedRecordId = record.id
       * })
       *
       * People.remove(somePerson)
       *
       * setTimeout(function () {
       *   People.restore(removedRecordId)
       * }, 5000)
       *
       * ```
       *
       * The code above creates a new store and adds a person to it.
       * Then a placeholder variable (`removedRecordId`) is created.
       * Next, a one-time event listener is added to the store, specifically
       * for handling the removal of a record. Then the record is removed,
       * which triggers the `record.delete` event, which populates
       * `removedRecordId` with the ID of the record that was deleted.
       * Finally, the code waits for 5 seconds, then restores the record. If
       * the #restore method _wasn't_ called, the record would be purged
       * from memory after 10 seconds (because `softDeleteTtl` is set to 10000
       * milliseconds).
       */
      softDelete: NGN.privateconst(NGN.coalesce(cfg.softDelete, false)),

      /**
       * @cfg {number} [softDeleteTtl=-1]
       * This is the number of milliseconds the store waits before purging a
       * soft-deleted record from memory. `-1` = Infinite (no TTL).
       */
      softDeleteTtl: NGN.private(NGN.coalesce(cfg.softDeleteTtl, -1))
    });

    var obj = {};
    _this11._index.forEach(function (i) {
      obj[i] = [];
    });

    _this11._index = obj;

    var events = ['record.duplicate', 'record.create', 'record.update', 'record.delete', 'record.restored', 'record.purged', 'record.move', 'record.invalid', 'record.valid', 'clear', 'filter.create', 'filter.delete', 'index.create', 'index.delete'];

    if (NGN.BUS) {
      events.forEach(function (eventName) {
        _this11.on(eventName, function () {
          var args = NGN.slice(arguments);
          args.shift();
          args.push(this);
          NGN.BUS.emit(eventName, args);
        });
      });
    }
    return _this11;
  }

  /**
   * @property {array} data
   * The complete and unfiltered raw underlying dataset. This data
   * is usually persisted to a database.
   * @readonly
   */


  _createClass(Store, [{
    key: 'add',


    /**
     * @method add
     * Add a data record.
     * @param {NGN.DATA.Model|object} data
     * Accepts an existing NGN Data Model or a JSON object.
     * If a JSON object is supplied, it will be applied to
     * the data model specified in cfg#model. If no model
     * is specified, the raw JSON data will be stored.
     * @param {boolean} [suppressEvent=false]
     * Set this to `true` to prevent the `record.create` event
     * from firing.
     * @return {NGN.DATA.Model}
     * Returns the new record.
     */
    value: function add(data, suppressEvent) {
      var record = void 0;

      if (!(data instanceof NGN.DATA.Entity)) {
        try {
          data = JSON.parse(data);
        } catch (e) {}
        if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) !== 'object') {
          throw new Error('Cannot add a non-object record.');
        }
        if (this.model) {
          record = new this.model(data); // eslint-disable-line new-cap
        } else {
          record = data;
        }
      } else {
        record = data;
      }

      if (record.hasOwnProperty('_store')) {
        record._store = this;
      }

      var dupe = this.isDuplicate(record);
      if (dupe) {
        this.emit('record.duplicate', record);
        if (!this.allowDuplicates) {
          if (this.errorOnDuplicate) {
            throw new Error('Cannot add duplicate record (allowDuplicates = false).');
          }
          return;
        }
      }

      this.listen(record);
      this.applyIndices(record, this._data.length);
      this._data.push(record);
      !this._loading && this._created.indexOf(record) < 0 && this._created.push(record);
      if (!NGN.coalesce(suppressEvent, false)) {
        this.emit('record.create', record);
      }
      if (!record.valid) {
        this.emit('record.invalid', record);
      }
      return record;
    }

    /**
     * @method insertBefore
     * Add a record before the specified index.
     * @param  {NGN.DATA.Model|number} target
     * The model or index where the new record will be added before.
     * @param {NGN.DATA.Model|object} data
     * Accepts an existing NGN Data Model or a JSON object.
     * If a JSON object is supplied, it will be applied to
     * the data model specified in cfg#model. If no model
     * is specified, the raw JSON data will be stored.
     * @param {boolean} [suppressEvent=false]
     * Set this to `true` to prevent the `record.create` event
     * from firing.
     * @return {NGN.DATA.Model}
     * Returns the new record.
     */

  }, {
    key: 'insertBefore',
    value: function insertBefore(index, data) {
      var suppressEvent = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

      return this.insert(index, data, suppressEvent, 'before');
    }

    /**
     * @method insertAfter
     * Add a record after the specified index.
     * @param  {NGN.DATA.Model|number} target
     * The model or index where the new record will be added after.
     * @param {NGN.DATA.Model|object} data
     * Accepts an existing NGN Data Model or a JSON object.
     * If a JSON object is supplied, it will be applied to
     * the data model specified in cfg#model. If no model
     * is specified, the raw JSON data will be stored.
     * @param {boolean} [suppressEvent=false]
     * Set this to `true` to prevent the `record.create` event
     * from firing.
     * @return {NGN.DATA.Model}
     * Returns the new record.
     */

  }, {
    key: 'insertAfter',
    value: function insertAfter(index, data) {
      var suppressEvent = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

      return this.insert(index + 1, data, suppressEvent, 'after');
    }

    /**
     * @method insert
     * Add a record somewhere within the existing recordset (as opposed to simply appending).
     * @param  {NGN.DATA.Model|number} target
     * The model or index where the new record will be added after.
     * @param {NGN.DATA.Model|object} data
     * Accepts an existing NGN Data Model or a JSON object.
     * If a JSON object is supplied, it will be applied to
     * the data model specified in cfg#model. If no model
     * is specified, the raw JSON data will be stored.
     * @param {boolean} [suppressEvent=false]
     * Set this to `true` to prevent the `record.create` event
     * from firing.
     * @param {string} [position=after]
     * The position (before or after) where the record should be added.
     * @return {NGN.DATA.Model}
     * Returns the new record.
     */

  }, {
    key: 'insert',
    value: function insert(index, data) {
      var suppressEvent = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
      var position = arguments.length <= 3 || arguments[3] === undefined ? 'after' : arguments[3];

      var record = this.add(data, true);
      if (record) {
        this.move(this._data.length - 1, index, position, false);

        if (!suppressEvent) {
          this.emit('record.create', record);
        }
      }

      return record;
    }

    /**
     * @method isDuplicate
     * Indicates whether the specified record is a duplicate.
     * This compares checksum values. Any match is considered a
     * duplicate. It will also check for duplication of raw JSON
     * objects (i.e. non-NGN.DATA.Model records).
     * @param  {NGN.DATA.Model|Object} record
     * The record or JSON object.
     * @return {boolean}
     */

  }, {
    key: 'isDuplicate',
    value: function isDuplicate(record) {
      if (this._data.indexOf(record) >= 0) {
        return false;
      }
      return this._data.filter(function (rec) {
        return rec.checksum === record.checksum;
      }).length > 0;
    }

    /**
     * @method listen
     * Listen to a specific record's events and respond.
     * @param {NGN.DATA.Model} record
     * The record to listen to.
     * @fires record.update
     * Fired when a record is updated. The #record is passed as an argument to
     * the event handler.
     * @private
     */

  }, {
    key: 'listen',
    value: function listen(record) {
      var _this12 = this;

      record.on('field.update', function (delta) {
        _this12.updateIndice(delta.field, delta.old, delta.new, _this12._data.indexOf(record));
        _this12.emit('record.update', record, delta);
      });

      record.on('field.delete', function (delta) {
        _this12.updateIndice(delta.field, delta.old, undefined, _this12._data.indexOf(record));
        _this12.emit('record.update', record, delta);
      });

      record.on('field.invalid', function () {
        _this12.emit('record.invalid', record);
      });

      record.on('field.valid', function () {
        _this12.emit('record.valid', record);
      });

      record.on('expired', function () {
        if (!record.expired) {
          return;
        }

        _this12.emit('record.expired', record);

        if (_this12.autoRemoveExpiredRecords) {
          _this12.remove(record);
        }
      });
    }

    /**
     * @method bulk
     * Bulk load data.
     * @param {string} eventName
     * @param {array} data
     * @private
     */

  }, {
    key: 'bulk',
    value: function bulk(event, data) {
      var _this13 = this;

      this._loading = true;

      data.forEach(function (record) {
        _this13.add(record, true);
      });

      this._loading = false;
      this._deleted = [];
      this._created = [];

      this.emit(event || 'load');
    }

    /**
     * @method load
     * Bulk load data. This acts the same as adding records,
     * but it suppresses individual record creation events.
     * This will add data to the existing collection. If you
     * want to load fresh data, use the #reload method.
     * @param {array} data
     * An array of data. Each array element should be an
     * NGN.DATA.Model or a JSON object that can be applied
     * to the store's #model.
     */

  }, {
    key: 'load',
    value: function load() {
      var array = Array.isArray(arguments[0]) ? arguments[0] : NGN.slice(arguments);
      this.bulk('load', array);
    }

    /**
     * @method reload
     * Reload data. This is the same as running #clear followed
     * by #load.
     */

  }, {
    key: 'reload',
    value: function reload(data) {
      this.clear();
      var array = Array.isArray(arguments[0]) ? arguments[0] : NGN.slice(arguments);
      this.bulk('reload', array);
    }

    /**
     * @method indexOf
     * Find the index number of a record within the collection.
     * @param  {NGN.DATA.Model} record
     * The record whose index should be identified.
     * @return {Number}
     * Returns a number from `0-collection length`. Returns `-1` if
     * the record is not found in the collection.
     */

  }, {
    key: 'indexOf',
    value: function indexOf(record) {
      if ((typeof record === 'undefined' ? 'undefined' : _typeof(record)) !== 'object' || !(record instanceof NGN.DATA.Entity) && !record.checksum) {
        return -1;
      }

      return this._data.findIndex(function (el) {
        return el.checksum === record.checksum;
      });
    }

    /**
     * @method contains
     * A convenience method that indicates whether a record is in
     * the store or not.
     * @param {NGN.DATA.Model} record
     * The record to check for inclusion in the data collection.
     * @return {Boolean}
     */

  }, {
    key: 'contains',
    value: function contains(record) {
      return this.indexOf(record) >= 0;
    }

    /**
     * @method remove
     * Remove a record.
     * @param {NGN.DATA.Model|object|number} data
     * Accepts an existing NGN Data Model, JSON object,
     * or index number. Using a JSON object is slower
     * than using a reference to a data model or an index
     * number (index is fastest).
     * @fires record.delete
     * The record delete event sends 2 arguments to handler methods:
     * `record` and `index`. The record refers to the model that was
     * removed. The `index` refers to the position of the record within
     * the store's data list. **NOTICE** the `index` refers to where
     * the record _used to be_.
     * @returns {NGN.DATA.Model}
     * Returns the data model that was just removed. If a model
     * is unavailable (i.e. remove didn't find the specified record),
     * this will return `null`.
     */

  }, {
    key: 'remove',
    value: function remove(data, suppressEvents) {
      var _this14 = this;

      var removedRecord = [];
      var dataIndex = void 0;

      if (typeof data === 'number') {
        dataIndex = data;
      } else if (data && data.checksum && data.checksum !== null || data instanceof NGN.DATA.Model) {
        dataIndex = this.indexOf(data);
      } else {
        (function () {
          var m = new _this14.model(data, true); // eslint-disable-line new-cap
          dataIndex = _this14._data.findIndex(function (el) {
            return el.checksum === m.checksum;
          });
        })();
      }

      // If no record is found, the operation fails.
      if (dataIndex < 0) {
        throw new Error('Record removal failed (record not found at index ' + (dataIndex || '').toString() + ').');
      }

      removedRecord = this._data.splice(dataIndex, 1);

      if (removedRecord.length > 0) {
        removedRecord = removedRecord[0];
        this.unapplyIndices(dataIndex);

        if (this.softDelete) {
          if (this.softDeleteTtl >= 0) {
            (function () {
              var checksum = removedRecord.checksum;
              removedRecord.once('expired', function () {
                _this14.purgeDeletedRecord(checksum);
              });

              removedRecord.expires = _this14.softDeleteTtl;
            })();
          }

          this._softarchive.push(removedRecord);
        }

        if (!this._loading) {
          var i = this._created.indexOf(removedRecord);
          if (i >= 0) {
            i >= 0 && this._created.splice(i, 1);
          } else if (this._deleted.indexOf(removedRecord) < 0) {
            this._deleted.push(removedRecord);
          }
        }

        if (!NGN.coalesce(suppressEvents, false)) {
          this.emit('record.delete', removedRecord, dataIndex);
        }

        return removedRecord;
      }

      return null;
    }

    /**
     * @method findArchivedRecord
     * Retrieve an archived record.
     * @param  {string} checksum
     * Checksum of the record.
     * @return {object}
     * Returns the archived record and it's index within the deletion archive.
     * ```js
     * {
     *   index: <number>,
     *   record: <NGN.DATA.Model>
     * }
     * ```
     * @private
     */

  }, {
    key: 'findArchivedRecord',
    value: function findArchivedRecord(checksum) {
      var index = void 0;
      var record = this._softarchive.filter(function (record, i) {
        if (record.checksum === checksum) {
          index = i;
          return true;
        }
      });

      if (record.length !== 1) {
        var source = void 0;
        try {
          source = NGN.stack.pop().path;
        } catch (e) {
          source = 'Unknown';
        }

        console.warn('Cannot purge record. %c' + record.length + ' records found%c. Source: %c' + source, NGN.css, '', NGN.css);
        return null;
      }

      return {
        index: index,
        record: record[0]
      };
    }

    /**
     * @method purgeDeletedRecord
     * Remove a soft-deleted record from the store permanently.
     * This cannot be undone, and there are no events for this action.
     * @param  {string} checksum
     * Checksum of the record.
     * @return {NGN.DATA.Model}
     * Returns the purged record. This will be `null` if the record cannot be
     * found or does not exist.
     * @fires {NGN.DATA.Model} record.purged
     * This event is triggered when a record is removed from the soft-delete
     * archive.
     * @private
     */

  }, {
    key: 'purgeDeletedRecord',
    value: function purgeDeletedRecord(checksum) {
      var purgedRecord = this.findArchivedRecord(checksum);

      // If there is no record, abort (the findArchivedRecord emits a warning)
      if (purgedRecord === null) {
        return null;
      }

      this._softarchive.splice(purgedRecord.index, 1);

      this.emit('record.purged', purgedRecord.record);

      return purgedRecord.record;
    }

    /**
     * @method restore
     * Restore a soft-deleted record to the store. This does not preserve the
     * original index (a new index number is assigned).
     * @param  {string} checksum
     * Checksum of the record.
     * @return {NGN.DATA.Model}
     * Returns the purged record. This will be `null` if the record cannot be
     * found or does not exist.
     * @fires record.restored
     */

  }, {
    key: 'restore',
    value: function restore(checksum) {
      var purgedRecord = this.findArchivedRecord(checksum);

      // If there is no record, abort (the findArchivedRecord emits a warning)
      if (purgedRecord === null) {
        return null;
      }

      purgedRecord.record.removeAllListeners('expired');
      purgedRecord.record.expires = this.softDeleteTtl;

      this.add(purgedRecord.record, true);

      this._softarchive[purgedRecord.index].removeAllListeners('expired');
      this._softarchive.splice(purgedRecord.index, 1);

      this.emit('record.restored', purgedRecord.record);

      return purgedRecord.record;
    }

    /**
     * @method clear
     * Removes all data.
     * @param {boolean} [purgeSoftDelete=true]
     * Purge soft deleted records from memory.
     * @fires clear
     * Fired when all data is removed
     */

  }, {
    key: 'clear',
    value: function clear() {
      var _this15 = this;

      var purge = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

      if (!purge) {
        this._softarchive = this._data;
      } else {
        this._softarchive = [];
      }

      this._data = [];

      Object.keys(this._index).forEach(function (index) {
        _this15._index[index] = [];
      });

      this.emit('clear');
    }

    /**
     * @method find
     * Retrieve a specific record or set of records.
     * @param {number|function|string|object} [query=null]
     * When this is set to a `number`, the corresponding zero-based
     * record will be returned. A `function` can also be used, which
     * acts like a filter. Each record is passed to this function.
     *
     * For example, if we want to find all administrators within a
     * set of users, the following could be used:
     *
     * ```js
     *   let record = MyStore.find(function (record) {
     *     return record.usertype = 'admin'
     *   })
     * ```
     *
     * It's also possible to supply a String. When this is supplied,
     * the store will look for a record whose ID (see NGN.DATA.Model#idAttribute)
     * matches the string. Numberic ID's are matched on their string
     * equivalent for search purposes (data is not modified).
     *
     * An object can be used to search for specific field values. For example:
     *
     * ```js
     * MyStore.find({
     *   firstname: 'Corey',
     *   lastname: /Butler|Doe/
     * })
     * ```
     *
     * The code above will find everyone named Corey Butler or Corey Doe. The
     * first attribute must match the value exactly whereas `lastname` will
     * match against the regular expression.
     *
     * If this parameter is `undefined` or `null`, all records will be
     * returned (i.e. no search criteria specified, so return everything).
     *
     * If you're using a large dataset, indexing can speed up queries. To take
     * full advantage of indexing, all of the query elements should be indexed.
     * For example, if you have `lastname`, 'firstname' in your query and
     * both of those are indexed, the response time will be substantially faster
     * than if they're not (in large data sets). However; if one of those
     * elements is _not_ indexed, performance may not increase.
     * @param {boolean} [ignoreFilters=false]
     * Set this to `true` to search the full unfiltered record set.
     * @return {NGN.DATA.Model|array|null}
     * An array is returned when a function is specified for the query.
     * Otherwise the specific record is return. This method assumes
     * records have unique ID's.
     */

  }, {
    key: 'find',
    value: function find(query, ignoreFilters) {
      var _this16 = this;

      if (this._data.length === 0) {
        return [];
      }

      var resultSet = [];

      var _ret12 = function () {
        switch (typeof query === 'undefined' ? 'undefined' : _typeof(query)) {
          case 'function':
            resultSet = _this16._data.filter(query);
            break;
          case 'number':
            resultSet = query < 0 || query >= _this16._data.length ? null : _this16._data[query];
            break;
          case 'string':
            var indice = _this16.getIndices(_this16._data[0].idAttribute, query.trim());
            if (indice !== null && indice.length > 0) {
              indice.forEach(function (index) {
                resultSet.push(_this16._data[index]);
              });
              return {
                v: resultSet
              };
            }

            var recordSet = _this16._data.filter(function (record) {
              return (record[record.idAttribute] || '').toString().trim() === query.trim();
            });

            resultSet = recordSet.length === 0 ? null : recordSet[0];

            break;
          case 'object':
            if (query instanceof NGN.DATA.Model) {
              if (_this16.contains(query)) {
                return {
                  v: query
                };
              }

              return {
                v: null
              };
            }

            var match = [];
            var noindex = [];
            var queryKeys = Object.keys(query);

            queryKeys.forEach(function (field) {
              var index = _this16.getIndices(field, query[field]);

              if (index) {
                match = match.concat(index || []);
              } else {
                field !== null && noindex.push(field);
              }
            });

            // Deduplicate
            match.filter(function (index, i) {
              return match.indexOf(index) === i;
            });

            // Get non-indexed matches
            if (noindex.length > 0) {
              resultSet = _this16._data.filter(function (record, i) {
                if (match.indexOf(i) >= 0) {
                  return false;
                }

                for (var x = 0; x < noindex.length; x++) {
                  if (record[noindex[x]] !== query[noindex[x]]) {
                    return false;
                  }
                }

                return true;
              });
            }

            // If a combined indexable + nonindexable query
            resultSet = resultSet.concat(match.map(function (index) {
              return _this16._data[index];
            })).filter(function (record) {
              for (var y = 0; y < queryKeys.length; y++) {
                if (query[queryKeys[y]] !== record[queryKeys[y]]) {
                  return false;
                }
              }

              return true;
            });
            break;
          default:
            resultSet = _this16._data;
        }
      }();

      if ((typeof _ret12 === 'undefined' ? 'undefined' : _typeof(_ret12)) === "object") return _ret12.v;
      if (resultSet === null) {
        return null;
      }

      if (!NGN.coalesce(ignoreFilters, false)) {
        this.applyFilters(resultSet instanceof Array ? resultSet : [resultSet]);
      }

      return resultSet;
    }

    /**
     * @method applyFilters
     * Apply filters to a data set.
     * @param {array} data
     * The array of data to apply filters to.
     * @private
     */

  }, {
    key: 'applyFilters',
    value: function applyFilters(data) {
      if (this._filters.length === 0) {
        return data;
      }

      this._filters.forEach(function (filter) {
        data = data.filter(filter);
      });

      return data;
    }

    /**
     * @method addFilter
     * Add a filter to the record set.
     * @param {function} fn
     * The filter function. This function should comply
     * with the [Array.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) specification,
     * returning a boolean value.
     * The item passed to the filter will be the NGN.DATA.Model specified
     * in the cfg#model.
     * @fires filter.create
     * Fired when a filter is created.
     */

  }, {
    key: 'addFilter',
    value: function addFilter(fn) {
      this._filters.push(fn);
      this.emit('filter.create', fn);
    }

    /**
     * @method removeFilter
     * Remove a filter from the record set.
     * @param {function|index} filter
     * This can be the function which was originally passed to
     * the #addFilter method, or the zero-based #filters index
     * @param {boolean} [suppressEvents=false]
     * Prevent events from firing one the creation of the filter.
     * @fires filter.delete
     * Fired when a filter is removed.
     */

  }, {
    key: 'removeFilter',
    value: function removeFilter(fn, suppressEvents) {
      suppressEvents = NGN.coalesce(suppressEvents, false);

      var removed = [];

      if (typeof fn === 'number') {
        removed = this._filters.splice(fn, 1);
      } else {
        removed = this._filters.splice(this._filters.indexOf(fn), 1);
      }

      if (removed.length > 0 && !suppressEvents) {
        this.emit('filter.delete', removed[0]);
      }
    }

    /**
     * @method clearFilters
     * Remove all filters.
     * @param {boolean} [suppressEvents=false]
     * Prevent events from firing one the removal of each filter.
     */

  }, {
    key: 'clearFilters',
    value: function clearFilters(suppressEvents) {
      suppressEvents = NGN.coalesce(suppressEvents, false);

      if (suppressEvents) {
        this._filters = [];
        return;
      }

      while (this._filters.length > 0) {
        this.emit('filter.delete', this._filters.pop());
      }
    }

    /**
     * @method deduplicate
     * Deduplicates the recordset. This compares the checksum of
     * each of the records to each other and removes duplicates.
     * This suppresses the removal
     * @param {boolean} [suppressEvents=true]
     * Suppress the event that gets fired when a record is removed.
     */

  }, {
    key: 'deduplicate',
    value: function deduplicate(suppressEvents) {
      var _this17 = this;

      suppressEvents = NGN.coalesce(suppressEvents, true);

      var records = this.data.map(function (rec) {
        return JSON.stringify(rec);
      });

      var dupes = [];

      records.forEach(function (record, i) {
        if (records.indexOf(record) < i) {
          dupes.push(_this17.find(i));
        }
      });

      dupes.forEach(function (duplicate) {
        _this17.remove(duplicate);
      });
    }

    /**
     * @method sort
     * Sort the #records. This forces a #reindex, which may potentially be
     * an expensive operation on large data sets.
     * @param {function|object} sorter
     * Using a function is exactly the same as using the
     * [Array.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FGlobal_Objects%2FArray%2Fsort) method
     * (this is the compare function). The arguments passed to the
     * method are NGN.DATA.Model objects.
     * Alternatively, it is possible to sort by one or more model
     * attributes. Each attribute For example:
     *
     * ```js
     * let Person = new NGN.DATA.Model({
     *   fields: {
     *     fname: null,
     *     lname: null
     *   }
     * })
     *
     * let People = new NGN.DATA.Store({
     *   model: Person
     * })
     *
     * People.add({
     *   fname: 'John',
     *   lname: 'Doe',
     *   age: 37
     * }, {
     *   fname: 'Jane',
     *   lname: 'Doe',
     *   age: 36
     * }, {
     *   fname: 'Jane',
     *   lname: 'Vaughn',
     *   age: 42
     * })
     *
     * People.sort({
     *   lname: 'asc',  // Sort by last name in normal alphabetical order.
     *   age: 'desc'    // Sort by age, oldest to youngest.
     * })
     *
     * People.records.forEach(function (p) {
     *   console.log(fname, lname, age)
     * })
     *
     * // DISPLAYS
     * // John Doe 37
     * // Jane Doe 36
     * // Jane Vaughn 42
     *
     * People.sort({
     *   age: 'desc',  // Sort by age, oldest to youngest.
     *   lname: 'asc'  // Sort by name in normal alphabetical order.
     * })
     *
     * People.records.forEach(function (p) {
     *   console.log(fname, lname, age)
     * })
     *
     * // DISPLAYS
     * // Jane Vaughn 42
     * // John Doe 37
     * // Jane Doe 36
     * ```
     *
     * It is also posible to provide complex sorters. For example:
     *
     * ```js
     * People.sort({
     *   lname: 'asc',
     *   age: function (a, b) {
     *     if (a.age < 40) {
     *       return 1
     *     }
     *     return a.age < b.age
     *   }
     * })
     * ```
     *
     * The sorter above says "sort alphabetically by last name,
     * then by age where anyone under 40yrs old shows up before
     * everyone else, but sort the remainder ages in descending order.
     */

  }, {
    key: 'sort',
    value: function sort(fn) {
      var _this18 = this;

      if (typeof fn === 'function') {
        this.records.sort(fn);
      } else if ((typeof fn === 'undefined' ? 'undefined' : _typeof(fn)) === 'object') {
        (function () {
          var functionKeys = Object.keys(fn);

          _this18._data.sort(function (a, b) {
            for (var i = 0; i < functionKeys.length; i++) {
              // Make sure both objects have the same sorting key
              if (a.hasOwnProperty(functionKeys[i]) && !b.hasOwnProperty(functionKeys[i])) {
                return 1;
              }

              if (!a.hasOwnProperty(functionKeys[i]) && b.hasOwnProperty(functionKeys[i])) {
                return -1;
              }

              // For objects who have the key, sort in the order defined in object.
              if (a[functionKeys[i]] !== b[functionKeys[i]]) {
                switch (fn[functionKeys[i]].toString().trim().toLowerCase()) {
                  case 'asc':
                    if (_typeof(a.fields[functionKeys[i]])) {
                      return a[functionKeys[i]].localeCompare(b[functionKeys[i]]);
                    }
                    return a[functionKeys[i]] > b[functionKeys[i]] ? 1 : -1;

                  case 'desc':
                    return a[functionKeys[i]] < b[functionKeys[i]] ? 1 : -1;

                  default:
                    if (typeof fn[functionKeys[i]] === 'function') {
                      return fn[functionKeys[i]](a, b);
                    }
                    return 0;
                }
              }
            }

            // Everything is equal
            return 0;
          });
        })();
      }
      this.reindex();
    }

    /**
     * @method createIndex
     * Add a simple index to the recordset.
     * @param {string} datafield
     * The #model data field to index.
     * @param {boolean} [suppressEvents=false]
     * Prevent events from firing on the creation of the index.
     * @fires index.create
     * Fired when an index is created. The datafield name and
     * store are supplied as an argument to event handlers.
     */

  }, {
    key: 'createIndex',
    value: function createIndex(field, suppressEvents) {
      if (!this.model.hasOwnProperty(field)) {
        console.warn('The store\'s model does not contain a data field called %c' + field + '%c.', NGN.css, '');
      }

      var exists = this._index.hasOwnProperty(field);

      this._index[field] = this._index[field] || [];
      if (!NGN.coalesce(suppressEvents, false) && !exists) {
        this.emit('index.created', {
          field: field,
          store: this
        });
      }
    }

    /**
     * @method deleteIndex
     * Remove an index.
     * @param {string} datafield
     * The #model data field to stop indexing.
     * @param {boolean} [suppressEvents=false]
     * Prevent events from firing on the removal of the index.
     * @fires index.delete
     * Fired when an index is deleted. The datafield name and
     * store are supplied as an argument to event handlers.
     */

  }, {
    key: 'deleteIndex',
    value: function deleteIndex(field, suppressEvents) {
      if (this._index.hasOwnProperty(field)) {
        delete this._index[field];

        if (!NGN.coalesce(suppressEvents, false)) {
          this.emit('index.created', {
            field: field,
            store: this
          });
        }
      }
    }

    /**
     * @method clearIndices
     * Clear all indices from the indexes.
     */

  }, {
    key: 'clearIndices',
    value: function clearIndices() {
      var _this19 = this;

      Object.keys(this._index).forEach(function (key) {
        _this19._index[key] = [];
      });
    }

    /**
     * @method deleteIndexes
     * Remove all indexes.
     * @param {boolean} [suppressEvents=true]
     * Prevent events from firing on the removal of each index.
     */

  }, {
    key: 'deleteIndexes',
    value: function deleteIndexes(suppressEvents) {
      var _this20 = this;

      suppressEvents = NGN.coalesce(suppressEvents, true);

      Object.keys(this._index).forEach(function (key) {
        _this20.deleteIndex(key, suppressEvents);
      });
    }

    /**
     * @method applyIndices
     * Apply the values to the index.
     * @param {NGN.DATA.Model} record
     * The record which should be applied to the index.
     * @param {number} number
     * The record index number.
     * @private
     */

  }, {
    key: 'applyIndices',
    value: function applyIndices(record, number) {
      var _this21 = this;

      var indexes = Object.keys(this._index);

      if (indexes.length === 0) {
        return;
      }

      indexes.forEach(function (field) {
        if (record.hasOwnProperty(field)) {
          var values = _this21._index[field];

          // Check existing records for similar values
          for (var i = 0; i < values.length; i++) {
            if (values[i][0] === record[field]) {
              _this21._index[field][i].push(number);
              return;
            }
          }

          // No matching words, create a new one.
          _this21._index[field].push([record[field], number]);
        }
      });
    }

    /**
     * @method unapplyIndices
     * This removes a record from all relevant indexes simultaneously.
     * Commonly used when removing a record from the store.
     * @param  {number} indexNumber
     * The record index.
     * @private
     */

  }, {
    key: 'unapplyIndices',
    value: function unapplyIndices(num) {
      var _this22 = this;

      Object.keys(this._index).forEach(function (field) {
        var i = _this22._index[field].indexOf(num);
        if (i >= 0) {
          _this22._index[field].splice(i, 1);
        }
      });
    }

    /**
     * @method updateIndice
     * Update the index with new values.
     * @param  {string} fieldname
     * The name of the indexed field.
     * @param  {any} oldValue
     * The original value. This is used to remove the old value from the index.
     * @param  {any} newValue
     * The new value.
     * @param  {number} indexNumber
     * The number of the record index.
     * @private
     */

  }, {
    key: 'updateIndice',
    value: function updateIndice(field, oldValue, newValue, num) {
      if (!this._index.hasOwnProperty(field) || oldValue === newValue) {
        return;
      }

      var ct = 0;

      for (var i = 0; i < this._index[field].length; i++) {
        var value = this._index[field][i][0];

        if (value === oldValue) {
          this._index[field][i].splice(this._index[field][i].indexOf(num), 1);
          ct++;
        } else if (newValue === undefined) {
          // If thr new value is undefined, the field was removed for the record.
          // This can be skipped.
          ct++;
        } else if (value === newValue) {
          this._index[field][i].push(num);
          this._index[field][i].shift();
          this._index[field][i].sort();
          this._index[field][i].unshift(value);
          ct++;
        }

        if (ct === 2) {
          return;
        }
      }
    }

    /**
     * @method getIndices
     * Retrieve a list of index numbers pertaining to a field value.
     * @param  {string} field
     * Name of the data field.
     * @param  {any} value
     * The value of the index to match against.
     * @return {array}
     * Returns an array of integers representing the index where the
     * values exist in the record set.
     */

  }, {
    key: 'getIndices',
    value: function getIndices(field, value) {
      if (!this._index.hasOwnProperty(field)) {
        return null;
      }

      var indexes = this._index[field].filter(function (dataArray) {
        return dataArray.length > 0 && dataArray[0] === value;
      });

      if (indexes.length === 1) {
        indexes[0].shift();
        return indexes[0];
      }

      return [];
    }

    /**
     * @method move
     * Move an existing record to a specific index. This can be used
     * to reorder a single record.
     * @param {NGN.DATA.Model|number|string} source
     * The record or the index of a record within the store to move.
     * This can also be the unique ID of a record.
     * @param {NGN.DATA.Model|number|string} target
     * The record or the index of a record within the store where the source
     * will be positioned against. This can also be the unique ID of a record.
     * @param {boolean} [suppressEvent=false]
     * Set this to `true` to prevent the `record.create` event
     * from firing.
     */

  }, {
    key: 'move',
    value: function move(source, target) {
      var suppressEvent = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

      if (source === undefined) {
        console.warn('Cannot move record. No source specified.');
        return;
      }

      if (target === undefined) {
        console.warn('Cannot move record. No target specified.');
        return;
      }

      source = this.getRecordIndex(source);
      target = this.getRecordIndex(target);

      // If the positins haven't actually changed, stop processing.
      if (source === target) {
        return;
      }

      this._data.splice(target, 0, this._data.splice(source, 1)[0]);

      if (!suppressEvent) {
        this.emit('record.move', {
          oldIndex: source,
          newIndex: target,
          record: this._data[target]
        });
      }

      this.reindex();
    }

    /**
     * @method getRecordIndex
     * Returns the index of a record using sanitize input.
     * @param  {NGN.DATA.Model|number|String} value
     * The record or the index of a record within the store.
     * This can also be the unique ID of a record.
     * @return {NGN.DATA.Model}
     * Returns the model or `null`
     */

  }, {
    key: 'getRecordIndex',
    value: function getRecordIndex(value) {
      if (value === undefined) {
        console.warn('No argument passed to getRecordIndex().');
        return null;
      }

      if (typeof value === 'number') {
        if (value < 0 || value >= this._data.length) {
          console.warn('%c' + value + '%c out of bounds.', NGN.css, '');
          return null;
        }

        return value;
      } else if (typeof value === 'string') {
        var id = value;

        value = this.find(id);

        if (!value) {
          console.warn('%c' + id + '%c does not exist or cannot be found in the store.', NGN.css, '');
          return null;
        }
      }

      return this.indexOf(value);
    }

    /**
     * @method reindex
     * Reindex the entire record set. This can be expensive operation.
     * Use with caution.
     * @private
     */

  }, {
    key: 'reindex',
    value: function reindex() {
      var _this23 = this;

      this.clearIndices();
      this._data.forEach(function (record, index) {
        _this23.applyIndices(record, index);
      });
    }
  }, {
    key: 'data',
    get: function get() {
      return this._data.map(function (d) {
        return d.data;
      });
    }

    /**
     * @property {array} records
     * An array of NGN.DATA.Model records. If the store has
     * filters applied, the records will reflect the filtration.
     * @readonly
     */

  }, {
    key: 'records',
    get: function get() {
      return this.applyFilters(this._data);
    }

    /**
     * @property recordCount
     * The total number of #records in the collection.
     * @readonly
     */

  }, {
    key: 'recordCount',
    get: function get() {
      return this.applyFilters(this._data).length;
    }

    /**
     * @property {array} filtered
     * An array of NGN.DATA.Model records that have been filtered out.
     * The results reflect the inverse of #records.
     */

  }, {
    key: 'filtered',
    get: function get() {
      var records = this.records;
      return this._data.filter(function (record) {
        return records.filter(function (rec) {
          return rec.checksum === record.checksum;
        }).length === 0;
      });
    }

    /**
     * @property {NGN.DATA.Model} first
     * Return the first record in the store. Returns `null`
     * if the store is empty.
     */

  }, {
    key: 'first',
    get: function get() {
      if (this.records.length === 0) {
        return null;
      }
      return this.records[0];
    }

    /**
     * @property {NGN.DATA.Model} last
     * Return the last record in the store. Returns `null`
     * if the store is empty.
     */

  }, {
    key: 'last',
    get: function get() {
      if (this.records.length === 0) {
        return null;
      }
      return this.records[this.records.length - 1];
    }
  }]);

  return Store;
}(NGN.EventEmitter);

/**
 * indexes
 * An index consists of an object whose key is name of the
 * data field being indexed. The value is an array of record values
 * and their corresponding index numbers. For example:
 *
 * ```js
 * {
 *   "lastname": [["Butler", 0, 1, 3], ["Doe", 2, 4]]
 * }
 * ```
 * The above example indicates the store has two unique `lastname`
 * values, "Butler" and "Doe". Records containing a `lastname` of
 * "Butler" exist in the record store as the first, 2nd, and 4th
 * records. Records with the last name "Doe" are 3rd and 5th.
 * Remember indexes are zero based since records are stored as an
 * array.
 */

NGN.DATA.Store = Store;

'use strict';

/**
 * @class NGN.DATA.Proxy
 * Provides a gateway to remote services such as HTTP and
 * websocket endpoints. This can be used directly to create
 * custom proxies. However; NGN.DATA.HttpProxy and NGN.DATA.WebSocketProxy
 * are also available for use.
 */

var Proxy = function (_NGN$EventEmitter3) {
  _inherits(Proxy, _NGN$EventEmitter3);

  function Proxy(config) {
    _classCallCheck(this, Proxy);

    config = config || {};

    if (!config.store) {
      throw new Error('NGN.DATA.Proxy requires a NGN.DATA.Store.');
    }

    var _this24 = _possibleConstructorReturn(this, Object.getPrototypeOf(Proxy).call(this));

    config.store.proxy = _this24;

    Object.defineProperties(_this24, {
      /**
       * @configproperty {NGN.DATA.Store} store (required)
       * THe store for data being proxied.
       */
      store: NGN.const(config.store),

      /**
       * @configproperty {string} [url=http://localhost
       * The root URL for making network requests (HTTP/WS/TLS).
       */
      url: NGN.public(config.url || 'http://localhost'),

      /**
       * @config {string} username
       * If using basic authentication, provide this as the username.
       */
      username: NGN.public(config.username || null),

      /**
       * @config {string} password
       * If using basic authentication, provide this as the password.
       */
      password: NGN.public(config.password || null),

      /**
       * @config {string} token
       * If using an access token, provide this as the value. This
       * will override basic authentication (#username and #password
       * are ignored). This sets an `Authorization: Bearer <token>`
       * HTTP header.
       */
      token: NGN.public(config.token || null)
    });
    return _this24;
  }

  /**
   * @property actions
   * A list of the record changes that have occurred.
   * @returns {object}
   * An object is returned with 3 keys representative of the
   * action taken:
   *
   * ```js
   * {
   *   create: [NGN.DATA.Model, NGN.DATA.Model],
   *   update: [NGN.DATA.Model],
   *   delete: []
   * }
   * ```
   *
   * The object above indicates two records have been created
   * while one record was modified and no records were deleted.
   * **NOTICE:** If you add or load a JSON object to the store
   * (as opposed to adding an instance of NGN.DATA.Model), the
   * raw object will be returned. It is also impossible for the
   * data store/proxy to determine if these have changed since
   * the NGN.DATA.Model is responsible for tracking changes to
   * data objects.
   * @private
   */


  _createClass(Proxy, [{
    key: 'save',
    value: function save() {
      console.warn('Save should be overridden by a proxy implementation class.');
    }
  }, {
    key: 'fetch',
    value: function fetch() {
      console.warn('Fetch should be overridden by a proxy implementation class.');
    }
  }, {
    key: 'actions',
    get: function get() {
      var me = this;
      return {
        create: this.store._created,
        update: this.store.records.filter(function (record) {
          if (me.store._created.indexOf(record) < 0 && me.store._deleted.indexOf(record) < 0) {
            return false;
          }
          return record.modified;
        }).map(function (record) {
          return record;
        }),
        delete: this.store._deleted
      };
    }
  }]);

  return Proxy;
}(NGN.EventEmitter);

Object.defineProperty(NGN.DATA, 'Proxy', NGN.const(Proxy));