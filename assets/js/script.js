const inputRange = document.getElementById('inputRange');
const pageViews = document.getElementById('pageViews');
const price = document.getElementById('price');
const year = document.getElementById('year');
const month = document.getElementById('month');
const switchToggle = document.getElementById('switch_toggle');

inputRange.addEventListener('input', () => {
    if (inputRange.value >= 0 && inputRange.value <= 20) {
        pageViews.textContent = '10K Pageviews';
        price.innerHTML = `$72.00 <span>/month</span>`;
    } else if (inputRange.value > 20 && inputRange.value <= 40) {
        pageViews.textContent = '50K Pageviews';
        price.innerHTML = `$108.00 <span>/month</span>`;
    } else if (inputRange.value > 40 && inputRange.value <= 60) {
        pageViews.textContent = '100K Pageviews';
        price.innerHTML = `$144.00 <span>/month</span>`;
    } else if (inputRange.value > 60 && inputRange.value <= 80) {
        pageViews.textContent = '500K Pageviews';
        price.innerHTML = `$216.00 <span>/month</span>`;
    } else {
        pageViews.textContent = '1M Pageviews';
        price.innerHTML = `$324.00 <span>/month</span>`;
    }
});

switchToggle.addEventListener('change', () => {
    inputRange.addEventListener('input', () => {
        if (switchToggle.checked === true) {
            if (inputRange.value >= 0 && inputRange.value <= 20) {
                pageViews.textContent = '10K Pageviews';
                price.innerHTML = `$8.00 <span>/month</span>`;
            } else if (inputRange.value > 20 && inputRange.value <= 40) {
                pageViews.textContent = '50K Pageviews';
                price.innerHTML = `$12.00 <span>/month</span>`;
            } else if (inputRange.value > 40 && inputRange.value <= 60) {
                pageViews.textContent = '100K Pageviews';
                price.innerHTML = `$16.00 <span>/month</span>`;
            } else if (inputRange.value > 60 && inputRange.value <= 80) {
                pageViews.textContent = '500K Pageviews';
                price.innerHTML = `$24.00 <span>/month</span>`;
            } else {
                pageViews.textContent = '1M Pageviews';
                price.innerHTML = `$36.00 <span>/month</span>`;
            }
        } else {
            if (inputRange.value >= 0 && inputRange.value <= 20) {
                pageViews.textContent = '10K Pageviews';
                price.innerHTML = `$72.00 <span>/month</span>`;
            } else if (inputRange.value > 20 && inputRange.value <= 40) {
                pageViews.textContent = '50K Pageviews';
                price.innerHTML = `$108.00 <span>/month</span>`;
            } else if (inputRange.value > 40 && inputRange.value <= 60) {
                pageViews.textContent = '100K Pageviews';
                price.innerHTML = `$144.00 <span>/month</span>`;
            } else if (inputRange.value > 60 && inputRange.value <= 80) {
                pageViews.textContent = '500K Pageviews';
                price.innerHTML = `$216.00 <span>/month</span>`;
            } else {
                pageViews.textContent = '1M Pageviews';
                price.innerHTML = `$324.00 <span>/month</span>`;
            }
        }
    });
});
