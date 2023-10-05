let day = document.getElementById('day')
let month = document.getElementById('month')
let year = document.getElementById('year')
let resYear = undefined;
let resMonth = undefined;
let resDay = undefined;

let dayNotif = document.getElementById('day-notif')
let monthNotif = document.getElementById('month-notif')
let yearNotif = document.getElementById('year-notif')

months = [31,28,31,30,31,30,31,31,30,31,30,31]
function validition(day,month,year) {
    let flag = 0
    month--;
    if (month == 1){
        if (year >= 1972 && ((year - 1972) % 4 === 0)) {
            flag = 1
        }
    }
    const now = new Date()
    let invalidYear = 1
    let invalidMonth = 1
    let invalidDay = 1
    let thisYear = now.getFullYear()
    if((day > 0 && day <= months[month] + flag)){
        console.log("bb")
        invalidDay = 0
        valid_change_style_label_day()
        document.getElementById('day-notif').innerHTML = ""
        valid_change_style_border_day()
    }
    if( (month <= 11 && 0 <= month) ){
        console.log("aa")
        invalidMonth = 0
        valid_change_style_label_month()
        document.getElementById('month-notif').innerHTML = ""
        valid_change_style_border_month()
    }
    if( (1970 <= year && year <= thisYear)){
        invalidYear = 0
        valid_change_style_label_year()
        document.getElementById('year-notif').innerHTML = ""
        valid_change_style_border_year()
    }
    else{}

    if(invalidDay === 1 || invalidMonth === 1 || invalidYear === 1)
        invalidition(invalidDay, invalidMonth, invalidYear)
    else
        return 1
}


const invalid_change_style_label_day = () =>{
    const label = document.getElementById('day-label')
    label.style.color = 'var(--error)'
}
const invalid_change_style_label_month = () =>{
    const label = document.getElementById('month-label')
    label.style.color = 'var(--error)2'
}
const invalid_change_style_label_year = () =>{
    const label = document.getElementById('year-label')
    label.style.color = 'var(--error)'
}
const valid_change_style_label_year = () =>{
    const label = document.getElementById('year-label')
    label.style.color = 'green'
}
const valid_change_style_label_month = () =>{
    const label = document.getElementById('month-label')
    label.style.color = 'green'
}
const valid_change_style_label_day = () =>{
    const label = document.getElementById('day-label')
    label.style.color = 'green'
}

const invalid_change_style_border_day = () =>{
    const input = document.getElementById('day')
    input.style.borderColor = 'var(--error)'
}
const invalid_change_style_border_month = () =>{
    const input = document.getElementById('month')
    input.style.borderColor = 'var(--error)'
}
const invalid_change_style_border_year = () =>{
    const input = document.getElementById('year')
    input.style.borderColor = 'var(--error)'

}
const valid_change_style_border_year = () =>{
    const input = document.getElementById('year')
    input.style.borderColor = 'green'

}
const valid_change_style_border_day = () =>{
    const input = document.getElementById('day')
    input.style.borderColor = 'green'

}
const valid_change_style_border_month = () =>{
    const input = document.getElementById('month')
    input.style.borderColor = 'green'

}



function invalidition(invalidDay, invalidMonth, invalidYear) {
    console.log(invalidDay)
    console.log(invalidMonth)
    console.log(invalidYear)
     if(invalidDay === 1){
        console.log("invalid day")
         document.getElementById('day-notif').innerHTML = "Must be valid Day"
         invalid_change_style_label_day()
         invalid_change_style_border_day()
     }
    if(invalidMonth === 1){
        console.log("invalid month")
        document.getElementById('month-notif').innerHTML = "Must be valid Month"
        invalid_change_style_label_month()
        invalid_change_style_border_month()

    }
    if(invalidYear === 1){
        console.log("invalid year")
        document.getElementById('year-notif').innerHTML = "Must be valid Year"
        invalid_change_style_label_year()
        invalid_change_style_border_year()
    }
}
const is_empty = () =>{
    if((day.value === "") || (month.value === "") || (year.value === ""))
        return 1
    return 0
}

const empty_notification = ()=>{

    if(day.input === undefined) {
        const empty_day_notif = () => document.getElementById('day-notif').innerHTML = "This field is required"

    }
    if(month.input === undefined) {
        const empty_month_notif = () => document.getElementById('month-notif').innerHTML = "This field is required"
    }
    if(year.input === undefined) {
        const empty_year_notif = ()=>{
            document.getElementById('year-notif').innerHTML = "This field is required"
       console.log(11111)
        }
        empty_year_notif()

    }


}

const checkInputs = function (){
    if(is_empty()){
        empty_notification()
        return
    }
    if (validition(day.value, month.value, year.value)){
        calcAge()
        valid_change_style_label_day()
        valid_change_style_label_month()
        valid_change_style_label_year()
        valid_change_style_border_day()
        valid_change_style_border_month()
        valid_change_style_border_year()
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
    // console.log(Math.abs(diff.getFullYear() - 1970))
    // console.log(Math.abs(diff.getMonth() ))
    // console.log(Math.abs(diff.getDay() ))

    resYear = Math.abs(diff.getFullYear() - 1970)

    resMonth = Math.abs(diff.getMonth() )
    resDay = Math.abs(diff.getDay() )
    innerDate(resYear, resMonth, resDay)
}

