const teachers = ["Nathan", "Ed", "Fabio", "Phil", "Carlo", "Lewis", "Luca"]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = teachers.reverse();
console.log(reversedTeachers);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];
for (i = 0; i < teachers.length; i++) {
  let currentTeacher = teachers[i];
  if (currentTeacher.length >= 5) {
    longNames.push(currentTeacher);
  }
}
console.log(longNames);

// 3. Rimuovi 'Ed' dall'array teachers
for (j = 0; j < teachers.length; j++) {
  if (teachers[j] == "Ed") {
    teachers.splice(j, 1);
  }
}
console.log(teachers);
