$(document).on('click', '.js-lineprof-file', function(e) {
  $(this).parents('.heading').next('div').toggle();
  e.preventDefault();
  return false;
});

$(document).on('click', '.js-lineprof-modal-toggle', function(e) {
  const toggle = e.target;
  $('.peek-rblineprof-modal').toggle();

  if (toggle.textContent === 'hide') {
    toggle.textContent = 'show';
  } else {
    toggle.textContent = 'hide';
  }
});
