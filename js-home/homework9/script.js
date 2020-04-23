// Мають бути функції, які є асинхронними (мають сетТаймАут або сетІнтервал) які описують якусь певну вашу дію в день.
//     Наприклад функція прокинутись триває 1с, поїсти - 0,5с. Доїхати до роботи - 2с. Пообідати - 1с.
//     Зробити таких функцій в районі 10 штук. Функція має приймати параметр, який буде відповідати за успішне чи не
//     успішне виконання.
//     Далі виконати їх в тій послідовності, в якій ви виконуєте їх у свій звичайний день.
//
//     Тобто, як приклад
// Прокинулись - Поснідали - Зібрались - ПОїхали на роботу - Працююєте - Пообідали - Працюєте - Випили кави - Працюєте
// - Поїхали до дому - Повчились - Лягли спати.
//
//     Кожна функція має мати якесь успіше або не успішне виконання. Тобто можливий варіант, що при виконанні функції
//     доїхати на роботу ви стали в заторі і не попали на роботу. Або йдучи на обід ви забули гаманець і лишились голодні.

let energy = 0;
function wakeUp (isWakeUp, cb) {
    setTimeout(() => {
        if (isWakeUp) {
            energy += 100;
            cb(null, energy)
        } else {
            energy += 20
            cb('really want to sleep', energy)
        }
    }, 2000)
}
function haveBreakfast(isHaveBreakfast, cb) {
    setTimeout(() => {
        if (isHaveBreakfast && energy > 10) {
            energy = energy + 10;
            cb(null, energy)
        } else {
            cb('im want to eat', energy)
        }
    }, 2000)
}
function dressUp(isDressUp, cb) {
    setTimeout(() => {
        if (isDressUp && energy > 10) {
            energy = energy - 10;
            cb(null, energy)
        } else {
            cb('my clothes is dirty', energy)
        }
    }, 2000)
}
function goToJob (isTraffic, cb) {
    setTimeout(() => {
        if (isTraffic) {
            cb('Traffic is huge! Job - not today!', energy)
        } else {
            energy -= 10;
            cb(null, energy);
        }
    }, 2000)
}
function work (isWork, cb) {
    setTimeout(() => {
        if (isWork) {
            energy -= 20;
            cb(null, energy)
        } else {
            cb('today is easy day!', energy);
        }
    }, 2000)
}
function haveLunch (isHaveLunch, cb) {
    setTimeout(() => {
        if (isHaveLunch) {
            energy += 10;
            cb(null, energy)
        } else {
            cb('im want to have lunch', energy);
        }
    }, 2000)
}
function haveCoffee (isHaveCoffee, cb) {
    setTimeout(() => {
        if (isHaveCoffee) {
            energy += 5;
            cb(null, energy)
        } else {
            cb('im tired and want coffee', energy);
        }
    }, 2000)
}
function goToHome (isGoToHome, cb) {
    setTimeout(() => {
        if (isGoToHome) {
            cb(null, energy)
        } else {
            cb('im want to have lunch', energy);
        }
    }, 2000)
}
function haveDinner (isHaveDinner, cb) {
    setTimeout(() => {
        if (isHaveDinner) {
            energy += 10;
            cb(null, energy)
        } else {
            cb('im want to have lunch', energy);
        }
    }, 2000)
}
function goSleep (isGoToSleep, cb) {
    setTimeout(() => {
        if (isGoToSleep) {
            energy = 0;
            cb(null, energy)
        } else {
            cb('im want to have lunch', energy);
        }
    }, 2000)
}



