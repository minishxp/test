let base = 'https://api.alternative.me/v2/ticker/?convert=USD';

function toUSD(btc_, out_textarea, caller) {
  caller.innerHTML = 'Please wait...';
  let _out = '';
  fetch(base)
    .then((data) => data.json())
    .then(function (data) {
      let btc = data['data']['1']['quotes']['USD']['price'].toString();
      btc = parseInt(btc.split('.')[0]) * btc_;
      if (out_textarea != undefined) {
        out_textarea.value = btc.toString();
      } else {
        //console.log(btc);
      }
      caller.innerHTML = 'Convert';
    });
}

document.addEventListener('DOMContentLoaded', function () {
  var loadTime =
    window.performance.timing.domContentLoadedEventEnd -
    window.performance.timing.navigationStart;
  console.warn('>>> LOADED IN ' + loadTime.toString() + ' ms');
  document.getElementById('conv').onclick = function () {
    let usd = document.getElementById('usd-txt');
    let btc = document.getElementById('btc-txt');

    //console.log(btc.value);
    if (
      parseInt(btc.value) != undefined ||
      parseInt(btc.value) != NaN ||
      btc.value == '' ||
      btc.value == null ||
      toUSD(
        parseInt(btc.value),
        usd,
        document.getElementById('conv')
      ).toString() == 'NaN'
    ) {
      toUSD(parseInt(btc.value), usd, document.getElementById('conv'));
    }
  };
});
