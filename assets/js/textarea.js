function disableNewline(obj) {
  obj.onkeydown = function (e) {
    if (e.keyCode == 13 && !e.shiftKey) {
      e.preventDefault();
      obj.value = obj.value.replace(/\r?\n/gi, '');
    }
  };
}
