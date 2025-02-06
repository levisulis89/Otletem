const masodperc = 1000,
      perc = masodperc * 60,
      ora = perc * 60,
      nap = ora * 24;

let countDown = new Date('July 29, 2025 00:00:00').getTime(),
    x = setInterval(function() {

      let most = new Date().getTime(),
          distance = countDown - most;

      document.getElementById('napok').innerText = Math.floor(distance / (nap)),
        document.getElementById('orak').innerText = Math.floor((distance % (nap)) / (ora)),
        document.getElementById('percek').innerText = Math.floor((distance % (ora)) / (perc)),
        document.getElementById('masodpercek').innerText = Math.floor((distance % (perc)) / masodperc);
      
    }, masodperc)