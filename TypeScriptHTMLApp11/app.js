var foodArray = new Array(5);
foodArray[0] = new Foods("Bisli", 15, true, "Osem", 2019);
foodArray[1] = new Foods("Cola", 7, true, "CokaCola", 2020);
foodArray[2] = new Foods("PopCorn", 12, true, "Localy");
foodArray[3] = new Foods("Pork Ribs", 45, false, "Mizra");
foodArray[4] = new Foods("Hamburger", 22, true, "McDonal's");
var manager1 = new Manager("Zvika King", new Address("Haifa", "Haviva", 5, "Israel"));
var manager2 = new Manager("Ori Prince", new Address("Yehud", "Rambam", 2, "Israel"));
var cinema1 = new Cinema("Ori Cinema", 12, 20, foodArray, 700, manager1);
cinema1.cinemaManager.printManagerDetails();
cinema1.printCinemaDetails();
cinema1.printCinemaFoods();
var cinema2 = new Cinema("Wow Cinema", 10, 22, foodArray, 500, manager2);
cinema2.cinemaManager.printManagerDetails();
cinema2.printCinemaDetails();
cinema2.printCinemaFoods();
//let cinema3: Cinema = new Cinema("Til", 6, 21, 150);
//cinema3.printCinemaDetails();
//# sourceMappingURL=app.js.map