function insert(a) {
    document.getElementById('textView').value = document.getElementById('textView').value + a;
  }

  function c() {
    document.getElementById('textView').value = "";
  }

  function del() {
    var x = document.getElementById('textView').value;
    document.getElementById('textView').value = x.substring(0, x.length - 1);
  }

  function equal() {
    var x = document.getElementById('textView').value
    document.getElementById('textView').value = eval(x);
  }