const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
  counter.innerHTML = 0;

  const updateCounter = () => {
    const dataCount = +counter.getAttribute('data-target');

    // console.log(typeof dataCount);
    const intialNumber = Number(counter.innerHTML);
    const increament = dataCount / 100;

    if (intialNumber < dataCount) {
      counter.innerHTML = `${Math.round(intialNumber + increament)}`;

      setTimeout(updateCounter, 10);
    } else {
      counter.innerHTML = dataCount;
    }
  };

  updateCounter();
});
