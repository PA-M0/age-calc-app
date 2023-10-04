let day = document.getElementById('day')
let month = document.getElementById('month')
let year = document.getElementById('year')
let resYear = undefined;
let resMonth = undefined;
let resDay = undefined;

let months = [31,28,31,30,31,30,31,31,30,31,30,31]
function validition(day,month,year) {
    let flag = 0
    month--;
    if (month == 1){
        if (year >= 1972 && ((year - 1972) % 4 === 0)) {
            flag = 1
        }
    }
    const now = new Date()
    let thisYear = now.getFullYear()
    if((day > 0 && day <= months[month] + flag) && (month <= 11 && 0 <= month) && (1970 <= year && year <= thisYear)){
        return 1
    }
    return 0
}

function invalidition() {
    console.log("invalid")
}

const checkInputs = function (){
    if (validition(day.value, month.value, year.value)){
        console.log("a")
        calcAge()
    }else{
        invalidition()
    }

}
const innerDate = (resYear, resMonth, resDay)=>{
     document.getElementById('resYear').innerHTML = resYear
     document.getElementById('resMonth').innerHTML = resMonth
     document.getElementById('resDay').innerHTML = resDay
}
const calcAge= ()=>{
    const birth = new Date(year.value, (month.value) - 1, day.value)
    const now = new Date()

    const diff = new Date(now.valueOf() - birth.valueOf())
    console.log(Math.abs(diff.getFullYear() - 1970))
    console.log(Math.abs(diff.getMonth() ))
    console.log(Math.abs(diff.getDay() ))

    resYear = Math.abs(diff.getFullYear() - 1970)
    console.log(resYear)
    resMonth = Math.abs(diff.getMonth() )
    resDay = Math.abs(diff.getDay() )
    innerDate(resYear, resMonth, resDay)
}

