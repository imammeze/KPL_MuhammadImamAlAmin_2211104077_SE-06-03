const fs = require("fs");

class TeamMembers_2211104077 {
  ReadJSON() {
    try {
      const data = fs.readFileSync("jurnal7_2_2211104077.json", "utf-8");
      const obj = JSON.parse(data);

      console.log("Team member list:");
      obj.members.forEach((member) => {
        const fullName = `${member.firstName} ${member.lastName}`;
        console.log(
          `${member.nim} ${fullName} (${member.age} ${member.gender})`
        );
      });
    } catch (error) {
      console.error(
        "Terjadi kesalahan saat membaca atau memproses file JSON:",
        error.message
      );
    }
  }
}

const team = new TeamMembers_2211104077();
team.ReadJSON();
