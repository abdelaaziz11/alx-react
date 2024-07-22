import $ from 'jquery';

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<button id="clickMe">Dashboard data for the students</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

let count = 0;

function updateCounter() {
    count++;
    $('#count').text(`${count} clicks on the button`);
}

$('#clickMe').on('click', _.debounce(updateCounter, 500));
