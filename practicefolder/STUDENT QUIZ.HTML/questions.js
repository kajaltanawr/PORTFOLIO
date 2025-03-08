var listOfQue = JSON.parse(localStorage.getItem("Question"))
var anss = []
function saveQue() {
    let que = document.getElementById('que').value
    let op1 = document.getElementById('op1').value
    let op2 = document.getElementById('op2').value
    let op3 = document.getElementById('op3').value
    let op4 = document.getElementById('op4').value
    let ans = document.getElementById('ans').value
    var question = {
        quesion: que,
        a: op1,
        b: op2,
        c: op3,
        d: op4,
        ans: ans
    }
    listOfQue.push(question)
    localStorage.setItem("Question", JSON.stringify(listOfQue))
    showQuestions()
}
function showQuestions() {
    listOfQue = JSON.parse(localStorage.getItem("Question"))
    document.getElementById("show").innerHTML = listOfQue.map((que) => `
 <div style="box-shadow: 1px 1px 5px 1px gray; margin:25px; padding:25px">
 <h1>${que.Question}</h1>
 <h3>${que.option_1}</h3>
 <h3>${que.option_2}</h3>
 <h3>${que.option_3}</h3>
 <h3>${que.option_4}</h3>
 <h2> Answer is: ${que.ans}</h2>
 </div>
 `).join("")
}
function showTest() {
    console.log(listOfQue)
    document.body.innerHTML = listOfQue.map((que, i) => `
    <div style="box-shadow: 1px 1px 5px 1px gray; margin:25px; padding:25px">
        <h1>Question: ${que.Question}</h1>
        <input type="radio" onclick="selectOption(${i}, '${que.option_1}')" name="option${i}" />A. ${que.option_1} 
        <input type="radio" onclick="selectOption(${i}, '${que.option_2}')" name="option${i}" />B. ${que.option_2} 
        <input type="radio" onclick="selectOption(${i}, '${que.option_3}')" name="option${i}" />C. ${que.option_3} 
        <input type="radio" onclick="selectOption(${i}, '${que.option_4}')" name="option${i}" />D. ${que.option_4} 
        
    </div>
    `).join("")
        + "<button style='margin-top:20px' onclick='submit()'>submit</button>"
}
function selectOption(index, ansValue) {
    anss[index] = ansValue
    console.log(anss)
}
function submit() {
    let score = 0;
    console.log(anss, listOfQue)
    for (var i = 0; i < listOfQue.length; i++) {

        if (anss[i] == listOfQue[i].ans) {
            score++
        }
    }
    document.body.innerHTML = "<h1>" + score + "</h1>"
}