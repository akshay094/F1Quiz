const readLineSync = require('readline-sync');
const chalk = require('chalk');
let score = 0;
const userName = readLineSync.question(chalk.red("Please enter your name\n"));

console.log(chalk.green(("\nWelcome "+userName).toUpperCase()));

console.log(chalk.red("\nSo you are a race head , let's see?"));

const quiz = [
  {
    question:"Who won the 1976 F1 Grand Prix ?",
    answer:"James Hunt",
    options:['Mario Andretti' , 'Jodi Schekter', 'James Hunt' , 'Nicholas Andreas Lauda']
  },
  {
    question:"Who was considered the greatest F1 pilot before Ayrton Senna joined the show?",
    answer:"JM Fangio",
    options:['Sterling Moss' , 'JM Fangio', 'Alberto Ascari' , 'Lorenzo Bandini']
  },
  {
    question:"Sebastian Vettel won 4 World Championships with which team?",
    answer:"Red BUll Racing",
    options:['McLaren F1 Team' , 'Mercedes Amg Petronas', 'Ferrari' , 'Red BUll Racing']

  },
  {
    question:"Which f1 pilot is on the verge of winning 8th World Championship?",
    answer:"Lewis Hamilton",
    options:['Kimi Raikonnen','Lewis Hamilton','Sebastian Vettel','Mick Schumacher']
  },
  {
    question:"What kind of engine F1 uses in 2021?",
    answer:"Turbo Hybrid V6 1.5L",
    options:['GT Engines','Mighty V12\'s','Superfast V10\'s','Turbo Hybrid V6 1.5L']
  },
  {
    question:"How many world Championships Michael Schumacher has won?",
    answer:"7",
    options:['10','7','4','12']
  },
  {
    question:"In which year , Ayrton Senna was killed in a fatal crash?",
    answer:"1994",
    options:['1983','1994','1993','1998']
  }
]

quiz.map((ele , index)=>{
  let response = readLineSync.keyInSelect(ele.options,chalk.blue.bold(`${ele.question}`))
  if(ele.options[response] == ele.answer){
    console.log(chalk.magentaBright("Right Answer\n"+"score : " +(++score)))
  }else{
    console.log(chalk.yellowBright("That's fine , you just need to catchup with the sport.\n"+"score : " +--score))
  }
})

console.log(chalk.bgCyanBright.black("\n Your total score is : "+score));