$(function () {
  // 回した数を管理する変数
  let tyunisu = 0;

  let init = () => {
    // ビンゴカードの数字を初期化する処理
    let hoge = [];
    for (let i = 0; i <= 49; i++) {
      hoge.push(i);
    }
    let fuga = [];
    $.each(hoge, function () {
      let random = Math.floor(Math.random() * hoge.length);
      fuga.push(hoge.splice(random, 1)[0]);
    });
    $(".unko").map(function (n) {
      $(this).text(fuga[n]);
    });
    // ランダムで出た数字の色を初期化
    for (let i = 0; i < 50; i++) {
      $("#target_" + i).css("color", "black");
    }
    tyunisu = 0;
    $("#spin_count").val(0);
    $("#bingo_number").text("-");
  };

  init();

  $("#spin").on("click", function () {
    let random = Math.floor(Math.random() * 49) + 1;
    $("#bingo_number").text(random);
    $("#target_" + random).css("color", "red");
    tyunisu++;
    $("#spin_count").val(tyunisu);
  });

  $("#reset").on("click", function () {
    init();
  });
});
