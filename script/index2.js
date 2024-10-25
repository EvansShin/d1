Sentry.init({
    parentSpanIsAlwaysRootSpan: false,
});

// [step1]
// 뒤로
document.querySelector('.btn-back').addEventListener('click',e => location.go(-1) );


// 이동
document.querySelector('.primary-button').addEventListener('click', e => location.href = './type02_02.html');


document.querySelectorAll("#payments a").forEach(anchor => {
    anchor.addEventListener("click", function(event) {
        event.preventDefault(); 
        
    });
});

document.querySelectorAll("#mobile_payments a").forEach(anchor => {
    anchor.addEventListener("click", function(event) {
        event.preventDefault(); 
        // location.href = './type02_04.html';
    });
});

function validateFields() {
    const phoneNumber = document.querySelector('.phoneNumber').value;
    const birth = document.querySelector('.birth').value;
    const gender = document.querySelector('.gender').value;

    if (phoneNumber.length === 11 && birth.length === 6 && gender.length === 1) {
        location.href = './type02_05.html';
    }
}


document.getElementById('submit-box').addEventListener('click', e => {
    location.href = './type02_06.html';
})

document.querySelector('.btn-submit-box').addEventListener('click', e => {
    location.href = './type02_07.html';
})
