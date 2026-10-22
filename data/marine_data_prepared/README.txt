Australian marine wildlife data preparation

Scope
20 selected species across whales, dolphins, seals and sea lions, turtles and sharks. This is a selected-species story, not a census of all Australian marine wildlife. Orcas are grouped with dolphins.

Sources
1. User-supplied OBIS export, Australian area ID 8 and six taxonomic groups, start date 2015-01-01. Original query and validation counts are in validation_counts.json. Original provider citations and dataset licences are preserved in OBIS_source_citations.html. Match dataset_id in the observation file to the original source citations. Retain the original ZIP.
2. MegaMove research supplementary tables, https://doi.org/10.5061/dryad.x95x69ptv . Body measurements use Table S3; assessments and threat evidence use Table S4. Full source references are preserved in research_references.csv. The body measurements refer to adults unless otherwise specified by the research source; turtle length conventions can differ from mammal and shark total length and must be explained before comparison.

Files
human_observations.csv: one row per retained human-observation record. Includes original OBIS ID and dataset ID. Coordinate precision is reduced to five decimal places for file size; this does not establish positional accuracy.
annual_observation_counts.csv: recording totals by species and year. 2026 is incomplete. Lower recent totals do not demonstrate population decline, because observation effort and publication lag vary.
monthly_observation_counts.csv: recording totals pooled by calendar month. Shows recording seasonality, not proven migration. No effort adjustment has been applied.
observation_type_counts.csv: counts for all retained observation types. Machine observations are tracking detections, not unique animals.
geographic_grid_summary.csv: one-degree geographic cells, with record counts and the number of selected species recorded. Cell areas vary with latitude. Blank or absent cells mean no retained records, not confirmed absence. These data describe recorded species richness and recording coverage, not total biodiversity or animal density.
species_body_measurements.csv: reported average measurements in long format, retaining female, male and combined-sex values separately. No averages across sexes have been invented. Some original literature references are old or secondary and require review before use.
published_global_assessments_RECHECK.csv: historical assessments as published in the research. NOT a verified current-status table. The green turtle entry is known to be outdated; the IUCN specialist group lists a 2025 global Least Concern assessment. Verify current statuses and population trends species by species before final charts. Keep Australian EPBC legal categories separate from global IUCN categories.
published_threat_evidence.csv: original threat codes with their meanings. These indicate documented evidence, not measured threat severity. A dash is 'no threat indicated in source', not proof of no threat. Literature and expert supplements remain distinguishable from IUCN indications. Historical threat evidence has not been updated to the present.

Filtering
Only the selected species, valid geographic coordinates, single parseable event dates in 2015-2026, and records without an explicit 'No use without permission' restriction are included in derived observation tables. Date intervals are excluded from these working tables because assigning them to one month or year would be misleading. Original records are retained in the source ZIP. Source-level licences remain applicable even where the per-record licence field is blank.
Rows sharing coordinates, species and dates were not automatically removed: multiple valid records can share those attributes. Original OBIS IDs in the retained human table are unique. Counts are labelled record counts; no claim of unique encounters or animals is made.

Validation
Annual, monthly and geographic record-count totals reconcile to the retained human observations. All 20 selected species have retained human observations and a published global assessment. The research speed field is deliberately omitted: it is a filtering threshold, not a comparable observed swimming speed.

Remaining work before final publication
Verify contemporary species assessments and Australian occurrence plausibility. Review measurement definitions and secondary references. Review source-specific attribution and licensing against the intended published use. Obtain and cite base-map boundary data. Finalise and validate three distinct map idioms and the advanced-chart plan against the assignment rubric. No final chart design or HD compliance is claimed by this data package.
