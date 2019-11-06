import axios from "axios";
import { v4 as randomString } from "uuid";

export async function checkUser() {
  let user = await axios.get(`/getuser`);
  if (user) {
    return user;
  } else {
    return 0;
  }
}

export async function imageUpload([file]) {
  const fileName = `${randomString()}-${file.name.replace(/\s/g, "-")}`;

  axios
    .get(`/api/sign-s3`, {
      params: {
        "fileName": fileName,
        "fileType": file.type
      }
    })
    .then(r => console.log(r));
}

