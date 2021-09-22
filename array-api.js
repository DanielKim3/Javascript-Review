// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join();
    //join -> 배열에 있는 모든 elements들을 더해서 String으로 return한다. 내가 전달해준 separater 라는 문자열을 통해서 각각 구분자를 넣어서 string으로 만들어 준다.
    console.log(result);
  }
  
  // Q2. make an array out of a string
  {
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result = fruits.split()
    // string을 여러가지 문자열로 잘게 나누어주는데, 전달된 sperator를 받아와서 나눠준다.
    console.log(result);
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  {
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result);
  }
  
  // Q4. make new array without the first two elements
  {
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(0,2);
    //slice -> 배열의 특정한 부분을 return한다.
    console.log(result);
    console.log(array);
  }
  
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
  // Q5. find a student with the score 90
  {
      const result = students.find((student) =>
         student.score === 90);
      console.log(result);
  }
  
  // Q6. make an array of enrolled students
  {
      const result = students.filter((student) => student.enrolled);
      console.log(result);
  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  {
      const result = students.map((student) => student.score);
      console.log(result);
  }
  
  // Q8. check if there is a student with the score lower than 50
  {console.clear();
    const result = students.some((student) => student.score < 50);
    console.log(result);
    // 배열중에 어떤것이라도 하나 만족하는것이 있는지 없는지 검사 하려면some, 모든 배열의 조건이 만족해야 할때에는 every를 사용한다.

    const result2 = students.every((student) => student.score < 50);
    console.log(result2);
  }
  
  // Q9. compute students' average score
  {   //reduce는 배열에 있는 모든 값을 누적할때 사용
      const result = students.reduce((prev, curr) =>  prev + curr.score, 0);
      console.log(result / students.length);
  }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
      const result = students.map((student) => student.score)
      .filter(score => score>=50)
      .join();
      console.log(result);
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {
      const  result = students.map(student => student.score)
      .sort((a,b) => a - b)
      .join();
      console.log(result);
  }