const menuButton = document.querySelector('.hamburger');
const navBar = document.querySelector('.navbar');
const body = document.querySelector('body').style;
const all = document.querySelector('*').style;

all.overflowX = 'hidden';
menuButton.addEventListener('click', (e) => {
    if(menuButton.classList.contains('is-active')) {
        menuButton.classList.remove('is-active');
        navBar.classList.remove('active');
        all.overflowY = 'auto';
        all.overflowX = 'hidden';
        
    } else {
        all.overflowY = 'hidden';
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

const media = window.matchMedia("(max-width: 35em)").matches;
const banner = document.querySelector('.banner');
logo.addEventListener('click', () =>{
  content.classList.add("anim-trans-out" );
  if(media) {
    all.overflowY = 'auto';
    body.overflowY = 'hidden';
    all.overflowX = 'hidden';
    banner.style.height = '200vh';
  } else {
    all.overflowY = 'hidden';
    all.overflowX = 'hidden';
    content.style.height = '100vh';
  }

    content.innerHTML = `
    <div class="contentMain">
    <h3 class="description">GAS SERVICE <br></br>Autoryzowany serwis</br> kotłów gazowych Immergas</h3>
          <h3 class="description">Firma Gas Service specjalzuje się w  uruchamianiu, serwisowaniu i naprawianiu awarii kotłów gazowych firmy Immergas.
            Usługi przeprowadzamy na ternie województwa świetokrzyskiego. Zapraszamy do kontaku przechodząc do zakładki "Kontakt".
          </h3>
          <div class="immergas"><img class="immergas" src="./public/piec (1).png"></div>
        </div>
    `;
    content.classList.remove( "anim-trans-out" );
    content.classList.add( "anim-trans-in" );
    setTimeout(() => content.classList.remove("anim-trans-in"), 1000);
});


aboutLink.addEventListener('click', () =>{
  content.classList.add( "anim-trans-out" );
  all.overflowY = 'auto';
  all.overflowX = 'hidden';
  body.overflowY = 'auto';
  body.overflowX = 'hidden';

  if(media) {
    banner.style.height = '400vh';
    all.overflowX = 'hidden';
    body.overflowX = 'hidden';
  } else {
    banner.style.height = 'auto';
    content.style.height = 'auto';
  }
    content.innerHTML = `
    <div class="contentAbout">
    <h3 class="aboutDescription">
          <br>
          Serwis gwarancyjny<br><br>
          Jako osoby z autoryzacją od producenta mają Państwo pewność, że piec jest rejestrowany w bazie danych oraz na pewno gwarancja będzie uwzględniona po serwisie.
          </h3>        
          <h3  class="aboutDescription">
          <br>
          Serwis pogwarancyjny<br><br>
          obejmuje on zwykły przegląd pod kątem wydajności i prawidłowego funkcjonowania jak i zarówno w przypadku niespodziewanych awarii. Bezpieczeństwo przy codziennej eksploatacji kotłów gazowych jest najważniejsze, a szczególnie w okresie pogwarancyjnym.
          </h3>        
        <h3  class="aboutDescription">
        <br>
          Dystrybucja części marki immergas<br><br>
          jako partner serwisowy posiadamy niemal natychmiastowy dostęp do części zamiennych. Twoja awaria będzie dzięki temu szybko i pewnie naprawiona.
          </h3>        
        <h3  class="aboutDescription">
        <br>
          Próby szczelności instalacji oraz urządzeń gazowych<br><br>
          Bezpieczeństwo w przypadku zasilania gazem domu bądź mieszkania jest priorytetem. Oferta obejmuje  zarówno piece gazowe jak i podłączenia oraz sprawdzenie instalacji gazowej pod kątem ewentualnych nieszczelności specjalnymi atestowanymi urządzeniami.
          </h3>        
        <h3 class="aboutDescription">
        <br>
          Analiza spalin potwierdzona wydrukiem<br><br>
          Zalecana, gdy potrzebujesz zweryfikować swój piec gazowy pod kątem prawidłowego działania.
          </h3>        
        <h3 class="aboutDescription">
        <br>
          Pierwsze uruchomienia kotłów gazowych<br><br>
          posiadamy specjalne uprawnienia do uruchomienia twojego świeżo zamontowanego kotła gazowego. Klient uzyskuje wtedy gwarancje ze strony producenta, którą można przedłużać corocznymi przeglądami technicznymi.
          </h3>        
        <h3 class="aboutDescription">
        <br>
          Coroczne przeglądy techniczne urządzeń<br><br>
          prowadzimy skrupulatną dokumentację i gdy tylko zbliża się termin serwisu odrazu się z Tobą skontaktujemy w celu umówienia się na ewentualną kontrolę.
          </h3>
          </div>        
    `;
    content.classList.remove( "anim-trans-out" );
    content.classList.add( "anim-trans-in");
    setTimeout(() => content.classList.remove("anim-trans-in"), 1000);
});

mapLink.addEventListener('click', () =>{
  content.classList.add( "anim-trans-out" );

  if(media) {
    all.overflowY = 'auto';
    body.overflowY = 'hidden';
    all.overflowX = 'hidden';
    banner.style.height = '150vh';
  } else {
    all.overflowY = 'hidden';
    banner.style.height = 'auto';
    content.style.height = '100vh';
  }
  if(media) {
    content.innerHTML = `
    <div class="contentMap">
    <h3>Nasze usługi świadczymy w promieniu 40km od Kielc.</h3>
      <div id="map"></div>
    </div>
    `;
  } else {
    content.innerHTML = `
    <div class="contentMap">
      <div id="map"></div>
      <h3>Nasze usługi świadczymy w promieniu 40km od Kielc.</h3>
    </div>
    `;
  }
    content.classList.remove( "anim-trans-out" );
    content.classList.add( "anim-trans-in" );
    setTimeout(() => content.classList.remove("anim-trans-in"), 1000);
    setTimeout(setupMap(), 2000)

});

contactLink.addEventListener('click', () =>{
  content.classList.add( "anim-trans-out" );
  if(media) {
    all.overflowY = 'auto';
    body.overflowY = 'hidden';
    all.overflowX = 'hidden';
    banner.style.height = '150vh';
  } else {
    all.overflowY = 'hidden';
    banner.style.height = 'auto';
    content.style.height = '100vh';
  }
    content.innerHTML = `
    <div class="contentContact">
    <div class="contactInfo">
    <h3>Kontakt:</h3>
    <ul class="about">
        <li>
          +48 881 933 164
        </li>
        <li>
        biuro@gasservice.pl
        </li>
        <li>
        Kielce ul. Zagórska 233/lok. 2
        </li>
       </ul>
       </div>
       <div class="formContainer">
       <form target="_blank" action="https://formsubmit.co/biuro@gasservice.pl" method="POST">
         <div class="form-group form-contact-data">
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
