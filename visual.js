
const entries = [];

// map gsheet points in zradar script points 
points.forEach(point => {
  const temp = {};
  const rings = [ "Adopt", "Trial", "Assess", "Hold" ];
  const quadrants = ["Tools", "Languages & Frameworks", "Infrastructure", "Data"];
  temp.label = point.name;
  temp.ring = rings.indexOf(point.ring);
  temp.quadrant = quadrants.indexOf(point.quadrant);
  temp.ring = rings.indexOf(point.ring);
  temp.active = true;
  temp.moved = 0;
  entries.push(temp);
});


radar_visualization({
    svg_id: "radar",
    width: 1450,
    height: 1000,
    colors: {
      background: "#fff",
      grid: "#bbb",
      inactive: "#ddd"
    },
    title: "Westwing Tech Radar — 2022.04",
    quadrants: [
      { name: "Tools" },
      { name: "Languages & Frameworks" },
      { name: "Infrastructure" },
      { name: "Data" },
    ],
    rings: [
      { name: "ADOPT", color: "#93c47d" },
      { name: "TRIAL", color: "#93d2c2" },
      { name: "ASSESS", color: "#fbdb84" },
      { name: "HOLD", color: "#efafa9" }
    ],
    print_layout: true,
    // zoomed_quadrant: 0,
    //ENTRIES
    entries: entries
    //ENTRIES
  });