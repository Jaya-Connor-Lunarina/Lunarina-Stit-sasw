"use strict"

$(document).ready(function () {
    const bg1 = $("#bg1");
    const bg2 = $("#bg2");
    const bg3 = $("#bg3");
    const feature = document.querySelector(".feature-links");
    let initial = feature.getBoundingClientRect();
bg2.hide();
bg3.hide();
    $(window).scroll(function () {
    let currentPos = $(this).scrollTop();
    if (currentPos >= initial.top + 50) {
        bg1.fadeOut();
        bg2.fadeIn();
    } else {
        bg1.fadeIn();
        bg2.fadeOut();
    }
    // console.log(initial);
})

















})