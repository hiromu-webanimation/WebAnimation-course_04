jQuery(function ($) {
  // タブ切り替え機能
  $('.top-service__tab').on('click', function () {
    var targetTab = $(this).attr('data-tab');

    // タブのアクティブ状態を切り替え
    $('.top-service__tab').removeClass('top-service__tab--active');
    $(this).addClass('top-service__tab--active');

    // パネルの表示を切り替え
    $('.top-service__panel').removeClass('top-service__panel--active');
    $('.top-service__panel[data-panel="' + targetTab + '"]').addClass('top-service__panel--active');
  });
});
