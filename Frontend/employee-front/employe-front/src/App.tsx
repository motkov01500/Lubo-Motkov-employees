import React from "react";
import axios from "axios";

export default class EmployeeList extends React.Component {
  state = {
    employees: [],
  };

  componentDidMount() {
    var formData = document.getElementById("one");
    var imagefile = document.querySelector("#file");
    // formData.append("csv", imagefile.files[0]);
    axios.post("upload_file", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  render() {
    return (
      <div>
        <form
          action="POST"
          method="HTTP_POST"
          encType="multipart/form-data"
          id="form"
        >
          <input type="file" name="file" id="file" />
          <input type="submit" value="upload" />
        </form>
        <div id="one"></div>
      </div>
    );
  }
}
