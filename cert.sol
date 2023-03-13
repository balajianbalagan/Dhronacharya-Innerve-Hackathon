//SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.5.0 < 0.9.0;

contract Cert{
    struct Student{
        string uname;
        uint uid;
    }

    struct IssuingAuthority{
        string name; 
        bool authorised; 
        uint whom;
    }

    address public owner; 
    string public CourseName; 
    
    mapping(address => IssuingAuthority) public issuingAuthority;  
    Student[] public students;
    uint public totalCertifications; 

modifier ownerOnly(){ 
        require(msg.sender == owner); 
        _;
    }
    function startCourse(string memory _courseName) public{ 
        owner = msg.sender; 
        CourseName = _courseName; 
    }

    function addStudent(string memory _studentName )ownerOnly public{ 
        students.push(Student(_studentName, 0));
    }

    function authorizeIssuer(address _issuingAuthorityAddress) ownerOnly public{ 
        issuingAuthority[_issuingAuthorityAddress].authorised = true; 
    }
    function getNumStudents() public view returns(uint){ 
        return students.length; 
    }

    function issueCertificate(uint studentIndex) public{ 
        require(issuingAuthority[msg.sender].authorised); 
        require(students[studentIndex].uid==0);
        issuingAuthority[msg.sender].whom = studentIndex; 
        students[studentIndex].uid=1;
        totalCertifications++;
    }

    function getTotalCertifications()public view returns(uint) {
        return totalCertifications;
    }
}
