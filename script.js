const menuButton = document.querySelector('.hamburger');
const navBar = document.querySelector('.navbar');
menuButton.addEventListener('click', (e) => {
    if(menuButton.classList.contains('is-active')) {
        menuButton.classList.remove('is-active');
        navBar.classList.remove('active');
        
    } else {
        menuButton.classList.add('is-active');
        navBar.classList.add('active');
    }
})

const content = document.querySelector('.content')
const logo = document.querySelector('.logo');
const aboutLink = document.querySelector('#about');
const mapLink = document.querySelector('#map-nav');
const contactLink = document.querySelector('#contact');

const removeInTransition = () => {
  content.classList.remove("anim-trans-in");
}

logo.addEventListener('click', () =>{
  content.classList.add("anim-trans-out" );
    content.innerHTML = `
    <h1 id="description">Profesjonalny serwis piecy gazowych<\/h1>
    `;
    content.classList.remove( "anim-trans-out" );
    content.classList.add( "anim-trans-in" );
    setTimeout(() => content.classList.remove("anim-trans-in"), 1000);
});


aboutLink.addEventListener('click', () =>{
  content.classList.add( "anim-trans-out" );
    content.innerHTML = `
    <h2>Nasze usługi to:</h2>
    <ul class="about">
        <li>
          Serwis gwarancyjny
        </li>
        <li>
          Serwis pogwarancyjny
        </li>
        <li>
          Dystrybucja części marki immergas
        </li>
        <li>
          Próby szczelności instalacji oraz urządzeń gazowych
        </li>
        <li>
          Analiza spalin potwierdzona wydrukiem
        </li>
        <li>
          Pierwsze uruchomienia kotłów gazowych
        </li>
        <li>
          Coroczne przeglądy techniczne urządzeń
        </li>
       </ul>
    `;
    content.classList.remove( "anim-trans-out" );
    content.classList.add( "anim-trans-in");
    setTimeout(() => content.classList.remove("anim-trans-in"), 1000);
});

mapLink.addEventListener('click', () =>{
  content.classList.add( "anim-trans-out" );
    content.innerHTML = `
    <h2>Nasze usługi świadczymy w promieniu 40km od Kielc.</h2>
        <div id="map"></div>
    `;
    content.classList.remove( "anim-trans-out" );
    content.classList.add( "anim-trans-in" );
    setTimeout(() => content.classList.remove("anim-trans-in"), 1000);
    setTimeout(setupMap(), 2000)

});

contactLink.addEventListener('click', () =>{
  content.classList.add( "anim-trans-out" );
    content.innerHTML = `
    <h2>Kontakt:</h2>
    <ul class="about">
        <li>
          +48 881 933 164
        </li>
        <li>
          test@test.com
        </li>
       </ul>
       <div class="formContainer">
       <form target="_blank" action="https://formsubmit.co/piotr.chaja251@gmail.com" method="POST">
         <div class="form-group">
           <div class="form-row">
             <div class="col">
               <input type="text" name="name" class="form-control" placeholder="Twoje imię" required>
             </div>
             <div class="col">
               <input type="email" name="email" class="form-control" placeholder="Twój adres email" required>
             </div>
           </div>
         </div>
         <div class="form-group">
           <textarea placeholder="Twoja wiadomość" class="form-control" name="message" rows="10" required></textarea>
         </div>
         <input type="hidden" name="_next" value="http://chajson251.github.io/thanks.html">
         <button id="emailButton" type="submit" class="btn btn-lg btn-dark btn-block">Wyślij</button>
       </form>
     </div>
    `;
    content.classList.remove( "anim-trans-out" );
    content.classList.add( "anim-trans-in" );
    setTimeout(() => content.classList.remove("anim-trans-in"), 1000);
});

const setupMap = () => {
  const map = L.map('map').setView([50.866427241362565, 20.627648651884503], 9);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

    var circle = L.circle([50.866427241362565, 20.627648651884503], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 40000
    }).addTo(map);
}
