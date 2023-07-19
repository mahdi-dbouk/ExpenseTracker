$(document).ready(function(){
    main();
});

function main(){
    let category;
    let project;
    let actual;
    let under_over;
    let add_btn = $("#addbutton");
    add_btn.click(function(){
        category = $("#category");
        project = $("#projected");
        actual = $("#actual");
        under_over = $("#under-over");
        let new_row =  `<tr class="row-data">
            <td>${category.val()}</td>
            <td>${project.val()}</td>
            <td>${actual.val()}</td>
            <td>${under_over.val()}</td>
            <td class="actions-cell" id="actions">
            <a class="delete-btn" href="" id="delete">Delete</a>
            </td>
            </tr>`;

            $("#expenses-totals").before(new_row);

            $("#new-row-form input").val('');
        
    });
}