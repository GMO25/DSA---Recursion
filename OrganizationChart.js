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

const OrganizerTabs = function (N,names){

let indentSequence = [0,4,8,11,11,11,8,11,11,11,4,8,11,11,11,8,11,11,11,4,8,11,11,11,8,11,11,11,8,11,11,11,8,11,11,11]



//let newOrganizedObject = object.chart[1].toString().bold()
if (N == 36){
 let newOrgAll = names.chart
 newOrgAll.map(element => {
  
  var br = document.createElement("br")
  var span = document.createElement("span")
  span.innerHTML = element
  // need to figure out a way to make each name selectable 

  document.getElementById("test").append(span)
  //document.getElementById("test").append(element)
  
  document.getElementById("test").appendChild(br)
 }) 
}


//console.log(newOrgAll)
//let newOrg1 = object.chart[1]
//let newOrg2 = object.chart[2]
// loop through all elements in the array and apply this doc stuff?



OrganizerTabs(N+1,names)
if (names.chart[N] == names.chart[1] || names.chart[N] == names.chart[2]|| names.chart[N] == names.chart[5]){
let boldOnes = names.chart[N]
console.log(boldOnes)

// select the bold one index 
// we have ref of this 
// find it in document - might have to use span 

//document.getElementById("test").innerText.bold()
}
//document.getElementById("output").innerHTML = newOrgAll

 //How to Indent
 //document.getElementById("output").style.textIndent = "0px"

}
let N = 0;
OrganizerTabs(N,names)

