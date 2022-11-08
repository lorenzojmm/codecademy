const getSleepHours = (day) => {
    if (day === "monday") {
      return 10;
    } else if (day === "tuesday") {
      return 8;
    } else if (day === "wednesday") {
      return 8;
    } else if (day === "thursday") {
      return 8;
    } else if (day === "friday") {
      return 8;
    } else if (day === "saturday") {
      return 8;
    } else if (day === "sunday") {
      return 8;
    } else {
      return "Error. I need something else.";
    }
  };
  
  const getActualSleepHours = () =>
    getSleepHours("monday") +
    getSleepHours("tuesday") +
    getSleepHours("wednesday") +
    getSleepHours("thursday") +
    getSleepHours("friday") +
    getSleepHours("saturday") +
    getSleepHours("sunday");
  const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
  };
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
      console.log("You are a perfect sleeper.");
    } else if (actualSleepHours > idealSleepHours) {
      console.log(
        "Wow, you are getting some good rest! (about " +
          (actualSleepHours - idealSleepHours) +
          " hours more than your ideal amount of sleep)"
      );
    } else {
      console.log(
        "You got " +
          (idealSleepHours - actualSleepHours) +
          " hour(s) less sleep than you needed this week. Get some rest."
      );
    }
  };
  
  calculateSleepDebt();
  