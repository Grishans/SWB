/*Paralax*/

//Получаем элемент фона с деревом
const bgMove = document.querySelector("#Paralax__img");
const bgCondition = document.querySelector("#Paralax__img_condition");
const bgConditionBottom = document.querySelector(
  "#Paralax__img_condition_bottom"
);

//При движении мышью вызываем функцию, которая меняет положение фона
document.addEventListener("mousemove", function (e) {
  MoveBackground(e);
});

function MoveBackground(e) {
  //Рассчитываем, насколько далеко от начала оси находится курсор: 0 - 0, 0.5 - середина экрана, 1 - ширина экрана (например, 1920)
  //Затем умножаем получившееся число на 30 - настолько будет сдвигаться фон
  //Например, если курсор находится посередине страницы (0.5), то при умножении получится 15
  //Далее отнимаем половину от 30, чтобы фон мог двигаться как влево, так и вправо

  let offsetX = (e.clientX / window.innerWidth) * 10 - 15;
  let offsetY = (e.clientY / window.innerHeight) * 10 - 5;

  //Меняем положение фона
  bgMove.setAttribute("style", "left: " + offsetX + "px");
  bgCondition.setAttribute("style", "left: " + offsetX + "px");
  bgConditionBottom.setAttribute("style", "left: " + offsetX + "px");
}
/*/Paralax*/

function borderRadiusSlider() {
  let slirePartnersFirst = document.querySelectorAll(
    ".partnersSlider > .slick-list > .slick-track > .slick-slide > div > a > img"
  );

  for (let i = 0; i < slirePartnersFirst.length; i++) {
    if (i === 0) {
      slirePartnersFirst[i].style.borderBottomRightRadius = "40px";
    } else if (i === 1) {
      slirePartnersFirst[i].style.borderTopRightRadius = "40px";
    } else if (i === slirePartnersFirst.length - 1) {
      slirePartnersFirst[i].style.borderTopLeftRadius = "40px";
    } else if (i === slirePartnersFirst.length - 2) {
      slirePartnersFirst[i].style.borderBottomLeftRadius = "40px";
    } else if (i % 2) {
      slirePartnersFirst[i].style.borderTopLeftRadius = "40px";
      slirePartnersFirst[i].style.borderTopRightRadius = "40px";
    } else {
      slirePartnersFirst[i].style.borderBottomLeftRadius = "40px";
      slirePartnersFirst[i].style.borderBottomRightRadius = "40px";
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  borderRadiusSlider();
});
