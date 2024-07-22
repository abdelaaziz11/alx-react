import $ from 'jquery';

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<button">Dashboard data for the students</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

let count = 0;

function updateCounter() {
    count++;
    $('#count').text(`${count} clicks on the button`);
}

$('button').on('click', _.debounce(updateCounter, 500));
