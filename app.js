// let qualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.phil", "PhD"]
// for (let i=0; i<=qualification.length; i++){
//     console.log (i + ")"+(qualification[i]))
//     document.write (i + ")"+(qualification[i]) + "<br/>")
// }

// let students_name = ["Micheal", "Jordon", "Robert"]
// let students_score = [345, 359, 365]
// let total_marks = 500
// for(i=0; i<students_name.length; i++){
//     let Percentage = (students_score[i]/total_marks*100)
//     console.log("Score of " + students_name[i] + " is " + students_score[i] + "." + "Percentage:" + Percentage +"%")
// }

let color_input = prompt("Please enter name of color to add");
let color_arr = ["Red","Pink","Black","Blue","Green"];
color_arr.unshift(color_input);
for(let i=0; i<=color_arr.length; i++){
    console.log (color_arr[i]);
    document.write (color_arr[i]);
}


