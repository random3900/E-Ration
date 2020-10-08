const Fields = {
  nameFields: [
    { name: "First Name", type: "text" },
    { name: "Middle Name", type: "text" },
    { name: "Last Name", type: "text" }
  ],

  addrFields1: [
    { name: "Address Line 1", type: "text" },
    { name: "Address Line 2", type: "text" }
  ],

  addrFields2: [
    { name: "City/Town/Village", type: "text" },
    { name: "State", type: "text" },
    { name: "Pincode", type: "text" }
  ],

  timeField: [
    { name: "Opening Time", type: "time" },
    { name: "Closing Time", type: "time" }
  ],

  noofcustomersField: [{ name: "No.of customers", type: "number" }],

  phonenumberField: [
    { name: "Phone number 1", type: "number" },
    { name: "Phone number 2", type: "number" }
  ],

  bankdetailsField: [
    { name: "Account number", type: "text" },
    { name: "IFSC code", type: "text" }
  ],

  idField: [
    { name: "SS ID", type: "text" },
    { name: "FPS ID", type: "text" },
    { name: "Staff ID", type: "text" }
  ]
};

export default Fields;
