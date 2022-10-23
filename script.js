$(function () {
  // 回した数を管理する変数
  let spin_manage = 0;
  let init = () => {};
  let random = Math.floor(Math.random() * 49) + 1;
  $(".card_number").map(function () {
    random = Math.floor(Math.random() * 49) + 1;
    $(this).text(random);
    let loop = [];
    loop.push(random);
    console.log(loop);
  });

  $("#spin").on("click", function () {
    let;
  });

  $("#reset").on("click", function () {});
});

// 更新するとビンゴカードの数字が０から４９までの整数がランダムで配置される(数字が被らないように)
// 回すを押すと０から４９までの整数がランダムで数字が表示される(数字が被らないように)
// 回した回数をカウント
// 出た数字を赤文字にする
// リーチ、ビンゴの数をカウント
// リセットボタンで全てクリア

// let random = Math.floor(Math.random() * 49) + 1;
// let spin_number = [];
// $.each(random, function () {
//   let random_spin = Math.floor(Math.random() * random.length);
//   random.push(random.splice(random_spin, 1)[0]);
// });
// $("#bingo_number").text(random);

// $("#target_" + random).css("color", "red");
// spin_manage++;
// $("#spin_count").val(spin_manage);

// let init = () => {
//   // ビンゴカードの数字を初期化する処理
//   let range = [];
//   for (let i = 0; i <= 49; i++) {
//     range.push(i);
//   }
//   let bingo_card = [];
//   $.each(range, function () {
//     let random = Math.floor(Math.random() * range.length);
//     bingo_card.push(range.splice(random, 1)[0]);
//   });
//   $(".card_number").map(function (n) {
//     $(this).text(bingo_card[n]);
//     $(this).prop("id", "display_number_" + n);
//     console.log("display_number_" + n);
//   });
//   // ランダムで出た数字の色を初期化
//   for (let i = 0; i < 50; i++) {
//     $("#target_" + i).css("color", "black");
//   }
//   spin_manage = 0;
//   $("#spin_count").val(0);
//   $("#bingo_number").text("-");
// };
