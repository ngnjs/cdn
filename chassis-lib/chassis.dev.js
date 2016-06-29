/**
  * v1.0.58 generated on: Wed Jun 29 2016 23:17:21 GMT+0000 (UTC)
  * Copyright (c) 2014-2016, Ecor Ventures LLC. All Rights Reserved. See LICENSE (BSD).
  */
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
     * The emthod responsible for responding to the event.
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
     * The emthod responsible for responding to the event.
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
     * The emthod responsible for responding to the event.
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
     * The emthod responsible for responding to the event.
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
     * the spcified event will be removed.
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
      this.handlers = {};
      this.adhoc = {};
    }

    /**
     * @alias removeAllListeners
     * A node-like alias of the #clear method.
     */

  }, {
    key: 'removeAllListeners',
    value: function removeAllListeners() {
      this.clear();
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
 * A utility class to simplify smoe DOM management tasks.
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
   * an array or `HTMLElements`/`NodeList`/CSS Selectors.
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
   * of as a reverse CSS selector that traverse UP the DOM chain
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
   * to it's parent element.
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
        var base = NGN._slice(els);
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
    create: {
      enumerble: true,
      writable: false,
      configurable: false,
      value: function value(key, _value) {
        // If the key is not provided but the value is a DOM element, make
        // an ephemeral reference.
        if (!_value && typeof key !== 'string') {
          return this.find(key);
        }

        // Basic error checking
        if (typeof key !== 'string' && typeof key !== 'number') {
          throw new Error('Cannot add a non-alphanumeric selector reference.');
        }
        if (key.trim().length === 0) {
          throw new Error('Cannot add a blank selector reference.');
        }
        if (_value === undefined || _value === null || _value.trim().length === 0) {
          throw new Error('Cannot create a null/undefined selector reference.');
        }

        // Create a reference object
        var cleankey = this.cleanKey(key);
        var me = this;
        Object.defineProperty(NGN.ref, cleankey, NGN.private(_value));

        Object.defineProperty(NGN.ref, key, {
          enumerable: true,
          get: function get() {
            return me.find(_value);
          },
          set: function set(val) {
            if (val === undefined || val === null || val.trim().length === 0) {
              throw new Error('Cannot create a null/undefined selector reference.');
            }
            NGN.ref[cleankey] = val;
          }
        });

        this.keys[key] = _value;
        this.keys[this.cleanKey(key)] = _value;
      }
    },

    /**
     * @method remove
     * Removes a key from the reference manager.
     */
    remove: NGN.const(function (key) {
      if (this.key) {
        delete this.key;
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
 * @class HTTP
 * A library to issue HTTP/S requests. This acts as an AJAX library.
 * @author Corey Butler
 * @singleton
 */
var parser = new DOMParser();

NGN.NET = {};

Object.defineProperties(NGN.NET, {
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
        callback && callback(res);
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
    var res = this.xhr(callback);
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
   * header will be applied (this can be overwritten useing @cfg.headers).
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
   * @method send
   * Send the request via HTTP/S.
   * @param  {object} cfg
   * The configuration to use when sending the request. See @applyRequestSettings#cfg
   * for configuration details.
   * @param  {Function} callback
   * A callback to excute upon completion. This receives a standard response
   * object.
   */
  send: NGN.const(function (cfg, callback) {
    cfg = cfg || {};
    var res = this.xhr(callback);
    var body = this.applyRequestSettings(res, cfg);
    res.send(body);
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
   * @method get
   * Issue a `GET` request.
   * @param {string} url
   * The URL to issue the request to.
   * @param {Function} callback
   * A callback method to run when the request is complete.
   * This receives the response object as the only argument.
   */
  get: NGN.const(function () {
    if (_typeof(arguments[0]) === 'object') {
      var cfg = arguments[0];
      cfg.method = 'GET';
      cfg.url = typeof arguments[1] === 'string' ? arguments[1] : cfg.url;
      if (cfg.url.substr(0, 4) && NGN.nodelike) {
        return arguments[arguments.length - 1](this.getFile(cfg.url));
      }
      return this.send(cfg, arguments[arguments.length - 1]);
    }
    if (arguments[0].substr(0, 4) && NGN.nodelike) {
      return arguments[arguments.length - 1](this.getFile(arguments[0]));
    }
    this.run.apply(this.run, this.prepend(arguments, 'GET'));
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
    var rsp = {
      status: require('fs').existsSync(url.replace('file://', '')) ? 200 : 400
    };
    rsp.responseText = rsp.status === 200 ? require('fs').readFileSync(url.replace('file://', '')).toString() : 'File could not be found.';
    return rsp;
  }),

  /**
   * @method head
   * Issue a `HEAD` request.
   * @param {string} url
   * The URL to issue the request to.
   * @param {Function} callback
   * A callback method to run when the request is complete.
   * This receives the response object as the only argument.
   */
  head: NGN.const(function (uri, callback) {
    if (_typeof(arguments[0]) === 'object') {
      var cfg = arguments[0];
      cfg.method = 'HEAD';
      cfg.url = typeof arguments[1] === 'string' ? arguments[1] : cfg.url;
      return this.send(cfg, arguments[arguments.length - 1]);
    }
    this.run.apply(this.run, this.prepend(arguments, 'HEAD'));
  }),

  /**
   * @method put
   * Issue a `PUT` request.
   * @param  {object} cfg
   * See the options for @send#cfg
   * @param  {Function} callback
   * A callback method to run when the request is complete.
   * This receives the response object as the only argument.
   */
  put: NGN.const(function (cfg, callback) {
    cfg = cfg || {};
    cfg.method = 'PUT';
    cfg.url = cfg.url || window.location;
    this.send(cfg, callback);
  }),

  /**
   * @method post
   * Issue a `POST` request.
   * @param  {object} cfg
   * See the options for @send#cfg
   * @param  {Function} callback
   * A callback method to run when the request is complete.
   * This receives the response object as the only argument.
   */
  post: NGN.const(function (cfg, callback) {
    cfg = cfg || {};
    cfg.method = 'POST';
    cfg.url = cfg.url || window.location;
    this.send(cfg, callback);
  }),

  /**
   * @method delete
   * Issue a `DELETE` request.
   * @param {string} url
   * The URL to issue the request to.
   * @param {Function} callback
   * A callback method to run when the request is complete.
   * This receives the response object as the only argument.
   */
  delete: NGN.const(function () {
    this.run.apply(this.run, this.prepent(arguments, 'DELETE'));
  }),

  /**
   * @method json
   * This is a shortcut method for creating a `GET` request and
   * auto-processing the response body into a JSON object.
   * @param  {string} url
   * The URL to issue the request to.
   * @param  {Function} callback
   * This receives a JSON response object from the server as it's only argument.
   */
  json: NGN.const(function (cfg, url, callback) {
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

    return uri.join('/');
  }),

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
   * NGN.HTTP.import([
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
  import: NGN.const(function (url, callback, bypassCache) {
    var _this = this;

    // Support multiple simultaneous imports
    if (Array.isArray(url)) {
      var _ret = function () {
        var self = _this;
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

      if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
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
        var _ret4 = function () {
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

        if ((typeof _ret4 === 'undefined' ? 'undefined' : _typeof(_ret4)) === "object") return _ret4.v;
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
  importTo: NGN.const(function (url, target, callback) {
    this.processImport(url, target, callback);
  }),

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
  importBefore: NGN.const(function (url, target, callback) {
    this.processImport(url, target, callback, true);
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
    var p = document.createElement('link');
    p.rel = rel;
    p.href = url.substr(0, 4) !== 'http' ? this.normalizeUrl(window.location.origin + window.location.pathname + url) : url;
    NGN.coalesce(cor, this.isCrossOrigin(url)) && p.setAttribute('crossorigin', 'true');
    document.head.appendChild(p);
    NGN.emit('network.' + rel);
  }),

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
  predns: NGN.const(function (domain, cor) {
    this.prelink(window.location.protocol + '//' + domain, 'dns-prefetch', cor);
  }),

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
  preconnect: NGN.const(function (url, cor) {
    this.prelink(url, 'preconnect', cor);
  }),

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
  prefetch: NGN.const(function (url, cor) {
    this.prelink(url, 'prefetch', cor);
  }),

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
  subresource: NGN.const(function (url, cor) {
    this.prelink(url, 'subresource', cor);
  }),

  /**
   * @method prerender
   * Prerender an entire page. This behaves as though a page is
   * opened in a hidden tab, then displayed when called. This is
   * powerful, but should only be used when there is absolutely
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
  prerender: NGN.const(function (url, cor) {
    this.prelink(url, 'prerender', cor);
  }),

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
  template: NGN.const(function (url, data, callback) {
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
  }),

  importCache: NGN.define(false, true, false, {}),

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
  _cache: NGN.define(false, false, true, {}),

  /**
   * @method swap
   * Replace image tags with the SVG equivalent.
   * @param {HTMLElement|NodeList} imgs
   * The HTML element or node list containing the images that should be swapped out for SVG files.
   * @param {function} [callback]
   * Executed when the image swap is complete. There are no arguments passed to the callback.
   * @private
   */
  swap: NGN.const(false, false, false, function (svgs, callback) {
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
  id: NGN.const(false, false, false, function (url) {
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
  cleanCode: NGN.const(false, false, false, function (code) {
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
  viewbox: NGN.const(false, false, false, function (code) {
    return (/(viewbox=["'])(.*?)(["'])/igm.exec(code.toString().trim())[2] || '0 0 100 100'
    );
  }),

  cache: NGN.const(false, false, false, function (url, svg) {
    this._cache[url] = svg;
  }),

  fetchFile: NGN.const(false, false, false, function (url, callback) {
    var _this2 = this;

    if (NGN.nodelike) {
      callback && callback(require('fs').readFileSync(require('path').resolve(url).replace('file://', '')).toString());
    } else {
      (function () {
        var me = _this2;
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
  update: NGN.define(true, false, false, function (section, callback) {
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
   * @returns  {Boolean} Whether or not the method has been called correctly
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