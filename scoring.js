$(document).ready(function(){
  function score_indicate(){
    // このような記述をすることで、subject_pointsという変数の中に
    // [国語の点数,英語の点数,数学の点数,理科の点数,社会の点数]という配列を作成できる。
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];
    //console.log(subject_points.length);

    // さらにこのような記述をすることで、「合計点：」となっている右の部分に合計点が出力される
    let sum = subject_points[0];
    sum = sum + subject_points[1];
    sum = sum + subject_points[2];
    sum = sum + subject_points[3];
    sum = sum + subject_points[4];
    $("#sum_indicate").text(sum);



    // ここに、上記を参考にして平均点を出力する処理を書き込む
    let average = sum / subject_points.length;
    $('#average_indicate').text(average);
    return average;

  };

    function get_achievement(average){
    // ここに、ランクの値の文字列（平均点が80点以上なら"A"、60点以上なら"B"、
    //40点以上なら"C"、それ以下なら"D"）を出力する処理を書き込む
    if(average >= 80) {
      return "A";
    }
    else if (average >= 60) {
      return "B";
    }
    else if (average >= 40) {
      return "C";
    }
    else {
      return "D";
    }
  }


  function get_pass_or_failure(){
    // ここに、全ての教科が60点以上なら"合格"の文字列、
    //一つでも60点未満の教科があったら"不合格"の文字列を出す処理を書き込む
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];

    let judge = "合格";
    for(let i = 0; i < subject_points.length; i++) {
      if (subject_points[i] < 60) {
        judge = "不合格";
        break;
    }
  }
    return judge;

}


  function judgement(){
    // ここに、「最終ジャッジ」のボタンを押したら「あなたの成績はAです。合格です」といった内容を出力する処理を書き込む
    // 下記の記述をすることで、「最終ジャッジ」のボタンを押すと「あなたの成績は（ここに「ランク」の値を入れる）です。
    //（ここに「判定」の値を入れる）です」という文字の入った水色のフキダシが出力される処理が実装される。
    let ave = score_indicate();
    let achivement = get_achievement(ave);
    let pass_or_failure = get_pass_or_failure();

    $('#declaration').append(`<label id="alert-indicate" class="alert alert-info">あなたの成績は${achivement}です。${pass_or_failure}です</label>`);
  };

  $('#national_language, #english, #mathematics, #science, #society').change(function() {
    score_indicate();
  });

  $('#btn-evaluation').click(function() {
    //get_achievement();
    let ave = score_indicate()
    let achivement= get_achievement(ave);
    $('#evaluation').text(achivement);

  });

  $('#btn-judge').click(function() {
    get_pass_or_failure();
    $('#judge').text(get_pass_or_failure);

  });

  $('#btn-declaration').click(function() {
    judgement();

  });
});
// ここに書かれているjsの記述はあくまでヒントとして用意された雛形なので、書かれている記述に従わずに実装したいという場合は、自分の好きに実装して構わない。課題要件を満たし、コードの品質が一定の水準にあると判定されればどのような実装でも合格になる。
// 例ではJavaScriptとJqueryの両方の記述を使用しているが、どちらかに統一しても構わない
