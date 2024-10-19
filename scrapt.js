



/***

var typed = new Typed(".typing",{
    strings:["","Web Designer","Front-end Developer","Web Developer","Full-stack Developer"],
    typeSpeed:10,
    BackSpeed:1000,
    loop:true
})
**************************************************************************/
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
    for(let i=0; i<totalNavList; i++)
    {
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function(){
            removeBackSection();
            for(let j=0; j<totalNavList; j++){
                if(navList[j].querySelector("a").classList.contains("active")){
                    addBackSection(j);
                    // allSection[j].classList.add("back-section")
                }
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active")
            showSection(this);
            if(window.innerWidth < 1200){
                asideSectionTogglerBtn();
            }
        })
    }
    function removeBackSection(){
        for(let i=0; i<totalSection; i++){
            allSection[i].classList.remove("back-section");
        }
    }
    function addBackSection(num){
        allSection[num].classList.add("back-section")
    }
    function showSection(element){
        for(let i=0; i<totalSection; i++){
            allSection[i].classList.remove("active");
        }
        const target = element.getAttribute("href").split("#")[1];
        document.querySelector("#" + target).classList.add("active")
    }
    function updateNav(element){
        for(let i=0; i<totalNavList; i++){
            navList[i].querySelector("a").classList.remove("active");
            const target = element.getAttribute("href").split("#")[1];
            if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]){
                navList[i].querySelector("a").classList.add("active");
            }
        }
    }
    document.querySelector(".hire-me").addEventListener("click", function(){
        const sectionIndex = this.getAttribute("data-section-index");
        //console.log(sectionIndex);
        showSection(this);
        updateNav(this);
        removeBackSection();
        addBackSection(sectionIndex);
    })
    const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
    navTogglerBtn.addEventListener("click", () => {
        asideSectionTogglerBtn();
    })
    function asideSectionTogglerBtn (){
        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");
        for(let i=0; i<totalSection; i++){
            allSection[i].classList.toggle("open");
        }
    }
/***********************************************************************************/
            // تحميل الرسوم المتحركة
          const animation = lottie.loadAnimation({
             container: document.getElementById('lottie-animation'), // العنصر الذي سيحتوي الرسوم المتحركة
            renderer: 'svg', // نوع المحرك
             loop: true, // تكرار الرسوم المتحركة
             autoplay: true, // بدء التشغيل تلقائيًا
             path: 'https://lottie.host/c0b9a338-5259-48d3-81ec-ff0fb081ba18/ntV6ztnN7g.json',

          });
    
         window.onload = function() {
            const loaderWrapper = document.getElementById('loader-wrapper');
           const content = document.getElementById('content');
                
              // إظهار اللودينغ لمدة 10 ثوانٍ
             setTimeout(function() {
                 loaderWrapper.style.opacity = '0'; // بدء تأثير التلاشي
                 setTimeout(function() {
                     loaderWrapper.style.display = 'none'; // إخفاء اللودينغ بعد التلاشي
                     content.classList.remove('hidden'); // إظهار المحتوى
                }, 500); // تأخير قبل إخفاء اللودينغ
             }, 5000); // 10000 مللي ثانية (10 ثوانٍ)
         };
/***********************************************************************************/
const textElement = document.getElementById('animated-text');
const words = ["Web Designer","Front-end Developer","Web Developer","Full-stack Developer"];
let wordIndex = 0;

function displayWord(word) {
    textElement.innerHTML = ''; // مسح النص الحالي

    word.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.classList.add('letter');
        span.style.animationDelay = `${index * 0.1}s`; // ضبط زمن التأخير بين الأحرف
        textElement.appendChild(span);
    });
}

function changeWord() {
    const letters = textElement.querySelectorAll('.letter');
    letters.forEach((letter, index) => {
        letter.style.animation = `fadeOut 0.8s forwards ${index * 0.05}s`; // تحسين تلاشي الأحرف للأعلى بشكل سلس
    });

    setTimeout(() => {
        wordIndex = (wordIndex + 1) % words.length; // الانتقال للكلمة التالية
        displayWord(words[wordIndex]);
    }, 1000); // الانتظار حتى تختفي الأحرف تماماً
}

// بدء عرض الكلمة الأولى وتغييرها بشكل دوري
displayWord(words[wordIndex]);
setInterval(changeWord, 5000); // تغيير الكلمة كل 3 ثوانٍ
