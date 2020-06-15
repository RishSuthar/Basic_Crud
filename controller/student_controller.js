var connection = require('../connection/connection');
var student = {};
var sql = '';

    student.loadStudentRegistration = function (req, res) {

        //sql query for fetch records
        sql = 'SELECT CourseId, Course FROM course';

        //fetch student records
        connection.query(sql, function (err, results) {
            if (err) {
                console.log("Error occured in loadStudentRegistration():" + err);
                return;
            }
            res.render('register_student.twig', {
                results
            });
        });

    },

    student.getStudentList = function (req, res) {

        //sql query for fetch records
        sql = 'SELECT StudentId, Name, DateOfBirth, Gender, Course FROM student';

        //fetch student records
        connection.query(sql, function (err, results) {
            if (err) {
                console.log("Error occured in getStudentList():" + err);
                return;
            }
            res.render('list_student.twig', {
                results
            });
        });
    },

    student.registerStudent = function (req, res) {

        //read data from request
        var studentData = {
            Name: req.param('name'),
            DateOfBirth: req.param('dob'),
            Gender: req.param('gender'),
            Course: req.param('course'),
            StudentId: req.param('id')
        }

        connection.query(studentData.StudentId ? "UPDATE student SET Name='"+studentData.Name+"', DateOfBirth='"+studentData.DateOfBirth+"', Gender='"+studentData.Gender+"', Course='"+studentData.Course+"' WHERE StudentId='"+studentData.StudentId+"'" :'INSERT INTO student SET ?', studentData, function (err, results) {
            if (err) {
                console.log("Error occured in registerStudent():" + err);
                return;
            }
            res.redirect('/listOfStudent');
        });
    },

    student.editStudent = function (req, res) {

        //fetch course records
        var course = {};
        connection.query('SELECT CourseId, Course FROM course', function (err, results) {
            if (err) {
                console.log("Error occured in loadStudentRegistration():" + err);
                return;
            }
            course = results;
        });

        connection.query("SELECT StudentId, Name, DateOfBirth, Gender, Course FROM student where StudentId='" + req.param('id') + "'", function (err, results) {
            if (err) {
                console.log("Error occured in editStudent():" + err);
                return;
            }
            res.render('edit.twig', { studentRecords: results, course: course });
        });
    },

    student.deleteStudent = function (req, res) {
        connection.query("DELETE FROM student where StudentId='"+req.param('id')+"'", function (err, results) {
            if (err) {
                console.log("Error occured in deleteStudent():" + err);
                return;
            }
            res.redirect('/listOfStudent');
        });
    }

module.exports = student;