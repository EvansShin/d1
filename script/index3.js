Sentry.init({
    parentSpanIsAlwaysRootSpan: false,
});

// [step1]
// 뒤로
document.querySelector('.btn-back').addEventListener('click',e => location.go(-1) );


// 이동
document.querySelector('.primary-button').addEventListener('click', e => location.href = './type03_02.html');


