let currentItem;
function dragStart(e) {
    currentItem = e;
    e.classList.add('hold');
    setTimeout(() => e.classList.add('hide'), 0);
}
function dragEnd(e) {
    e.classList.remove('hold', 'hide');
}
function dragover(e) {
    e.preventDefault()
}
function dragenter(e) {
    e.classList.add('hovered');
}
function dragleave(e) {
    e.classList.remove('hovered');
}
function dragdrop(e) {
    e.classList.remove('hovered');
    currentItem.classList.add('endDrag');
    e.append(currentItem);
}