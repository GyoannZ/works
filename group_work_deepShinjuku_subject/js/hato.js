var fadeInTitle = document.getElementById("fade-in-title");
var fadeInBox = document.getElementById("fade-in-box");
// var fadeInContent = document.getElementById("fade-in-content");
var myArray = ["ハトはオスもメスもミルクのような液体を出すんだポッポー", "8月10日はハトの日だポッポー", "カワラバトは家畜化され野生化したポッポー", "ハト科は1年中繁殖できるポッポー", "実はドードーはハト科に含まれるポッポー", "カワラバトは「ドバト、土鳩」と呼ばれるポッポー", "わたしたちは雛を育てながら産卵できるポッポー", "ハトは森林が少ない方がよく現れるポッポー", "ハトは在来種じゃないけど約1500年前には日本にいたポッポー", "訓練されたハトは絵が上手いか下手かわかるポッポー", "賢いハトはクラシックと現代音楽を聴き分けられるポッポー", "伝書鳩はカワラバトが改良されたものだポッポー", "エジプトではハトが約5000年前から伝書鳩として利用されていたポッポー", "イギリス軍は世界大戦で約60万羽の軍用鳩を使ったポッポー", "日本では鳩は戦の神の使いと考えられていたポッポー", "江戸時代には鳩の餌を売る店があったポッポー", "日本では明治時代に伝書鳩が輸入されたポッポー", "ハトは動物愛護法、鳥獣保護法で守られているポッポー", "ハトは磁気が苦手ポッポー。磁石は近づけないでほしいポッポー", "ハトは歯がないので石を食べて歯がわりにしているポッポー", "ハトが首を振るのは視界を固定するためだポッポー", "都会で見られるハトはカワラバトという種類だポッポー", "わたしたちカワラバトはポッポーじゃなくてクルックーって鳴くポッポー", "HAL東京って略したらハトなんだぜ︙ポッポー", "自分たちが作った枠組みに囚われる人間は愚かだポッポー", "毎日が︙Everyday！ポッポー", "お腰につけたきびだんご、全部私にくださいなポッポー", "小泉明彦先生は58歳︙ポッポー", "神は死んだ︙ポッポー", "2、3、5、7、11、13、17、19、23、29︙ポッポー", "e^iπ+1＝0︙ポッポー", "吾輩は鳩である。ポッポー", "円は2点からの距離の和が等しい楕円の一種だポッポー", "大学芋の大学は東京大学だポッポー", "安全第一はもともと安全第三だったポッポー", "コクーンタワーは50階の上に屋上があるポッポー", "カナダは面積が世界2位だポッポー", "サムネイルはthumbnail、親指の爪って意味だポッポー", "ノンアルコールはアルコール1%未満のことだポッポー", "世界で1番売れた本は聖書だポッポー", "ライターはマッチより先に発明されたポッポー", "ピアノはピアノフォルテの略ポッポー","わたしの名前はパトリック。おしゃべりハトだポッポー","張さんはハトへのストーキングで逮捕されたポッポー","張さんの量刑は木曜日に懲役一日だポッポー"];

fadeInBox.innerHTML = (myArray[Math.floor(Math.random() * myArray.length)]);
function fadeInReset() {
    fadeInBox.classList.remove("active");
    fadeInBox.innerHTML = (myArray[Math.floor(Math.random() * myArray.length)]);
    fadeInBox.style.animation = "none";
    void fadeInBox.offsetWidth;
    fadeInBox.style.animation = null;
    fadeInBox.classList.add("active");
};
var fadeInRoop = setInterval(fadeInReset, 10000);
fadeInTitle.addEventListener("click", function () {
    fadeInReset();
    clearInterval(fadeInRoop);
    fadeInRoop = setInterval(fadeInReset, 10000);
});



var imgChangeObj = document.getElementById("image-change-object");
function imgChangeFunction() {
    imgChangeObj.src = `img/ogiri${Math.floor(Math.random() * 9) + 1}.png`;
};
window.onload = imgChangeFunction;



var inputName = document.getElementById("input-name");
var inputBox = document.getElementById("input-box");
var inputDisplay = document.getElementById("input-display");
var inputForm = document.getElementById("input-form");

inputForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var currentTime = new Date();
    var currentYear = currentTime.getFullYear();
    var currentMonth = currentTime.getMonth() + 1;
    var currentDay = currentTime.getDate();
    var currentHours = currentTime.getHours();
    var currentMinutes = currentTime.getMinutes();
    var currentSeconds = currentTime.getSeconds();
    if (Number(currentMonth) < 10) {
        currentMonth = "0" + String(currentMonth);
};
    if (Number(currentHours) < 10) {
        currentHours = "0" + String(currentHours);
    };
    if (Number(currentMinutes) < 10) {
        currentMinutes = "0" + String(currentMinutes);
    };
    if (Number(currentSeconds) < 10) {
        currentSeconds = "0" + String(currentSeconds);
    };
    var dateTimeNow = `${currentYear}/${currentMonth}/${currentDay} ${currentHours}:${currentMinutes}:${currentSeconds}`
    if (inputBox.value != "") {
        nameStr = inputName.value;
        if (nameStr == "") {
            nameStr = "名もなき鳩";
        };
        messageStr = inputBox.value;
        inputName.value = "";
        inputBox.value = "";
        inputDisplay.insertAdjacentHTML("beforeend", `<p class="posted"><span class="posted-contents">${messageStr}</span> -${nameStr} ${dateTimeNow}</p>`);
    };
});


// 7秒スクロール禁止

var scrollHandler = 1;
        var bodyTag = document.getElementById("body-tag");
        bodyTag.classList.add("hidden");
        function enableScroll() {
            scrollHandler = 0;
            bodyTag.classList.remove("hidden");
        };
        window.onload = setTimeout(enableScroll, 7000);
        function disableScroll(event) {
            if (scrollHandler == 1) {
                event.preventDefault();
            };
        };
        document.addEventListener("touchmove", disableScroll, { passive: false })
        document.addEventListener("mousewheel", disableScroll, { passive: false })


