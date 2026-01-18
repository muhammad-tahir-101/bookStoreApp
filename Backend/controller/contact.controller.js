import Contact from "../model/contact.model.js";

export const createContact = async (req, res) => {
  try {
    const { fullname, email, message } = req.body;
    console.log("REQ BODY 👉", req.body); // <- Add this
    console.log("HEADERS 👉", req.headers); // <- Check Content-Type
    console.log("METHOD 👉", req.method);

    // validation
    if (!fullname || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const contact = await Contact.create({
      fullname,
      email,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Message sent Successfully",
      data: contact,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};
