// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).on('click', '#edit-game', function() {
  editingGame = $(this).siblings('.game-item').data().id
  toggle();
});
