## PROGRAMOWANIE FULL-STACK W CHMURACH OBLICZENIOWYCH

### Zadanie 1

---

### Część 1

Proszę napisać program serwera (dowolny język programowania), który realizować będzie następującą funkcjonalność:

- a) po uruchomieniu kontenera, serwer pozostawia w logach informację o dacie uruchomienia, imieniu i nazwisku autora serwera (imię i nazwisko studenta) oraz porcie TCP, na którym serwer nasłuchuje na zgłoszenia klienta.

```bash
docker-compose up --build
```

![image](https://user-images.githubusercontent.com/52106343/172064092-d0bbece4-b19c-4109-939a-637a54a9ea02.png)

W celu zobaczenia logów kontenera należy użyć komendy:

```bash
docker logs -f zadanie1-web-1
```
![image](https://user-images.githubusercontent.com/52106343/172064480-04c2f5e9-7c5e-4d9e-aa6a-0b153fb8cfc0.png)


- b) na podstawie adresu IP klienta łączącego się z serwerem, w przeglądarce powinna zostać wyświetlona strona informująca o adresie IP klienta i na podstawie tego adresu IP, o dacie i godzinie w jego strefie czasowej.

Kod odpowiedzialny za wyświetlenie strony wyświetlającej informacje na podstawie adresu IP

![code](https://user-images.githubusercontent.com/52106343/171735452-f6258664-354a-4921-b8db-7b9e1c64df1e.png)

![image](https://user-images.githubusercontent.com/52106343/171735033-385949d0-c1f9-4988-97ba-be9bb58d2ccd.png)


W celu wyświetlenia danych na podstawie adresu IP została użyta strona ipinfo.io

### Część 2

Opracować plik Dockerfile, który pozwoli na zbudowanie obrazu kontenera realizującego funkcjonalność opisaną w punkcie 1. Przy ocenie brane będzie sposób opracowania tego pliku (dobór obrazu bazowego, wieloetapowe budowanie obrazu, ewentualne wykorzystanie warstwy scratch, optymalizacja pod kątem funkcjonowania cache-a w procesie budowania). Dockerfile powinien również zawierać informację o autorze tego pliku (ponownie imię i nazwisko studenta). 

![code](https://user-images.githubusercontent.com/52106343/172064925-a5bb8235-61c6-4636-8c7b-746c6adf1995.png)

![code1](https://user-images.githubusercontent.com/52106343/172064929-81dc939c-8388-4e4a-a91d-0ef92b8a3a29.png)

### Część 3
Należy podać polecenia niezbędne do:
  - a) zbudowania opracowanego obrazu kontenera
    ```bash
    docker-compose build
    ```
    ![image](https://user-images.githubusercontent.com/52106343/172065092-dd37d763-29ee-4b4e-b26e-f0425543a939.png)
  - b) uruchomienia kontenera na podstawie zbudowanego obrazu,
    ```bash
    docker-compose up -d
    ```
    ![image](https://user-images.githubusercontent.com/52106343/172065189-d0e64309-84b0-4a64-a798-8ab8f776d7d5.png)
  - c) sposobu uzyskania informacji, które wygenerował serwer w trakcie uruchamiana kontenera (patrz: punkt 1a),
    ```bash
    docker logs -f zadanie1-web-1
    ```
    ![image](https://user-images.githubusercontent.com/52106343/172064480-04c2f5e9-7c5e-4d9e-aa6a-0b153fb8cfc0.png)
  - d) sprawdzenia, ile warstw posiada zbudowany obraz.
    ```bash
    docker history zadanie1_we
    ```
    ![image](https://user-images.githubusercontent.com/52106343/172065382-6b052dc7-5906-43a2-a013-79e420493b81.png)




