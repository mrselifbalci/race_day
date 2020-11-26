let raceNumber = Math.floor(Math.random() * 1000);
let early = false;
let runnerAge = 40;

if (early && runnerAge > 18) {
  raceNumber += 1000;
}
if (early && runnerAge > 18) {
  console.log(
    `Your race will start at 9:30 am. Your race number is ${raceNumber}.`
  );
} else if (!early && runnerAge > 18) {
  console.log(
    `Your race will start at 11:00 am. Your race number is ${raceNumber}.`
  );
} else if (runnerAge < 18) {
  console.log(
    `Your race will start at 12:30 am. Your race number is ${raceNumber}.`
  );
} else {
  console.log(`Please proceed to the registration desk to consult.`);
}
