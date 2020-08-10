import json
states_data = []
reps_data = []


def getRep(state_district):
    "This gets the rep for each state object from the global states_data array"
    print("Getting rep for district: " + state_district)

    for rep in reps_data:
        if rep["District"] == state_district.replace("(at Large)", "at-large"):
            return rep
    print("Could not find " + state_district)
    return None


def getState(fip):
    "This gets the state object from the global states_data array"
    for state in states_data:
        if int(state["Numeric code"]) == int(fip):
            return state

    return None


if __name__ == '__main__':

    with open('../data/states.json') as states_file:
        states_data = json.load(states_file)

    with open('../data/us_representatives.json') as reps_file:
        reps_data = json.load(reps_file)

    districts_data = []
    new_districts_data = {
        "type": "FeatureCollection",
        "name": "tl_2019_us_cd116",
        "crs": {"type": "name", "properties": {"name": "urn:ogc:def:crs:OGC:1.3:CRS84"}},
        "features": []
    }

    with open('../data/congressional_districts.geojson') as districts_file:
        districts_data = json.load(districts_file)

    featureId = 1
    for feature in districts_data["features"]:
        fip = feature["properties"]["STATEFP"]
        state_object = getState(fip)

        if state_object is not None:
            new_feature = feature
            state_name = state_object["Name"]
            state_code = state_object["Alpha code"]
            district = feature["properties"]["NAMELSAD"].replace(
                "Congressional District ", "")
            rep = getRep(state_name + " " + district)
            new_feature["id"] = featureId
            new_feature["properties"]["STATENAME"] = state_name
            new_feature["properties"]["ALPHACODE"] = state_code
            new_feature["properties"]["REP"] = rep
            if rep is not None and rep["Party"] is not None:
                new_feature["properties"]["PARTY"] = rep["Party"]
            else:
                print("No party for rep: " + state_name + " " + district)

            new_districts_data["features"].append(feature)
            featureId = featureId + 1
    with open('../data/data.geojson', 'w') as outfile:
        json.dump(new_districts_data, outfile, indent=2)
