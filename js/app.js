//setting the padding of the plansdiv after the relative div
var main = document.querySelector('.main > img');
var plans = document.querySelector('.plans');
var offest = main.offsetHeight;
plans.style.paddingTop = `${offest}px`
