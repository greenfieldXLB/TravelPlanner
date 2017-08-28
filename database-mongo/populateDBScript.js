//  READ THIS BEFORE RUNNING SCRIPT:

// THIS FUNCTION IS FOR POPULATINZG THE DB WITH RECIPE IDs.
// ONLY RUN FOR ~8 FOOD TYPES AT A TIME. OTHERWISE YOU MAY ENCOUNTER ERRORS. */

const request = require('request');
const rp = require('request-promise');
const db = require ('./index.js');
const Trip = require('./trips.js');
const Users = require('./users.js');
const data = require('./fakeDbData');

var tripsArray = [];

var randomId = function() {
 var a = Math.random(0, 1) * 1000000000
 var b = a.toString();
 var c = parseInt(b);
 return c;
}

var testdata = data.data;
testdata.forEach(trip => {
  let newTrip = new Trip;
    newTrip.id = randomId();
    newTrip.food = trip.food[0];
    newTrip.attractions = trip.attractions[0];
    newTrip.lodging = trip.lodging[0];
    newTrip.destination = trip.destination[0];
    newTrip.startDate = trip.startDate[0];
    newTrip.endDate = trip.endDate[0];
    newTrip.save(err => {
      if (err) {
        throw err;
      } else {
        console.log('Data successfully saved');
      }
    });
})



// var savedata = function(array) {
//   for (var i = 0; i < array.length; i++) {
//     let newTrip = new Trip;
//     newTrip.id = randomId();
//     newTrip.food = testdata[i].food[0];
//     newTrip.attractions = testdata[i].attractions[0];
//     newTrip.lodging = testdata[i].lodging[0];
//     newTrip.destination = testdata[i].destination[0];
//     newTrip.startDate = testdata[i].startDate[0];
//     newTrip.endDate = testdata[i].endDate[0];
//     newTrip.save();
// // err => {
// //       if (err) {
// //         throw err;
// //       } else {
// //         console.log('The data successfully saved');
// //       }
// //     })
// //   }
//   }
// }





//       data.forEach(recipe => {
//         if (recipe.rating >= 4 && !recipeSet.has(recipe.id)) {
//           recipeSet.add(recipe.id);

//           let newRecipe = new Recipe;
//           newRecipe.name = recipe.id;
//           newRecipe.fullDataSorter = false;
//           newRecipe.rating = recipe.rating;
//           newRecipe.abridgedData = recipe;
//           newRecipe.fullData = null;
//           newRecipe.save(err => {
//             if (err) {
//               throw err;
//             } else {
//               console.log('Data successfully saved');
//             }
//           });
//         }
//       });
//     })
//     .catch(err => {
//       console.log(err);
//     });
//   }, timeBase * index);
// });

// /*
// grabvalues = function(array) {
//   for (var i = 0; i < array.length; i++) {
//     console.log(array[i].food[0]);
//     console.log(array[i].attractions[0])
//     console.log(array[i].lodging[0])
//   }
// }
