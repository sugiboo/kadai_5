$(function(){
  // コミュニティメンバースライドショー
  $(".slider").slick();

  // faqアコーディオンメニュー
  $(document).on("click", ".m-question-box", function(){ // m-question-boxがクリックされたら
    $(this).next().slideToggle(); // ①回答がスライドして表示、非表示が切り替わる
    $(this).toggleClass("open"); // ②クリックしたら矢印の向きも変わる
  });
});