function highestScore(students) {
  // Buat variabel buat menampung data baru
  var highest = {};
  for (var i = 0; i < students.length; i++) {
    if (highest[students[i].class] === undefined) {
      // Buat Kelas baru
      highest[students[i].class] = students[i];
      // console.log(students[i].class);
      // console.log(highest[students[i].class].class);
      delete highest[students[i].class].class;
    } else {
      if (students[i].score > highest[students[i].class].score) {
        // Jika skornya lebih tinggi
        highest[students[i].class] = students[i];
        delete highest[students[i].class].class;
      }
    }
  }
  return highest;
}

// TEST CASE
console.log(
  highestScore([
    {
      name: "Dimitri",
      score: 90,
      class: "foxes"
    },
    {
      name: "Alexei",
      score: 85,
      class: "wolves"
    },
    {
      name: "Sergei",
      score: 74,
      class: "foxes"
    },
    {
      name: "Anastasia",
      score: 78,
      class: "wolves"
    }
  ])
);

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }

console.log(
  highestScore([
    {
      name: "Alexander",
      score: 100,
      class: "foxes"
    },
    {
      name: "Alisa",
      score: 76,
      class: "wolves"
    },
    {
      name: "Vladimir",
      score: 92,
      class: "foxes"
    },
    {
      name: "Albert",
      score: 71,
      class: "wolves"
    },
    {
      name: "Viktor",
      score: 80,
      class: "tigers"
    }
  ])
);

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }

console.log(highestScore([])); //{}
