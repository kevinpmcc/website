(function() {
  var s=document.createElement('script');
  s.type='text/javascript';s.async=true;
  s.src=('https:'==document.location.protocol?'https':'http') +
  '://makersacademy.groovehq.com/widgets/73e49dce-db85-44b0-9416-1b7694a9630b/ticket.js'; var q = document.getElementsByTagName('script')[0];q.parentNode.insertBefore(s, q);

  var addCssToIframe = function() {
    if ($('#groove-iframe').contents().find("head") != undefined) {
        $('.iframe')
          .contents()
          .find("head")
          .append(
                  '<link href="/sass/all.css" rel="stylesheet" type="text/css">');
        window.clearInterval(addCssInterval);
    }
  };
  var addCssInterval;
  window.setTimeout(function() {
    addCssInterval = window.setInterval(addCssToIframe, 500);
  }, 2000);
})();

