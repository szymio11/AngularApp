WAŻNE!!
Jeśli jest inny localhost niż http://localhost:44304 to trzeba zmienic na aktualny w src/app.config.ts



Opis:
Ogólnie jest podział na to co widzi użytkownik i admin, admin może dodawać edytować i usuwać przepisy a user tylko może dodawać ocenę i wyświetlać a dla nie zalogowanego usera może tylko wyświetlać przepisy(zapomniałem dać ngIfa czy jest ktoś zalogowany dlatego też będzie widział to gość) 
Nie ma nigdzie zrobionych loaderów, dlatego czasami może się dłużej poładować bez informacji o tym, że się ładuje i zapomniałem wcześniej dorobić redirecta po rejestracji i np. po dodaniu oceny się nie odświerza średnia ocen ale tak to wszystko działa tylko zabrakło czasu na dopracowanie :)