Sentry.init({
    parentSpanIsAlwaysRootSpan: false,
});

// [step1]
// 뒤로
document.querySelector('.btn-back').addEventListener('click',e => location.go(-1) );

// 클릭 이벤트 제거
document.querySelectorAll('.btn-box a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();             
    });
});

// 이동


// [step 2 ]
document.querySelectorAll("#payments a").forEach(anchor => {
    anchor.addEventListener("click", function(event) {
        event.preventDefault(); 
        location.href = './type01_03.html';
    });
});


document.querySelectorAll("#mobile_payments a").forEach(anchor => {
    anchor.addEventListener("click", function(event) {
        event.preventDefault(); 
        location.href = './type01_04.html';
    });
});

function validateFields() {
    const phoneNumber = document.querySelector('.phoneNumber').value;
    const birth = document.querySelector('.birth').value;
    const gender = document.querySelector('.gender').value;

    if (phoneNumber.length === 11 && birth.length === 6 && gender.length === 1) {
        location.href = './type01_05.html';
    }
}

document.querySelector('.primary-button').addEventListener('click', e => {
    location.href = '../payments/payment_bg.html';
})

// document.querySelector('.btn-submit-box').addEventListener('click', e => {
//     location.href = './type01_07.html';
// })

