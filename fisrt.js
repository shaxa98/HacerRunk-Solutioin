// function gradingStudents(grades) {
//   let finalGrades = grades.map((grade) => {
//     return grade >= 38 && grade % 5 >= 3 ? grade - (grade % 5) + 5 : grade;
//   });
//   return finalGrades;
// }
// //int: the length of the longest subarray that meets the criterion
// function pickingNumbers(a) {
//   let max = 0;
//   let values = new Array(100).fill(0);

//   (a || []).forEach((value) => {
//     values[value]++;
//   });

//   return values.reduce((target, value, index) => {
//     index >= 1 &&
//       value + values[index - 1] > target &&
//       (target = value + values[index - 1]);

//     return target;
//   }, []);
// }
function makeBox(number) {
  for (let i = 0; i < number; i++) {
    let divbox = '<div class="box"></div>';
    divbox++;

    //container[i].innerHTML = result;
    console.log(divbox);
  }
}

makeBox(10);
