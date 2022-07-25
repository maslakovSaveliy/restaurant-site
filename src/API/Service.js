import axios from "axios";
export default class Service {
  static async sendMessage(formValues) {
    const UTFname = encodeURIComponent(formValues.name);
    const UTFsurname = encodeURIComponent(formValues.surname);
    const UTFdate = encodeURIComponent(formValues.date);
    const UTFnumber = encodeURIComponent(formValues.number);
    axios.get(
      `https://api.telegram.org/bot5530618039:AAHz04oS2G7n4s4xVHX3WLBZdV7n86wx4O0/sendMessage?chat_id=5434100705&text=${UTFname}%20${UTFsurname}%20${UTFdate}%20${UTFnumber}`
    );
  }
}
