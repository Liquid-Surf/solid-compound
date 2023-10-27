function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function convertWildcardStringToRegExp(expression) {
  var terms = expression.split('*');

  var trailingWildcard = false;

  var expr = '';
  for (var i = 0; i < terms.length; i++) {
    if (terms[i]) {
      if (i > 0 && terms[i - 1]) {
        expr += '.*';
      }
      trailingWildcard = false;
      expr += escapeRegExp(terms[i]);
    } else {
      trailingWildcard = true;
      expr += '.*';
    }
  }
  if (!trailingWildcard) {
    expr += '.*';
  }
  return new RegExp('^' + expr + '$', 'i');
}

function filterArray(array, expression) {
  var regex = convertWildcardStringToRegExp(expression);
  //console.log('RegExp: ' + regex);
  return array.filter(function (item) {
    return regex.test(item);
  });
}

const availableIDPs = [
  "idp-1.localhost",
  "idp-2.localhost",
  "idp-3.localhost"
];

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.message) {
      findIdp(request.message);
    }
  }
);

function findIdp(idp) {
  const foundIdps = filterArray(availableIDPs, idp)

  if (foundIdps) {
    navigator.credentials.get({
      identity: {
        configURL: `http://${foundIdps[0]}:8080/fedcm.json`,
        clientId: "yourClientID",
        nonce: "123"
      }
    })
  }
}
