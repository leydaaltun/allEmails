// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"allEmails2.js":[function(require,module,exports) {
var allMails = [{
  date: '23 Jan',
  from: 'Susanne',
  subject: 'About holiday at July',
  mail: 'Dear Leyda,as you probably know...',
  isFavorited: false
}, {
  date: '22 Jan',
  from: 'Zeit Now',
  subject: 'Email confirmation',
  mail: 'Please confrim your email for 20th time..',
  isFavorited: false
}, {
  date: '19 Jan',
  from: 'Facebook',
  subject: 'New message',
  mail: 'You got a message from a random per..',
  isFavorited: false
}, {
  date: '18 Jan',
  from: 'Github',
  subject: 'Forgot your password',
  mail: 'Click on this link to reset your passwor..',
  isFavorited: false
}, {
  date: '15 Jan',
  from: 'Roboard',
  subject: 'Bender sent you a DM',
  mail: 'KILL ALL HUMANS',
  isFavorited: false
}, {
  date: '11 Jan',
  from: 'SuperOffer',
  subject: 'Earn $1000 from home',
  mail: 'CLICK HERE TO GET YOUR REWARD',
  isFavorited: false
}, {
  date: '10 Jan',
  from: 'YSK',
  subject: 'Your e-mazbata is here',
  mail: 'Dear Leyda,to get your mazbata...',
  isFavorited: false
}];
var yesButton = document.querySelector('.deleteMail');
var overlay = document.querySelector('.overlay');
var noButton = document.querySelector('.dontDeleteMail');

function showConfirmationDialog(yesAction) {
  document.body.classList.add('dialog-visible'); //added visible class to body

  overlay.addEventListener('click', function (event) {
    document.body.classList.remove('dialog-visible');
    yesButton.removeEventListener('click', newAction);
  });

  function newAction() {
    yesAction();
    yesButton.removeEventListener('click', newAction);
    document.body.classList.remove('dialog-visible');
  }

  yesButton.addEventListener('click', newAction);
  noButton.addEventListener('click', function (event) {
    document.body.classList.remove('dialog-visible');
  });
}

yesButton.addEventListener('click', function () {
  showConfirmationDialog(function () {
    console.log('zzzzz');
  });
});
var container = document.querySelector('.inboxContainer'); //console.log(container)

container.addEventListener('click', function (event) {
  console.log(event);
  var parent = event.target.parentElement.parentElement; // const buttons = document.querySelector('.button')
  // const parent = buttons.closest('.button')
  // console.log(parent)

  var index = parent.dataset.index;
  var deleteButton = document.querySelector('.deleteImg'); //console.log(deleteButton)

  var overlay = document.querySelector('.overlay'); //console.log(overlay)

  var dialog = document.querySelector('.dialog');

  if (event.target.classList.contains('star')) {
    console.log("you've clicked on ".concat(index));
    console.log(allMails);

    if (allMails[index].isFavorited) {
      allMails[index].isFavorited = false;
    } else {
      allMails[index].isFavorited = true;
    }

    showMails(allMails);
  }

  if (event.target.classList.contains('deleteImg')) {
    showConfirmationDialog(function () {
      allMails.splice(index, 1);
      showMails(allMails);
    });
  }
});

function showMails(allMails) {
  var html = '';
  allMails.forEach(function (_ref, index) {
    var date = _ref.date,
        from = _ref.from,
        subject = _ref.subject,
        mail = _ref.mail,
        isFavorited = _ref.isFavorited;
    //console.log(index)
    var starClass = 'star favImg';

    if (isFavorited) {
      starClass = 'star favedImg';
    }

    html += "<div class=\"eMail\" data-index=\"".concat(index, "\">\n        <span class=\"date\">").concat(date, "</span>\n        <span class=\"username\">").concat(from, "</span>\n        <span class=\"subject\">").concat(subject, "</span>\n        <p class=\"contentMail\">").concat(mail, "</p>\n        <div class=\"buttons\"><button class=\"").concat(starClass, "\"></button>\n        <button class=\"deleteImg\"></button></div></div>");
  }); //container.innerHTML = html

  if (html === '') {
    container.innerHTML = "<div class=\"error\">Sorry,no e-mails found.</div>";
  } else {
    container.innerHTML = html;
  }
}

showMails(allMails);
var input = document.querySelector('input'); //console.log(input)

input.addEventListener('input', function (event) {
  var searchKeyWord = event.target.value.toLowerCase(); //console.log(searchKeyWord)

  var filteredMails = allMails.filter(function (_ref2) {
    var date = _ref2.date,
        from = _ref2.from,
        subject = _ref2.subject,
        mail = _ref2.mail;

    if (date.toLowerCase().includes(searchKeyWord)) {
      return true;
    }

    if (from.toLowerCase().includes(searchKeyWord)) {
      return true;
    }

    if (subject.toLowerCase().includes(searchKeyWord)) {
      return true;
    }

    if (mail.toLowerCase().includes(searchKeyWord)) {
      return true;
    }

    return false;
  });
  console.log(filteredMails);
  showMails(filteredMails);
});
},{}],"../../../Users/leyda/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52723" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../Users/leyda/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","allEmails2.js"], null)
//# sourceMappingURL=/allEmails2.9473f6b3.js.map