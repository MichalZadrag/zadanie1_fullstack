## PROGRAMOWANIE FULL-STACK W CHMURACH OBLICZENIOWYCH

### Zadanie 1

---

### Część 1

Proszę napisać program serwera (dowolny język programowania), który realizować będzie następującą funkcjonalność:

- a) po uruchomieniu kontenera, serwer pozostawia w logach informację o dacie
  uruchomienia, imieniu i nazwisku autora serwera (imię i nazwisko studenta) oraz porcie TCP, na którym serwer nasłuchuje na zgłoszenia klienta.

Tu coś będzie jeszcze

- b) na podstawie adresu IP klienta łączącego się z serwerem, w przeglądarce powinna zostać wyświetlona strona informująca o adresie IP klienta i na podstawie tego adresu IP, o dacie i godzinie w jego strefie czasowej.

Kod odpowiedzialny za wyświetlenie strony wyświetlającej informacje na podstawie adresu IP

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Docker task</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
  </head>
  <body>
    <div class="container">
      <h2 id="ip-header" class="mt-2"></h2>
      <ul class="list-group">
        <li id="date-time" class="list-group-item">Second item</li>
      </ul>
    </div>
  </body>

  <script>
    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => {
        let ip = data.ip;
        document.getElementById("ip-header").innerHTML = `Twoj adres ip: ${ip}`;
        let Http = new XMLHttpRequest();
        let url = `https://ipinfo.io/${ip}`;
        Http.open("GET", url);
        Http.send();
        Http.onreadystatechange = (event) => {
          let htmlResponse = Http.responseText;
          document.getElementById("date-time").innerHTML = htmlResponse;
        };
      });
  </script>
</html>
```
![image](https://user-images.githubusercontent.com/52106343/171735033-385949d0-c1f9-4988-97ba-be9bb58d2ccd.png)


