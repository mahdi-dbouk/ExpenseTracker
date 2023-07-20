const category = $("#category");
const project = $("#projected");
const actual = $("#actual");
const under_over = $("#under-over");
const add_btn = $("#addbutton");
let total_actual = 0;
let total_projected = 0;
let total_under_over = 0;

function calcTotal(project, actual, under_over, substract = false) {
  if (substract) {
    total_projected =
      parseFloat($("#total-projected").text()) - parseFloat(project);
    total_actual = parseFloat($("#total-actual").text()) - parseFloat(actual);
    total_under_over =
      parseFloat($("#total-under-over").text()) - parseFloat(under_over);
  } else {
    total_projected =
      parseFloat($("#total-projected").text()) + parseFloat(project.val());
    total_actual =
      parseFloat($("#total-actual").text()) + parseFloat(actual.val());
    total_under_over =
      parseFloat($("#total-under-over").text()) + parseFloat(under_over.val());
  }
}

function whenTableEmpty() {
  if ($(".row-data").length == 0) {
    $("#total-projected").text(0);
    $("#total-actual").text(0);
    $("#total-under-over").text(0);
  }
}

function appendTotal() {
  $("#total-projected").text(total_projected.toString().concat("$"));
  $("#total-actual").text(total_actual.toString().concat("$"));
  $("#total-under-over").text(total_under_over.toString().concat("$"));
}

function removeRow() {
  $(".delete-btn").click(function () {
    let columns = $(this).closest("tr");
    let vals = columns[0].innerText.split("\t");
    let project = vals[1].split()[0];
    let actual = vals[2].split()[0];
    let under_over = vals[3].split()[0];

    calcTotal(project, actual, under_over, true);

    appendTotal();

    $(this).closest("tr").remove();
    whenTableEmpty();
  });
}

function addRow() {
  add_btn.click(function () {
    if (category.val() && project.val() && actual.val() && under_over.val()) {
      let new_row = `<tr class="row-data">
              <td>${category.val()}</td>
              <td>${project.val()}$</td>
              <td>${actual.val()}$</td>
              <td>${under_over.val()}$</td>
              <td class="actions-cell">
              <button class="delete-btn">Delete</button>
              </td>
              </tr>`;

      calcTotal(project, actual, under_over);
      appendTotal();

      $("#expenses-totals").before(new_row);
      $("#new-row-form input").val("");
    }
    removeRow();
  });
}

function main() {
  addRow();
}

$(document).ready(function () {
  main();
});
