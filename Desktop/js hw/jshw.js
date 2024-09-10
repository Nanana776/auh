

const evaluations = [
    {
    studentId: 1, // Unique identifier for each student
    studentName: "John Doe",
    courseId: 1, // Unique identifier for each course
    courseName: "JS Bootcamp",
    score: 70
    },
    {
    studentId: 1, // Unique identifier for each student
    studentName: "John Doe",
    courseId: 2, // Unique identifier for each course
    courseName: "JS Level 0",
    score: 60
    },
    {
    studentId: 1, // Unique identifier for each student
    studentName: "John Doe",
    courseId: 3, // Unique identifier for each course
    courseName: "JS Level 1",
    score: 50
    },
    {
    studentId: 2, // Unique identifier for each student
    studentName: "Tom Colins",
    courseId: 1, // Unique identifier for each course
    courseName: "JS Bootcamp",
    
    score: 60
    },
    {
    studentId: 2, // Unique identifier for each student
    studentName: "Tom Colins",
    courseId: 2, // Unique identifier for each course
    courseName: "JS Level 0",
    score: 50
    },
    {
    studentId: 2, // Unique identifier for each student
    studentName: "Tom Colins",
    courseId: 3, // Unique identifier for each course
    courseName: "JS Level 1",
    score: 40
    },
    {
    studentId: 3, // Unique identifier for each student
    studentName: "Sarah Conor",
    courseId: 1, // Unique identifier for each course
    courseName: "JS Bootcamp",
    score: 45
    },
    {
    studentId: 3, // Unique identifier for each student
    studentName: "Sarah Conor",
    courseId: 2, // Unique identifier for each course
    courseName: "JS Level 0",
    score: 35
    },
    {
    studentId: 3, // Unique identifier for each student
    studentName: "Sarah Conor",
    courseId: 3, // Unique identifier for each course
    
    courseName: "JS Level 1",
    score: 25
    }
    ]
/*function findMinEvalScore(arr){
    let minScoreHolder;
    let minScore=Infinity;
 
    for(let record of evaluations){
if (record.score<minScore){
minScore=record.score;
minScoreHolder=record;
}
 }
 return minScoreHolder;
}
findMinEvalScore(evaluations);

function findMinScoreName(arr){
    let lowScoreName='';
    
     let res=findMinEvalScore(evaluations);
   lowScoreName=res.studentName;
 console.log(lowScoreName);
}
findMinScoreName(evaluations);*/

/*function groupByScore(arr){
    let res=arr.filter((record)=>(record.score>60));
    console.log(res);
}
groupByScore(evaluations);*/
function groupBy(arr, getKey) {
    return arr.reduce((res,item)=>{
    const key=getKey(item);
         if (!res[key]){
             res[key]=[]};
          res[key].push(item);
          return res;
    },{});
}
function groupByAvg(arr){
        let IDGroup=groupBy(arr,record => record.studentId); 
  console.log( Object.keys(IDGroup).map(studentId=>{
  let records=IDGroup[studentId];
  let totalScore=records.reduce((sum, record) => sum+record.score, 0);
  let averageScore=totalScore/records.length;         
     if(averageScore<40){
 return {
 studentId:parseInt(studentId),
 studentName:records[0].studentName,
 averageScore:averageScore}}
}).filter(student=>student!==undefined));
}
groupByAvg(evaluations);
/*function groupBy(arr, getKey) {
    return arr.reduce((res,item)=>{
    const key=getKey(item);
         if (!res[key]){
             res[key]=[]};
          res[key].push(item);
          return res;
    },{});
}

function course_avgEval(arr){
    let courses=groupBy(arr,record=>record.courseId);
return Object.keys(courses).map(courseId=>{
    let records=courses[courseId];
    let totalScore=records.reduce((sum,record)=>sum+record.score,0);
    let average=totalScore/records.length;

    return{
        courseId:parseInt(courseId),
        courseName:records[0].courseName,
        average:average,
    }
})
}
console.log(course_avgEval(evaluations));*/