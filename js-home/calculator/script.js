function insert(num) {
    document.form.textView.value = document.form.textView.value + num;
}
function nulled() {
    document.form.textView.value = '';
}
function finish() {
    let end = document.form.textView.value;
    if (end) {
        document.form.textView.value = eval(end);
    }
}