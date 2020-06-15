var route = require('express').Router();
var student_controller = require('../controller/student_controller');

route.get('/', function(req, res) {
    student_controller.loadStudentRegistration(req, res);
});

route.post('/signup', function(req, res) {
    student_controller.registerStudent(req, res);
});

route.get('/edit/:id/edit', function(req, res) {
    student_controller.editStudent(req, res);
});

route.get('/listOfStudent', function(req, res) {
    student_controller.getStudentList(req, res);
});

route.get('/delete/:id/delete', function(req, res) {
    student_controller.deleteStudent(req, res);
});

module.exports = route;