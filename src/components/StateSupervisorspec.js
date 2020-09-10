const Fields = {
  nameFields: [
    { name: "First Name", type: "text" },
    { name: "Middle Name", type: "text" },
    { name: "Last Name", type: "text" }
  ],

  idField: [{ name: "Supervisor ID", type: " number" }],

  DateofBirthandAge: [
    { name: "Address Line 1", type: "text" },
    { name: "Address Line 2", type: "text" }
  ],

  DateofJoiningAndYearsOfService: [
    { name: "Date of Joining", type: "date" },
    { name: "Years of Service", type: "date" }
  ],

  DesignationandSalaryField: [
    { name: "Designation", type: "text" },
    { name: "Salary", type: "number" }
  ],

  bankdetailsField: [
    { name: "Account number", type: "number" },
    { name: "IFSC code", type: "number" }
  ]
};

export default Fields;
