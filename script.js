$(function () {
  // 回した数を管理する変数
  let spin_manage = 0;
  let init = () => {
    // ビンゴカードの数字を初期化する処理
    let range = [];
    for (let i = 0; i <= 49; i++) {
      range.push(i);
    }
    let bingo_card = [];
    $.each(range, function () {
      let random = Math.floor(Math.random() * range.length);
      bingo_card.push(range.splice(random, 1)[0]);
    });
    $(".card_number").map(function (n) {
      $(this).text(bingo_card[n]);
    });
    // ランダムで出た数字の色を初期化
    for (let i = 0; i < 50; i++) {
      $("#target_" + i).css("color", "black");
    }
    spin_manage = 0;
    $("#spin_count").val(0);
    $("#bingo_number").text("-");
  };

  init();

  $("#spin").on("click", function () {
    let random = Math.floor(Math.random() * 49) + 1;
    let spin_number = [];
    $.each(random, function () {
      let random_spin = Math.floor(Math.random() * random.length);
      random.push(random.splice(random_spin, 1)[0]);
    });
    $("#bingo_number").text(random);

    $("#target_" + random).css("color", "red");
    spin_manage++;
    $("#spin_count").val(spin_manage);
  });

  $("#reset").on("click", function () {
    init();
  });
});