wakeUp(true, (err, energy) => {
   if (err) {
       console.log (err)
   } else {
       console.log (`u have ${energy} energy now!`)
       haveBreakfast( true, (err, energy) => {
           if (err) {
               console.log (err)
           } else {
               console.log (` it was awesome breakfast, now u have ${energy} energy`);
               dressUp( true, (err, energy) => {
                   if (err) {
                       console.log (err)
                   } else {
                       console.log (`now u are ready for job!, u have ${energy} energy`);
                       goToJob( false, (err, energy) => {
                           if (err) {
                               console.log (err)
                           } else {
                               console.log (`i come to Job, and i have ${energy} energy`);
                               work( true, (err, energy) =>{
                                   if (err) {
                                       console.log (err)
                                   } else {
                                       console.log (`im working hard`);
                                       haveLunch( true, (err, energy) => {
                                           if (err) {
                                               console.log (err)
                                           } else {
                                               console.log (`its time to work, i have ${energy} energy`);
                                               work( true , (err, energy) => {
                                                   if (err) {
                                                       console.log (err)
                                                   } else {
                                                       console.log (`im working hard`);
                                                       haveCoffee( true, (err, energy) => {
                                                           if (err) {
                                                               console.log (err)
                                                           } else {
                                                               console.log (`coffee is tasty, i have ${energy} energy`);
                                                               work( true, (err, energy)=> {
                                                                   if (err) {
                                                                       console.log (err)
                                                                   } else {
                                                                       console.log (`im working hard`);
                                                                       goToHome(true, (err, energy) => {
                                                                           if (err) {
                                                                               console.log (err)
                                                                           } else {
                                                                               console.log (`home, sweet home... ${energy} energy`);
                                                                               haveDinner( true, (err, energy) => {
                                                                                   if (err) {
                                                                                       console.log (err)
                                                                                   } else {
                                                                                       console.log (`it was a beatiful dinner.. ${energy} energy`);
                                                                                       goSleep( true, (err, energy) => {
                                                                                           if (err) {
                                                                                               console.log (err)
                                                                                           } else {
                                                                                               console.log (`i go sleep. ${energy} energy`);
                                                                                           }
                                                                                       })
                                                                                   }
                                                                               })
                                                                           }
                                                                       })
                                                                   }
                                                               })
                                                           }
                                                       })
                                                   }
                                               })
                                           }
                                       })
                                   }
                               })
                           }
                       })
                   }
               })
           }
       })
   }
});
// let energy = 0;
// function wakeUp (isWakeUp) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isWakeUp) {
//                 energy = 100;
//                 resolve(energy)
//             } else {
//                 energy = 0;
//                 reject('u are dead')
//             }
//         }, 2000)
//     })
// }
// function haveBreakfast (isHaveBreakfast) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isHaveBreakfast) {
//                 energy += 10;
//                 resolve(energy)
//             } else {
//                 reject('u are hungry!')
//             }
//         }, 2000)
//     })
// }
// function dressUp (isDressUp) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isDressUp) {
//                 energy -= 5;
//                 resolve(energy)
//             } else {
//                 reject('first go and dress up')
//             }
//         }, 2000)
//     })
// }
// function goToWork (isGoToWork) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isGoToWork) {
//                 energy -= 15;
//                 resolve(energy)
//             } else {
//                 reject('traffic is awful. i will stay home today')
//             }
//         }, 2000)
//     })
// }
// function work (isWork) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isWork) {
//                 energy -= 20;
//                 resolve(energy)
//             } else {
//                 reject('easy day')
//             }
//         }, 2000)
//     })
// }
//
// wakeUp(true)
//     .then(rew => {
//         console.log (`Good morning, u have ${energy} energy`);
//         return haveBreakfast(rew)
//     })
//     .then(value => {
//         console.log (`u had breakfast and ${energy} energy`);
//         return dressUp(value)
//     })
//     .then(value => {
//         console.log (`your dress is awesome, but now u have ${energy} energy`);
//         return goToWork(value)
//     })
//     .then(value => {
//         console.log (`Easy way to my work, energy still ${energy}`);
//         return work(value)
//     }).then(value => {
//         console.log (`finally at work, let's start, energy is ${energy}`);
//     })
//     .catch(reason => {
//         console.log (reason);
//     })