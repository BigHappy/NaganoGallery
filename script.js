var options = {
    valueNames : ['name', 'image'],
    page: 1,
    pagination: [{
        name: "pagination",
        paginationClass: "pagination",
        outerWindow: 2
    }, {
        paginationClass: "pagination",
        innerWindow: 3,
        left: 2,
        right: 4
    }]
};

var mentorList = new List('mentor-list', options);

$('#filter-cha-han').click(function() {
    mentorList.filter(function(item) {
        if (item.values().name == "チャーハン") {
            return true;
        } else {
            return false;
        }
    });
    return false;
});

$('#filter-taity').click(function() {
    mentorList.filter(function(item) {
        if (item.values().name == "たいてぃ") {
            return true;
        } else {
            return false;
        }
    });
    return false;
});

$('#filter-hemhem').click(function() {
    mentorList.filter(function(item) {
        if (item.values().name == "へむへむ") {
            return true;
        } else {
            return false;
        }
    });
    return false;
});

$('#filter-none').click(function() {
    mentorList.filter();
    return false;
});
