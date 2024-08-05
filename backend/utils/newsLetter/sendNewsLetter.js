import User from "../../models/UserModel.js";
import sendMail from "../sendMail.js";

const sendNewsLetter = async () => {
  try {
    const users = await User.find();
    // const topProducts = await Product.find().sort({ sales: -1 }).limit(5);
    const message = `this is news letter test mail`;

    users.forEach((user) => {
      sendMail({ email: user.email, subject: "News Letters", message });
    });
  } catch (error) {
    console.error("Error sending daily newsletter:", error);
  }
};

export default sendNewsLetter;
