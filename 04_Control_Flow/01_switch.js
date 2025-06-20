const month1 = 3 // for number 
switch (month1) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;

    default:
        console.log("Default case match");
        break;  // break is used for break the control flow otherswise the after the require variable all the elements will print
}

const month2 = "JAN" // for number 
switch (month2) {
    case "JAN":
        console.log("January");
        break;
    case "FEB":
        console.log("February");
        break;
    case "MAR":
        console.log("March");
        break;
    case "APR":
        console.log("April");
        break;

    default:
        console.log("Default case match");
        break;  // break is used for break the control flow otherswise the after the require variable all the elements will print
}