vegaEmbed("#body-length-chart", "js/body-length.vl.json", {
  actions: false
}).catch(console.error);

vegaEmbed("#mass-comparison-chart", "js/mass-comparison.vl.json", {
  actions: false
}).catch(console.error);

vegaEmbed("#length-mass-chart", "js/length-mass.vl.json", {
  actions: false
}).catch(console.error);

vegaEmbed("#observation-map", "js/observation-map.vl.json", {
  actions: false,
  renderer: "canvas"
}).catch(console.error);

vegaEmbed("#species-grid-map", "js/species-grid-map.vl.json", {
  actions: false
}).catch(console.error);

vegaEmbed(
  "#observation-totals-map",
  "js/observation-totals-map.vl.json",
  { actions: false }
).catch(console.error);

vegaEmbed("#monthly-heatmap", "js/monthly-heatmap.vl.json", {
  actions: false
}).catch(console.error);

vegaEmbed(
  "#annual-observations-chart",
  "js/annual-observations.vl.json",
  { actions: false }
).catch(console.error);

vegaEmbed("#threats-chart", "js/threats.vl.json", {
  actions: false
}).catch(console.error);

vegaEmbed(
  "#conservation-status-chart",
  "js/conservation-status.vg.json",
  { actions: false }
).catch(console.error);

vegaEmbed(
  "#population-trend-chart",
  "js/population-trend.vl.json",
  { actions: false }
).catch(console.error);