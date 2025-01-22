import axios from "axios";
import { BACKEND_URL } from "../env";
import { useEffect, useState } from "react";

export function ContentData() {
  const [content, setContent] = useState([]);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/content/user/content`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setContent(response.data.user);
      });
  }, []);

  console.log(content);

  return content;
}
