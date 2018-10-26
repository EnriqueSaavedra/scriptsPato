$().ready(function() {
    $("#menu-admin-add").click(function() {
        return !$("#menu-admin-1 option:selected").remove().appendTo("#menu-admin-2")
    });
    $("#menu-admin-remove").click(function() {
        return !$("#menu-admin-2 option:selected").remove().appendTo("#menu-admin-1")
    });
    $("#user-admin-add").click(function() {
        return !$("#user-admin-1 option:selected").remove().appendTo("#user-admin-2")
    });
    $("#user-admin-remove").click(function() {
        return !$("#user-admin-2 option:selected").remove().appendTo("#user-admin-1")
    });
    $("#menu-org-add").click(function() {
        return !$("#menu-org-1 option:selected").remove().appendTo("#menu-org-2")
    });
    $("#menu-org-remove").click(function() {
        return !$("#menu-org-2 option:selected").remove().appendTo("#menu-org-1")
    });
    $("#user-org-add").click(function() {
        return !$("#user-org-1 option:selected").remove().appendTo("#user-org-2")
    });
    $("#user-org-remove").click(function() {
        return !$("#user-org-2 option:selected").remove().appendTo("#user-org-1")
    })
})
$("#reclamo").on("show.bs.modal", function(e) {
    var t = $(e.relatedTarget);
    var n = t.data("whatever");
    var r = $(this);
    r.find(".modal-body #recipient-name").val(n)
})
$(document).ready(function() {
    $("#runPersona").Rut({
        format_on: "keyup"
    });
});
$(document).ready(function() {
    $("#clearall").click(function() {
        $("#consulta").removeClass("hide");
        $("#consultado").addClass("hide");
        $("#clearall").addClass("hide");
    });
});