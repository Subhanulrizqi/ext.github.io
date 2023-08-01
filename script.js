
// @match        https://login.angondata.net/interface/LoginService?service=interface&passive=true&rm=false
// @require  http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @require  https://gist.github.com/raw/2625891/waitForKeyElements.js




waitForKeyElements ("#urd", jNd => {jalanKanScript() }, true);

function jalanKanScript() {
  var tombol = document.createElement("button")
      tombol.innerHTML = "Isi Nilai Otomatis"
      tombol.id = "button"

      fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => response.json())
      .then(json => console.log(json))
  
    document.getElementsByClassName("box")[0].append(tombol);
  
    $("#button").on("click",function(){
    document.getElementById("urd").value = "angon_rizki"
    document.getElementById("urp").value = "rizkis4j4!!!"
    this.remove()
  });
}
