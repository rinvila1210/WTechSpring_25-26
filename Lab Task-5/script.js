function analyze() {

    var text = document.getElementById("text").value;
 
    if (text.trim() == "") {
        document.getElementById("output").innerHTML = "No text entered!";
        return;
    }
 
    var characters = text.length;
 
    var words = text.trim().split(/\s+/);
    var wordCount = words.length;
 
    var reverse = text.split("").reverse().join("");
 
    document.getElementById("output").innerHTML = "Total Characters: " + characters + "<br>" + "Total Words: " + wordCount + "<br>" + "Reversed Text: " + reverse;
}