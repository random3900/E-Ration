const Fields = {
  nameFields: [
    { name: "First Name", type: "text" },
    { name: "Middle Name", type: "text" },
    { name: "Last Name", type: "text" }
  ],

  emailFields: [{ name: "Email ID", type: "email" }],

  addrFields1: [
    { name: "Door Number", type: "text" },
    { name: "Street Name", type: "text" },
    { name: "City/Town/Village", type: "text" },
    { name: "Ward", type: "text" }
  ],

  addrFields2: [
    { name: "Zone", type: "text" },
    { name: "State", type: "text" },
    { name: "Pincode", type: "text" }
  ],

  cylinderCount: [{ name: "Number of Cylinders", type: "number" }],

  familyDetails: [
    { name: "Number of Adults", type: "number" },
    { name: "Number of Children", type: "number" }
  ],
  memberDetails: [
    { name: "Name", type: "text" },
    { name: "Age", type: "number" }
  ]
};

export default Fields;
