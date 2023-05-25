console.log(`hello hello`);
let imagedefault = "https://t4.ftcdn.net/jpg/02/83/77/07/360_F_283770798_59iQkl3dEfSgiFHUuvnlZmHJPGZz0Omw.jpg";
let imageloading = "https://img.freepik.com/premium-vector/update-concept-application-loading-process-symbol-web-screen-vector-illustration-flat_186332-1253.jpg";

let DOMimagefordisplay = document.getElementById("imagefordisplay");
DOMimagefordisplay.src = imagedefault;

let DOMtitle = document.getElementById("title");
let DOMdate = document.getElementById("date");
let DOMexplanation = document.getElementById("explanation");

function loadNASAData()
{
 console.log('ent.. loadNASAData function');
  DOMimagefordisplay.src = imageloading;
 
  
//   api key
  let apifullendpoint = "https://api.nasa.gov/planetary/apod?api_key=tKnT9as9wXJyQTJuxhVy0Ds5o6JIgbJBUtgzdMdY";
  console.log(apifullendpoint);
  
  
  fetch(apifullendpoint).then(
  function(response){
    return response.json();
    }
  ).then(
    function(json){
      console.log(json);
      
      DOMtitle.innerHTML = json.title;
      
      DOMexplanation.innerHTML = json.explanation;
      
      DOMdate.innerHTML = json.date;
      
      DOMimagefordisplay.src = json.url;
      

//          //show the date. DOM is ready. 
//             DOMdate.innerHTML = json.date;
//             //show the explanation. DOM is ready.
//             DOMexplanation.innerHTML = json.explanation;
//             //show the title. DOM is ready. 
//             DOMtitle.innerHTML = json.title;
//             //show the image. alrady I have DOM
//             DOMimagefordisplay.src = json.url;


                                    
    }
    ).catch(function(error)
           {
        console.log(error);
   })
  ;
}
