import React, { useState } from 'react';

const StudentApp = () => {
    // Khởi tạo mảng sinh viên
    const [students, setStudents] = useState([
        { id: 1, name: 'Linh', age: 26 },
        { id: 2, name: 'Nhân', age: 27 },
        { id: 3, name: 'Phúc', age: 28 },
    ]);
    
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [editId, setEditId] = useState(null);

    const addStudent = () => {
        const newStudent = { id: Date.now(), name, age: parseInt(age) };
        setStudents([...students, newStudent]);
        setName('');
        setAge('');
    };

    const editStudent = (id) => {
        const student = students.find(s => s.id === id);
        setName(student.name);
        setAge(student.age);
        setEditId(id);
    };

    const updateStudent = () => {
        const updatedStudents = students.map(student => 
            student.id === editId ? { ...student, name, age: parseInt(age) } : student
        );
        setStudents(updatedStudents);
        setName('');
        setAge('');
        setEditId(null);
    };

    const deleteStudent = (id) => {
        setStudents(students.filter(student => student.id !== id));
    };

    return (
        <div>
            <h1>Danh sách sinh viên</h1>
            <ul>
                {students.map(student => (
                    <li key={student.id}>
                        {student.name} - {student.age} tuổi
                        <button onClick={() => editStudent(student.id)}>Sửa</button>
                        <button onClick={() => deleteStudent(student.id)}>Xóa</button>
                    </li>
                ))}
            </ul>
            <h2>{editId ? 'Cập nhật sinh viên' : 'Thêm sinh viên'}</h2>
            <input 
                type="text" 
                placeholder="Tên sinh viên" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
            />
            <input 
                type="number" 
                placeholder="Tuổi" 
                value={age} 
                onChange={(e) => setAge(e.target.value)} 
            />
            <button onClick={editId ? updateStudent : addStudent}>
                {editId ? 'Cập nhật' : 'Thêm'}
            </button>
        </div>
    );
};

export default StudentApp;
