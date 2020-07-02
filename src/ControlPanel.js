import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function ControlPanel(props) {
    let member = "";
    let district = "";
    let party = "";
    let education = "";
    let priorExperience = "";
    let assumedOffice = "";
    let residence = "";
    let born = "";

    if (props.hoveredDistrict && props.hoveredDistrict.properties.REP) {
        let rep = JSON.parse(props.hoveredDistrict.properties.REP);
        member = rep.Member;
        district = rep.District;
        party = rep.Party;
        education = rep.Education;
        priorExperience = rep["Prior experience"];
        assumedOffice = rep["Assumed office"];
        residence = rep.Residence;
        born = rep.Born;

        return (
            <div className="control-panel">
                <Row>
                    <Col xs={12}>
                        <div className="name">{member}</div>
                        <div className="value"><span className="font-weight-bold">District: </span> {district}</div>
                        <div className="value"><span className="font-weight-bold">Party: </span> {party}</div>
                        <div className="value"><span className="font-weight-bold">Education: </span> {education}</div>
                        <div className="value"><span className="font-weight-bold">Prior experience: </span> {rep["Prior experience"]}</div>
                        <div className="value"><span className="font-weight-bold">Assumed office: </span> {rep["Assumed office"]}</div>
                        <div className="value"><span className="font-weight-bold">Residence: </span> {residence}</div>
                        <div className="value"><span className="font-weight-bold">Born: </span> {born}</div>
                    </Col>
                </Row>
            </div>
        );
    }
    else {
        return (
            <div className="control-panel">
                <Row>
                    <Col xs={12}>
                        <div className="name">No member assigned</div>
                    </Col>
                </Row>
            </div>
        );
    }

}

export default ControlPanel;