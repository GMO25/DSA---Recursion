const names = {
 chart: ['Zuckerberg ', 'Schroepfer', 'Bosworth', 'Steve','Kyle', 'Andra', 'Zhao','Richie','Sofia','Jen','Schrage','VanDyck','Sabrina','Michelle',
         'Josh',
     'Swain',
         'Blanch',
         'Tom',
         'Joe',
 'Sandberg',
     'Goler',
         'Eddie',
         'Julie',
        'Annie',
    'Hernandez',
         'Rowi',
         'Inga',
         'Morgan',
    'Moissinac',
         'Amy',
         'Chuck',
         'Vinni',
    'Kelley',
         'Eric',
         'Ana',
         'Wes']
}
//let indentSequence = [0,4,8,11,11,11,8,11,11,11,4,8,11,11,11,8,11,11,11,4,8,11,11,11,8,11,11,11,8,11,11,11,8,11,11,11]


const OrganizerTabs = function (N,names){

 //base case 
let bold;
let small;
let med;
let large;


let newOrgAll = names.chart
 

 const print = function (newOrg){
        newOrgAll.map(element => {
            element.toString()
           
        var br = document.createElement("br")
        var span = document.createElement("span")
        span.innerHTML = element
        // need to figure out a way to make each name selectable 
        span.className = element
        document.getElementById("test").append(span)
        //document.getElementById("test").append(element)
        document.getElementById("test").appendChild(br)
        // if text has bold, small, med or large - make bold, indent 40px etc. 
      // DOM MANIPULATION METHODS  & parsing behaviour 
            
           // document.getElementById("test").querySelector(`.${element}`).style.fontWeight = "900";
       }) 
 }


 if (N == names.chart.length){
  return print(newOrgAll)
 }
OrganizerTabs(N + 1, names)

 //OrganizerTabs(N+1,names,bold) // literally just loop 35 times 
 if(names.chart[N] == names.chart[1] || names.chart[N] == names.chart[2] || names.chart[N] == names.chart[5]||names.chart[N] == names.chart[9] || names.chart[N] == names.chart[10] || names.chart[N] == names.chart[14]||names.chart[N] == names.chart[15] || names.chart[N] == names.chart[16] || names.chart[N] == names.chart[18] || names.chart[N] == names.chart[22]){
  //bold 
   bold = names.chart[N]
    document.getElementById("test").querySelector(`.${bold}`).style.fontWeight = "900"

}
 
 if(names.chart[N] == names.chart[1]|| names.chart[N] == names.chart[10] || names.chart[N] == names.chart[19]){
  //small
   small = names.chart[N]
  console.log(small)
  //document.getElementById("test").append(small)
  //document.getElementById("test").querySelector(`.${small}`).style.textIndent = '40px'
  document.getElementById("test").querySelector(`.${small}`).id = 'small'
  document.getElementById("test").querySelector(`.${small}`)
 }
if(names.chart[N] == names.chart[2]|| names.chart[N] == names.chart[6] || names.chart[N] == names.chart[11] || names.chart[N] == names.chart[15]||names.chart[N] == names.chart[20] || names.chart[N] == names.chart[24] || names.chart[N] == names.chart[28]|| names.chart[N] == names.chart[32]){
 //med
med = names.chart[N]
console.log(med)
document.getElementById("test").querySelector(`.${med}`).id = 'med'
}
if(names.chart[N] == names.chart[3]|| names.chart[N] == names.chart[4] || names.chart[N] == names.chart[5] || names.chart[N] == names.chart[7]||names.chart[N] == names.chart[8] || names.chart[N] == names.chart[9] || names.chart[N] == names.chart[12]|| names.chart[N] == names.chart[13]||names.chart[N] == names.chart[14]|| names.chart[N] == names.chart[16] || names.chart[N] == names.chart[17] || names.chart[N] == names.chart[18]||names.chart[N] == names.chart[21] || names.chart[N] == names.chart[22] || names.chart[N] == names.chart[23]|| names.chart[N] == names.chart[25]||names.chart[N] == names.chart[26]|| names.chart[N] == names.chart[27] || names.chart[N] == names.chart[29] || names.chart[N] == names.chart[30]||names.chart[N] == names.chart[31]|| names.chart[N] == names.chart[33]|| names.chart[N] == names.chart[34]|| names.chart[N] == names.chart[35]){
 //large
large = names.chart[N]
console.log(large)
document.getElementById("test").querySelector(`.${large}`).id = 'large'
  
}


}




let N = 0;
OrganizerTabs(N,names)

//How to Indent
//document.getElementById("output").style.textIndent = "0px"