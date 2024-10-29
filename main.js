let raceNumber = Math.floor(Math.random() * 1000);

const earlyRegister = false;

const runnerAge = 18;

if (runnerAge >= 18 && earlyRegister === true) {
  raceNumber += 1000;
  console.log(
    `Your race will begin at 9:30am. Your race number is ${raceNumber}`
  );
} else if (runnerAge >= 18 && earlyRegister !== true) {
  console.log(`Late adults run at 11:00am. Your race number is ${raceNumber}`);
} else if (runnerAge < 18) {
  console.log(
    `Youth registrants run at 12:30pm. Your race number is ${raceNumber}`
  );
}
