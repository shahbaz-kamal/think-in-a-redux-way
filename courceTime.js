const module0 = {
  hour: 0,
  minute: 34,
  second: 26,
};
const module1 = {
  hour: 2,
  minute: 13,
  second: 29,
};
const module2 = {
  hour: 1,
  minute: 58,
  second: 44,
};
const module3 = {
  hour: 1,
  minute: 58,
  second: 26,
};
const module4 = {
  hour: 1,
  minute: 29,
  second: 48,
};
const module5 = {
  hour: 1,
  minute: 51,
  second: 57,
};
const module6 = {
  hour: 3,
  minute: 15,
  second: 59,
};
const module7 = {
  hour: 2,
  minute: 6,
  second: 30,
};
const module8 = {
  hour: 2,
  minute: 57,
  second: 3,
};
const module9 = {
  hour: 2,
  minute: 56,
  second: 52,
};
const module10 = {
  hour: 4,
  minute: 20,
  second: 15,
};
const module11 = {
  hour: 2,
  minute: 17,
  second: 52,
};
// All modules array
const modules = [
    module0, module1, module2, module3, module4, module5,
    module6, module7, module8, module9, module10, module11
  ];
  
  // Utility functions
  function calculateTime(modules) {
    let totalSeconds = 0;
    for (const { hour, minute, second } of modules) {
      totalSeconds += hour * 3600 + minute * 60 + second;
    }
    return totalSeconds;
  }
  
  function formatTime(totalSeconds) {
    const hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return { hour: hours, minute: minutes, second: seconds };
  }
  
  // Total duration
  const totalSeconds = calculateTime(modules);
  const totalDuration = formatTime(totalSeconds);
  console.log("Total Duration:", totalDuration); // { hour: XX, minute: XX, second: XX }
  
  // Completed modules
  const completedModules = [module0, module1];
  const completedSeconds = calculateTime(completedModules);
  
  // Remaining time
  const remainingSeconds = totalSeconds - completedSeconds;
  const remainingTime = formatTime(remainingSeconds);
  console.log("Remaining Time:", remainingTime); // { hour: XX, minute: XX, second: XX }