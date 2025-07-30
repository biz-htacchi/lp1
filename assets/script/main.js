// //==============================================//
// // ハンバーガーメニュー //
// var hamburger = $('.header__hamburger-menu');

// // OPEN/CLOSEボタンをクリックしたら
// $('.header__hamburger-button').on('click', function () {
//   // .hamburgerの表示・非表示を繰り返す
//   hamburger.toggleClass('header__hamburger-menu-active');
// });

// // アンカーリンクをクリックしたら閉じる
// $('.header__header-btn').on('click', function () {
//   // ハンバーガーメニューを閉じる
//   hamburger.removeClass('header__hamburger-menu-active');
// });

// // 画面幅のサイズが変わったら
// $(window).on('resize', function () {
//   // ハンバーガーメニューを閉じる
//   hamburger.removeClass('header__hamburger-menu-active');
// });

document.addEventListener('DOMContentLoaded', () => {

  const hamburgerButton = document.querySelector('.header__hamburger-button');
  const hamburgerMenu = document.querySelector('.header__hamburger-menu');

  if (hamburgerButton && hamburgerMenu) { // (D')
    hamburgerButton.addEventListener('click', () => {
      hamburgerMenu.classList.toggle('header__hamburger-menu-active'); // (F')
    });

    // メニュー内のリンクをクリックしたらメニューを閉じる
    // 現在のjQueryコードの .header__header-btn に相当する要素が nav 内のaタグと仮定
    const menuLinks = hamburgerMenu.querySelectorAll('a'); // (H')
    menuLinks.forEach(link => { // (I')
      link.addEventListener('click', () => {
        hamburgerMenu.classList.remove('header__hamburger-menu-active'); // (J')
      });
    });
  }

  // 画面幅のサイズが変わったらメニューを閉じる処理 (L')
  window.addEventListener('resize', () => {
    // CSSのメディアクエリと連携する場合、ここでのJavaScript制御は不要なことも多い
    // 例：モバイルメニューが一定の幅以上で自動的に非表示になるCSSと組み合わせる
    if (hamburgerMenu.classList.contains('header__hamburger-menu-active')) {
      hamburgerMenu.classList.remove('header__hamburger-menu-active');
    }
  });
});

//==============================================//
// タブ
// $('#js-smarttab').smartTab({
//   enableUrlHash: false // タブidにもとづいたURLハッシュの付与を無効
// });

document.addEventListener('DOMContentLoaded', () => {
    // すべてのタブボタンを取得
    const tabButtons = document.querySelectorAll('.course__tab-button');
    // すべてのタブコンテンツを取得
    const tabContents = document.querySelectorAll('.course__tab-pane');

    // 各タブボタンにクリックイベントリスナーを設定
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 現在アクティブなタブボタンとコンテンツからactiveクラスを削除
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // クリックされたボタンにactiveクラスを追加
            button.classList.add('active');

            // クリックされたボタンのdata-tab属性から、対応するコンテンツのIDを取得
            const targetTabId = button.dataset.tab;
            // 対応するコンテンツ要素を取得し、activeクラスを追加して表示
            const targetTabContent = document.getElementById(targetTabId);
            if (targetTabContent) {
                targetTabContent.classList.add('active');
            }
        });
    });
});
