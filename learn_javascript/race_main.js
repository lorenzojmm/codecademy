let raceNumber = Math.floor(Math.random() * 1000);


const earlyRegistration = true;
// const earlyRegistration ? ___ : ___;

let runnerAge = 18;

if (runnerAge > 18 && earlyRegistration === true) {
  raceNumber += 1000;
  console.log(`Your race will start at 9:30 am. Your race number is ${raceNumber}.`);
} else if (runnerAge > 18 && earlyRegistration === false) {
  console.log(`Your race will start at 11:00 am. Your race number is ${raceNumber}.`);
} else if (runnerAge < 18) {
  console.log(`Your race will start at 12:30 pm. Your race number is ${raceNumber}.`);
}else {
  console.log ('see the registration desk');
};