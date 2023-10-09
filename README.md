# News Manager

## Feladat

Készítsen el egy képzeletbeli rendszer híreinek kezelését biztosító, alapvető CRUD műveletekre
képes API-t, az alábbi szempontok szerint.

1. Authentikáció
   A rendszer használata Google Account alapú authentikációhoz kötött. Integrálja a felületet oly
   módon, hogy az azonosítás Google fiókkal történő hitelesítést követően kiadott tokennel
   történjen.

Amennyiben úgy érzi, nem tudja ezt a feladatot megoldani, a következő feladatban megadott
CRUD API fejlesztésére koncentráljon.

2. Készítse el a CRUD műveletek végpontjait (Create, Read, Update, Delete) az Ön által
   legjobbnak ítélt módon. Minden poszt tartalmazza a következőket:

• Címet (kötelező)
• Képet
• Létrehozás dátuma (automatikus legyen)
• Utolsó módosítás dátuma (automatikus legyen)
• Szöveget (kötelező)
• Szerző (Google azonosítás alapján)
Amennyiben nem sikerül az authentikációt megvalósítania, úgy a szerzőhöz egy Ön által
megválasztott fix értéket adjon meg.

## Indítás

npm i után indítható az alkalmazás: `npm run start:dev`
Az adatbázis configurálva van, amennyiben IP cím kell a mongoDB-nek írj az abelkrisztian7@gmail.com címre.

## Működés

A posztokra vonatkozó api metódosuk két faktoros autentikációval vannak védve, így elsőként be kell jelentkezni a google fiókon keresztül: `localhost:3000/google`
Ezután a visszakapott (ez már JWT) tokent a CRUD hívások headerjébe kell elküldeni: `access_token:<token>`

## Fejlesztendő/nice to have

-Swagger készítése az alkalmazáshoz
-user kiolvasása a tokenből a postok kezeléséhez
-Konténerizáció

Köszi,
Ábel Krisztián
