function Calculation(){
    var marksScored = document.getElementById('marksScored');
    var totalMarks = document.getElementById('totalMarks');
    var all = document.getElementById("all");


    function finalResult(){
        var x = parseFloat(marksScored.value);
        var y = parseFloat(totalMarks.value);
        if(!marksScored.value || !totalMarks.value){
            location.reload;
            alert("Please Insert Value")
        }
        else if(x > y){
            location.reload;
            alert("Wrong Marks Entered");         
        } 
        else{
            var percentageScored = (x/y)*100;

            location.reload;
            alert(percentageScored + "%")
        }
    };

    all.addEventListener('submit', finalResult() );
}
