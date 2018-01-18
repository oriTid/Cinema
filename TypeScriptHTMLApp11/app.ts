

let foodArray: Array<Foods> = new Array<Foods>(5);

foodArray[0] = new Foods("Bisli", 15, true, "Osem", 2019);
foodArray[1] = new Foods("Cola", 7, true, "CokaCola", 2020);
foodArray[2] = new Foods("PopCorn", 12, true, "Localy");
foodArray[3] = new Foods("Pork Ribs", 45, false, "Mizra");
foodArray[4] = new Foods("Hamburger", 22, true, "McDonal's");

let manager1: Manager = new Manager("Zvika King", new Address("Haifa", "Haviva", 5, "Israel"));
let manager2: Manager = new Manager("Ori Prince", new Address("Yehud", "Rambam", 2, "Israel"));



let cinema1: Cinema = new Cinema("Ori Cinema", 12, 20, foodArray, 700, manager1);
cinema1.cinemaManager.printManagerDetails();
cinema1.printCinemaDetails();
cinema1.printCinemaFoods();

let cinema2: Cinema = new Cinema("Wow Cinema", 10, 22, foodArray, 500, manager2);
cinema2.cinemaManager.printManagerDetails();
cinema2.printCinemaDetails();
cinema2.printCinemaFoods();

//let cinema3: Cinema = new Cinema("Til", 6, 21, 150);
//cinema3.printCinemaDetails();
